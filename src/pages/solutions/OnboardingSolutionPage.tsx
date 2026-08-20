import React from 'react';
import { Link } from 'react-router-dom';
import { HeroParticleCanvas } from '@/components/common/HeroParticleCanvas';
import { BottomCtaBanner } from '@/components/common/BottomCtaBanner';
import { OnboardingSolutionGraphic } from '@/components/common/SolutionPageGraphics';

import orchestratorImg from '@/assets/img-content-orchestrator.png';

export const OnboardingSolutionPage: React.FC = () => {
  const learnPillars = [
    'Company values',
    'Role expectations',
    'Products & services',
    'Processes',
    'Policies',
  ];

  const practisePillars = [
    'Customer interactions',
    'Manager conversations',
    'Role-specific situations',
    'Decision-making',
    'Workplace scenarios',
  ];

  const measurePillars = [
    'Knowledge',
    'Communication',
    'Behaviour',
    'Role readiness',
  ];

  const modelSteps = [
    { step: '01', title: 'Content', desc: 'Ingest product handbooks and SOPs once via Content Orchestrator to generate micro-learning.' },
    { step: '02', title: 'Practice', desc: 'New hires rehearse real-world customer and manager scenarios with AI avatars.' },
    { step: '03', title: 'Feedback', desc: 'Turn-by-turn AI feedback highlights strengths and gaps against role competencies.' },
    { step: '04', title: 'Readiness', desc: 'Prove job readiness before new hires step in front of real customers or teams.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="a3-hero-iridescent relative overflow-hidden px-6 md:px-12 pt-8 md:pt-10 pb-12">
        <HeroParticleCanvas canvasId="onb-hero-canvas" />

        <div className="a3-blob a3-blob--cyan top-[-120px] left-[-70px] w-[480px] h-[480px] opacity-40 animate-floatSlow" />
        <div className="a3-blob a3-blob--pink bottom-[-130px] right-[-70px] w-[420px] h-[420px] opacity-30 animate-floatRev" />

        <div className="relative z-10 max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="a3-eyebrow text-brand-600">SOLUTION · ONBOARDING &amp; INDUCTION</div>
            <h1 className="mt-3.5 font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.12] tracking-tight text-ink-900">
              Turn onboarding knowledge into<br />
              <span className="a3-text-gradient">workplace readiness.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-[54ch] text-slate-600">
              Help new employees understand your organization's expectations, practise real situations and demonstrate that they can apply what they've learned.
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <a href="#demo" className="px-7 py-3.5 text-sm font-bold text-black bg-white border border-[#008196] hover:bg-[#ff4081] hover:text-white hover:border-[#ff4081] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                Build a better onboarding experience →
              </a>
              <Link to="/contact" className="px-7 py-3.5 text-sm font-bold text-black bg-white border border-[#008196] hover:bg-[#008196] hover:text-white hover:border-[#008196] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                Book a demo
              </Link>
            </div>
          </div>

          {/* Hero Visual Graphic */}
          <div className="relative">
            <OnboardingSolutionGraphic />
          </div>
        </div>
      </section>

      {/* 2. THE POSITIONING SHIFT */}
      <section className="py-16 px-6 md:px-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1320px] mx-auto text-center">
          <div className="a3-eyebrow text-coral-500">THE A3CEND POSITIONING</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-ink-900">
            Don't just onboard employees. Get them ready to perform.
          </h2>
          <p className="mt-4 text-base text-slate-600 max-w-[64ch] mx-auto leading-relaxed">
            Standard onboarding measures module completion. A3CEND bridges content generation with live simulation so new hires don't just read about company standards — they demonstrate capability.
          </p>
        </div>
      </section>

      {/* 3. WHAT A3CEND CAN SUPPORT (3 PILLARS: LEARN, PRACTISE, MEASURE) */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-[64ch] mx-auto mb-12">
            <div className="a3-eyebrow text-brand-600">END-TO-END SUPPORT</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-ink-900">What A3CEND can support during onboarding</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1: Learn */}
            <div className="a3-glass-card p-7 rounded-2xl border border-slate-200 bg-white shadow-md">
              <span className="a3-tag a3-tag--teal text-[9px] mb-3 inline-block">1. LEARN</span>
              <h3 className="text-xl font-extrabold text-ink-900">Knowledge Ingestion</h3>
              <div className="mt-4 space-y-2.5">
                {learnPillars.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-xs">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Pillar 2: Practise */}
            <div className="a3-glass-card p-7 rounded-2xl border border-slate-200 bg-white shadow-md">
              <span className="a3-tag a3-tag--coral text-[9px] mb-3 inline-block">2. PRACTISE</span>
              <h3 className="text-xl font-extrabold text-ink-900">AI Roleplay &amp; Simulations</h3>
              <div className="mt-4 space-y-2.5">
                {practisePillars.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-coral-50 text-coral-500 flex items-center justify-center font-bold text-xs">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Pillar 3: Measure */}
            <div className="a3-glass-card p-7 rounded-2xl border border-slate-200 bg-white shadow-md">
              <span className="a3-tag a3-tag--teal text-[9px] mb-3 inline-block">3. MEASURE</span>
              <h3 className="text-xl font-extrabold text-ink-900">Readiness Reporting</h3>
              <div className="mt-4 space-y-2.5">
                {measurePillars.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-xs">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. A3CEND MODEL: CONTENT -> PRACTICE -> FEEDBACK -> READINESS */}
      <section className="py-16 px-6 md:px-12 bg-slate-50">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-[60ch] mx-auto mb-12">
            <div className="a3-eyebrow text-coral-500">THE ONBOARDING MODEL</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-ink-900">
              Content → Practice → Feedback → Readiness
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {modelSteps.map((m) => (
              <div key={m.step} className="a3-glass-card p-6 rounded-2xl border border-slate-200 bg-white text-center shadow-md">
                <div className="w-10 h-10 rounded-xl bg-brand-600 text-white font-heading font-black text-sm flex items-center justify-center mx-auto mb-3">
                  {m.step}
                </div>
                <h3 className="font-extrabold text-base text-ink-900">{m.title}</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED SCENARIO */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="a3-glass-card p-8 rounded-3xl border border-slate-200 bg-white">
              <div className="font-mono text-xs font-bold text-slate-400 uppercase">Traditional LMS Question</div>
              <h3 className="mt-2 text-xl font-bold text-ink-900">"Did you complete the onboarding module?"</h3>
              <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                Measures whether an employee clicked through slides or completed a multiple-choice quiz.
              </p>
            </div>

            <div className="a3-glass-card p-8 rounded-3xl border-2 border-brand-600 bg-brand-50/40 shadow-lg">
              <div className="font-mono text-xs font-bold text-brand-600 uppercase">A3CEND Readiness Approach</div>
              <h3 className="mt-2 text-xl font-extrabold text-ink-900">"Can you handle this situation correctly?"</h3>
              <p className="mt-3 text-xs text-slate-700 leading-relaxed font-medium">
                New Hire Scenario: "A customer asks a question about your company's product that you have just learned about. How would you respond?"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE EXPERIENCE */}
      <section id="demo" className="bg-gradient-to-b from-[#eaf6f8] via-[#f2fafc] to-[#eaf6f8] py-16 px-6 md:px-12 border-b border-[#008196]/15">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-[60ch] mx-auto mb-10">
            <div className="a3-eyebrow text-brand-600">INTERACTIVE EXPERIENCE</div>
            <h2 className="mt-2 text-3xl font-black text-ink-900">Build a better onboarding experience</h2>
            <p className="mt-2 text-slate-600 text-sm">Select a topic below to see live AI class generation for new hires.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/try/live-presenter"
              className="block rounded-[24px] p-8 bg-white shadow-sm hover:shadow-xl border-2 border-[#008196]/35 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="font-archivo text-xs font-black tracking-widest uppercase text-[#008196]">LIVE PRESENTER</span>
                <span className="font-mono text-xs text-slate-500 font-bold">~30 sec</span>
              </div>
              <h3 className="mt-3 font-heading font-extrabold text-2xl text-ink-900">Build a live AI class</h3>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">Pick a topic and watch an AI presenter teach it on camera, with slides and an assessment behind it.</p>
              <span className="mt-6 inline-flex items-center gap-1 font-extrabold text-base text-[#008196]">Try it →</span>
            </Link>
            <Link
              to="/try/simulation"
              className="block rounded-[24px] p-8 bg-white shadow-sm hover:shadow-xl border-2 border-[#008196]/35 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="font-archivo text-xs font-black tracking-widest uppercase text-[#008196]">SIMULATION</span>
                <span className="font-mono text-xs text-slate-500 font-bold">~3 min</span>
              </div>
              <h3 className="mt-3 font-heading font-extrabold text-2xl text-ink-900">Rehearse and get scored</h3>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">Talk to an AI character who pushes back, then read your score on four behaviours.</p>
              <span className="mt-6 inline-flex items-center gap-1 font-extrabold text-base text-[#008196]">Try it →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <BottomCtaBanner
        eyebrow="ONBOARDING TRANSFORMATION"
        heading="Don't just onboard employees. Get them ready to perform."
        subheading="Turn static onboarding manuals into measurable job readiness."
        primaryCtaText="Book a demo →"
        primaryCtaLink="/contact"
        secondaryCtaText="Try Live Presenter"
        secondaryCtaLink="/try/live-presenter"
      />
    </div>
  );
};
