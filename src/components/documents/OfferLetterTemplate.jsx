import React from "react";
import { Box } from "@mui/material";
import OfferLetterPage1 from "./OfferLetter/OfferLetterPage1";
import OfferLetterPage2 from "./OfferLetter/OfferLetterPage2";
import OfferLetterPage3 from "./OfferLetter/OfferLetterPage3";
import OfferLetterPage4 from "./OfferLetter/OfferLetterPage4";
import OfferLetterPage5 from "./OfferLetter/OfferLetterPage5";

const OfferLetterTemplate = ({ company, data }) => {
  return (
    <Box sx={{
      bgcolor: '#f5f5f5',
      p: 2,
      minHeight: '100vh',
      '@media print': {
        bgcolor: 'transparent',
        p: 0,
        '& .page-break': {
          pageBreakBefore: 'always',
          breakBefore: 'page'
        }
      }
    }}>

      {/* Page 1 */}
      <OfferLetterPage1 company={company} data={data} />

      <Box className="page-break" />

      {/* Page 2 */}
      <OfferLetterPage2 data={data} company={company} />

      <Box className="page-break" />

      {/* Page 3 */}
      {/* <OfferLetterPage3 data={data} company={company} /> */}

      {/* <Box className="page-break" /> */}

      {/* Page 4 */}
      {/* <OfferLetterPage4 data={data} company={company} /> */}

      {/* <Box className="page-break" /> */}

      {/* Page 5 */}
      {/* <OfferLetterPage5 data={data} company={company} /> */}
    </Box>
  );
};

export default OfferLetterTemplate;
