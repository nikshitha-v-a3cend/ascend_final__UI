import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '@/assets/a3cend-logo-crop.png';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-white text-ink-900 pt-16 pb-8 px-6 md:px-12 font-sans overflow-hidden border-t border-brand-600/10">
      {/* Top Accent Gradient Bar */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-600 via-brand-400 to-coral-500" />

      <div className="relative max-w-[1320px] mx-auto">
        {/* TOP: Brand + Newsletter Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          {/* Brand Column */}
          <div>
            <Link to="/" className="a3-focusable inline-flex items-center gap-2.5">
              <img src={logoImg} alt="A3CEND" className="h-8 w-auto block" />
            </Link>

            <p className="mt-4 text-[15px] leading-relaxed text-slate-700 max-w-[42ch] font-medium">
              Human-Led, Tech-Enabled capability building. Unlocking human potential through the convergence of content, technology and expertise.
            </p>

            {/* Pill Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="a3-tag a3-tag--teal">AI-Powered</span>
              <span className="a3-tag a3-tag--coral">Human-Led</span>
              <span className="a3-tag a3-tag--teal">Skill-Focused</span>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex gap-2.5">
              <a
                href="https://www.linkedin.com/company/a3cend/"
                target="_blank"
                rel="noreferrer"
                className="a3-footer-social a3-focusable flex items-center justify-center w-10 h-10 rounded-xl bg-brand-600/10 border border-brand-600/20 text-brand-600 hover:bg-brand-600 hover:text-white transition-all font-bold text-xs"
                aria-label="LinkedIn"
              >
                In
              </a>
              <a
                href="mailto:nirmalya.sengupta@a3cend.com"
                className="a3-footer-social a3-focusable flex items-center justify-center w-10 h-10 rounded-xl bg-brand-600/10 border border-brand-600/20 text-brand-600 hover:bg-brand-600 hover:text-white transition-all font-bold text-xs"
                aria-label="Email"
              >
                ✉
              </a>
            </div>
          </div>

          {/* Newsletter Box (Right Side Floating White Card - Matching Target Image) */}
          <div className="bg-white border border-brand-100 rounded-3xl p-8 shadow-xl">
            <div className="font-heading font-black text-xl text-ink-900">
              Stay ahead in capability building
            </div>
            <p className="mt-2 text-sm text-slate-600 font-medium leading-relaxed">
              Get insights, frameworks and case studies from the A3CEND team monthly, no noise.
            </p>
            {subscribed ? (
              <div className="mt-5 p-4 bg-brand-100/80 rounded-2xl text-brand-600 font-bold text-sm">
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-5 flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your work email"
                  className="a3-footer-newsletter-input"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-brand-600 to-brand-400 text-white font-bold text-sm rounded-full shadow-md hover:brightness-105 transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
            <div className="mt-3 text-xs text-slate-500 font-medium">No spam. Unsubscribe anytime.</div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-brand-600/20 to-transparent" />

        {/* LINK COLUMNS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="font-archivo text-xs font-extrabold tracking-widest uppercase text-brand-600 mb-4">
              Platform
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/rehearse" className="a3-footer-link text-sm font-semibold text-slate-700 hover:text-brand-600">
                REHEARSE
              </Link>
              <Link to="/content-orchestrator" className="a3-footer-link text-sm font-semibold text-slate-700 hover:text-brand-600">
                Content Orchestrator
              </Link>
              <Link to="/framework" className="a3-footer-link text-sm font-semibold text-slate-700 hover:text-brand-600">
                Skill Framework
              </Link>
            </div>
          </div>

          <div>
            <div className="font-archivo text-xs font-extrabold tracking-widest uppercase text-brand-600 mb-4">
              Events
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/powertalks" className="a3-footer-link text-sm font-semibold text-slate-700 hover:text-brand-600">
                PowerTalks
              </Link>
            </div>
          </div>

          <div>
            <div className="font-archivo text-xs font-extrabold tracking-widest uppercase text-brand-600 mb-4">
              Company
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/about#approach" className="a3-footer-link text-sm font-semibold text-slate-700 hover:text-brand-600">
                Approach
              </Link>
              <Link to="/about" className="a3-footer-link text-sm font-semibold text-slate-700 hover:text-brand-600">
                About
              </Link>
              <Link to="/contact" className="a3-footer-link text-sm font-semibold text-slate-700 hover:text-brand-600">
                Book a demo
              </Link>
            </div>
          </div>

          <div>
            <div className="font-archivo text-xs font-extrabold tracking-widest uppercase text-brand-600 mb-4">
              Access
            </div>
            <div className="flex flex-col gap-3">
              <a href="https://www.linkedin.com/company/a3cend/" target="_blank" rel="noreferrer" className="a3-footer-link text-sm font-semibold text-slate-700 hover:text-brand-600">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-5 border-t border-brand-600/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500 font-medium">
          <span>© 2026 Ascend Business Solutions Pvt. Ltd. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            📍 T-Hub, Hyderabad Knowledge City, Telangana 500081
          </span>
        </div>
      </div>
    </footer>
  );
};
