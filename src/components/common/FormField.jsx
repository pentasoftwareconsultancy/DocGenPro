import React from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  useMediaQuery,
  useTheme
} from '@mui/material';

/**
 * Reusable form field component that handles different input types
 * @param {Object} props - Component props
 * @param {Object} props.field - Field configuration object
 * @param {string|number} props.value - Field value
 * @param {Function} props.onChange - Change handler function
 * @param {string} props.error - Error message for the field
 * @param {number} props.gridSize - Grid size for responsive layout
 * @returns {JSX.Element} - The form field component
 */
const FormField = ({ 
  field, 
  value = '', 
  onChange, 
  error = '', 
  gridSize = 12 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event) => {
    if (onChange) {
      onChange(field.name, event.target.value);
    }
  };

  const renderField = () => {
    switch (field.type) {
      case 'select':
        return (
          <FormControl fullWidth error={!!error}>
            <InputLabel id={`${field.name}-label`}>
              {field.label}{field.required && ' *'}
            </InputLabel>
            <Select
              labelId={`${field.name}-label`}
              id={field.name}
              value={value}
              label={`${field.label}${field.required ? ' *' : ''}`}
              onChange={handleChange}
              size={isMobile ? "small" : "medium"}
            >
              {field.options?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      
      case 'textarea':
        return (
          <TextField
            fullWidth
            id={field.name}
            label={`${field.label}${field.required ? ' *' : ''}`}
            value={value}
            onChange={handleChange}
            error={!!error}
            helperText={error}
            multiline
            rows={4}
            size={isMobile ? "small" : "medium"}
          />
        );
      
      case 'number':
        return (
          <TextField
            fullWidth
            id={field.name}
            label={`${field.label}${field.required ? ' *' : ''}`}
            type="number"
            value={value}
            onChange={handleChange}
            error={!!error}
            helperText={error}
            size={isMobile ? "small" : "medium"}
          />
        );
      
      case 'email':
        return (
          <TextField
            fullWidth
            id={field.name}
            label={`${field.label}${field.required ? ' *' : ''}`}
            type="email"
            value={value}
            onChange={handleChange}
            error={!!error}
            helperText={error}
            size={isMobile ? "small" : "medium"}
          />
        );
      
      case 'date':
        return (
          <TextField
            fullWidth
            id={field.name}
            label={`${field.label}${field.required ? ' *' : ''}`}
            type="date"
            value={value}
            onChange={handleChange}
            error={!!error}
            helperText={error}
            InputLabelProps={{
              shrink: true,
            }}
            size={isMobile ? "small" : "medium"}
          />
        );
      
      default: // text
        return (
          <TextField
            fullWidth
            id={field.name}
            label={`${field.label}${field.required ? ' *' : ''}`}
            value={value}
            onChange={handleChange}
            error={!!error}
            helperText={error}
            size={isMobile ? "small" : "medium"}
          />
        );
    }
  };

  return (
    <Grid item xs={12} sm={gridSize}>
      {renderField()}
    </Grid>
  );
};

export default FormField;