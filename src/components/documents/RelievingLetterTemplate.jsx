import React from 'react';
import { Box, Typography } from '@mui/material';
import A4Page from '../layout/A4Page';
import smartHeader from '../../assets/images/SmartSoftware/smart-header.png'; // Header image
import newSignature from '../../assets/images/SmartSoftware/Sign.png'; // New signature
import stamp from "../../assets/images/SmartSoftware/Stamp.png";
import watermarkImg from '../../assets/images/SmartSoftware/Watermark.png'; // ✅ Watermark image

const RelievingLetterTemplate = ({ data, company }) => {
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
      headerSrc={smartHeader}
      footerSrc={company.footer || company.footerImage}
      contentTop="48mm"
      contentBottom="35mm"
      company={company}
    >

      <Typography sx={{ textAlign: "end", mb: "8mm" }}>
        {formatDate(data.issueDate)}
      </Typography>
      <Typography sx={{ mb: "8mm" }}><strong>Ref:SMART\PUNHD\RMG01\Relieving-Letter\{data.employeeId}</strong></Typography>

      {/* Title */}
      <Box sx={{ textAlign: 'center', mb: 5, position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            textDecoration: 'underline',
            fontSize: '14pt'
          }}
        >
          Relieving Letter
        </Typography>
      </Box>

      {/* Employee Info */}
      <Box sx={{ mb: 3, px: 4, position: 'relative', zIndex: 1 }}>
        <Typography variant="body1" sx={{ mb: 1, fontSize: '12pt' }}>
          <strong>{data.employeeName || 'Ms. Anagha Arun Kapse'}</strong>
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
          This is in reference to your resignation letter, wherein you had requested to be relieved
          from your services on{' '}
          <strong>{formatDate(data.lastWorkingDay) || 'November 24, 2022'}</strong>. We wish to
          inform you that your resignation has been accepted and you shall be relieved from your
          duties as <strong>{data.designation || 'Quality Analyst'}</strong>.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '12pt', textAlign: 'justify' }}>
          We appreciate your contributions made to the organization and wish you all the best for
          your future endeavors.
        </Typography>
      </Box>

      {/* Signature */}
      <Box sx={{ mt: 8, px: 4, position: 'relative', zIndex: 1 }}>
        <Typography variant="body1" sx={{ fontSize: '12pt', mb: 6 }}>
          For <strong>{company.name || 'Smart Software Services (I) Pvt. Ltd.'}</strong>
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
          <Typography variant="body1" sx={{ fontSize: '12pt', lineHeight: 1.2 }}>
            {data.signatoryName || 'Sandeep Patil'}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '11pt' }}>
            {data.signatoryDesignation || 'HR Manager - HR Shared Services'}
          </Typography>
        </Box>
      </Box>
    </A4Page>
  );
};

export default RelievingLetterTemplate;