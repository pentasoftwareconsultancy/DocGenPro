import React, { createContext, useContext, useState, useCallback } from 'react';
import { 
  Snackbar, 
  Alert, 
  AlertTitle,
  Slide,
  useTheme 
} from '@mui/material';

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

const SlideTransition = (props) => {
  return <Slide {...props} direction="up" />;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const theme = useTheme();

  const showToast = useCallback((message, severity = 'info', options = {}) => {
    const id = Date.now() + Math.random();
    const toast = {
      id,
      message,
      severity,
      autoHideDuration: options.autoHideDuration || 6000,
      title: options.title,
      action: options.action,
      ...options
    };
    
    setToasts(prev => [...prev, toast]);
    
    // Auto remove toast after duration
    if (toast.autoHideDuration !== null) {
      setTimeout(() => {
        removeToast(id);
      }, toast.autoHideDuration);
    }
    
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const showSuccess = useCallback((message, options) => {
    return showToast(message, 'success', options);
  }, [showToast]);

  const showError = useCallback((message, options) => {
    return showToast(message, 'error', { autoHideDuration: 8000, ...options });
  }, [showToast]);

  const showWarning = useCallback((message, options) => {
    return showToast(message, 'warning', options);
  }, [showToast]);

  const showInfo = useCallback((message, options) => {
    return showToast(message, 'info', options);
  }, [showToast]);

  const contextValue = {
    showToast,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    removeToast
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {toasts.map((toast, index) => (
        <Snackbar
          key={toast.id}
          open={true}
          autoHideDuration={toast.autoHideDuration}
          onClose={() => removeToast(toast.id)}
          TransitionComponent={SlideTransition}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          sx={{
            bottom: theme.spacing(2 + (index * 8)),
            zIndex: theme.zIndex.snackbar + index
          }}
        >
          <Alert 
            onClose={() => removeToast(toast.id)}
            severity={toast.severity}
            variant="filled"
            sx={{ 
              width: '100%',
              minWidth: 300,
              maxWidth: 500
            }}
            action={toast.action}
          >
            {toast.title && (
              <AlertTitle>{toast.title}</AlertTitle>
            )}
            {toast.message}
          </Alert>
        </Snackbar>
      ))}
    </ToastContext.Provider>
  );
};

export default ToastProvider;