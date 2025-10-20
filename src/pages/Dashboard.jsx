import React, { useContext, useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Card,
  CardContent,
  CardActions,
  Chip,
  useTheme,
  useMediaQuery,
  Container,
  Avatar,
  LinearProgress,
  Divider,
  IconButton,
  Tooltip,
  alpha,
  Fade,
  Grow,
  Slide,
  CircularProgress
} from '@mui/material';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { useToast } from '../components/common/Toast';
import AnimatedContainer, { StaggeredContainer, HoverCard } from '../components/common/AnimatedContainer';
import {
  Add as AddIcon,
  Description as DescriptionIcon,
  Business as BusinessIcon,
  TrendingUp as TrendingUpIcon,
  Schedule as ScheduleIcon,
  People as PeopleIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Download as DownloadIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { CompanyContext } from '../context/CompanyContext';
import { DocumentContext } from '../context/DocumentContext';
import { AuthContext } from '../context/AuthContext';
import PageHeader from '../components/common/PageHeader';

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const navigate = useNavigate();
  const { companies, selectedCompany, selectCompany } = useContext(CompanyContext);
  const { documentTypes } = useContext(DocumentContext);
  const { currentUser } = useContext(AuthContext);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  const [selectedDocumentType, setSelectedDocumentType] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { showSuccess, showError, showInfo } = useToast();

  // Mock dashboard data
  const dashboardStats = {
    totalDocuments: 156,
    documentsThisMonth: 24,
    totalCompanies: companies.length,
    activeUsers: 12,
    recentDocuments: [
      { id: 1, name: 'Offer Letter - John Doe', type: 'Offer Letter', company: 'Tech Solutions', date: '2 hours ago', status: 'completed' },
      { id: 2, name: 'Employment Verification - Jane Smith', type: 'Employment Verification', company: 'Digital Corp', date: '4 hours ago', status: 'completed' },
      { id: 3, name: 'Experience Letter - Mike Johnson', type: 'Experience Letter', company: 'Software Ltd', date: '1 day ago', status: 'draft' },
      { id: 4, name: 'Salary Certificate - Sarah Wilson', type: 'Salary Certificate', company: 'Data Analytics', date: '2 days ago', status: 'completed' }
    ],
    quickActions: [
      { title: 'Generate Offer Letter', description: 'Create professional offer letters', icon: <DescriptionIcon />, color: theme.palette.primary.main, action: () => navigate('/document/create?type=offer-letter') },
      { title: 'Employment Verification', description: 'Generate employment verification documents', icon: <BusinessIcon />, color: theme.palette.success.main, action: () => navigate('/document/create?type=employment-verification') },
      { title: 'Manage Companies', description: 'Add or edit company information', icon: <BusinessIcon />, color: theme.palette.warning.main, action: () => navigate('/company-management') },
      { title: 'View Analytics', description: 'Check usage statistics and reports', icon: <TrendingUpIcon />, color: theme.palette.secondary.main, action: () => navigate('/analytics') }
    ]
  };

  const handleCompanyChange = (event) => {
    const companyId = event.target.value;
    selectCompany(companyId);
  };

  const handleDocumentTypeChange = (event) => {
    setSelectedDocumentType(event.target.value);
  };

  const handleGenerateDocument = async () => {
    if (!selectedCompany || !selectedDocumentType) {
      showError('Please select both a company and document type');
      return;
    }

    setIsGenerating(true);
    showInfo('Preparing document generation...');

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Navigate to document creation page with selected parameters
      navigate('/documents/create', {
        state: {
          companyId: selectedCompany.id,
          documentType: selectedDocumentType
        }
      });
      
      showSuccess(`Redirecting to create ${selectedDocumentType} for ${selectedCompany.name}`);
    } catch (error) {
      showError('Failed to initialize document generation. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'success';
      case 'draft': return 'warning';
      case 'pending': return 'info';
      default: return 'default';
    }
  };

  if (!currentUser) {
    return null; // Will redirect to login
  }

  return (
    <AnimatedContainer animation="fade" duration={500}>
      <Container 
        maxWidth={isMobile ? 'sm' : isTablet ? 'md' : 'xl'} 
        sx={{ 
          py: isMobile ? 2 : isTablet ? 3 : 4,
          px: isMobile ? 1 : isTablet ? 2 : 3
        }}
      >
      <PageHeader 
        title="Document Generator Dashboard" 
        subtitle="Create professional documents with company branding"
      />
      
      {/* Dashboard Statistics */}
        <StaggeredContainer staggerDelay={150}>
          <Grid container spacing={isMobile ? 2 : 3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            p: isMobile ? 2 : 3, 
            textAlign: 'center', 
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`, 
            color: 'white',
            minHeight: isMobile ? 120 : 140
          }}>
            <DescriptionIcon sx={{ fontSize: isMobile ? 32 : 40, mb: 1 }} />
            <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontWeight: 'bold', mb: 1 }}>
              {dashboardStats.totalDocuments}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Total Documents
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            p: isMobile ? 2 : 3, 
            textAlign: 'center', 
            background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`, 
            color: 'white',
            minHeight: isMobile ? 120 : 140
          }}>
            <TrendingUpIcon sx={{ fontSize: isMobile ? 32 : 40, mb: 1 }} />
            <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontWeight: 'bold', mb: 1 }}>
              {dashboardStats.documentsThisMonth}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              This Month
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            p: isMobile ? 2 : 3, 
            textAlign: 'center', 
            background: `linear-gradient(135deg, ${theme.palette.info.main} 0%, ${theme.palette.info.dark} 100%)`, 
            color: 'white',
            minHeight: isMobile ? 120 : 140
          }}>
            <BusinessIcon sx={{ fontSize: isMobile ? 32 : 40, mb: 1 }} />
            <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontWeight: 'bold', mb: 1 }}>
              {dashboardStats.totalCompanies}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Companies
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ 
            p: isMobile ? 2 : 3, 
            textAlign: 'center', 
            background: `linear-gradient(135deg, ${theme.palette.success.main} 0%, ${theme.palette.success.dark} 100%)`, 
            color: 'white',
            minHeight: isMobile ? 120 : 140
          }}>
            <PeopleIcon sx={{ fontSize: isMobile ? 32 : 40, mb: 1 }} />
            <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontWeight: 'bold', mb: 1 }}>
              {dashboardStats.activeUsers}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Active Users
            </Typography>
          </Card>
        </Grid>
          </Grid>
        </StaggeredContainer>

      <Grid container spacing={isMobile ? 2 : 4}>
        {/* Quick Actions */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: isMobile ? 2 : 3, mb: isMobile ? 2 : 4 }}>
            <Typography variant={isMobile ? "h6" : "h5"} sx={{ mb: 3, fontWeight: 'bold', color: 'primary.main' }}>
              Quick Actions
            </Typography>
            <Grid container spacing={isMobile ? 2 : 3}>
              {dashboardStats.quickActions.map((action, index) => (
                <Grid item xs={12} sm={6} md={6} key={index}>
                  <HoverCard 
                    elevation={2}
                    hoverElevation={12}
                    onClick={action.action}
                  >
                    <Card 
                      sx={{ 
                        p: isMobile ? 2 : 3, 
                        cursor: 'pointer',
                        minHeight: isMobile ? 100 : 120,
                        boxShadow: 'none',
                        backgroundColor: 'transparent'
                      }}
                    >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: isMobile ? 1 : 2, flexDirection: isMobile ? 'column' : 'row', textAlign: isMobile ? 'center' : 'left' }}>
                      <Avatar sx={{ bgcolor: action.color, mr: isMobile ? 0 : 2, mb: isMobile ? 1 : 0, width: isMobile ? 40 : 48, height: isMobile ? 40 : 48 }}>
                        {action.icon}
                      </Avatar>
                      <Typography variant={isMobile ? "subtitle1" : "h6"} sx={{ fontWeight: 'bold' }}>
                        {action.title}
                      </Typography>
                    </Box>
                    <Typography variant={isMobile ? "caption" : "body2"} color="text.secondary" sx={{ textAlign: isMobile ? 'center' : 'left' }}>
                      {action.description}
                    </Typography>
                    </Card>
                  </HoverCard>
                </Grid>
              ))}
            </Grid>
          </Paper>

          {/* Document Generation Form */}
          <Paper sx={{ p: isMobile ? 2 : 3 }}>
            <Typography variant={isMobile ? "h6" : "h5"} sx={{ mb: 3, fontWeight: 'bold', color: 'primary.main' }}>
              Generate Document
            </Typography>
            <Grid container spacing={isMobile ? 2 : 3}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth size={isMobile ? "small" : "medium"}>
                  <InputLabel>Select Company</InputLabel>
                  <Select
                    value={selectedCompany?.id || ''}
                    onChange={handleCompanyChange}
                    label="Select Company"
                  >
                    {companies.map((company) => (
                      <MenuItem key={company.id} value={company.id}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <img 
                            src={company.logo} 
                            alt={company.name}
                            style={{ width: 24, height: 24, marginRight: 8, objectFit: 'contain' }}
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                          {company.name}
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth size={isMobile ? "small" : "medium"}>
                  <InputLabel>Document Type</InputLabel>
                  <Select
                    value={selectedDocumentType}
                    onChange={handleDocumentTypeChange}
                    label="Document Type"
                    disabled={!selectedCompany}
                  >
                    {documentTypes.map((docType) => (
                      <MenuItem key={docType.id} value={docType.id}>
                        {docType.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button 
                  variant="contained" 
                  size={isMobile ? "medium" : "large"}
                  onClick={handleGenerateDocument}
                  disabled={!selectedCompany || !selectedDocumentType || isGenerating}
                  startIcon={isGenerating ? <CircularProgress size={20} color="inherit" /> : <AddIcon />}
                  fullWidth={isMobile}
                  sx={{ 
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                      transform: isGenerating ? 'none' : 'translateY(-2px)',
                      boxShadow: isGenerating ? 'none' : '0 6px 20px rgba(25, 118, 210, 0.4)'
                    },
                    '&:disabled': {
                      opacity: 0.7,
                      cursor: 'not-allowed'
                    }
                  }}
                >
                  {isGenerating ? 'Preparing...' : 'Generate Document'}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Recent Documents */}
        <Grid item xs={12} md={4}>
          <AnimatedContainer animation="slide" direction="left" delay={300} duration={500}>
            <Paper sx={{ p: isMobile ? 2 : 3 }}>
            <Typography variant={isMobile ? "h6" : "h5"} sx={{ mb: 3, fontWeight: 'bold', color: 'primary.main' }}>
              Recent Documents
            </Typography>
            <Box sx={{ maxHeight: isMobile ? 300 : 400, overflowY: 'auto' }}>
              {dashboardStats.recentDocuments.map((doc, index) => (
                <Box key={doc.id}>
                  <Box sx={{ py: isMobile ? 1.5 : 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1, flexDirection: isMobile ? 'column' : 'row' }}>
                      <Typography variant={isMobile ? "body2" : "subtitle2"} sx={{ fontWeight: 'bold', flex: 1, mb: isMobile ? 0.5 : 0 }}>
                        {doc.name}
                      </Typography>
                      <Chip 
                        label={doc.status} 
                        size="small" 
                        color={getStatusColor(doc.status)}
                        sx={{ ml: isMobile ? 0 : 1, alignSelf: isMobile ? 'flex-start' : 'center' }}
                      />
                    </Box>
                    <Typography variant={isMobile ? "caption" : "body2"} color="text.secondary" sx={{ mb: 1 }}>
                      {doc.type} • {doc.company}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 1 : 0 }}>
                      <Typography variant="caption" color="text.secondary">
                        {doc.date}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 0.5 }}>
                        <Tooltip title="View">
                          <IconButton size={isMobile ? "small" : "small"}>
                            <VisibilityIcon fontSize={isMobile ? "small" : "small"} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit">
                          <IconButton size={isMobile ? "small" : "small"}>
                            <EditIcon fontSize={isMobile ? "small" : "small"} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Download">
                          <IconButton size={isMobile ? "small" : "small"}>
                            <DownloadIcon fontSize={isMobile ? "small" : "small"} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </Box>
                  </Box>
                  {index < dashboardStats.recentDocuments.length - 1 && <Divider />}
                </Box>
              ))}
            </Box>
            </Paper>
          </AnimatedContainer>
        </Grid>
      </Grid>
      </Container>
    </AnimatedContainer>
  );
};

export default Dashboard;