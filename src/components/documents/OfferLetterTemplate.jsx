import React from "react";
import { Box } from "@mui/material";

// ===== Template 1 =====
import Template1OfferLetterPage1 from "./OfferLetter/Templete1/OfferLetterPage1";
import Template1OfferLetterPage2 from "./OfferLetter/Templete1/OfferLetterPage2";

// ===== Template 2 =====
import Templete2OfferLetterPage1 from "./OfferLetter/Templete2/OfferLetterPage1";
import Templete2OfferLetterPage2 from "./OfferLetter/Templete2/OfferLetterPage2";
import Templete2OfferLetterPage3 from "./OfferLetter/Templete2/OfferLetterPage3";
import Templete2OfferLetterPage4 from "./OfferLetter/Templete2/OfferLetterPage4";
import Templete2OfferLetterPage5 from "./OfferLetter/Templete2/OfferLetterPage5";

// ===== Template 3 =====
import Templete3OfferLetterPage1 from "./OfferLetter/Templete3/OfferLetterPage1";
import Templete3OfferLetterPage2 from "./OfferLetter/Templete3/OfferLetterPage2";
import Templete3OfferLetterPage3 from "./OfferLetter/Templete3/OfferLetterPage3";
import Templete3OfferLetterPage4 from "./OfferLetter/Templete3/OfferLetterPage4";
import Templete3OfferLetterPage5 from "./OfferLetter/Templete3/OfferLetterPage5";

// ===== Template 4 =====
import Templete4OfferLetterPage1 from "./OfferLetter/Templete4/OfferLetterPage1";
import Templete4OfferLetterPage2 from "./OfferLetter/Templete4/OfferLetterPage2";
import Templete4OfferLetterPage3 from "./OfferLetter/Templete4/OfferLetterPage3";
import Templete4OfferLetterPage4 from "./OfferLetter/Templete4/OfferLetterPage4";
import Templete4OfferLetterPage5 from "./OfferLetter/Templete4/OfferLetterPage5";

// ===== Template 5 =====
import Templete5OfferLetterPage1 from "./OfferLetter/Templete5/OfferLetterPage1";
import Templete5OfferLetterPage2 from "./OfferLetter/Templete5/OfferLetterPage2";
import Templete5OfferLetterPage3 from "./OfferLetter/Templete5/OfferLetterPage3";
import Templete5OfferLetterPage4 from "./OfferLetter/Templete5/OfferLetterPage4";
import Templete5OfferLetterPage5 from "./OfferLetter/Templete5/OfferLetterPage5";

// ===== Template 6 =====
import Templete6OfferLetterPage1 from "./OfferLetter/Templete6/OfferLetterPage1";
import Templete6OfferLetterPage2 from "./OfferLetter/Templete6/OfferLetterPage2";
import Templete6OfferLetterPage3 from "./OfferLetter/Templete6/OfferLetterPage3";
import Templete6OfferLetterPage4 from "./OfferLetter/Templete6/OfferLetterPage4";
import Templete6OfferLetterPage5 from "./OfferLetter/Templete6/OfferLetterPage5";

// ===== Template 7 =====
import Templete7OfferLetterPage1 from "./OfferLetter/Templete7/OfferLetterPage1";
import Templete7OfferLetterPage2 from "./OfferLetter/Templete7/OfferLetterPage2";
import Templete7OfferLetterPage3 from "./OfferLetter/Templete7/OfferLetterPage3";
import Templete7OfferLetterPage4 from "./OfferLetter/Templete7/OfferLetterPage4";
import Templete7OfferLetterPage5 from "./OfferLetter/Templete7/OfferLetterPage5";

// ===== Template 8 =====
import Templete8OfferLetterPage1 from "./OfferLetter/Templete8/OfferLetterPage1";
import Templete8OfferLetterPage2 from "./OfferLetter/Templete8/OfferLetterPage2";

const OfferLetterTemplate = ({ company, data }) => {
  // ✅ Group companies by template type
  const template1Companies = [
    "Smart Software Services (I) Pvt. Ltd.",
    "Neweage Cloud Solution Pvt. Ltd.",
  ];

  const template2Companies = [
    "RP Business Solution LLP",
    "Nimbja Security Solutions Pvt. Ltd.",
  ];

  const template3Companies = [
    "Cubeage Technologies Services Pvt. Ltd."
  ];

  const template4Companies = [
    "SmartMatrix Digital Services Pvt. Ltd."
  ];

  const template5Companies = [
    "Penta Software Consultancy Services (I) Pvt Ltd"
  ];

  const template6Companies = [
    "JDIT Software Solutions Pvt. Ltd."
  ];

  const template7Companies = [
    "Quick Management Services"
  ];

  const templete8Companies = [
    "Devcons Software Solution Pvt. Ltd."
  ];

  // 🗺️ Map template numbers to components
  const templateMap = {
    1: [Template1OfferLetterPage1, Template1OfferLetterPage2],
    2: [
      Templete2OfferLetterPage1,
      Templete2OfferLetterPage2,
      Templete2OfferLetterPage3,
      Templete2OfferLetterPage4,
      Templete2OfferLetterPage5,
    ],
    3: [
      Templete3OfferLetterPage1,
      Templete3OfferLetterPage2,
      Templete3OfferLetterPage3,
      Templete3OfferLetterPage4,
      Templete3OfferLetterPage5,
    ],
    4: [
      Templete4OfferLetterPage1,
      Templete4OfferLetterPage2,
      Templete4OfferLetterPage3,
      Templete4OfferLetterPage4,
      Templete4OfferLetterPage5,
    ],
    5: [
      Templete5OfferLetterPage1,
      Templete5OfferLetterPage2,
      Templete5OfferLetterPage3,
      Templete5OfferLetterPage4,
      Templete5OfferLetterPage5,
    ],
    6: [
      Templete6OfferLetterPage1,
      Templete6OfferLetterPage2,
      Templete6OfferLetterPage3,
      Templete6OfferLetterPage4,
      Templete6OfferLetterPage5,
    ],
    7: [
      Templete7OfferLetterPage1,
      Templete7OfferLetterPage2,
      Templete7OfferLetterPage3,
      Templete7OfferLetterPage4,
      Templete7OfferLetterPage5,
    ],
    8: [
      Templete8OfferLetterPage1,
      Templete8OfferLetterPage2,
    ],
  };

  // 🧠 Determine which template to use
  let selectedTemplateNumber = 5; // default fallback

  if (template1Companies.includes(company?.name)) {
    selectedTemplateNumber = 1;
  } else if (template2Companies.includes(company?.name)) {
    selectedTemplateNumber = 2;
  } else if (template3Companies.includes(company?.name)) {
    selectedTemplateNumber = 3; // all others → etc
  } else if (template4Companies.includes(company?.name)) {
    selectedTemplateNumber = 4;
  } else if (template5Companies.includes(company?.name)) {
    selectedTemplateNumber = 5;
  } else if (template6Companies.includes(company?.name)) {
    selectedTemplateNumber = 6;
  } else if (template7Companies.includes(company?.name)) {
    selectedTemplateNumber = 7;
  } else if (templete8Companies.includes(company?.name)) {
    selectedTemplateNumber = 8;
  }

  const SelectedTemplates = templateMap[selectedTemplateNumber];

  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        p: 2,
        minHeight: "100vh",
        "@media print": {
          bgcolor: "transparent",
          p: 0,
          "& .page-break": {
            pageBreakBefore: "always",
            breakBefore: "page",
          },
        },
      }}
    >
      {SelectedTemplates.map((PageComponent, index) => (
        <React.Fragment key={index}>
          <PageComponent company={company} data={data} />
          {index < SelectedTemplates.length - 1 && (
            <Box className="page-break" />
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default OfferLetterTemplate;
