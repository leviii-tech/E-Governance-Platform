import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CitizenHome } from './components/CitizenPortal/CitizenHome';
import { ServiceCatalog } from './components/CitizenPortal/ServiceCatalog';
import { ApplicationTracker } from './components/CitizenPortal/ApplicationTracker';
import { GrievanceRedressal } from './components/CitizenPortal/GrievanceRedressal';
import { SchemeEligibilityCalculator } from './components/CitizenPortal/SchemeEligibilityCalculator';
import { DigiLockerVault } from './components/CitizenPortal/DigiLockerVault';
import { JanMitraChatbot } from './components/CitizenPortal/JanMitraChatbot';
import { ApplicationWizardModal } from './components/CitizenPortal/ApplicationWizardModal';
import { CertificateModal } from './components/CertificateModal';
import { OfficerDashboard } from './components/OfficerConsole/OfficerDashboard';
import { mockInitialApplications, publicServices } from './data/servicesData';
import { translations } from './data/translations';

export function App() {
  const [currentRole, setCurrentRole] = useState('citizen'); // 'citizen' | 'officer'
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'services' | 'track' | 'grievance' | 'schemes' | 'digilocker'
  const [theme, setTheme] = useState('light'); // 'light' | 'dark' | 'contrast'
  const [lang, setLang] = useState('en'); // 'en' | 'hi' | 'te' | 'ta'
  const [fontScale, setFontScale] = useState(1);
  const [dyslexicFont, setDyslexicFont] = useState(false);

  // Core Data States
  const [applications, setApplications] = useState(mockInitialApplications);
  const [selectedServiceForWizard, setSelectedServiceForWizard] = useState(null);
  const [activeCertificateApp, setActiveCertificateApp] = useState(null);
  const [trackerInitialId, setTrackerInitialId] = useState('JS-2026-8842');

  // Apply Theme & Font Scale to Root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.style.setProperty('--font-scale', fontScale);
    if (dyslexicFont) {
      document.documentElement.setAttribute('data-font', 'dyslexic');
    } else {
      document.documentElement.removeAttribute('data-font');
    }
  }, [theme, lang, fontScale, dyslexicFont]);

  // Handlers
  const handleSelectService = (service) => {
    setSelectedServiceForWizard(service);
  };

  const handleSuccessSubmit = (newApp) => {
    setApplications(prev => [newApp, ...prev]);
    setTrackerInitialId(newApp.id);
  };

  const handleUpdateAppStatus = (appId, newStatus, remarks, certNo) => {
    setApplications(prev => prev.map(app => {
      if (app.id === appId) {
        return {
          ...app,
          status: newStatus,
          remarks: remarks || app.remarks,
          certificateNo: certNo || app.certificateNo,
          history: [
            ...app.history,
            { stage: `Officer Status Update: ${newStatus}`, time: 'Just Now', done: true, officer: 'Sub-Divisional Magistrate SDM-04' }
          ]
        };
      }
      return app;
    }));
  };

  const handleTrackApplication = (id) => {
    setTrackerInitialId(id);
    setCurrentRole('citizen');
    setActiveTab('track');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateFromFooter = (targetTab) => {
    setCurrentRole('citizen');
    setActiveTab(targetTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Global Header & Navigation */}
      <Navbar 
        currentRole={currentRole}
        setCurrentRole={setCurrentRole}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        setTheme={setTheme}
        lang={lang}
        setLang={setLang}
        fontScale={fontScale}
        setFontScale={setFontScale}
        dyslexicFont={dyslexicFont}
        setDyslexicFont={setDyslexicFont}
      />

      {/* Main Dynamic Viewport */}
      <main style={{ flex: 1 }}>
        {currentRole === 'citizen' && (
          <>
            {activeTab === 'home' && (
              <CitizenHome 
                lang={lang}
                onNavigate={(tab) => { setActiveTab(tab); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                onSelectService={handleSelectService}
                applicationsCount={applications.length}
                onTrackApp={handleTrackApplication}
              />
            )}

            {activeTab === 'services' && (
              <ServiceCatalog 
                lang={lang}
                onSelectService={handleSelectService}
              />
            )}

            {activeTab === 'track' && (
              <ApplicationTracker 
                applications={applications}
                initialSearchId={trackerInitialId}
                onViewCertificate={(app) => setActiveCertificateApp(app)}
                lang={lang}
              />
            )}

            {activeTab === 'grievance' && (
              <GrievanceRedressal 
                lang={lang}
              />
            )}

            {activeTab === 'schemes' && (
              <SchemeEligibilityCalculator 
                onApplyScheme={(scheme) => {
                  const srv = publicServices.find(s => s.id === 'srv-pmkisan') || publicServices[0];
                  setSelectedServiceForWizard(srv);
                }}
              />
            )}

            {activeTab === 'digilocker' && (
              <DigiLockerVault 
                onViewCertificate={() => {
                  const sampleApproved = applications.find(a => a.status === 'Approved') || applications[0];
                  setActiveCertificateApp(sampleApproved);
                }}
              />
            )}
          </>
        )}

        {currentRole === 'officer' && (
          <OfficerDashboard 
            applications={applications}
            onUpdateAppStatus={handleUpdateAppStatus}
            onViewCertificate={(app) => setActiveCertificateApp(app)}
          />
        )}
      </main>

      {/* Application Wizard Modal */}
      {selectedServiceForWizard && (
        <ApplicationWizardModal 
          service={selectedServiceForWizard}
          onClose={() => setSelectedServiceForWizard(null)}
          onSuccessSubmit={handleSuccessSubmit}
          onViewCertificate={(app) => setActiveCertificateApp(app)}
        />
      )}

      {/* Digital Certificate Modal */}
      {activeCertificateApp && (
        <CertificateModal 
          application={activeCertificateApp}
          onClose={() => setActiveCertificateApp(null)}
        />
      )}

      {/* Floating AI Citizen Assistant */}
      <JanMitraChatbot 
        onNavigate={(tab) => { setCurrentRole('citizen'); setActiveTab(tab); }}
        onSelectServiceByName={(name) => {
          const srv = publicServices.find(s => s.title.toLowerCase().includes(name.toLowerCase())) || publicServices[0];
          setSelectedServiceForWizard(srv);
        }}
      />

      {/* Official Government Footer */}
      <Footer 
        lang={lang} 
        onNavigate={handleNavigateFromFooter} 
      />
    </div>
  );
}

export default App;
