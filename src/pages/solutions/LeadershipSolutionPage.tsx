import React from 'react';
import { Link } from 'react-router-dom';
import { HeroParticleCanvas } from '@/components/common/HeroParticleCanvas';
import { BottomCtaBanner } from '@/components/common/BottomCtaBanner';
import { LeadershipSolutionGraphic } from '@/components/common/SolutionPageGraphics';

export const LeadershipSolutionPage: React.FC = () => {
  const leadershipConversations = [
    'Giving and receiving feedback',
    'Performance conversations',
    'Coaching team members',
    'Managing conflict',
    'Delegating effectively',
  ];

  const leadingPeople = [
    'Building trust',
    'Communication & influence',
    'Managing change',
    'Stakeholder management',
    'Decision-making',
  ];

  const executiveCapability = [
    'Executive presence',
    'Strategic communication',
    'Influencing senior stakeholders',
    'Leading through ambiguity',
  ];

  const modelSteps = [
    { step: '01', title: 'Insight', desc: 'Human-led development & executive programs (A1, A2, A3X) build self-awareness and baseline frameworks.' },
    { step: '02', title: 'Rehearse', desc: 'REHEARSE provides AI-powered practice for high-stakes leadership conversations scored turn-by-turn.' },
    { step: '03', title: 'Reinforce', desc: 'Personalized coaching feedback and manager alerts reinforce behaviors back in the workplace.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="a3-hero-iridescent relative overflow-hidden px-6 md:px-12 pt-8 md:pt-10 pb-12">
        <HeroParticleCanvas canvasId="ld-hero-canvas" />

        <div className="a3-blob a3-blob--cyan top-[-120px] left-[-70px] w-[480px] h-[480px] opacity-40 animate-floatSlow" />
        <div className="a3-blob a3-blob--pink bottom-[-130px] right-[-70px] w-[420px] h-[420px] opacity-30 animate-floatRev" />

        <div className="relative z-10 max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="a3-eyebrow text-brand-600">SOLUTION · MANAGER &amp; LEADERSHIP DEVELOPMENT</div>
            <h1 className="mt-3.5 font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.12] tracking-tight text-ink-900">
              Build leaders who are ready for<br />
              <span className="a3-text-gradient">the conversations that matter.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-[54ch] text-slate-600">
              Help managers and leaders turn leadership concepts into behaviour through human-led development, coaching and AI-powered practice.
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <a href="#demo" className="px-7 py-3.5 text-sm font-bold text-black bg-white border border-[#008196] hover:bg-[#ff4081] hover:text-white hover:border-[#ff4081] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                Practise a leadership conversation →
              </a>
              <Link to="/contact" className="px-7 py-3.5 text-sm font-bold text-black bg-white border border-[#008196] hover:bg-[#008196] hover:text-white hover:border-[#008196] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                Book a demo
              </Link>
            </div>
          </div>

          {/* Hero Visual Graphic */}
          <div className="relative">
            <LeadershipSolutionGraphic />
          </div>
        </div>
      </section>

      {/* 2. THE A3CEND CONNECTION & PROGRAMS */}
      <section className="py-16 px-6 md:px-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1320px] mx-auto text-center">
          <div className="a3-eyebrow text-brand-600">THE A3CEND CONNECTION</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-ink-900">
            A1, A2 &amp; A3X Executive Development Programs
          </h2>
          <p className="mt-4 text-base text-slate-600 max-w-[64ch] mx-auto leading-relaxed">
            A3CEND covers first-time managers, mid-level leaders, and executives. Our solution model combines human-led executive workshops with REHEARSE AI simulations to turn concepts into lasting workplace behavior.
          </p>
        </div>
      </section>

      {/* 3. WHAT THEY CAN PRACTISE (3 CATEGORIES) */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-[64ch] mx-auto mb-12">
            <div className="a3-eyebrow text-coral-500">PRACTICE CAPABILITIES</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-ink-900">What leaders can practise with A3CEND</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category 1 */}
            <div className="a3-glass-card p-7 rounded-2xl border border-slate-200 bg-white shadow-md">
              <span className="a3-tag a3-tag--teal text-[9px] mb-3 inline-block">1. CONVERSATIONS</span>
              <h3 className="text-xl font-extrabold text-ink-900">Leadership Conversations</h3>
              <div className="mt-4 space-y-2.5">
                {leadershipConversations.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-xs">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Category 2 */}
            <div className="a3-glass-card p-7 rounded-2xl border border-slate-200 bg-white shadow-md">
              <span className="a3-tag a3-tag--coral text-[9px] mb-3 inline-block">2. LEADING PEOPLE</span>
              <h3 className="text-xl font-extrabold text-ink-900">Leading People</h3>
              <div className="mt-4 space-y-2.5">
                {leadingPeople.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-coral-50 text-coral-500 flex items-center justify-center font-bold text-xs">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Category 3 */}
            <div className="a3-glass-card p-7 rounded-2xl border border-slate-200 bg-white shadow-md">
              <span className="a3-tag a3-tag--teal text-[9px] mb-3 inline-block">3. EXECUTIVE</span>
              <h3 className="text-xl font-extrabold text-ink-900">Executive Capability</h3>
              <div className="mt-4 space-y-2.5">
                {executiveCapability.map((item, idx) => (
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

      {/* 4. A3CEND MODEL: INSIGHT -> REHEARSE -> REINFORCE */}
      <section className="py-16 px-6 md:px-12 bg-slate-50">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-[60ch] mx-auto mb-12">
            <div className="a3-eyebrow text-brand-600">THE A3CEND MODEL</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-ink-900">Insight → Rehearse → Reinforce</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modelSteps.map((m) => (
              <div key={m.step} className="a3-glass-card p-8 rounded-2xl border border-slate-200 bg-white shadow-md text-center">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-400 text-white font-heading font-black text-lg flex items-center justify-center mx-auto shadow-md">
                  {m.step}
                </div>
                <h3 className="mt-4 font-black text-xl text-ink-900">{m.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE EXPERIENCE */}
      <section id="demo" className="bg-gradient-to-b from-[#fff0f4] via-[#faf3f6] to-[#fff0f4] py-16 px-6 md:px-12 border-b border-[#ff4081]/15">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-[60ch] mx-auto mb-10">
            <div className="a3-eyebrow text-coral-500">INTERACTIVE EXPERIENCE</div>
            <h2 className="mt-2 text-3xl font-black text-ink-900">Practise a leadership conversation</h2>
            <p className="mt-2 text-slate-600 text-sm">Select a leadership scenario below and talk to an AI character that reacts live.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <BottomCtaBanner
        eyebrow="LEADERSHIP DEVELOPMENT"
        heading="From knowing how to lead → to being ready to lead."
        subheading="Turn leadership concepts into lasting behavior with A3CEND."
        primaryCtaText="Book a demo →"
        primaryCtaLink="/contact"
        secondaryCtaText="Try Leadership Simulation"
        secondaryCtaLink="/try/simulation"
      />
    </div>
  );
};
