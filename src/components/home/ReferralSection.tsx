import React from 'react';
import { Share2, ArrowRight, Copy, MessageCircle } from 'lucide-react';
import { useApp } from '../../hooks/useApp';

export const ReferralSection: React.FC = () => {
  const { profile, copyReferralLink } = useApp();

  const handleShareWhatsAppReferral = () => {
    const text = encodeURIComponent(
      `Join me on KaamSaathi! Complete simple tasks, social follows & surveys to earn pure Indian Rupees (₹). Use my referral code: ${profile.referralCode} at https://kaamsaathi.in/join/${profile.referralCode}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-gradient-to-tr from-teal-900 via-slate-900 to-teal-950 text-white rounded-3xl p-5 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-800/80 text-teal-200 text-[11px] sm:text-xs font-bold">
              <Share2 className="w-3.5 h-3.5" />
              <span>Direct Referrals Only • NO Multi-Level Pyramid / MLM</span>
            </div>

            <h2 className="text-xl sm:text-3xl font-black tracking-tight leading-snug">
              Friends ko bhi community mein lao.
            </h2>

            <p className="text-xs sm:text-base text-teal-100/90 leading-relaxed">
              Jab aapka invited member eligible activity complete karta hai, applicable campaigns mein referral reward mil sakta hai.
            </p>

            {/* Direct Flow Visual */}
            <div className="bg-teal-950/80 p-3.5 sm:p-4 rounded-2xl border border-teal-800 text-xs text-teal-200 flex items-center justify-around text-center my-3 sm:my-4">
              <div className="flex flex-col items-center">
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-teal-700 text-white flex items-center justify-center font-bold shadow-md text-xs sm:text-sm">
                  You
                </span>
                <span className="mt-1 font-bold text-white text-[11px] sm:text-xs">Aap</span>
              </div>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400 animate-pulse shrink-0" />
              <div className="flex flex-col items-center">
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md text-xs sm:text-sm">
                  Direct
                </span>
                <span className="mt-1 font-bold text-white text-[11px] sm:text-xs">Your Friend</span>
              </div>
            </div>

            <p className="text-[10px] sm:text-[11px] text-teal-300/80">
              * Note: We strictly follow direct 1-tier invitations. No downstream pyramid, no multi-level commissions, and no lifetime guarantees.
            </p>

            {/* Referral Copy & WhatsApp Share Buttons */}
            <div className="pt-2 space-y-2">
              <div className="flex flex-col sm:flex-row items-stretch gap-2 bg-teal-950 p-2 rounded-2xl border border-teal-800">
                <div className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-teal-200 truncate flex-1">
                  <span>
                    Code: <strong className="text-white">{profile.referralCode}</strong>
                  </span>
                  <span className="text-teal-600">•</span>
                  <span className="truncate">kaamsaathi.in/join/{profile.referralCode}</span>
                </div>
                <button
                  onClick={copyReferralLink}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition shrink-0 active:scale-95"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Link</span>
                </button>
              </div>

              <button
                onClick={handleShareWhatsAppReferral}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs sm:text-sm transition duration-150 shadow-md shadow-emerald-500/20 active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Invite Friends via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
