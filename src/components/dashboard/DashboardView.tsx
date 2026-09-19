import React from 'react';
import {
  Wallet,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Copy,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { useApp } from '../../hooks/useApp';

export const DashboardView: React.FC = () => {
  const {
    profile,
    rewardBalance,
    completedTasksCount,
    opportunities,
    transactions,
    setWithdrawModalOpen,
    navigateTo,
    startOpportunity,
    copyReferralLink,
  } = useApp();

  const handleShareWhatsAppReferral = () => {
    const text = encodeURIComponent(
      `Join me on KaamSaathi! Complete easy tasks like social follows and surveys to earn pure Indian Rupees. Use my invite code: ${profile.referralCode} at https://kaamsaathi.in/join/${profile.referralCode}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white p-5 sm:p-7 rounded-3xl shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-teal-500/20 border border-teal-400/30 text-white flex items-center justify-center font-black text-lg sm:text-xl shadow-inner shrink-0">
            {profile.avatarInitials}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-400/30 px-2 py-0.5 rounded-md">
                Verified Member
              </span>
              <span className="text-xs text-slate-400">KS-9821</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight">
              Namaste, {profile.name} 🙏
            </h1>
            <p className="text-xs text-slate-300 mt-0.5">
              {profile.city} • Joined {profile.joinedDate}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/10">
          <button
            onClick={() => setWithdrawModalOpen(true)}
            className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 rounded-xl shadow-md transition flex items-center justify-center gap-1.5 active:scale-95"
          >
            <Wallet className="w-3.5 h-3.5" />
            <span>Withdraw Balance</span>
          </button>
          <button
            onClick={() => navigateTo('profile')}
            className="px-3.5 py-2.5 text-xs font-bold bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition active:scale-95"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-bold">Available Balance</span>
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Wallet className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl sm:text-3xl font-black text-slate-900">₹{rewardBalance}</span>
            <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
              Ready
            </span>
          </div>
          <p className="text-[10px] text-slate-400 mt-1">Pure Indian Rupees (₹)</p>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-bold">This Month</span>
            <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
              <TrendingUp className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl sm:text-3xl font-black text-teal-700">₹180</span>
            <span className="text-[10px] text-teal-600 font-bold bg-teal-50 px-1.5 py-0.5 rounded">
              +15%
            </span>
          </div>
          <p className="text-[10px] text-slate-400 mt-1">From surveys & tasks</p>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-bold">Completed Tasks</span>
            <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl sm:text-3xl font-black text-slate-900">{completedTasksCount}</span>
            <span className="text-[10px] text-sky-600 font-bold bg-sky-50 px-1.5 py-0.5 rounded">
              verified
            </span>
          </div>
          <p className="text-[10px] text-slate-400 mt-1">100% genuine inputs</p>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-bold">Referral Earned</span>
            <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
              <Users className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-2xl sm:text-3xl font-black text-amber-600">₹50</span>
            <span className="text-[10px] text-amber-700 font-bold bg-amber-50 px-1.5 py-0.5 rounded">
              2 friends
            </span>
          </div>
          <p className="text-[10px] text-slate-400 mt-1">Direct 1-tier invites</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Left Column: Tasks */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span>Available Tasks Today</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 font-extrabold">
                {opportunities.length}
              </span>
            </h2>
            <button
              onClick={() => navigateTo('opportunities')}
              className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-0.5"
            >
              <span>View All</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {opportunities.map((opp) => (
              <div
                key={opp.id}
                className="bg-white p-4 rounded-2xl border border-slate-200/90 hover:border-teal-400 transition shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-teal-50 text-teal-800 px-2 py-0.5 rounded-md border border-teal-200">
                      {opp.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {opp.timeEstimate}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{opp.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-1">{opp.description}</p>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center shrink-0 border-t sm:border-t-0 pt-2.5 sm:pt-0 border-slate-100">
                  <span className="text-base sm:text-sm font-black text-emerald-700">
                    +{opp.rewardDisplay}
                  </span>
                  <button
                    onClick={() => startOpportunity(opp)}
                    className="px-4 py-1.5 text-xs font-bold bg-teal-700 text-white hover:bg-teal-800 rounded-xl transition active:scale-95"
                  >
                    Start Task
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: History & Referral */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Referral Box */}
          <div className="bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-50 border border-teal-200 p-5 rounded-3xl text-xs space-y-3 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-teal-900 text-sm flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Invite Friends & Earn ₹25</span>
              </span>
              <span className="text-[10px] bg-teal-200 text-teal-950 px-2 py-0.5 rounded-full font-extrabold">
                Direct
              </span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Share your direct referral code. Jab aapka friend verified activity complete karta hai, direct bonus token credit hota hai.
            </p>

            <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-teal-300">
              <span className="font-mono text-slate-800 flex-1 truncate px-2 font-bold text-sm">
                {profile.referralCode}
              </span>
              <button
                onClick={copyReferralLink}
                className="px-3 py-1.5 bg-teal-700 hover:bg-teal-800 text-white rounded-lg font-bold text-xs transition flex items-center gap-1 active:scale-95"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </button>
            </div>

            <button
              onClick={handleShareWhatsAppReferral}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-xs flex items-center justify-center gap-2 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Share Directly on WhatsApp</span>
            </button>
          </div>

          {/* Activity Log */}
          <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-900">Recent Activity & Rewards</h3>
              <span className="text-xs text-slate-400">Latest</span>
            </div>

            <div className="divide-y divide-slate-100">
              {transactions.slice(0, 5).map((tx) => (
                <div key={tx.id} className="py-3 flex items-center justify-between gap-2 text-xs">
                  <div className="pr-2 truncate">
                    <p className="font-bold text-slate-800 truncate">{tx.activity}</p>
                    <p className="text-[11px] text-slate-400">
                      {tx.date} • {tx.type}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-extrabold text-emerald-700 block text-sm">
                      +₹{tx.amount}
                    </span>
                    <span
                      className={`inline-block text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        tx.status === 'Verified'
                          ? 'bg-emerald-100 text-emerald-800'
                          : tx.status === 'Pending'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {tx.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
