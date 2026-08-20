import React from 'react';
import { Link } from 'react-router-dom';
import { HeroParticleCanvas } from '@/components/common/HeroParticleCanvas';
import { BottomCtaBanner } from '@/components/common/BottomCtaBanner';
import { SalesSolutionGraphic } from '@/components/common/SolutionPageGraphics';

export const SalesSolutionPage: React.FC = () => {
  const customerConversations = [
    'Discovery conversations',
    'Customer questioning',
    'Needs identification',
    'Product conversations',
    'Relationship building',
  ];

  const objectionHandling = [
    'Price objections',
    'Competitor comparisons',
    'Product concerns',
    'Difficult questions',
    'Customer resistance',
  ];

  const commercialConversations = [
    'Negotiation & contract terms',
    'Influencing key buyers',
    'Closing commitments',
    'Stakeholder management',
    'Difficult customer conversations',
  ];

  const selliqPharmaFeatures = [
    'HCP & physician objections',
    'Clinical evidence discussions',
    'Product efficacy & safety questions',
    'Competitive molecule comparison',
    'Difficult medical stakeholder questions',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="a3-hero-iridescent relative overflow-hidden px-6 md:px-12 pt-8 md:pt-10 pb-12">
        <HeroParticleCanvas canvasId="sl-hero-canvas" />

        <div className="a3-blob a3-blob--cyan top-[-120px] left-[-70px] w-[480px] h-[480px] opacity-40 animate-floatSlow" />
        <div className="a3-blob a3-blob--pink bottom-[-130px] right-[-70px] w-[420px] h-[420px] opacity-30 animate-floatRev" />

        <div className="relative z-10 max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="a3-eyebrow text-coral-500">SOLUTION · SALES &amp; CUSTOMER CONVERSATIONS (SELLIQ)</div>
            <h1 className="mt-3.5 font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.12] tracking-tight text-ink-900">
              Practise the conversations that<br />
              <span className="a3-text-gradient">move deals forward.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-[54ch] text-slate-600">
              Give sales teams a safe environment to rehearse customer conversations, handle objections and improve how they communicate under pressure.
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <a href="#demo" className="px-7 py-3.5 text-sm font-bold text-black bg-white border border-[#008196] hover:bg-[#ff4081] hover:text-white hover:border-[#ff4081] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                Rehearse a sales conversation →
              </a>
              <Link to="/contact" className="px-7 py-3.5 text-sm font-bold text-black bg-white border border-[#008196] hover:bg-[#008196] hover:text-white hover:border-[#008196] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                Book a demo
              </Link>
            </div>
          </div>

          {/* Hero Visual Graphic */}
          <div className="relative">
            <SalesSolutionGraphic />
          </div>
        </div>
      </section>

      {/* 2. WHAT THEY CAN PRACTISE (3 CATEGORIES) */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-[64ch] mx-auto mb-12">
            <div className="a3-eyebrow text-coral-500">PRACTICE CAPABILITIES</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-ink-900">What sales teams can practise with A3CEND</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category 1 */}
            <div className="a3-glass-card p-7 rounded-2xl border border-slate-200 bg-white shadow-md">
              <span className="a3-tag a3-tag--coral text-[9px] mb-3 inline-block">1. CUSTOMER</span>
              <h3 className="text-xl font-extrabold text-ink-900">Customer Conversations</h3>
              <div className="mt-4 space-y-2.5">
                {customerConversations.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-coral-50 text-coral-500 flex items-center justify-center font-bold text-xs">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Category 2 */}
            <div className="a3-glass-card p-7 rounded-2xl border border-slate-200 bg-white shadow-md">
              <span className="a3-tag a3-tag--teal text-[9px] mb-3 inline-block">2. OBJECTIONS</span>
              <h3 className="text-xl font-extrabold text-ink-900">Objection Handling</h3>
              <div className="mt-4 space-y-2.5">
                {objectionHandling.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-xs">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Category 3 */}
            <div className="a3-glass-card p-7 rounded-2xl border border-slate-200 bg-white shadow-md">
              <span className="a3-tag a3-tag--coral text-[9px] mb-3 inline-block">3. COMMERCIAL</span>
              <h3 className="text-xl font-extrabold text-ink-900">Commercial Conversations</h3>
              <div className="mt-4 space-y-2.5">
                {commercialConversations.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-coral-50 text-coral-500 flex items-center justify-center font-bold text-xs">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PHARMA / SELLIQ DEEP DIVE */}
      <section className="py-16 px-6 md:px-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-[1320px] mx-auto">
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-r from-[#003c46] via-[#00505e] to-[#006070] text-white shadow-xl">
            <div className="font-archivo text-xs font-bold tracking-widest text-coral-500 uppercase">
              FOR PHARMA &amp; MEDICAL SALES (SELLIQ)
            </div>
            <h3 className="mt-2.5 text-2xl font-black text-white">Overcoming HCP Objections in Pharma Sales</h3>
            <p className="mt-2 text-sm text-slate-200 max-w-[66ch] leading-relaxed">
              Medical reps rehearse clinical trial efficacy data, RxNorm/Tata 1mg drug indices, and physician objection handling against AI doctor personas scored on the PEACE framework.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
              {selliqPharmaFeatures.map((f, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15 text-xs font-semibold text-white">
                  ✓ {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE EXPERIENCE */}
      <section id="demo" className="bg-gradient-to-b from-[#fff0f4] via-[#faf3f6] to-[#fff0f4] py-16 px-6 md:px-12 border-b border-[#ff4081]/15">
        <div className="max-w-[1320px] mx-auto">
          <div className="text-center max-w-[60ch] mx-auto mb-10">
            <div className="a3-eyebrow text-coral-500">INTERACTIVE EXPERIENCE</div>
            <h2 className="mt-2 text-3xl font-black text-ink-900">Rehearse a sales conversation</h2>
            <p className="mt-2 text-slate-600 text-sm">Select a sales or physician persona below to rehearse objection handling live.</p>
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

      {/* 6. FINAL CTA */}
      <BottomCtaBanner
        eyebrow="SALES TRANSFORMATION"
        heading="More practice. Better conversations. Greater readiness."
        subheading="Give your sales force the practice they need to win more deals."
        primaryCtaText="Book a demo →"
        primaryCtaLink="/contact"
        secondaryCtaText="Try Sales Simulation"
        secondaryCtaLink="/try/simulation"
      />
    </div>
  );
};
