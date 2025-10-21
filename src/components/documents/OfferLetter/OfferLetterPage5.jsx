import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import A4Page from "../../layout/A4Page";
import placeholderSignature from '../../../assets/images/placeholder-signature.svg';
import placeholderStamp from '../../../assets/images/placeholder-stamp.svg';

const OfferLetterPage5 = ({ data, company }) => {
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
        DECLARATION & ACCEPTANCE
      </Typography>

      {/* Declaration Section */}
      <Box sx={{ 
        backgroundColor: "#f5f5f5", 
        p: "4mm", 
        borderRadius: "2mm", 
        mb: "8mm",
        border: "1px solid #ddd"
      }}>
        <Typography 
          className="company-accent" 
          sx={{ 
            fontSize: "12pt", 
            fontWeight: "bold", 
            mb: "3mm",
            textAlign: "center"
          }}
        >
          EMPLOYEE DECLARATION:
        </Typography>
        
        <Typography sx={{ 
          fontSize: "11pt", 
          textAlign: "justify", 
          mb: "3mm",
          lineHeight: 1.5
        }}>
          This is to confirm that the documents and information provided by me to the Company for the
          purpose of my services are true and accurate to the best of my knowledge and belief.
        </Typography>
        
        <Typography sx={{ 
          fontSize: "11pt", 
          textAlign: "justify", 
          mb: "3mm",
          lineHeight: 1.5
        }}>
          I also agree that the various terms and conditions set forth in this Agreement are fair,
          just and reasonable and I shall strictly adhere to the terms specified.
        </Typography>
        
        <Typography sx={{ 
          fontSize: "11pt", 
          textAlign: "justify", 
          mb: "3mm",
          lineHeight: 1.5
        }}>
          I will at all times follow the rules and regulations at the client's organizations.
        </Typography>
        
        <Typography sx={{ 
          fontSize: "11pt", 
          textAlign: "justify", 
          mb: "3mm",
          lineHeight: 1.5
        }}>
          I will keep all client information/data confidential.
        </Typography>
        
        <Typography sx={{ 
          fontSize: "11pt", 
          textAlign: "justify",
          lineHeight: 1.5
        }}>
          I will be solely responsible for any loss/damages that may arise as a result of my actions.
        </Typography>
      </Box>

      {/* Employee Signature Section */}
      <Box sx={{ 
        border: "2px solid #1976d2", 
        borderRadius: "3mm", 
        p: "5mm", 
        mb: "8mm",
        backgroundColor: "#f8f9fa"
      }}>
        <Typography sx={{ 
          fontSize: "12pt", 
          fontWeight: "bold", 
          mb: "4mm",
          textAlign: "center",
          color: "#1976d2"
        }}>
          EMPLOYEE ACCEPTANCE
        </Typography>
        
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <Box sx={{ flex: 1, mr: "5mm" }}>
            <Typography sx={{ fontSize: "11pt", mb: "8mm", fontWeight: "bold" }}>
              Employee Signature:
            </Typography>
            <Box sx={{ 
              borderBottom: "2px solid #333", 
              width: "120mm", 
              height: "15mm", 
              mb: "3mm" 
            }} />
            <Typography sx={{ fontSize: "11pt", fontWeight: "bold" }}>
              Employee Name: <span style={{ fontWeight: "normal" }}>{data.candidateName}</span>
            </Typography>
          </Box>
          
          <Box sx={{ textAlign: "right" }}>
            <Typography sx={{ fontSize: "11pt", mb: "3mm" }}>
              <strong>Place:</strong> {data.place || "__________"}
            </Typography>
            <Typography sx={{ fontSize: "11pt" }}>
              <strong>Date:</strong> _______________
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Company Signature Section */}
      <Box sx={{ 
        border: "2px solid #ff9800", 
        borderRadius: "3mm", 
        p: "5mm",
        backgroundColor: "#fff8e1"
      }}>
        <Typography sx={{ 
          fontSize: "12pt", 
          fontWeight: "bold", 
          mb: "4mm",
          textAlign: "center",
          color: "#e65100"
        }}>
          COMPANY AUTHORIZATION
        </Typography>
        
        <Typography sx={{ 
          fontSize: "11pt", 
          mb: "3mm",
          fontWeight: "bold"
        }}>
          For {company.name}
        </Typography>
        
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", textAlign: "center" }}>
          <Box>
            {(company.signature || placeholderSignature) && (
              <Box
                component="img"
                src={company.signature || placeholderSignature}
                alt="Company Signature"
                sx={{
                  width: 140,
                  height: 70,
                  objectFit: "contain",
                  mb: "2mm",
                  border: "1px solid #ddd",
                  borderRadius: "2mm",
                  backgroundColor: "white"
                }}
              />
            )}
            <Typography sx={{ fontSize: "11pt", fontWeight: "bold" }}>
              {company.hrName || "[HR Department Lead]"}
            </Typography>
            <Typography sx={{ fontSize: "11pt", color: "#666" }}>
              HR Department
            </Typography>
          </Box>
          
          <Box sx={{ textAlign: "center" }}>
            {(company.stamp || placeholderStamp) && (
              <Box
                component="img"
                src={company.stamp || placeholderStamp}
                alt="Company Stamp"
                sx={{
                  width: 80,
                  height: 80,
                  objectFit: "contain",
                  border: "1px solid #ddd",
                  borderRadius: "2mm",
                  backgroundColor: "white"
                }}
              />
            )}
            <Typography sx={{ fontSize: "10pt", color: "#666", mt: "1mm" }}>
              Official Stamp
            </Typography>
          </Box>
        </Box>
      </Box>
    </A4Page>
  );
};

export default OfferLetterPage5;
