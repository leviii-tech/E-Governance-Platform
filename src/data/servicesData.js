export const serviceCategories = [
  { id: "all", name: "All Public Services", icon: "LayoutGrid", count: 18 },
  { id: "identity", name: "Certificates & Identity", icon: "FileText", count: 6 },
  { id: "revenue", name: "Revenue & Land Records", icon: "Building2", count: 4 },
  { id: "welfare", name: "Social Welfare & Grants", icon: "HeartHandshake", count: 5 },
  { id: "grievance", name: "Civic Redressal & Utilities", icon: "AlertTriangle", count: 3 }
];

export const publicServices = [
  {
    id: "srv-income",
    category: "identity",
    title: "Income Certificate Issuance",
    department: "Department of Revenue & Land Administration",
    description: "Official legal document certifying annual family income from all sources for scholarships, subsidies, and quotas.",
    slaDays: 3,
    fee: "₹25",
    popularity: 98,
    requiredDocs: ["Aadhaar Card", "Salary Slip / Form 16 / ITR", "Electricity Bill / Ration Card", "Self-Declaration Affidavit"],
    fields: [
      { name: "applicantName", label: "Full Legal Name", type: "text", required: true, placeholder: "As in Aadhaar" },
      { name: "fatherHusbandName", label: "Father / Guardian Name", type: "text", required: true },
      { name: "aadhaarNumber", label: "12-Digit Aadhaar UID", type: "text", required: true, placeholder: "XXXX-XXXX-XXXX" },
      { name: "annualIncome", label: "Total Annual Family Income (INR)", type: "number", required: true, placeholder: "e.g. 180000" },
      { name: "occupation", label: "Primary Occupation / Profession", type: "select", options: ["Agriculture / Farming", "Private Sector Employee", "Government Employee", "Self-Employed / Business", "Daily Wage / Artisan", "Student / Unemployed"] },
      { name: "district", label: "District / Tehsil", type: "select", options: ["Central District", "North District", "South District", "East District", "Rural Sub-Division"] },
      { name: "residentialAddress", label: "Permanent Residential Address", type: "textarea", required: true }
    ]
  },
  {
    id: "srv-caste",
    category: "identity",
    title: "Community & Caste Certificate",
    department: "Ministry of Social Justice & Empowerment",
    description: "Statutory certificate establishing social reservation category (OBC, SC, ST, EWS) for educational admissions and state reservations.",
    slaDays: 5,
    fee: "₹30",
    popularity: 94,
    requiredDocs: ["Aadhaar Card", "School Leaving Certificate", "Father's Caste Proof / Family Tree", "Affidavit of Community"],
    fields: [
      { name: "applicantName", label: "Full Applicant Name", type: "text", required: true },
      { name: "casteCategory", label: "Category Claimed", type: "select", options: ["Economically Weaker Section (EWS)", "Other Backward Class (OBC)", "Scheduled Caste (SC)", "Scheduled Tribe (ST)"] },
      { name: "subCaste", label: "Sub-Caste / Sub-Tribe Name", type: "text", required: true },
      { name: "fatherCasteCertNo", label: "Father's/Paternal Blood Relative Certificate No.", type: "text", required: false },
      { name: "district", label: "Home District", type: "select", options: ["Central District", "North District", "South District", "East District"] }
    ]
  },
  {
    id: "srv-domicile",
    category: "identity",
    title: "Permanent Domicile / Residence Certificate",
    department: "District Magistrate Administration",
    description: "Proof of continuous residency in the state for public employment, housing schemes, and quota benefits.",
    slaDays: 4,
    fee: "₹20",
    popularity: 91,
    requiredDocs: ["10+ Years Residence Proof", "Voter ID Card", "Ration Card", "Passport Size Photograph"],
    fields: [
      { name: "applicantName", label: "Full Name", type: "text", required: true },
      { name: "residingYears", label: "Years Residing at Current Address", type: "number", required: true },
      { name: "voterEpicNo", label: "Voter ID (EPIC) Number", type: "text", required: true },
      { name: "purpose", label: "Purpose of Certificate", type: "select", options: ["State Employment", "College Admission", "Housing Welfare Scheme", "Land Registration"] }
    ]
  },
  {
    id: "srv-birth",
    category: "identity",
    title: "Digital Birth Registration & Certificate",
    department: "Municipal Corporation & Health Department",
    description: "Issuance of digitally signed birth certificate with QR verification under the Registration of Births and Deaths Act.",
    slaDays: 2,
    fee: "Free (0-21 Days)",
    popularity: 96,
    requiredDocs: ["Hospital Discharge Summary", "Parents' Aadhaar Card", "Marriage Certificate Proof"],
    fields: [
      { name: "childName", label: "Child's Full Name", type: "text", required: true },
      { name: "dob", label: "Date of Birth", type: "date", required: true },
      { name: "gender", label: "Gender", type: "select", options: ["Male", "Female", "Other"] },
      { name: "hospitalName", label: "Hospital / Place of Birth", type: "text", required: true },
      { name: "fatherName", label: "Father's Full Name", type: "text", required: true },
      { name: "motherName", label: "Mother's Full Name", type: "text", required: true }
    ]
  },
  {
    id: "srv-land-mut",
    category: "revenue",
    title: "Land Record Mutation & Record of Rights (RoR 7/12)",
    department: "Department of Revenue & Survey",
    description: "Digital update of property ownership title in revenue records following sale, inheritance, or partition.",
    slaDays: 7,
    fee: "₹50",
    popularity: 87,
    requiredDocs: ["Registered Sale Deed / Will", "Latest Property Tax Receipt", "Identity Proof of Parties", "Encumbrance Certificate"],
    fields: [
      { name: "surveyNumber", label: "Khasra / Survey / Plot Number", type: "text", required: true },
      { name: "villageTehsil", label: "Village / Tehsil Name", type: "text", required: true },
      { name: "transferMode", label: "Mode of Title Transfer", type: "select", options: ["Sale Deed Purchase", "Inheritance / Succession", "Gift Deed", "Partition Deed"] },
      { name: "deedRegNo", label: "Sub-Registrar Deed Registration No.", type: "text", required: true }
    ]
  },
  {
    id: "srv-pmkisan",
    category: "welfare",
    title: "PM-Kisan Samman Nidhi DBT Enrollment",
    department: "Ministry of Agriculture & Farmers Welfare",
    description: "Direct financial benefit transfer of ₹6,000 per year directly to bank account for eligible smallholder farming families.",
    slaDays: 3,
    fee: "Free",
    popularity: 99,
    requiredDocs: ["Landholding Document (Khatauni)", "Bank Passbook with Aadhaar Seeding", "Aadhaar Card"],
    fields: [
      { name: "farmerName", label: "Farmer / Landowner Full Name", type: "text", required: true },
      { name: "landAreaHectares", label: "Total Cultivable Land Area (in Hectares)", type: "number", required: true },
      { name: "bankAccountNumber", label: "Bank Account Number (NPCI Aadhaar-Linked)", type: "text", required: true },
      { name: "ifscCode", label: "Bank IFSC Code", type: "text", required: true }
    ]
  },
  {
    id: "srv-yuva-grant",
    category: "welfare",
    title: "Yuva Skill & Startup Innovation Stipend",
    department: "Ministry of Skill Development & Entrepreneurship",
    description: "Monthly skill apprentice stipend of ₹8,000 + seed innovation grant for qualified vocational graduates and tech startups.",
    slaDays: 4,
    fee: "Free",
    popularity: 95,
    requiredDocs: ["Degree / Diploma Certificate", "Project / Startup Synopsis", "Bank Account Proof", "Resume / CV"],
    fields: [
      { name: "candidateName", label: "Applicant Name", type: "text", required: true },
      { name: "educationLevel", label: "Highest Qualification", type: "select", options: ["B.Tech / B.E. / BCA / MCA", "Diploma / Polytechnic", "B.Sc / M.Sc", "ITI Vocational Certificate"] },
      { name: "domainSkill", label: "Skill Track", type: "select", options: ["Software & Web Engineering", "AI & Data Science", "Renewable Energy & EV", "Electronics & IoT", "Digital Manufacturing"] },
      { name: "portfolioUrl", label: "GitHub / Portfolio URL", type: "text", placeholder: "https://github.com/..." }
    ]
  },
  {
    id: "srv-trade-license",
    category: "revenue",
    title: "Single-Window Trade License & MSME Registration",
    department: "Urban Development & Industries Directorate",
    description: "Instant unified business permit and commercial operational license for commercial establishments and MSMEs.",
    slaDays: 2,
    fee: "₹250",
    popularity: 89,
    requiredDocs: ["Rental Agreement / Commercial Ownership Deed", "GSTIN / PAN Card", "Fire Safety Declaration", "Partnership / Incorporation Deed"],
    fields: [
      { name: "businessName", label: "Trade / Business Enterprise Name", type: "text", required: true },
      { name: "businessType", label: "Type of Business Entity", type: "select", options: ["Sole Proprietorship", "Private Limited (Pvt Ltd)", "Partnership / LLP", "Retail / Grocery Shop", "Food Establishment"] },
      { name: "gstinNumber", label: "GSTIN or PAN Number", type: "text", required: true },
      { name: "employeeCount", label: "Number of Active Workers", type: "number", required: true }
    ]
  }
];

export const mockInitialApplications = [
  {
    id: "JS-2026-8842",
    serviceId: "srv-income",
    serviceTitle: "Income Certificate Issuance",
    applicantName: "Rajeshwar Sharma",
    applicantPhone: "+91 98451 23098",
    appliedDate: "2026-09-28",
    status: "Approved",
    department: "Department of Revenue & Land Administration",
    slaDeadline: "2026-10-01",
    certificateNo: "CERT/INC/2026/09/8842",
    qrCodeData: "https://janseva360.gov.in/verify/CERT-INC-2026-8842",
    annualIncome: "₹ 1,80,000",
    district: "South District",
    history: [
      { stage: "Submitted & Aadhaar Verified", time: "2026-09-28 10:15 AM", done: true, officer: "Automated Gateway" },
      { stage: "Document Scrutiny Complete", time: "2026-09-29 02:30 PM", done: true, officer: "Revenue Inspector K. Verma" },
      { stage: "Tehsildar Digital Approval", time: "2026-09-30 11:45 AM", done: true, officer: "Sub-Divisional Magistrate SDM-04" },
      { stage: "Digitally Signed Certificate Issued", time: "2026-09-30 01:10 PM", done: true, officer: "e-Sign Server #02" }
    ],
    remarks: "Income verified through ITR and field verification by Revenue Inspector. Eligible for State EBC quota."
  },
  {
    id: "JS-2026-9214",
    serviceId: "srv-pmkisan",
    serviceTitle: "PM-Kisan Samman Nidhi DBT Enrollment",
    applicantName: "Gurpreet Singh Gill",
    applicantPhone: "+91 94172 88310",
    appliedDate: "2026-09-29",
    status: "Under Review",
    department: "Ministry of Agriculture & Farmers Welfare",
    slaDeadline: "2026-10-02",
    certificateNo: "PENDING_REVIEW",
    qrCodeData: "",
    annualIncome: "₹ 95,000",
    district: "Rural Sub-Division",
    history: [
      { stage: "Submitted & Aadhaar Verified", time: "2026-09-29 09:20 AM", done: true, officer: "DigiLocker Bridge" },
      { stage: "Land Ownership Record Cross-Check", time: "2026-09-30 03:00 PM", done: true, officer: "Patwari R. Choudhary" },
      { stage: "NPCI Bank Account Mapping Validation", time: "Pending", done: false, officer: "Public Financial Management System (PFMS)" },
      { stage: "Disbursement Order Dispatched", time: "Pending", done: false, officer: "Direct Benefit Transfer Cell" }
    ],
    remarks: "Land records 7/12 matched with survey block #312. Awaiting NPCI mandate acknowledgment."
  },
  {
    id: "JS-2026-9501",
    serviceId: "srv-caste",
    serviceTitle: "Community & Caste Certificate",
    applicantName: "Ananya Mukherjee",
    applicantPhone: "+91 97321 00412",
    appliedDate: "2026-09-30",
    status: "Submitted",
    department: "Ministry of Social Justice & Empowerment",
    slaDeadline: "2026-10-05",
    certificateNo: "PENDING_VERIFICATION",
    qrCodeData: "",
    annualIncome: "₹ 3,40,000",
    district: "Central District",
    history: [
      { stage: "Application Submitted via Citizen Portal", time: "2026-09-30 08:30 AM", done: true, officer: "Citizen Self-Service" },
      { stage: "Desk Verification of Paternal Genealogy", time: "Pending", done: false, officer: "Welfare Officer Desk-03" },
      { stage: "Field Inquiry & Report", time: "Pending", done: false, officer: "Circle Officer" },
      { stage: "Final Digital Issuance", time: "Pending", done: false, officer: "District Welfare Officer" }
    ],
    remarks: "Documents received. Queued for genealogical lineage review."
  }
];

export const mockGrievances = [
  {
    id: "GRV-2026-4412",
    title: "Severe Road Pothole & Broken Drainage near District Hospital",
    category: "Public Works Department (PWD)",
    location: "Ward 14, Civil Hospital Road, Sector 4",
    reportedBy: "Sanjay Patil",
    phone: "+91 98220 54109",
    reportedDate: "2026-09-29",
    priority: "High (SLA 48 Hrs)",
    status: "In Progress",
    assignedOfficer: "Executive Engineer PWD - Zone North",
    description: "Deep waterlogging and 3ft pothole causing severe traffic congestion and ambulance delays.",
    timeline: [
      { event: "Grievance Logged & Auto-Assigned", time: "2026-09-29 11:00 AM", status: "Done" },
      { event: "Site Inspected by Assistant Engineer", time: "2026-09-30 09:30 AM", status: "Done" },
      { event: "Road Restoration Contractor Dispatched", time: "2026-09-30 02:00 PM", status: "Active" },
      { event: "Final Quality Audit & Citizen Signoff", time: "Pending", status: "Pending" }
    ]
  },
  {
    id: "GRV-2026-4439",
    title: "Low Voltage Fluctuations Damaging Agricultural Pumps",
    category: "State Electricity Distribution Corp",
    location: "Kisan Nagar Feeder, Sub-station 11kV",
    reportedBy: "Balwinder Singh",
    phone: "+91 98765 12099",
    reportedDate: "2026-09-30",
    priority: "Critical",
    status: "Under Investigation",
    assignedOfficer: "Junior Engineer (Electrical), Feeder Control",
    description: "Severe voltage drop below 140V during irrigation hours between 6 AM to 12 PM.",
    timeline: [
      { event: "Grievance Registered", time: "2026-09-30 07:15 AM", status: "Done" },
      { event: "Transformer Load Telemetry Analyzed", time: "2026-09-30 11:30 AM", status: "Done" },
      { event: "Tap Changer Calibration Scheduled", time: "In Progress", status: "Active" }
    ]
  }
];

export const mockDigiLockerDocuments = [
  {
    id: "DOC-AADHAAR-8901",
    title: "Aadhaar Card (UIDAI)",
    docNumber: "XXXX-XXXX-9102",
    issuer: "Unique Identification Authority of India",
    issueDate: "2022-04-12",
    verified: true,
    fileType: "Digital Identity",
    hash: "sha256:8f4c2e1b99a0e6371f49..."
  },
  {
    id: "DOC-PAN-4431",
    title: "Income Tax Permanent Account Number (PAN)",
    docNumber: "ABCDE1234F",
    issuer: "Income Tax Department, Govt of India",
    issueDate: "2021-08-19",
    verified: true,
    fileType: "Tax & Financial",
    hash: "sha256:3a7d99c011e84f22..."
  },
  {
    id: "DOC-LAND-7120",
    title: "Record of Rights - Land 7/12 Extract",
    docNumber: "ROR-SURV-312/B",
    issuer: "State Land Records & Revenue Portal",
    issueDate: "2025-11-04",
    verified: true,
    fileType: "Property & Revenue",
    hash: "sha256:7b1e84ca0911fe33..."
  },
  {
    id: "DOC-INC-2026",
    title: "Digitally Issued Income Certificate",
    docNumber: "CERT/INC/2026/09/8842",
    issuer: "JanSeva 360 e-District Authority",
    issueDate: "2026-09-30",
    verified: true,
    fileType: "Statutory Certificate",
    hash: "sha256:91ac33bd88741029..."
  }
];
