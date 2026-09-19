import React from 'react';
import { useApp } from '../../hooks/useApp';

interface TermsAndPrivacyViewProps {
  type: 'terms' | 'privacy';
}

export const TermsAndPrivacyView: React.FC<TermsAndPrivacyViewProps> = ({ type }) => {
  const { navigateTo } = useApp();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-left">
      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-5">
        <button
          onClick={() => navigateTo('home')}
          className="text-xs font-bold text-teal-700 hover:underline inline-flex items-center gap-1 mb-2"
        >
          ← Wapas Home Page Par
        </button>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
          {type === 'terms' ? 'Rules & Community Terms' : 'Privacy Policy'}
        </h1>

        <p className="text-xs text-slate-400">Last updated: September 2026 • Honest Guidelines</p>

        {type === 'terms' ? (
          <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
            <p>
              KaamSaathi is an open digital community built for Indian smartphone users to find genuine online feedback,
              testing, and survey opportunities.
            </p>
            <h3 className="text-sm font-bold text-slate-900">1. Zero Investment Policy</h3>
            <p>
              Joining KaamSaathi is strictly free. We will never ask you to pay money, purchase plans, or deposit fees to
              earn rewards or access tasks.
            </p>
            <h3 className="text-sm font-bold text-slate-900">2. No Guaranteed Income</h3>
            <p>
              Participation is voluntary. Rewards depend strictly on available brand campaigns and verified submissions.
              We do not guarantee a fixed daily or monthly income.
            </p>
            <h3 className="text-sm font-bold text-slate-900">3. Honest Submissions</h3>
            <p>Fake screenshots or fraudulent inputs will result in immediate disqualification.</p>
            <h3 className="text-sm font-bold text-slate-900">4. Referral Integrity</h3>
            <p>
              Our referral model is strictly direct (1-tier). We prohibit pyramid schemes, multi-level downlines, or
              misleading claims.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
            <p>Aapki privacy hamare liye zaroori hai. Here is how KaamSaathi respects member data:</p>
            <h3 className="text-sm font-bold text-slate-900">1. Minimal Information</h3>
            <p>
              We only ask for details essential to deliver campaign opportunities (such as city or phone number for
              WhatsApp delivery).
            </p>
            <h3 className="text-sm font-bold text-slate-900">2. No Selling of Phone Numbers</h3>
            <p>
              Your contact info is never shared or sold to unsolicited loan brokers or third-party telemarketers.
            </p>
            <h3 className="text-sm font-bold text-slate-900">3. Local Storage in Prototype</h3>
            <p>
              This web app prototype stores changes locally in your browser’s localStorage. No private data is
              transmitted to external servers.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
