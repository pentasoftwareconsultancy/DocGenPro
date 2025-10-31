import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import A4Page from "../layout/A4Page";
import placeholderSignature from '../../assets/images/placeholder-signature.svg';
import placeholderStamp from '../../assets/images/placeholder-stamp.svg';

const InternshipCertificateTemplate = ({ data, company }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };
  
  const heshe = () => {
    if (data.mrms === "Mr.") return "He";
    if (data.mrms === "Mrs." || data.mrms === "Miss.") return "She";
    if (data.mrms === "Mx.") return "They";
    return "They"; // default fallback
  };

  const hisher = () => {
    const pronoun = heshe();
    if (pronoun === "He") return "his";
    if (pronoun === "She") return "her";
    if (pronoun === "They") return "their";
    return "their";
  };

  const himher = () => {
    const pronoun = heshe();
    if (pronoun === "He") return "him";
    if (pronoun === "She") return "her";
    if (pronoun === "They") return "them";
    return "them";
  };

  return (
    <A4Page
      headerSrc={company.headerImage}
      footerSrc={company.footerImage}
      watermarkSrc={company.watermarkImage}
      contentTop="40mm"
      contentBottom="28mm"
      company={company}
    >

      <Typography
        variant="h4"
        align="center"
        // className="company-accent"
        sx={{
          mt: 14,
          mb: 8,
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: 2,
        }}
      >
        LETTER OF INTERNSHIP
      </Typography>

      <Box
        sx={{
          textAlign: "justify",
          mb: 5,
          lineHeight: 1.8,
          color: "#333",
          fontSize: "1.05rem",
        }}
      >
        <Typography paragraph>
          This is to certify that <strong>{data.mrms} {data.internName}</strong> has done {hisher()} internship at <strong>{company.name}</strong> From <strong>{formatDate(data.startDate)} - {formatDate(data.endDate)}.</strong> {heshe()} was designated as <strong>{data.field}.</strong>
        </Typography>
        <Typography sx={{ mt: 5 }}>
          During the internship, {heshe()} has demonstrated {hisher()} skills with self-motivation to learn new skills. {himher().charAt(0).toUpperCase() + hisher().slice(1)} performance exceeded our expectations and {heshe().toLowerCase()} was able to complete the given tasks on time. We wish {himher()} all the best for {hisher()} upcoming career.
        </Typography>
      </Box>

      {/* Signature and stamp area: right aligned, never overlaps */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          mt: 10,
          gap: 5,
        }}
      >
        <Box sx={{ textAlign: "justify" }}>
          <Typography variant="body2" sx={{ color: "#555", fontWeight: "bold", mb: 5 }}>
            {company.name}
          </Typography>
          <Box sx={{ display: "flex" }}>
          <img
            src={company.signature || placeholderSignature}
            alt="HR Signature"
            style={{
              maxWidth: 120,
              maxHeight: 64,
              objectFit: "contain",
              marginBottom: 4,
              display: "block",
            }}
            />
          <img
            src={company.stamp || placeholderStamp}
            alt="Company Stamp"
            style={{
              maxWidth: 80,
              maxHeight: 80,
              objectFit: "contain",
              borderRadius: "50%",
              background: "#f9f9f9",
              display: "block",
            }}
            />
          </Box>
          <Typography>
            {company.hrName}
          </Typography>
          <Typography variant="body2" sx={{ color: "#555" }}>
            HR Department Pune
          </Typography>
        </Box>
        <Box sx={{ textAlign: "justify" }}>
          <Typography>
            Signature: ______________________
          </Typography>
          <Typography>
            Candidate Name: <strong>{data.mrms} {data.internName}</strong>
          </Typography>
        </Box>
      </Box>
    </A4Page>
  );
};

export default InternshipCertificateTemplate;
