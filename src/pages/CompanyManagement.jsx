import React, { useState, useRef } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Avatar,
  Chip,
  Alert,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme,
  useMediaQuery,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  Upload as UploadIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Preview as PreviewIcon,
  Save as SaveIcon,
  Cancel as CancelIcon
} from '@mui/icons-material';
import { useCompany } from '../context/CompanyContext';
import { useAuth } from '../context/AuthContext';
import ResponsiveContainer from '../components/common/ResponsiveContainer';

const CompanyManagement = () => {
  const { companies, selectedCompany, selectCompany, updateCompany } = useCompany();
  const { currentUser } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [selectedCompanyId, setSelectedCompanyId] = useState(selectedCompany?.id || '');
  const [editingCompany, setEditingCompany] = useState(null);
  const [companyData, setCompanyData] = useState({});
  const [previewImage, setPreviewImage] = useState({ open: false, src: '', title: '' });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  
  // File input refs
  const headerInputRef = useRef(null);
  const footerInputRef = useRef(null);
  const watermarkInputRef = useRef(null);
  const signatureInputRef = useRef(null);
  const stampInputRef = useRef(null);
  const logoInputRef = useRef(null);

  const currentCompany = companies.find(c => c.id === selectedCompanyId);

  const handleCompanySelect = (companyId) => {
    setSelectedCompanyId(companyId);
    const company = companies.find(c => c.id === companyId);
    if (company) {
      setCompanyData({ ...company });
    }
  };

  const handleEditStart = () => {
    if (currentCompany) {
      setEditingCompany(currentCompany.id);
      setCompanyData({ ...currentCompany });
    }
  };

  const handleEditCancel = () => {
    setEditingCompany(null);
    setCompanyData({});
  };

  const handleSave = () => {
    if (currentCompany && companyData) {
      // Update the company in the context
      updateCompany(currentCompany.id, companyData);
      console.log('Saving company data:', companyData);
      setSnackbar({ open: true, message: 'Company information updated successfully!', severity: 'success' });
      setEditingCompany(null);
      
      // Update the selected company in the main context if it's the current one
      if (selectedCompany && selectedCompany.id === currentCompany.id) {
        selectCompany(currentCompany.id);
      }
    } else {
      setSnackbar({ open: true, message: 'Error: No company data to save', severity: 'error' });
    }
  };

  const handleImageUpload = (type, file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        setCompanyData(prev => ({
          ...prev,
          [`${type}Image`]: imageUrl
        }));
        setSnackbar({ open: true, message: `${type} image uploaded successfully!`, severity: 'success' });
      };
      reader.readAsDataURL(file);
    } else {
      setSnackbar({ open: true, message: 'Please select a valid image file', severity: 'error' });
    }
  };

  const handleFileInputClick = (inputRef) => {
    inputRef.current?.click();
  };

  const handlePreviewImage = (src, title) => {
    setPreviewImage({ open: true, src, title });
  };

  const getImageSrc = (type) => {
    const imageKey = `${type}Image`;
    if (editingCompany && companyData[imageKey]) {
      return companyData[imageKey];
    }
    if (currentCompany && currentCompany[imageKey]) {
      return currentCompany[imageKey];
    }
    // Fallback to placeholder
    switch (type) {
      case 'header':
        return '/src/assets/images/placeholder-header.svg';
      case 'footer':
        return '/src/assets/images/placeholder-footer.svg';
      case 'watermark':
        return '/src/assets/images/placeholder-watermark.svg';
      case 'signature':
        return '/src/assets/signatures/placeholder-signature.svg';
      case 'stamp':
        return '/src/assets/stamps/placeholder-stamp.svg';
      case 'logo':
        return '/src/assets/logos/placeholder-logo.svg';
      default:
        return '';
    }
  };

  const ImageUploadCard = ({ type, title, description, aspectRatio = '16/9' }) => {
    const imageSrc = getImageSrc(type);
    const isEditing = editingCompany === currentCompany?.id;

    return (
      <Card sx={{ height: '100%' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {description}
          </Typography>
          
          <Box
            sx={{
              width: '100%',
              aspectRatio,
              border: '2px dashed #ddd',
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2,
              overflow: 'hidden',
              bgcolor: '#fafafa'
            }}
          >
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            ) : (
              <Typography variant="body2" color="text.secondary">
                No image uploaded
              </Typography>
            )}
          </Box>
        </CardContent>
        
        <CardActions>
          {isEditing && (
            <Button
              size="small"
              startIcon={<UploadIcon />}
              onClick={() => handleFileInputClick(eval(`${type}InputRef`))}
            >
              Upload
            </Button>
          )}
          {imageSrc && (
            <Button
              size="small"
              startIcon={<PreviewIcon />}
              onClick={() => handlePreviewImage(imageSrc, title)}
            >
              Preview
            </Button>
          )}
        </CardActions>
        
        {/* Hidden file input */}
        <input
          type="file"
          ref={eval(`${type}InputRef`)}
          style={{ display: 'none' }}
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) handleImageUpload(type, file);
          }}
        />
      </Card>
    );
  };

  return (
    <ResponsiveContainer>
      <Typography variant={isMobile ? "h5" : "h4"} component="h1" gutterBottom>
        Company Management
      </Typography>
      
      {/* Company Selection */}
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Select Company</InputLabel>
              <Select
                value={selectedCompanyId}
                onChange={(e) => handleCompanySelect(e.target.value)}
                label="Select Company"
              >
                {companies.map((company) => (
                  <MenuItem key={company.id} value={company.id}>
                    {company.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          
          {currentCompany && (
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {editingCompany === currentCompany.id ? (
                  <>
                    <Button
                      variant="contained"
                      startIcon={<SaveIcon />}
                      onClick={handleSave}
                    >
                      Save Changes
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<CancelIcon />}
                      onClick={handleEditCancel}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="contained"
                    startIcon={<EditIcon />}
                    onClick={handleEditStart}
                  >
                    Edit Company
                  </Button>
                )}
              </Box>
            </Grid>
          )}
        </Grid>
      </Paper>

      {currentCompany && (
        <>
          {/* Company Basic Information */}
          <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Company Information
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Company Name"
                  value={editingCompany === currentCompany.id ? (companyData.name || '') : (currentCompany.name || '')}
                  onChange={(e) => setCompanyData(prev => ({ ...prev, name: e.target.value }))}
                  disabled={editingCompany !== currentCompany.id}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email"
                  value={editingCompany === currentCompany.id ? (companyData.email || '') : (currentCompany.email || '')}
                  onChange={(e) => setCompanyData(prev => ({ ...prev, email: e.target.value }))}
                  disabled={editingCompany !== currentCompany.id}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  value={editingCompany === currentCompany.id ? (companyData.phone || '') : (currentCompany.phone || '')}
                  onChange={(e) => setCompanyData(prev => ({ ...prev, phone: e.target.value }))}
                  disabled={editingCompany !== currentCompany.id}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Website"
                  value={editingCompany === currentCompany.id ? (companyData.website || '') : (currentCompany.website || '')}
                  onChange={(e) => setCompanyData(prev => ({ ...prev, website: e.target.value }))}
                  disabled={editingCompany !== currentCompany.id}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  multiline
                  rows={2}
                  value={editingCompany === currentCompany.id ? (companyData.address || '') : (currentCompany.address || '')}
                  onChange={(e) => setCompanyData(prev => ({ ...prev, address: e.target.value }))}
                  disabled={editingCompany !== currentCompany.id}
                />
              </Grid>
            </Grid>
          </Paper>

          {/* Image Management */}
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Company Images
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <ImageUploadCard
                  type="header"
                  title="Header Image"
                  description="Document header image (recommended: 794x151px)"
                  aspectRatio="794/151"
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <ImageUploadCard
                  type="footer"
                  title="Footer Image"
                  description="Document footer image (recommended: 794x94px)"
                  aspectRatio="794/94"
                />
              </Grid>
              
              <Grid item xs={12} md={4}>
                <ImageUploadCard
                  type="watermark"
                  title="Watermark"
                  description="Document watermark (recommended: 453x453px)"
                  aspectRatio="1/1"
                />
              </Grid>
              
              <Grid item xs={12} md={4}>
                <ImageUploadCard
                  type="signature"
                  title="Signature"
                  description="Authorized signature (recommended: 120x60px)"
                  aspectRatio="2/1"
                />
              </Grid>
              
              <Grid item xs={12} md={4}>
                <ImageUploadCard
                  type="stamp"
                  title="Official Stamp"
                  description="Company stamp (recommended: 80x80px)"
                  aspectRatio="1/1"
                />
              </Grid>
            </Grid>
          </Paper>
        </>
      )}

      {/* Image Preview Dialog */}
      <Dialog
        open={previewImage.open}
        onClose={() => setPreviewImage({ open: false, src: '', title: '' })}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>{previewImage.title}</DialogTitle>
        <DialogContent>
          <Box sx={{ textAlign: 'center', p: 2 }}>
            <img
              src={previewImage.src}
              alt={previewImage.title}
              style={{
                maxWidth: '100%',
                maxHeight: '400px',
                objectFit: 'contain'
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPreviewImage({ open: false, src: '', title: '' })}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </ResponsiveContainer>
  );
};

export default CompanyManagement;