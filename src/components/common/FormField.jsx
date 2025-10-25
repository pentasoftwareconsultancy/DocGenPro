import React, { useEffect } from 'react';
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

const FormField = ({ 
  field, 
  value = '', 
  onChange, 
  error = '', 
  gridSize = 12,
  allValues = {} // we’ll pass the full form state here
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // 🧮 Auto-calculate increment %
  useEffect(() => {
    if (field.name === 'incrementPercentage' && allValues.currentCTC && allValues.newCTC) {
      const current = parseFloat(allValues.currentCTC);
      const next = parseFloat(allValues.newCTC);
      if (!isNaN(current) && !isNaN(next) && current > 0) {
        const percent = (((next - current) / current) * 100).toFixed(2);
        onChange(field.name, percent);
      }
    }
  }, [field.name, allValues.currentCTC, allValues.newCTC]);

  const handleChange = (event) => {
    if (onChange) onChange(field.name, event.target.value);
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
                <MenuItem key={option.value || option} value={option.value || option}>
                  {option.label || option}
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
            InputProps={{
              readOnly: field.readOnly || false,
              endAdornment: field.suffix ? field.suffix : null
            }}
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

      default:
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
