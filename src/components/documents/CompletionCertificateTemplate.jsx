import { Box, Typography, Divider } from '@mui/material';
import A4Page from '../layout/A4Page';

const CompletionCertificateTemplate = ({ data, company }) => {
  // Format date
  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
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
      <Box sx={{ p: 2, textAlign: 'center' }}>
      {/* Header with Company Logo and Information */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box sx={{ width: 80, height: 80, bgcolor: 'grey.200', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="body2" color="text.secondary">[Logo]</Typography>
        </Box>
        <Box sx={{ textAlign: 'center', flexGrow: 1 }}>
          <Typography variant="h5" className="company-accent" component="div">{company.name}</Typography>
          <Typography variant="body2">{company.address}</Typography>
          <Typography variant="body2">{company.email} | {company.phone}</Typography>
        </Box>
        <Box sx={{ width: 80, height: 80 }}></Box> {/* Empty box for balance */}
      </Box>

      <Divider sx={{ mb: 5 }} />

      {/* Certificate Title */}
      <Typography variant="h4" className="company-accent" component="div" sx={{ mb: 4, fontWeight: 'bold', textTransform: 'uppercase' }}>
        Certificate of Completion
      </Typography>

      {/* Certificate Number and Date */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 5 }}>
        <Typography variant="body2" className="company-secondary">Certificate No: COMP-{new Date().getFullYear()}-{String(Math.floor(Math.random() * 1000)).padStart(3, '0')}</Typography>
        <Typography variant="body2" className="company-secondary">Date: {formatDate(data.issueDate)}</Typography>
      </Box>

      {/* Certificate Content */}
      <Box sx={{ textAlign: 'justify', mb: 5, lineHeight: 1.8 }}>
        <Typography variant="body1" paragraph>
          This is to certify that <strong>{data.employeeName}</strong> (Employee ID: <strong>{data.employeeId}</strong>) has successfully completed the project titled <strong>"{data.projectName}"</strong> at <strong>{company.name}</strong>.
        </Typography>
        
        <Typography variant="body1" paragraph>
          The project commenced on <strong>{formatDate(data.startDate)}</strong> and was completed on <strong>{formatDate(data.completionDate)}</strong>. {data.employeeName} served as the <strong>{data.role}</strong> and demonstrated exceptional skills in <strong>{data.technologies}</strong>.
        </Typography>
        
        <Typography variant="body1" paragraph>
          Key achievements during this project include:
        </Typography>
        
        <Typography variant="body1" component="div" sx={{ pl: 3, mb: 3, textAlign: 'left' }}>
          {data.achievements}
        </Typography>
        
        <Typography variant="body1">
          We appreciate the dedication, technical expertise, and professionalism demonstrated throughout the project duration.
        </Typography>
      </Box>

      {/* Signature and Stamp */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 8, mb: 4 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ width: 100, height: 60, mb: 1, mx: 'auto', bgcolor: 'grey.100', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="body2" color="text.secondary">[Signature]</Typography>
          </Box>
          <Typography variant="body2">Project Manager</Typography>
          <Typography variant="body2">{company.name}</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ width: 100, height: 60, mb: 1, mx: 'auto', bgcolor: 'grey.100', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="body2" color="text.secondary">[Signature]</Typography>
          </Box>
          <Typography variant="body2">CEO</Typography>
          <Typography variant="body2">{company.name}</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ width: 80, height: 80, mb: 1, mx: 'auto', bgcolor: 'grey.100', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
            <Typography variant="body2" color="text.secondary">[Stamp]</Typography>
          </Box>
        </Box>
      </Box>

      {/* Company Footer */}
      <Box sx={{ mt: 6, pt: 2, borderTop: '1px solid #ddd', textAlign: 'center' }}>
        <Typography variant="body2">{company.footer}</Typography>
      </Box>
      </Box>
    </A4Page>
  );
};

export default CompletionCertificateTemplate;