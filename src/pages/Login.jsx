import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Alert,
  useMediaQuery,
  useTheme,
  CircularProgress
} from '@mui/material';
import { useToast } from '../components/common/Toast';
import AnimatedContainer from '../components/common/AnimatedContainer';
import { useAuth } from "../context/AuthContext";
import { validateForm } from '../utils/validationUtils';
import ResponsiveContainer from '../components/common/ResponsiveContainer';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { showSuccess, showError } = useToast();
  const { login } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setFormErrors({});
    
    // Define validation rules
    const validationRules = {
      username: {
        required: true,
        message: 'Username is required'
      },
      password: {
        required: true,
        message: 'Password is required'
      }
    };
    
    // Validate form
    const formData = { username, password };
    const errors = validateForm(formData, validationRules);
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setError('Please correct the errors below');
      showError('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const success = login(username, password);
      if (success) {
        showSuccess('Login successful! Redirecting to dashboard...');
        setTimeout(() => {
          navigate('/dashboard');
        }, 500);
      } else {
        setError('Invalid username or password');
        showError('Invalid credentials. Please check your username and password.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred during login. Please try again.');
      showError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleInputChange = (field, value) => {
    if (field === 'username') {
      setUsername(value);
    } else if (field === 'password') {
      setPassword(value);
    }
    
    // Clear error for this field if it exists
    if (formErrors[field]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
    
    // Clear general error if any field is changed
    if (error) {
      setError('');
    }
  };

  return (
    <AnimatedContainer animation="fade" duration={600}>
      <ResponsiveContainer sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <AnimatedContainer animation="slide" direction="up" delay={200} duration={500}>
        <Paper
          elevation={6}
          sx={{
            width: isMobile ? '90%' : '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: isMobile ? 3 : 4,
            borderRadius: 2
          }}
        >
        <Typography component="h1" variant={isMobile ? "h5" : "h4"} sx={{ mb: 2 }}>
          Document Generator Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, width: '100%' }}>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => handleInputChange('username', e.target.value)}
            error={!!formErrors.username}
            helperText={formErrors.username}
            size={isMobile ? "small" : "medium"}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            error={!!formErrors.password}
            helperText={formErrors.password}
            size={isMobile ? "small" : "medium"}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isLoading}
            startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
            sx={{ 
              mt: 3, 
              mb: 2,
              py: isMobile ? 1 : 1.5,
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </Button>
          {/* <Typography variant="body2" color="text.secondary" align="center">
            Use username: admin, password: admin123
          </Typography> */}
        </Box>
        </Paper>
      </AnimatedContainer>
      </ResponsiveContainer>
    </AnimatedContainer>
  );
};

export default Login;