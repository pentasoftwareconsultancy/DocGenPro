import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import A4Page from '../layout/A4Page';
import { formatCurrency } from '../../utils/salaryCalculations';
import placeholderSignature from '../../assets/images/placeholder-signature.svg';
import placeholderStamp from '../../assets/images/placeholder-stamp.svg';

const EmploymentVerificationTemplate = ({ data, company }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const calculateTenure = (joiningDate) => {
    if (!joiningDate) return '';
    const start = new Date(joiningDate);
    const now = new Date();
    const diffTime = Math.abs(now - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    
    if (years > 0 && months > 0) {
      return `${years} year${years > 1 ? 's' : ''} and ${months} month${months > 1 ? 's' : ''}`;
    } else if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''}`;
    } else {
      return `${months} month${months > 1 ? 's' : ''}`;
    }
  };

  return (
    <A4Page
      headerSrc={company.headerSrc}
      footerSrc={company.footerSrc}
      watermarkSrc={company.watermarkSrc}
      company={company}
    >
      <Box sx={{ p: 4, minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Document Title */}
        <Typography 
          variant="h4" 
          sx={{ 
            textAlign: 'center', 
            mb: 4, 
            fontWeight: 'bold',
            textDecoration: 'underline',
            color: 'primary.main'
          }}
        >
          EMPLOYMENT VERIFICATION LETTER
        </Typography>

        {/* Reference Number and Date */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="body1">
            <strong>Ref No:</strong> {company.name?.replace(/\s+/g, '').toUpperCase()}/EVL/{new Date().getFullYear()}/{Math.floor(Math.random() * 1000).toString().padStart(3, '0')}
          </Typography>
          <Typography variant="body1">
            <strong>Date:</strong> {formatDate(data.issueDate) || formatDate(new Date())}
          </Typography>
        </Box>

        {/* To Whom It May Concern */}
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
          To Whom It May Concern,
        </Typography>

        {/* Main Content */}
        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
          This is to certify that <strong>{data.employeeName || '[Employee Name]'}</strong> 
          {data.employmentStatus === 'Active' ? ' is currently employed' : ' was employed'} with 
          <strong> {company.name}</strong> in the capacity of <strong>{data.designation || '[Designation]'}</strong> 
          in the <strong>{data.department || '[Department]'}</strong> department.
        </Typography>

        {/* Employment Details Table */}
        <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.light' }}>
                <TableCell sx={{ fontWeight: 'bold' }}>Employment Details</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Information</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><strong>Employee Name</strong></TableCell>
                <TableCell>{data.employeeName || '[Employee Name]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Employee ID</strong></TableCell>
                <TableCell>{data.employeeId || '[Employee ID]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Designation</strong></TableCell>
                <TableCell>{data.designation || '[Designation]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Department</strong></TableCell>
                <TableCell>{data.department || '[Department]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Date of Joining</strong></TableCell>
                <TableCell>{formatDate(data.joiningDate) || '[Joining Date]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Employment Status</strong></TableCell>
                <TableCell>{data.employmentStatus || '[Employment Status]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Work Location</strong></TableCell>
                <TableCell>{data.workLocation || company.address || '[Work Location]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Duration of Employment</strong></TableCell>
                <TableCell>{calculateTenure(data.joiningDate) || '[Duration]'}</TableCell>
              </TableRow>
              {data.currentSalary && (
                <TableRow>
                  <TableCell><strong>Current Annual Salary</strong></TableCell>
                  <TableCell>{formatCurrency(data.currentSalary)}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Additional Information */}
        {data.purpose && (
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            This verification is being provided for <strong>{data.purpose}</strong> as requested by 
            <strong> {data.requestedBy || '[Requesting Party]'}</strong>.
          </Typography>
        )}

        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
          During {data.employmentStatus === 'Active' ? 'their tenure' : 'his/her tenure'} with us, 
          {data.employeeName || '[Employee Name]'} has been a dedicated and reliable employee. 
          {data.employmentStatus === 'Active' ? 'They continue to' : 'They'} perform 
          {data.employmentStatus === 'Active' ? 'their' : 'ed their'} duties with utmost sincerity and professionalism.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          This letter is issued upon request and without any prejudice to the company or the employee.
        </Typography>

        {/* Closing */}
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          Should you require any further information, please feel free to contact us.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          Sincerely,
        </Typography>

        {/* Signature Section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 'auto', pt: 4 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Box sx={{ mb: 2, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src={company.signatureSrc || placeholderSignature} 
                alt="Signature" 
                style={{ maxHeight: '50px', maxWidth: '150px' }}
              />
            </Box>
            <Typography variant="body2" sx={{ borderTop: '1px solid #000', pt: 1, minWidth: 200 }}>
              Authorized Signatory
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {company.name}
            </Typography>
          </Box>
          
          <Box sx={{ textAlign: 'center' }}>
            <Box sx={{ mb: 2, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src={company.stampSrc || placeholderStamp} 
                alt="Company Stamp" 
                style={{ maxHeight: '60px', maxWidth: '100px' }}
              />
            </Box>
            <Typography variant="body2" sx={{ borderTop: '1px solid #000', pt: 1, minWidth: 100, textAlign: 'center' }}>
              Company Seal
            </Typography>
          </Box>
        </Box>

        {/* Footer Note */}
        <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid #ddd' }}>
          <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary' }}>
            This is a system-generated document. Please verify all details before use.
          </Typography>
        </Box>
      </Box>
    </A4Page>
  );
};

export default EmploymentVerificationTemplate;