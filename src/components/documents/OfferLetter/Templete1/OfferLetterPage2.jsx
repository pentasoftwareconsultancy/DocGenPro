import React from "react";
import { Typography, Table, TableHead, TableBody, TableRow, TableCell, Box, TableContainer, Grid } from "@mui/material";
import A4Page from "../../../layout/A4Page";
import { generateOfferLetterComponents, formatCurrency } from "../../../../utils/salaryCalculations";

const Template1OfferLetterPage2 = ({ data, company }) => {
  // Use auto-calculation if CTC is provided, otherwise use manual components
  const ctc = parseFloat(data.ctc || data.annualSalary || 350000); // Default to 3.5 LPA
  const autoComponents = generateOfferLetterComponents(ctc);

  // === Total Salary ===
  const totalSalaryAnually = parseFloat(data.salary); // annual salary

  // === Annual components (percentages of totalSalaryAnually) ===
  const basicAnnual = totalSalaryAnually * 0.4013;
  const hraAnnual = totalSalaryAnually * 0.1798;
  const conveyanceAnnual = totalSalaryAnually * 0.1599;
  const specialAnnual = totalSalaryAnually * 0.1196;
  const foodAnnual = totalSalaryAnually * 0.0929;
  const medicAnnual = totalSalaryAnually * 0.0464;

  // === Monthly components ===
  const basicMonthly = Math.round(basicAnnual / 12);
  const hraMonthly = Math.round(hraAnnual / 12);
  const conveyanceMonthly = Math.round(conveyanceAnnual / 12);
  const specialMonthly = Math.round(specialAnnual / 12);
  const foodMonthly = Math.round(foodAnnual / 12);
  const medicMonthly = Math.round(medicAnnual / 12);

  // === Components array for table ===
  const salaryComponents = [
    { name: "Basic", monthly: basicMonthly, annual: basicAnnual },
    { name: "House Rent Allowance", monthly: hraMonthly, annual: hraAnnual },
    { name: "Dearness Allowance", monthly: conveyanceMonthly, annual: conveyanceAnnual },
    { name: "Special Allowance", monthly: specialMonthly, annual: specialAnnual },
    { name: "Food Allowance", monthly: foodMonthly, annual: foodAnnual },
    { name: "Misc. Allowance", monthly: medicMonthly, annual: medicAnnual },
  ];
  
  // === Totals ===
  const totalMonthly = salaryComponents.reduce((acc, c) => acc + c.monthly, 0);
  const totalAnnual = salaryComponents.reduce((acc, c) => acc + c.annual, 0);

  return (
    <A4Page
      headerSrc={company?.headerImage || "/assets/jdit_header.png"}
      footerSrc={company?.footerImage || "/assets/jdit_footer.png"}
      watermarkSrc={company?.watermarkImage || company?.watermark || "/assets/jdit_watermark.png"}
      contentTop="45mm"
      contentBottom="28mm"
      company={company}
    >
      {/* Document Title */}
      <Typography
        align="center"
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
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 1.5,
        marginBottom: "6mm"
      }}>
        Annexure A Salary Structure
      </Typography>

      {/* Salary Table */}
      <TableContainer sx={{ mb: "6mm" }}>
        <Table sx={{ border: "2px solid #333" }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "rgba(116, 194, 250, 0.7)" }}>
              <TableCell sx={{
                fontWeight: "bold",
                border: "1px solid #333",
                fontSize: "11pt",
                color: "white",
                py: "0.5mm"
              }}>
                Salary Components
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: "bold",
                  border: "1px solid #333",
                  fontSize: "11pt",
                  color: "white",
                  py: "0.5mm"
                }}
              >
                Per month (Rs.)
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: "bold",
                  border: "1px solid #333",
                  fontSize: "11pt",
                  color: "white",
                  py: "0.5mm"
                }}
              >
                Per Annum (Rs.)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{
                  border: "1px solid #333",
                  fontSize: "11pt",
                  py: "3mm"
                }}></TableCell>
              <TableCell sx={{
                  border: "1px solid #333",
                  fontSize: "11pt",
                  py: "3mm"
                }}></TableCell>
              <TableCell sx={{
                  border: "1px solid #333",
                  fontSize: "11pt",
                  py: "3mm"
                }}></TableCell>
            </TableRow>
            {salaryComponents.map((row, i) => (
              <TableRow key={i}>
                <TableCell sx={{
                  border: "1px solid #333",
                  fontSize: "11pt",
                  py: "0.5mm"
                }}>
                  {row.name}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    border: "1px solid #333",
                    fontSize: "11pt",
                    py: "0.5mm"
                  }}
                >
                  {formatCurrency(row.monthly)}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    border: "1px solid #333",
                    fontSize: "11pt",
                    py: "0.5mm"
                  }}
                >
                  {formatCurrency(row.annual)}
                </TableCell>
              </TableRow>
            ))}
            {/* Totals Row */}
            <TableRow sx={{ backgroundColor: "rgba(116, 194, 250, 0.7)", }}>
              <TableCell sx={{
                fontWeight: "bold",
                border: "2px solid #333",
                fontSize: "11pt",
                py: "0.5mm"
              }}>
                Total Monthly Gross Salary
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: "bold",
                  border: "2px solid #333",
                  fontSize: "11pt",
                  py: "0.5mm"
                }}
              >
                {formatCurrency(totalMonthly)}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: "bold",
                  border: "2px solid #333",
                  fontSize: "11pt",
                  py: "0.5mm"
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
                src={company.signature}
                alt="Signature 1"
                sx={{ width: 100, height: "auto" }}
              />
            </Grid>

            {/* Right image */}
            <Grid item>
              <Box
                component="img"
                src={company.stamp}
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

export default Template1OfferLetterPage2;
