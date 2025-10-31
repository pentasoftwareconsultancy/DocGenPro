// OfferLetterPage1.js
import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import A4Page from "../../../layout/A4Page";

// const numberToWords = (num) => {
//   if (num === 0) return "Zero Rupees Only";

//   const a = [
//     "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
//     "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
//     "Sixteen", "Seventeen", "Eighteen", "Nineteen"
//   ];
//   const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

//   const inWords = (n) => {
//     if (n < 20) return a[n];
//     if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? " " + a[n % 10] : "");
//     if (n < 1000) return a[Math.floor(n / 100)] + " Hundred" + (n % 100 ? " and " + inWords(n % 100) : "");
//     if (n < 100000) return inWords(Math.floor(n / 1000)) + " Thousand" + (n % 1000 ? " " + inWords(n % 1000) : "");
//     if (n < 10000000) return inWords(Math.floor(n / 100000)) + " Lakh" + (n % 100000 ? " " + inWords(n % 100000) : "");
//     // New: Handle crores
//     if (n < 1000000000) return inWords(Math.floor(n / 10000000)) + " Crore" + (n % 10000000 ? " " + inWords(n % 10000000) : "");
//     return "Value too large";
//   };

//   return inWords(num) + " Rupees Only";
// };

const Templete9OfferLetterPage1 = ({ company, data }) => {
  const fmtDate = (d) =>
    d ? new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) : "";

  const joiningDate = fmtDate(data.joiningDate); // dynamic joining date
  const offerDate = fmtDate(data.issueDate); // dynamic issue date
  const grossSalary = data.salary; // dynamic or fallback
  const position = data.position;

  return (
    <A4Page
      headerSrc={company.headerImage || "/assets/jdit_header.png"}
      footerSrc={company.footerImage }
      watermarkSrc={company.watermarkImage || company.watermark || "/assets/jdit_watermark.png"}
      contentTop="48mm"
      contentBottom="28mm"
      company={company}
    >
      {/* Offer Date */}
      <Typography sx={{ mb: "10mm", textAlign: "right" }}>{offerDate}</Typography>

      {/* Candidate Details */}
      <Typography sx={{ mb: "3mm" }}>Name : {data.mrms} {data.candidateName}</Typography>
      <Typography sx={{ mb: "3mm" }}>Address : {data.address}</Typography>
      <Typography sx={{ mb: "6mm" }}>Subject : {position}</Typography>

      {/* Body of the Letter */}
      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "6mm" }}>
        Dear {data.candidateName.split(" ")[0]},
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "6mm" }}>
        Welcome to <strong>{company.name}</strong> . It was a pleasure meeting you to explore a career opportunity in <strong>{company.name}</strong>
        . Based on our discussions, we are pleased to offer you the position of  <strong>{data.position} </strong>with our organisation.The gross compensation will be INR<strong> {grossSalary} </strong>per annum.
        We wish to start commencing your job from<strong>{joiningDate}</strong> .The details of the terms and conditions of the offer of employment are detailed in the enclosed annexure-1.
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "6mm" }}>
        At <strong>{company.name}</strong> LLP we believe we have a historic opportunity of building a global world class company. We also believe we are very unique in several ways – being a flat,
        open and communicative organization; our ethos that encourages, promotes and rewards empowerment; initiative; flawless execution and leadership. In return, we promise to provide
        you a platform to grow and fulfil your personal and professional goals. We look for professionals like you who would partner the future growth of the Organization. We are confident
         that with your skills, competencies and capabilities you would be a valuable addition to the team.
        We look forward to you joining on <strong>{joiningDate}</strong>.
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

export default Templete9OfferLetterPage1;