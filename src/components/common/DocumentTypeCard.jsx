import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';

/**
 * Reusable document type card component
 * @param {Object} props - Component props
 * @param {Object} props.docType - Document type object
 * @param {string} props.companyName - Selected company name
 * @param {Function} props.onSelect - Selection handler function
 * @param {string} props.buttonText - Custom button text
 * @returns {JSX.Element} - The document type card component
 */
const DocumentTypeCard = ({ 
  docType, 
  companyName = '', 
  onSelect, 
  buttonText = 'Create' 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClick = () => {
    if (onSelect) {
      onSelect(docType.id);
    }
  };

  return (
    <Card 
      className="document-type-card"
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        background: '#ffffff',
        border: '1px solid rgba(0,0,0,0.08)',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
          borderColor: 'rgba(102, 126, 234, 0.3)'
        }
      }}
    >
      <CardContent sx={{ 
        flexGrow: 1, 
        p: isMobile ? 2.5 : 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <Box>
          <Typography 
            variant="h6" 
            component="div" 
            gutterBottom
            sx={{
              fontWeight: 600,
              color: 'var(--text-primary)',
              mb: 1.5,
              fontSize: isMobile ? '1.1rem' : '1.25rem'
            }}
          >
            {docType.name}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
              fontSize: '0.875rem'
            }}
          >
            {companyName 
              ? `Generate ${docType.name} with ${companyName} branding`
              : `Generate ${docType.name} document`
            }
          </Typography>
        </Box>
      </CardContent>
      <CardActions 
        sx={{ 
          justifyContent: 'center',
          p: isMobile ? 2 : 2.5,
          pt: 0,
          background: 'rgba(248, 249, 250, 0.5)'
        }}
      >
        <Button 
          size={isMobile ? "medium" : "large"}
          variant="contained"
          fullWidth
          onClick={handleClick}
          sx={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
            py: isMobile ? 1.25 : 1.5,
            px: 3,
            fontSize: isMobile ? '0.875rem' : '0.95rem',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 20px rgba(102, 126, 234, 0.4)'
            }
          }}
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default DocumentTypeCard;