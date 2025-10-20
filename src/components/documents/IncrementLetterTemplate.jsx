import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import A4Page from '../layout/A4Page';
import { calculateIncrement, formatCurrency, numberToWords } from '../../utils/salaryCalculations';
import placeholderSignature from '../../assets/images/placeholder-signature.svg';
import placeholderStamp from '../../assets/images/placeholder-stamp.svg';

const IncrementLetterTemplate = ({ data, company }) => {
  // Calculate increment details
  const incrementDetails = calculateIncrement(
    data.currentCTC || 350000, // Default to 3.5 LPA
    data.incrementPercentage || 10 // Default to 10% increment
  );

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
      headerSrc={company.header || company.headerImage}
      footerSrc={company.footer || company.footerImage}
      watermarkSrc={company.watermark || company.watermarkImage}
      contentTop="48mm"
      contentBottom="28mm"
      company={company}
    >
      {/* Letter Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h5" className="company-accent" sx={{ fontWeight: 'bold', mb: 1 }}>
          SALARY INCREMENT LETTER
        </Typography>
        <Typography variant="body2" className="company-secondary" sx={{ color: 'text.secondary' }}>
          Ref: {company.name?.replace(/\s+/g, '').toUpperCase()}/HR/{new Date().getFullYear()}/{Math.floor(Math.random() * 1000).toString().padStart(3, '0')}
        </Typography>
      </Box>

      {/* Date and Employee Details */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Date:</strong> {formatDate(data.issueDate) || formatDate(new Date())}
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>To,</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>{data.employeeName || '[Employee Name]'}</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Employee ID: {data.employeeId || '[Employee ID]'}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Designation: {data.designation || '[Designation]'}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Department: {data.department || '[Department]'}
        </Typography>
      </Box>

      {/* Subject */}
      <Typography variant="body1" sx={{ mb: 3, fontWeight: 'bold' }}>
        <strong>Subject: Salary Increment Notification</strong>
      </Typography>

      {/* Letter Body */}
      <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
        Dear {data.employeeName || '[Employee Name]'},
      </Typography>

      <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
        We are pleased to inform you that based on your excellent performance, dedication, and contribution to the organization, 
        the management has decided to revise your salary structure effective from {formatDate(data.effectiveDate) || '[Effective Date]'}.
      </Typography>

      {data.reason && (
        <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
          <strong>Reason for Increment:</strong> {data.reason}
        </Typography>
      )}

      {/* Salary Comparison Table */}
      <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'primary.light' }}>
              <TableCell sx={{ fontWeight: 'bold' }}>Particulars</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Previous Salary</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Revised Salary</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Increment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Annual CTC</TableCell>
              <TableCell align="right">{formatCurrency(incrementDetails.currentCTC)}</TableCell>
              <TableCell align="right">{formatCurrency(incrementDetails.newCTC)}</TableCell>
              <TableCell align="right">{formatCurrency(incrementDetails.incrementAmount)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Monthly Gross</TableCell>
              <TableCell align="right">{formatCurrency(incrementDetails.currentMonthly)}</TableCell>
              <TableCell align="right">{formatCurrency(incrementDetails.newMonthly)}</TableCell>
              <TableCell align="right">{formatCurrency(incrementDetails.monthlyIncrement)}</TableCell>
            </TableRow>
            <TableRow sx={{ backgroundColor: 'grey.100' }}>
              <TableCell sx={{ fontWeight: 'bold' }}>Increment Percentage</TableCell>
              <TableCell align="center" colSpan={3} sx={{ fontWeight: 'bold' }}>
                {incrementDetails.incrementPercentage}%
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Amount in Words */}
      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>Increment Amount in Words:</strong> {numberToWords(incrementDetails.incrementAmount)}
      </Typography>

      {/* Terms and Conditions */}
      <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
        This increment is effective from {formatDate(data.effectiveDate) || '[Effective Date]'} and will be reflected in your salary 
        from the next payroll cycle. All other terms and conditions of your employment remain unchanged.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
        We appreciate your continued dedication and look forward to your continued contribution to the organization's growth and success.
      </Typography>

      <Typography variant="body1" sx={{ mb: 4, textAlign: 'justify' }}>
        Congratulations on your well-deserved increment!
      </Typography>

      {/* Closing */}
      <Typography variant="body1" sx={{ mb: 6 }}>
        Best Regards,
      </Typography>

      {/* Signature Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mt: 4 }}>
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            For {company.name || '[Company Name]'}
          </Typography>
        </Box>
        
        <Box sx={{ textAlign: 'center' }}>
          {(company.signature || placeholderSignature) && (
            <Box
              component="img"
              src={company.signature || placeholderSignature}
              alt="HR Signature"
              sx={{
                width: 120,
                height: 60,
                objectFit: 'contain',
                mb: 1,
              }}
            />
          )}
          <Typography variant="body2" sx={{ borderTop: '1px solid #000', pt: 1, minWidth: 120 }}>
            HR Manager
          </Typography>
          <Typography variant="body2">
            {company.name || '[Company Name]'}
          </Typography>
          
          {(company.stamp || placeholderStamp) && (
            <Box
              component="img"
              src={company.stamp || placeholderStamp}
              alt="Company Stamp"
              sx={{
                width: 80,
                height: 80,
                objectFit: 'contain',
                mt: 1,
              }}
            />
          )}
        </Box>
      </Box>

      {/* Footer Note */}
      <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid #ddd' }}>
        <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary' }}>
          This is a system-generated document and does not require a physical signature.
        </Typography>
      </Box>
    </A4Page>
  );
};

export default IncrementLetterTemplate;