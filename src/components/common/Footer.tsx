import React from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { APP_CONFIG } from '../../config/appConfig';

export const Footer: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-10">
          <div className="col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-teal-600 to-emerald-500 flex items-center justify-center text-white font-black text-sm shadow-sm">
                KS
              </div>
              <span className="font-black text-lg text-white tracking-tight">KaamSaathi</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              Phone se free time ko useful banao. Genuine opportunities for Indian smartphone users without fake promises.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={APP_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-emerald-400 transition"
                aria-label="Join WhatsApp Community"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={APP_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-sky-400 transition"
                aria-label="Join Telegram Channel"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-slate-200 font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">Explore</p>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-white transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('how-it-works')} className="hover:text-white transition">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('opportunities')} className="hover:text-white transition">
                  Opportunities
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('rewards')} className="hover:text-white transition">
                  Rewards
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-slate-200 font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">Community</p>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => navigateTo('community')} className="hover:text-white transition">
                  Community Vision
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('faq')} className="hover:text-white transition">
                  FAQ & Help
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('dashboard')} className="hover:text-white transition">
                  Member Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('admin')} className="hover:text-white transition">
                  Admin Panel
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <p className="text-slate-200 font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">Trust & Policy</p>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => navigateTo('terms')} className="hover:text-white transition">
                  Terms & Rules
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('privacy')} className="hover:text-white transition">
                  Privacy Policy
                </button>
              </li>
              <li className="text-slate-500 pt-1 truncate">{APP_CONFIG.supportEmail}</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[10px] sm:text-[11px] text-center sm:text-left">
          <p>© 2026 KaamSaathi. All rights reserved. Indian Community Web App.</p>
          <p className="flex items-center gap-1.5 justify-center">
            <span>Made for genuine community participation</span>
            <span>•</span>
            <span className="text-emerald-400 font-bold">Zero Investment Platform</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
