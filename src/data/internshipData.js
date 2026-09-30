export const internshipModules = [
  {
    week: 1,
    title: "Planning & Requirements Analysis for E-Governance Digital Service",
    shortTitle: "Week 1: Strategic Planning",
    badge: "Strategy & SRS",
    icon: "ClipboardList",
    summary: "Comprehensive project roadmap, stakeholder personas, user journey mapping, functional/non-functional requirements specification, and risk assessment for national digital public infrastructure.",
    deliverables: [
      "Project Vision & Executive Charter",
      "4 Primary Stakeholder Personas",
      "15 Functional & 10 Non-Functional Requirements",
      "End-to-End Citizen User Journey Maps",
      "Enterprise Tech Stack Architecture Roadmap",
      "Comprehensive Risk Analysis & Mitigation Matrix"
    ]
  },
  {
    week: 2,
    title: "Designing a Responsive Web Prototype for Digital Services",
    shortTitle: "Week 2: UI/UX Prototype Studio",
    badge: "UI/UX & Accessibility",
    icon: "Layout",
    summary: "Responsive design execution, mobile-first design system tokens, WCAG 2.1 AA accessibility standards, high-fidelity components, and multi-device interactive viewport preview engine.",
    deliverables: [
      "Design System: Color Tokens, Typography, Glassmorphism",
      "Multi-Device Viewport Sandbox (Desktop, Laptop, Tablet, Mobile)",
      "Accessible Component Architecture & ARIA Landmarks",
      "Wireframe vs High-Fidelity Design Rationale",
      "Single-Window Digital Service Portal Flow"
    ]
  },
  {
    week: 3,
    title: "Quality Assurance & Testing Strategy for Digital Services",
    shortTitle: "Week 3: QA & Test Automation Lab",
    badge: "QA & Verification",
    icon: "ShieldCheck",
    summary: "Comprehensive test strategy covering Unit, Integration, Security, and Stress testing. Features an interactive in-browser Test Runner with 6 automated test scenarios and real-time execution logs.",
    deliverables: [
      "Full Quality Assurance Test Plan & Hierarchy",
      "6 In-Depth Test Scenarios with Live Browser Execution",
      "Stress & Load Testing Strategy (10,000 req/s simulation)",
      "Security Pen-Testing & Vulnerability Test Cases",
      "Bug Severity Matrix & Risk Mitigation Protocol"
    ]
  },
  {
    week: 4,
    title: "Performance, Accessibility & Security Audit for Digital Platforms",
    shortTitle: "Week 4: Audit & Security Radar",
    badge: "Audit & Compliance",
    icon: "Activity",
    summary: "Rigorous technical audit covering Google Lighthouse Core Web Vitals, WCAG 2.1 AA accessibility scorecards, and live interactive XSS/SQL Injection cybersecurity defense simulations.",
    deliverables: [
      "Core Web Vitals & Real-Time Performance Scoreboard",
      "WCAG 2.1 AA Compliance Checklist & Contrast Audit",
      "Interactive XSS & SQLi Exploit & Defense Visualizer",
      "Role-Based Access Control (RBAC) Security Matrix",
      "Production Optimization & Scalability Recommendations"
    ]
  }
];

export const week1Data = {
  overview: {
    vision: "To establish a citizen-centric, unified digital public service portal ('JanSeva 360') that eliminates physical bureaucracy, cuts administrative turnaround from 14 days to under 48 hours, and guarantees 100% transparent, corruption-free public service delivery for over 1.4 billion citizens across rural and urban India.",
    problemStatement: "Citizens currently face fragmented departmental portals, lengthy physical queues at local revenue offices (Tehsils/Collectorates), lack of transparent tracking, arbitrary delays, and high digital barriers for non-tech-savvy rural populations.",
    targetAudience: "All Indian citizens (students, farmers, senior citizens, small business owners) alongside municipal officers, field verifiers, and department administrators."
  },
  personas: [
    {
      id: "p1",
      name: "Rameshwar Rao (52)",
      role: "Smallholder Farmer & Agrarian",
      location: "Guntur Rural, Andhra Pradesh",
      digitalLiteracy: "Basic (Smartphone & WhatsApp only)",
      language: "Telugu & basic Hindi",
      goals: "Apply for PM-Kisan DBT subsidy and obtain Land 7/12 mutation extract without paying middlemen or visiting the taluka office 35km away.",
      painPoints: "Slow 2G/3G mobile data, complicated English-only legal jargon, inability to scan large PDFs.",
      solutionBenefit: "High-contrast vernacular UI, Aadhaar OTP authentication, SMS-based status alerts, instant voice reader support."
    },
    {
      id: "p2",
      name: "Sneha Mukherjee (21)",
      role: "Engineering Graduate & Job Aspirant",
      location: "Kolkata, West Bengal",
      digitalLiteracy: "Advanced (Tech-savvy)",
      language: "English & Bengali",
      goals: "Instantly obtain an authenticated digital Income & Domicile certificate with verifiable cryptographic QR code for UPSC & campus placements.",
      painPoints: "Unpredictable certificate processing times, lack of real-time application tracking, physical document verification demands.",
      solutionBenefit: "Direct DigiLocker document import, live 4-stage tracking timeline, instant digitally signed PDF download."
    },
    {
      id: "p3",
      name: "K. S. Narayanan (68)",
      role: "Retired Public Sector Employee",
      location: "Madurai, Tamil Nadu",
      digitalLiteracy: "Low to Moderate",
      language: "Tamil & English",
      goals: "Submit annual life certificate, register civic complaints regarding street lighting, and track municipal pension status.",
      painPoints: "Small unreadable fonts, poor color contrast, complicated navigation menus, lack of telephone escalation.",
      solutionBenefit: "Large text zoom toggle (A+/A-), simplified 2-click grievance filing, integrated voice assistance."
    },
    {
      id: "p4",
      name: "Aditi Sharma, IAS (38)",
      role: "Sub-Divisional Magistrate (SDM) / Reviewing Officer",
      location: "District Administration Office",
      digitalLiteracy: "High",
      language: "English & Hindi",
      goals: "Review, verify, and digitally approve citizen applications within prescribed 48-hour Citizen Charter SLAs without physical paper files.",
      painPoints: "Heavy backlog of unverified documents, manual duplicate applications, lack of audit trails.",
      solutionBenefit: "Unified Officer Inbox, single-click digital DSC e-Sign, automated land/income database cross-checking, SLA countdown timer."
    }
  ],
  functionalRequirements: [
    { id: "FR-01", module: "Authentication", title: "Aadhaar e-KYC & Mobile OTP Verification", priority: "Must Have", desc: "Single sign-on using 12-digit UIDAI Aadhaar OTP or mobile phone number with instant cryptographic validation." },
    { id: "FR-02", module: "Service Catalog", title: "Single-Window Public Service Discovery", priority: "Must Have", desc: "Faceted search, category filters (Identity, Revenue, Welfare, Grievance), SLA badges, and fee schedules." },
    { id: "FR-03", module: "Application Engine", title: "Dynamic Multi-Step Application Wizard", priority: "Must Have", desc: "Adaptive form fields based on service type with real-time input sanitization and client-side validation." },
    { id: "FR-04", module: "Document Management", title: "DigiLocker Integration & File Vault", priority: "Must Have", desc: "One-click fetch of verified certificates from DigiLocker repository; client-side image compression under 2MB." },
    { id: "FR-05", module: "Tracking System", title: "Live Real-Time Application Timeline", priority: "Must Have", desc: "Unique tracking ID (JS-2026-XXXX) with a 4-step progress stepper, officer remarks, and estimated completion date." },
    { id: "FR-06", module: "Certificate Engine", title: "Cryptographically Signed QR Certificates", priority: "Must Have", desc: "Automated generation of tamper-proof certificates with digital signature watermarks and public verification QR." },
    { id: "FR-07", module: "Grievance Portal", title: "Civic JanSunwai Redressal & Geo-Tagging", priority: "Must Have", desc: "Lodge civic complaints with photo upload, GPS coordinates, priority SLA assignment, and department routing." },
    { id: "FR-08", module: "Officer Console", title: "Role-Based Officer Workflow & E-Sign", priority: "Must Have", desc: "Desk officer / SDM approval interface with batch actions, remark logging, and e-Sign integration." },
    { id: "FR-09", module: "Welfare Engine", title: "Dynamic Scheme Eligibility Calculator", priority: "Should Have", desc: "Rule-based engine matching citizen age, income, caste, and landholding to all eligible state/central subsidies." },
    { id: "FR-10", module: "Communication", title: "Multi-Channel SMS & WhatsApp Alerts", priority: "Should Have", desc: "Instant automated trigger at each stage change: Application Received, Inspection Scheduled, Certificate Ready." }
  ],
  nonFunctionalRequirements: [
    { id: "NFR-01", category: "Performance", metric: "Page Load Time < 1.2s", desc: "First Contentful Paint under 800ms even on low-speed 3G/4G connections across rural telemetry." },
    { id: "NFR-02", category: "Scalability", metric: "100,000 Concurrent Users", desc: "Stateless microservices architecture with elastic auto-scaling and Redis caching for read-heavy public data." },
    { id: "NFR-03", category: "Accessibility", metric: "WCAG 2.1 AA Compliance", desc: "100% keyboard navigable, 4.5:1 minimum contrast ratio, screen reader ARIA landmarks, and text size scaler." },
    { id: "NFR-04", category: "Security", metric: "OWASP Top 10 Hardened", desc: "Strict parameterized SQL, DOMPurify XSS scrubbing, TLS 1.3 encryption in transit, and AES-256 for stored data." },
    { id: "NFR-05", category: "Availability", metric: "99.95% High Availability", desc: "Multi-region redundant cloud deployment with automated failover and zero-downtime rolling updates." },
    { id: "NFR-06", category: "Localization", metric: "22 Official Languages Support", desc: "Dynamic UTF-8 string localization with fallback to English and instant language switching without page reload." }
  ],
  userJourney: [
    { step: "1. Discovery & Needs Assessment", action: "Citizen visits portal, searches for 'Income Certificate' or uses Jan-Mitra AI Assistant.", emotion: "Hopeful", touchpoint: "Home Search Bar / Service Catalog" },
    { step: "2. Identity & Prefill", action: "Citizen enters phone/Aadhaar OTP; profile details and DigiLocker documents are pre-filled automatically.", emotion: "Delighted", touchpoint: "Smart Form Wizard Step 1" },
    { step: "3. Form Submission & Payment", action: "Uploads supplementary affidavit, pays nominal fee (₹25), receives instant tracking ID 'JS-2026-XXXX'.", emotion: "Relieved", touchpoint: "Payment Gateway / Receipt Screen" },
    { step: "4. Department Verification", action: "Revenue Inspector verifies data against land/tax databases; Tehsildar approves digitally within 48 hours.", emotion: "Neutral", touchpoint: "Officer Internal Console" },
    { step: "5. Certificate Delivery & Verification", action: "Citizen receives SMS with download link; downloads digitally signed certificate with verifiable QR code.", emotion: "Satisfied & Empowered", touchpoint: "Application Tracker / Digital Locker" }
  ],
  riskMatrix: [
    { risk: "Server overload during exam/scheme admission deadlines", severity: "High", probability: "High", mitigation: "Edge CDN caching, queue-based request throttling, read replicas, and serverless auto-scaling." },
    { risk: "Submission of fraudulent or forged identity proofs", severity: "Critical", probability: "Medium", mitigation: "Direct API verification against UIDAI (Aadhaar), Income Tax (PAN), and State Land Records database." },
    { risk: "Low digital literacy causing high form drop-off rates", severity: "High", probability: "High", mitigation: "Voice reader support, simplified 3-step wizard, vernacular language toggle, and Jan-Mitra chatbot guide." },
    { risk: "Officer SLA violation and delayed approvals", severity: "Medium", probability: "Medium", mitigation: "Automated hierarchical escalation to District Collector after 48 hours and public SLA dashboard." }
  ]
};

export const week2Data = {
  designPhilosophy: {
    coreValues: ["Inclusive & Accessible by Default", "Mobile-First for Tier-2/3/Rural Citizens", "Trustworthy & Official Government Aesthetic", "Frictionless Forms with Smart Auto-Fill"],
    colorPalette: [
      { name: "Ashoka Navy", hex: "#0b192c", usage: "Primary Brand, Headers, System Bars" },
      { name: "National Cobalt", hex: "#1d4ed8", usage: "Primary Actions, Interactive Buttons, Active Links" },
      { name: "Saffron Gold", hex: "#f59e0b", usage: "Alerts, Highlights, Official Emblems, Badges" },
      { name: "Emerald Mint", hex: "#10b981", usage: "Success Badges, Verified Status, Approvals" },
      { name: "Slate Neutral", hex: "#f8fafc", usage: "Card Backgrounds, Surface Layers, Clean Backdrops" }
    ],
    typography: {
      primaryFont: "Inter, system-ui, sans-serif",
      headingFont: "Outfit, sans-serif",
      monoFont: "JetBrains Mono, monospace",
      scale: "Responsive REM-based fluid typography scaling from 14px mobile to 18px base desktop."
    }
  },
  deviceViewports: [
    { id: "desktop", label: "Desktop (1920px)", width: "100%", height: "700px", icon: "Monitor", desc: "Full widescreen experience with multi-column analytics, side navigation, and comprehensive tables." },
    { id: "laptop", label: "Laptop (1366px)", width: "1024px", height: "650px", icon: "Laptop", desc: "Standard public kiosk and office workstation layout with balanced spacing." },
    { id: "tablet", label: "Tablet (768px)", width: "768px", height: "600px", icon: "Tablet", desc: "Field officer tablet view with collapsable drawer navigation and touch-optimized action targets." },
    { id: "mobile", label: "Mobile (375px)", width: "375px", height: "650px", icon: "Smartphone", desc: "Mobile-first citizen view with bottom action bars, large touch buttons, and compact cards." }
  ]
};

export const week3Data = {
  testStrategy: {
    approach: "Hybrid automated continuous testing with rigorous security penetration testing and WCAG accessibility validation.",
    testLevels: [
      { level: "Unit Testing", coverage: "92%", tool: "Vitest / Jest", focus: "Form validation rules, Aadhaar checksum algorithms, fee computation." },
      { level: "Integration Testing", coverage: "88%", tool: "React Testing Library", focus: "DigiLocker token bridge, service catalog filtering, modal workflows." },
      { level: "End-to-End (E2E)", coverage: "85%", tool: "Playwright / Cypress", focus: "Complete citizen application journey from login to QR certificate generation." },
      { level: "Security & Pen-Testing", coverage: "100%", tool: "OWASP ZAP / Burp", focus: "SQLi injection defense, XSS sanitization, CSRF token validation, RBAC checks." },
      { level: "Stress & Load Testing", coverage: "100%", tool: "k6 / Artillery", focus: "10,000 concurrent citizen submissions under 1.5s response threshold." }
    ]
  },
  testCases: [
    {
      id: "TC-AUTH-01",
      module: "Authentication & Validation",
      title: "Verify 12-digit Aadhaar Verhoeff Algorithm & Format Validation",
      type: "Functional Unit Test",
      priority: "P0 - Critical",
      steps: [
        "1. Input valid 12-digit UID: '9845-1234-5678'",
        "2. Trigger validation trigger on blur",
        "3. Assert format matches regex ^[2-9]{1}[0-9]{3}\\s?[0-9]{4}\\s?[0-9]{4}$",
        "4. Input invalid string '1234-ABCD-9999' and assert validation error message."
      ],
      expectedResult: "Valid Aadhaar passes without error; invalid input triggers immediate inline red error alert.",
      status: "PASS",
      executionTimeMs: 14
    },
    {
      id: "TC-FORM-02",
      module: "Application Engine",
      title: "Validate Multi-Document Upload File Type & 2MB Boundary Size",
      type: "Integration Test",
      priority: "P0 - Critical",
      steps: [
        "1. Select valid PDF file (1.4 MB) -> assert preview badge appears with green check.",
        "2. Select executable file '.exe' or '.bat' -> assert immediate MIME rejection.",
        "3. Select oversized image (8.5 MB) -> assert client-side auto-compression or size error alert."
      ],
      expectedResult: "Only PDF, JPG, PNG under 2MB accepted; unsafe MIME types safely blocked at boundary.",
      status: "PASS",
      executionTimeMs: 28
    },
    {
      id: "TC-SEC-03",
      module: "Security & Sanitization",
      title: "Verify XSS Script Injection Sanitization in Grievance Description",
      type: "Security Pen-Test",
      priority: "P0 - Critical",
      steps: [
        "1. Enter payload: '<script>alert(document.cookie)</script><img src=x onerror=alert(1)>' into Grievance text field.",
        "2. Submit grievance form.",
        "3. Inspect rendered DOM output in tracker and officer console.",
        "4. Assert payload is HTML-escaped/sanitized to '&lt;script&gt;' and no JS execution occurs."
      ],
      expectedResult: "Zero JavaScript execution; payload rendered safely as inert plain text.",
      status: "PASS",
      executionTimeMs: 19
    },
    {
      id: "TC-SEC-04",
      module: "Security & Database",
      title: "Validate Parameterized Query Defense against SQL Injection (' OR 1=1 --)",
      type: "Security Pen-Test",
      priority: "P0 - Critical",
      steps: [
        "1. Enter tracking ID: '' OR '1'='1' --' in Application Tracker search bar.",
        "2. Execute search request.",
        "3. Assert query engine uses prepared statement binding without evaluating boolean injection.",
        "4. Assert system returns 'Invalid / No Record Found' without leaking database schema."
      ],
      expectedResult: "SQL injection thwarted; zero database error leakage; returns safe structured response.",
      status: "PASS",
      executionTimeMs: 22
    },
    {
      id: "TC-LOAD-05",
      module: "Performance & Stress",
      title: "Simulate 5,000 Concurrent Application Submissions (Peak Traffic)",
      type: "Stress Test",
      priority: "P1 - High",
      steps: [
        "1. Spawn 5,000 virtual user threads submitting Income Certificate requests over 30 seconds.",
        "2. Measure 95th percentile response time (p95) and error rate.",
        "3. Assert p95 response time < 1,500ms and HTTP 5xx error rate < 0.01%."
      ],
      expectedResult: "Server maintained 99.99% success rate; p95 latency 480ms under high concurrency load.",
      status: "PASS",
      executionTimeMs: 145
    },
    {
      id: "TC-RBAC-06",
      module: "Role-Based Access Control",
      title: "Enforce Citizen vs Officer Authorization Boundary on Approval Endpoints",
      type: "Security Test",
      priority: "P0 - Critical",
      steps: [
        "1. Login as standard Citizen user token.",
        "2. Attempt HTTP POST to '/api/v1/officer/approve-certificate/JS-2026-8842'.",
        "3. Assert backend returns HTTP 403 Forbidden with security audit log entry."
      ],
      expectedResult: "Access denied with HTTP 403; unauthorized elevation prevented.",
      status: "PASS",
      executionTimeMs: 16
    }
  ]
};

export const week4Data = {
  lighthouseScores: {
    performance: 99,
    accessibility: 100,
    bestPractices: 98,
    seo: 100,
    pwa: 95
  },
  coreWebVitals: [
    { metric: "First Contentful Paint (FCP)", value: "0.6 s", rating: "Good", benchmark: "< 1.8 s", color: "#10b981" },
    { metric: "Speed Index (SI)", value: "0.9 s", rating: "Good", benchmark: "< 3.4 s", color: "#10b981" },
    { metric: "Largest Contentful Paint (LCP)", value: "1.1 s", rating: "Good", benchmark: "< 2.5 s", color: "#10b981" },
    { metric: "Total Blocking Time (TBT)", value: "20 ms", rating: "Good", benchmark: "< 200 ms", color: "#10b981" },
    { metric: "Cumulative Layout Shift (CLS)", value: "0.002", rating: "Good", benchmark: "< 0.1", color: "#10b981" },
    { metric: "Server Response Time (TTFB)", value: "48 ms", rating: "Good", benchmark: "< 800 ms", color: "#10b981" }
  ],
  accessibilityAudit: [
    { standard: "WCAG 1.4.3 Contrast (Minimum)", status: "Pass (Score: 7.2:1)", detail: "All body copy, buttons, and navigation meet high contrast standard (AAA level for key text)." },
    { standard: "WCAG 2.1.1 Keyboard Navigable", status: "Pass (100% Accessible)", detail: "Full keyboard tab ordering, visible focus rings, and skip-to-content navigation." },
    { standard: "WCAG 1.1.1 Non-Text Content", status: "Pass (All Assets ARIA Tagged)", detail: "All emblems, icons, badges have descriptive aria-labels and alt text." },
    { standard: "WCAG 1.4.4 Resize Text (200%)", status: "Pass (Fluid REM Scaling)", detail: "Dynamic text scaler buttons (A-, A, A+) adapt layout without clipping or horizontal scrollbars." },
    { standard: "WCAG 3.1.2 Language of Parts", status: "Pass (Multi-Lingual UTF-8)", detail: "Proper HTML lang attributes updated dynamically on language switch." }
  ],
  securityVulnerabilities: [
    {
      threat: "Cross-Site Scripting (XSS)",
      cwe: "CWE-79",
      riskLevel: "High",
      testedVector: "<script>alert(1)</script> in form textareas",
      mitigationImplemented: "Strict DOMPurify sanitization + React JSX automatic HTML escaping + Content Security Policy (CSP) headers.",
      status: "Secured & Verified"
    },
    {
      threat: "SQL Injection (SQLi)",
      cwe: "CWE-89",
      riskLevel: "Critical",
      testedVector: "' OR '1'='1' -- in tracking ID query parameter",
      mitigationImplemented: "100% Parameterized Prepared Statements & ORM abstraction; raw concatenated SQL strictly prohibited.",
      status: "Secured & Verified"
    },
    {
      threat: "Cross-Site Request Forgery (CSRF)",
      cwe: "CWE-352",
      riskLevel: "High",
      testedVector: "Unauthenticated cross-origin form POSTs to approval endpoint",
      mitigationImplemented: "SameSite=Strict cookie flags + Cryptographic Double Submit anti-CSRF token verification on all POST/PUT/DELETE requests.",
      status: "Secured & Verified"
    },
    {
      threat: "Broken Object Level Authorization (BOLA / IDOR)",
      cwe: "CWE-639",
      riskLevel: "Critical",
      testedVector: "Directly tampering certificate ID in URL to view another citizen's records",
      mitigationImplemented: "Session UID token bound to certificate ownership; cryptographic HMAC verification hash on public QR URLs.",
      status: "Secured & Verified"
    }
  ]
};
