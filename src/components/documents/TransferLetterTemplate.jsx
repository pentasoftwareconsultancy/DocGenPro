import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import A4Page from '../layout/A4Page';
import { formatCurrency } from '../../utils/salaryCalculations';
import placeholderSignature from '../../assets/images/placeholder-signature.svg';
import placeholderStamp from '../../assets/images/placeholder-stamp.svg';

const TransferLetterTemplate = ({ data, company }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const getTransferTypeColor = (type) => {
    switch (type) {
      case 'Promotion Transfer': return '#4CAF50';
      case 'Lateral Transfer': return '#2196F3';
      case 'Departmental Transfer': return '#FF9800';
      case 'Location Transfer': return '#9C27B0';
      case 'Project Transfer': return '#607D8B';
      case 'Temporary Transfer': return '#795548';
      default: return '#2196F3';
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
            color: getTransferTypeColor(data.transferType)
          }}
        >
          TRANSFER LETTER
        </Typography>

        {/* Reference Number and Date */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="body1">
            <strong>Ref No:</strong> {company.name?.replace(/\s+/g, '').toUpperCase()}/TF/{new Date().getFullYear()}/{Math.floor(Math.random() * 1000).toString().padStart(3, '0')}
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
            {data.currentDesignation || '[Current Designation]'}, {data.currentDepartment || '[Current Department]'}
          </Typography>
        </Box>

        {/* Subject */}
        <Typography variant="body1" sx={{ mb: 3, fontWeight: 'bold', color: getTransferTypeColor(data.transferType) }}>
          <strong>Subject: {data.transferType || 'Transfer'} - Effective {formatDate(data.effectiveDate) || '[Effective Date]'}</strong>
        </Typography>

        {/* Salutation */}
        <Typography variant="body1" sx={{ mb: 3 }}>
          Dear {data.employeeName || '[Employee Name]'},
        </Typography>

        {/* Main Content */}
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          We are pleased to inform you that the management has decided to transfer you from your current position 
          to a new role within <strong>{company.name}</strong>. This transfer is effective from 
          <strong> {formatDate(data.effectiveDate) || '[Effective Date]'}</strong> and is based on 
          {data.transferReason || 'organizational requirements and your professional development'}.
        </Typography>

        {/* Transfer Details Table */}
        <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.light' }}>
                <TableCell sx={{ fontWeight: 'bold' }}>Transfer Details</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Current</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>New</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><strong>Designation</strong></TableCell>
                <TableCell>{data.currentDesignation || '[Current Designation]'}</TableCell>
                <TableCell>{data.newDesignation || '[New Designation]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Department</strong></TableCell>
                <TableCell>{data.currentDepartment || '[Current Department]'}</TableCell>
                <TableCell>{data.newDepartment || '[New Department]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Location</strong></TableCell>
                <TableCell>{data.currentLocation || '[Current Location]'}</TableCell>
                <TableCell>{data.newLocation || '[New Location]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Reporting Manager</strong></TableCell>
                <TableCell>{data.currentReportingManager || '[Current Manager]'}</TableCell>
                <TableCell>{data.newReportingManager || '[New Manager]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Grade/Level</strong></TableCell>
                <TableCell>{data.currentGrade || '[Current Grade]'}</TableCell>
                <TableCell>{data.newGrade || '[New Grade]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Monthly Salary</strong></TableCell>
                <TableCell>{data.currentSalary ? formatCurrency(data.currentSalary) : '[Current Salary]'}</TableCell>
                <TableCell>{data.newSalary ? formatCurrency(data.newSalary) : '[New Salary]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Work Schedule</strong></TableCell>
                <TableCell>{data.currentWorkSchedule || '[Current Schedule]'}</TableCell>
                <TableCell>{data.newWorkSchedule || '[New Schedule]'}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* Transfer Information */}
        <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'success.light' }}>
                <TableCell sx={{ fontWeight: 'bold' }}>Transfer Information</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><strong>Transfer Type</strong></TableCell>
                <TableCell>{data.transferType || '[Transfer Type]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Effective Date</strong></TableCell>
                <TableCell>{formatDate(data.effectiveDate) || '[Effective Date]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Duration</strong></TableCell>
                <TableCell>{data.transferDuration || (data.transferType === 'Temporary Transfer' ? '[Duration]' : 'Permanent')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Reason for Transfer</strong></TableCell>
                <TableCell>{data.transferReason || '[Transfer Reason]'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Relocation Assistance</strong></TableCell>
                <TableCell>{data.relocationAssistance || 'As per company policy'}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {/* New Role Responsibilities */}
        {data.newResponsibilities && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Key Responsibilities in New Role:
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, whiteSpace: 'pre-line', p: 2, backgroundColor: '#f0f8ff', borderRadius: 1, border: '1px solid #e3f2fd' }}>
              {data.newResponsibilities}
            </Typography>
          </Box>
        )}

        {/* Handover Instructions */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          Handover Instructions:
        </Typography>
        <Box component="ul" sx={{ mb: 3, pl: 3 }}>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            Complete handover of all current responsibilities to {data.handoverTo || '[Designated Person]'} by {formatDate(data.handoverDate) || '[Handover Date]'}.
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            Prepare detailed handover notes for all ongoing projects and tasks.
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            Coordinate with your current and new reporting managers for a smooth transition.
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            Update all relevant stakeholders about your transfer and new contact details.
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            Complete any pending documentation and submit final reports.
          </Typography>
        </Box>

        {/* Benefits and Allowances */}
        {(data.relocationAllowance || data.travelAllowance || data.accommodationSupport) && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Transfer Benefits and Allowances:
            </Typography>
            <TableContainer component={Paper} variant="outlined">
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: 'info.light' }}>
                    <TableCell sx={{ fontWeight: 'bold' }}>Benefit Type</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Amount/Details</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.relocationAllowance && (
                    <TableRow>
                      <TableCell><strong>Relocation Allowance</strong></TableCell>
                      <TableCell>{formatCurrency(data.relocationAllowance)}</TableCell>
                    </TableRow>
                  )}
                  {data.travelAllowance && (
                    <TableRow>
                      <TableCell><strong>Travel Allowance</strong></TableCell>
                      <TableCell>{formatCurrency(data.travelAllowance)}</TableCell>
                    </TableRow>
                  )}
                  {data.accommodationSupport && (
                    <TableRow>
                      <TableCell><strong>Accommodation Support</strong></TableCell>
                      <TableCell>{data.accommodationSupport}</TableCell>
                    </TableRow>
                  )}
                  {data.otherBenefits && (
                    <TableRow>
                      <TableCell><strong>Other Benefits</strong></TableCell>
                      <TableCell>{data.otherBenefits}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}

        {/* Terms and Conditions */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          Terms and Conditions:
        </Typography>
        <Box component="ul" sx={{ mb: 3, pl: 3 }}>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            This transfer is subject to your acceptance and continued satisfactory performance.
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            All other terms and conditions of your employment remain unchanged unless specifically mentioned.
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            You will be entitled to all benefits and privileges associated with your new position and location.
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            {data.transferType === 'Temporary Transfer' 
              ? `This is a temporary transfer for ${data.transferDuration || '[Duration]'}, after which you will return to your original position unless otherwise decided.`
              : 'This is a permanent transfer and will be reflected in your employment records.'
            }
          </Typography>
          <Typography component="li" variant="body1" sx={{ mb: 1 }}>
            Any relocation expenses will be reimbursed as per company policy upon submission of valid receipts.
          </Typography>
        </Box>

        {/* Closing */}
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          We believe this transfer will provide you with new opportunities for professional growth and development. 
          We are confident that you will excel in your new role and contribute significantly to the success of your new team.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          Please confirm your acceptance of this transfer by signing and returning a copy of this letter to the HR Department 
          by <strong>{formatDate(data.acceptanceDeadline) || '[Acceptance Deadline]'}</strong>.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4 }}>
          We wish you all the best in your new role!
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
            Employee Acceptance:
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            I acknowledge receipt of this transfer letter and accept the terms and conditions of my transfer as mentioned above.
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

export default TransferLetterTemplate;