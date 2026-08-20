import React, { useState } from 'react';

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
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] min-h-inherit">
          {/* LEFT COLUMN */}
          <div className="relative bg-gradient-to-br from-[#eef9fb] via-[#f5efff] to-[#fff4f7] text-ink-900 p-8 md:p-14 lg:p-16 flex flex-col justify-center border-r border-brand-600/10 overflow-hidden">
            <div className="a3-blob a3-blob--cyan top-[-120px] right-[-60px] w-[380px] h-[380px] opacity-35" />
            <div className="a3-blob a3-blob--pink bottom-[-100px] left-[-40px] w-[320px] h-[320px] opacity-25" />

            <div className="relative z-10">
              <div className="a3-eyebrow text-brand-600">Book a demo</div>
              <h1 className="mt-3.5 font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.06] tracking-tight text-ink-900">
                Let's walk your team through <span className="a3-text-gradient">it.</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
                Bring one deck or scenario from your world. We'll generate a module in every format and score a live rehearsal — then map a Build · Operate · Transfer plan to your cohort.
              </p>

              {/* Contact Info Items */}
              <div className="mt-10 flex flex-col gap-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/90 border border-brand-600/20 flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-4 h-4 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-wider uppercase text-brand-600">Leadership Team Contacts</div>
                    <div className="flex flex-col gap-1 mt-1 text-sm font-semibold">
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

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/90 border border-brand-600/20 flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-4 h-4 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-wider uppercase text-brand-600">Head Office</div>
                    <div className="text-sm font-semibold text-ink-900">
                      T-Hub, Hyderabad Knowledge City, Telangana 500081
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/90 border border-brand-600/20 flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-4 h-4 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-wider uppercase text-brand-600">Online</div>
                    <a
                      href="https://www.linkedin.com/company/a3cend/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-ink-900 hover:text-brand-600 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="mt-10 p-6 bg-white/85 backdrop-blur-md border border-brand-600/18 rounded-2xl shadow-sm">
                <div className="text-xs font-bold tracking-wider uppercase text-brand-600 mb-4">
                  What happens next
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-lg bg-brand-600 text-white font-archivo font-extrabold text-xs flex items-center justify-center shrink-0">
                      1
                    </div>
                    <span className="text-sm text-slate-700 leading-normal">
                      We review your request within 1 business day
                    </span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-lg bg-brand-500 text-white font-archivo font-extrabold text-xs flex items-center justify-center shrink-0">
                      2
                    </div>
                    <span className="text-sm text-slate-700 leading-normal">
                      We schedule a 45-minute discovery call
                    </span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-lg bg-coral-500 text-white font-archivo font-extrabold text-xs flex items-center justify-center shrink-0">
                      3
                    </div>
                    <span className="text-sm text-slate-700 leading-normal">
                      Live demo with your scenario &amp; live rehearsal scored
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM COLUMN */}
          <div className="p-8 md:p-14 lg:p-16 flex flex-col justify-center bg-white">
            <div className="max-w-[520px] w-full mx-auto">
              {submitted ? (
                <div className="text-center py-12 px-6">
                  <div className="w-18 h-18 mx-auto rounded-full bg-brand-100 flex items-center justify-center text-3xl text-brand-600 shadow-md">
                    ✓
                  </div>
                  <h3 className="mt-6 text-2xl font-black text-ink-900">Thanks — we're on it.</h3>
                  <p className="mt-3 text-base text-slate-600">
                    We'll reach out within one business day to schedule your demo.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="mb-7">
                    <h2 className="text-2xl md:text-3xl font-black text-ink-900">
                      Request your demo
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">Takes 2 minutes. We'll do the rest.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
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
                        className="a3field min-h-[108px] resize-y"
                        placeholder="Your cohort, timeline, or the capability you're trying to build."
                      />
                    </div>

                    <button
                      type="submit"
                      className="a3-btn a3-btn-primary w-full py-4 text-base justify-center font-extrabold"
                    >
                      Request my demo →
                    </button>

                    <p className="text-xs text-slate-400 text-center leading-relaxed">
                      By submitting you agree to be contacted about A3CEND. We never share your details.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
