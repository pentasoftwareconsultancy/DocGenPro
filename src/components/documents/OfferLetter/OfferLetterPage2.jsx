import React from "react";
import { Typography, Table, TableHead, TableBody, TableRow, TableCell, Box, TableContainer } from "@mui/material";
import A4Page from "../../layout/A4Page";
import { generateOfferLetterComponents, formatCurrency } from "../../../utils/salaryCalculations";

const OfferLetterPage2 = ({ data, company }) => {
  // Use auto-calculation if CTC is provided, otherwise use manual components
  const ctc = parseFloat(data.ctc || data.annualSalary || 350000); // Default to 3.5 LPA
  const autoComponents = generateOfferLetterComponents(ctc);
  
  // Use provided components or auto-generated ones
  const salaryComponents = data.salaryComponents && data.salaryComponents.length > 0 
    ? data.salaryComponents 
    : autoComponents;
    
  const totalMonthly = salaryComponents.reduce((acc, row) => acc + (Number(row.monthly) || 0), 0);
  const totalAnnual = salaryComponents.reduce((acc, row) => acc + (Number(row.annual) || 0), 0);

  return (
    <A4Page
      headerSrc={company?.headerImage || "/assets/jdit_header.png"}
      footerSrc={company?.footerImage || "/assets/jdit_footer.png"}
      watermarkSrc={company?.watermarkImage || "/assets/jdit_watermark.png"}
      contentTop="48mm"
      contentBottom="28mm"
      company={company}
    >
      {/* Document Title */}
      <Typography
        align="center"
        className="company-accent"
        sx={{
          fontSize: "16pt",
          fontWeight: 700,
          textDecoration: "underline",
          mb: "8mm",
        }}
      >
        COMPENSATION STRUCTURE
      </Typography>

      {/* Confidentiality Notice */}
      <Box sx={{ 
        backgroundColor: "#f5f5f5", 
        p: "4mm", 
        borderRadius: "2mm", 
        mb: "6mm",
        border: "1px solid #ddd"
      }}>
        <Typography sx={{ 
          fontSize: "11pt", 
          textAlign: "justify", 
          lineHeight: 1.5,
          fontStyle: "italic"
        }}>
          <strong>Confidentiality Notice:</strong> Compensation is strictly confidential between the employee and the employer. 
          It has been determined based on various factors such as employee job role, skills, specific background and 
          professional merit. This information and any changes therein should be treated as personal and confidential.
        </Typography>
      </Box>

      {/* Salary Table */}
      <TableContainer sx={{ mb: "6mm" }}>
        <Table sx={{ border: "2px solid #333" }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#1976d2" }}>
              <TableCell sx={{ 
                fontWeight: "bold", 
                border: "1px solid #333", 
                fontSize: "12pt",
                color: "white",
                py: "3mm"
              }}>
                Salary Components
              </TableCell>
              <TableCell
                align="center"
                sx={{ 
                  fontWeight: "bold", 
                  border: "1px solid #333", 
                  fontSize: "12pt",
                  color: "white",
                  py: "3mm"
                }}
              >
                Per Month (₹)
              </TableCell>
              <TableCell
                align="center"
                sx={{ 
                  fontWeight: "bold", 
                  border: "1px solid #333", 
                  fontSize: "12pt",
                  color: "white",
                  py: "3mm"
                }}
              >
                Per Annum (₹)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {salaryComponents.map((row, i) => (
              <TableRow key={i} sx={{ '&:nth-of-type(even)': { backgroundColor: '#f9f9f9' } }}>
                <TableCell sx={{ 
                  border: "1px solid #333", 
                  fontSize: "11pt",
                  py: "2mm"
                }}>
                  {row.name}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ 
                    border: "1px solid #333", 
                    fontSize: "11pt",
                    py: "2mm"
                  }}
                >
                  {formatCurrency(row.monthly)}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ 
                    border: "1px solid #333", 
                    fontSize: "11pt",
                    py: "2mm"
                  }}
                >
                  {formatCurrency(row.annual)}
                </TableCell>
              </TableRow>
            ))}
            {/* Totals Row */}
            <TableRow sx={{ backgroundColor: "#e3f2fd" }}>
              <TableCell sx={{ 
                fontWeight: "bold", 
                border: "2px solid #333", 
                fontSize: "12pt",
                py: "3mm"
              }}>
                Total Monthly Gross Salary
              </TableCell>
              <TableCell
                align="right"
                sx={{ 
                  fontWeight: "bold", 
                  border: "2px solid #333", 
                  fontSize: "12pt",
                  py: "3mm"
                }}
              >
                {formatCurrency(totalMonthly)}
              </TableCell>
              <TableCell
                align="right"
                sx={{ 
                  fontWeight: "bold", 
                  border: "2px solid #333", 
                  fontSize: "12pt",
                  py: "3mm"
                }}
              >
                {formatCurrency(totalAnnual)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Retention Bonus Section */}
      <Box sx={{ 
        backgroundColor: "#fff3e0", 
        p: "4mm", 
        borderRadius: "2mm", 
        border: "1px solid #ff9800"
      }}>
        <Typography sx={{ 
          fontSize: "12pt", 
          mb: "2mm", 
          fontWeight: "bold",
          color: "#e65100"
        }}>
          Niche Skill Retention Bonus:
        </Typography>
        <Typography sx={{ 
          fontSize: "11pt", 
          textAlign: "justify", 
          lineHeight: 1.5
        }}>
          You would be eligible for retention bonus. You will receive 48% of Annual earnings of your
          salary other than special and statutory benefits for each year. This amount is payable
          subject to completion of 42 Months at JDIT. Please note, this amount is not payable in case
          of project ramp down or closure, contract completion, termination due to code of conduct or
          for what so ever is the reason. It is Mandatory to be on project and billable at the time
          payout after 42 months completion at People Prime.
        </Typography>
      </Box>
    </A4Page>
  );
};

export default OfferLetterPage2;
