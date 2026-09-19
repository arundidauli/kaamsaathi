import React from 'react';
import { Wallet } from 'lucide-react';
import { useApp } from '../../hooks/useApp';

export const WithdrawModal: React.FC = () => {
  const { withdrawModalOpen, setWithdrawModalOpen } = useApp();

  if (!withdrawModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="withdraw-modal-title"
    >
      <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 text-center animate-in fade-in zoom-in-95 duration-150">
        <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 mx-auto flex items-center justify-center mb-4">
          <Wallet className="w-6 h-6" />
        </div>
        <h3 id="withdraw-modal-title" className="text-base font-bold text-slate-900 mb-2">
          Simulated Demo Balance
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          Withdrawal is <strong>not connected</strong> in this prototype. For member security, no bank accounts or payment gateways are queried.
        </p>
        <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-xs text-slate-600 mb-5 text-left">
          <p className="font-bold text-slate-800 mb-1">How real distribution works:</p>
          <p>Direct UPI or mobile recharge coupons after manual verification by community managers.</p>
        </div>
        <button
          onClick={() => setWithdrawModalOpen(false)}
          className="w-full py-2.5 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
        >
          Samajh Gaya (Close)
        </button>
      </div>
    </div>
  );
};
