# JanSeva 360 - National Digital Public Services & E-Governance Platform

> **Empowering 1.4 Billion Citizens with Transparent, Frictionless E-Governance**

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.x-61dafb.svg)
![Vite](https://img.shields.io/badge/Vite-8.x-646cff.svg)
![Accessibility](https://img.shields.io/badge/WCAG%202.1-AA%20Compliant-success.svg)
![Security](https://img.shields.io/badge/Security-OWASP%20Top%2010%20Hardened-orange.svg)

---

## 🏛️ Project Overview

**JanSeva 360** is a next-generation, citizen-centric National E-Governance Platform designed to deliver seamless, transparent, and corruption-free public services. Built on the principles of **India's Digital Public Infrastructure (DPI)**, the portal integrates identity verification, instant certificate issuance, civic grievance resolution, and direct welfare benefit transfers with statutory 48-hour SLAs.

---

## ✨ Core Features & Modules

### 1. 👨‍💼 Citizen Services Hub
- **Single-Window Public Service Catalog:** 18+ statutory services across Identity, Revenue, Agriculture, Social Welfare, and Urban Administration.
- **Dynamic Multi-Step Application Wizard:** 4-step smart form with instant input validation, document attachment, and OTP verification simulation.
- **Real-Time Application Tracker:** 4-stage tracking timeline (Submitted ➔ Document Scrutiny ➔ Field Verification ➔ Digital Certificate Dispatched) with officer remarks.
- **Authentic Digital Certificate Generator:** Generates verifiable certificates with 2048-bit DSC digital signatures, QR verification endpoints, and print/PDF support.

### 2. 🚨 JanSunwai 24x7 Civic Grievance Redressal
- Lodge civic complaints with Department routing, GPS coordinate auto-tagging, photo attachment, and severity priority tags (Critical 24h / High 48h SLA).
- Live complaint status monitor and assigned officer desk accountability.

### 3. 🌾 Welfare Schemes & Benefit Calculator
- Interactive demographic eligibility engine matching citizen age, income, category, and occupation to 12+ central/state welfare subsidies.
- Monthly financial benefit breakdowns and one-click direct benefit transfer (DBT) enrollment.

### 4. 📂 DigiLocker National Vault Integration
- Digital repository of verified statutory credentials (Aadhaar UIDAI, PAN, Land Records 7/12 RoR, Statutory Certificates).
- Cryptographic SHA-256 hash integrity checks and instant document previews.

### 5. 🤖 Jan-Mitra AI Citizen Assistant
- Embedded 24x7 AI chatbot providing instant guidance on certificate prerequisites, application tracking, and grievance redressal.

### 6. 🏛️ Government Officer Scrutiny & Approval Desk
- Role-based console for Sub-Divisional Magistrates (SDM) and Revenue Inspectors.
- Real-time pending queue, document scrutiny preview, remark logging, and one-click digital DSC signature approval.

### 7. ♿ Accessibility & Localization
- **WCAG 2.1 AA Compliance:** Minimum 4.5:1 color contrast, keyboard-accessible navigation, visible focus rings.
- **High-Contrast Mode:** One-click toggle between Light, Dark, and High-Contrast Gold/Black themes.
- **Text-to-Speech Voice Reader:** In-browser speech synthesis narrator for visually impaired and rural citizens.
- **Dynamic Font Scaler (A- / A / A+)** and **OpenDyslexic Font** support.
- **Multilingual Support:** Instant switching between English, हिन्दी (Hindi), తెలుగు (Telugu), and தமிழ் (Tamil).

---

## 🛠️ Tech Stack & Architecture

- **Frontend Framework:** React 19 + Vite 8
- **Styling System:** Modern Vanilla CSS with Custom Design Tokens & Glassmorphism
- **Iconography:** Lucide React
- **Interactive FX:** Canvas Confetti
- **Standards:** WCAG 2.1 AA, ISO/IEC 27001 Security Guidelines, IT Act 2000 Section 9A Compliance

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/leviii-tech/E-Governance-Platform.git

# 2. Navigate to project directory
cd E-Governance-Platform

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

The web application will launch at `http://localhost:5173/`.

### Building for Production
```bash
npm run build
```

---

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
