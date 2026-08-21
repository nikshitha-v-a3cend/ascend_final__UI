import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AnnouncementBanner } from '@/components/layout/AnnouncementBanner';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { FrameworkPage } from '@/pages/FrameworkPage';
import { RehearsePage } from '@/pages/RehearsePage';
import { ContentOrchestratorPage } from '@/pages/ContentOrchestratorPage';
import { TryItPage } from '@/pages/TryItPage';
import { LivePresenterPage } from '@/pages/LivePresenterPage';
import { SimulationPage } from '@/pages/SimulationPage';
import { ContactPage } from '@/pages/ContactPage';
import { PowerTalksPage } from '@/pages/PowerTalksPage';

import { LeadershipSolutionPage } from '@/pages/solutions/LeadershipSolutionPage';
import { SalesSolutionPage } from '@/pages/solutions/SalesSolutionPage';
import { OnboardingSolutionPage } from '@/pages/solutions/OnboardingSolutionPage';
import { ComplianceSolutionPage } from '@/pages/solutions/ComplianceSolutionPage';

import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage';
import { TermsOfServicePage } from '@/pages/TermsOfServicePage';
import { CookiePolicyPage } from '@/pages/CookiePolicyPage';
import { CookieConsentBanner } from '@/components/common/CookieConsentBanner';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

// Scroll to top or anchor on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen selection:bg-brand-100 selection:text-brand-600">
        <AnnouncementBanner />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/framework" element={<FrameworkPage />} />
            <Route path="/rehearse" element={<RehearsePage />} />
            <Route path="/content-orchestrator" element={<ContentOrchestratorPage />} />
            <Route path="/try-it" element={<TryItPage />} />
            <Route path="/try/live-presenter" element={<LivePresenterPage />} />
            <Route path="/try/simulation" element={<SimulationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/powertalks" element={<PowerTalksPage />} />

            {/* 4 Dedicated Solution Pages */}
            <Route path="/solutions/leadership" element={<LeadershipSolutionPage />} />
            <Route path="/solutions/sales" element={<SalesSolutionPage />} />
            <Route path="/solutions/onboarding" element={<OnboardingSolutionPage />} />
            <Route path="/solutions/compliance" element={<ComplianceSolutionPage />} />

            {/* Legal & Compliance Pages */}
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/cookies" element={<CookiePolicyPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsentBanner />
      </div>
    </QueryClientProvider>
  );
};
