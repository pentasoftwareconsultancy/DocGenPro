import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import A4Page from '../layout/A4Page';
import { formatCurrency } from '../../utils/salaryCalculations';
import placeholderSignature from '../../assets/images/placeholder-signature.svg';
import placeholderStamp from '../../assets/images/placeholder-stamp.svg';

const PromotionLetterTemplate = ({ data, company }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
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
          PROMOTION LETTER
        </Typography>

        {/* Reference Number and Date */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="body1">
            <strong>Ref No:</strong> {company.name?.replace(/\s+/g, '').toUpperCase()}/PL/{new Date().getFullYear()}/{Math.floor(Math.random() * 1000).toString().padStart(3, '0')}
          </Typography>
          <Typography variant="body1">
            <strong>Date:</strong> {formatDate(data.issueDate) || formatDate(new Date())}
          </Typography>
        </Box>

        {/* Employee Details */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body1"><strong>To:</strong></Typography>
          <Typography variant="body1" sx={{ ml: 2, mb: 1 }}>
            {data.employeeName || '[Employee Name]'}
          </Typography>
          <Typography variant="body1" sx={{ ml: 2, mb: 1 }}>
            Employee ID: {data.employeeId || '[Employee ID]'}
          </Typography>
          <Typography variant="body1" sx={{ ml: 2 }}>
            {data.currentDesignation || '[Current Designation]'}, {data.currentDepartment || '[Current Department]'}
          </Typography>
        </Box>

        {/* Subject */}
        <Typography variant="body1" sx={{ mb: 3, fontWeight: 'bold' }}>
          <strong>Subject: Promotion to {data.newDesignation || '[New Designation]'}</strong>
        </Typography>

        {/* Salutation */}
        <Typography variant="body1" sx={{ mb: 3 }}>
          Dear {data.employeeName || '[Employee Name]'},
        </Typography>

        {/* Main Content */}
        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
          We are pleased to inform you that based on your excellent performance, dedication, and contribution to 
          <strong> {company.name}</strong>, the management has decided to promote you to the position of 
          <strong> {data.newDesignation || '[New Designation]'}</strong> in the 
          <strong> {data.newDepartment || '[New Department]'}</strong> department.
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          This promotion is effective from <strong>{formatDate(data.effectiveDate) || '[Effective Date]'}</strong> 
          and is a recognition of your hard work, professional growth, and valuable contributions to the organization.
        </Typography>

        {/* Promotion Details Table */}
        <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.light' }}>
                <TableCell sx={{ fontWeight: 'bold' }}>Particulars</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Previous</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>New</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><strong>Designation</strong></TableCell>
                <TableCell>{data.currentDesignation || '[Current Designation]'}</TableCell>
                <TableCell>{data.newDesignation || '[New Designation]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Department</strong></TableCell>
                <TableCell>{data.currentDepartment || '[Current Department]'}</TableCell>
                <TableCell>{data.newDepartment || '[New Department]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Grade/Level</strong></TableCell>
                <TableCell>{data.currentGrade || '[Current Grade]'}</TableCell>
                <TableCell>{data.newGrade || '[New Grade]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Monthly Salary</strong></TableCell>
                <TableCell>{data.currentSalary ? formatCurrency(data.currentSalary) : '[Current Salary]'}</TableCell>
                <TableCell>{data.newSalary ? formatCurrency(data.newSalary) : '[New Salary]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Reporting Manager</strong></TableCell>
                <TableCell>{data.currentReportingManager || '[Current Manager]'}</TableCell>
                <TableCell>{data.newReportingManager || '[New Manager]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Work Location</strong></TableCell>
                <TableCell>{data.currentLocation || '[Current Location]'}</TableCell>
                <TableCell>{data.newLocation || '[New Location]'}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* New Responsibilities */}
        {data.newResponsibilities && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Key Responsibilities in New Role:
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}>
              {data.newResponsibilities}
            </Typography>
          </Box>
        )}

        {/* Terms and Conditions */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          Terms and Conditions:
        </Typography>
        <Box component="ul" sx={{ mb: 3, pl: 3 }}>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            This promotion is subject to your continued satisfactory performance and adherence to company policies.
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            All other terms and conditions of your employment remain unchanged unless specifically mentioned.
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            You will be entitled to all benefits and privileges associated with your new position.
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            A probation period of {data.probationPeriod || '3 months'} will apply for this new role.
          </Typography>
        </Box>

        {/* Congratulations */}
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          We congratulate you on this well-deserved promotion and look forward to your continued success in your new role. 
          We are confident that you will excel in your new position and contribute significantly to the growth of the organization.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          Please acknowledge receipt of this letter by signing and returning a copy to the HR Department.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          Congratulations and best wishes!
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
              {data.authorizedBy || 'HR Manager'}
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

        {/* Acknowledgment Section */}
        <Box sx={{ mt: 4, pt: 3, borderTop: '2px solid #000' }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
            Employee Acknowledgment:
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            I acknowledge receipt of this promotion letter and accept the terms and conditions mentioned above.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Box>
              <Typography variant="body2" sx={{ borderTop: '1px solid #000', pt: 1, minWidth: 200, textAlign: 'center' }}>
                Employee Signature
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" sx={{ borderTop: '1px solid #000', pt: 1, minWidth: 150, textAlign: 'center' }}>
                Date
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </A4Page>
  );
};

export default PromotionLetterTemplate;