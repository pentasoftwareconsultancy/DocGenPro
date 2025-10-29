import React from 'react';
import { Box, Typography } from '@mui/material';
import A4Page from '../layout/A4Page';
import placeholderSignature from '../../assets/images/placeholder-signature.svg';
import placeholderStamp from '../../assets/images/placeholder-stamp.svg';

const ExperienceLetterTemplate1 = ({ data, company }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: '2-digit',
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
      <Typography sx={{ textAlign: "end", mb: "8mm" }}>{formatDate(data.issueDate)}</Typography>
      <Typography sx={{ mb: "8mm" }}><strong>

        Ref:PENTA\PUN\RMG01\Exp-Letter\PSCS0807
        {data.employeeId}</strong></Typography>
      {/* Letter Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            color: 'black',
            fontFamily: 'Verdana, sans-serif',
            textDecoration: 'underline'
          }}
        >
          Experience Certificate
        </Typography>
      </Box>


      {/* Letter Body */}
      <Typography variant="body1" sx={{ mb: 3, textAlign: 'justify', lineHeight: 1.8 }}>
        It is certified that <strong>{data.employeeName}</strong> was in our employment from  <strong>{formatDate(data.joiningDate)}</strong> to
        &nbsp;<strong>{formatDate(data.relievingDate)}</strong>.
     

     
        She was efficient and hardworking in this tenure. At the time of leaving the services of the company, She was designated as a <strong>{data.designation}</strong> 

     </Typography>

      <Typography variant="body1" sx={{ mb: 3, textAlign: 'justify', lineHeight: 1.8 }}>
        We wish her success in her future career.
      </Typography>

      <Typography variant="body1" sx={{ mb: 1, mt: 18 }}>
        For <strong>{company.name || '[Company Name]'}</strong>
      </Typography>

      {/* Signature Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
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
            <strong>{company.hrName}</strong>
          </Typography>
          <Typography sx={{ textAlign: "justify" }}>
            <strong>HR Manager-HR Shared Services</strong>
          </Typography>
        </Box>
      </Box>
    </A4Page>
  );
};

export default ExperienceLetterTemplate1;