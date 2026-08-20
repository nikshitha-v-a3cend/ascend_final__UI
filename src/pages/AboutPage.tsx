import React from 'react';
import { Link } from 'react-router-dom';
import { HeroParticleCanvas } from '@/components/common/HeroParticleCanvas';
import { BottomCtaBanner } from '@/components/common/BottomCtaBanner';
import { TEAM_MEMBERS } from '@/data/aboutData';
import { BRANDS } from '@/data/homeData';

import logoImg from '@/assets/a3cend-logo-crop.png';
import teamImg from '@/assets/img-coaching-team.png';
import heroUiImg from '@/assets/hero-platform-ui.png';

import { useScrollReveal } from '@/hooks/useScrollReveal';

export const AboutPage: React.FC = () => {
  useScrollReveal();
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#002f38] via-[#004855] to-[#003e4a] text-white min-h-[520px] px-6 md:px-12 pt-8 md:pt-10 pb-12 overflow-hidden">
        <HeroParticleCanvas canvasId="about-canvas" count={280} />
        <div className="absolute inset-0 bg-[url('assets/bg-topo.svg')] bg-[length:720px] opacity-5 pointer-events-none z-1" />

        <div className="relative z-10 max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-5">
                <span className="w-2 h-2 rounded-full bg-[#04aac4] animate-pulse" />
                <span className="text-xs font-bold text-white/85 tracking-widest uppercase">
                  About A3CEND
                </span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
                Built by Practitioners.<br />
                <span className="bg-gradient-to-r from-coral-500 to-coral-700 bg-clip-text text-transparent">
                  Driven by Purpose.
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-[52ch] text-white/80">
                A3CEND was founded on a simple belief — capability is built in practice. We combine the power of AI with the wisdom of human coaching to help organizations unlock real performance, not just attendance.
              </p>

              {/* Feature Pills */}
              <div className="mt-7 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-400/20 border border-brand-400/40 rounded-full text-xs font-bold text-[#c2f0f7]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#04aac4]" />
                  Human-Led Coaching
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-400/20 border border-brand-400/40 rounded-full text-xs font-bold text-[#c2f0f7]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#04aac4]" />
                  AI-Powered Simulations
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-coral-500/20 border border-coral-500/40 rounded-full text-xs font-bold text-[#ffc2d6]">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral-500" />
                  Data-Driven Outcomes
                </span>
              </div>
            </div>

            {/* Right Team Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <img src={teamImg} alt="A3CEND Team" className="w-full h-auto block rounded-3xl" />
              </div>

              {/* Top Badge */}
              <div className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-md border border-brand-600/20 p-3 rounded-2xl flex items-center gap-2.5 shadow-xl animate-floatSm">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-brand-600 to-brand-400 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <div className="font-heading font-bold text-xs text-brand-600">Capability Orbit Framework</div>
                  <div className="text-[10px] text-slate-500">REHEARSE · LEAP LMS</div>
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="absolute -bottom-3 -left-3 bg-white/95 backdrop-blur-md border border-coral-500/20 px-4 py-2.5 rounded-2xl shadow-xl animate-floatSm">
                <div className="font-heading font-bold text-xs text-coral-500">Global Footprint</div>
                <div className="text-[10px] text-slate-500">Hyderabad HQ (T-Hub) · US · EU</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="bg-gradient-to-b from-[#eaf6f8] via-[#f2fafc] to-[#eaf6f8] py-16 px-6 md:px-12 border-b border-[#008196]/15">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div>
            <div className="a3-eyebrow text-brand-600">Our Story</div>
            <h2 className="mt-2.5 text-3xl sm:text-4xl font-black text-ink-900 leading-tight">
              From Insight to Impact
            </h2>
            <p className="mt-3.5 text-base text-slate-600 leading-relaxed max-w-[44ch]">
              A3CEND began with a real challenge — leaders had the knowledge, but not the consistent practice or feedback loops to apply it. We built a platform that brings Content, Context, and Coaching together to create measurable, lasting change.
            </p>
            <a href="#team" className="mt-6 inline-flex items-center gap-2 font-bold text-sm text-brand-600 hover:gap-3 transition-all">
              Meet our founders →
            </a>
          </div>

          {/* Mission / Vision / Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-a3-surface rounded-2xl border border-brand-600/15">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-brand-600 to-brand-400 flex items-center justify-center mb-3.5 text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div className="font-heading font-extrabold text-base text-ink-900">Our Mission</div>
              <p className="mt-2 text-xs md:text-sm text-slate-600 leading-relaxed">
                To build the world’s most effective capability building platform that empowers people to practice, grow, and lead with impact.
              </p>
            </div>

            <div className="p-6 bg-a3-surface rounded-2xl border border-coral-500/15">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-coral-500 to-coral-700 flex items-center justify-center mb-3.5 text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M2 12s3.27-7 10-7 10 7 10 7-3.27 7-10 7S2 12 2 12z" />
                </svg>
              </div>
              <div className="font-heading font-extrabold text-base text-ink-900">Our Vision</div>
              <p className="mt-2 text-xs md:text-sm text-slate-600 leading-relaxed">
                A world where every professional has the confidence, skills, and mindset to drive extraordinary outcomes.
              </p>
            </div>

            <div className="sm:col-span-2 p-6 bg-gradient-to-r from-brand-600/5 to-brand-400/5 rounded-2xl border border-brand-600/15">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-a3-teal-900 to-brand-600 flex items-center justify-center mb-3.5 text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <path d="M8 12l3 3 5-5" />
                </svg>
              </div>
              <div className="font-heading font-extrabold text-base text-ink-900">Our Values</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-brand-600/10 border border-brand-600/20 rounded-full text-xs font-bold text-brand-600">
                  Human First
                </span>
                <span className="px-3 py-1 bg-coral-500/10 border border-coral-500/20 rounded-full text-xs font-bold text-coral-500">
                  Relentless Impact
                </span>
                <span className="px-3 py-1 bg-brand-600/10 border border-brand-600/20 rounded-full text-xs font-bold text-brand-600">
                  Integrity &amp; Trust
                </span>
                <span className="px-3 py-1 bg-coral-500/10 border border-coral-500/20 rounded-full text-xs font-bold text-coral-500">
                  Continuous Evolution
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section id="team" className="bg-gradient-to-b from-[#fff0f4] via-[#faf3f6] to-[#fff0f4] py-16 px-6 md:px-12 border-b border-[#ff4081]/15">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center mb-10">
            <div className="a3-eyebrow text-brand-600">The team</div>
            <h2 className="mt-2.5 text-3xl sm:text-4xl font-black text-ink-900">
              Experienced. Global. Practitioner-Led.
            </h2>
            <p className="mt-2.5 text-sm text-slate-600 max-w-[56ch] mx-auto">
              A diverse leadership team with deep domain expertise in strategy, coaching, analytics, and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((m) => (
              <div
                key={m.name}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.07)] transition-all duration-300 text-center"
              >
                {/* Centered Circular Avatar with Teal LinkedIn Badge */}
                <div className="relative w-28 h-28 mx-auto mb-4">
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full h-full rounded-full overflow-hidden border border-slate-100 shadow-sm group"
                  >
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </a>

                  {/* LinkedIn Circular Badge */}
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#008196] hover:bg-[#04aac4] border-2 border-white text-white flex items-center justify-center shadow-md transition-colors"
                    title={`View ${m.name}'s LinkedIn`}
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                </div>

                {/* Display Name */}
                <h3 className="font-heading font-black text-xl text-ink-900 leading-tight">
                  {m.name}
                </h3>

                {/* Optional Subtitle */}
                {m.subTitle && (
                  <div className="font-bold text-xs text-coral-500 mt-0.5">
                    {m.subTitle}
                  </div>
                )}

                {/* Description / Bio */}
                <p className="mt-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed max-w-[34ch] mx-auto font-medium">
                  {m.bio}
                </p>

                {/* Email Link at Bottom - Tightened Spacing */}
                {m.email && (
                  <div className="mt-3">
                    <a
                      href={`mailto:${m.email}`}
                      className="text-xs sm:text-sm font-semibold text-[#fa6793] hover:text-coral-600 transition-colors inline-block"
                    >
                      {m.email}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL FOOTPRINT */}
      <section className="bg-gradient-to-b from-[#eef7fa] via-[#f5fafc] to-[#ebf5f7] py-16 px-6 md:px-12 border-b border-[#008196]/15">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="a3-eyebrow text-brand-600">Global Footprint</div>
            <h2 className="mt-2.5 text-3xl font-black text-ink-900 leading-tight">
              Local Presence.<br />Global Reach.
            </h2>
            <p className="mt-3 text.sm md:text-base text-slate-600 leading-relaxed">
              Headquartered in Hyderabad (T-Hub Phase 2), India with active operating teams and coach networks in North America and Europe.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-brand-600/15"
              >
                <span className="text-xl">📍</span>
                <div>
                  <div className="font-bold text-brand-600 text-xs uppercase tracking-wider">India HQ</div>
                  <div className="text-xs md:text-sm font-semibold text-ink-900 mt-0.5">
                    T-Hub Phase 2, Raidurgam Panmaktha, Hyderabad, Telangana 500081
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-coral-500/15">
                <span className="text-xl">📍</span>
                <div>
                  <div className="font-bold text-coral-500 text-xs uppercase tracking-wider">US &amp; EU Hubs</div>
                  <div className="text-xs md:text-sm font-semibold text-ink-900 mt-0.5">
                    Executive coaching network &amp; client operations
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-brand-600/10">
            <img src={heroUiImg} alt="A3CEND Platform" className="w-full h-auto block" />
          </div>
        </div>
      </section>

      {/* TRUSTED MARQUEE */}
      <section className="bg-white py-9 border-y border-slate-100 overflow-hidden">
        <div className="text-center mb-4">
          <span className="text-[11px] font-extrabold tracking-widest uppercase text-slate-400">
            Trusted by Global Leaders
          </span>
        </div>
        <div className="w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="a3-marquee-track flex gap-12 items-center">
            {BRANDS.concat(BRANDS).map((b, i) => (
              <span key={i} className="font-archivo font-black text-lg text-ink-900 opacity-55 uppercase tracking-tight">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* A3CEND ADVANTAGE */}
      <BottomCtaBanner
        eyebrow="HUMAN-LED, TECH-ENABLED"
        heading="Ready to transform your leadership capability?"
        subheading="Partner with A3CEND to build a culture of continuous practice, measurable growth, and real impact."
        primaryCtaText="Book a demo →"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore our approach"
        secondaryCtaLink="/about#approach"
      />
    </div>
  );
};
