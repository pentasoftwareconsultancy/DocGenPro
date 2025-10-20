import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import A4Page from '../layout/A4Page';
import { calculateSalaryBreakdown, formatCurrency, numberToWords } from '../../utils/salaryCalculations';
import placeholderSignature from '../../assets/images/placeholder-signature.svg';
import placeholderStamp from '../../assets/images/placeholder-stamp.svg';

const AppointmentLetterTemplate = ({ data, company }) => {
  // Calculate salary breakdown
  const salaryBreakdown = calculateSalaryBreakdown(data.annualCTC || 350000); // Default to 3.5 LPA

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
          APPOINTMENT LETTER
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Ref: {company.name?.replace(/\s+/g, '').toUpperCase()}/HR/{new Date().getFullYear()}/{Math.floor(Math.random() * 1000).toString().padStart(3, '0')}
        </Typography>
      </Box>

      {/* Date */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Date:</strong> {formatDate(data.issueDate) || formatDate(new Date())}
        </Typography>
      </Box>

      {/* Employee Details */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>To,</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>{data.employeeName || '[Employee Name]'}</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          {data.address || '[Employee Address]'}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {data.city || '[City]'}, {data.state || '[State]'} - {data.pincode || '[Pincode]'}
        </Typography>
      </Box>

      {/* Subject */}
      <Typography variant="body1" sx={{ mb: 3, fontWeight: 'bold' }}>
        <strong>Subject: Appointment as {data.designation || '[Designation]'}</strong>
      </Typography>

      {/* Letter Body */}
      <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
        Dear {data.employeeName || '[Employee Name]'},
      </Typography>

      <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
        We are pleased to offer you the position of <strong>{data.designation || '[Designation]'}</strong> in the 
        <strong>{data.department || '[Department]'}</strong> department at {company.name || '[Company Name]'}. 
        We believe that your skills, experience, and enthusiasm will be valuable assets to our organization.
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, textAlign: 'justify' }}>
        Your appointment is subject to the terms and conditions mentioned below:
      </Typography>

      {/* Terms and Conditions */}
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        TERMS AND CONDITIONS:
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>1. Position:</strong> {data.designation || '[Designation]'}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>2. Department:</strong> {data.department || '[Department]'}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>3. Employee ID:</strong> {data.employeeId || '[Employee ID]'}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>4. Date of Joining:</strong> {formatDate(data.joiningDate) || '[Joining Date]'}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>5. Reporting To:</strong> {data.reportingManager || '[Reporting Manager]'}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>6. Work Location:</strong> {data.workLocation || company.address || '[Work Location]'}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>7. Employment Type:</strong> {data.employmentType || 'Full-time'}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>8. Probation Period:</strong> {data.probationPeriod || '6 months'}
        </Typography>
      </Box>

      {/* Salary Details */}
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        COMPENSATION DETAILS:
      </Typography>

      <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'primary.light' }}>
              <TableCell sx={{ fontWeight: 'bold' }}>Component</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Monthly Amount</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Annual Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Basic Salary</TableCell>
              <TableCell align="right">{formatCurrency(salaryBreakdown.basic)}</TableCell>
              <TableCell align="right">{formatCurrency(salaryBreakdown.basic * 12)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>House Rent Allowance (HRA)</TableCell>
              <TableCell align="right">{formatCurrency(salaryBreakdown.hra)}</TableCell>
              <TableCell align="right">{formatCurrency(salaryBreakdown.hra * 12)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dearness Allowance (DA)</TableCell>
              <TableCell align="right">{formatCurrency(salaryBreakdown.da)}</TableCell>
              <TableCell align="right">{formatCurrency(salaryBreakdown.da * 12)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Medical Allowance</TableCell>
              <TableCell align="right">{formatCurrency(salaryBreakdown.medical)}</TableCell>
              <TableCell align="right">{formatCurrency(salaryBreakdown.medical * 12)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Transport Allowance</TableCell>
              <TableCell align="right">{formatCurrency(salaryBreakdown.transport)}</TableCell>
              <TableCell align="right">{formatCurrency(salaryBreakdown.transport * 12)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Special Allowance</TableCell>
              <TableCell align="right">{formatCurrency(salaryBreakdown.special)}</TableCell>
              <TableCell align="right">{formatCurrency(salaryBreakdown.special * 12)}</TableCell>
            </TableRow>
            <TableRow sx={{ backgroundColor: 'grey.100' }}>
              <TableCell sx={{ fontWeight: 'bold' }}>Gross Monthly Salary</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>{formatCurrency(salaryBreakdown.gross)}</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>{formatCurrency(salaryBreakdown.gross * 12)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Provident Fund (Employee)</TableCell>
              <TableCell align="right">{formatCurrency(salaryBreakdown.pf)}</TableCell>
              <TableCell align="right">{formatCurrency(salaryBreakdown.pf * 12)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Professional Tax</TableCell>
              <TableCell align="right">{formatCurrency(salaryBreakdown.pt)}</TableCell>
              <TableCell align="right">{formatCurrency(salaryBreakdown.pt * 12)}</TableCell>
            </TableRow>
            <TableRow sx={{ backgroundColor: 'primary.light' }}>
              <TableCell sx={{ fontWeight: 'bold' }}>Net Monthly Salary</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>{formatCurrency(salaryBreakdown.netSalary)}</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>{formatCurrency(salaryBreakdown.netSalary * 12)}</TableCell>
            </TableRow>
            <TableRow sx={{ backgroundColor: 'success.light' }}>
              <TableCell sx={{ fontWeight: 'bold' }}>Cost to Company (CTC)</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>{formatCurrency(salaryBreakdown.ctc / 12)}</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>{formatCurrency(salaryBreakdown.ctc)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* CTC in Words */}
      <Typography variant="body1" sx={{ mb: 3 }}>
        <strong>Annual CTC in Words:</strong> {numberToWords(salaryBreakdown.ctc)}
      </Typography>

      {/* Additional Terms */}
      <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
        <strong>9. Working Hours:</strong> {data.workingHours || '9:00 AM to 6:00 PM, Monday to Friday'}
      </Typography>

      <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
        <strong>10. Leave Policy:</strong> You will be entitled to leave as per company policy.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
        <strong>11. Confidentiality:</strong> You are required to maintain strict confidentiality regarding company information, 
        trade secrets, and client data.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
        <strong>12. Termination:</strong> Either party may terminate this employment with {data.noticePeriod || '30 days'} written notice.
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, textAlign: 'justify' }}>
        Please confirm your acceptance of this appointment by signing and returning a copy of this letter by 
        {formatDate(data.acceptanceDeadline) || '[Acceptance Deadline]'}.
      </Typography>

      <Typography variant="body1" sx={{ mb: 4, textAlign: 'justify' }}>
        We look forward to a long and mutually beneficial association with you.
      </Typography>

      {/* Closing */}
      <Typography variant="body1" sx={{ mb: 6 }}>
        Yours sincerely,
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
              alt="Authorized Signatory"
              sx={{
                width: 120,
                height: 60,
                objectFit: 'contain',
                mb: 1,
              }}
            />
          )}
          <Typography variant="body2" sx={{ borderTop: '1px solid #000', pt: 1, minWidth: 120 }}>
            Authorized Signatory
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

      {/* Acceptance Section */}
      <Box sx={{ mt: 6, pt: 3, borderTop: '2px solid #000' }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          ACCEPTANCE:
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          I, {data.employeeName || '[Employee Name]'}, hereby accept the above terms and conditions of employment.
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Box>
            <Typography variant="body2" sx={{ borderTop: '1px solid #000', pt: 1, minWidth: 150, textAlign: 'center' }}>
              Employee Signature
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ borderTop: '1px solid #000', pt: 1, minWidth: 100, textAlign: 'center' }}>
              Date
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Footer Note */}
      <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid #ddd' }}>
        <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary' }}>
          This is a system-generated document. Please verify all details before signing.
        </Typography>
      </Box>
    </A4Page>
  );
};

export default AppointmentLetterTemplate;