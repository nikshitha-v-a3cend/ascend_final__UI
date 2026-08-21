import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CookieConsentBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [showCustomModal, setShowCustomModal] = useState<boolean>(false);
  const [analyticsCookies, setAnalyticsCookies] = useState<boolean>(true);
  const [functionalCookies, setFunctionalCookies] = useState<boolean>(true);

  useEffect(() => {
    const savedConsent = localStorage.getItem('a3cend_cookie_consent');
    if (!savedConsent) {
      // Delay slightly for smooth entrance
      const timer = setTimeout(() => setShowBanner(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      'a3cend_cookie_consent',
      JSON.stringify({ necessary: true, analytics: true, functional: true, timestamp: new Date().toISOString() })
    );
    setShowBanner(false);
    setShowCustomModal(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem(
      'a3cend_cookie_consent',
      JSON.stringify({ necessary: true, analytics: false, functional: false, timestamp: new Date().toISOString() })
    );
    setShowBanner(false);
    setShowCustomModal(false);
  };

  const handleSaveCustom = () => {
    localStorage.setItem(
      'a3cend_cookie_consent',
      JSON.stringify({ necessary: true, analytics: analyticsCookies, functional: functionalCookies, timestamp: new Date().toISOString() })
    );
    setShowBanner(false);
    setShowCustomModal(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* FLOATING BOTTOM BANNER */}
      <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 lg:left-auto lg:right-8 lg:max-w-[560px] z-50 animate-fadeUp">
        <div className="a3-glass-card bg-white/95 backdrop-blur-xl border border-brand-600/20 shadow-2xl rounded-3xl p-6 sm:p-7 relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-brand-50 border border-brand-200 text-brand-600 flex items-center justify-center text-xl shrink-0 shadow-sm">
              🍪
            </div>
            <div className="flex-1">
              <div className="font-heading font-extrabold text-base text-ink-900">
                We value your privacy
              </div>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                We use cookies to improve performance, analyze platform usage, and personalize simulation experiences. We never sell your personal data. Read our{' '}
                <Link to="/cookie-policy" className="text-brand-600 font-bold underline hover:text-brand-700">
                  Cookie Policy
                </Link>{' '}
                and{' '}
                <Link to="/privacy-policy" className="text-brand-600 font-bold underline hover:text-brand-700">
                  Privacy Policy
                </Link>.
              </p>

              {/* Action Buttons */}
              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="px-5 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-heading font-extrabold text-xs shadow-sm hover:shadow transition-all"
                >
                  Accept All
                </button>
                <button
                  type="button"
                  onClick={handleEssentialOnly}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-heading font-bold text-xs transition-all"
                >
                  Essential Only
                </button>
                <button
                  type="button"
                  onClick={() => setShowCustomModal(true)}
                  className="px-3.5 py-2 text-xs font-bold text-slate-500 hover:text-brand-600 underline transition-colors"
                >
                  Customize
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CUSTOM PREFERENCES MODAL */}
      {showCustomModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-[540px] w-full shadow-2xl border border-slate-200 animate-scaleUp">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="font-heading font-black text-xl text-ink-900">
                Cookie Preferences
              </h3>
              <button
                type="button"
                onClick={() => setShowCustomModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              {/* Necessary */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-sm text-ink-900">Strictly Necessary</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2 py-0.5 rounded">Always Active</span>
                </div>
                <p className="mt-1 text-xs text-slate-600">
                  Required for authentication, security session management, and routing. These cannot be disabled.
                </p>
              </div>

              {/* Analytics */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-4">
                <div>
                  <span className="font-heading font-bold text-sm text-ink-900">Analytics &amp; Performance</span>
                  <p className="mt-1 text-xs text-slate-600">
                    Helps us understand learner interaction volume, error tracking, and page load speeds.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={analyticsCookies}
                  onChange={(e) => setAnalyticsCookies(e.target.checked)}
                  className="mt-1 w-5 h-5 accent-[#008196] cursor-pointer"
                />
              </div>

              {/* Functional */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-4">
                <div>
                  <span className="font-heading font-bold text-sm text-ink-900">Functional &amp; Experience</span>
                  <p className="mt-1 text-xs text-slate-600">
                    Enables interactive audio playback settings, simulation volume preferences, and dark/light mode toggles.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={functionalCookies}
                  onChange={(e) => setFunctionalCookies(e.target.checked)}
                  className="mt-1 w-5 h-5 accent-[#008196] cursor-pointer"
                />
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleEssentialOnly}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-heading font-bold text-xs"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-heading font-extrabold text-xs shadow-sm"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
