import React from 'react';
import { Box, Typography } from '@mui/material';
import A4Page from '../layout/A4Page';
import smartHeader from '../../assets/images/SmartSoftware/smart-header.png'; // Header image
import newSignature from '../../assets/images/SmartSoftware/Sign.png'; // New signature
import stamp from "../../assets/images/SmartSoftware/Stamp.png";
import watermarkImg from '../../assets/images/SmartSoftware/Watermark.png'; // ✅ Watermark image

const RelievingLetterTemplate1 = ({ data, company }) => {
  const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <A4Page
      headerSrc={company.header || smartHeader}
      footerSrc={company.footer || company.footerImage}
      contentTop="65mm"
      contentBottom="35mm"
      company={company}
    >

      <Typography sx={{ textAlign: "end", mb: "8mm" }}>
        {formatDate(data.issueDate)}
      </Typography>

      {/* Employee Info */}
      <Box sx={{ mb: 3, px: 4, position: 'relative', zIndex: 1 }}>
        <Typography variant="body1" sx={{ mb: 1, fontSize: '12pt' }}>
          <strong>{data.mrms} {data.employeeName || 'Ms. Anagha Arun Kapse'}</strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 1, fontSize: '12pt' }}>
          <strong>{data.designation || 'Quality Analyst'}</strong>
        </Typography>
      </Box>

      {/* Body */}
      <Box sx={{ mb: 3, px: 4, position: 'relative', zIndex: 1 }}>
        <Typography variant="body1" sx={{ fontSize: '12pt', textAlign: 'justify', mb: 2 }}>
          Dear {data.employeeName?.split(' ')[0] || 'Anagha'},
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '12pt', textAlign: 'justify', mb: 2 }}>
          This letter confirms that we accept your voluntary and irrevocable resignation from employment of your position as <strong>{data.designation}</strong> in the Department of <strong>{data.department}</strong>. Your last day of employment will be <strong>{formatDate(data.lastWorkingDay)}</strong>. 
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '12pt', textAlign: 'justify' }}>
          We wish you success in all of your future endeavors
        </Typography>
      </Box>

      {/* Signature */}
      <Box sx={{ mt: 8, px: 4, position: 'relative', zIndex: 1 }}>
        <Typography variant="body1" sx={{ fontSize: '12pt', mb: 4 }}>
          Sincerely,
        </Typography>

        <Box sx={{ textAlign: 'left' }}>
          <Box
            component="img"
            src={newSignature}
            alt="Authorized Signatory"
            sx={{
              width: 120,
              height: 60,
              objectFit: 'contain',
              mb: 1
            }}
          />
          <Box
            component="img"
            src={stamp}
            alt="Stamp"
            sx={{
              width: 120,
              height: 60,
              objectFit: 'contain',
              mb: 1
            }}
          />
          <Typography variant="body1" sx={{ fontSize: '12pt', lineHeight: 1.2, fontWeight: 'bold' }}>
            {company.hrName || 'Sandeep Patil'}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '11pt', fontWeight: 'bold' }}>
            HR Relations Lead
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '11pt', fontWeight: 'bold' }}>
            Department of HR Relations
          </Typography>
        </Box>
      </Box>
    </A4Page>
  );
};

export default RelievingLetterTemplate1;