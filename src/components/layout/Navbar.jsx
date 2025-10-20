import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCompany } from '../../context/CompanyContext';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const { selectedCompany } = useCompany();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Document Generator
          </Typography>

          {currentUser && (
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={() => navigate('/dashboard')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Dashboard
              </Button>
              <Button
                onClick={() => navigate('/documents/create')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Generate Document
              </Button>
              <Button
                onClick={() => navigate('/company-management')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Company Management
              </Button>
            </Box>
          )}

          <Box sx={{ flexGrow: 0, ml: 'auto', display: 'flex', alignItems: 'center' }}>
            {selectedCompany && (
              <Typography variant="subtitle1" sx={{ mr: 2 }}>
                {selectedCompany.name}
              </Typography>
            )}
            
            {currentUser ? (
              <>
                <Typography variant="subtitle2" sx={{ mr: 2 }}>
                  {currentUser.name}
                </Typography>
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <Button color="inherit" onClick={() => navigate('/login')}>
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;