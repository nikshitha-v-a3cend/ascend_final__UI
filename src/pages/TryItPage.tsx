import React from 'react';
import { Link } from 'react-router-dom';
import { HeroParticleCanvas } from '@/components/common/HeroParticleCanvas';
import { BottomCtaBanner } from '@/components/common/BottomCtaBanner';

import livePresenterImg from '@/assets/img-live-presenter-ui.jpg';
import simulationImg from '@/assets/img-simulation-ui.jpg';
import heroOverviewImg from '@/assets/img-try-hero-overview.jpg';
import { TRY_IT_TOOLS } from '@/data/tryItData';


const toolRoutes: Record<string, string> = {
  presenter: '/try/live-presenter',
  sim: '/try/simulation',
};

export const TryItPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="a3-hero-iridescent relative overflow-hidden px-6 md:px-12 pt-8 md:pt-10 pb-12">
        <HeroParticleCanvas canvasId="try-hero-canvas" />
        <div className="a3-blob a3-blob--cyan top-[-120px] right-[-70px] w-[480px] h-[480px] opacity-40 animate-floatSlow" />
        <div className="a3-blob a3-blob--pink bottom-[-130px] left-[-70px] w-[420px] h-[420px] opacity-25 animate-floatRev" />

        <div className="relative z-10 max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-2">
          {/* Left */}
          <div>
            <div className="font-archivo text-xs font-bold tracking-widest uppercase text-brand-600">
              Learning OS · Try it free
            </div>
            <h1 className="mt-3.5 font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.14] tracking-tight text-ink-900">
              Test two things<br />
              <span className="a3-text-gradient">A3CEND does.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-[52ch] text-slate-600">
              Build a live AI presenter, or rehearse a difficult conversation and get scored on four real behaviours. No sign-up needed to start.
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link to="/try/live-presenter" className="a3-btn a3-btn-teal px-7 py-3.5 text-sm font-bold">
                Try Live Presenter →
              </Link>
              <Link to="/try/simulation" className="a3-btn a3-btn-coral px-7 py-3.5 text-sm font-bold">
                Try Simulation →
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              <span className="px-4 py-2 bg-white/85 border border-brand-600/18 rounded-full text-xs font-semibold text-brand-600 shadow-sm">
                Live AI Presenter
              </span>
              <span className="px-4 py-2 bg-white/85 border border-coral-500/20 rounded-full text-xs font-semibold text-coral-500 shadow-sm">
                AI Simulation
              </span>
              <span className="px-4 py-2 bg-white/85 border border-brand-600/20 rounded-full text-xs font-semibold text-brand-600 shadow-sm">
                Scored on 4 Behaviours
              </span>
              <span className="px-4 py-2 bg-white/85 border border-coral-500/20 rounded-full text-xs font-semibold text-coral-500 shadow-sm">
                Under 3 minutes
              </span>
            </div>
          </div>

          {/* Right – Live Presenter UI image */}
          <div className="relative">
            <div className="rounded-3xl p-3 bg-white/80 backdrop-blur-xl border border-white shadow-2xl">
              <img src={heroOverviewImg} alt="Live Presenter & Simulation Overview" className="w-full h-auto block rounded-2xl" />
            </div>
            <div className="absolute -bottom-4 -left-3 bg-white/96 backdrop-blur-md border border-brand-600/28 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-floatSm">
              <div className="w-10 h-10 rounded-full bg-[conic-gradient(#008196_92%,rgba(4,170,196,0.15)_0)] flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-heading font-black text-xs text-brand-600">
                  92%
                </div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-xs text-ink-900">Readiness Score</div>
                <div className="text-[11px] text-slate-500">AI scored in real-time</div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 bg-white/92 backdrop-blur-md border border-brand-600/22 px-4 py-2.5 rounded-2xl flex items-center gap-2 shadow-lg animate-floatSm">
              <div className="a3-live-dot" />
              <span className="font-archivo font-bold text-xs text-brand-600">AI Avatar Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TWO TOOL CARDS ── */}
      <section className="bg-gradient-to-b from-[#eaf6f8] via-[#f2fafc] to-[#eaf6f8] py-16 px-6 md:px-12 border-b border-[#008196]/15">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-[56ch] mx-auto mb-12">
            <div className="a3-eyebrow text-coral-500">CHOOSE YOUR EXPERIENCE</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-ink-900 leading-tight">
              Pick one to start
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Both tools are live, AI-powered and run in your browser. No install, no account needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRY_IT_TOOLS.map((t) => {
              const isPresenter = t.id === 'presenter';
              const cardImg = isPresenter ? livePresenterImg : simulationImg;
              return (
                <Link
                  key={t.id}
                  to={toolRoutes[t.id]}
                  className={`group a3-glass-card rounded-[28px] p-8 border-t-4 bg-white shadow-lg flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 ${isPresenter ? 'border-brand-600' : 'border-coral-500'}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`font-archivo text-xs font-bold tracking-widest uppercase ${isPresenter ? 'text-brand-600' : 'text-coral-500'}`}>
                        {t.kicker}
                      </span>
                      <span className="font-mono text-xs text-slate-500 font-bold bg-slate-100 px-3 py-1 rounded-full">
                        {t.time}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-ink-900 mb-2">{t.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{t.body}</p>

                    {/* Preview Image Frame - Full View Container */}
                    <div className="rounded-2xl overflow-hidden border border-slate-200/95 shadow-md group-hover:shadow-lg transition-all duration-300 bg-slate-950 p-1.5">
                      <img src={cardImg} alt={t.title} className="w-full h-auto object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-500" />
                    </div>
                  </div>
                  <span className={`mt-6 inline-flex items-center gap-2 font-bold text-sm group-hover:gap-3 transition-all duration-200 ${isPresenter ? 'text-brand-600' : 'text-coral-500'}`}>
                    Try it free →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── LIVE PRESENTER FEATURE SECTION ── */}
      <section className="bg-white py-16 px-6 md:px-12 border-b border-slate-100">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="a3-eyebrow text-brand-600">Live Presenter Engine</div>
            <h2 className="mt-3.5 text-3xl sm:text-4xl font-extrabold text-ink-900 leading-tight">
              Drop in a topic. Watch an AI<br />presenter teach it on camera.
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Not a chatbot. A live AI face and voice presenting your content with auto-generated slides and an assessment behind it — ready in under 30 seconds.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {[
                'On-camera AI presenter — face, voice, gestures',
                'Auto-generated slide deck synced to the class',
                'Assessment questions built in automatically',
                'In the product — drop in your own deck, SOP or policy',
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <span className="text-brand-600 font-extrabold text-base shrink-0">→</span>
                  <span className="text-sm text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/try/live-presenter" className="mt-8 a3-btn a3-btn-teal px-7 py-3.5 text-sm font-bold inline-block">
              Try Live Presenter →
            </Link>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            <img src={livePresenterImg} alt="Live AI Presenter UI" className="w-full h-auto block" />
          </div>
        </div>
      </section>

      {/* ── SIMULATION FEATURE SECTION ── */}
      <section className="bg-gradient-to-b from-[#fff0f4] via-[#faf3f6] to-[#fff0f4] py-16 px-6 md:px-12 border-b border-[#ff4081]/15">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left – simulation UI image */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            <img src={simulationImg} alt="AI Rehearse Simulation" className="w-full h-auto block" />
          </div>

          {/* Right – text */}
          <div>
            <div className="a3-eyebrow text-coral-500">Rehearse Simulation Engine</div>
            <h2 className="mt-3.5 text-3xl sm:text-4xl font-extrabold text-ink-900 leading-tight">
              Talk. React. Get scored on<br />four real behaviours.
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              The AI character reacts to what you actually say — not a scripted path. Every session generates turn-by-turn feedback and a behavioural scorecard at the end.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {[
                'Management: Defensive direct reports, rating pushbacks',
                'Sales: Skeptical HCPs, pharma objections',
                'Leadership: Peer conflict, cross-functional pressure',
                'Scored on voice & facial expression signals',
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <span className="text-coral-500 font-extrabold text-base shrink-0">→</span>
                  <span className="text-sm text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/try/simulation" className="mt-8 a3-btn a3-btn-coral px-7 py-3.5 text-sm font-bold inline-block">
              Try the Simulation →
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-gradient-to-b from-[#eaf6f8] via-[#f2fafc] to-[#eaf6f8] py-16 px-6 md:px-12 border-b border-[#008196]/15">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-[56ch] mx-auto mb-12">
            <div className="a3-eyebrow text-brand-600">How it works</div>
            <h2 className="mt-2.5 text-3xl sm:text-4xl font-black text-ink-900 leading-tight">
              Three steps. Under 3 minutes.
            </h2>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Connecting step line (desktop only) */}
            <div className="hidden md:block absolute top-[35px] left-[calc(16.66%+22px)] right-[calc(16.66%+22px)] h-0.5 bg-gradient-to-r from-brand-600 via-brand-400 to-coral-500 opacity-25" />

            {/* Step 01 */}
            <div className="a3-glass-card relative rounded-[28px] overflow-hidden bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="h-1.5 bg-gradient-to-r from-brand-600 to-brand-400" />
              <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center font-mono font-black text-sm text-white shadow-md">
                  01
                </div>
                <svg className="w-6 h-6 text-brand-600/35" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                </svg>
              </div>
              <h3 className="font-heading font-black text-lg text-ink-900 mb-2.5">Pick a tool</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Choose the <span className="text-brand-600 font-semibold">Live Presenter</span> to build a class, or the <span className="text-coral-500 font-semibold">Simulation</span> to rehearse a real conversation.
              </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="a3-glass-card relative rounded-[28px] overflow-hidden bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="h-1.5 bg-gradient-to-r from-brand-600 to-brand-400" />
              <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center font-mono font-black text-sm text-white shadow-md">
                  02
                </div>
                <svg className="w-6 h-6 text-brand-600/35" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </div>
              <h3 className="font-heading font-black text-lg text-ink-900 mb-2.5">Experience it live</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Watch an AI presenter deliver your topic <span className="text-ink-900 font-semibold">on camera</span> — or talk to an AI character who reacts to what you actually say.
              </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="a3-glass-card relative rounded-[28px] overflow-hidden bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="h-1.5 bg-gradient-to-r from-coral-500 to-coral-700" />
              <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-coral-500 to-coral-700 flex items-center justify-center font-mono font-black text-sm text-white shadow-md">
                  03
                </div>
                <svg className="w-6 h-6 text-coral-500/35" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
              </div>
              <h3 className="font-heading font-black text-lg text-ink-900 mb-2.5">Read your results</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Get an instant <span className="text-coral-500 font-semibold">behavioural scorecard</span> — scored on empathy, assertiveness, accountability &amp; de-escalation. Keep it if you want.
              </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ── BOTTOM CTA ── */}
      <BottomCtaBanner
        eyebrow="READY TO SEE THE PLATFORM?"
        heading="Ready to see the full platform?"
        subheading="Book a 45-minute demo and see how A3CEND turns any content into a live, scored learning experience."
        primaryCtaText="Book a demo →"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore REHEARSE"
        secondaryCtaLink="/rehearse"
      />
    </div>
  );
};
