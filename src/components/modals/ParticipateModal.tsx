import React, { useEffect } from 'react';
import { Smartphone, CheckCircle } from 'lucide-react';
import { useApp } from '../../hooks/useApp';

export const ParticipateModal: React.FC = () => {
  const {
    participateModalOpen,
    setParticipateModalOpen,
    participatingOpp,
    profile,
    confirmTaskCompletion,
  } = useApp();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setParticipateModalOpen(false);
      }
    };
    if (participateModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [participateModalOpen, setParticipateModalOpen]);

  if (!participateModalOpen || !participatingOpp) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="participate-modal-title"
      onClick={() => setParticipateModalOpen(false)}
    >
      <div
        className="bg-white rounded-t-3xl sm:rounded-3xl max-w-md w-full p-5 sm:p-6 shadow-2xl border border-slate-200 animate-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-4 sm:hidden" />

        <div className="text-center space-y-2 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 mx-auto flex items-center justify-center shadow-xs">
            <Smartphone className="w-6 h-6" />
          </div>
          <h3 id="participate-modal-title" className="text-lg font-black text-slate-900">
            Task Simulation
          </h3>
          <p className="text-xs text-slate-500">
            Participating as <strong className="text-slate-800">{profile.name}</strong>
          </p>
        </div>

        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 mb-4 text-left">
          <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Campaign</p>
          <p className="text-sm font-bold text-slate-800">{participatingOpp.title}</p>
          <div className="flex justify-between items-center pt-2 border-t border-slate-200/80 text-xs">
            <span className="text-slate-500">Instant Demo Reward:</span>
            <span className="font-black text-emerald-700 text-base">
              +{participatingOpp.rewardDisplay}
            </span>
          </div>
        </div>

        <div className="p-3.5 bg-amber-50 border border-amber-200/90 rounded-2xl text-xs text-amber-900 mb-5">
          <p className="font-bold mb-0.5">Prototype Note:</p>
          <p className="text-amber-800 leading-relaxed">
            Clicking below simulates a verified response and credits pure Indian Rupees to your balance immediately.
          </p>
        </div>

        <div className="flex items-center gap-3 pb-2 sm:pb-0">
          <button
            onClick={() => setParticipateModalOpen(false)}
            className="w-1/2 py-3 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition active:scale-95"
          >
            Cancel
          </button>
          <button
            onClick={confirmTaskCompletion}
            className="w-1/2 py-3 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl transition shadow-xs flex items-center justify-center gap-1.5 active:scale-95"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Simulate Complete</span>
          </button>
        </div>
      </div>
    </div>
  );
};
