import React from "react";
import { Typography, Box } from "@mui/material";
import A4Page from "../../../layout/A4Page";

const Templete2OfferLetterPage3 = ({ data, company }) => {
  return (
    <A4Page
      headerSrc={company?.headerImage || "/assets/jdit_header.png"}
      footerSrc={company?.footerImage || "/assets/jdit_footer.png"}
      watermarkSrc={company?.watermarkImage || "/assets/jdit_watermark.png"}
      contentTop="36mm"
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
        TERMS AND CONDITIONS
      </Typography>

      {/* Background Check Section */}
      <Box sx={{ mb: "6mm" }}>
        <Typography 
          className="company-accent" 
          sx={{ 
            fontSize: "12pt", 
            fontWeight: "bold", 
            mb: "3mm",
            textDecoration: "underline"
          }}
        >
          Background Check:
        </Typography>
        <Typography sx={{ 
          fontSize: "10pt", 
          textAlign: "justify", 
          lineHeight: 1.5,
          pl: "3mm"
        }}>
          The company reserves the right to verify the information furnished by you in your
          application for employment and through other documents. If it is found that you have
          misrepresented any information in your application for employment or have furnished any
          false information or have concealed / suppressed any relevant facts, your services are
          liable to be terminated any time, without any notice or compensation in lieu thereof. If the
          client is asking for the BGV report of the deployed resource then, charges may be applicable
          for BGV Process and will be deducted from your salary in the preceding month. Report will be
          shared with you for your reference post completion of BGV.
        </Typography>
      </Box>

      {/* Administrative Note */}
      <Box sx={{ 
        backgroundColor: "#fff3e0", 
        p: "4mm", 
        borderRadius: "2mm", 
        mb: "6mm",
        border: "1px solid #ff9800"
      }}>
        <Typography 
          className="company-accent" 
          sx={{ 
            fontSize: "12pt", 
            mb: "2mm", 
            fontWeight: "bold",
            color: "#e65100"
          }}
        >
          Important Note:
        </Typography>
        <Typography sx={{ 
          fontSize: "10pt", 
          textAlign: "justify", 
          lineHeight: 1.5
        }}>
          During the first month of your employment with {company.shortName || company.name}, an
          amount of Rs.750 will be deducted towards Administrative expense for Statutory Compliance.
        </Typography>
      </Box>

      {/* Statutory Benefits Section */}
      <Box sx={{ mb: "6mm" }}>
        <Typography 
          className="company-accent" 
          sx={{ 
            fontSize: "12pt", 
            fontWeight: "bold", 
            mb: "3mm",
            textDecoration: "underline"
          }}
        >
          Statutory Benefits:
        </Typography>
        <Typography sx={{ 
          fontSize: "10pt", 
          textAlign: "justify", 
          lineHeight: 1.5,
          pl: "3mm"
        }}>
          You will be governed as per the respective acts of Gratuity as per the rules in force, from
          time to time.
        </Typography>
      </Box>

      {/* Payment of Salary Section */}
      <Box sx={{ mb: "6mm" }}>
        <Typography 
          sx={{ 
            fontSize: "12pt", 
            fontWeight: "bold", 
            mb: "3mm",
            textDecoration: "underline"
          }}
        >
          Payment of Salary:
        </Typography>
        <Typography sx={{ 
          fontSize: "10pt", 
          textAlign: "justify", 
          mb: "3mm",
          pl: "3mm",
          lineHeight: 1.5
        }}>
          <strong>a)</strong> The employee shall be paid his/her salary on the date specified in the main details of
          this agreement. {company.shortName || company.name} shall not be responsible for any delays
          in payment of salary of the employee caused by his or her late submission of time sheet. For
          prompt and accurate payment of salary, the contract employee should keep{" "}
          {company.shortName || company.name} informed about all payments due to him/her.
        </Typography>
        <Typography sx={{ 
          fontSize: "10pt", 
          textAlign: "justify", 
          pl: "3mm",
          lineHeight: 1.5
        }}>
          <strong>b)</strong> It is agreed by the employee, that this present engagement on contract shall be
          co-terminus with Terms of Business/Main Contract between{" "}
          {company.shortName || company.name} and its Client where being placed in terms of this
          engagement. In case, same is determined before the expiration of Contract period on any
          account whatsoever, in that eventuality the services of employee shall also come to an end
          immediately. The employee has understood in clear terms that tenure of its contract for
          employment is dependent upon the tenure of the agreement executed between{" "}
          {company.shortName || company.name} and Client/Organization/Institution/Entity.
        </Typography>
      </Box>

      {/* Job Roles & Responsibilities Section */}
      <Box>
        <Typography 
          sx={{ 
            fontSize: "12pt", 
            fontWeight: "bold", 
            mb: "3mm",
            textDecoration: "underline"
          }}
        >
          Job Roles & Responsibilities:
        </Typography>
        <Typography sx={{ 
          fontSize: "10pt", 
          textAlign: "justify",
          pl: "3mm",
          lineHeight: 1.5
        }}>
          You shall be responsible for the performance of the functions expected as{" "}
          <strong>{data.position}</strong> and any additional functions and duties that may be
          assigned to you in connection with the business and operations of the client Company. You
          shall use the best of your efforts to promote, develop and extend the business of the
          Company and comply with the directions and regulations of the Company at all times, and in
          all respects.
        </Typography>
      </Box>
    </A4Page>
  );
};

export default Templete2OfferLetterPage3;
