import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import A4Page from "../../../layout/A4Page";

const Templete3OfferLetterPage3 = ({ data, company }) => {
  return (
    <A4Page
      headerSrc={company?.headerImage || "/assets/jdit_header.png"}
      footerSrc={company?.footerImage || "/assets/jdit_footer.png"}
      watermarkSrc={company?.watermarkImage || "/assets/jdit_watermark.png"}
      contentTop="60mm"
      contentBottom="28mm"
      company={company}
    >
      <Box>
        <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontSize: "10pt", display: "flex", gap: "2mm", ml: "3mm" }}>
          9.4<Box>Confidential Information means information relating to the business, products, affairs and finances of the Company or any of its associated company or subsidiary for the time being confidential to it or to them and trade secrets (including without limitation, technical data and know-how) relating to the business of the Company or of any of its Associated Company/ies or of any of its or their suppliers, clients or customers.</Box>
        </Typography>

        <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontWeight: "bold", fontSize: "10pt" }}>
          10. {"  "}Travel
        </Typography>

        <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontSize: "10pt", ml: "6mm" }}>
          Any work related travel will be paid by the company as per the expenditure policies of the company. A copy of this policy will be provided to you by your HR coordinator.
        </Typography>

        <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontWeight: "bold", fontSize: "10pt" }}>
          11. {"  "}Joining Formalities
        </Typography>

        <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontSize: "10pt", ml: "6mm" }}>
          This offer is subject to your completing joining formalities as specified in Annexure II and your confidential report being found satisfactory from the references provided to us.
        </Typography>

        <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontWeight: "bold", fontSize: "10pt" }}>
          12. {"  "}Termination
        </Typography>

        <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontSize: "10pt", ml: "6mm" }}>
          Your services can be terminated by either party after giving one month’s notice. If your services are terminated at your initiative, the company reserves the right to insist on full compliance to the notice period and may initiate appropriate legal remedies should you violate this provision of serving the notice period.
        </Typography>

        <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontSize: "10pt", ml: "6mm" }}>
          Your employment is subject to positive Background Verification done by the company. If any document/s or information submitted by you is/are found to be false, your offer shall stand terminated with immediate effect without any prior notice and you will also not be entitled to any dues / claims.
        </Typography>

        <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontSize: "10pt", ml: "6mm" }}>
          Please note that you are expected to keep the salary package strictly confidential and you cannot discuss or divulge any details to any of your colleagues.
        </Typography>

        <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontSize: "10pt", ml: "6mm" }}>
          If the offer is acceptable to you, you are requested to get in touch with us on your joining day to complete your joining formalities.
        </Typography>

        <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontSize: "10pt", ml: "6mm" }}>
          You are requested to sign on the copy of this letter as your acceptance of the above terms and conditions and submit the same to us on your joining day. Alternately, you can courier us at the below mentioned address:
        </Typography>

        <Typography sx={{ textAlign: "justify", lineHeight: 1.6, mb: "2mm", fontSize: "10pt", ml: "6mm" }}>
          We look forward to have you on our team.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <Box sx={{ mt: "2mm" }}>
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
              <Typography sx={{ mb: "1mm" }}>Best Regards, </Typography>
              <Typography>For <strong>{company.name}</strong></Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </A4Page>
  );
};

export default Templete3OfferLetterPage3;
