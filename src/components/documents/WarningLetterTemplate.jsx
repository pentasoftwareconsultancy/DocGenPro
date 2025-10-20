import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import A4Page from '../layout/A4Page';
import placeholderSignature from '../../assets/images/placeholder-signature.svg';
import placeholderStamp from '../../assets/images/placeholder-stamp.svg';

const WarningLetterTemplate = ({ data, company }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const getWarningColor = (level) => {
    switch (level) {
      case 'Verbal Warning': return '#FFA726';
      case 'First Written Warning': return '#FF7043';
      case 'Final Written Warning': return '#E53935';
      case 'Suspension': return '#8E24AA';
      default: return '#FF7043';
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
            mb: 2, 
            fontWeight: 'bold',
            textDecoration: 'underline',
            color: getWarningColor(data.warningLevel)
          }}
        >
          {data.warningLevel || 'WARNING LETTER'}
        </Typography>

        {/* Warning Level Badge */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: 4,
          p: 1,
          backgroundColor: getWarningColor(data.warningLevel),
          color: 'white',
          borderRadius: 1,
          fontWeight: 'bold'
        }}>
          <Typography variant="h6">
            {data.warningLevel || 'DISCIPLINARY ACTION'}
          </Typography>
        </Box>

        {/* Reference Number and Date */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="body1">
            <strong>Ref No:</strong> {company.name?.replace(/\s+/g, '').toUpperCase()}/WL/{new Date().getFullYear()}/{Math.floor(Math.random() * 1000).toString().padStart(3, '0')}
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
        <Typography variant="body1" sx={{ mb: 3, fontWeight: 'bold', color: getWarningColor(data.warningLevel) }}>
          <strong>Subject: {data.warningLevel || 'Disciplinary Action'} - {data.violationType || 'Policy Violation'}</strong>
        </Typography>

        {/* Salutation */}
        <Typography variant="body1" sx={{ mb: 3 }}>
          Dear {data.employeeName || '[Employee Name]'},
        </Typography>

        {/* Main Content */}
        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
          This letter serves as a formal {data.warningLevel?.toLowerCase() || 'warning'} regarding your conduct/performance 
          that has been found to be in violation of company policies and standards.
        </Typography>

        {/* Incident Details */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          Details of the Incident/Violation:
        </Typography>

        <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'error.light' }}>
                <TableCell sx={{ fontWeight: 'bold' }}>Particulars</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><strong>Date of Incident</strong></TableCell>
                <TableCell>{formatDate(data.incidentDate) || '[Incident Date]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Time of Incident</strong></TableCell>
                <TableCell>{data.incidentTime || '[Incident Time]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Location</strong></TableCell>
                <TableCell>{data.incidentLocation || '[Location]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Type of Violation</strong></TableCell>
                <TableCell>{data.violationType || '[Violation Type]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Witnesses (if any)</strong></TableCell>
                <TableCell>{data.witnesses || 'N/A'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Previous Warnings</strong></TableCell>
                <TableCell>{data.previousWarnings || 'None'}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Detailed Description */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          Description of the Incident:
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, whiteSpace: 'pre-line', p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
          {data.incidentDescription || '[Detailed description of the incident, violation, or performance issue that led to this disciplinary action. Include specific facts, dates, times, and any relevant circumstances.]'}
        </Typography>

        {/* Policy Reference */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          Policy/Rule Violated:
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          Your actions are in direct violation of <strong>{data.policyReference || '[Company Policy/Rule Reference]'}</strong> 
          as outlined in the Employee Handbook/Company Policies. This policy clearly states that 
          <em>{data.policyDescription || '[brief description of the violated policy]'}</em>.
        </Typography>

        {/* Corrective Action Required */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          Corrective Action Required:
        </Typography>
        <Box component="ul" sx={{ mb: 3, pl: 3 }}>
          {data.correctiveActions ? (
            data.correctiveActions.split('\n').map((action, index) => (
              <Typography component="li" variant="body1" key={index} sx={{ mb: 1 }}>
                {action}
              </Typography>
            ))
          ) : (
            <>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Immediate cessation of the behavior/conduct that led to this warning.
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Strict adherence to all company policies and procedures.
              </Typography>
              <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                Improvement in performance/conduct as per company standards.
              </Typography>
            </>
          )}
        </Box>

        {/* Consequences */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: 'error.main' }}>
          Consequences of Non-Compliance:
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: 'error.dark' }}>
          Please be advised that failure to improve your conduct/performance or any repetition of similar violations 
          will result in further disciplinary action, which may include:
        </Typography>
        <Box component="ul" sx={{ mb: 3, pl: 3 }}>
          <Typography component="li" variant="body1" sx={{ mb: 1, color: 'error.dark' }}>
            {data.warningLevel === 'Verbal Warning' && 'First Written Warning'}
            {data.warningLevel === 'First Written Warning' && 'Final Written Warning'}
            {data.warningLevel === 'Final Written Warning' && 'Suspension without pay'}
            {data.warningLevel === 'Suspension' && 'Termination of employment'}
            {!data.warningLevel && 'Further disciplinary action'}
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1, color: 'error.dark' }}>
            Suspension without pay
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1, color: 'error.dark' }}>
            Termination of employment
          </Typography>
        </Box>

        {/* Review Period */}
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          This warning will remain on your personnel file for a period of <strong>{data.reviewPeriod || '12 months'}</strong> 
          from the date of this letter. Your performance and conduct will be closely monitored during this period.
        </Typography>

        {/* Right to Appeal */}
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          You have the right to appeal this decision within <strong>{data.appealPeriod || '7 days'}</strong> 
          of receiving this letter by submitting a written appeal to the HR Department.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          Please acknowledge receipt of this letter by signing and returning a copy to the HR Department.
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
            I acknowledge receipt of this warning letter and understand the contents and consequences outlined above.
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

export default WarningLetterTemplate;