import React from 'react';
import { Link } from 'react-router-dom';
import { HeroParticleCanvas } from '@/components/common/HeroParticleCanvas';

interface BottomCtaBannerProps {
  eyebrow?: string;
  heading: React.ReactNode;
  subheading?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export const BottomCtaBanner: React.FC<BottomCtaBannerProps> = ({
  eyebrow = 'READY TO BEGIN?',
  heading,
  subheading = "Book a 45-minute demo and see how A3CEND turns any content into a live, scored learning experience.",
  primaryCtaText = 'Book a demo →',
  primaryCtaLink = '/contact',
  secondaryCtaText,
  secondaryCtaLink,
}) => {
  const canvasId = React.useId().replace(/:/g, '');

  return (
    <section className="bg-slate-50/80 py-16 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto relative z-10">
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-[#008196] via-[#006070] to-[#ff4081] text-white p-10 sm:p-14 md:p-16 text-center shadow-2xl border border-white/20">
          
          {/* 3JS Interactive Particle Canvas */}
          <HeroParticleCanvas canvasId={`cta-particle-${canvasId}`} count={180} />

          {/* Ambient Glowing Glass Blobs */}
          <div className="a3-blob a3-blob--cyan top-[-100px] left-[-80px] w-[360px] h-[360px] opacity-35 animate-floatSlow pointer-events-none" />
          <div className="a3-blob a3-blob--pink bottom-[-100px] right-[-80px] w-[360px] h-[360px] opacity-30 animate-floatRev pointer-events-none" />

          {/* Glass Overlay Texture */}
          <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-[2px] pointer-events-none" />

          <div className="relative z-10 max-w-[840px] mx-auto">
            {/* Eyebrow badge */}
            {eyebrow && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 text-white font-archivo text-xs font-bold tracking-widest uppercase mb-4 shadow-sm backdrop-blur-md">
                <span className="a3-live-dot" />
                {eyebrow}
              </div>
            )}

            {/* Main Heading */}
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.12] tracking-tight drop-shadow-sm">
              {heading}
            </h2>

            {/* Subheading */}
            {subheading && (
              <p className="mt-4 text-base sm:text-lg text-white/90 max-w-[54ch] mx-auto leading-relaxed font-medium">
                {subheading}
              </p>
            )}

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center items-center">
              <Link
                to={primaryCtaLink}
                className="a3-btn bg-white text-ink-900 hover:bg-slate-100 font-heading font-extrabold text-base px-8 py-4 rounded-full shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
              >
                {primaryCtaText}
              </Link>

              {secondaryCtaText && secondaryCtaLink && (
                <Link
                  to={secondaryCtaLink}
                  className="a3-btn bg-white/15 hover:bg-white/25 text-white border border-white/40 font-heading font-bold text-base px-8 py-4 rounded-full backdrop-blur-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
