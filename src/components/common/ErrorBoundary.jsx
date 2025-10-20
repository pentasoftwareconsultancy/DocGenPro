import React, { Component } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const ErrorContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  maxWidth: '600px',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('ErrorBoundary caught an error', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    // Attempt to recover by navigating to the dashboard
    if (this.props.navigate) {
      this.props.navigate('/');
    } else {
      window.location.href = '/';
    }
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <ErrorContainer elevation={3}>
          <Typography variant="h4" color="error" gutterBottom>
            Something went wrong
          </Typography>
          <Typography variant="body1" paragraph>
            We apologize for the inconvenience. An unexpected error has occurred.
          </Typography>
          {this.state.error && (
            <Box sx={{ mb: 2, textAlign: 'left', width: '100%', overflow: 'auto' }}>
              <Typography variant="subtitle2" color="text.secondary">
                Error details (for technical support):
              </Typography>
              <Typography variant="body2" component="pre" sx={{ 
                backgroundColor: '#f5f5f5', 
                p: 2, 
                borderRadius: 1,
                overflow: 'auto',
                maxHeight: '200px',
                fontSize: '0.75rem'
              }}>
                {this.state.error.toString()}
              </Typography>
            </Box>
          )}
          <Button 
            variant="contained" 
            color="primary" 
            onClick={this.handleReset}
            sx={{ mt: 2 }}
          >
            Return to Dashboard
          </Button>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;