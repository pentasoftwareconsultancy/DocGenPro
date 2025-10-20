import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import A4Page from '../layout/A4Page';
import placeholderSignature from '../../assets/images/placeholder-signature.svg';
import placeholderStamp from '../../assets/images/placeholder-stamp.svg';

const NOCTemplate = ({ data, company }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const getNOCTypeDescription = (type) => {
    switch (type) {
      case 'Part-time Job':
        return 'to engage in part-time employment/freelance work';
      case 'Higher Education':
        return 'to pursue higher education/professional courses';
      case 'Visa/Immigration':
        return 'for visa application and immigration purposes';
      case 'Loan Application':
        return 'for loan application and financial purposes';
      case 'Property Purchase':
        return 'for property purchase and related legal formalities';
      case 'Business Registration':
        return 'for business registration and entrepreneurial activities';
      case 'Training/Certification':
        return 'to attend training programs and obtain professional certifications';
      case 'Conference/Seminar':
        return 'to attend conferences, seminars, and professional events';
      default:
        return 'for the specified purpose';
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
            color: 'primary.main'
          }}
        >
          NO OBJECTION CERTIFICATE (NOC)
        </Typography>

        {/* Reference Number and Date */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="body1">
            <strong>Ref No:</strong> {company.name?.replace(/\s+/g, '').toUpperCase()}/NOC/{new Date().getFullYear()}/{Math.floor(Math.random() * 1000).toString().padStart(3, '0')}
          </Typography>
          <Typography variant="body1">
            <strong>Date:</strong> {formatDate(data.issueDate) || formatDate(new Date())}
          </Typography>
        </Box>

        {/* To Whom It May Concern */}
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
          To Whom It May Concern,
        </Typography>

        {/* Main Content */}
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          This is to certify that <strong>{data.employeeName || '[Employee Name]'}</strong>, 
          Employee ID: <strong>{data.employeeId || '[Employee ID]'}</strong>, is currently employed with 
          <strong> {company.name}</strong> as <strong>{data.designation || '[Designation]'}</strong> 
          in the <strong>{data.department || '[Department]'}</strong> department since 
          <strong> {formatDate(data.joiningDate) || '[Joining Date]'}</strong>.
        </Typography>

        {/* Employee Details Table */}
        <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.light' }}>
                <TableCell sx={{ fontWeight: 'bold' }}>Employee Details</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Information</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><strong>Full Name</strong></TableCell>
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
                <TableCell><strong>Employment Type</strong></TableCell>
                <TableCell>{data.employmentType || 'Full-time'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Work Location</strong></TableCell>
                <TableCell>{data.workLocation || company.address || '[Work Location]'}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* NOC Purpose */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          Purpose of NOC:
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, p: 2, backgroundColor: '#f0f8ff', borderRadius: 1, border: '1px solid #e3f2fd' }}>
          This No Objection Certificate is issued to <strong>{data.employeeName || '[Employee Name]'}</strong> 
          <strong> {getNOCTypeDescription(data.nocType)}</strong> 
          {data.specificPurpose && (
            <span>, specifically for <strong>{data.specificPurpose}</strong></span>
          )}.
        </Typography>

        {/* NOC Details */}
        <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'success.light' }}>
                <TableCell sx={{ fontWeight: 'bold' }}>NOC Details</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Information</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><strong>NOC Type</strong></TableCell>
                <TableCell>{data.nocType || '[NOC Type]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Specific Purpose</strong></TableCell>
                <TableCell>{data.specificPurpose || '[Specific Purpose]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Duration/Validity</strong></TableCell>
                <TableCell>
                  {data.validFrom && data.validTo 
                    ? `${formatDate(data.validFrom)} to ${formatDate(data.validTo)}`
                    : data.duration || '[Duration/Validity Period]'
                  }
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Requesting Organization</strong></TableCell>
                <TableCell>{data.requestingOrganization || '[Requesting Organization]'}</TableCell>
              </TableRow>
              {data.additionalDetails && (
                <TableRow>
                  <TableCell><strong>Additional Details</strong></TableCell>
                  <TableCell>{data.additionalDetails}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* NOC Statement */}
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontWeight: 'bold', color: 'primary.main' }}>
          We hereby confirm that <strong>{company.name}</strong> has NO OBJECTION to 
          <strong> {data.employeeName || '[Employee Name]'}</strong> 
          {getNOCTypeDescription(data.nocType)} as mentioned above.
        </Typography>

        {/* Terms and Conditions */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          Terms and Conditions:
        </Typography>
        <Box component="ul" sx={{ mb: 3, pl: 3 }}>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            This NOC is issued based on the employee's current employment status and good standing with the company.
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            The employee must continue to fulfill all employment obligations and responsibilities.
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            Any conflict of interest or violation of company policies will result in immediate revocation of this NOC.
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            This certificate is valid only for the specified purpose and duration mentioned above.
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            The company reserves the right to withdraw this NOC at any time if circumstances change.
          </Typography>
          {data.customConditions && (
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>
              {data.customConditions}
            </Typography>
          )}
        </Box>

        {/* Additional Information */}
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          This certificate is issued upon the employee's request and is valid for the purpose and duration specified above. 
          For any verification or additional information, please feel free to contact our HR Department.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          We wish {data.employeeName || '[Employee Name]'} success in their endeavor.
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
            <Typography variant="body2" sx={{ mt: 1, fontSize: '0.8rem' }}>
              Authorized Signatory
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

        {/* Contact Information */}
        <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid #ddd' }}>
          <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary', mb: 1 }}>
            For verification, please contact: HR Department | Email: {company.email || '[Company Email]'} | Phone: {company.phone || '[Company Phone]'}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary' }}>
            This is a system-generated document. Please verify all details before use.
          </Typography>
        </Box>
      </Box>
    </A4Page>
  );
};

export default NOCTemplate;