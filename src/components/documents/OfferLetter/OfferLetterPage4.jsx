import React from "react";
import { Typography, Box } from "@mui/material";
import A4Page from "../../layout/A4Page";

const OfferLetterPage4 = ({ data, company }) => {
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
        EMPLOYMENT POLICIES
      </Typography>

      {/* Termination of Employment Section */}
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
          Termination of Employment:
        </Typography>
        <Typography sx={{ 
          fontSize: "11pt", 
          textAlign: "justify", 
          lineHeight: 1.5,
          pl: "3mm"
        }}>
          In the event that the employee decides to terminate his or her employment under this
          agreement with {company.shortName || company.name}, he or she shall be required to give
          notice in writing. Failing to serve notice period as per policy, company can initiate legal
          proceedings against you. Salary in lieu of notice in accordance with the notice period
          specified in the main details of this agreement shall be acceptable only at management's
          discretion. The client may also terminate the employment with or without notice for any
          business reasons. {company.shortName || company.name} reserves its right to terminate this
          agreement forthwith without notice or payment in lieu of notice in cases of poor
          performance, neglect of duty, misconduct, conduct not beneficial to the interests of{" "}
          {company.shortName || company.name} or the Client.
        </Typography>
      </Box>

      {/* Leave Policy Section */}
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
          Leave Policy:
        </Typography>
        <Typography sx={{ 
          fontSize: "11pt", 
          textAlign: "justify", 
          lineHeight: 1.5,
          pl: "3mm"
        }}>
          Each Personnel are entitled for total 12 days' annual leaves. The Personnel shall not be
          entitled for any advance paid leave. These paid leaves cannot be carrying forwarded to month
          on month and year on year and there shall not be any leave encashment. You shall be entitled
          to avail only one leave per month and only with prior approval from your Manager. If you
          avail more than one day in a month, then that would be loss of pay. Pre-approved leave from
          your manager at the client's place is only a sanction of leave and does not entitle you to
          paid leave beyond the stipulated eligible leaves.
        </Typography>
      </Box>

      {/* Full & Final Settlement Section */}
      <Box sx={{ mb: "6mm" }}>
        <Typography 
          sx={{ 
            fontSize: "12pt", 
            fontWeight: "bold", 
            mb: "3mm",
            textDecoration: "underline"
          }}
        >
          Full & Final Settlement:
        </Typography>
        <Typography sx={{ 
          fontSize: "11pt", 
          textAlign: "justify", 
          lineHeight: 1.5,
          pl: "3mm"
        }}>
          In case of employees who have resigned from {company.shortName || company.name} or Converted
          to fulltime or Termination from client, their Full & final settlement would be made after 60
          days from their last working day with {company.shortName || company.name} on receipt of
          approved time sheet and all tax-related documents.
        </Typography>
      </Box>

      {/* Absenteeism from Work Section */}
      <Box sx={{ mb: "6mm" }}>
        <Typography 
          sx={{ 
            fontSize: "12pt", 
            fontWeight: "bold", 
            mb: "3mm",
            textDecoration: "underline"
          }}
        >
          Absenteeism from Work:
        </Typography>
        <Typography sx={{ 
          fontSize: "11pt", 
          textAlign: "justify", 
          lineHeight: 1.5,
          pl: "3mm"
        }}>
          Should the employee fail to report for work for more than one (1) day(s) without justifiable
          reasons, the contract employee's employment shall be deemed to be terminated forthwith by
          the Employee himself/ herself and the Employee shall be deemed to be relieved automatically
          except for any saving by law. Further if any Employee stays absent from work without proper
          permission/sanction or there being leave due to his credit and / or overstays his leave the
          same will render the Employee liable for legal action and damages also.
        </Typography>
      </Box>

      {/* No-Show Section */}
      <Box sx={{ 
        backgroundColor: "#ffebee", 
        p: "4mm", 
        borderRadius: "2mm", 
        mb: "6mm",
        border: "1px solid #f44336"
      }}>
        <Typography 
          sx={{ 
            fontSize: "12pt", 
            fontWeight: "bold", 
            mb: "2mm",
            color: "#c62828"
          }}
        >
          No-Show Policy:
        </Typography>
        <Typography sx={{ 
          fontSize: "11pt", 
          textAlign: "justify", 
          lineHeight: 1.5
        }}>
          Failure to report at the specified office on {data.joiningDate ? new Date(data.joiningDate).toLocaleDateString("en-IN") : "________"} shall be deemed as "No-Show". In such an event, the offer
          stands cancelled, and you shall be liable to pay one month's salary as penalty to the
          company for the loss suffered by the company.
        </Typography>
      </Box>

      {/* Extension of Contract Section */}
      <Box>
        <Typography 
          sx={{ 
            fontSize: "12pt", 
            fontWeight: "bold", 
            mb: "3mm",
            textDecoration: "underline"
          }}
        >
          Extension of Contract:
        </Typography>
        <Typography sx={{ 
          fontSize: "11pt", 
          textAlign: "justify",
          pl: "3mm",
          lineHeight: 1.5
        }}>
          The employee shall remain on Contract, unless his services are confirmed in writing by the
          client group.
        </Typography>
      </Box>
    </A4Page>
  );
};

export default OfferLetterPage4;
