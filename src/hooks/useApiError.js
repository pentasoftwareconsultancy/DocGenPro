import { useState, useCallback } from 'react';

/**
 * Custom hook for handling API requests with loading and error states
 * @returns {Object} - Object containing loading state, error state, and helper functions
 */
const useApiError = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Executes an API call with loading and error handling
   * @param {Function} apiCall - The API function to call
   * @param {Object} options - Options for the API call
   * @param {Function} options.onSuccess - Callback function on success
   * @param {Function} options.onError - Callback function on error
   * @param {boolean} options.resetErrorOnStart - Whether to reset error state on start
   * @returns {Promise} - The result of the API call
   */
  const executeApiCall = useCallback(async (apiCall, options = {}) => {
    const {
      onSuccess,
      onError,
      resetErrorOnStart = true,
    } = options;

    try {
      setLoading(true);
      if (resetErrorOnStart) {
        setError(null);
      }

      const result = await apiCall();
      
      if (onSuccess) {
        onSuccess(result);
      }
      
      return result;
    } catch (err) {
      console.error('API Error:', err);
      
      const errorMessage = err.response?.data?.message || err.message || 'An unexpected error occurred';
      setError(errorMessage);
      
      if (onError) {
        onError(err);
      }
      
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Clears the current error state
   */
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    loading,
    error,
    executeApiCall,
    clearError,
    setError,
  };
};

export default useApiError;