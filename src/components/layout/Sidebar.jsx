import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery,
  Collapse,
  Chip
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Description as DocumentIcon,
  Business as CompanyIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ExpandLess,
  ExpandMore,
  Add as AddIcon,
  Visibility as PreviewIcon,
  Analytics as AnalyticsIcon
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCompany } from '../../context/CompanyContext';

const drawerWidth = 280;
const collapsedWidth = 72;

const Sidebar = ({ open, onToggle, variant = 'permanent' }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, logout } = useAuth();
  const { selectedCompany } = useCompany();
  const [documentsOpen, setDocumentsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    {
      text: 'Dashboard',
      icon: <DashboardIcon />,
      path: '/dashboard',
      color: '#1976d2'
    },
    {
      text: 'Documents',
      icon: <DocumentIcon />,
      color: '#2e7d32',
      submenu: [
        {
          text: 'Create Document',
          icon: <AddIcon />,
          path: '/documents/create'
        },
        {
          text: 'Preview Document',
          icon: <PreviewIcon />,
          path: '/documents/preview'
        }
      ]
    },
    {
      text: 'Company Management',
      icon: <CompanyIcon />,
      path: '/company-management',
      color: '#ed6c02'
    },
    {
      text: 'Analytics',
      icon: <AnalyticsIcon />,
      path: '/analytics',
      color: '#9c27b0'
    },
    {
      text: 'Profile',
      icon: <PersonIcon />,
      path: '/profile',
      color: '#d32f2f'
    },
    {
      text: 'Settings',
      icon: <SettingsIcon />,
      path: '/settings',
      color: '#757575'
    }
  ];

  const isActive = (path) => location.pathname === path;

  const handleDocumentsClick = () => {
    setDocumentsOpen(!documentsOpen);
  };

  const drawerContent = (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(180deg, #1e3c72 0%, #2a5298 100%)',
        color: 'white'
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: open ? 'space-between' : 'center',
          minHeight: 64
        }}
      >
        {open && (
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #fff 30%, #e3f2fd 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            DocGen Pro
          </Typography>
        )}
        {!isMobile && (
          <IconButton
            onClick={onToggle}
            sx={{ color: 'white' }}
          >
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        )}
      </Box>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)' }} />

      {/* User Info */}
      {open && (
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar
              sx={{
                bgcolor: 'rgba(255,255,255,0.2)',
                color: 'white',
                mr: 2,
                width: 48,
                height: 48
              }}
            >
              {currentUser?.name?.charAt(0) || 'U'}
            </Avatar>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {currentUser?.name || 'User'}
              </Typography>
              <Chip
                label={currentUser?.role || 'User'}
                size="small"
                sx={{
                  bgcolor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  fontSize: '0.75rem'
                }}
              />
            </Box>
          </Box>
          {selectedCompany && (
            <Box
              sx={{
                p: 1.5,
                bgcolor: 'rgba(255,255,255,0.1)',
                borderRadius: 1,
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              <Typography variant="caption" sx={{ opacity: 0.8 }}>
                Active Company
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {selectedCompany.shortName || selectedCompany.name}
              </Typography>
            </Box>
          )}
        </Box>
      )}

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)' }} />

      {/* Navigation Menu */}
      <List sx={{ flexGrow: 1, px: 1 }}>
        {menuItems.map((item) => (
          <React.Fragment key={item.text}>
            <ListItem disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={item.submenu ? handleDocumentsClick : () => navigate(item.path)}
                sx={{
                  borderRadius: 2,
                  mx: 1,
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  bgcolor: isActive(item.path) ? 'rgba(255,255,255,0.15)' : 'transparent',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.1)'
                  },
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: isActive(item.path) ? '#fff' : item.color || 'rgba(255,255,255,0.8)'
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {open && (
                  <>
                    <ListItemText
                      primary={item.text}
                      sx={{
                        '& .MuiListItemText-primary': {
                          fontWeight: isActive(item.path) ? 600 : 400,
                          fontSize: '0.875rem'
                        }
                      }}
                    />
                    {item.submenu && (
                      documentsOpen ? <ExpandLess /> : <ExpandMore />
                    )}
                  </>
                )}
              </ListItemButton>
            </ListItem>
            {item.submenu && open && (
              <Collapse in={documentsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.submenu.map((subItem) => (
                    <ListItem key={subItem.text} disablePadding sx={{ pl: 2 }}>
                      <ListItemButton
                        onClick={() => navigate(subItem.path)}
                        sx={{
                          borderRadius: 2,
                          mx: 1,
                          minHeight: 40,
                          bgcolor: isActive(subItem.path) ? 'rgba(255,255,255,0.15)' : 'transparent',
                          '&:hover': {
                            bgcolor: 'rgba(255,255,255,0.1)'
                          }
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 2,
                            justifyContent: 'center',
                            color: isActive(subItem.path) ? '#fff' : 'rgba(255,255,255,0.7)'
                          }}
                        >
                          {subItem.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={subItem.text}
                          sx={{
                            '& .MuiListItemText-primary': {
                              fontWeight: isActive(subItem.path) ? 600 : 400,
                              fontSize: '0.8rem'
                            }
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>

      {/* Logout Button */}
      <Box sx={{ p: 1 }}>
        <ListItemButton
          onClick={handleLogout}
          sx={{
            borderRadius: 2,
            mx: 1,
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            bgcolor: 'rgba(244, 67, 54, 0.1)',
            border: '1px solid rgba(244, 67, 54, 0.3)',
            '&:hover': {
              bgcolor: 'rgba(244, 67, 54, 0.2)'
            }
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
              color: '#f44336'
            }}
          >
            <LogoutIcon />
          </ListItemIcon>
          {open && (
            <ListItemText
              primary="Logout"
              sx={{
                '& .MuiListItemText-primary': {
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  color: '#f44336'
                }
              }}
            />
          )}
        </ListItemButton>
      </Box>
    </Box>
  );

  if (isMobile) {
    return (
      <Drawer
        variant="temporary"
        open={open}
        onClose={onToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            border: 'none'
          }
        }}
      >
        {drawerContent}
      </Drawer>
    );
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : collapsedWidth,
          boxSizing: 'border-box',
          border: 'none',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
          })
        }
      }}
    >
      {drawerContent}
    </Drawer>
  );
};

export default Sidebar;