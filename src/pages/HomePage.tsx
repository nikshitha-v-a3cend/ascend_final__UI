import React from 'react';
import { Link } from 'react-router-dom';
import { HeroParticleCanvas } from '@/components/common/HeroParticleCanvas';
import { BottomCtaBanner } from '@/components/common/BottomCtaBanner';
import { ApproachInteractiveCycle } from '@/components/interactive/ApproachInteractiveCycle';
import { BRANDS } from '@/data/homeData';

import heroUiImg from '@/assets/hero-platform-ui.png';
import livePresenterImg from '@/assets/img-live-presenter-ui.jpg';
import simulationImg from '@/assets/img-simulation-ui.jpg';
import contentOrchCleanImg from '@/assets/img-content-orchestrator-clean.svg';
import rehearseImg from '@/assets/img-rehearse.png';
import skillFrameworkCleanImg from '@/assets/img-skill-framework-clean.svg';
import analyticsDashboardCroppedImg from '@/assets/img-analytics-dashboard-cropped.svg';
import { ContentVisualHeader, ContextVisualHeader, CoachingVisualHeader } from '@/components/common/ThreeCVisuals';
import { ContentOrchestratorMockup, RehearseSimulationMockup } from '@/components/common/PlatformCardMockups';

import { useScrollReveal } from '@/hooks/useScrollReveal';

export const HomePage: React.FC = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="a3-hero-iridescent relative overflow-hidden px-6 md:px-12 pt-8 md:pt-10 pb-14">
        <HeroParticleCanvas canvasId="home-hero-canvas" />

        <div className="a3-blob a3-blob--cyan top-[-140px] left-[-60px] w-[550px] h-[550px] opacity-40 animate-floatSlow" />
        <div className="a3-blob a3-blob--pink bottom-[-100px] right-[-80px] w-[480px] h-[480px] opacity-30 animate-floatRev" />
        <div className="a3-blob a3-blob--teal top-[25%] right-[30%] w-[420px] h-[420px] opacity-20" />

        <div className="relative z-10 max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left Hero Text */}
            <div className="relative flex flex-col">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/95 border border-brand-600/20 rounded-full shadow-sm w-fit self-start max-w-max">
                <span className="bg-gradient-to-r from-brand-600 to-brand-400 text-white text-[10px] font-black tracking-widest px-2.5 py-1 rounded-full font-heading shrink-0">
                  A3CEND
                </span>
                <span className="text-xs font-semibold text-slate-600 shrink-0">
                  The AI learning OS · for L&amp;D teams
                </span>
              </div>

              {/* Headline */}
              <h1 className="mt-5 font-heading text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-ink-900">
                Your AI-powered learning OS for<br />
                <span className="a3-text-gradient pb-2">Content, Practice &amp; Readiness</span>
              </h1>

              {/* Subheadline */}
              <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-[54ch] text-slate-600">
                One system to build the learning your organisation needs, put your people through{' '}
                <strong className="text-ink-900 font-bold">live AI practice</strong>, and see role by role who is{' '}
                <strong className="text-ink-900 font-bold">ready</strong> — every score reading from one skill framework you own.
              </p>

              {/* Capability Rule List */}
              <div className="a3-rulelist mt-6 max-w-[52ch] order-5 lg:order-none">
                <div className="a3-rulerow">
                  <span className="a3-rulekey text-brand-600">Content</span>
                  <span className="text-sm md:text-base font-semibold text-ink-900 leading-snug">
                    Your decks, SOPs and policies become every learning format.
                  </span>
                </div>
                <div className="a3-rulerow">
                  <span className="a3-rulekey text-coral-500">Practice</span>
                  <span className="text-sm md:text-base font-semibold text-ink-900 leading-snug">
                    Live AI roleplay on video, scored turn by turn.
                  </span>
                </div>
                <div className="a3-rulerow">
                  <span className="a3-rulekey text-brand-600">Readiness</span>
                  <span className="text-sm md:text-base font-semibold text-ink-900 leading-snug">
                    One framework, baselined and reported per person and role.
                  </span>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3.5 items-center order-4 lg:order-none">
                <Link to="/try-it" className="px-7 py-3.5 text-sm font-bold text-black bg-white border border-[#008196] hover:bg-[#ff4081] hover:text-white hover:border-[#ff4081] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  Try it free
                </Link>
                <Link to="/contact" className="px-7 py-3.5 text-sm font-bold text-black bg-white border border-[#008196] hover:bg-[#008196] hover:text-white hover:border-[#008196] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  Book a demo
                </Link>
              </div>

              {/* Stat Line */}
              <div className="a3-statline mt-6 order-6 lg:order-none">
                <span><b>34%</b>faster ramp-up</span>
                <span><b>6×</b>more practice</span>
                <span><b>200+</b>scored dimensions</span>
              </div>
            </div>

            {/* Right Hero Image Frame */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={heroUiImg} alt="A3CEND Platform UI" className="w-full h-auto block" />
              </div>
              {/* Live Badge */}
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-white/95 backdrop-blur-md border border-brand-600/20 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-2xl flex items-center gap-1.5 sm:gap-2.5 shadow-lg animate-floatSm">
                <div className="a3-live-dot shrink-0" />
                <span className="font-heading font-bold text-[10px] sm:text-xs text-brand-600 whitespace-nowrap">AI Avatar Active</span>
              </div>
              {/* Readiness Score Badge */}
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-3 max-w-[calc(100%-1rem)] bg-white/95 backdrop-blur-md border border-brand-600/20 px-2.5 py-2 sm:px-4 sm:py-3 rounded-2xl flex items-center gap-2 sm:gap-3 shadow-lg animate-floatSm">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[conic-gradient(#008196_92%,rgba(0,129,150,0.12)_0)] flex items-center justify-center shrink-0">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center font-heading font-black text-[10px] sm:text-xs text-brand-600">
                    92%
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="font-heading font-extrabold text-[11px] sm:text-xs text-ink-900 whitespace-nowrap">Readiness Score</div>
                  <div className="text-[9px] sm:text-[11px] text-slate-500 whitespace-nowrap">Real-time AI scoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED CLIENTS MARQUEE */}
      <section className="bg-white py-8 border-y border-slate-100 overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 mb-4">
          <span className="text-xs font-bold text-slate-400 tracking-widest uppercase whitespace-nowrap">
            Trusted by global enterprises
          </span>
        </div>

        <div className="w-full overflow-hidden relative [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <div className="a3-marquee-track flex gap-16 items-center">
            {BRANDS.concat(BRANDS).concat(BRANDS).map((b, i) => (
              <span key={i} className="font-archivo font-extrabold text-xl text-ink-900 tracking-tight opacity-75 whitespace-nowrap">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3 PROBLEMS GRID */}
      <section className="bg-[#f8fafc] py-16 px-6 md:px-12 border-b border-slate-200/60 relative">
        <div className="max-w-[1320px] mx-auto relative z-10">
          <div className="max-w-[62ch] a3-scroll-reveal">
            <div className="a3-eyebrow text-brand-600">Sound familiar?</div>
            <h2 className="mt-3.5 text-3xl sm:text-4xl font-black leading-tight text-ink-900">
              Three problems. One place to fix them.
            </h2>
            <p className="mt-3.5 text-lg text-slate-600">Most L&amp;D teams are fighting all three at once.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-7 border-t-4 border-t-brand-600 bg-white shadow-md border border-slate-200/70 a3-card-anim a3-scroll-reveal a3-delay-1">
              <div className="font-archivo text-xs font-bold tracking-widest uppercase text-brand-600">
                Practice
              </div>
              <div className="mt-2.5 font-heading font-extrabold text-xl text-ink-900">
                Nobody actually practises
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Training happens once, in a room. Then your people meet the difficult conversation for the first time when it is real — and it costs you.
              </p>
            </div>

            <div className="rounded-2xl p-7 border-t-4 border-t-coral-500 bg-white shadow-md border border-slate-200/70 a3-card-anim a3-scroll-reveal a3-delay-2">
              <div className="font-archivo text-xs font-bold tracking-widest uppercase text-coral-500">
                Content
              </div>
              <div className="mt-2.5 font-heading font-extrabold text-xl text-ink-900">
                Content is always late
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Every module is a three-month agency project. By the time it lands the policy has moved on, and the next one starts from scratch.
              </p>
            </div>

            <div className="rounded-2xl p-7 border-t-4 border-t-brand-600 bg-white shadow-md border border-slate-200/70 a3-card-anim a3-scroll-reveal a3-delay-3">
              <div className="font-archivo text-xs font-bold tracking-widest uppercase text-brand-600">
                Platform
              </div>
              <div className="mt-2.5 font-heading font-extrabold text-xl text-ink-900">
                Nothing adds up
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Content in one tool, practice in another, scores in a spreadsheet. Ask who is ready for the next role and nobody can answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRY IT YOURSELF SELECTOR */}
      <section className="bg-white py-16 px-6 md:px-12 border-b border-slate-200/60">
        <div className="max-w-[1320px] mx-auto">
          <div className="a3-scroll-reveal">
            <div className="a3-eyebrow text-brand-600">Try it free</div>
            <h2 className="mt-3.5 text-3xl sm:text-4xl font-black text-ink-900 max-w-[26ch] leading-tight">
              Try it yourself before you talk to us.
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-[62ch] leading-relaxed">
              Build a live AI class from a topic, generate a short video, or rehearse a difficult conversation and read your own score. We ask who you are at one point only — when you want to keep the file, send the link or unlock the full scorecard.
            </p>
            <div className="mt-5 font-mono text-xs font-bold tracking-widest uppercase text-brand-600">
              Pick one to start →
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/try/live-presenter" className="group block rounded-[28px] p-6 sm:p-8 bg-white shadow-sm hover:shadow-2xl border-2 border-[#008196]/30 hover:border-[#008196] transition-all duration-300 hover:-translate-y-1.5 a3-scroll-reveal a3-delay-1 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-archivo text-xs font-black tracking-widest uppercase text-[#008196]">LIVE PRESENTER</span>
                  <span className="font-mono text-xs text-slate-500 font-bold bg-slate-100 px-3 py-1 rounded-full">~30 sec</span>
                </div>
                <h3 className="mt-3 font-heading font-extrabold text-2xl text-ink-900 leading-snug">Build a live AI class</h3>
                <p className="mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
                  Pick a topic and watch an AI presenter teach it on camera, with slides and an assessment behind it.
                </p>

                {/* Preview Image Frame - Full View Container */}
                <div className="mt-5 rounded-2xl overflow-hidden border border-slate-200/95 shadow-md group-hover:shadow-lg transition-all duration-300 bg-slate-950 p-1.5">
                  <img src={livePresenterImg} alt="Live AI Presenter UI" className="w-full h-auto object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-500" />
                </div>
              </div>

              <span className="mt-6 inline-flex items-center gap-1.5 font-extrabold text-base text-[#008196] group-hover:gap-3 transition-all duration-200">
                Try the content engine free →
              </span>
            </Link>

            <Link to="/try/simulation" className="group block rounded-[28px] p-6 sm:p-8 bg-white shadow-sm hover:shadow-2xl border-2 border-[#ff4081]/30 hover:border-[#ff4081] transition-all duration-300 hover:-translate-y-1.5 a3-scroll-reveal a3-delay-2 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-archivo text-xs font-black tracking-widest uppercase text-[#ff4081]">SIMULATION</span>
                  <span className="font-mono text-xs text-slate-500 font-bold bg-slate-100 px-3 py-1 rounded-full">~3 min</span>
                </div>
                <h3 className="mt-3 font-heading font-extrabold text-2xl text-ink-900 leading-snug">Rehearse and get scored</h3>
                <p className="mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
                  Talk to an AI character who pushes back, then read your score on four real behaviours.
                </p>

                {/* Preview Image Frame - Full View Container */}
                <div className="mt-5 rounded-2xl overflow-hidden border border-slate-200/95 shadow-md group-hover:shadow-lg transition-all duration-300 bg-slate-950 p-1.5">
                  <img src={simulationImg} alt="AI Rehearse Simulation UI" className="w-full h-auto object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-500" />
                </div>
              </div>

              <span className="mt-6 inline-flex items-center gap-1.5 font-extrabold text-base text-[#ff4081] group-hover:gap-3 transition-all duration-200">
                Try a simulation free →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* EXPLORE THE PLATFORM - MODULES GRID */}
      <section className="bg-[#f8fafc] py-16 px-6 md:px-12 border-b border-slate-200/60 relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto relative z-10">
          <div className="text-center max-w-[64ch] mx-auto">
            <div className="a3-eyebrow text-brand-600">EVERY MODULE, ONE PLATFORM</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-ink-900 leading-tight">
              Explore the platform from right here.
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Content, Context and Coaching · built as connected modules you can jump into directly. Each card below is a live piece of A3CEND.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Content Orchestrator */}
            <Link to="/content-orchestrator" className="a3-card-anim a3-scroll-reveal a3-delay-1 block rounded-[26px] overflow-hidden p-0 bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all">
              <div className="h-56 bg-[#f4fafb] flex items-center justify-center p-3 relative border-b border-[#c2ecf2]">
                <img src={contentOrchCleanImg} alt="Content Orchestrator" className="w-full h-full object-contain rounded-xl" />
                <span className="absolute top-3.5 left-3.5 bg-[#008196] text-white font-archivo text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase shadow-sm">
                  CONTENT
                </span>
              </div>
              <div className="p-7">
                <div className="font-archivo font-extrabold text-xl text-ink-900">Content Orchestrator</div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">Ingest once. Generate every learning format from a single source.</p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-bold text-sm text-[#008196]">Explore →</span>
              </div>
            </Link>

            {/* Card 2: REHEARSE */}
            <Link to="/rehearse" className="a3-card-anim a3-scroll-reveal a3-delay-2 block rounded-[26px] overflow-hidden p-0 bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all">
              <div className="h-56 bg-[#f4fafb] flex items-center justify-center p-3 relative border-b border-[#c2ecf2]">
                <img src={rehearseImg} alt="REHEARSE" className="w-full h-full object-contain rounded-xl" />
                <span className="absolute top-3.5 left-3.5 bg-[#008196] text-white font-archivo text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase shadow-sm">
                  SIMULATION
                </span>
                <div className="absolute top-3.5 right-3.5"><div className="a3-live-dot" /></div>
              </div>
              <div className="p-7">
                <div className="font-archivo font-extrabold text-xl text-ink-900">REHEARSE</div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  AI roleplay and presentation practice, scored on voice and facial signals.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-bold text-sm text-[#008196]">Explore →</span>
              </div>
            </Link>

            {/* Card 3: Skill Framework */}
            <Link to="/framework" className="a3-card-anim a3-scroll-reveal a3-delay-3 block rounded-[26px] overflow-hidden p-0 bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all">
              <div className="h-56 bg-[#f4fafb] flex items-center justify-center p-3 relative border-b border-[#c2ecf2]">
                <img src={skillFrameworkCleanImg} alt="Skill Framework" className="w-full h-full object-contain rounded-xl" />
                <span className="absolute top-3.5 left-3.5 bg-[#008196] text-white font-archivo text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase shadow-sm">
                  ASSESS
                </span>
              </div>
              <div className="p-7">
                <div className="font-archivo font-extrabold text-xl text-ink-900">Skill Framework</div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">The framework every module and score is measured against.</p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-bold text-sm text-[#008196]">Explore →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3C PHILOSOPHY */}
      <section className="bg-white py-16 px-6 md:px-12 border-b border-slate-200/60">
        <div className="max-w-[1240px] mx-auto">
          <div className="max-w-[64ch]">
            <div className="a3-eyebrow text-brand-600">OUR 3C PHILOSOPHY</div>
            <h2 className="mt-3.5 text-3xl sm:text-5xl font-black leading-tight text-ink-900">
              Built on one founding belief.
            </h2>
            <p className="mt-4 text-lg md:text-xl text-slate-600 leading-relaxed">
              Everyone is a work in progress, and every person can evolve to a better version of themselves when supported by the right <strong className="text-ink-900">Content</strong>, delivered in the right <strong className="text-ink-900">Context</strong>, and reinforced by the right <strong className="text-ink-900">Coaching</strong>.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-7">
            {/* Content C Card */}
            <div className="rounded-[26px] overflow-hidden shadow-lg border border-slate-200/80 bg-white flex flex-col justify-between group a3-card-anim a3-scroll-reveal a3-delay-1">
              <div className="h-[220px] relative overflow-hidden border-b border-[#c2ecf2]">
                <ContentVisualHeader />
                <span className="absolute top-4 left-4 bg-[#008196] text-white font-archivo text-[10px] font-black tracking-widest px-3.5 py-1 rounded-full uppercase shadow-md z-10">
                  CONTENT
                </span>
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-[#00a0bb] flex items-center justify-center font-archivo font-black text-xl text-white shadow-md">
                    C
                  </div>
                  <h3 className="mt-4 text-2xl font-black text-ink-900">Content</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Relevant, curated, lifecycle-managed. Knowledge that survives the workshop.
                  </p>
                </div>
              </div>
            </div>

            {/* Context C Card */}
            <div className="rounded-[26px] overflow-hidden shadow-lg border border-slate-200/80 bg-white flex flex-col justify-between group a3-card-anim a3-scroll-reveal a3-delay-2">
              <div className="h-[220px] relative overflow-hidden border-b border-[#c2ecf2]">
                <ContextVisualHeader />
                <span className="absolute top-4 left-4 bg-[#008196] text-white font-archivo text-[10px] font-black tracking-widest px-3.5 py-1 rounded-full uppercase shadow-md z-10">
                  CONTEXT
                </span>
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-[#00a0bb] flex items-center justify-center font-archivo font-black text-xl text-white shadow-md">
                    C
                  </div>
                  <h3 className="mt-4 text-2xl font-black text-ink-900">Context</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Delivered in the flow of work · nudges, micro-cards and reflection that fit a working day.
                  </p>
                </div>
              </div>
            </div>

            {/* Coaching C Card */}
            <div className="rounded-[26px] overflow-hidden shadow-lg border border-slate-200/80 bg-white flex flex-col justify-between group a3-card-anim a3-scroll-reveal a3-delay-3">
              <div className="h-[220px] relative overflow-hidden border-b border-[#ffd2dd]">
                <CoachingVisualHeader />
                <span className="absolute top-4 left-4 bg-[#ff4081] text-white font-archivo text-[10px] font-black tracking-widest px-3.5 py-1 rounded-full uppercase shadow-md z-10">
                  COACHING
                </span>
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-[#ff4081] flex items-center justify-center font-archivo font-black text-xl text-white shadow-md">
                    C
                  </div>
                  <h3 className="mt-4 text-2xl font-black text-ink-900">Coaching</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Practice, reinforcement and human nudges · behaviour built through repetition, not seat-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH SECTION (INTERACTIVE 4 STAGE CYCLE) */}
      <section id="approach" className="bg-[#f8fafc] py-16 px-6 md:px-12 relative overflow-hidden border-b border-slate-200/60">
        <div className="max-w-[1320px] mx-auto">
          <div className="max-w-[62ch]">
            <div className="a3-eyebrow text-brand-600">OUR APPROACH</div>
            <h2 className="mt-3.5 text-3xl sm:text-5xl font-black leading-tight text-ink-900">
              Four shifts, four solutions · one connected cycle.
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
              Each shift in how modern capability gets built maps to one A3CEND component. Start with one pillar or run the full cycle, when connected, the value compounds. Click a stage to explore it.
            </p>
          </div>

          <ApproachInteractiveCycle />
        </div>
      </section>

      {/* TWO EXPERIENCES · ONE LEARNING OS */}
      <section className="bg-white py-16 px-6 md:px-12 relative overflow-hidden border-b border-slate-200/60">
        <div className="max-w-[1320px] mx-auto relative z-10">
          <div className="text-center max-w-[60ch] mx-auto">
            <div className="a3-eyebrow text-brand-600">TWO EXPERIENCES · ONE LEARNING OS</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-ink-900 leading-tight">
              Content &amp; Practice · built together.
            </h2>
            <p className="mt-3.5 text-base text-slate-600 leading-relaxed">
              Super-users create content of every kind in the Content Orchestrator. Through REHEARSE, that content reaches users who practise, learn and are scored on readiness.
            </p>
          </div>

          {/* 2 Component Cards Grid with Center Overlapping Badge */}
          <div className="relative mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Center Overlapping Badge (Round Circle with 2-Color Breathing Pulse Border) */}
            <div className="hidden md:block a3-dual-ring-container">
              <div className="a3-dual-ring-glow" />
              <div className="a3-dual-ring-border">
                <div className="a3-dual-ring-inner">
                  <span className="a3-text-gradient font-heading font-black text-xs leading-tight">
                    One AI
                  </span>
                  <span className="font-heading font-extrabold text-[11px] text-ink-900 leading-tight">
                    Platform
                  </span>
                </div>
              </div>
            </div>

            {/* Content Orchestrator Card */}
            <div className="a3-glass-card p-8 rounded-[28px] border-brand-600/20 shadow-xl flex flex-col justify-between bg-white relative">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-heading font-black text-2xl md:text-3xl text-[#008196]">Content Orchestrator</h3>
                  <span className="a3-tag a3-tag--teal">Super-user</span>
                </div>
                <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
                  Create, manage and publish content of every kind on your brand. Ingest once and generate every learning format with AI.
                </p>

                <div className="mt-5">
                  <ContentOrchestratorMockup />
                </div>

                {/* 4 Feature Checklist Points */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-ink-900">
                    <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    Ingest any source
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-ink-900">
                    <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    Generate all formats
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-ink-900">
                    <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    Brand it your way
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-ink-900">
                    <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    Own the content
                  </div>
                </div>
              </div>

              {/* Pill Button */}
              <div className="mt-8 pt-4 border-t border-slate-100">
                <Link
                  to="/content-orchestrator"
                  className="w-full py-3.5 px-6 rounded-full border border-[#008196]/35 bg-white text-[#008196] font-extrabold text-sm text-center block shadow-sm hover:bg-[#008196] hover:text-white transition-all"
                >
                  Explore the content engine →
                </Link>
              </div>
            </div>

            {/* REHEARSE Card */}
            <div className="a3-glass-card p-8 rounded-[28px] border-coral-500/20 shadow-xl flex flex-col justify-between bg-white relative">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-heading font-black text-2xl md:text-3xl text-coral-500">REHEARSE</h3>
                  <span className="a3-tag a3-tag--coral">User</span>
                </div>
                <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
                  Practise real, high-stakes situations with AI personas—voice and video—scored on the readiness each role demands.
                </p>

                <div className="mt-5">
                  <RehearseSimulationMockup />
                </div>

                {/* 4 Feature Checklist Points */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-ink-900">
                    <span className="w-5 h-5 rounded-full bg-coral-50 text-coral-500 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    AI roleplay
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-ink-900">
                    <span className="w-5 h-5 rounded-full bg-coral-50 text-coral-500 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    Voice &amp; video
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-ink-900">
                    <span className="w-5 h-5 rounded-full bg-coral-50 text-coral-500 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    Real-time scoring
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-ink-900">
                    <span className="w-5 h-5 rounded-full bg-coral-50 text-coral-500 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                    Actionable feedback
                  </div>
                </div>
              </div>

              {/* Pill Button */}
              <div className="mt-8 pt-4 border-t border-slate-100">
                <Link
                  to="/rehearse"
                  className="w-full py-3.5 px-6 rounded-full border border-pink-200 bg-white text-coral-500 font-bold text-sm text-center block shadow-sm hover:bg-coral-50 transition-all"
                >
                  See a live rehearsal →
                </Link>
              </div>
            </div>
          </div>

          {/* THE INTEGRATED LEARNING OS */}
          <div className="mt-12 bg-gradient-to-r from-[#003c46] via-[#004a56] to-[#005868] text-white rounded-[28px] p-8 md:p-12 shadow-2xl">
            <div className="a3-eyebrow text-brand-400">THE INTEGRATED LEARNING OS</div>
            <h3 className="mt-2 text-2xl md:text-3xl font-black text-white">
              The common layer both experiences run on
            </h3>
            <p className="mt-3 text-sm md:text-base text-slate-200 max-w-[64ch] leading-relaxed">
              Whichever side you start on, you get the same foundation underneath — and it is the piece that turns content and practice into an answer about who is ready.
            </p>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-6 pt-6 border-t border-white/15">
              <div>
                <div className="font-heading font-extrabold text-sm text-white">The skills list</div>
                <div className="text-xs text-slate-300 mt-1 leading-snug">What each role has to be good at</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-sm text-white">A starting score</div>
                <div className="text-xs text-slate-300 mt-1 leading-snug">Where each person stands today</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-sm text-white">Readiness reporting</div>
                <div className="text-xs text-slate-300 mt-1 leading-snug">One score per skill, per team</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-sm text-white">Two levels of access</div>
                <div className="text-xs text-slate-300 mt-1 leading-snug">People who make it, people who use it</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-sm text-white">Fits your systems</div>
                <div className="text-xs text-slate-300 mt-1 leading-snug">LMS, HR system, APIs, SSO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANALYTICS SHOWCASE */}
      <section className="bg-[#f8fafc] py-16 px-6 md:px-12 border-b border-slate-200/60">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 items-center">
          <div>
            <div className="a3-eyebrow text-brand-600">ANALYTICS SHOWCASE</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-ink-900 leading-tight">
              Live readiness analytics that turn learning into measurable impact.
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Track every learner's skill progression from L1 to L4. See completion rates, simulation scores, and cohort heatmaps in real time.
            </p>

            <div className="mt-7 flex flex-col gap-3.5">
              <div className="flex items-center gap-3.5 p-4 bg-white/95 border border-brand-600/18 rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-brand-600 to-brand-400 flex items-center justify-center font-bold text-white text-lg shadow-sm">
                  78%
                </div>
                <div>
                  <div className="font-heading font-black text-xl text-brand-600">78%</div>
                  <div className="text-xs font-medium text-slate-600">Overall Readiness Score</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 bg-white/95 border border-coral-500/18 rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-coral-500 to-coral-700 flex items-center justify-center font-bold text-white text-lg shadow-sm">
                  95%
                </div>
                <div>
                  <div className="font-heading font-black text-xl text-coral-500">95%</div>
                  <div className="text-xs font-medium text-slate-600">Completion Rate</div>
                </div>
              </div>
            </div>

            <Link to="/framework#measure" className="mt-7 inline-flex items-center gap-2 font-bold text-sm text-brand-600 hover:gap-3 transition-all">
              Explore analytics →
            </Link>
          </div>

          <div className="relative">
            <img src={analyticsDashboardCroppedImg} alt="A3CEND Readiness Dashboard" className="rounded-3xl border border-brand-600/15 shadow-2xl w-full h-auto block" />
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <BottomCtaBanner
        eyebrow="READY TO BEGIN?"
        heading="Own the capability. Not the dependency."
        subheading="People measurably more capable in the situations their roles demand, and an L&D team producing current, branded content in-house. Let's walk your team through it."
        primaryCtaText="Book a demo →"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore the platform"
        secondaryCtaLink="/content-orchestrator"
      />
    </div>
  );
};
