import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import A4Page from '../layout/A4Page';
import { calculateIncrement, formatCurrency, numberToWords } from '../../utils/salaryCalculations';
import placeholderSignature from '../../assets/images/placeholder-signature.svg';
import placeholderStamp from '../../assets/images/placeholder-stamp.svg';

const IncrementLetterTemplate = ({ data, company }) => {

  const newCTC = parseFloat(data.newCTC); // annual salary
  

  // === Annual components (percentages of totalSalaryAnually) ===
  const basicAnnual = newCTC * 0.4013;
  const hraAnnual = newCTC * 0.1798;
  const conveyanceAnnual = newCTC * 0.1599;
  const medicAnnual = newCTC * 0.1394;
  const specialAnnual = newCTC * 0.1196;

  // === Monthly components ===
  const basicMonthly = Math.round(basicAnnual / 12);
  const hraMonthly = Math.round(hraAnnual / 12);
  const conveyanceMonthly = Math.round(conveyanceAnnual / 12);
  const medicMonthly = Math.round(medicAnnual / 12);
  const specialMonthly = Math.round(specialAnnual / 12);

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

   // Calculate previous year and issue year dynamically
   const issueDate = data.issueDate ? new Date(data.issueDate) : new Date();
   const issueYear = issueDate.getFullYear();
   const prevYear = issueYear - 1;

  return (
    <Box sx={{
      bgcolor: '#f5f5f5',
      p: 2,
      minHeight: '100vh',
      '@media print': {
        bgcolor: 'transparent',
        p: 0,
        '& .page-break': {
          pageBreakBefore: 'always',
          breakBefore: 'page'
        }
      }
    }}>
      <A4Page
        headerSrc={company.header || company.headerImage}
        footerSrc={company.footer || company.footerImage}
        watermarkSrc={company.watermark || company.watermarkImage}
        contentTop="48mm"
        contentBottom="28mm"
        company={company}
      >
        {/* Letter Header */}
        <Box sx={{ mb: 4 }}>
          <Typography sx={{ textAlign: "end" }}>{formatDate(data.issueDate)}</Typography>
          <Typography sx={{ mb: 1 }}>
            Dear {data.employeeName},
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
          At {company.name}, employee performance forms the core basis for annual compensation review and career enhancement apart from ensuring parity.
        </Typography>

        <Typography sx={{ mb: 4 }}>
          Your performance has been reviewed and your performance banding for the year {prevYear}-{issueYear} is
          "<strong>Met Expectation</strong>".
        </Typography>

        <Typography sx={{ mb: 4 }}>
          In recognition of your performance your compensation has been revised to INR <strong>{data.newCTC}</strong> per
          Annum effective <strong>{formatDate(data.effectiveDate)}</strong>.
        </Typography>

        <Typography sx={{ mb: 4 }}>
          Details of your revised compensation are given in Salary Annexure.  
        </Typography>

        <Typography sx={{ mb: 4 }}>
          We look forward to your very active participation and contribution in our journey of scaling
          newer heights.
        </Typography>

        <Typography sx={{ mb: 4 }}>
          Wishing you a happy and rewarding career with {company.name}
        </Typography>

        <Typography>Yours Sincerely,</Typography>

        {/* Signature Section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
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
            <Typography sx={{ textAlign: "justify" }}>
              <strong>CEO & Managing Director</strong>
            </Typography>
          </Box>
        </Box>
      </A4Page>
      <Box className="page-break" />
      <A4Page
        headerSrc={company.header || company.headerImage}
        footerSrc={company.footer || company.footerImage}
        watermarkSrc={company.watermark || company.watermarkImage}
        contentTop="48mm"
        contentBottom="28mm"
        company={company}
      >
        <Typography sx={{ mb: 6, textAlign: "center" }}>Salary Annexure</Typography>
        <Typography sx={{ marginLeft: "3mm" }}>Employee Code : {data.employeeId}</Typography>
        <Typography sx={{ marginLeft: "3mm" }}>Employee Name : {data.employeeName}</Typography>
        <Typography sx={{ mb: 3, marginLeft: "3mm" }}>Effective Date :  {formatDate(data.effectiveDate)}</Typography>

        {/* Salary Comparison Table */}
        <TableContainer
          component={Paper}
          sx={{
            border: "1.5px solid black",
            borderRadius: 0,
            backgroundColor: "transparent", // ✅ make transparent
            "& .MuiTableCell-root": {
              border: "1px solid black",
              fontSize: "11pt",
              padding: "6px 8px",
              verticalAlign: "middle",
              backgroundColor: "transparent", // ✅ make cells transparent too
            },
            boxShadow: "none", // ✅ remove shadow layer
          }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'lightblue' }}>
                <TableCell sx={{ fontWeight: 'bold' }}>Monthly Component</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Amount (₹)</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Yearly Component</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Amount (₹)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Basic</TableCell>
                <TableCell align="center">{formatCurrency(basicMonthly)}</TableCell>
                <TableCell></TableCell>
                <TableCell align="center">{formatCurrency(basicAnnual)}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>House Rent Allowance (HRA)</TableCell>
                <TableCell align="center">{formatCurrency(hraMonthly)}</TableCell>
                <TableCell></TableCell>
                <TableCell align="center">{formatCurrency(hraAnnual)}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Conveyance Allowance</TableCell>
                <TableCell align="center">{formatCurrency(conveyanceMonthly)}</TableCell>
                <TableCell></TableCell>
                <TableCell align="center">{formatCurrency(conveyanceAnnual)}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Medical Allowance</TableCell>
                <TableCell align="center">{formatCurrency(medicMonthly)}</TableCell>
                <TableCell></TableCell>
                <TableCell align="center">{formatCurrency(medicAnnual)}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Special Allowance</TableCell>
                <TableCell align="center">{formatCurrency(specialMonthly)}</TableCell>
                <TableCell></TableCell>
                <TableCell align="center">{formatCurrency(specialAnnual)}</TableCell>
              </TableRow>

              {/* Totals */}
              <TableRow sx={{ backgroundColor: 'rgba(173, 216, 230, 0.5)' }}>
                <TableCell sx={{ fontWeight: 'bold' }}>Monthly Gross</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                  {formatCurrency(
                    basicMonthly +
                    hraMonthly +
                    conveyanceMonthly +
                    medicMonthly +
                    specialMonthly
                  )}
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Annual CTC</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                  {formatCurrency(newCTC)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="body1" sx={{ mt: 2, textAlign: 'justify' }}>
          Please note that the details in this communication are  confidential  and  you  are  requested
          not to share the same with others.
        </Typography>
      </A4Page>
    </Box>
  );
};

export default IncrementLetterTemplate;