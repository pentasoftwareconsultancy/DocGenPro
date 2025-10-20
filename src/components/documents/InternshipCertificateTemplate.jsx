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

  return (
    <A4Page
      headerSrc={company.headerImage}
      footerSrc={company.footerImage}
      watermarkSrc={company.watermarkImage}
      contentTop="44mm"
      contentBottom="28mm"
      company={company}
    >
      {/* HIGHLIGHT: No header/footer/watermark images shown here! Only A4Page handles them */}

      <Divider sx={{ mb: 5, borderColor: "#ddd" }} />

      <Typography
        variant="h4"
        align="center"
        className="company-accent"
        sx={{
          mb: 4,
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "#333",
          letterSpacing: 2,
        }}
      >
        Internship Certificate
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 5 }}>
        <Typography variant="body2" className="company-secondary" sx={{ color: "#555" }}>
          Certificate No: INT-{new Date().getFullYear()}-
          {String(data.id || Math.floor(Math.random() * 1000)).padStart(3, "0")}
        </Typography>
        <Typography variant="body2" className="company-secondary" sx={{ color: "#555" }}>
          Date: {formatDate(data.issueDate)}
        </Typography>
      </Box>

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
          This is to certify that <strong>{data.internName}</strong> has successfully completed {data.internshipPeriod} of internship at <strong>{company.name}</strong> from <strong>{formatDate(data.startDate)}</strong> to <strong>{formatDate(data.endDate)}</strong> in the <strong>{data.department}</strong> department.
        </Typography>
        <Typography paragraph>
          During the internship period, {data.internName} worked on the project titled <strong>"{data.projectName}"</strong> and acquired skills in <strong>{data.skills}</strong>.
        </Typography>
        <Typography paragraph>
          Throughout the internship, {data.internName} demonstrated <strong>{data.performance}</strong> performance, a strong work ethic, and the ability to learn and apply new concepts quickly. {data.internName} was a valuable member of our team and made significant contributions to the project.
        </Typography>
        <Typography>
          We wish {data.internName} all the best for future endeavors.
        </Typography>
      </Box>

      {/* Signature and stamp area: right aligned, never overlaps */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          mt: 10,
          gap: 5,
        }}
      >
        <Box sx={{ textAlign: "center", mr: 3 }}>
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
          <Typography variant="body2" sx={{ color: "#555" }}>
            HR Manager
          </Typography>
          <Typography variant="body2" sx={{ color: "#555" }}>
            {company.name}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
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
      </Box>
    </A4Page>
  );
};

export default InternshipCertificateTemplate;
