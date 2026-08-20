import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '@/assets/a3cend-logo-crop.png';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile panel on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Platform — Content Orchestrator', path: '/content-orchestrator' },
    { label: 'Platform — REHEARSE', path: '/rehearse' },
    { label: 'Platform — framework & analytics', path: '/framework' },
    { label: 'Solution — Manager & Leadership', path: '/solutions/leadership' },
    { label: 'Solution — Sales & Conversations', path: '/solutions/sales' },
    { label: 'Solution — Onboarding & Induction', path: '/solutions/onboarding' },
    { label: 'Solution — Compliance & Policy', path: '/solutions/compliance' },
    { label: 'About', path: '/about' },
  ];

  return (
    <header
      className={`a3-header sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled || mobileOpen
          ? 'shadow-md border-b border-brand-100/80'
          : 'border-b border-[#e3f5f8]/80'
        }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between gap-6">
        <Link to="/" className="a3-focusable flex items-center gap-2.5">
          <img src={logoImg} alt="A3CEND" className="h-7 w-auto block" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="a3-nav-desktop hidden md:flex items-center gap-7">
          {/* Platform Dropdown */}
          <div className="a3drop">
            <Link
              to="/content-orchestrator"
              className={`a3navlink a3-focusable text-sm font-semibold ${
                location.pathname.includes('/content-orchestrator') || location.pathname.includes('/rehearse') || location.pathname.includes('/framework')
                  ? 'text-brand-600 font-bold'
                  : 'text-slate-700'
              }`}
            >
              Platform
            </Link>
            <div className="a3menu">
              <Link to="/content-orchestrator" className="a3menu-item group">
                <div className="font-extrabold text-sm text-ink-900 group-hover:text-brand-600 flex items-center justify-between">
                  Content Orchestrator
                  <span className="text-xs text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Build multi-format learning from any source</div>
              </Link>
              <Link to="/rehearse" className="a3menu-item group">
                <div className="font-extrabold text-sm text-ink-900 group-hover:text-brand-600 flex items-center justify-between">
                  REHEARSE
                  <span className="text-xs text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">AI roleplay &amp; practice simulations</div>
              </Link>
              <Link to="/framework#assess" className="a3menu-item group">
                <div className="font-extrabold text-sm text-ink-900 group-hover:text-brand-600 flex items-center justify-between">
                  Skill Framework
                  <span className="text-xs text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Skill framework — set the bar</div>
              </Link>
              <Link to="/framework#measure" className="a3menu-item group">
                <div className="font-extrabold text-sm text-ink-900 group-hover:text-brand-600 flex items-center justify-between">
                  Analytics &amp; Readiness
                  <span className="text-xs text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Analytics — prove readiness</div>
              </Link>
            </div>
          </div>

          {/* Solutions Dropdown */}
          <div className="a3drop">
            <Link
              to="/solutions/leadership"
              className={`a3navlink a3-focusable text-sm font-semibold ${
                location.pathname.startsWith('/solutions') ? 'text-brand-600 font-bold' : 'text-slate-700'
              }`}
            >
              Solutions
            </Link>
            <div className="a3menu">
              <Link to="/solutions/leadership" className="a3menu-item group">
                <div className="font-extrabold text-sm text-ink-900 group-hover:text-brand-600 flex items-center justify-between">
                  Manager &amp; Leadership Development
                  <span className="text-xs text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">High-stakes leadership conversation readiness</div>
              </Link>
              <Link to="/solutions/sales" className="a3menu-item group">
                <div className="font-extrabold text-sm text-ink-900 group-hover:text-brand-600 flex items-center justify-between">
                  Sales &amp; Customer Conversations
                  <span className="text-xs text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Objection handling &amp; commercial detailing</div>
              </Link>
              <Link to="/solutions/onboarding" className="a3menu-item group">
                <div className="font-extrabold text-sm text-ink-900 group-hover:text-brand-600 flex items-center justify-between">
                  Onboarding &amp; Induction
                  <span className="text-xs text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Slash time-to-productivity for new hires</div>
              </Link>
              <Link to="/solutions/compliance" className="a3menu-item group">
                <div className="font-extrabold text-sm text-ink-900 group-hover:text-brand-600 flex items-center justify-between">
                  Compliance &amp; Policy Rollout
                  <span className="text-xs text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Turn policy manuals into active practice</div>
              </Link>
            </div>
          </div>

          <Link
            to="/about"
            className={`a3navlink a3-focusable text-sm font-semibold ${location.pathname === '/about' ? 'text-brand-600 font-bold' : 'text-a3-slate-700'
              }`}
          >
            About
          </Link>

          {/* Direct Links */}
          <Link
            to="/try-it"
            className="a3navlink a3-focusable text-sm font-bold text-coral-500 hover:text-coral-700"
          >
            Try it free
          </Link>
          <Link
            to="/contact"
            className="a3-btn a3-btn-primary a3-focusable text-sm px-5 py-2.5"
          >
            Book a demo
          </Link>
        </nav>

        {/* Mobile Nav Toggle Icon */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-white text-ink-900 shadow-sm focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? (
            <svg className="w-5 h-5 text-ink-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-ink-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Panel */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col gap-1.5 px-6 pt-3 pb-6 bg-white border-t border-brand-100 shadow-2xl animate-fadeUp">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`p-3.5 text-sm rounded-2xl transition-all ${isActive
                    ? 'bg-brand-100/80 text-brand-600 font-bold border border-brand-400/20'
                    : 'text-slate-700 font-semibold hover:bg-slate-50'
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/try-it"
            className="p-3.5 text-sm font-extrabold text-coral-500 hover:bg-coral-50 rounded-2xl"
          >
            Try it free
          </Link>
          <Link
            to="/contact"
            className="p-3.5 text-sm font-extrabold text-brand-600 hover:bg-brand-100 rounded-2xl"
          >
            Book a demo
          </Link>
        </div>
      )}
    </header>
  );
};
