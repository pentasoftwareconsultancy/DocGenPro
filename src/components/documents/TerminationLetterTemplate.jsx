import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import A4Page from '../layout/A4Page';
import { formatCurrency } from '../../utils/salaryCalculations';
import placeholderSignature from '../../assets/images/placeholder-signature.svg';
import placeholderStamp from '../../assets/images/placeholder-stamp.svg';

const TerminationLetterTemplate = ({ data, company }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const calculateTenure = (joiningDate, terminationDate) => {
    if (!joiningDate || !terminationDate) return '';
    const start = new Date(joiningDate);
    const end = new Date(terminationDate);
    const diffTime = Math.abs(end - start);
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

  const getTerminationColor = (type) => {
    switch (type) {
      case 'Voluntary Resignation': return '#4CAF50';
      case 'Mutual Consent': return '#2196F3';
      case 'End of Contract': return '#FF9800';
      case 'Performance Issues': return '#FF5722';
      case 'Misconduct': return '#F44336';
      case 'Redundancy': return '#9C27B0';
      case 'Retirement': return '#607D8B';
      default: return '#757575';
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
            color: getTerminationColor(data.terminationType)
          }}
        >
          TERMINATION LETTER
        </Typography>

        {/* Reference Number and Date */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="body1">
            <strong>Ref No:</strong> {company.name?.replace(/\s+/g, '').toUpperCase()}/TL/{new Date().getFullYear()}/{Math.floor(Math.random() * 1000).toString().padStart(3, '0')}
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
            {data.designation || '[Designation]'}, {data.department || '[Department]'}
          </Typography>
        </Box>

        {/* Subject */}
        <Typography variant="body1" sx={{ mb: 3, fontWeight: 'bold', color: getTerminationColor(data.terminationType) }}>
          <strong>Subject: Termination of Employment - {data.terminationType || 'Employment Termination'}</strong>
        </Typography>

        {/* Salutation */}
        <Typography variant="body1" sx={{ mb: 3 }}>
          Dear {data.employeeName || '[Employee Name]'},
        </Typography>

        {/* Main Content */}
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          {data.terminationType === 'Voluntary Resignation' ? (
            `We acknowledge receipt of your resignation letter dated ${formatDate(data.resignationDate) || '[Resignation Date]'}. 
            After due consideration, we accept your resignation from the position of ${data.designation || '[Designation]'} 
            at ${company.name}.`
          ) : (
            `This letter serves as formal notification that your employment with ${company.name} 
            will be terminated effective ${formatDate(data.terminationDate) || '[Termination Date]'}.`
          )}
        </Typography>

        {/* Employment Summary Table */}
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
                <TableCell><strong>Last Working Day</strong></TableCell>
                <TableCell>{formatDate(data.terminationDate) || '[Termination Date]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Total Service Period</strong></TableCell>
                <TableCell>{calculateTenure(data.joiningDate, data.terminationDate) || '[Service Period]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Reason for Termination</strong></TableCell>
                <TableCell>{data.terminationType || '[Termination Type]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Notice Period</strong></TableCell>
                <TableCell>{data.noticePeriod || '[Notice Period]'}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Reason for Termination */}
        {data.terminationReason && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Reason for Termination:
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, whiteSpace: 'pre-line', p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
              {data.terminationReason}
            </Typography>
          </Box>
        )}

        {/* Final Settlement Details */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          Final Settlement Details:
        </Typography>
        <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'success.light' }}>
                <TableCell sx={{ fontWeight: 'bold' }}>Particulars</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><strong>Salary for {formatDate(data.terminationDate)?.split(' ')[1] || 'Final Month'}</strong></TableCell>
                <TableCell>{data.finalSalary ? formatCurrency(data.finalSalary) : '[Final Salary]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Pending Leave Encashment</strong></TableCell>
                <TableCell>{data.leaveEncashment ? formatCurrency(data.leaveEncashment) : '[Leave Encashment]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Bonus/Incentives (if applicable)</strong></TableCell>
                <TableCell>{data.bonus ? formatCurrency(data.bonus) : 'N/A'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Gratuity (if applicable)</strong></TableCell>
                <TableCell>{data.gratuity ? formatCurrency(data.gratuity) : 'N/A'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Other Dues</strong></TableCell>
                <TableCell>{data.otherDues ? formatCurrency(data.otherDues) : 'N/A'}</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: 'success.main', color: 'white' }}>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}><strong>Total Settlement Amount</strong></TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>
                  {data.totalSettlement ? formatCurrency(data.totalSettlement) : '[Total Settlement]'}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Handover Requirements */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          Handover Requirements:
        </Typography>
        <Box component="ul" sx={{ mb: 3, pl: 3 }}>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            Complete handover of all assigned projects and responsibilities to {data.handoverTo || '[Designated Person]'}.
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            Return all company property including laptop, mobile phone, ID card, access cards, and any other equipment.
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            Submit all pending reports, documents, and files in proper format.
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            Complete the exit interview process with HR Department.
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            Clear all financial dues and return any advance payments if applicable.
          </Typography>
        </Box>

        {/* Post-Employment Obligations */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          Post-Employment Obligations:
        </Typography>
        <Box component="ul" sx={{ mb: 3, pl: 3 }}>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            Maintain confidentiality of all proprietary and confidential information.
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            Honor the non-compete clause as per the employment agreement for {data.nonCompetePeriod || '12 months'}.
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            Not to solicit company employees or clients for a period of {data.nonSolicitPeriod || '12 months'}.
          </Typography>
        </Box>

        {/* Final Remarks */}
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          {data.terminationType === 'Voluntary Resignation' ? (
            `We appreciate your contributions during your tenure with ${company.name} and wish you success in your future endeavors.`
          ) : data.terminationType === 'Retirement' ? (
            `We thank you for your dedicated service and valuable contributions to ${company.name} throughout your career. We wish you a happy and healthy retirement.`
          ) : (
            `We acknowledge your service during your employment with ${company.name}.`
          )}
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          The final settlement will be processed and credited to your account within {data.settlementPeriod || '30 days'} 
          after completion of all handover formalities.
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
            I acknowledge receipt of this termination letter and understand all the terms and conditions mentioned above.
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

export default TerminationLetterTemplate;