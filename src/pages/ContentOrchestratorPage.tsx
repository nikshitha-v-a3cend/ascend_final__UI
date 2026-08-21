import React from 'react';
import { Link } from 'react-router-dom';
import { HeroParticleCanvas } from '@/components/common/HeroParticleCanvas';
import { BottomCtaBanner } from '@/components/common/BottomCtaBanner';
import { ORCHESTRATOR_STAGES } from '@/data/orchestratorData';
import { FormatSelectorWidget } from '@/components/interactive/FormatSelectorWidget';

import logoImg from '@/assets/a3cend-logo-crop.png';
import { ContentOrchestratorHeroGraphic } from '@/components/common/OrchestratorFormatGraphics';

export const ContentOrchestratorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="a3-hero-iridescent relative overflow-hidden px-6 md:px-12 pt-8 md:pt-10 pb-12">
        <HeroParticleCanvas canvasId="co-canvas" />

        <div className="a3-blob a3-blob--cyan top-[-130px] left-[-90px] w-[480px] h-[480px] opacity-45 animate-floatSlow" />
        <div className="a3-blob a3-blob--cyan bottom-[-120px] right-[-90px] w-[420px] h-[420px] opacity-25 animate-floatRev" />

        <div className="relative z-10 max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div>
            <div className="a3-eyebrow text-brand-600">Content Orchestrator · for the super-user</div>
            <h1 className="mt-3 font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.14] tracking-tight text-ink-900">
              Ingest once.<br />
              <span className="a3-text-gradient">Generate every format.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed max-w-[52ch] text-slate-600">
              A small team of super-users ingests your source material once and generates every learning format from the same knowledge base — on your brand. The content capability you own after Transfer.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/try/live-presenter" className="px-7 py-3.5 text-sm font-bold text-black bg-white border border-[#008196] hover:bg-[#ff4081] hover:text-white hover:border-[#ff4081] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                Try the content engine free →
              </Link>
              <Link to="/contact" className="px-7 py-3.5 text-sm font-bold text-black bg-white border border-[#008196] hover:bg-[#008196] hover:text-white hover:border-[#008196] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                Book a demo
              </Link>
            </div>

            {/* Capability Pills */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="px-3.5 py-1.5 bg-white/85 border border-coral-500/20 rounded-full text-xs font-semibold text-coral-500 shadow-sm">
                Live Presenter
              </span>
              <span className="px-3.5 py-1.5 bg-white/85 border border-brand-600/18 rounded-full text-xs font-semibold text-brand-600 shadow-sm">
                e-Learning
              </span>
              <span className="px-3.5 py-1.5 bg-white/85 border border-coral-500/20 rounded-full text-xs font-semibold text-coral-500 shadow-sm">
                Micro-Videos
              </span>
              <span className="px-3.5 py-1.5 bg-white/85 border border-brand-600/20 rounded-full text-xs font-semibold text-brand-600 shadow-sm">
                Flash Cards
              </span>
              <span className="px-3.5 py-1.5 bg-white/85 border border-coral-500/20 rounded-full text-xs font-semibold text-coral-500 shadow-sm">
                Assessments
              </span>
            </div>
          </div>

          {/* Hero Visual Image */}
          <div className="relative">
            <ContentOrchestratorHeroGraphic />
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-3 max-w-[calc(100%-1rem)] bg-white/96 backdrop-blur-md border border-brand-600/28 p-2.5 sm:p-4 rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3 animate-floatSm">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r from-brand-600 to-brand-400 flex items-center justify-center font-heading font-black text-xs sm:text-sm text-white shrink-0">
                5+
              </div>
              <div className="min-w-0">
                <div className="font-heading font-extrabold text-[11px] sm:text-xs text-ink-900 whitespace-nowrap">Output Formats</div>
                <div className="text-[9px] sm:text-[11px] text-slate-500 whitespace-nowrap">One source, every format</div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-white/92 backdrop-blur-md border border-brand-600/22 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl flex items-center gap-1.5 sm:gap-2 shadow-lg animate-floatSm">
              <div className="a3-live-dot shrink-0" />
              <span className="font-archivo font-bold text-[10px] sm:text-xs text-brand-600 whitespace-nowrap">AI Engine Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED SOLUTIONS SECTION */}
      <section className="bg-gradient-to-b from-[#eaf6f8] via-[#f2fafc] to-[#eaf6f8] py-16 px-6 md:px-12 border-b border-[#008196]/15">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-[64ch] mx-auto mb-12">
            <div className="a3-eyebrow text-brand-600">ENTERPRISE USE CASES</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-ink-900 leading-tight">
              Built for rapid enterprise rollout
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Transform slow static documentation into living, multi-format learning experiences in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Onboarding & Induction Solution */}
            <div id="onboarding" className="a3-glass-card rounded-[28px] p-8 border-t-4 border-brand-600 bg-white shadow-lg flex flex-col justify-between scroll-mt-24">
              <div>
                <span className="a3-tag a3-tag--teal">ONBOARDING</span>
                <h3 className="mt-4 text-2xl font-black text-ink-900">Onboarding &amp; Induction</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Slash time-to-productivity for new hires. Ingest company culture decks, product handbooks, and operational SOPs to generate interactive micro-modules, video walkthroughs, and milestone assessments.
                </p>
                <div className="mt-6 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-ink-900">
                    <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-xs">✓</span>
                    34% faster new-hire ramp-up time
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-ink-900">
                    <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-xs">✓</span>
                    Automated flash card reinforcement
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-ink-900">
                    <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-xs">✓</span>
                    30-60-90 day diagnostic checks
                  </div>
                </div>
              </div>
              <Link to="/try/live-presenter" className="mt-8 a3-btn a3-btn-teal w-full text-center font-bold text-sm py-3">
                Try the content engine free →
              </Link>
            </div>

            {/* Compliance & Policy Rollout Solution */}
            <div id="compliance" className="a3-glass-card rounded-[28px] p-8 border-t-4 border-coral-500 bg-white shadow-lg flex flex-col justify-between scroll-mt-24">
              <div>
                <span className="a3-tag a3-tag--coral">COMPLIANCE</span>
                <h3 className="mt-4 text-2xl font-black text-ink-900">Compliance &amp; Policy Rollout</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  When regulations or internal policies update, turn 100-page policy manuals into byte-sized video summaries and mandatory comprehension checks instantly.
                </p>
                <div className="mt-6 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-ink-900">
                    <span className="w-5 h-5 rounded-full bg-coral-50 text-coral-500 flex items-center justify-center font-bold text-xs">✓</span>
                    Instant policy re-generation upon document updates
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-ink-900">
                    <span className="w-5 h-5 rounded-full bg-coral-50 text-coral-500 flex items-center justify-center font-bold text-xs">✓</span>
                    Auditable readiness tracking per department
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-ink-900">
                    <span className="w-5 h-5 rounded-full bg-coral-50 text-coral-500 flex items-center justify-center font-bold text-xs">✓</span>
                    Brand-governed templates &amp; tone control
                  </div>
                </div>
              </div>
              <Link to="/try/live-presenter" className="mt-8 a3-btn a3-btn-coral w-full text-center font-bold text-sm py-3">
                Try the content engine free →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 STAGE PROCESS & CALLOUTS */}
      <section id="formats" className="bg-gradient-to-b from-[#fff0f4] via-[#faf3f6] to-[#fff0f4] py-20 px-6 md:px-12 relative border-b border-[#ff4081]/15">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center mb-12">
            <div className="a3-eyebrow text-coral-500">How it works</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-ink-900">
              Three stages, one knowledge base.
            </h2>
          </div>

          {/* 3 Stage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ORCHESTRATOR_STAGES.map((s, idx) => {
              const icons = [
                // Ingest Icon
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" key="ingest">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5A3.375 3.375 0 0 0 10.125 2.25H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>,
                // Generate Icon
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" key="generate">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>,
                // Compose Icon
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" key="compose">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>,
              ];

              return (
                <div key={s.n} className="a3-glass-card relative rounded-[28px] overflow-hidden bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="h-1.5" style={{ background: s.headerBg }} />
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                        style={{ background: s.headerBg }}
                      >
                        {icons[idx]}
                      </div>
                      <span className="font-mono text-xs font-bold tracking-widest text-slate-400 uppercase">
                        Stage 0{s.n}
                      </span>
                    </div>

                    <div className="font-mono text-xs font-extrabold tracking-widest text-brand-600 uppercase mb-2">
                      {s.title}
                    </div>
                    <h3 className="text-xl font-extrabold text-ink-900 leading-snug">{s.headline}</h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{s.body}</p>

                    <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                      {s.tags.map((t) => (
                        <span key={t} className="a3-lib-pill text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 2 Callout Cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="a3-glass-card p-8 rounded-3xl" style={{ border: '2px solid var(--brand-600)' }}>
              <h4 className="text-xl font-extrabold text-ink-900">One source of truth</h4>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                Every format stays linked to its source. Update a policy or SOP once and the engine regenerates every affected module — no manual rework.
              </p>
            </div>

            <div className="a3-glass-card p-8 rounded-3xl" style={{ border: '2px solid var(--brand-600)' }}>
              <h4 className="text-xl font-extrabold text-ink-900">You own it</h4>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                A small team of super-user seats runs the whole engine in-house. No dependency on A3CEND to publish or update once Transfer is complete.
              </p>
            </div>
          </div>

          {/* Interactive Format Selector Widget */}
          <div className="mt-14">
            <div className="font-archivo text-xs font-bold tracking-widest uppercase text-brand-600">
              Same source → many formats
            </div>
            <FormatSelectorWidget />
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <BottomCtaBanner
        eyebrow="CONTENT ORCHESTRATOR"
        heading="Turn your existing content into a living catalogue."
        subheading="Bring one deck or SOP — we'll generate a module in every format, on your brand, in the demo."
        primaryCtaText="Book a demo →"
        primaryCtaLink="/contact"
        secondaryCtaText="Try Live Presenter"
        secondaryCtaLink="/try/live-presenter"
      />
    </div>
  );
};
