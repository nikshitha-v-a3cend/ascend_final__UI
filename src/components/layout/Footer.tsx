import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '@/assets/a3cend-logo-crop.png';

interface FooterLink {
  to: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
}

interface FooterSection {
  key: string;
  label: string;
  links: FooterLink[];
}

const FOOTER_SECTIONS: FooterSection[] = [
  {
    key: 'platform',
    label: 'Platform',
    links: [
      {
        to: '/rehearse',
        label: 'REHEARSE',
        icon: (
          <>
            <rect x="3" y="4" width="18" height="13" rx="2" />
            <circle cx="12" cy="9.5" r="2" />
            <path d="M8.5 14c1-1.8 6-1.8 7 0" />
          </>
        ),
      },
      {
        to: '/content-orchestrator',
        label: 'Content Orchestrator',
        icon: (
          <>
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </>
        ),
      },
      {
        to: '/framework',
        label: 'Skill Framework',
        icon: (
          <>
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1" />
          </>
        ),
      },
    ],
  },
  {
    key: 'events',
    label: 'Events',
    links: [
      {
        to: '/powertalks',
        label: 'PowerTalks',
        icon: (
          <>
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M3 9.5h18" />
            <path d="M8 3v4M16 3v4" />
          </>
        ),
      },
    ],
  },
  {
    key: 'company',
    label: 'Company',
    links: [
      {
        to: '/about',
        label: 'About',
        icon: (
          <>
            <rect x="4" y="3" width="16" height="18" rx="1" />
            <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
          </>
        ),
      },
      {
        to: '/contact',
        label: 'Book a demo',
        icon: (
          <>
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M3 9.5h18" />
            <path d="M8 3v4M16 3v4" />
            <path d="M8.5 14.5l2 2 4-4" />
          </>
        ),
      },
    ],
  },
  {
    key: 'access',
    label: 'Access',
    links: [
      {
        to: 'https://www.linkedin.com/company/a3cend/',
        external: true,
        label: 'LinkedIn',
        icon: (
          <>
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M7.5 10v6.5M7.5 7.2v.1" />
            <path d="M11.5 16.5V10M11.5 12.7c0-1.5 1-2.7 2.5-2.7s2.5 1.2 2.5 2.7v3.8" />
          </>
        ),
      },
    ],
  },
];

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    platform: true,
    events: true,
    company: true,
    access: true,
  });

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-white text-ink-900 font-sans overflow-hidden border-t border-brand-600/10">
      {/* Newsletter Banner */}
      <div className="relative bg-gradient-to-br from-[#003c46] via-[#00505e] to-[#006070] px-6 md:px-12 py-12 md:py-14 overflow-hidden">
        <div className="a3-blob a3-blob--cyan top-[-100px] right-[-60px] w-[320px] h-[320px] opacity-25 pointer-events-none" />
        <div className="relative max-w-[1320px] mx-auto">
          <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </div>
          <div className="mt-4 font-heading font-black text-2xl md:text-3xl text-white">
            Stay updated with A3CEND
          </div>
          <p className="mt-2 text-sm md:text-base text-white/75 font-medium leading-relaxed max-w-[52ch]">
            Get the latest insights, product updates and event invites straight to your inbox.
          </p>

          {subscribed ? (
            <div className="mt-6 max-w-[520px] p-4 bg-white/15 border border-white/25 rounded-2xl text-white font-bold text-sm">
              ✓ Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-6 max-w-[520px] flex items-center gap-1 sm:gap-2.5 p-1.5 bg-white rounded-full shadow-xl">
              <svg className="w-4 h-4 text-slate-400 shrink-0 ml-2.5 hidden sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your work email"
                className="flex-1 min-w-0 bg-transparent px-3 sm:px-1 py-2.5 text-sm text-ink-900 placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 sm:px-6 py-2.5 bg-gradient-to-r from-brand-600 to-brand-400 text-white font-bold text-sm rounded-full shadow-md hover:brightness-105 transition-all whitespace-nowrap shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
          <div className="mt-3 text-xs text-white/60 font-medium">No spam. Unsubscribe anytime.</div>
        </div>
      </div>

      <div className="relative max-w-[1320px] mx-auto px-6 md:px-12 pt-10 pb-8">
        {/* LINK SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8">
          {FOOTER_SECTIONS.map((section, idx) => {
            const isOpen = openSections[section.key];
            return (
              <div
                key={section.key}
                className={`py-5 md:py-0 border-b border-slate-100 md:border-b-0 ${idx === 0 ? 'border-t md:border-t-0' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => toggleSection(section.key)}
                  className="w-full flex items-center justify-between gap-3 md:pointer-events-none md:mb-4"
                >
                  <span className="font-archivo text-xs font-extrabold tracking-widest uppercase text-brand-600">
                    {section.label}
                  </span>
                  <svg
                    className={`w-4 h-4 text-brand-600 md:hidden transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 md:max-h-none md:overflow-visible ${
                    isOpen ? 'max-h-96 mt-3 md:mt-0' : 'max-h-0'
                  }`}
                >
                  <div className="flex flex-col gap-3.5 pb-1">
                    {section.links.map((link) => {
                      const content = (
                        <>
                          <svg className="w-4 h-4 text-slate-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                            {link.icon}
                          </svg>
                          <span className="text-sm font-semibold text-slate-700 group-hover:text-brand-600">
                            {link.label}
                          </span>
                        </>
                      );
                      return link.external ? (
                        <a
                          key={link.label}
                          href={link.to}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex items-center gap-3 a3-focusable"
                        >
                          {content}
                        </a>
                      ) : (
                        <Link key={link.label} to={link.to} className="group flex items-center gap-3 a3-focusable">
                          {content}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-brand-600/20 to-transparent" />

        {/* Social Icons */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="https://www.linkedin.com/company/a3cend/"
            target="_blank"
            rel="noreferrer"
            className="a3-focusable flex items-center justify-center w-10 h-10 rounded-full bg-brand-600 text-white hover:brightness-110 transition-all"
            aria-label="LinkedIn"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <path d="M7.5 10v6.5M7.5 7.2v.1" />
              <path d="M11.5 16.5V10M11.5 12.7c0-1.5 1-2.7 2.5-2.7s2.5 1.2 2.5 2.7v3.8" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@a3cend"
            target="_blank"
            rel="noreferrer"
            className="a3-focusable flex items-center justify-center w-10 h-10 rounded-full bg-brand-600 text-white hover:brightness-110 transition-all"
            aria-label="YouTube"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2.5" y="6" width="19" height="12" rx="3" />
              <path d="M10.5 9.5v5l4.5-2.5z" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="mailto:nirmalya.sengupta@a3cend.com"
            className="a3-focusable flex items-center justify-center w-10 h-10 rounded-full bg-brand-600 text-white hover:brightness-110 transition-all"
            aria-label="Email"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-brand-600/10 flex flex-col items-center gap-3 text-center text-xs text-slate-500 font-medium">
          <span className="flex items-start gap-1.5 justify-center">
            <span className="text-coral-500 shrink-0">📍</span>
            T-Hub, Hyderabad Knowledge City, Telangana 500081, India
          </span>
          <span>© 2026 Ascend Business Solutions Pvt. Ltd. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
