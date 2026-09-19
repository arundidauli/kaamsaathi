import React from 'react';
import {
  MessageSquare,
  ArrowRight,
  UserPlus,
  CheckCircle2,
  Heart,
  IndianRupee,
  Sparkles,
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
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 md:pt-16 md:pb-24 bg-gradient-to-b from-teal-50/70 via-emerald-50/30 to-white">
      {/* Background Decorative Blobs */}
      <div className="absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-teal-200/25 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-amber-200/25 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Centered Hero Content */}
        <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6">
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

          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            KaamSaathi ek digital Indian community platform hai jahan members ko <strong>real social creator follows</strong>,{' '}
            app testing, feedback aur genuine surveys milte hain. Real Indian creators aur local businesses ko grow karne mein{' '}
            help karo aur free time mein seedha <strong>pese kamao</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={APP_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/25 active:scale-98 transition-all text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Join WhatsApp Community</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => navigateTo('how-it-works')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs hover:border-slate-300 active:scale-98 transition-all text-sm"
            >
              <UserPlus className="w-4 h-4 text-emerald-600" />
              <span>Kaise Kaam Karta Hai</span>
            </button>

            <a
              href="#video-guide"
              onClick={handleScrollToVideo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl font-bold text-amber-900 bg-amber-100 hover:bg-amber-200/80 border border-amber-200 shadow-xs transition-all text-xs sm:text-sm active:scale-98"
            >
              <Play className="w-3.5 h-3.5 fill-amber-700 text-amber-700" />
              <span>Watch Video (1 min)</span>
            </a>
          </div>

          {/* Honest Trust Metrics Row */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-[11px] sm:text-xs font-semibold text-slate-600">
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
        </div>

        {/* Full Hero Image Showcase - Centerpiece Layout (Fully Visible, No Side Cropping) */}
        <div className="mt-10 sm:mt-14 relative max-w-5xl mx-auto">
          {/* Main Showcase Container displaying the full 16:9 / 2816x1536 artwork */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white bg-slate-900 group">
            <img
              src={APP_CONFIG.heroImage}
              alt="KaamSaathi Community Platform"
              className="w-full h-auto object-contain block group-hover:scale-[1.01] transition-transform duration-500"
              loading="eager"
            />

            {/* Subtle Vignette at Bottom for readability */}
            <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none" />

            {/* Center Play Button to Trigger Video Guide */}
            <a
              href="#video-guide"
              onClick={handleScrollToVideo}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white shadow-2xl backdrop-blur-xs flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group/play z-10"
              aria-label="Play explainer video"
            >
              <Play className="w-7 h-7 sm:w-9 sm:h-9 ml-1 fill-white" />
            </a>

            {/* Bottom Overlay Info Banner */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-6 sm:right-6 text-white z-10">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-emerald-300 flex items-center gap-1">
                    <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> Real Desi Creator Community
                  </span>
                  <p className="text-xs sm:text-base font-bold truncate">Follow & Support Indian Creators</p>
                </div>
                <span className="text-[10px] sm:text-xs bg-emerald-500/30 border border-emerald-400/40 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full font-bold shrink-0 ml-2">
                  🇮🇳 Pure India
                </span>
              </div>
            </div>
          </div>

          {/* Floating Badge 1 - Pese Kamao (Left Top) */}
          <div className="absolute -top-4 -left-2 sm:-top-5 sm:-left-5 bg-white/95 backdrop-blur-md p-2.5 sm:p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2.5 sm:gap-3 animate-float-slow z-20">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black shrink-0">
              <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <span className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                Free Time Activity
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-slate-900">Pese Kamao</span>
            </div>
          </div>

          {/* Floating Badge 2 - Real Follower Activity (Right Bottom) */}
          <div className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-5 bg-slate-900/95 text-white backdrop-blur-md p-2.5 sm:p-3.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-2.5 sm:gap-3 animate-float-delayed z-20">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 text-teal-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <span className="text-[9px] sm:text-[10px] text-slate-400 font-semibold block">Real Social Follower</span>
              <span className="text-[11px] sm:text-xs font-bold text-slate-100">YouTube & Insta Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
