import React from 'react';
import { Share2, ArrowRight, MessageCircle, MessageSquare } from 'lucide-react';
import { APP_CONFIG } from '../../config/appConfig';

export const ReferralSection: React.FC = () => {
  const handleShareWhatsAppReferral = () => {
    const text = encodeURIComponent(
      `Check out KaamSaathi! Genuine Indian community to complete creator follows, surveys, and app testing for pure Indian Rupee (₹) rewards. 100% Free: https://kaamsaathi.in`
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
              Jab aapka invited member eligible community activity complete karta hai, applicable campaigns mein transparent direct referral reward milta hai.
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
              * Note: We strictly follow direct 1-tier invitations. No downstream pyramid, no multi-level commissions, and no false guarantees.
            </p>

            {/* Referral Sharing Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={handleShareWhatsAppReferral}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs sm:text-sm transition duration-150 shadow-md shadow-emerald-500/20 active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Tell Friends on WhatsApp</span>
              </button>

              <a
                href={APP_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm transition duration-150 active:scale-98"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Join Community</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
