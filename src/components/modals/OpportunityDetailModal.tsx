import React from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { useApp } from '../../hooks/useApp';

export const OpportunityDetailModal: React.FC = () => {
  const { selectedOpportunity, setSelectedOpportunity, startOpportunity } = useApp();

  if (!selectedOpportunity) return null;

  const handleParticipate = () => {
    const opp = selectedOpportunity;
    setSelectedOpportunity(null);
    startOpportunity(opp);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="opportunity-detail-title"
    >
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
              {selectedOpportunity.category}
            </span>
            <h3 id="opportunity-detail-title" className="text-lg font-black text-slate-900 mt-2">
              {selectedOpportunity.title}
            </h3>
          </div>
          <button
            onClick={() => setSelectedOpportunity(null)}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-xl"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-4 space-y-4 text-sm text-slate-700">
          <div className="grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div>
              <span className="text-xs text-slate-500 block">Estimated Reward</span>
              <span className="text-2xl font-black text-slate-900">
                {selectedOpportunity.rewardDisplay}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-500 block">Time Needed</span>
              <span className="text-base font-bold text-slate-800 mt-1 block">
                {selectedOpportunity.timeEstimate}
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-1 text-xs uppercase tracking-wider">
              About This Campaign
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {selectedOpportunity.description}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-2 text-xs uppercase tracking-wider">
              Rules & Requirements
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {selectedOpportunity.requirements.map((req, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-2 text-xs uppercase tracking-wider">
              Steps to Complete
            </h4>
            <ol className="space-y-1.5 text-xs text-slate-600 list-decimal pl-4">
              {selectedOpportunity.steps.map((st, i) => (
                <li key={i}>{st}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            onClick={() => setSelectedOpportunity(null)}
            className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900"
          >
            Close
          </button>
          <button
            onClick={handleParticipate}
            className="px-5 py-2.5 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl transition shadow-xs"
          >
            Participate Now
          </button>
        </div>
      </div>
    </div>
  );
};
