import React from 'react';
import {
  Share2,
  ArrowRight,
  ArrowDown,
  MessageCircle,
  MessageSquare,
  User,
  Users,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { APP_CONFIG } from '../../config/appConfig';

export const ReferralSection: React.FC = () => {
  const handleShareWhatsAppReferral = () => {
    const text = encodeURIComponent(
      `Check out KaamSaathi! Genuine Indian community jahan free time mein creator follows aur surveys karke direct paise kama sakte hain. 100% Free: https://kaamsaathi.in`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-tr from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-teal-500/20">
          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            {/* Header Badge & Title */}
            <div className="text-center sm:text-left space-y-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-800/80 text-teal-200 text-[11px] sm:text-xs font-bold border border-teal-700/60">
                <Share2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct 1-Tier Referrals • Strictly NO Pyramid / MLM</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-snug">
                Friends ko bhi community mein lao.
              </h2>

              <p className="text-xs sm:text-sm text-teal-100/90 max-w-2xl leading-relaxed">
                Jab aapka invited friend community activity join karta hai, applicable campaigns mein direct referral benefit milta hai. Bilkul seedha aur transparent system.
              </p>
            </div>

            {/* Enhanced Responsive Direct Flow Visual */}
            <div className="my-6 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-950/70 border border-teal-800/60 shadow-inner">
              <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
                {/* Step 1: Aap (Inviter) */}
                <div className="md:col-span-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/40 rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-md">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-500 to-emerald-400 text-slate-950 flex items-center justify-center shrink-0 shadow-lg shadow-teal-500/20">
                      <User className="w-6 h-6 text-slate-950 stroke-[2.5]" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-extrabold text-teal-300 tracking-wider flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-300" /> Step 1 • Aap (You)
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                        Link Share Karein
                      </h4>
                      <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                        WhatsApp par apne doston ko direct invite karein
                      </p>
                    </div>
                  </div>
                </div>

                {/* Central Connector (Desktop Horizontal / Mobile Vertical) */}
                <div className="md:col-span-1 flex flex-col items-center justify-center py-1">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-black shadow-lg shadow-emerald-500/30 transition-transform hover:scale-110">
                    <ArrowRight className="w-5 h-5 hidden md:block stroke-[2.5]" />
                    <ArrowDown className="w-5 h-5 md:hidden block stroke-[2.5]" />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-300 mt-1 text-center whitespace-nowrap">
                    Direct
                  </span>
                </div>

                {/* Step 2: Aapka Dost (Invited Friend) */}
                <div className="md:col-span-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/40 rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-md">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-400 to-teal-500 text-slate-950 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
                      <Users className="w-6 h-6 text-slate-950 stroke-[2.5]" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-extrabold text-emerald-300 tracking-wider flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-300" /> Step 2 • Aapka Dost (Friend)
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                        Free Community Join
                      </h4>
                      <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                        Dost tasks complete karke free time mein pese kamaye
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integrity Callout Bar */}
              <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-around gap-2 text-[11px] text-slate-300 text-center">
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>100% Free for Friends</span>
                </span>
                <span className="hidden sm:inline text-slate-500">•</span>
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Direct 1:1 Transparency</span>
                </span>
                <span className="hidden sm:inline text-slate-500">•</span>
                <span className="inline-flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>No Multi-Level Schemes</span>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleShareWhatsAppReferral}
                className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm transition duration-150 shadow-lg shadow-emerald-500/25 active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Tell Friends on WhatsApp</span>
              </button>

              <a
                href={APP_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm transition duration-150 active:scale-98 border border-white/10"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Join WhatsApp Group</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
