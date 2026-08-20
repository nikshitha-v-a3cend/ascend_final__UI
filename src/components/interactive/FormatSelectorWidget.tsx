import React, { useState } from 'react';
import { FORMAT_OPTIONS } from '@/data/orchestratorData';

import {
  ElearningFormatGraphic,
  MicroVideoFormatGraphic,
  MicroCardsFormatGraphic,
  AssessmentsFormatGraphic,
  SimulationsFormatGraphic,
} from '@/components/common/OrchestratorFormatGraphics';

export const FormatSelectorWidget: React.FC = () => {
  const [activeId, setActiveId] = useState('elearning');
  const activeFormat = FORMAT_OPTIONS.find((f) => f.id === activeId) || FORMAT_OPTIONS[0];

  const renderGraphicForFormat = (id: string) => {
    switch (id) {
      case 'elearning':
        return <ElearningFormatGraphic />;
      case 'video':
        return <MicroVideoFormatGraphic />;
      case 'cards':
        return <MicroCardsFormatGraphic />;
      case 'assessments':
        return <AssessmentsFormatGraphic />;
      case 'simulations':
        return <SimulationsFormatGraphic />;
      default:
        return <ElearningFormatGraphic />;
    }
  };

  return (
    <div className="mt-6 grid grid-cols-1 lg:grid-cols-[330px_1fr] gap-6 items-stretch">
      {/* Format Selector Column */}
      <div className="flex flex-col gap-3">
        {FORMAT_OPTIONS.map((f) => {
          const isActive = f.id === activeId;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveId(f.id)}
              className={`a3-format-btn a3-focusable text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${isActive
                  ? 'bg-gradient-to-r from-brand-600 to-brand-400 text-white border-transparent shadow-md'
                  : 'bg-white/85 border-slate-200 hover:border-brand-400 text-ink-900'
                }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`font-mono text-xs font-bold ${isActive ? 'text-brand-100' : 'text-slate-400'
                    }`}
                >
                  0{f.n}
                </span>
                <span
                  className={`text-sm font-bold leading-tight ${isActive ? 'text-white' : 'text-ink-900'
                    }`}
                >
                  {f.name}
                </span>
              </div>
              <span className={`text-base ${isActive ? 'text-white' : 'text-slate-400'}`}>→</span>
            </button>
          );
        })}
      </div>

      {/* Live Preview Display Panel */}
      <div className="a3-glass-card rounded-[24px] overflow-hidden flex flex-col justify-between bg-white border border-slate-200 shadow-xl">
        <div className="relative w-full p-4 sm:p-6 bg-gradient-to-br from-[#e3f5f8]/60 to-[#f1fafb]/90 flex items-center justify-center min-h-[360px]">
          {renderGraphicForFormat(activeId)}
        </div>

        <div className="p-7 md:p-8">
          <div className="font-mono text-xs font-bold text-brand-600">
            0{activeFormat.n} · GENERATED FORMAT
          </div>
          <h4 className="mt-2 text-2xl font-extrabold text-ink-900 leading-tight">
            {activeFormat.name}
          </h4>
          <p className="mt-3 text-base leading-relaxed text-slate-600 max-w-[60ch]">
            {activeFormat.def}
          </p>
        </div>
      </div>
    </div>
  );
};
