import React, { useEffect } from 'react';
import { Wallet, ShieldCheck } from 'lucide-react';
import { useApp } from '../../hooks/useApp';

export const WithdrawModal: React.FC = () => {
  const { withdrawModalOpen, setWithdrawModalOpen, rewardBalance } = useApp();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setWithdrawModalOpen(false);
      }
    };
    if (withdrawModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [withdrawModalOpen, setWithdrawModalOpen]);

  if (!withdrawModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="withdraw-modal-title"
      onClick={() => setWithdrawModalOpen(false)}
    >
      <div
        className="bg-white rounded-t-3xl sm:rounded-3xl max-w-sm w-full p-5 sm:p-6 shadow-2xl border border-slate-200 text-center animate-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-4 sm:hidden" />

        <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 mx-auto flex items-center justify-center mb-3">
          <Wallet className="w-6 h-6" />
        </div>
        <h3 id="withdraw-modal-title" className="text-base font-bold text-slate-900 mb-1">
          Simulated Demo Balance (₹{rewardBalance})
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          Withdrawal is <strong>simulated</strong> in this web prototype. For member security, no private bank accounts or payment credentials are stored.
        </p>
        <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-xs text-slate-600 mb-5 text-left space-y-1.5">
          <p className="font-bold text-slate-800 flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>How real distribution works:</span>
          </p>
          <p className="text-slate-500 leading-relaxed">
            Direct UPI transfer (PhonePe / GPay / Paytm) or mobile recharge coupon codes sent after manual verification.
          </p>
        </div>
        <button
          onClick={() => setWithdrawModalOpen(false)}
          className="w-full py-3 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition active:scale-95"
        >
          Samajh Gaya (Close)
        </button>
      </div>
    </div>
  );
};
