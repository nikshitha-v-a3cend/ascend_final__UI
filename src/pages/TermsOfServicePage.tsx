import React from 'react';
import { HeroParticleCanvas } from '@/components/common/HeroParticleCanvas';

export const TermsOfServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO BANNER */}
      <section className="a3-hero-iridescent relative overflow-hidden px-6 md:px-12 py-12 md:py-16 border-b border-slate-200/60">
        <HeroParticleCanvas canvasId="terms-canvas" count={120} />
        <div className="relative z-10 max-w-[960px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/95 border border-brand-600/20 rounded-full shadow-sm mb-4">
            <span className="text-[10px] font-black tracking-widest text-brand-600 font-heading uppercase">
              LEGAL &amp; COMPLIANCE
            </span>
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-ink-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            Last updated: August 2026
          </p>
        </div>
      </section>

      {/* TERMS CONTENT */}
      <div className="max-w-[880px] mx-auto px-6 md:px-12 py-14 leading-relaxed text-slate-700 space-y-10 text-sm md:text-base">
        <div>
          <h2 className="font-heading font-black text-2xl text-ink-900 mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing, subscribing to, or using the A3CEND Platform, including Content Orchestrator, REHEARSE, Skill Framework, and related APIs, you ("Customer", "Organization", or "User") agree to be bound by these Enterprise Terms of Service ("Terms"). If you are entering into these Terms on behalf of an entity, you represent that you have the authority to bind such entity.
          </p>
        </div>

        <div>
          <h2 className="font-heading font-black text-2xl text-ink-900 mb-3">
            2. Platform Access &amp; Subscriptions
          </h2>
          <p>
            Subject to the terms of your Enterprise Order Form or Subscription Agreement, A3CEND grants you a non-exclusive, non-transferable, worldwide right to access and utilize the Platform during the subscription term for internal business learning, content generation, and competency evaluation.
          </p>
        </div>

        <div>
          <h2 className="font-heading font-black text-2xl text-ink-900 mb-3">
            3. Customer Intellectual Property &amp; Content Ownership
          </h2>
          <p>
            <strong>You own your content.</strong> All intellectual property rights in and to your source materials, slide presentations, policies, transcripts, and custom skill rubrics ("Customer IP") remain the sole property of the Customer.
          </p>
          <p className="mt-3">
            A3CEND obtains only the limited license necessary to process, index, and render content and AI simulation responses within your secure tenant. A3CEND will never claim ownership over Customer IP.
          </p>
        </div>

        <div>
          <h2 className="font-heading font-black text-2xl text-ink-900 mb-3">
            4. AI Generation &amp; Simulation Disclaimers
          </h2>
          <p>
            The Platform uses generative artificial intelligence to produce learning modules and power simulated conversational roleplays. While A3CEND implements strict brand governance and rubric constraints:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li>AI-generated materials are intended for workplace educational and rehearsal purposes.</li>
            <li>Administrators maintain final editorial review and approval over published curriculum.</li>
            <li>Simulated feedback scores represent behavioral indicators and readiness assessments according to the configured competency model.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading font-black text-2xl text-ink-900 mb-3">
            5. Service Availability &amp; Support
          </h2>
          <p>
            A3CEND provides a 99.9% uptime Service Level Agreement (SLA) for enterprise tier subscriptions, backed by 24/7 technical support, automated failovers, and redundant multi-region cloud hosting.
          </p>
        </div>

        <div>
          <h2 className="font-heading font-black text-2xl text-ink-900 mb-3">
            6. Governing Law &amp; Dispute Resolution
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana, India.
          </p>
        </div>
      </div>
    </div>
  );
};
