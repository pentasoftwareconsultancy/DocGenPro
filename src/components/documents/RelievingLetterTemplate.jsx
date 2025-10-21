import React from 'react';
import { Box, Typography } from '@mui/material';
import A4Page from '../layout/A4Page';
import smartHeader from '../../assets/images/SmartSoftware/smart-header.png'; // Header image
import newSignature from '../../assets/images/SmartSoftware/Sign.png'; // New signature
import watermarkImg from '../../assets/images/SmartSoftware/Watermark.png'; // ✅ Watermark image

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

  return (
    <A4Page
      headerSrc={smartHeader}
      footerSrc={company.footer || company.footerImage}
      contentTop="48mm"
      contentBottom="35mm"
      company={company}
    >
      {/* Watermark Image */}
      <Box
  component="img"
  src={watermarkImg}
  alt="Watermark"
  sx={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(-30deg)',
    width: '70%',
    height: 'auto',
    opacity: 0.3, // Increase temporarily to see it clearly
    pointerEvents: 'none',
    zIndex: 0,
    userSelect: 'none',
  }}
/>


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
          {data.designation || 'Quality Analyst'}
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
          <strong>{formatDate(data.relievingDate) || 'November 24, 2022'}</strong>. We wish to
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
          For {company.name || 'Smart Software Services (I) Pvt. Ltd.'}
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
          <Typography variant="body1" sx={{ fontSize: '12pt', lineHeight: 1.2 }}>
            {data.signatoryName || 'Sandeep Patil'}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '11pt' }}>
            {data.signatoryDesignation || 'HR Manager - HR Shared Services'}
          </Typography>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 10,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontSize: '9pt',
          color: 'text.secondary',
          lineHeight: 1.3,
          zIndex: 1
        }}
      >
        <Typography variant="body2" sx={{ fontSize: '9pt' }}>
          info@smartsoftwareservice.com | www.smartsoftwareservice.com
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '9pt' }}>
          CIN : U74990PN2016PTC158285 | +91 20 2721 2597 | 7066511234 | 7066521234
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '9pt' }}>
          Reg. Address: E 102, Lakshadeep Palace, Near HDFC Bank, Kunal Icon Road, Pimple Saudagar,
          Pune 411027
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '9pt' }}>
          Corporate Address: 406, Changbhale Heights, Near Kalptaru Society, Pimple Gurav, Pune -
          411061
        </Typography>
      </Box>
    </A4Page>
  );
};

export default RelievingLetterTemplate;