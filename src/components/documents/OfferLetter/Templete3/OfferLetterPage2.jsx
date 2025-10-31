import React from "react";
import { Typography, Box } from "@mui/material";
import A4Page from "../../../layout/A4Page";

const Templete3OfferLetterPage2 = ({ company }) => {

  return (
    <A4Page
      headerSrc={company?.headerImage || "/assets/jdit_header.png"}
      watermarkSrc={company?.watermarkImage || company?.watermark || "/assets/jdit_watermark.png"}
      contentTop="60mm"
      contentBottom="28mm"
      company={company}
    >
      <Box>
      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontWeight: "bold", fontSize: "10pt" }}>
        5. {"  "}Working hours
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontSize: "10pt", ml: "6mm" }}>
        Normal hours are as determined by the company but your responsibility is to ensure that the assigned deliverables are completed within the allocated duration.
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontWeight: "bold", fontSize: "10pt" }}>
        6. {"  "}Probation
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontSize: "10pt", display: "flex", gap: "2mm", ml: "3mm" }}>
        a.<Box>You will be on probation for a period of Three months.</Box>
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontSize: "10pt", display: "flex", gap: "2mm" , ml: "3mm"}}>
        b.<Box>The period of probation can be extended at the discretion of the Management and you will continue to be on probation till you are communicated otherwise.</Box>
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontWeight: "bold", fontSize: "10pt" }}>
        7. {"  "}Non- competition
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontSize: "10pt", ml: "6mm" }}>
        You agree with the Company that you will not, during the continuance of your employment with the Company, carry on or be engaged, directly or indirectly, either on your own behalf or on behalf of any person, or as manager, agent, consultant or employee of any person, firm or company, in any activity or business, in India or overseas, which shall directly or indirectly be in competition with the business of the Company or its subsidiaries or associated companies.
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontWeight: "bold", fontSize: "10pt" }}>
        8. {"  "}Court Cases / Police Cases
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontSize: "10pt", ml: "6mm" }}>
        You will submit a firm undertaking / confirmation in writing that there are no police cases / court cases pending in any court in India. If such undertaking submitted by you is found to be false, then this Offer-cum-Appointment letter shall stand terminated with immediate effect and you shall not be entitled to any compensation for any services you may have rendered.
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontWeight: "bold", fontSize: "10pt" }}>
        9. {"  "}Confidentiality
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontSize: "10pt", display: "flex", gap: "2mm", ml: "3mm" }}>
        9.1<Box>You agree that in the course of your employment you will have access to and be entrusted with information in respect of the business of the Company including intellectual property, processes and product specifications, etc. and relating to its dealings, transactions and affairs and likewise in relation to its subsidiaries, associated companies, customers or clients all of which information is or may be of a confidential nature.</Box>
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontSize: "10pt", display: "flex", gap: "2mm" , ml: "3mm"}}>
        9.2<Box>You shall not, except in the proper course of performance of your duties during or at any time after the period of your employment or as may be required by law, divulge or disclose to any person whatsoever, any Confidential Information of the Company or any of its subsidiaries or associated companies or any of its or their suppliers, agents, distributors or customers.</Box>
      </Typography>

      <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontSize: "10pt", display: "flex", gap: "2mm" , ml: "3mm"}}>
        9.3<Box>All notes, memoranda, documents and Confidential Information concerning the business of the Company and its subsidiaries or associated companies or any of its or their suppliers, agents, distributors or customers which shall be acquired, received or made by you during the course of your employment shall be property of the Company and shall be surrendered by you to the Company upon the termination or at the request of the Company at any time during the course of your employment.</Box>
      </Typography>

      </Box>
    </A4Page>
  );
};

export default Templete3OfferLetterPage2;
