import React from 'react';
import { Box, CircularProgress, Typography, useTheme } from '@mui/material';

const LoadingSpinner = ({ 
  size = 40, 
  message = 'Loading...', 
  fullScreen = false,
  color = 'primary'
}) => {
  const theme = useTheme();

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    ...(fullScreen && {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      zIndex: theme.zIndex.modal,
    }),
    ...(!fullScreen && {
      py: 4,
      minHeight: 200,
    })
  };

  return (
    <Box sx={containerStyles}>
      <CircularProgress 
        size={size} 
        color={color}
        thickness={4}
      />
      {message && (
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default LoadingSpinner;