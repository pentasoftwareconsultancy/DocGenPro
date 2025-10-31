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

const Templete3OfferLetterPage1 = ({ company, data }) => {
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
      watermarkSrc={company.watermarkImage || company.watermark || "/assets/jdit_watermark.png"}
      contentTop="68mm"
      contentBottom="28mm"
      company={company}
    >
      <Typography sx={{ textDecoration: "underline", textAlign: "center", fontSize: "10pt" }}>
        Offer Cum Appointment Letter
      </Typography>
      {/* Offer Date */}
      <Typography sx={{ textAlign: "right", fontSize: "10pt" }}>{offerDate}</Typography>

      {/* Candidate Details */}
      <Typography sx={{ mb: "6mm", fontWeight: "bold", fontSize: "10pt" }}>Employee Name: {data.mrms} {data.candidateName}</Typography>

      {/* Body of the Letter */}
      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "3mm", fontWeight: "bold", fontSize: "10pt" }}>
        Dear {data.candidateName.split(" ")[0]},
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontSize: "10pt" }}>
        With reference to your application and the subsequent interview you had with us, we are pleased to offer you the position of {data.position} for {data.location} Location on the following terms and conditions:
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontWeight: "bold", fontSize: "10pt" }}>
        1. {"  "}Date of Appointment
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontSize: "10pt" }}>
        {"      "}Your appointment is effective from <strong>{joiningDate}</strong>.
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontWeight: "bold", fontSize: "10pt" }}>
        2. {"  "}Joining
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontSize: "10pt" }}>
        {"      "}Your Joining will be at “<strong>{company.name}</strong>”, “<strong>{data.location}</strong>”.
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontWeight: "bold", fontSize: "10pt" }}>
        3. {"  "}Place of Employment
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontSize: "10pt", display: "flex", gap: "2mm", ml: "3mm" }}>
        3.1<Box>You acknowledge and agree that you may be assigned, transferred or deputed to offices, departments or Units of Company and / or its affiliates and / or their contractors and clients, whether in India or abroad. In the event of any such assignment, transfer or deputation, you may be required to consent to and /or agree to certain other agreements, or policies applicable to such an assignment, deputation or transfer.</Box>
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontSize: "10pt", display: "flex", gap: "2mm" , ml: "3mm"}}>
        3.2<Box>You acknowledge and agree that you may be assigned, transferred or deputed to offices, departments or Units of Company and / or its affiliates and / or their contractors and clients, whether in India or abroad. In the event of any such assignment, transfer or deputation, you may be required to consent to and /or agree to certain other agreements, or policies applicable to such an assignment, deputation or transfer.</Box>
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontWeight: "bold", fontSize: "10pt" }}>
        4. {"  "}Cost to Company
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontSize: "10pt" }}>
        <Box sx={{ marginLeft: "7mm", fontSize: "10pt", mb: "2mm" }}>You will be paid an annual emolument of <strong>Rs. {grossSalary}/-(Rupees {grossSalaryinWords} Only)</strong>. For detailed Break-up kindly refer the Annexure I.</Box>
        <Box sx={{ marginLeft: "7mm", fontSize: "10pt", mb: "2mm" }}>Your compensation may be reviewed on periodic basis and your salary may be adjusted, depending upon various factors, including your performance during the preceding period.</Box>
        <Box sx={{ marginLeft: "7mm", fontSize: "10pt", mb: "2mm" }}>Notwithstanding the above, you acknowledge that it is Company’s policy to review the compensation payable to its employees for successive years and such compensation may be higher or lower than the compensation received for the previous year depending upon various factors, including the overall performance of the Company.</Box>
      </Typography>
    </A4Page>
  );
};

export default Templete3OfferLetterPage1;
