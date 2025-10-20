import React from 'react';
import { Box, Typography } from '@mui/material';
import A4Page from '../layout/A4Page';
import placeholderSignature from '../../assets/images/placeholder-signature.svg';
import placeholderStamp from '../../assets/images/placeholder-stamp.svg';

const ExperienceLetterTemplate = ({ data, company }) => {
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
          EXPERIENCE CERTIFICATE
        </Typography>
        <Typography variant="body2" className="company-secondary" sx={{ color: 'text.secondary' }}>
          Ref: {company.name?.replace(/\s+/g, '').toUpperCase()}/HR/{new Date().getFullYear()}/{Math.floor(Math.random() * 1000).toString().padStart(3, '0')}
        </Typography>
      </Box>

      {/* Date */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Date:</strong> {formatDate(data.issueDate) || formatDate(new Date())}
        </Typography>
      </Box>

      {/* To Whom It May Concern */}
      <Typography variant="h6" sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center' }}>
        TO WHOM IT MAY CONCERN
      </Typography>

      {/* Letter Body */}
      <Typography variant="body1" sx={{ mb: 3, textAlign: 'justify', lineHeight: 1.8 }}>
        This is to certify that <strong>{data.employeeName || '[Employee Name]'}</strong> 
        {data.fatherName && (
          <>, {data.gender === 'Female' ? 'D/o' : 'S/o'} {data.fatherName}</>
        )}, 
        was employed with <strong>{company.name || '[Company Name]'}</strong> from 
        <strong> {formatDate(data.joiningDate) || '[Joining Date]'}</strong> to 
        <strong> {formatDate(data.relievingDate) || '[Relieving Date]'}</strong>.
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, textAlign: 'justify', lineHeight: 1.8 }}>
        During {data.gender === 'Female' ? 'her' : 'his'} tenure with us, 
        {data.gender === 'Female' ? 'she' : 'he'} worked as 
        <strong> {data.designation || '[Designation]'}</strong> in the 
        <strong> {data.department || '[Department]'}</strong> department.
      </Typography>

      {data.employeeId && (
        <Typography variant="body1" sx={{ mb: 3, textAlign: 'justify', lineHeight: 1.8 }}>
          {data.gender === 'Female' ? 'Her' : 'His'} Employee ID was <strong>{data.employeeId}</strong>.
        </Typography>
      )}

      <Typography variant="body1" sx={{ mb: 3, textAlign: 'justify', lineHeight: 1.8 }}>
        {data.gender === 'Female' ? 'Her' : 'His'} total experience with our organization is 
        <strong> {calculateExperience(data.joiningDate, data.relievingDate) || '[Experience Duration]'}</strong>.
      </Typography>

      {/* Performance and Conduct */}
      <Typography variant="body1" sx={{ mb: 3, textAlign: 'justify', lineHeight: 1.8 }}>
        During {data.gender === 'Female' ? 'her' : 'his'} association with us, 
        {data.gender === 'Female' ? 'she' : 'he'} has shown 
        {data.performance || 'excellent performance, dedication, and professionalism'}. 
        {data.gender === 'Female' ? 'She' : 'He'} was found to be hardworking, sincere, and honest in 
        {data.gender === 'Female' ? 'her' : 'his'} duties.
      </Typography>

      {data.achievements && (
        <Typography variant="body1" sx={{ mb: 3, textAlign: 'justify', lineHeight: 1.8 }}>
          <strong>Notable Achievements:</strong> {data.achievements}
        </Typography>
      )}

      {data.skills && (
        <Typography variant="body1" sx={{ mb: 3, textAlign: 'justify', lineHeight: 1.8 }}>
          <strong>Key Skills:</strong> {data.skills}
        </Typography>
      )}

      {/* Conduct and Character */}
      <Typography variant="body1" sx={{ mb: 3, textAlign: 'justify', lineHeight: 1.8 }}>
        {data.gender === 'Female' ? 'Her' : 'His'} conduct and character were found to be 
        {data.conduct || 'exemplary'} throughout {data.gender === 'Female' ? 'her' : 'his'} tenure. 
        {data.gender === 'Female' ? 'She' : 'He'} maintained good relationships with colleagues and 
        contributed positively to the work environment.
      </Typography>

      {/* Reason for Leaving */}
      {data.reasonForLeaving && (
        <Typography variant="body1" sx={{ mb: 3, textAlign: 'justify', lineHeight: 1.8 }}>
          <strong>Reason for Leaving:</strong> {data.reasonForLeaving}
        </Typography>
      )}

      {/* Salary Information (Optional) */}
      {data.lastDrawnSalary && (
        <Typography variant="body1" sx={{ mb: 3, textAlign: 'justify', lineHeight: 1.8 }}>
          {data.gender === 'Female' ? 'Her' : 'His'} last drawn salary was 
          <strong> ₹{data.lastDrawnSalary}</strong> per month.
        </Typography>
      )}

      {/* Recommendation */}
      <Typography variant="body1" sx={{ mb: 3, textAlign: 'justify', lineHeight: 1.8 }}>
        We recommend {data.gender === 'Female' ? 'her' : 'him'} for any suitable position and wish 
        {data.gender === 'Female' ? 'her' : 'him'} all the best for {data.gender === 'Female' ? 'her' : 'his'} 
        future endeavors.
      </Typography>

      {/* Closing */}
      <Typography variant="body1" sx={{ mb: 4, textAlign: 'justify', lineHeight: 1.8 }}>
        This certificate is issued upon {data.gender === 'Female' ? 'her' : 'his'} request and without any 
        prejudice to our organization.
      </Typography>

      <Typography variant="body1" sx={{ mb: 6 }}>
        We wish {data.gender === 'Female' ? 'her' : 'him'} success in all {data.gender === 'Female' ? 'her' : 'his'} 
        future endeavors.
      </Typography>

      {/* Signature Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mt: 6 }}>
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

      {/* Company Contact Information */}
      {(company.address || company.phone || company.email) && (
        <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid #ddd' }}>
          <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary', mb: 1 }}>
            {company.address && (
              <>{company.address}<br /></>
            )}
            {company.phone && (
              <>Phone: {company.phone} | </>
            )}
            {company.email && (
              <>Email: {company.email}</>
            )}
          </Typography>
        </Box>
      )}

      {/* Footer Note */}
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary' }}>
          This is a system-generated document and does not require a physical signature.
        </Typography>
      </Box>
    </A4Page>
  );
};

export default ExperienceLetterTemplate;