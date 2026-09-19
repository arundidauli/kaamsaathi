import React from 'react';
import {
  MessageSquare,
  ArrowRight,
  UserPlus,
  CheckCircle2,
  Heart,
  IndianRupee,
  Sparkles,
  ShieldCheck,
  Play,
} from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { APP_CONFIG } from '../../config/appConfig';

export const HeroSection: React.FC = () => {
  const { navigateTo } = useApp();

  const handleScrollToVideo = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('video-guide');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-teal-50/70 via-emerald-50/30 to-white">
      {/* Background Decorative Blobs */}
      <div className="absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-teal-200/25 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-amber-200/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            {/* Honest Desi Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-teal-200/90 text-teal-900 text-[11px] sm:text-xs font-bold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>100% Free Desi Community • Pure Indian Rupee (₹) • Zero Investment</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.18] sm:leading-[1.12]">
              Phone se free time ko{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-emerald-600 to-amber-600">
                useful banao
              </span>
              .
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
              KaamSaathi ek digital Indian community platform hai jahan members ko <strong>real social creator follows</strong>,{' '}
              app testing, feedback aur genuine surveys milte hain. Real Indian creators aur local businesses ko grow karne mein{' '}
              help karo aur seedha <strong>₹ Indian Rupees</strong> reward pao.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1 flex-wrap">
              <a
                href={APP_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/25 active:scale-98 transition-all text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Join WhatsApp Community</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => navigateTo('opportunities')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs hover:border-slate-300 active:scale-98 transition-all text-sm"
              >
                <UserPlus className="w-4 h-4 text-emerald-600" />
                <span>Explore Tasks</span>
              </button>

              <a
                href="#video-guide"
                onClick={handleScrollToVideo}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl font-bold text-amber-900 bg-amber-100 hover:bg-amber-200/80 border border-amber-200 shadow-xs transition-all text-xs sm:text-sm active:scale-98"
              >
                <Play className="w-3.5 h-3.5 fill-amber-700 text-amber-700" />
                <span>Watch Video (1 min)</span>
              </a>
            </div>

            {/* Honest Trust Metrics */}
            <div className="pt-3 border-t border-slate-200/80 space-y-1.5">
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex sm:flex-wrap items-center gap-y-2 gap-x-4 text-[11px] sm:text-xs font-semibold text-slate-600">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Real Indian followers & creators
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Zero foreign currency / No $ dollars
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Direct UPI / Mobile recharge
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 italic">
                * Real users only. No bot followers or fake accounts. Community participation is 100% free and voluntary.
              </p>
            </div>
          </div>

          {/* Hero Right: kaamsaathi.png Image & Video Trigger */}
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              {/* Main Image Container using user's kaamsaathi.png */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-4/3 sm:aspect-square group">
                <img
                  src={APP_CONFIG.heroImage}
                  alt="KaamSaathi Community Platform"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

                {/* Center Video Play Badge on Image */}
                <a
                  href="#video-guide"
                  onClick={handleScrollToVideo}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white shadow-2xl backdrop-blur-xs flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group/play"
                  aria-label="Play explainer video"
                >
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 ml-1 fill-white" />
                </a>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300 flex items-center gap-1">
                        <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> Real Desi Creator Community
                      </span>
                      <p className="text-xs sm:text-sm font-bold truncate">Follow & Support Indian Creators</p>
                    </div>
                    <span className="text-[10px] sm:text-[11px] bg-emerald-500/30 border border-emerald-400/40 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full font-medium shrink-0 ml-2">
                      🇮🇳 Pure India
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - Real Rupee Reward */}
              <div className="absolute -top-3 left-2 sm:-top-5 sm:-left-5 bg-white/95 backdrop-blur-md p-2.5 sm:p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2.5 sm:gap-3 animate-float-slow z-20">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black shrink-0">
                  <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    Verified Reward
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900">+₹15 Follow Reward</span>
                </div>
              </div>

              {/* Floating Badge 2 - Real Follower Activity */}
              <div className="absolute -bottom-4 right-2 sm:-bottom-5 sm:-right-5 bg-slate-900/95 text-white backdrop-blur-md p-2.5 sm:p-3.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-2.5 sm:gap-3 animate-float-delayed z-20">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 text-teal-400 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] text-slate-400 font-semibold block">Real Social Follower</span>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-100">YouTube & Insta Verified</span>
                </div>
              </div>

              {/* Floating Badge 3 - Desi Member Count */}
              <div className="absolute top-1/2 -right-2 sm:-right-4 -translate-y-1/2 bg-white/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-2xl shadow-lg border border-slate-200 hidden sm:flex items-center gap-2 text-xs font-bold text-slate-800 z-20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>127 Active Desi Members</span>
              </div>
            </div>

            {/* Showcase Highlights Bar */}
            <div className="mt-6 bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Genuine Community Model</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500">
                    Tasks shared directly on WhatsApp & Telegram
                  </p>
                </div>
              </div>
              <a
                href={APP_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-xl transition shrink-0"
              >
                Join Now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
