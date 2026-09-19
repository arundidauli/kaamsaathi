import React from 'react';
import { Smartphone } from 'lucide-react';
import { useApp } from '../../hooks/useApp';

export const ParticipateModal: React.FC = () => {
  const {
    participateModalOpen,
    setParticipateModalOpen,
    participatingOpp,
    profile,
    confirmTaskCompletion,
  } = useApp();

  if (!participateModalOpen || !participatingOpp) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="participate-modal-title"
    >
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
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
          <p className="text-xs text-slate-400 uppercase font-bold">Campaign</p>
          <p className="text-sm font-bold text-slate-800">{participatingOpp.title}</p>
          <div className="flex justify-between items-center pt-2 border-t border-slate-200/80 text-xs">
            <span className="text-slate-500">Instant Demo Reward:</span>
            <span className="font-black text-emerald-700 text-sm">
              +{participatingOpp.rewardDisplay}
            </span>
          </div>
        </div>

        <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 mb-5">
          <p className="font-bold mb-0.5">Prototype Note:</p>
          <p className="text-amber-800">
            Clicking below simulates a completed response and credits your demo balance immediately.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setParticipateModalOpen(false)}
            className="w-1/2 py-2.5 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
          >
            Cancel
          </button>
          <button
            onClick={confirmTaskCompletion}
            className="w-1/2 py-2.5 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl transition shadow-xs"
          >
            Simulate Complete
          </button>
        </div>
      </div>
    </div>
  );
};
