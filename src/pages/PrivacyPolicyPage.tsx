import React from 'react';
import { Link } from 'react-router-dom';
import { HeroParticleCanvas } from '@/components/common/HeroParticleCanvas';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO BANNER */}
      <section className="a3-hero-iridescent relative overflow-hidden px-6 md:px-12 py-12 md:py-16 border-b border-slate-200/60">
        <HeroParticleCanvas canvasId="privacy-canvas" count={120} />
        <div className="relative z-10 max-w-[960px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/95 border border-brand-600/20 rounded-full shadow-sm mb-4">
            <span className="text-[10px] font-black tracking-widest text-brand-600 font-heading uppercase">
              LEGAL &amp; COMPLIANCE
            </span>
          </div>
          <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-ink-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            Last Updated: August 21, 2026 · Effective Date: January 1, 2026
          </p>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <div className="max-w-[880px] mx-auto px-6 md:px-12 py-14 leading-relaxed text-slate-700 space-y-10 text-sm md:text-base">
        <div>
          <h2 className="font-heading font-black text-2xl text-ink-900 mb-3">
            1. Overview &amp; Commitment to Enterprise Security
          </h2>
          <p>
            Ascend Business Solutions Pvt. Ltd. ("A3CEND", "we", "our", or "us") provides an AI-powered Enterprise Learning Operating System (the "Platform"). We are committed to protecting the privacy, security, and confidentiality of all organizations, administrators, creators, and learners who use our services.
          </p>
          <p className="mt-3">
            This Privacy Policy explains what information we collect, how it is used, how it is stored, and the strict safeguards we maintain to ensure your proprietary company intellectual property is never compromised.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-brand-50 border border-brand-200">
          <div className="flex items-center gap-2 font-heading font-black text-brand-700 text-base mb-2">
            <span>🛡️</span> Zero Data Training Guarantee on Customer IP
          </div>
          <p className="text-xs md:text-sm text-slate-700">
            <strong>Customer proprietary data is 100% isolated.</strong> Any documentation, slide decks, PDFs, standard operating procedures (SOPs), audio recordings, video streams, or conversational transcripts uploaded or processed through the Content Orchestrator and REHEARSE are never used to train public third-party foundation models (such as OpenAI, Anthropic, or Google public LLMs).
          </p>
        </div>

        <div>
          <h2 className="font-heading font-black text-2xl text-ink-900 mb-3">
            2. Information We Collect
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-heading font-extrabold text-base text-ink-900">A. Account &amp; Corporate Information</h3>
              <p className="mt-1">
                Name, corporate email address, job title, company name, department, single sign-on (SSO) identifiers, and organizational hierarchy provided by your company administrator.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-base text-ink-900">B. Ingested Content &amp; Knowledge Assets</h3>
              <p className="mt-1">
                Files, policies, training manuals, presentation slides, and compliance frameworks ingested into the Content Orchestrator for generative curriculum authoring.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-base text-ink-900">C. AI Simulation &amp; Audio-Visual Signals</h3>
              <p className="mt-1">
                During interactive REHEARSE sessions, we process real-time voice audio and video streams solely for real-time natural language processing, tone analysis, vocal pacing, and rubric scoring. Video streams are analyzed in volatile memory for live feedback unless explicitly saved by the learner or enterprise tenant.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-heading font-black text-2xl text-ink-900 mb-3">
            3. How We Use Information
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To deliver, maintain, and optimize the A3CEND Learning OS and simulation avatars.</li>
            <li>To generate automated lesson summaries, interactive flashcards, assessments, and video scripts on your tenant's brand.</li>
            <li>To compute individual and cohort readiness heatmaps against your proprietary skill frameworks.</li>
            <li>To sync completion and capability metrics back into your LMS / HRIS via secure REST, SCORM, and xAPI connections.</li>
            <li>To detect security anomalies, prevent unauthorized access, and fulfill SOC-2 Type II audit logging requirements.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading font-black text-2xl text-ink-900 mb-3">
            4. Enterprise Data Security &amp; Compliance
          </h2>
          <p>
            We implement comprehensive technical and organizational safeguards:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li><strong>Encryption:</strong> AES-256 encryption at rest and TLS 1.3 encryption in transit for all network traffic.</li>
            <li><strong>Tenant Isolation:</strong> Multi-tenant logical isolation with role-based access control (RBAC) preventing cross-tenant access.</li>
            <li><strong>Compliance:</strong> Built to meet SOC-2 Type II standards, GDPR (EU General Data Protection Regulation), and CCPA (California Consumer Privacy Act).</li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading font-black text-2xl text-ink-900 mb-3">
            5. Your Rights &amp; Data Subject Access Requests
          </h2>
          <p>
            Depending on your jurisdiction, you have the right to access, rectify, port, or request the deletion of your personal data. For requests regarding enterprise-managed learner accounts, please contact your company's L&amp;D/HR administrator, or contact our Data Protection Officer directly.
          </p>
        </div>

        <div>
          <h2 className="font-heading font-black text-2xl text-ink-900 mb-3">
            6. Contact Us
          </h2>
          <p>
            If you have questions regarding this Privacy Policy or our security posture:
          </p>
          <div className="mt-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="font-bold text-ink-900">Ascend Business Solutions Pvt. Ltd.</div>
            <div className="text-xs text-slate-600 mt-1">Attn: Data Protection &amp; Compliance Office</div>
            <div className="text-xs text-slate-600">T-Hub, Hyderabad Knowledge City, Telangana 500081, India</div>
            <div className="text-xs text-brand-600 font-semibold mt-2">Email: privacy@a3cend.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};
