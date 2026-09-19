import React from 'react';
import { UserPlus, Send, Check, MessageSquare, Mail } from 'lucide-react';
import { APP_CONFIG } from '../../config/appConfig';

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" fill="currentColor" />
  </svg>
);

export const SocialGrowthSection: React.FC = () => {
  return (
    <section className="py-14 bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
              <UserPlus className="w-3.5 h-3.5" />
              <span>Real Indian Followers • No Fake Bots</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Real followers for Indian creators & small brands.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Instagram, YouTube aur Telegram channels ke liye authentic Indian followers. Humare verified community
              members aapke content ko discover karte hain aur genuine follow/subscribe karte hain.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2">
              <div className="bg-white/5 border border-white/10 p-3 rounded-2xl">
                <InstagramIcon className="w-5 h-5 text-rose-400 mb-1" />
                <p className="font-bold text-xs text-white">Instagram Growth</p>
                <p className="text-[11px] text-slate-400">Real profiles only</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-3 rounded-2xl">
                <YoutubeIcon className="w-5 h-5 text-red-500 mb-1" />
                <p className="font-bold text-xs text-white">YouTube Subscribers</p>
                <p className="text-[11px] text-slate-400">Genuine Indian views</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-3 rounded-2xl">
                <Send className="w-5 h-5 text-sky-400 mb-1" />
                <p className="font-bold text-xs text-white">Telegram Channels</p>
                <p className="text-[11px] text-slate-400">Active desi audience</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center justify-between">
              <span>Creators & Brands Partner With Us</span>
              <span className="text-[10px] bg-emerald-400 text-slate-950 px-2 py-0.5 rounded-full font-extrabold">
                Partner
              </span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Kya aap ek creator ya brand hain jinko genuine Indian followers, app testing ya feedback audience chahiye?
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Real Indian phone users</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero bot accounts or software scripts</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparent token distribution to members</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <a
                href={APP_CONFIG.partnerWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition shadow-lg flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>List Your Campaign</span>
              </a>
              <a
                href={`mailto:${APP_CONFIG.partnerEmail}`}
                className="py-3 px-4 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 active:scale-95"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
