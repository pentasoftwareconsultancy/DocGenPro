import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import A4Page from "../layout/A4Page";

const CubeageIncrementLetter = ({ data, company }) => {
  const formatDate = (date) => {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, "0");
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const year = d.getFullYear();
    return `Date: ${day}/${month}/${year}`;
  };

  const newCTC = parseFloat(data.newCTC); // annual salary
  const ctcMonthly = Math.round(newCTC / 12);
  

  // === Annual components (percentages of totalSalaryAnually) ===
  const basicAnnual = newCTC * 0.4013;
  const hraAnnual = newCTC * 0.1798;
  const daAnnual = newCTC * 0.1243;
  const ltaAnnual = newCTC * 0.0929;
  const medicAnnual = newCTC * 0.1084;
  const specialAnnual = newCTC * 0.0929;

  // === Monthly components ===
  const basicMonthly = Math.round(basicAnnual / 12);
  const hraMonthly = Math.round(hraAnnual / 12);
  const daMonthly = Math.round(daAnnual / 12);
  const ltaMonthly = Math.round(ltaAnnual / 12);
  const medicMonthly = Math.round(medicAnnual / 12);
  const specialMonthly = Math.round(specialAnnual / 12);

  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        p: 2,
        minHeight: "100vh",
        "@media print": {
          bgcolor: "transparent",
          p: 0,
          "& .page-break": {
            pageBreakBefore: "always",
            breakBefore: "page",
          },
        },
      }}
    >
      <A4Page
        headerSrc={company.header || company.headerImage}
        footerSrc={company.footer || company.footerImage}
        watermarkSrc={company.watermark || company.watermarkImage}
        company={company}
        contentTop="45mm"
        contentBottom="25mm"
      >
        <Typography sx={{ textAlign: "right", mb: 2, mt: 12, fontWeight: "bold" }}>
          Date: {formatDate(data.issueDate)}
        </Typography>
        <Typography sx={{ textAlign: "center", fontWeight: "bold", mb: 3 }}>
          Appraisal Letter
        </Typography>
        <Typography sx={{ mb: 2, fontWeight: "bold" }}>
          Mr. {data.employeeName}
        </Typography>
        <Typography sx={{ mb: 2 }}>Congratulation!</Typography>
        <Typography sx={{ textAlign: "justify", mb: 2 }}>
          We are pleased to inform you that based on your performance and
          contribution to the company, our management has revised your
          compensation to <strong>Rs. {data.newCTC} /-LPA.</strong> With effect
          from {data.effectiveDate}.
        </Typography>
        <Typography sx={{ mb: 2 }}>
          We appreciate your initiative and expect you to take many more such
          responsibilities in future assignments to ensure company’s growth.
        </Typography>
        <Typography sx={{ mb: 2 }}>Wishing you all Success.</Typography>
        <Typography sx={{ mt: 4 }}>Authorized Signature,</Typography>
        <Typography sx={{ mt: 1 }}>
          For <strong>Cubeage Technology Services Pvt. Ltd.</strong>
        </Typography>
      </A4Page>
      <Box className="page-break" />
      <A4Page
        headerSrc={company.header || company.headerImage}
        footerSrc={company.footer || company.footerImage}
        watermarkSrc={company.watermark || company.watermarkImage}
        company={company}
        contentTop="45mm"
        contentBottom="25mm"
      >
        {/* Salary Table */}
        <Typography
          sx={{
            mt: 10,
            fontWeight: "bold",
            textAlign: "center",
            textDecoration: "underline",
          }}
        >
          Compensation Structure
        </Typography>

        <Typography sx={{ fontWeight: "bold", fontSize: "11pt", mt: 5 }}>
          Name: {data.employeeName}
        </Typography>
        <Typography sx={{ fontWeight: "bold", fontSize: "11pt" }}>
          Designation: {data.designation}
        </Typography>
        <Typography sx={{ fontWeight: "bold", fontSize: "11pt", mb: 5 }}>
          Location: {data.location || "Pune"}
        </Typography>

        <TableContainer
          component={Paper}
          sx={{
            border: "1px solid black",
            borderRadius: 0,
            mt: 2,
            "& .MuiTableCell-root": {
              border: "1px solid black",
              fontSize: "11pt",
              padding: "6px 8px",
            },
            boxShadow: "none",
          }}
        >
          <Table size="small">
            <TableBody>
              <TableRow sx={{ backgroundColor: "rgba(200,200,200,0.7)" }}>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Components
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Amount/Month
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Amount/Annum
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Basic</TableCell>
                <TableCell align="center">{basicMonthly.toLocaleString("en-IN")}</TableCell>
                <TableCell align="center">{basicAnnual.toLocaleString("en-IN")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">HRA</TableCell>
                <TableCell align="center">{hraMonthly.toLocaleString("en-IN")}</TableCell>
                <TableCell align="center">{hraAnnual.toLocaleString("en-IN")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">DA</TableCell>
                <TableCell align="center">{daMonthly.toLocaleString("en-IN")}</TableCell>
                <TableCell align="center">{daAnnual.toLocaleString("en-IN")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">LTA</TableCell>
                <TableCell align="center">{ltaMonthly.toLocaleString("en-IN")}</TableCell>
                <TableCell align="center">{ltaAnnual.toLocaleString("en-IN")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">ALLOWANCE (Shift+Skill)</TableCell>
                <TableCell align="center">{medicMonthly.toLocaleString("en-IN")}</TableCell>
                <TableCell align="center">{medicAnnual.toLocaleString("en-IN")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">SPECIAL ALLOWANCE</TableCell>
                <TableCell align="center">{specialMonthly.toLocaleString("en-IN")}</TableCell>
                <TableCell align="center">{specialAnnual.toLocaleString("en-IN")}</TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: "rgba(200,200,200,0.7)" }}>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  CTC
                </TableCell>
                <TableCell align="center">{ctcMonthly.toLocaleString("en-IN")}</TableCell>
                <TableCell align="center">{newCTC.toLocaleString("en-IN")}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography sx={{ mt: 5, fontSize: "9pt", textAlign: "justify" }}>
          *PVLP will be payable to you on yearly basis subject to performance
          review.
        </Typography>
      </A4Page>
    </Box>
  );
};

export default CubeageIncrementLetter;
