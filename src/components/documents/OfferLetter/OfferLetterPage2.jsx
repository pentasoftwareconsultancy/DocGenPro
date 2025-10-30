import React from "react";
import { Typography, Table, TableHead, TableBody, TableRow, TableCell, Box, TableContainer, Grid } from "@mui/material";
import A4Page from "../../layout/A4Page";
import { generateOfferLetterComponents, formatCurrency } from "../../../utils/salaryCalculations";
import signature from "../../../assets/images/SmartSoftware/Sign.png";
import stamp from "../../../assets/images/SmartSoftware/Stamp.png";

const OfferLetterPage2 = ({ data, company }) => {
  // Use auto-calculation if CTC is provided, otherwise use manual components
  const ctc = parseFloat(data.ctc || data.annualSalary || 350000); // Default to 3.5 LPA
  const autoComponents = generateOfferLetterComponents(ctc);

  // === Total Salary ===
  const totalSalaryAnually = parseFloat(data.salary); // annual salary

  // === Annual components (percentages of totalSalaryAnually) ===
  const basicAnnual = totalSalaryAnually * 0.4013;
  const hraAnnual = totalSalaryAnually * 0.1798;
  const conveyanceAnnual = totalSalaryAnually * 0.1599;
  const medicAnnual = totalSalaryAnually * 0.1394;
  const specialAnnual = totalSalaryAnually * 0.1196;

  // === Monthly components ===
  const basicMonthly = Math.round(basicAnnual / 12);
  const hraMonthly = Math.round(hraAnnual / 12);
  const conveyanceMonthly = Math.round(conveyanceAnnual / 12);
  const medicMonthly = Math.round(medicAnnual / 12);
  const specialMonthly = Math.round(specialAnnual / 12);

  // === Components array for table ===
  const salaryComponents = [
    { name: "Basic", monthly: basicMonthly, annual: basicAnnual },
    { name: "HRA", monthly: hraMonthly, annual: hraAnnual },
    { name: "Conveyance", monthly: conveyanceMonthly, annual: conveyanceAnnual },
    { name: "Medic", monthly: medicMonthly, annual: medicAnnual },
    { name: "Special", monthly: specialMonthly, annual: specialAnnual },
  ];
  
  // === Totals ===
  const totalMonthly = salaryComponents.reduce((acc, c) => acc + c.monthly, 0);
  const totalAnnual = salaryComponents.reduce((acc, c) => acc + c.annual, 0);

  return (
    <A4Page
      headerSrc={company?.headerImage || "/assets/jdit_header.png"}
      footerSrc={company?.footerImage || "/assets/jdit_footer.png"}
      watermarkSrc={company?.watermarkImage || company?.watermark || "/assets/jdit_watermark.png"}
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
          color: "black",
          textDecoration: "underline",
          mb: "8mm",
        }}
      >
        Enclosures: Annexure A-salary Structure
      </Typography>

      <Typography sx={{
        fontSize: "11pt",
        textAlign: "center",
        lineHeight: 1.5,
        fontStyle: "italic",
        marginBottom: "6mm"
      }}>
        Annexure A Salary Structure
      </Typography>

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
              <TableRow key={i}>
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
            <TableRow sx={{ backgroundColor: "rgba(227, 242, 253, 0.7)", }}>
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

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <Box sx={{ mt: "6mm" }}>
          <Grid container spacing={2} alignItems="center">
            {/* Left image */}
            <Grid item>
              <Box
                component="img"
                src={signature}
                alt="Signature 1"
                sx={{ width: 100, height: "auto" }}
              />
            </Grid>

            {/* Right image */}
            <Grid item>
              <Box
                component="img"
                src={stamp}
                alt="Stamp"
                sx={{ width: 100, height: "auto" }}
              />
            </Grid>
          </Grid>

          {/* Names and designation below images */}
          <Box sx={{ mt: "2mm" }}>
            <Typography sx={{ mb: "1mm" }}><strong>{company.hrName}</strong></Typography>
            <Typography><strong>HR Manager - HR Shared Services</strong></Typography>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ mb: "1mm" }}>Signature : ________________________</Typography>
          <Typography>Candidate Name : {data.mrms} {data.candidateName}</Typography>
        </Box>
      </Box>
    </A4Page>
  );
};

export default OfferLetterPage2;
