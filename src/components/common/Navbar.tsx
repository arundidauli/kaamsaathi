import React from 'react';
import {
  Smartphone,
  MessageSquare,
  Menu,
  X,
  SlidersHorizontal,
  Send,
} from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { APP_CONFIG } from '../../config/appConfig';
import { NavigationRoute } from '../../types';

const NAV_LINKS: { id: NavigationRoute; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'opportunities', label: 'Opportunities' },
  { id: 'rewards', label: 'Rewards' },
  { id: 'community', label: 'Community' },
  { id: 'faq', label: 'FAQ' },
];

const MOBILE_DRAWER_LINKS: { id: NavigationRoute; label: string }[] = [
  ...NAV_LINKS,
  { id: 'terms', label: 'Rules & Terms' },
  { id: 'privacy', label: 'Privacy Policy' },
];

export const Navbar: React.FC = () => {
  const {
    currentRoute,
    navigateTo,
    rewardBalance,
    mobileMenuOpen,
    setMobileMenuOpen,
  } = useApp();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Demo Notification Pill */}
      <div className="bg-gradient-to-r from-teal-800 via-emerald-800 to-teal-900 text-white px-4 py-1.5 text-xs flex items-center justify-between">
        <div className="flex items-center gap-2 mx-auto sm:mx-0 font-medium">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>
            <strong>KaamSaathi Platform</strong>: Genuine Digital Community • 100% Free • No Investment Required
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => navigateTo('admin')}
            className={`px-2 py-0.5 rounded-md text-[11px] font-medium transition ${
              currentRoute === 'admin'
                ? 'bg-amber-500 text-slate-900'
                : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            Admin Panel
          </button>
          <button
            onClick={() => navigateTo('dashboard')}
            className={`px-2 py-0.5 rounded-md text-[11px] font-medium transition ${
              currentRoute === 'dashboard'
                ? 'bg-emerald-400 text-slate-950 font-bold'
                : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            Member App
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => navigateTo('home')}
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-700 via-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-teal-700/20 group-hover:scale-105 transition-transform duration-200 font-black text-xl tracking-tight">
              KS
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 block leading-none">
                Kaam<span className="text-teal-700">Saathi</span>
              </span>
              <span className="text-[11px] text-slate-500 hidden sm:block leading-tight font-medium mt-0.5">
                Phone se free time useful banao
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => navigateTo(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                  currentRoute === tab.id
                    ? 'text-teal-800 bg-teal-50/90 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => navigateTo('dashboard')}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition"
            >
              <Smartphone className="w-3.5 h-3.5 text-teal-700" />
              <span>Dashboard</span>
              <span className="bg-emerald-100 text-emerald-800 text-[11px] px-2 py-0.5 rounded-full font-extrabold">
                ₹{rewardBalance}
              </span>
            </button>

            <a
              href={APP_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl text-white bg-teal-700 hover:bg-teal-800 shadow-sm shadow-teal-700/20 transition duration-150"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Join Community</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => navigateTo('dashboard')}
              className="px-2.5 py-1.5 text-xs font-bold rounded-xl bg-teal-50 text-teal-800 border border-teal-200"
            >
              ₹{rewardBalance}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pb-3 mb-2 border-b border-slate-100">
            <button
              onClick={() => navigateTo('dashboard')}
              className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold rounded-xl bg-teal-50 text-teal-900 border border-teal-200"
            >
              <Smartphone className="w-4 h-4 text-teal-700" />
              Member (₹{rewardBalance})
            </button>
            <button
              onClick={() => navigateTo('admin')}
              className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold rounded-xl bg-amber-50 text-amber-900 border border-amber-200"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Admin Demo
            </button>
          </div>

          {MOBILE_DRAWER_LINKS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => navigateTo(tab.id)}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                currentRoute === tab.id ? 'bg-teal-50 text-teal-800' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <a
              href={APP_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-xl bg-emerald-600 text-white shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Join WhatsApp Community
            </a>
            <a
              href={APP_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-xl bg-sky-600 text-white shadow-sm"
            >
              <Send className="w-4 h-4" />
              Join Telegram Channel
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
