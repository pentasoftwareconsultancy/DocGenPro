// OfferLetterPage1.js
import React from "react";
import { Typography } from "@mui/material";
import A4Page from "../../layout/A4Page";

const OfferLetterPage1 = ({ company, data }) => {
  const fmtDate = (d) =>
    d ? new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) : "";

  return (
    <A4Page
      headerSrc={company.headerImage || "/assets/jdit_header.png"}
      footerSrc={company.footerImage || "/assets/jdit_footer.png"}
      watermarkSrc={company.watermarkImage || "/assets/jdit_watermark.png"}
      contentTop="48mm"
      contentBottom="28mm"
      company={company}
    >
      {/* Document Title */}
      <Typography align="center" className="company-accent" sx={{ fontWeight: 700, textDecoration: "underline", mb: "8mm", fontSize: "16pt" }}>
        EMPLOYMENT OFFER
      </Typography>

      {/* Agreement Introduction */}
      <Typography sx={{ mb: "8mm", textAlign: "justify", lineHeight: 1.6 }}>
        This employment agreement is made on <strong>{fmtDate(data.issueDate)}</strong> at <strong>{company.city || "Pune"}</strong>.
      </Typography>

      {/* Parties Section */}
      <Typography sx={{ fontWeight: 700, mb: "3mm", fontSize: "12pt" }}>Between:</Typography>
      <Typography sx={{ mb: "3mm", pl: "5mm", textAlign: "justify" }}>
        <strong>{company.name}</strong> (hereinafter referred to as '<strong>{company.shortName || "Company"}</strong>')
      </Typography>
      <Typography sx={{ fontWeight: 700, mb: "3mm", fontSize: "12pt" }}>And:</Typography>
      <Typography sx={{ mb: "8mm", pl: "5mm" }}>
        <strong>{data.candidateName}</strong> (hereinafter referred to as '<strong>Employee</strong>')
      </Typography>

      {/* Employment Details */}
      <Typography sx={{ fontWeight: 700, mb: "4mm", fontSize: "12pt", textDecoration: "underline" }}>
        Employment Details:
      </Typography>
      <Typography sx={{ mb: "3mm", pl: "3mm" }}>• <strong>Offer ID/Employee ID:</strong> {data.offerId || data.employeeId || "To be assigned"}</Typography>
      <Typography sx={{ mb: "3mm", pl: "3mm" }}>• <strong>Position:</strong> {data.position}</Typography>
      <Typography sx={{ mb: "3mm", pl: "3mm" }}>• <strong>Employee Name:</strong> {data.candidateName}</Typography>
      <Typography sx={{ mb: "3mm", pl: "3mm" }}>
        • <strong>Working Hours:</strong> {data.workHours || "As per business requirement of the client"}
      </Typography>
      <Typography sx={{ mb: "3mm", pl: "3mm" }}>
        • <strong>Salary Payment Date:</strong> {data.salaryPaymentDate || "On the 7th working day of the following month"}
      </Typography>
      <Typography sx={{ mb: "6mm", pl: "3mm" }}>
        • <strong>Notice Period:</strong> {data.noticePeriod || "As per company policy"}
      </Typography>
    </A4Page>
  );
};

export default OfferLetterPage1;
