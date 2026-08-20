import React from 'react';
import { Link } from 'react-router-dom';
import { HeroParticleCanvas } from '@/components/common/HeroParticleCanvas';
import { BottomCtaBanner } from '@/components/common/BottomCtaBanner';
import { ComplianceSolutionGraphic } from '@/components/common/SolutionPageGraphics';

export const ComplianceSolutionPage: React.FC = () => {
  const policyUnderstanding = [
    'Code of conduct',
    'Company policies',
    'Workplace standards',
    'Regulatory requirements',
  ];

  const realWorldScenarios = [
    'Ethical decisions',
    'Policy violations',
    'Risk situations',
    'Escalation decisions',
    'Workplace conduct',
  ];

  const reinforcementPillars = [
    'Scenario-based practice',
    'Assessments',
    'Feedback',
    'Repeated practice',
    'Readiness measurement',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="a3-hero-iridescent relative overflow-hidden px-6 md:px-12 pt-8 md:pt-10 pb-12">
        <HeroParticleCanvas canvasId="cmp-hero-canvas" />

        <div className="a3-blob a3-blob--cyan top-[-120px] left-[-70px] w-[480px] h-[480px] opacity-40 animate-floatSlow" />
        <div className="a3-blob a3-blob--pink bottom-[-130px] right-[-70px] w-[420px] h-[420px] opacity-30 animate-floatRev" />

        <div className="relative z-10 max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="a3-eyebrow text-coral-500">SOLUTION · COMPLIANCE &amp; POLICY ROLLOUT</div>
            <h1 className="mt-3.5 font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.12] tracking-tight text-ink-900">
              Move compliance from<br />
              <span className="a3-text-gradient">awareness to action.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-[54ch] text-slate-600">
              Turn policies and procedures into practical learning experiences where employees can understand, practise and demonstrate how they would respond in real workplace situations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <a href="#demo" className="px-7 py-3.5 text-sm font-bold text-black bg-white border border-[#008196] hover:bg-[#ff4081] hover:text-white hover:border-[#ff4081] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                Turn policies into practice →
              </a>
              <Link to="/contact" className="px-7 py-3.5 text-sm font-bold text-black bg-white border border-[#008196] hover:bg-[#008196] hover:text-white hover:border-[#008196] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                Book a demo
              </Link>
            </div>
          </div>

          {/* Hero Visual Graphic */}
          <div className="relative">
            <ComplianceSolutionGraphic />
          </div>
        </div>
      </section>

      {/* 2. THE POSITIONING SHIFT */}
      <section className="py-16 px-6 md:px-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1320px] mx-auto text-center">
          <div className="a3-eyebrow text-brand-600">THE A3CEND POSITIONING</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-ink-900">
            Turn policies into behaviour through practice
          </h2>
          <p className="mt-4 text-base text-slate-600 max-w-[64ch] mx-auto leading-relaxed">
            A3CEND isn't simply a compliance-course provider. We turn static policies and SOPs into practical scenario-based simulations so your employees practise applying rules before real-world dilemmas occur.
          </p>
        </div>
      </section>

      {/* 3. WHAT THEY CAN PRACTISE (3 PILLARS) */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-[64ch] mx-auto mb-12">
            <div className="a3-eyebrow text-coral-500">PRACTICE CAPABILITIES</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-ink-900">What teams can practise with A3CEND</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1: Understanding */}
            <div className="a3-glass-card p-7 rounded-2xl border border-slate-200 bg-white shadow-md">
              <span className="a3-tag a3-tag--teal text-[9px] mb-3 inline-block">1. UNDERSTANDING</span>
              <h3 className="text-xl font-extrabold text-ink-900">Policy Understanding</h3>
              <div className="mt-4 space-y-2.5">
                {policyUnderstanding.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-xs">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Pillar 2: Scenarios */}
            <div className="a3-glass-card p-7 rounded-2xl border border-slate-200 bg-white shadow-md">
              <span className="a3-tag a3-tag--coral text-[9px] mb-3 inline-block">2. SCENARIOS</span>
              <h3 className="text-xl font-extrabold text-ink-900">Real-World Scenarios</h3>
              <div className="mt-4 space-y-2.5">
                {realWorldScenarios.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-coral-50 text-coral-500 flex items-center justify-center font-bold text-xs">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Pillar 3: Reinforcement */}
            <div className="a3-glass-card p-7 rounded-2xl border border-slate-200 bg-white shadow-md">
              <span className="a3-tag a3-tag--teal text-[9px] mb-3 inline-block">3. REINFORCEMENT</span>
              <h3 className="text-xl font-extrabold text-ink-900">Behavioral Reinforcement</h3>
              <div className="mt-4 space-y-2.5">
                {reinforcementPillars.map((item, idx) => (
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

      {/* 4. MEASUREMENT SHIFT */}
      <section className="py-16 px-6 md:px-12 bg-slate-50">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-[64ch] mx-auto mb-12">
            <div className="a3-eyebrow text-brand-600">MEASUREMENT SHIFT</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-ink-900">Moving from course completion to demonstrated action</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="a3-glass-card p-8 rounded-3xl border border-slate-200 bg-white">
              <div className="font-mono text-xs font-bold text-slate-400 uppercase">Instead of measuring only:</div>
              <h3 className="mt-2.5 text-xl font-bold text-ink-900">"Employee completed the compliance course."</h3>
              <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                Basic tracking of page clicks or slide scrolls that fails to predict real workplace behavior under pressure.
              </p>
            </div>

            <div className="a3-glass-card p-8 rounded-3xl border border-slate-200 bg-white">
              <div className="font-mono text-xs font-bold text-coral-500 uppercase">You can measure:</div>
              <h3 className="mt-2.5 text-xl font-bold text-ink-900">"Employee demonstrated expected behaviour in a realistic scenario."</h3>
              <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                Policy in Practice: "You notice a situation that may violate company policy. What do you do next?" Evaluates actual ethical escalation &amp; decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE EXPERIENCE */}
      <section id="demo" className="bg-gradient-to-b from-[#eaf6f8] via-[#f2fafc] to-[#eaf6f8] py-16 px-6 md:px-12 border-b border-[#008196]/15">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-[60ch] mx-auto mb-10">
            <div className="a3-eyebrow text-coral-500">INTERACTIVE EXPERIENCE</div>
            <h2 className="mt-2 text-3xl font-black text-ink-900">Turn policies into practice</h2>
            <p className="mt-2 text-slate-600 text-sm">Select a compliance topic below to generate a short policy summary class.</p>
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

      {/* 6. FINAL CTA */}
      <BottomCtaBanner
        eyebrow="COMPLIANCE TRANSFORMATION"
        heading="Move compliance from awareness to action."
        subheading="Turn your static policies into measurable workplace capability."
        primaryCtaText="Book a demo →"
        primaryCtaLink="/contact"
        secondaryCtaText="Try Live Presenter"
        secondaryCtaLink="/try/live-presenter"
      />
    </div>
  );
};
