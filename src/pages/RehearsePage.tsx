import React from 'react';
import { Link } from 'react-router-dom';
import { HeroParticleCanvas } from '@/components/common/HeroParticleCanvas';
import { BottomCtaBanner } from '@/components/common/BottomCtaBanner';

import logoImg from '@/assets/a3cend-logo-crop.png';
import rehearseImg from '@/assets/img-rehearse.png';
import { RehearseLiveSimGraphic } from '@/components/common/RehearseLiveSimGraphic';

export const RehearsePage: React.FC = () => {
  const scenarios = [
    'Performance & rating pushback',
    'Cross-functional resource conflicts',
    'HCP & doctor objections in pharma sales',
    'De-escalation under extreme pressure',
    'Executive stakeholder presentation prep',
    'Calendar meeting prep with AI multi-participants',
  ];

  const meters = [
    { label: 'Empathy & Rapport', value: '78%', width: '78%', color: 'var(--brand-400)' },
    { label: 'Assertiveness & Boundaries', value: '85%', width: '85%', color: 'var(--coral-500)' },
    { label: 'Accountability & Clarity', value: '92%', width: '92%', color: 'var(--brand-400)' },
    { label: 'De-escalation Signal', value: '80%', width: '80%', color: 'var(--coral-500)' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="a3-hero-iridescent relative overflow-hidden px-6 md:px-12 pt-8 md:pt-10 pb-12">
        <HeroParticleCanvas canvasId="rh-canvas" />

        <div className="a3-blob a3-blob--cyan top-[-120px] left-[-70px] w-[480px] h-[480px] opacity-40 animate-floatSlow" />
        <div className="a3-blob a3-blob--pink bottom-[-130px] right-[-70px] w-[420px] h-[420px] opacity-30 animate-floatRev" />

        <div className="relative z-10 max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-2">
          <div>
            <div className="font-archivo text-xs font-bold tracking-widest uppercase text-brand-600">
              REHEARSE · AI PRACTICE SIMULATION
            </div>
            <h1 className="mt-3.5 font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.14] tracking-tight text-ink-900">
              Practise the hardest<br />
              <span className="a3-text-gradient">conversations, safely.</span>
            </h1>
            <p className="mt-5 text-base sm:text-xl leading-relaxed max-w-[52ch] text-slate-600">
              AI conversation simulations with persona-based scenarios (100+ scenarios across 200 dimensions) scored on voice and facial-expression signals so people rehearse the moment before it is real.
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link to="/try/simulation" className="px-7 py-3.5 text-sm font-bold text-black bg-white border border-[#008196] hover:bg-[#ff4081] hover:text-white hover:border-[#ff4081] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                Try a simulation free →
              </Link>
              <Link to="/contact" className="px-7 py-3.5 text-sm font-bold text-black bg-white border border-[#008196] hover:bg-[#008196] hover:text-white hover:border-[#008196] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                Book a demo
              </Link>
            </div>

            {/* Stat Pills */}
            <div className="mt-9 flex flex-wrap gap-2.5">
              <span className="px-4 py-2 bg-white/85 border border-brand-600/18 rounded-full text-xs font-semibold text-brand-600 shadow-sm">
                100+ Scenarios
              </span>
              <span className="px-4 py-2 bg-white/85 border border-coral-500/20 rounded-full text-xs font-semibold text-coral-500 shadow-sm">
                200 Dimensions
              </span>
              <span className="px-4 py-2 bg-white/85 border border-brand-600/20 rounded-full text-xs font-semibold text-brand-600 shadow-sm">
                Voice &amp; Video
              </span>
            </div>
          </div>

          {/* Hero Visual Image */}
          <div className="relative">
            <div className="rounded-3xl p-3 bg-white/80 backdrop-blur-xl border border-white shadow-2xl">
              <img src={rehearseImg} alt="REHEARSE AI Simulation" className="w-full h-auto block rounded-2xl" />
            </div>

            {/* Score Badge (desktop only — the image's own corners are too busy at mobile size) */}
            <div className="hidden sm:flex absolute -bottom-4 -left-3 bg-white/96 backdrop-blur-md border border-brand-600/28 p-4 rounded-2xl shadow-xl items-center gap-3 animate-floatSm">
              <div className="w-10 h-10 rounded-full bg-[conic-gradient(#008196_92%,rgba(4,170,196,0.15)_0)] flex items-center justify-center shrink-0">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-heading font-black text-xs text-brand-600">
                  92%
                </div>
              </div>
              <div className="min-w-0">
                <div className="font-heading font-extrabold text-xs text-ink-900 whitespace-nowrap">Readiness Score</div>
                <div className="text-[11px] text-slate-500 whitespace-nowrap">AI scored in real-time</div>
              </div>
            </div>

            {/* Live Indicator (desktop only) */}
            <div className="hidden sm:flex absolute -top-3 -right-3 bg-white/92 backdrop-blur-md border border-brand-600/22 px-4 py-2.5 rounded-2xl items-center gap-2 shadow-lg animate-floatSm">
              <div className="a3-live-dot shrink-0" />
              <span className="font-archivo font-bold text-xs text-brand-600 whitespace-nowrap">AI Avatar Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED SOLUTIONS SECTION */}
      <section className="bg-gradient-to-b from-[#eaf6f8] via-[#f2fafc] to-[#eaf6f8] py-16 px-6 md:px-12 border-b border-[#008196]/15">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-[64ch] mx-auto mb-12">
            <div className="a3-eyebrow text-coral-500">TAILORED SOLUTIONS</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-ink-900 leading-tight">
              Role-specific practice environments
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Tailored scenarios built for high-stakes leadership alignment and high-velocity commercial execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Leadership Development Solution */}
            <div id="leadership" className="a3-glass-card rounded-[28px] p-8 border-t-4 border-brand-600 bg-white shadow-lg flex flex-col justify-between scroll-mt-24">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-archivo text-xs font-bold tracking-widest uppercase text-brand-600">SOLUTION 01</span>
                  <span className="a3-tag a3-tag--teal">LEADERSHIP</span>
                </div>
                <h3 className="mt-4 text-2xl font-black text-ink-900">Manager &amp; Leadership Development</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Prepare managers for high-friction conversations before they meet real employees. Rehearse performance rating pushbacks, cross-functional conflicts, and team accountability turn-by-turn.
                </p>
                <div className="mt-6 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-ink-900">
                    <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-xs">✓</span>
                    1:1 Difficult Feedback &amp; Performance Pushback
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-ink-900">
                    <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-xs">✓</span>
                    De-escalation under extreme pressure
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-ink-900">
                    <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-xs">✓</span>
                    Executive stakeholder presentation prep
                  </div>
                </div>
              </div>
              <Link to="/try/simulation" className="mt-8 a3-btn a3-btn-teal w-full text-center font-bold text-sm py-3">
                Try Leadership Simulation →
              </Link>
            </div>

            {/* Sales & Customer Conversations Solution */}
            <div id="sales" className="a3-glass-card rounded-[28px] p-8 border-t-4 border-coral-500 bg-white shadow-lg flex flex-col justify-between scroll-mt-24">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-archivo text-xs font-bold tracking-widest uppercase text-coral-500">SOLUTION 02</span>
                  <span className="a3-tag a3-tag--coral">COMMERCIAL</span>
                </div>
                <h3 className="mt-4 text-2xl font-black text-ink-900">Sales &amp; Customer Conversations</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Train commercial and field sales teams on complex objection handling, physician detailing, price negotiation, and value storytelling against dynamic AI buyers.
                </p>
                <div className="mt-6 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-ink-900">
                    <span className="w-5 h-5 rounded-full bg-coral-50 text-coral-500 flex items-center justify-center font-bold text-xs">✓</span>
                    HCP &amp; Doctor objections in pharma sales
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-ink-900">
                    <span className="w-5 h-5 rounded-full bg-coral-50 text-coral-500 flex items-center justify-center font-bold text-xs">✓</span>
                    Cross-functional negotiation &amp; closing
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-ink-900">
                    <span className="w-5 h-5 rounded-full bg-coral-50 text-coral-500 flex items-center justify-center font-bold text-xs">✓</span>
                    Real-time vocal &amp; facial signal feedback
                  </div>
                </div>
              </div>
              <Link to="/try/simulation" className="mt-8 a3-btn a3-btn-coral w-full text-center font-bold text-sm py-3">
                Try Sales Simulation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IT DOES & LIVE SIM CARD */}
      <section id="how" className="bg-gradient-to-b from-[#fff0f4] via-[#faf3f6] to-[#fff0f4] py-16 px-6 md:px-12 border-b border-[#ff4081]/15">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="a3-eyebrow text-brand-600">Practise</div>
            <h2 className="mt-3.5 text-3xl sm:text-4xl font-extrabold text-ink-900 leading-tight">
              Real-time AI simulations scored on voice &amp; video signals.
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Learners rehearse difficult 1:1 conversations against AI personas that push back dynamically. Every session generates turn-by-turn feedback and scoring.
            </p>
            <div className="mt-6 flex flex-col gap-3.5">
              {scenarios.map((s, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <span className="text-brand-600 font-extrabold text-base">→</span>
                  <span className="text-sm md:text-base text-slate-700 font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Live Sim Card */}
          <div className="bg-gradient-to-br from-[#003c46] via-[#00505e] to-[#006070] rounded-3xl p-7 text-white shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="font-archivo text-xs font-bold tracking-widest uppercase text-brand-100">
                Live simulation
              </span>
              <span className="font-mono text-xs text-pink-100 font-bold">● 00:30</span>
            </div>

            <div className="mt-4">
              <RehearseLiveSimGraphic />
            </div>

            <p className="mt-4 font-heading font-bold text-lg leading-snug">
              1:1 Difficult Feedback &amp; Objection Handling
            </p>

            <div className="mt-5 space-y-3.5">
              {meters.map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-brand-100">{m.label}</span>
                    <span className="font-mono font-bold text-white">{m.value}</span>
                  </div>
                  <div className="h-2 bg-white/18 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: m.width, background: m.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/15 text-xs text-brand-100 leading-relaxed">
              Composite readiness score per skill · pre and post · with manager coaching alerts when a user falls below threshold.
            </div>
          </div>
        </div>
      </section>

      {/* MEASUREMENT & CROSS PROMO */}
      <section className="bg-gradient-to-b from-[#eef7fa] via-[#f5fafc] to-[#ebf5f7] py-16 px-6 md:px-12 border-b border-[#008196]/15">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="a3-glass-card p-8 rounded-3xl">
            <div className="a3-eyebrow text-brand-600">Measurement closes the loop</div>
            <div className="mt-4 space-y-3.5">
              <div className="flex gap-3 items-start">
                <span className="text-brand-600 font-extrabold text-base">→</span>
                <span className="text-sm text-slate-700 font-medium">
                  Continuous baseline diagnostics L1 to L4
                </span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-brand-600 font-extrabold text-base">→</span>
                <span className="text-sm text-slate-700 font-medium">
                  Vocal emotion &amp; facial signal analysis via Hume AI integration
                </span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-brand-600 font-extrabold text-base">→</span>
                <span className="text-sm text-slate-700 font-medium">
                  Automatic manager alerts &amp; team readiness heatmaps
                </span>
              </div>
            </div>
            <Link to="/framework" className="mt-6 inline-block font-bold text-sm text-brand-600 hover:underline">
              See the skill framework →
            </Link>
          </div>

          <Link
            to="/try/simulation"
            className="a3-glass-card block p-8 rounded-3xl shadow-xl hover:scale-[1.01] transition-transform"
          >
            <div className="a3-eyebrow text-coral-500">Try it yourself</div>
            <h3 className="mt-3.5 text-2xl font-extrabold text-ink-900">Run a live simulation now</h3>
            <p className="mt-3 text-sm text-slate-700 font-medium leading-relaxed">
              Pick a scenario, talk to an AI character who pushes back, and read your score at the end. Nothing to install, no account needed.
            </p>
            <span className="mt-5 inline-block font-bold text-sm text-coral-500 hover:underline">Start a rehearsal →</span>
          </Link>
        </div>
      </section>

      {/* CTA BANNER */}
      <BottomCtaBanner
        eyebrow="REHEARSE SIMULATION"
        heading="We'll configure a scenario from your world and score a live rehearsal."
        subheading="Book a 45-minute demo with our practitioner team."
        primaryCtaText="Book a demo →"
        primaryCtaLink="/contact"
        secondaryCtaText="Try simulation free"
        secondaryCtaLink="/try/simulation"
      />
    </div>
  );
};
