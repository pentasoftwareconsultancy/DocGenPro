import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import A4Page from '../layout/A4Page';
import placeholderSignature from '../../assets/images/placeholder-signature.svg';
import placeholderStamp from '../../assets/images/placeholder-stamp.svg';

const RelievingLetterTemplate = ({ data, company }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const calculateExperience = (startDate, endDate) => {
    if (!startDate || !endDate) return '';
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    
    if (months < 0) {
      years--;
      months += 12;
    }
    
    if (years > 0 && months > 0) {
      return `${years} year${years > 1 ? 's' : ''} and ${months} month${months > 1 ? 's' : ''}`;
    } else if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''}`;
    } else if (months > 0) {
      return `${months} month${months > 1 ? 's' : ''}`;
    } else {
      return 'Less than a month';
    }
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
          RELIEVING LETTER
        </Typography>
        <Typography variant="body2" className="company-secondary" sx={{ color: 'text.secondary' }}>
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
        <strong>Subject: Relieving from Employment</strong>
      </Typography>

      {/* Letter Body */}
      <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
        Dear {data.employeeName || '[Employee Name]'},
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, textAlign: 'justify' }}>
        This is to acknowledge receipt of your resignation letter dated {formatDate(data.resignationDate) || '[Resignation Date]'} 
        and to inform you that you are hereby relieved from your duties as 
        <strong> {data.designation || '[Designation]'}</strong> in the 
        <strong> {data.department || '[Department]'}</strong> department with effect from 
        <strong> {formatDate(data.relievingDate) || '[Relieving Date]'}</strong>.
      </Typography>

      {/* Employment Details Table */}
      <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'primary.light' }}>
              <TableCell sx={{ fontWeight: 'bold' }} colSpan={2}>
                EMPLOYMENT DETAILS
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Employee Name</TableCell>
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
              <TableCell sx={{ fontWeight: 'bold' }}>Date of Joining</TableCell>
              <TableCell>{formatDate(data.joiningDate) || '[Joining Date]'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Date of Resignation</TableCell>
              <TableCell>{formatDate(data.resignationDate) || '[Resignation Date]'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Last Working Day</TableCell>
              <TableCell>{formatDate(data.lastWorkingDay) || '[Last Working Day]'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Relieving Date</TableCell>
              <TableCell>{formatDate(data.relievingDate) || '[Relieving Date]'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Total Experience</TableCell>
              <TableCell>{calculateExperience(data.joiningDate, data.relievingDate) || '[Experience Duration]'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Notice Period Served</TableCell>
              <TableCell>{data.noticePeriodServed || 'As per company policy'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Handover and Clearance */}
      <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
        We acknowledge that you have completed the handover of your responsibilities and duties to 
        {data.handoverTo ? ` ${data.handoverTo}` : ' your designated colleague'} and have obtained 
        necessary clearances from all departments.
      </Typography>

      {/* Assets and Documents */}
      <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
        We confirm that you have returned all company property, documents, equipment, and assets 
        {data.assetsReturned ? ` including ${data.assetsReturned}` : ''} that were in your possession 
        during your employment with us.
      </Typography>

      {/* Final Settlement */}
      {data.finalSettlement && (
        <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
          <strong>Final Settlement:</strong> Your final settlement including salary, leave encashment, 
          and other dues {data.finalSettlement === 'completed' ? 'has been processed' : 'will be processed'} 
          as per company policy.
        </Typography>
      )}

      {/* Performance and Conduct */}
      <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
        During your tenure with us, your performance was 
        {data.performance || 'satisfactory'} and your conduct was 
        {data.conduct || 'professional'}. We appreciate your contributions to the organization.
      </Typography>

      {/* Reason for Leaving */}
      {data.reasonForLeaving && (
        <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
          <strong>Reason for Leaving:</strong> {data.reasonForLeaving}
        </Typography>
      )}

      {/* Confidentiality Reminder */}
      <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
        We would like to remind you that the confidentiality obligations and non-disclosure agreements 
        signed during your employment continue to remain in effect even after your relieving.
      </Typography>

      {/* Future Reference */}
      <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify' }}>
        We wish you all the best for your future endeavors. Should you require any employment verification 
        or reference letter in the future, please feel free to contact our HR department.
      </Typography>

      {/* Closing */}
      <Typography variant="body1" sx={{ mb: 6, textAlign: 'justify' }}>
        Thank you for your services to {company.name || '[Company Name]'} and we wish you success 
        in all your future endeavors.
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
            {data.signatoryName || 'HR Manager'}
          </Typography>
          <Typography variant="body2">
            {data.signatoryDesignation || 'Human Resources'}
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

      {/* Acknowledgment Section */}
      <Box sx={{ mt: 6, pt: 3, borderTop: '2px solid #000' }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          EMPLOYEE ACKNOWLEDGMENT:
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          I acknowledge receipt of this relieving letter and confirm that I have completed all formalities 
          and returned all company property.
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

export default RelievingLetterTemplate;