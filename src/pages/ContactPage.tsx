import React, { useState } from 'react';
import { HeroParticleCanvas } from '@/components/common/HeroParticleCanvas';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    title: '',
    phone: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-[calc(100vh-72px)] bg-white flex flex-col justify-center">
      {/* FULL-WIDTH IRIDESCENT HERO WITH CENTERED CONTENT */}
      <section className="a3-hero-iridescent relative overflow-hidden px-6 md:px-12 py-12 md:py-16 min-h-[calc(100vh-72px)] flex items-center">
        <HeroParticleCanvas canvasId="contact-hero-canvas" />

        {/* Ambient Glow Blobs */}
        <div className="a3-blob a3-blob--cyan top-[-100px] left-[-60px] w-[500px] h-[500px] opacity-35 animate-floatSlow" />
        <div className="a3-blob a3-blob--pink bottom-[-80px] right-[-60px] w-[450px] h-[450px] opacity-30 animate-floatRev" />
        <div className="a3-blob a3-blob--teal top-[30%] right-[20%] w-[380px] h-[380px] opacity-20" />

        {/* CENTERED CONTAINER */}
        <div className="relative z-10 max-w-[1320px] w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT COLUMN (6 COLS) */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/95 border border-brand-600/20 rounded-full shadow-sm w-fit">
                <span className="bg-gradient-to-r from-brand-600 to-brand-400 text-white text-[10px] font-black tracking-widest px-2.5 py-0.5 rounded-full font-heading uppercase">
                  BOOK A DEMO
                </span>
                <span className="text-xs font-semibold text-slate-600">
                  Custom walkthrough &amp; live AI scoring
                </span>
              </div>

              <h1 className="mt-4 font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-ink-900">
                Let's walk your team through <span className="a3-text-gradient">it.</span>
              </h1>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 max-w-[54ch]">
                Bring one deck or scenario from your world. We'll generate a module in every format and score a live rehearsal — then map a Build · Operate · Transfer plan to your cohort.
              </p>

              {/* Contact Info Items */}
              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-start gap-3.5 p-3.5 bg-white/80 backdrop-blur-sm border border-brand-600/15 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-600/20 flex items-center justify-center shrink-0 shadow-sm text-brand-600">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold tracking-wider uppercase text-brand-600">Leadership Team Contacts</div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs md:text-sm font-semibold">
                      <a href="mailto:nirmalya.sengupta@a3cend.com" className="text-ink-900 hover:text-brand-600 transition-colors">
                        nirmalya.sengupta@a3cend.com
                      </a>
                      <a href="mailto:patrick.ubezio@a3cend.com" className="text-ink-900 hover:text-brand-600 transition-colors">
                        patrick.ubezio@a3cend.com
                      </a>
                      <a href="mailto:deviprasad.singh@a3cend.com" className="text-ink-900 hover:text-brand-600 transition-colors">
                        deviprasad.singh@a3cend.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-3.5 bg-white/80 backdrop-blur-sm border border-brand-600/15 rounded-2xl shadow-sm">
                    <div className="w-9 h-9 rounded-xl bg-brand-50 border border-brand-600/20 flex items-center justify-center shrink-0 text-brand-600">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold tracking-wider uppercase text-brand-600">Head Office</div>
                      <div className="text-xs font-semibold text-ink-900 mt-0.5">
                        T-Hub, Hyderabad Knowledge City, Telangana 500081
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-white/80 backdrop-blur-sm border border-brand-600/15 rounded-2xl shadow-sm">
                    <div className="w-9 h-9 rounded-xl bg-brand-50 border border-brand-600/20 flex items-center justify-center shrink-0 text-brand-600">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold tracking-wider uppercase text-brand-600">Social</div>
                      <a
                        href="https://www.linkedin.com/company/a3cend/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold text-ink-900 hover:text-brand-600 transition-colors block mt-0.5"
                      >
                        LinkedIn Company Page →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next Checklist */}
              <div className="mt-6 p-5 bg-white/90 backdrop-blur-md border border-brand-600/20 rounded-2xl shadow-sm">
                <div className="text-xs font-bold tracking-wider uppercase text-brand-600 mb-3">
                  What happens next
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="flex gap-2.5 items-start">
                    <div className="w-5 h-5 rounded-md bg-brand-600 text-white font-archivo font-extrabold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </div>
                    <span className="text-xs text-slate-700 font-medium leading-snug">
                      We review request within 1 business day
                    </span>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <div className="w-5 h-5 rounded-md bg-brand-500 text-white font-archivo font-extrabold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </div>
                    <span className="text-xs text-slate-700 font-medium leading-snug">
                      We schedule a 45-minute discovery call
                    </span>
                  </div>
                  <div className="flex gap-2.5 items-start">
                    <div className="w-5 h-5 rounded-md bg-coral-500 text-white font-archivo font-extrabold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </div>
                    <span className="text-xs text-slate-700 font-medium leading-snug">
                      Live demo with your scenario &amp; rehearsal
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN (6 COLS - CENTERED GLASS CARD FORM) */}
            <div className="lg:col-span-6">
              <div className="a3-glass-card rounded-[32px] p-8 md:p-10 border border-brand-600/20 shadow-2xl bg-white/95 relative overflow-hidden">
                {submitted ? (
                  <div className="text-center py-12 px-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-brand-100 flex items-center justify-center text-4xl text-brand-600 shadow-md">
                      ✓
                    </div>
                    <h3 className="mt-6 text-2xl font-black text-ink-900">Thanks — we're on it.</h3>
                    <p className="mt-3 text-base text-slate-600">
                      We'll reach out within one business day to schedule your demo.
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-black text-ink-900">
                        Request your demo
                      </h2>
                      <p className="mt-1 text-sm text-slate-600">Takes 2 minutes. We'll do the rest.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-ink-900 block mb-1.5">
                            Full name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Jane Doe"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="a3field"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-ink-900 block mb-1.5">
                            Work email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="jane@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="a3field"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-ink-900 block mb-1.5">
                          Company *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Company Pvt Ltd"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="a3field"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-ink-900 block mb-1.5">
                            Job title
                          </label>
                          <input
                            type="text"
                            placeholder="Head of L&D"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="a3field"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-ink-900 block mb-1.5">
                            Phone (optional)
                          </label>
                          <input
                            type="tel"
                            placeholder="+91 ..."
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="a3field"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-ink-900 block mb-1.5">
                          Anything we should know?
                        </label>
                        <textarea
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="a3field min-h-[96px] resize-y"
                          placeholder="Your cohort, timeline, or the capability you're trying to build."
                        />
                      </div>

                      <button
                        type="submit"
                        className="a3-btn a3-btn-primary w-full py-4 text-base justify-center font-extrabold shadow-md hover:shadow-xl transition-all"
                      >
                        Request my demo →
                      </button>

                      <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                        By submitting you agree to be contacted about A3CEND. We never share your details.
                      </p>
                    </form>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
