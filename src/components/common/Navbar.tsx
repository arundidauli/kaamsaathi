import React from 'react';
import {
  Smartphone,
  MessageSquare,
  Menu,
  X,
  SlidersHorizontal,
  Send,
  ChevronRight,
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
    profile,
    mobileMenuOpen,
    setMobileMenuOpen,
  } = useApp();

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        {/* Top Notification Pill */}
        <div className="bg-gradient-to-r from-teal-900 via-emerald-800 to-teal-900 text-white px-3 sm:px-4 py-1.5 text-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium truncate">
              <span className="inline-block w-2 h-2 shrink-0 rounded-full bg-emerald-400 animate-ping" />
              <span className="truncate">
                <strong>KaamSaathi</strong> • 100% Free Desi Community • No Investment
              </span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={() => navigateTo('admin')}
                className={`px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold transition ${
                  currentRoute === 'admin'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-white/15 hover:bg-white/25 text-white'
                }`}
              >
                Admin
              </button>
              <button
                onClick={() => navigateTo('dashboard')}
                className={`hidden sm:inline-flex px-2 py-0.5 rounded-md text-[11px] font-bold transition ${
                  currentRoute === 'dashboard'
                    ? 'bg-emerald-400 text-slate-950'
                    : 'bg-white/15 hover:bg-white/25 text-white'
                }`}
              >
                Member (₹{rewardBalance})
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Brand Logo */}
            <div
              className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group select-none"
              onClick={() => navigateTo('home')}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-teal-700 via-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-teal-700/20 group-hover:scale-105 transition-transform duration-200 font-black text-lg sm:text-xl tracking-tight">
                KS
              </div>
              <div>
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 block leading-none">
                  Kaam<span className="text-teal-700">Saathi</span>
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 hidden xs:block sm:block leading-tight font-medium mt-0.5">
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
                  className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                    currentRoute === tab.id
                      ? 'text-teal-800 bg-teal-50/90 shadow-2xs font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                onClick={() => navigateTo('dashboard')}
                className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-bold rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200/80 border border-slate-200/80 transition"
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
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold rounded-xl text-white bg-teal-700 hover:bg-teal-800 shadow-sm shadow-teal-700/20 transition duration-150 active:scale-98"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Community</span>
              </a>
            </div>

            {/* Mobile Right Controls */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => navigateTo('dashboard')}
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold rounded-xl bg-teal-50 text-teal-900 border border-teal-200"
              >
                <span className="text-[10px] text-teal-600 font-normal">Wallet</span>
                <strong className="text-teal-800 font-black">₹{rewardBalance}</strong>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Navigation with Slide & Backdrop */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-slate-100 bg-white shadow-2xl animate-in slide-in-from-top-2 duration-200">
            {/* User Mini Card in Drawer */}
            <div className="p-4 bg-gradient-to-r from-teal-50 to-emerald-50 border-b border-teal-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                  {profile.avatarInitials}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">{profile.name}</p>
                  <p className="text-[10px] text-slate-500">{profile.city}</p>
                </div>
              </div>
              <button
                onClick={() => navigateTo('profile')}
                className="px-2.5 py-1 text-[11px] font-bold text-teal-700 bg-white rounded-lg border border-teal-200 shadow-2xs"
              >
                Profile
              </button>
            </div>

            {/* Quick Grid Switches */}
            <div className="grid grid-cols-2 gap-2 p-3 pb-2">
              <button
                onClick={() => navigateTo('dashboard')}
                className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold rounded-xl bg-teal-700 text-white shadow-sm"
              >
                <Smartphone className="w-4 h-4" />
                Member App (₹{rewardBalance})
              </button>
              <button
                onClick={() => navigateTo('admin')}
                className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold rounded-xl bg-amber-50 text-amber-950 border border-amber-200"
              >
                <SlidersHorizontal className="w-4 h-4 text-amber-700" />
                Admin Panel
              </button>
            </div>

            {/* Route Links */}
            <div className="px-3 py-1 space-y-1">
              {MOBILE_DRAWER_LINKS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => navigateTo(tab.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition ${
                    currentRoute === tab.id
                      ? 'bg-teal-50 text-teal-800'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{tab.label}</span>
                  <ChevronRight className={`w-3.5 h-3.5 text-slate-400 ${currentRoute === tab.id ? 'text-teal-700' : ''}`} />
                </button>
              ))}
            </div>

            {/* Channel Buttons */}
            <div className="p-3 pt-2 border-t border-slate-100 space-y-2">
              <a
                href={APP_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-xl bg-emerald-600 text-white shadow-sm active:bg-emerald-700"
              >
                <MessageSquare className="w-4 h-4" />
                Join WhatsApp Community
              </a>
              <a
                href={APP_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-xl bg-sky-600 text-white shadow-sm active:bg-sky-700"
              >
                <Send className="w-4 h-4" />
                Join Telegram Channel
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile drawer */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-30 sm:hidden"
        />
      )}
    </>
  );
};
