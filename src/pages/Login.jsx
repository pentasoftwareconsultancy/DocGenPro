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
  CircularProgress,
  FormControlLabel,
  Checkbox,
  Link,
  IconButton,
  InputAdornment
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useToast } from '../components/common/Toast';
import AnimatedContainer from '../components/common/AnimatedContainer';
import { useAuth } from "../context/AuthContext";
import { validateForm } from '../utils/validationUtils';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { showSuccess, showError } = useToast();
  const { login } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setFormErrors({});

    const validationRules = {
      username: { required: true, message: 'Username is required' },
      password: { required: true, message: 'Password is required' },
    };

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
      await new Promise(resolve => setTimeout(resolve, 1000));

      const success = login(username, password);
      if (success) {
        showSuccess('Login successful! Redirecting to dashboard...');
        setTimeout(() => navigate('/dashboard'), 800);
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

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        height: '100vh',
        width: '100%',
      }}
    >
      {/* Left Image Section (55%) */}
      <Box
        sx={{
          width: isMobile ? '100%' : '55%',
          backgroundImage: 'url("https://i.pinimg.com/736x/32/72/fd/3272fdbde5f3f2a613b4bfa3bc3f9135.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.45)',
          }}
        />
        {/* Branding Text */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            color: '#fff',
            px: 3,
          }}
        >
          <Typography variant={isMobile ? 'h4' : 'h3'} fontWeight="bold" sx={{ mb: 1 }}>
            DocGenPro
          </Typography>
          <Typography variant={isMobile ? 'body1' : 'h6'} sx={{ opacity: 0.9 }}>
            Automate Your Document Creation with Ease
          </Typography>
        </Box>
      </Box>

      {/* Right Form Section (45%) */}
      <Box
        sx={{
          width: isMobile ? '100%' : '45%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f8f9fa',
          p: isMobile ? 3 : 5,
        }}
      >
        <Paper
          elevation={6}
          sx={{
            // 🔹 UPDATED: Increased form width and adjusted padding for better balance
            width: '100%',
            maxWidth: 520, // 🔹 was 420 earlier
            p: 6, // 🔹 was 5 earlier
            borderRadius: 3,
            boxShadow: '0px 6px 25px rgba(0,0,0,0.1)', // 🔹 slightly deeper shadow
            backgroundColor: '#ffffff',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 2, textAlign: 'center', fontWeight: 600 }}>
            Welcome to DocGenPro
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3, textAlign: 'center' }}>
            Sign in to generate and manage your documents effortlessly.
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
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
              onChange={(e) => setUsername(e.target.value)}
              error={!!formErrors.username}
              helperText={formErrors.username}
            />

            {/* Password Field with Eye Icon */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!formErrors.password}
              helperText={formErrors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      aria-label="toggle password visibility"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Remember Me + Forgot Password */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 1,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    color="primary"
                  />
                }
                label="Remember Me"
              />
              <Link
                href="#"
                underline="hover"
                sx={{ fontSize: '0.9rem', color: '#1976d2', fontWeight: 500 }}
              >
                Forgot Password?
              </Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
              startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
              sx={{
                mt: 3,
                mb: 2,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
                backgroundColor: '#1976d2',
                '&:hover': { backgroundColor: '#125ea7' },
              }}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Button>

            <Typography variant="body2" align="center" color="text.secondary">
              © {new Date().getFullYear()} DocGenPro — All Rights Reserved
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Login;
