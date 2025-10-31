// Mock data for companies and document templates

// smart imports
import smart_header from '../assets/images/SmartSoftware/smartsoftware-header.png';
import smartholderHeader from '../assets/images/SmartSoftware/smart-header.png';
import smartholderFooter from '../assets/images/SmartSoftware/smart-footer.png';
import smartholderWatermark from '../assets/images/SmartSoftware/Watermark.png';
import smartholderSignature from '../assets/images/SmartSoftware/Sign.png';
import smartholderStamp from '../assets/images/SmartSoftware/Stamp.png';

// Import JDIT Company Data images
import jdit_header from "../assets/images/jdit/jdit-header.png"
import jdit_footer from "../assets/images/jdit/jditFooter.png"
import jdit_watermark from "../assets/images/jdit/jdit_watermark.png"
import jdit_signature from "../assets/images/jdit/jdit_sign.png"
import jdit_stamp from "../assets/images/jdit/jdit_stamp.png"

// rp imports  (watermark pending)
import rp_header from "../assets/images/rp/RP_header.png"
import rp_footer from "../assets/images/rp/RP_footer.png"
import Rpbuisness_stamp from "../assets/images/rp/Rpbuisness_stamp.png"
import Rpbuisness_signature from "../assets/images/rp/Rpbuisness_signature.png"




// Import placeholder images
import placeholderHeader from '../assets/images/SmartSoftware/smart-header.png';
// import placeholderFooter from '../assets/images/placeholder-footer.svg';
import placeholderFooter from '../assets/images/SmartSoftware/smart-footer.png';
import placeholderWatermark from '../assets/images/SmartSoftware/Watermark.png';
// import placeholderSignature from '../assets/images/SmartSoftware/Sign.png';
// import placeholderStamp from '../assets/images/SmartSoftware/Stamp.png';

//Newage
import Newage_header from "../assets/images/Newagecloud/Newageheader.png"
import Newage_footer from "../assets/images/Newagecloud/Newagefooter.png" 
import Newage_signature from "../assets/images/Newagecloud/Newage_signature.png" 
import Newage_stamp from "../assets/images/Newagecloud/Newage_stamp.png"
import Newage_watermark from "../assets/images/Newagecloud/Newage_watermark.png" 

//cubeage(footer and watermark pending)
import cubeage_header from "../assets/images/cubeagetechnology/cubeageheader.png" 
import cubeage_signature from "../assets/images/cubeagetechnology/cubeage_signature.png"
import cubeage_stamp from "../assets/images/cubeagetechnology/cubeage_stamp.png"

//samrtmatrix (Header footer and watermark prnding)
import smartmatrix_stamp from "../assets/images/smartmatrix/SmartMatrix_stamp.png"
import smartmatrix_signature from "../assets/images/smartmatrix/smartmatrix_signature.png"

//  Devcons (watermark pending)
import devcons_header from "../assets/images/devconsSoftware/devcons_header.png" 
import devcons_footer from "../assets/images/devconsSoftware/devcons_footer.png"
import devcons_signature from "../assets/images/devconsSoftware/devcons_signature.png"
import devcons_stamp from "../assets/images/devconsSoftware/devcons_stamp.png"

//penta
import Penta_header from "../assets/images/Penta/Penta_header.png" 
import Penta_footer from "../assets/images/Penta/Penta_footer.png" 
import Penta_signature from "../assets/images/Penta/Penta_sign.png" 
import Penta_stamp from "../assets/images/Penta/Penta_stamp.png" 
import Penta_watermark from "../assets/images/Penta/Penta_watermark.png" 

//Nimbja( Watermark Pending)
import Nimbja_header from "../assets/images/Nimbja/Nimbja_header.png" 
import Nimbja_footer from "../assets/images/Nimbja/Nimbja_footer.png" 
import Nimbja_signature from "../assets/images/Nimbja/Nimbja_signature.png" 
import Nimbja_stamp from "../assets/images/Nimbja/Nimbja_stamp.png" 

//QM  (Footer watermark Pending)
  import QMS_Header from "../assets/images/QMS/QMS_Header.png" 
  import QMS_Sign from "../assets/images/QMS/QMS_Sign.png" 
  import QMS_Stamp from "../assets/images/QMS/QMS_Stamp.png" 













export const companies = [
    {
        // 
        id: 1,
        name: 'Cubeage Technologies Services Pvt. Ltd.',
        shortName: 'Cubeage Tech',
        logo: '/logos/cubeage-logo.svg',
        header: cubeage_header,
        footer: placeholderFooter,
        signature: cubeage_signature,
        stamp: cubeage_stamp,
        watermark: placeholderWatermark,
        headerImage: cubeage_header,
        footerImage: placeholderFooter,
        watermarkImage: placeholderWatermark,
        address: '123 Tech Park, Pune, Maharashtra 411001',
        email: 'info@cubeagetech.com',
        phone: '+91 020-12345678',
        website: 'www.cubeagetech.com',
        city: 'Pune',
        regNo: 'CIN: U72200PN2020PTC195001',
        hrName: 'Rajesh Kumar',
        brandColors: {
            primary: '#2196F3',
            secondary: '#1976D2',
            accent: '#03DAC6',
            textColor: '#212121',
            watermarkOpacity: 0.05,
            hueRotate: 0
        }
    },
    {
        id: 2,
        name: 'Neweage Cloud Solution Pvt. Ltd.',
        shortName: 'Neweage Cloud',
        logo: '/logos/neweage-logo.svg',
        header: Newage_header,
        footer: Newage_footer,
        signature: Newage_signature,
        stamp: Newage_stamp,
        watermark: Newage_watermark,
        headerImage: Newage_header,
        footerImage: Newage_footer,
        watermarkImage: Newage_watermark,
        address: '456 Innovation Hub, Mumbai, Maharashtra 400001',
        email: 'contact@neweagecloud.com',
        phone: '+91 022-23456789',
        website: 'www.neweagecloud.com',
        city: 'Mumbai',
        regNo: 'CIN: U72200MH2019PTC325002',
        hrName: 'Priya Sharma',
        brandColors: {
            primary: '#4CAF50',
            secondary: '#388E3C',
            accent: '#8BC34A',
            textColor: '#1B5E20',
            watermarkOpacity: 0.06,
            hueRotate: 90
        }
    },
    {
        id: 3,
        name: 'SmartMatrix Digital Services Pvt. Ltd.',
        shortName: 'SmartMatrix',
        logo: '/logos/smartmatrix-logo.svg',
        header: placeholderHeader,
        footer: placeholderFooter,
        signature: smartmatrix_signature,
        stamp:smartmatrix_stamp,
        watermark: placeholderWatermark,
        headerImage: placeholderHeader,
        footerImage: placeholderFooter,
        watermarkImage: placeholderWatermark,
        address: '789 Matrix Building, Bangalore, Karnataka 560001',
        email: 'hello@smartmatrixdigital.com',
        phone: '+91 080-34567890',
        website: 'www.smartmatrixdigital.com',
        city: 'Bangalore',
        regNo: 'CIN: U72200KA2018PTC115003',
        hrName: 'Amit Patel',
        brandColors: {
            primary: '#FF9800',
            secondary: '#F57C00',
            accent: '#FFB74D',
            textColor: '#E65100',
            watermarkOpacity: 0.04,
            hueRotate: 45
        }
    },
    {
        id: 4,
        name: 'Devcons Software Solution Pvt. Ltd.',
        shortName: 'Devcons',
        logo: '/logos/devcons-logo.svg',
        header: devcons_header,
        footer: devcons_footer,
        signature: devcons_signature,
        stamp: devcons_stamp,
        watermark: placeholderWatermark,
        headerImage: devcons_header,
        footerImage: devcons_footer,
        watermarkImage: placeholderWatermark,
        address: '101 Developer Avenue, Hyderabad, Telangana 500001',
        email: 'info@devconssoftware.com',
        phone: '+91 040-45678901',
        website: 'www.devconssoftware.com',
        city: 'Hyderabad',
        regNo: 'CIN: U72200TG2017PTC118004',
        hrName: 'Sunita Reddy',
        brandColors: {
            primary: '#9C27B0',
            secondary: '#7B1FA2',
            accent: '#BA68C8',
            textColor: '#4A148C',
            watermarkOpacity: 0.05,
            hueRotate: 270
        }
    },
    {
        id: 5,
        name: 'RP Business Solution LLP',
        shortName: 'RP Business',
        logo: '/logos/rpbusiness-logo.svg',
        header: rp_header,
        footer: rp_footer,
        signature: Rpbuisness_signature,
        stamp: Rpbuisness_stamp,
        watermark: placeholderWatermark,
        headerImage: rp_header,
        footerImage: rp_footer,
        watermarkImage: placeholderWatermark,
        address: '202 Business Park, Chennai, Tamil Nadu 600001',
        email: 'contact@rpbusinesssolution.com',
        phone: '+91 044-56789012',
        website: 'www.rpbusinesssolution.com',
        city: 'Chennai',
        regNo: 'LLP IN: AAI-5678',
        hrName: 'Ravi Prakash',
        brandColors: {
            primary: '#F44336',
            secondary: '#D32F2F',
            accent: '#FF5722',
            textColor: '#B71C1C',
            watermarkOpacity: 0.06,
            hueRotate: 0
        }
    },
    {
        id: 6,
        name: 'Penta Software Consultancy Services (I) Pvt Ltd',
        shortName: 'Penta Software',
        logo: '/logos/pentasoftware-logo.svg',
        header: Penta_header,
        footer: Penta_footer,
        signature: Penta_signature,
        stamp: Penta_stamp,
        watermark: Penta_watermark,
        headerImage: Penta_header,
        footerImage: Penta_footer,
        watermarkImage: Penta_watermark,
        address: '303 Penta Tower, Kolkata, West Bengal 700001',
        email: 'info@pentasoftware.com',
        phone: '+91 033-67890123',
        website: 'www.pentasoftware.com',
        city: 'Kolkata',
        regNo: 'CIN: U72200WB2016PTC215005',
        hrName: 'Ananya Banerjee',
        brandColors: {
            primary: '#607D8B',
            secondary: '#455A64',
            accent: '#90A4AE',
            textColor: '#263238',
            watermarkOpacity: 0.05,
            hueRotate: 180
        }
    },
    {
        id: 7,
        name: 'Nimbja Security Solutions Pvt. Ltd.',
        shortName: 'Nimbja Security',
        logo: '/logos/nimbja-logo.svg',
        header: Nimbja_header,
        footer: Nimbja_footer,
        signature: Nimbja_signature,
        stamp: Nimbja_stamp,
        watermark: placeholderWatermark,
        headerImage: Nimbja_header,
        footerImage: Nimbja_footer,
        watermarkImage: placeholderWatermark,
        address: '404 Security Street, Ahmedabad, Gujarat 380001',
        email: 'hello@nimbjasecurity.com',
        phone: '+91 079-78901234',
        website: 'www.nimbjasecurity.com',
        city: 'Ahmedabad',
        regNo: 'CIN: U72200GJ2015PTC085006',
        hrName: 'Kiran Shah',
        brandColors: {
            primary: '#795548',
            secondary: '#5D4037',
            accent: '#A1887F',
            textColor: '#3E2723',
            watermarkOpacity: 0.04,
            hueRotate: 30
        }
    },
    {
        id: 8,
        name: 'JDIT Software Solutions Pvt. Ltd.',
        shortName: 'JDIT',
        logo: '/logos/jdit_logo.png',
        header: jdit_header,
        footer: jdit_footer,
        signature: jdit_signature,
        stamp: jdit_stamp,
        watermark: jdit_watermark,
        headerImage: jdit_header,
        footerImage: jdit_footer,
        watermarkImage: jdit_watermark,
        address: '401, 4th Floor, Sai Villa Commercial Apartment, Sr. No. 166, Malwadi Road, Opp. Sahyadri Hospital, Hadapsar, Pune 28.',
        email: 'hr@jditbs.com',
        phone: '+91 020-27212597 | 8380930580 | 7057676132',
        website: 'www.jditbs.com',
        city: 'Pune',
        regNo: 'CIN: U72200PN2014PTC152007',
        hrName: 'Deepak Joshi',
        brandColors: {
            primary: '#1976D2',
            secondary: '#1565C0',
            accent: '#42A5F5',
            textColor: '#0D47A1',
            watermarkOpacity: 0.07,
            hueRotate: 0
        }
    },
    {
        id: 9,
        name: 'Quick Management Services',
        shortName: 'Quick Management',
        logo: '/logos/quickmanagement-logo.svg',
        header: QMS_Header,
        footer: placeholderFooter,
        signature: QMS_Sign,
        stamp: QMS_Stamp,
        watermark: placeholderWatermark,
        headerImage: QMS_Header,
        footerImage: placeholderFooter,
        watermarkImage: placeholderWatermark,
        address: '606 Management Road, Jaipur, Rajasthan 302001',
        email: 'info@quickmanagement.com',
        phone: '+91 0141-89012345',
        website: 'www.quickmanagement.com',
        city: 'Jaipur',
        regNo: 'CIN: U74999RJ2013PTC042008',
        hrName: 'Meera Agarwal',
        brandColors: {
            primary: '#E91E63',
            secondary: '#C2185B',
            accent: '#F48FB1',
            textColor: '#880E4F',
            watermarkOpacity: 0.05,
            hueRotate: 315
        }
    },
    {
        id: 10,
        name: 'Smart Software Services (I) Pvt. Ltd.',
        shortName: 'Smart Software',
        logo: 'logos/SmartSoftwareServicesLogo.png',
        header: smart_header,
        footer: smartholderFooter,
        signature: smartholderSignature,
        stamp: smartholderStamp,
        watermark: smartholderWatermark,
        headerImage: smartholderHeader,
        footerImage: smartholderFooter,
        watermarkImage: smartholderWatermark,
        address: '406 Changbhale Heights, Near Kalpataru Estate Phase III, Pimple Gurav, Pune 411061',
        email: 'hello@smartsoftwareservices.com',
        phone: '+91 0731-90123456',
        website: 'www.smartsoftwareservices.com',
        city: 'Indore',
        regNo: 'CIN: U72200MP2012PTC028009',
        hrName: 'Vikash Gupta',
        brandColors: {
            primary: '#00BCD4',
            secondary: '#0097A7',
            accent: '#4DD0E1',
            textColor: '#006064',
            watermarkOpacity: 0.06,
            hueRotate: 180
        }
    }
];

export const documentTypes = [
    {
        id: 1,
        name: 'Salary Slip',
        template: 'salary-slip',
        fields: [
            { name: 'mrms', label: 'Select Title', type: 'select', options: ['Mr.', 'Mrs.', 'Miss.', 'Mx.'], required: true },
            { name: 'employeeName', label: 'Employee Name', type: 'text', required: true },
            { name: 'employeeId', label: 'Employee ID', type: 'text', required: true },
            { name: 'designation', label: 'Designation', type: 'text', required: true },
            { name: 'department', label: 'Department', type: 'text', required: true },
            { name: 'month', label: 'Month', type: 'month', required: true },
            { name: 'totalSalary', label: 'Total Salary', type: 'number', required: true },
            { name: 'doj', label: 'Date of Joining', type: 'date', require: true },
            { name: 'pan', label: 'PAN Card Number', type: 'text', required: true },
            { name: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female', 'Other'], required: true },
            { name: 'mode', label: 'Mode Bank', type: 'text', required: true },
            { name: 'workdays', label: 'Total Workdays', type: 'number', required: true },
            { name: 'dob', label: 'Date of Birth', type: 'date', required: true },
            // { name: 'basicSalary', label: 'Basic Salary', type: 'number', required: true },
            // { name: 'hra', label: 'HRA', type: 'number', required: true },
            // { name: 'conveyanceAllowance', label: 'Conveyance Allowance', type: 'number', required: true },
            // { name: 'medicalAllowance', label: 'Medical Allowance', type: 'number', required: true },
            // { name: 'specialAllowance', label: 'Special Allowance', type: 'number', required: true },
            // { name: 'pf', label: 'PF', type: 'number', required: true },
            // { name: 'professionalTax', label: 'Professional Tax', type: 'number', required: true },
            // { name: 'incomeTax', label: 'Income Tax', type: 'number', required: true }
        ]
    },
    {
        id: 2,
        name: 'Offer Letter',
        template: 'offer-letter',
        fields: [
            { name: 'mrms', label: 'Select Title', type: 'select', options: ['Mr.', 'Mrs.', 'Miss.', 'Mx.'], required: true },
            { name: 'candidateName', label: 'Candidate Name', type: 'text', required: true },
            { name: 'address', label: 'Address', type: 'textarea', required: false },
            { name: 'position', label: 'Position', type: 'text', required: true },
            { name: 'department', label: 'Department', type: 'text', required: true },
            { name: 'employmentType', label: 'Employment Type', type: 'select', options: ['Full-time', 'Part-time', 'Contract', 'Internship'], required: true },
            { name: 'joiningDate', label: 'Joining Date', type: 'date', required: true },
            { name: 'probationPeriod', label: 'Probation Period (months)', type: 'number', required: false },
            { name: 'salary', label: 'Annual Salary (CTC)', type: 'number', required: true },
            { name: 'location', label: 'Work Location', type: 'text', required: true },
            { name: 'workHours', label: 'Work Hours', type: 'text', required: false },
            { name: 'reportingManager', label: 'Reporting Manager', type: 'text', required: true },
            { name: 'noticePeriod', label: 'Notice Period', type: 'text', required: false },
            { name: 'offerValidTill', label: 'Offer Valid Till', type: 'date', required: true },
            { name: 'issueDate', label: 'Issue Date', type: 'date', required: true },
            { name: 'benefits', label: 'Benefits & Perks', type: 'textarea', required: false },
            { name: 'documentsRequired', label: 'Documents Required', type: 'textarea', required: false }
        ]
    },
    {
        id: 3,
        name: 'Appointment Letter',
        template: 'appointment-letter',
        fields: [
            { name: 'mrms', label: 'Select Title', type: 'select', options: ['Mr.', 'Mrs.', 'Miss.', 'Mx.'], required: true },
            { name: 'employeeName', label: 'Employee Name', type: 'text', required: true },
            { name: 'address', label: 'Address', type: 'textarea', required: true },
            { name: 'position', label: 'Position', type: 'text', required: true },
            { name: 'department', label: 'Department', type: 'text', required: true },
            { name: 'joiningDate', label: 'Joining Date', type: 'date', required: true },
            { name: 'probationPeriod', label: 'Probation Period (months)', type: 'number', required: true },
            { name: 'salary', label: 'Annual Salary (CTC)', type: 'number', required: true },
            { name: 'workLocation', label: 'Work Location', type: 'text', required: true },
            { name: 'reportingManager', label: 'Reporting Manager', type: 'text', required: true },
            { name: 'workHours', label: 'Work Hours', type: 'text', required: false },
            { name: 'issueDate', label: 'Issue Date', type: 'date', required: true }
        ]
    },
    {
        id: 4,
        name: 'Experience Letter',
        template: 'experience-letter',
        fields: [
            { name: 'mrms', label: 'Select Title', type: 'select', options: ['Mr.', 'Mrs.', 'Miss.', 'Mx.'], required: true },
            { name: 'employeeName', label: 'Employee Name', type: 'text', required: true },
            { name: 'employeeId', label: 'Employee ID', type: 'text', required: true },
            { name: 'designation', label: 'Designation', type: 'text', required: true },
            { name: 'department', label: 'Department', type: 'text', required: true },
            { name: 'joiningDate', label: 'Joining Date', type: 'date', required: true },
            { name: 'relievingDate', label: 'Relieving Date', type: 'date', required: true },
            { name: 'workDescription', label: 'Work Description', type: 'textarea', required: true },
            { name: 'conduct', label: 'Conduct & Performance', type: 'select', options: ['Excellent', 'Very Good', 'Good', 'Satisfactory'], required: true },
            { name: 'issueDate', label: 'Issue Date', type: 'date', required: true }
        ]
    },
    {
        id: 5,
        name: 'Relieving Letter',
        template: 'relieving-letter',
        fields: [
            { name: 'mrms', label: 'Select Title', type: 'select', options: ['Mr.', 'Mrs.', 'Miss.', 'Mx.'], required: true },
            { name: 'employeeName', label: 'Employee Name', type: 'text', required: true },
            { name: 'employeeId', label: 'Employee ID', type: 'text', required: true },
            { name: 'designation', label: 'Designation', type: 'text', required: true },
            { name: 'department', label: 'Department', type: 'text', required: true },
            // { name: 'joiningDate', label: 'Joining Date', type: 'date', required: true },
            { name: 'lastWorkingDay', label: 'Last Working Day', type: 'date', required: true },
            { name: 'noticePeriod', label: 'Notice Period Served', type: 'text', required: true },
            { name: 'handoverStatus', label: 'Handover Status', type: 'select', options: ['Completed', 'Partially Completed', 'Not Applicable'], required: true },
            { name: 'issueDate', label: 'Issue Date', type: 'date', required: true }
        ]
    },
    {
        id: 6,
        name: 'Employment Verification Letter',
        template: 'employment-verification',
        fields: [
            { name: 'mrms', label: 'Select Title', type: 'select', options: ['Mr.', 'Mrs.', 'Miss.', 'Mx.'], required: true },
            { name: 'employeeName', label: 'Employee Name', type: 'text', required: true },
            { name: 'employeeId', label: 'Employee ID', type: 'text', required: true },
            { name: 'designation', label: 'Designation', type: 'text', required: true },
            { name: 'department', label: 'Department', type: 'text', required: true },
            { name: 'joiningDate', label: 'Joining Date', type: 'date', required: true },
            { name: 'employmentStatus', label: 'Employment Status', type: 'select', options: ['Active', 'Former'], required: true },
            { name: 'currentSalary', label: 'Current Annual Salary', type: 'number', required: false },
            { name: 'workLocation', label: 'Work Location', type: 'text', required: true },
            { name: 'requestedBy', label: 'Requested By', type: 'text', required: true },
            { name: 'purpose', label: 'Purpose of Verification', type: 'text', required: false },
            { name: 'issueDate', label: 'Issue Date', type: 'date', required: true }
        ]
    },
    {
        id: 7,
        name: 'Increment Letter',
        template: 'increment-letter',
        fields: [
            { name: 'mrms', label: 'Select Title', type: 'select', options: ['Mr.', 'Mrs.', 'Miss.', 'Mx.'], required: true },
            { name: 'employeeName', label: 'Employee Name', type: 'text', required: true },
            { name: 'employeeId', label: 'Employee ID', type: 'text', required: true },
            { name: 'designation', label: 'Designation', type: 'text', required: true },
            { name: 'department', label: 'Department', type: 'text', required: true },
            { name: 'currentCTC', label: 'Current CTC (Annual)', type: 'number', required: true },
            { name: 'newCTC', label: 'New CTC (Annual)', type: 'number', required: true },
            {
              name: 'incrementPercentage',
              label: 'Increment Percentage',
              type: 'number',
              required: true,
              formula: '(newCTC - currentCTC) / currentCTC * 100', // 👈 dynamic formula
              suffix: '%'
            },
            { name: 'effectiveDate', label: 'Effective Date', type: 'date', required: true },
            { name: 'issueDate', label: 'Issue Date', type: 'date', required: true },
            { name: 'reason', label: 'Reason for Increment', type: 'textarea', required: false }
        ]
    },
    {
        id: 8,
        name: 'Promotion Letter',
        template: 'promotion-letter',
        fields: [
            { name: 'mrms', label: 'Select Title', type: 'select', options: ['Mr.', 'Mrs.', 'Miss.', 'Mx.'], required: true },
            { name: 'employeeName', label: 'Employee Name', type: 'text', required: true },
            { name: 'employeeId', label: 'Employee ID', type: 'text', required: true },
            { name: 'currentDesignation', label: 'Current Designation', type: 'text', required: true },
            { name: 'newDesignation', label: 'New Designation', type: 'text', required: true },
            { name: 'currentDepartment', label: 'Current Department', type: 'text', required: true },
            { name: 'newDepartment', label: 'New Department', type: 'text', required: false },
            { name: 'currentCTC', label: 'Current CTC (Annual)', type: 'number', required: true },
            { name: 'newCTC', label: 'New CTC (Annual)', type: 'number', required: true },
            { name: 'effectiveDate', label: 'Effective Date', type: 'date', required: true },
            { name: 'newReportingManager', label: 'New Reporting Manager', type: 'text', required: false },
            { name: 'issueDate', label: 'Issue Date', type: 'date', required: true },
            { name: 'achievements', label: 'Key Achievements', type: 'textarea', required: false }
        ]
    },
    {
        id: 9,
        name: 'Warning Letter',
        template: 'warning-letter',
        fields: [
            { name: 'mrms', label: 'Select Title', type: 'select', options: ['Mr.', 'Mrs.', 'Miss.', 'Mx.'], required: true },
            { name: 'employeeName', label: 'Employee Name', type: 'text', required: true },
            { name: 'employeeId', label: 'Employee ID', type: 'text', required: true },
            { name: 'designation', label: 'Designation', type: 'text', required: true },
            { name: 'department', label: 'Department', type: 'text', required: true },
            { name: 'warningType', label: 'Warning Type', type: 'select', options: ['Verbal Warning', 'Written Warning', 'Final Warning'], required: true },
            { name: 'issueDescription', label: 'Issue Description', type: 'textarea', required: true },
            { name: 'previousWarnings', label: 'Previous Warnings', type: 'textarea', required: false },
            { name: 'expectedImprovement', label: 'Expected Improvement', type: 'textarea', required: true },
            { name: 'reviewDate', label: 'Review Date', type: 'date', required: true },
            { name: 'consequences', label: 'Consequences if Not Improved', type: 'textarea', required: true },
            { name: 'issueDate', label: 'Issue Date', type: 'date', required: true }
        ]
    },
    {
        id: 10,
        name: 'No Objection Certificate (NOC)',
        template: 'noc-letter',
        fields: [
            { name: 'mrms', label: 'Select Title', type: 'select', options: ['Mr.', 'Mrs.', 'Miss.', 'Mx.'], required: true },
            { name: 'employeeName', label: 'Employee Name', type: 'text', required: true },
            { name: 'employeeId', label: 'Employee ID', type: 'text', required: true },
            { name: 'designation', label: 'Designation', type: 'text', required: true },
            { name: 'department', label: 'Department', type: 'text', required: true },
            { name: 'purpose', label: 'Purpose of NOC', type: 'select', options: ['Higher Education', 'Part-time Job', 'Freelancing', 'Business Activity', 'Travel/Visa', 'Other'], required: true },
            { name: 'purposeDetails', label: 'Purpose Details', type: 'textarea', required: true },
            { name: 'duration', label: 'Duration/Period', type: 'text', required: false },
            { name: 'conditions', label: 'Conditions/Terms', type: 'textarea', required: false },
            { name: 'issueDate', label: 'Issue Date', type: 'date', required: true },
            { name: 'validTill', label: 'Valid Till', type: 'date', required: false }
        ]
    },
    {
        id: 11,
        name: 'Internship Certificate',
        template: 'internship-certificate',
        fields: [
            { name: 'mrms', label: 'Select Title', type: 'select', options: ['Mr.', 'Mrs.', 'Miss.', 'Mx.'], required: true },
            { name: 'internName', label: 'Intern Name', type: 'text', required: true },
            { name: 'field', label: 'Field of Study', type: 'text', required: true },
            { name: 'startDate', label: 'Start Date', type: 'date', required: true },
            { name: 'endDate', label: 'End Date', type: 'date', required: true },
            // { name: 'department', label: 'Department', type: 'text', required: true },
            // { name: 'projectName', label: 'Project Name', type: 'text', required: true },
            // { name: 'performance', label: 'Performance', type: 'select', options: ['Excellent', 'Very Good', 'Good', 'Satisfactory'], required: true },
            // { name: 'mentorName', label: 'Mentor Name', type: 'text', required: false },
            { name: 'issueDate', label: 'Issue Date', type: 'date', required: true }
        ]
    },
    {
        id: 12,
        name: 'Completion Certificate',
        template: 'completion-certificate',
        fields: [
            { name: 'mrms', label: 'Select Title', type: 'select', options: ['Mr.', 'Mrs.', 'Miss.', 'Mx.'], required: true },
            { name: 'employeeName', label: 'Employee Name', type: 'text', required: true },
            { name: 'employeeId', label: 'Employee ID', type: 'text', required: true },
            { name: 'projectName', label: 'Project Name', type: 'text', required: true },
            { name: 'startDate', label: 'Start Date', type: 'date', required: true },
            { name: 'completionDate', label: 'Completion Date', type: 'date', required: true },
            { name: 'role', label: 'Role in Project', type: 'text', required: true },
            { name: 'technologies', label: 'Technologies Used', type: 'textarea', required: true },
            { name: 'achievements', label: 'Key Achievements', type: 'textarea', required: true },
            { name: 'clientName', label: 'Client Name', type: 'text', required: false },
            { name: 'issueDate', label: 'Issue Date', type: 'date', required: true }
        ]
    },
    {
        id: 13,
        name: 'Salary Transaction Certificate',
        template: 'salary-transaction',
        fields: [
            { name: 'mrms', label: 'Select Title', type: 'select', options: ['Mr.', 'Mrs.', 'Miss.', 'Mx.'], required: true },
            { name: 'employeeName', label: 'Employee Name', type: 'text', required: true },
            { name: 'employeeId', label: 'Employee ID', type: 'text', required: true },
            { name: 'designation', label: 'Designation', type: 'text', required: true },
            { name: 'month', label: 'Salary Month', type: 'month', required: true },
            { name: 'ctc', label: 'Annual CTC', type: 'number', required: true },
            { name: 'netSalary', label: 'Net Salary Paid', type: 'number', required: true },
            { name: 'bankName', label: 'Bank Name', type: 'text', required: true },
            { name: 'accountNumber', label: 'Account Number', type: 'text', required: true },
            { name: 'transactionDate', label: 'Transaction Date', type: 'date', required: true },
            { name: 'transactionId', label: 'Transaction ID', type: 'text', required: true },
            { name: 'paymentMode', label: 'Payment Mode', type: 'select', options: ['Bank Transfer', 'Cheque', 'Cash'], required: true }
        ]
    },
    {
        id: 14,
        name: 'Termination Letter',
        template: 'termination-letter',
        fields: [
            { name: 'mrms', label: 'Select Title', type: 'select', options: ['Mr.', 'Mrs.', 'Miss.', 'Mx.'], required: true },
            { name: 'employeeName', label: 'Employee Name', type: 'text', required: true },
            { name: 'employeeId', label: 'Employee ID', type: 'text', required: true },
            { name: 'designation', label: 'Designation', type: 'text', required: true },
            { name: 'department', label: 'Department', type: 'text', required: true },
            { name: 'terminationType', label: 'Termination Type', type: 'select', options: ['Voluntary Resignation', 'Involuntary Termination', 'Mutual Separation', 'End of Contract'], required: true },
            { name: 'terminationDate', label: 'Termination Date', type: 'date', required: true },
            { name: 'lastWorkingDay', label: 'Last Working Day', type: 'date', required: true },
            { name: 'reason', label: 'Reason for Termination', type: 'textarea', required: true },
            { name: 'noticePeriod', label: 'Notice Period', type: 'text', required: false },
            { name: 'finalSettlement', label: 'Final Settlement Details', type: 'textarea', required: false },
            { name: 'issueDate', label: 'Issue Date', type: 'date', required: true }
        ]
    },
    {
        id: 15,
        name: 'Transfer Letter',
        template: 'transfer-letter',
        fields: [
            { name: 'mrms', label: 'Select Title', type: 'select', options: ['Mr.', 'Mrs.', 'Miss.', 'Mx.'], required: true },
            { name: 'employeeName', label: 'Employee Name', type: 'text', required: true },
            { name: 'employeeId', label: 'Employee ID', type: 'text', required: true },
            { name: 'currentDesignation', label: 'Current Designation', type: 'text', required: true },
            { name: 'currentDepartment', label: 'Current Department', type: 'text', required: true },
            { name: 'currentLocation', label: 'Current Location', type: 'text', required: true },
            { name: 'newDesignation', label: 'New Designation', type: 'text', required: false },
            { name: 'newDepartment', label: 'New Department', type: 'text', required: true },
            { name: 'newLocation', label: 'New Location', type: 'text', required: true },
            { name: 'transferDate', label: 'Transfer Date', type: 'date', required: true },
            { name: 'reason', label: 'Reason for Transfer', type: 'textarea', required: false },
            { name: 'newReportingManager', label: 'New Reporting Manager', type: 'text', required: false },
            { name: 'issueDate', label: 'Issue Date', type: 'date', required: true }
        ]
    }
];

// Mock user data for authentication
export const users = [
    {
        id: 1,
        username: 'admin',
        password: 'admin123',
        name: 'Admin User',
        role: 'admin'
    },
    {
        id: 2,
        username: 'user',
        password: 'user123',
        name: 'Regular User',
        role: 'user'
    }
];