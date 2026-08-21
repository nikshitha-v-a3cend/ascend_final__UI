import React, { useState, useEffect } from 'react';
import { HeroParticleCanvas } from '@/components/common/HeroParticleCanvas';

export const CookiePolicyPage: React.FC = () => {
  const [currentConsent, setCurrentConsent] = useState<{ necessary: boolean; analytics: boolean; functional: boolean } | null>(null);
  const [resetMessage, setResetMessage] = useState<string | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem('a3cend_cookie_consent');
    if (raw) {
      try {
        setCurrentConsent(JSON.parse(raw));
      } catch {
        setCurrentConsent({ necessary: true, analytics: true, functional: true });
      }
    }
  }, []);

  const handleResetCookies = () => {
    localStorage.removeItem('a3cend_cookie_consent');
    setCurrentConsent(null);
    setResetMessage('Cookie preferences reset. The consent banner will reappear on your next action or page refresh.');
    setTimeout(() => setResetMessage(null), 4000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO BANNER */}
      <section className="a3-hero-iridescent relative overflow-hidden px-6 md:px-12 py-12 md:py-16 border-b border-slate-200/60">
        <HeroParticleCanvas canvasId="cookie-canvas" count={120} />
        <div className="relative z-10 max-w-[960px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/95 border border-brand-600/20 rounded-full shadow-sm mb-4">
            <span className="text-[10px] font-black tracking-widest text-brand-600 font-heading uppercase">
              LEGAL &amp; COMPLIANCE
            </span>
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-ink-900 tracking-tight">
            Cookie Policy
          </h1>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            Last updated: August 2026
          </p>
        </div>
      </section>

      {/* COOKIE POLICY CONTENT */}
      <div className="max-w-[880px] mx-auto px-6 md:px-12 py-14 leading-relaxed text-slate-700 space-y-10 text-sm md:text-base">
        <div>
          <h2 className="font-heading font-black text-2xl text-ink-900 mb-3">
            1. What Are Cookies?
          </h2>
          <p>
            Cookies are small text files placed on your device (computer, tablet, or mobile) when you visit our website or use the A3CEND platform. They help us ensure security, keep your sessions authenticated, remember UI preferences, and provide smooth simulation experiences.
          </p>
        </div>

        <div>
          <h2 className="font-heading font-black text-2xl text-ink-900 mb-3">
            2. Types of Cookies We Use
          </h2>
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="font-heading font-bold text-base text-ink-900 flex items-center justify-between">
                <span>1. Strictly Necessary Cookies</span>
                <span className="text-xs bg-brand-50 text-brand-600 font-bold px-2 py-0.5 rounded">Required</span>
              </div>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Essential for core site navigation, secure token authentication, load balancing, and CSRF protection. The platform cannot function properly without these cookies.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="font-heading font-bold text-base text-ink-900 flex items-center justify-between">
                <span>2. Performance &amp; Analytics Cookies</span>
                <span className="text-xs bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded">Optional</span>
              </div>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Collect aggregated, anonymized metrics on page load speeds, error logs, and feature usage patterns to help our engineering team optimize platform performance.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="font-heading font-bold text-base text-ink-900 flex items-center justify-between">
                <span>3. Functional Cookies</span>
                <span className="text-xs bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded">Optional</span>
              </div>
              <p className="mt-2 text-xs md:text-sm text-slate-600">
                Remember user-selected preferences such as volume levels in simulation avatars, audio recording device selection, and UI theme states.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-heading font-black text-2xl text-ink-900 mb-3">
            3. Managing &amp; Resetting Your Preferences
          </h2>
          <p>
            You can modify your cookie choices at any time. Clicking the button below will clear your stored local preferences and trigger the interactive consent modal:
          </p>

          <div className="mt-5 p-6 rounded-2xl bg-[#f0f9fa] border border-brand-200">
            <div className="font-heading font-bold text-sm text-ink-900 mb-2">
              Current Consent Status:
            </div>
            <div className="text-xs font-mono text-slate-600 mb-4">
              {currentConsent ? (
                <>
                  Strictly Necessary: <strong>Active</strong> · Analytics:{' '}
                  <strong>{currentConsent.analytics ? 'Enabled' : 'Disabled'}</strong> · Functional:{' '}
                  <strong>{currentConsent.functional ? 'Enabled' : 'Disabled'}</strong>
                </>
              ) : (
                'No custom preference stored (Default / Pending selection)'
              )}
            </div>

            <button
              type="button"
              onClick={handleResetCookies}
              className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-heading font-extrabold text-xs shadow-sm transition-all"
            >
              Reset Cookie Preferences
            </button>

            {resetMessage && (
              <div className="mt-3 text-xs font-semibold text-brand-700 animate-fadeIn">
                ✓ {resetMessage}
              </div>
            )}
          </div>
        </div>

        <div>
          <h2 className="font-heading font-black text-2xl text-ink-900 mb-3">
            4. Browser-Level Controls
          </h2>
          <p>
            Most modern web browsers (Chrome, Edge, Safari, Firefox) allow you to block or delete cookies through browser settings. Please note that disabling strictly necessary cookies will prevent you from logging into your enterprise account or launching interactive roleplays.
          </p>
        </div>
      </div>
    </div>
  );
};
