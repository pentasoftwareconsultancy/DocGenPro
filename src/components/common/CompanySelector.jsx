import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';

/**
 * Reusable company selector component
 * @param {Object} props - Component props
 * @param {Array} props.companies - Array of company objects
 * @param {string|number} props.value - Selected company ID
 * @param {Function} props.onChange - Change handler function
 * @param {string} props.title - Title for the selector section
 * @param {boolean} props.showPaper - Whether to wrap in Paper component
 * @returns {JSX.Element} - The company selector component
 */
const CompanySelector = ({ 
  companies = [], 
  value = '', 
  onChange, 
  title = 'Select Company',
  showPaper = true 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const selectorContent = (
    <>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="company-select-label">Company</InputLabel>
        <Select
          labelId="company-select-label"
          id="company-select"
          value={value}
          label="Company"
          onChange={onChange}
          size={isMobile ? "small" : "medium"}
        >
          {companies.map((company) => (
            <MenuItem key={company.id} value={company.id}>
              {company.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );

  if (showPaper) {
    return (
      <Paper elevation={3} sx={{ p: isMobile ? 2 : 3, mb: isMobile ? 3 : 4 }}>
        {selectorContent}
      </Paper>
    );
  }

  return selectorContent;
};

export default CompanySelector;