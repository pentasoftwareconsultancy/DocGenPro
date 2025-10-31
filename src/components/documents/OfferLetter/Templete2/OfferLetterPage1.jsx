// OfferLetterPage1.js
import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import A4Page from "../../../layout/A4Page";

const numberToWords = (num) => {
  if (num === 0) return "Zero Rupees Only";

  const a = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
    "Sixteen", "Seventeen", "Eighteen", "Nineteen"
  ];
  const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  const inWords = (n) => {
    if (n < 20) return a[n];
    if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? " " + a[n % 10] : "");
    if (n < 1000) return a[Math.floor(n / 100)] + " Hundred" + (n % 100 ? " and " + inWords(n % 100) : "");
    if (n < 100000) return inWords(Math.floor(n / 1000)) + " Thousand" + (n % 1000 ? " " + inWords(n % 1000) : "");
    if (n < 10000000) return inWords(Math.floor(n / 100000)) + " Lakh" + (n % 100000 ? " " + inWords(n % 100000) : "");
    // New: Handle crores
    if (n < 1000000000) return inWords(Math.floor(n / 10000000)) + " Crore" + (n % 10000000 ? " " + inWords(n % 10000000) : "");
    return "Value too large";
  };

  return inWords(num) + " Rupees Only";
};

const Templete2OfferLetterPage1 = ({ company, data }) => {
  const fmtDate = (d) =>
    d ? new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) : "";

  const joiningDate = fmtDate(data.joiningDate); // dynamic joining date
  const offerDate = fmtDate(data.issueDate); // dynamic issue date
  const grossSalary = data.salary; // dynamic or fallback
  const position = data.position;
  const grossSalaryinWords = numberToWords(Math.round(grossSalary));

  return (
    <A4Page
      headerSrc={company.headerImage || "/assets/jdit_header.png"}
      footerSrc={company.footerImage || "/assets/jdit_footer.png"}
      watermarkSrc={company.watermarkImage || company.watermark || "/assets/jdit_watermark.png"}
      contentTop="48mm"
      contentBottom="28mm"
      company={company}
    >
      {/* Offer Date */}
      <Typography sx={{ mb: "10mm", textAlign: "right" }}>{offerDate}</Typography>

      {/* Candidate Details */}
      <Typography sx={{ mb: "3mm" }}>Name : {data.mrms} {data.candidateName}</Typography>
      <Typography sx={{ mb: "6mm" }}>Position : {position}</Typography>

      {/* Body of the Letter */}
      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "6mm" }}>
        Dear {data.candidateName.split(" ")[0]},
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "6mm" }}>
        We are pleased to offer you the position of {position}. As discussed by us you are requested to Join
        On {joiningDate}, if there is any change in the date of joining changes can be taken under consideration.
        Your total Gross salary will be Rs. {grossSalary} ({grossSalaryinWords}) per year.
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "6mm" }}>
        Subject to various deductions as per companies and government policy.
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6 }}>
        The roles and responsibilities and other terms and conditions of your employment will be specified
        in your letter of appointment.
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "6mm" }}>
        We welcome you to <strong>{company.name}</strong> Family and hope it would be the
        beginning of a long and mutually beneficial association.
      </Typography>

      <Typography sx={{ textAlign: "center", lineHeight: 1.6, mb: "6mm" }}>
        Kindly acknowledge the duplicate copy of this letter as an acceptance of this offer.
      </Typography>

      {/* Closing */}
      <Typography sx={{ mb: "3mm" }}>Yours Sincerely,</Typography>
      <Typography sx={{ mb: "1mm" }}>For <strong>{company.name}</strong></Typography>
      {/* Closing Box with images and text */}
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
    </A4Page>
  );
};

export default Templete2OfferLetterPage1;
