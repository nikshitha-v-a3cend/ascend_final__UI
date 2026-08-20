import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CYCLE_STAGES } from '@/data/homeData';

const STAGE_ICONS: Record<string, React.ReactNode> = {
  ASSESS: (
    <>
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 14l2 2 4-4" />
    </>
  ),
  CREATE: (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </>
  ),
  SIMULATE: (
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  ),
  MEASURE: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-4 3 3 5-6" />
    </>
  ),
};

export const ApproachInteractiveCycle: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStage = CYCLE_STAGES[activeIdx];

  const cycleStrip = [
    { name: 'Assess', sub: 'Baseline', arrow: '→' },
    { name: 'Create', sub: 'Content', arrow: '→' },
    { name: 'Simulate', sub: 'REHEARSE', arrow: '→' },
    { name: 'Measure', sub: 'Readiness', arrow: '' },
  ];

  return (
    <div className="mt-12">
      {/* 4 Stage Node Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CYCLE_STAGES.map((stage, i) => {
          const isActive = i === activeIdx;
          return (
            <button
              key={stage.name}
              type="button"
              onClick={() => setActiveIdx(i)}
              className="a3-cycle-node a3-focusable relative text-left w-full rounded-3xl p-7 overflow-hidden transition-all duration-300"
              style={{
                background: isActive ? stage.hueGrad : 'rgba(255,255,255,0.95)',
                border: isActive ? '1.5px solid transparent' : '1.5px solid rgba(227,245,248,0.95)',
                boxShadow: isActive
                  ? `0 20px 40px -14px rgba(${stage.hueRgb},0.45)`
                  : '0 6px 18px -6px rgba(12,18,22,0.08)',
              }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-mono font-extrabold text-sm transition-colors"
                  style={{
                    background: isActive ? 'rgba(255,255,255,0.22)' : stage.hueGrad,
                    color: isActive ? '#ffffff' : '#ffffff',
                  }}
                >
                  0{stage.n}
                </div>
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={isActive ? '#ffffff' : stage.hue}
                  strokeWidth="2"
                >
                  {STAGE_ICONS[stage.name]}
                </svg>
              </div>

              <div
                className="mt-4 font-archivo text-xs font-bold tracking-widest uppercase"
                style={{ color: isActive ? 'rgba(255,255,255,0.75)' : '#93a2a9' }}
              >
                {stage.tag}
              </div>
              <div
                className="mt-2 font-archivo font-extrabold text-2xl tracking-tight"
                style={{ color: isActive ? '#ffffff' : '#0c1216' }}
              >
                {stage.name}
              </div>
              <div
                className="mt-2 text-sm leading-snug"
                style={{ color: isActive ? 'rgba(255,255,255,0.88)' : '#47555d' }}
              >
                {stage.shift}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Detail Panel */}
      <div className="a3-glass-card mt-6 p-8 md:p-10 rounded-[26px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-3.5 flex-wrap">
              <span
                className="font-archivo font-black text-3xl md:text-4xl tracking-tight"
                style={{ color: activeStage.hue }}
              >
                {activeStage.name}
              </span>
              <span
                className="text-xs font-bold text-white px-4 py-1.5 rounded-full shadow-md"
                style={{ background: activeStage.hueGrad }}
              >
                {activeStage.solution}
              </span>
            </div>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600">
              {activeStage.detail}
            </p>
            <Link
              to={activeStage.link}
              className="a3-focusable mt-6 inline-flex items-center gap-2 font-bold text-base hover:gap-3 transition-all"
              style={{ color: activeStage.hue }}
            >
              {activeStage.linkLabel} →
            </Link>
          </div>

          <div className="flex flex-col gap-3.5">
            {activeStage.points.map((pt, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-2xl p-4.5"
                style={{
                  background: activeStage.hueTint,
                  border: `1.5px solid ${activeStage.hueBorder}`,
                }}
              >
                <span className="font-extrabold text-lg shrink-0" style={{ color: activeStage.hue }}>
                  →
                </span>
                <span className="text-sm md:text-base text-slate-700 font-medium leading-normal">
                  {pt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cycle Strip (With Solid White Card Background & High Contrast) */}
      <div className="mt-5 bg-white border border-[#e3f5f8] shadow-lg rounded-2xl px-7 py-5 flex items-center justify-between gap-4 flex-wrap">
        <span className="a3-eyebrow text-brand-600">THE UNDERLYING CYCLE</span>
        <div className="flex items-center gap-3 flex-wrap ml-auto">
          {cycleStrip.map((s, idx) => (
            <React.Fragment key={idx}>
              <span className="font-archivo font-extrabold text-base text-ink-900">
                {s.name}
                <span className="text-slate-400 font-medium text-xs ml-2">{s.sub}</span>
              </span>
              {s.arrow && <span className="text-brand-600 font-extrabold">{s.arrow}</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
