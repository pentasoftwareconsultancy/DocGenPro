import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import A4Page from '../layout/A4Page';
import { calculateSalaryBreakdown, formatCurrency, numberToWords } from '../../utils/salaryCalculations';
import placeholderSignature from '../../assets/images/placeholder-signature.svg';
import placeholderStamp from '../../assets/images/placeholder-stamp.svg';

const SalaryTransactionTemplate = ({ data, company }) => {
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

  const getMonthYear = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      month: 'long',
      year: 'numeric'
    });
  };

  // Calculate transaction details
  const transactionAmount = data.transactionAmount || salaryBreakdown.netSalary;
  const transactionType = data.transactionType || 'Credit';
  const paymentMode = data.paymentMode || 'Bank Transfer';

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
          SALARY TRANSACTION CERTIFICATE
        </Typography>
        <Typography variant="body2" className="company-secondary" sx={{ color: 'text.secondary' }}>
          Transaction Ref: {company.name?.replace(/\s+/g, '').toUpperCase()}/PAY/{new Date().getFullYear()}/{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
        </Typography>
      </Box>

      {/* Date and Transaction Details */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Date:</strong> {formatDate(data.transactionDate) || formatDate(new Date())}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Salary Period:</strong> {getMonthYear(data.salaryPeriod) || getMonthYear(new Date())}
        </Typography>
      </Box>

      {/* Employee Details */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          EMPLOYEE DETAILS:
        </Typography>
        
        <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', width: '30%' }}>Employee Name</TableCell>
                <TableCell>{data.employeeName || '[Employee Name]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Employee ID</TableCell>
                <TableCell>{data.employeeId || '[Employee ID]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Designation</TableCell>
                <TableCell>{data.designation || '[Designation]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Department</TableCell>
                <TableCell>{data.department || '[Department]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Bank Account Number</TableCell>
                <TableCell>{data.accountNumber || '[Account Number]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Bank Name</TableCell>
                <TableCell>{data.bankName || '[Bank Name]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>IFSC Code</TableCell>
                <TableCell>{data.ifscCode || '[IFSC Code]'}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Transaction Certificate */}
      <Typography variant="body1" sx={{ mb: 3, textAlign: 'justify' }}>
        This is to certify that <strong>{company.name || '[Company Name]'}</strong> has processed 
        the salary transaction for <strong>{data.employeeName || '[Employee Name]'}</strong> 
        (Employee ID: <strong>{data.employeeId || '[Employee ID]'}</strong>) for the month of 
        <strong> {getMonthYear(data.salaryPeriod) || getMonthYear(new Date())}</strong>.
      </Typography>

      {/* Salary Breakdown */}
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        SALARY BREAKDOWN:
      </Typography>

      <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'primary.light' }}>
              <TableCell sx={{ fontWeight: 'bold' }}>Component</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Amount (₹)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Basic Salary</TableCell>
              <TableCell align="right">{formatCurrency(salaryBreakdown.basic)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>House Rent Allowance (HRA)</TableCell>
              <TableCell align="right">{formatCurrency(salaryBreakdown.hra)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Dearness Allowance (DA)</TableCell>
              <TableCell align="right">{formatCurrency(salaryBreakdown.da)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Medical Allowance</TableCell>
              <TableCell align="right">{formatCurrency(salaryBreakdown.medical)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Transport Allowance</TableCell>
              <TableCell align="right">{formatCurrency(salaryBreakdown.transport)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Special Allowance</TableCell>
              <TableCell align="right">{formatCurrency(salaryBreakdown.special)}</TableCell>
            </TableRow>
            <TableRow sx={{ backgroundColor: 'grey.100' }}>
              <TableCell sx={{ fontWeight: 'bold' }}>Gross Salary</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>{formatCurrency(salaryBreakdown.gross)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Provident Fund (Employee)</TableCell>
              <TableCell align="right" sx={{ color: 'error.main' }}>-{formatCurrency(salaryBreakdown.pf)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Professional Tax</TableCell>
              <TableCell align="right" sx={{ color: 'error.main' }}>-{formatCurrency(salaryBreakdown.pt)}</TableCell>
            </TableRow>
            {data.otherDeductions && (
              <TableRow>
                <TableCell>{data.otherDeductionsLabel || 'Other Deductions'}</TableCell>
                <TableCell align="right" sx={{ color: 'error.main' }}>-{formatCurrency(data.otherDeductions)}</TableCell>
              </TableRow>
            )}
            <TableRow sx={{ backgroundColor: 'success.light' }}>
              <TableCell sx={{ fontWeight: 'bold' }}>Net Salary</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>{formatCurrency(transactionAmount)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Amount in Words */}
      <Typography variant="body1" sx={{ mb: 3 }}>
        <strong>Amount in Words:</strong> {numberToWords(transactionAmount)}
      </Typography>

      {/* Transaction Details */}
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        TRANSACTION DETAILS:
      </Typography>

      <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', width: '30%' }}>Transaction Type</TableCell>
              <TableCell>{transactionType}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Transaction Amount</TableCell>
              <TableCell>{formatCurrency(transactionAmount)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Payment Mode</TableCell>
              <TableCell>{paymentMode}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Transaction Date</TableCell>
              <TableCell>{formatDate(data.transactionDate) || formatDate(new Date())}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Transaction ID</TableCell>
              <TableCell>{data.transactionId || `TXN${Date.now().toString().slice(-8)}`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
              <TableCell>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'success.main', 
                    fontWeight: 'bold',
                    backgroundColor: 'success.light',
                    padding: '4px 8px',
                    borderRadius: 1,
                    display: 'inline-block'
                  }}
                >
                  {data.transactionStatus || 'Completed'}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Additional Information */}
      {data.remarks && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" sx={{ mb: 1, fontWeight: 'bold' }}>
            Remarks:
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'justify' }}>
            {data.remarks}
          </Typography>
        </Box>
      )}

      {/* Certification Statement */}
      <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
        This certificate confirms that the above-mentioned salary transaction has been successfully 
        processed and the amount has been {transactionType.toLowerCase()}ed to the employee's 
        registered bank account.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
        This transaction is in accordance with the company's payroll policy and applicable labor laws.
      </Typography>

      <Typography variant="body1" sx={{ mb: 4, textAlign: 'justify' }}>
        For any queries related to this transaction, please contact the HR department or Accounts department.
      </Typography>

      {/* Signature Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mt: 6 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ borderTop: '1px solid #000', pt: 1, minWidth: 120 }}>
            Accounts Manager
          </Typography>
          <Typography variant="body2">
            {company.name || '[Company Name]'}
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

      {/* Verification Section */}
      <Box sx={{ mt: 6, pt: 3, borderTop: '2px solid #000' }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          VERIFICATION:
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
          This transaction certificate can be verified by contacting our HR department at 
          {company.phone && ` ${company.phone}`} or {company.email && ` ${company.email}`}.
        </Typography>
        
        <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary' }}>
          Certificate Generated on: {formatDate(new Date())}
        </Typography>
      </Box>

      {/* Footer Note */}
      <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid #ddd' }}>
        <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary' }}>
          This is a system-generated document and does not require a physical signature.
        </Typography>
      </Box>
    </A4Page>
  );
};

export default SalaryTransactionTemplate;