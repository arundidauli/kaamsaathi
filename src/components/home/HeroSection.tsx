import React from 'react';
import {
  MessageSquare,
  ArrowRight,
  UserPlus,
  Smartphone,
  CheckCircle2,
  Heart,
  IndianRupee,
  QrCode,
} from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { APP_CONFIG } from '../../config/appConfig';

export const HeroSection: React.FC = () => {
  const { navigateTo, rewardBalance } = useApp();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-teal-50/60 via-amber-50/20 to-white">
      {/* Background Decorative Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-teal-200/30 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-amber-200/30 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Honest Desi Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-teal-200 text-teal-900 text-xs font-bold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>100% Free Desi Community • Pure Indian Rupee (₹) • No Investment</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.14]">
              Phone se free time ko{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-emerald-700 to-amber-600">
                useful banao
              </span>
              .
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              KaamSaathi ek digital Indian community hai jahan aapko <strong>real social followers & channel support</strong>,{' '}
              app testing, feedback aur genuine surveys milte hain. Real Indian creators aur local businesses ko grow karne mein{' '}
              help karo aur seedha <strong>₹ Rupees</strong> reward pao.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={APP_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white bg-teal-700 hover:bg-teal-800 shadow-lg shadow-teal-700/25 hover:shadow-teal-700/35 transition-all text-sm sm:text-base"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Join WhatsApp Community</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => navigateTo('opportunities')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs hover:border-slate-300 transition-all text-sm sm:text-base"
              >
                <UserPlus className="w-4 h-4 text-emerald-600" />
                <span>Explore Tasks & Follows</span>
              </button>

              <button
                onClick={() => navigateTo('dashboard')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-bold text-teal-900 bg-teal-100/70 hover:bg-teal-100 border border-teal-200/80 transition-all text-xs sm:text-sm"
              >
                <Smartphone className="w-4 h-4 text-teal-700" />
                <span>Member App (₹{rewardBalance})</span>
              </button>
            </div>

            {/* Honest Trust Metrics */}
            <div className="pt-3 border-t border-slate-200/80 space-y-2">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-semibold text-slate-600">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Real Indian followers & creators
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Zero foreign currency / No $ dollars
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Direct UPI / Mobile recharge
                </span>
              </div>
              <p className="text-[11px] text-slate-400 italic">
                * Real users only. No bot followers or fake accounts permitted. Participation is 100% voluntary.
              </p>
            </div>
          </div>

          {/* Hero Right: Desi Indian Smartphone User Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-4/3 sm:aspect-square">
                <img
                  src={APP_CONFIG.heroImage}
                  alt="Indian smartphone user enjoying productive free time"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-300 flex items-center gap-1">
                        <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> Real Desi Creator Community
                      </span>
                      <p className="text-sm font-bold">Follow & Support Indian Brands & Creators</p>
                    </div>
                    <span className="text-[11px] bg-emerald-500/30 border border-emerald-400/40 backdrop-blur-md px-2.5 py-1 rounded-full font-medium">
                      🇮🇳 Pure India
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - Real Rupee Reward */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-slow z-20">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">
                  <IndianRupee className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    Verified UPI Token
                  </span>
                  <span className="text-sm font-extrabold text-slate-900">+₹15 Follow Reward</span>
                </div>
              </div>

              {/* Floating Badge 2 - Real Follower Activity */}
              <div className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-6 bg-slate-900/95 text-white backdrop-blur-md p-3.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-float-delayed z-20">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 text-teal-400 flex items-center justify-center">
                  <UserPlus className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold block">Real Social Follower</span>
                  <span className="text-xs font-bold text-slate-100">YouTube & Insta Verified</span>
                </div>
              </div>

              {/* Floating Badge 3 - Desi Member Count */}
              <div className="absolute top-1/2 -right-3 sm:-right-6 -translate-y-1/2 bg-white/90 backdrop-blur-md px-3 py-2 rounded-2xl shadow-lg border border-slate-200 hidden sm:flex items-center gap-2 text-xs font-bold text-slate-800 z-20">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>127 Active Desi Members</span>
              </div>
            </div>

            {/* Quick Interactive Mini-Preview Box */}
            <div className="mt-6 bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                  <QrCode className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Member Desi Wallet</p>
                  <p className="text-[11px] text-slate-500">
                    Available: <strong className="text-emerald-700">₹{rewardBalance}</strong> in pure Indian Rupees
                  </p>
                </div>
              </div>
              <button
                onClick={() => navigateTo('dashboard')}
                className="text-xs font-bold text-teal-700 hover:text-teal-800 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-xl transition"
              >
                View Wallet →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
