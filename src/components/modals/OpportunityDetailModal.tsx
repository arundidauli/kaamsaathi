import React, { useEffect } from 'react';
import { CheckCircle2, X, Clock, MessageSquare, Info } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { APP_CONFIG } from '../../config/appConfig';

export const OpportunityDetailModal: React.FC = () => {
  const { selectedOpportunity, setSelectedOpportunity } = useApp();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedOpportunity(null);
      }
    };
    if (selectedOpportunity) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedOpportunity, setSelectedOpportunity]);

  if (!selectedOpportunity) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="opportunity-detail-title"
      onClick={() => setSelectedOpportunity(null)}
    >
      <div
        className="bg-white rounded-t-3xl sm:rounded-3xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-slate-200 max-h-[88vh] sm:max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Drag Indicator Pill */}
        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-4 sm:hidden" />

        <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
              {selectedOpportunity.category}
            </span>
            <h3 id="opportunity-detail-title" className="text-base sm:text-lg font-black text-slate-900 mt-2">
              {selectedOpportunity.title}
            </h3>
          </div>
          <button
            onClick={() => setSelectedOpportunity(null)}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-xl transition"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-4 space-y-4 text-sm text-slate-700">
          <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3.5 sm:p-4 rounded-2xl border border-slate-200">
            <div>
              <span className="text-[11px] sm:text-xs text-slate-500 block">Estimated Reward</span>
              <span className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-0.5">
                {selectedOpportunity.rewardDisplay}
              </span>
            </div>
            <div>
              <span className="text-[11px] sm:text-xs text-slate-500 block">Time Needed</span>
              <span className="text-sm sm:text-base font-bold text-slate-800 mt-0.5 sm:mt-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-teal-600" />
                <span>{selectedOpportunity.timeEstimate}</span>
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-1 text-[11px] sm:text-xs uppercase tracking-wider">
              About This Opportunity
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {selectedOpportunity.description}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-2 text-[11px] sm:text-xs uppercase tracking-wider">
              Rules & Eligibility
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
            <h4 className="font-bold text-slate-900 mb-2 text-[11px] sm:text-xs uppercase tracking-wider">
              How It Works
            </h4>
            <ol className="space-y-1.5 text-xs text-slate-600 list-decimal pl-4">
              {selectedOpportunity.steps.map((st, i) => (
                <li key={i}>{st}</li>
              ))}
            </ol>
          </div>

          <div className="bg-teal-50 border border-teal-200 p-3.5 rounded-2xl flex items-start gap-2.5 text-xs text-teal-900">
            <Info className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Tasks and campaigns are shared directly within the verified KaamSaathi WhatsApp community. Join the free group to participate when slots open.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3 pb-2 sm:pb-0">
          <button
            onClick={() => setSelectedOpportunity(null)}
            className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900"
          >
            Close
          </button>
          <a
            href={APP_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition shadow-xs active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Join Community to Participate</span>
          </a>
        </div>
      </div>
    </div>
  );
};
