import React from 'react';
import { Wallet, Clock } from 'lucide-react';
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">
              Member Dashboard
            </span>
            <span className="text-xs text-slate-500">• Secure local state</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
            Welcome back, {profile.name}
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Location: {profile.city} • Member ID: KS-9821
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setWithdrawModalOpen(true)}
            className="px-4 py-2.5 text-xs font-bold bg-teal-700 text-white hover:bg-teal-800 rounded-xl shadow-xs transition flex items-center gap-1.5"
          >
            <Wallet className="w-3.5 h-3.5" />
            <span>Withdraw Balance</span>
          </button>
          <button
            onClick={() => navigateTo('profile')}
            className="px-3.5 py-2.5 text-xs font-bold bg-white border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500">Available Balance</span>
          <div className="flex items-baseline gap-1 mt-1.5">
            <span className="text-3xl font-black text-slate-900">₹{rewardBalance}</span>
            <span className="text-[10px] text-emerald-600 font-bold">eligible</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500">This Month</span>
          <div className="flex items-baseline gap-1 mt-1.5">
            <span className="text-3xl font-black text-teal-700">₹180</span>
            <span className="text-[10px] text-slate-400 font-normal">earned</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500">Completed Tasks</span>
          <div className="flex items-baseline gap-1 mt-1.5">
            <span className="text-3xl font-black text-slate-800">{completedTasksCount}</span>
            <span className="text-[10px] text-slate-400 font-normal">verified</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-2xs">
          <span className="text-xs font-semibold text-slate-500">Referral Rewards</span>
          <div className="flex items-baseline gap-1 mt-1.5">
            <span className="text-3xl font-black text-slate-800">₹50</span>
            <span className="text-[10px] text-slate-400 font-normal">2 friends</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left Column: Tasks */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-900">Available Opportunities Today</h2>
            <span className="text-xs text-slate-500 font-semibold">
              {opportunities.length} active
            </span>
          </div>

          <div className="space-y-3">
            {opportunities.map((opp) => (
              <div
                key={opp.id}
                className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-teal-400 transition shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
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

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100">
                  <span className="text-sm font-black text-emerald-700">+{opp.rewardDisplay}</span>
                  <button
                    onClick={() => startOpportunity(opp)}
                    className="px-4 py-1.5 text-xs font-bold bg-teal-700 text-white hover:bg-teal-800 rounded-xl transition"
                  >
                    Start
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: History & Referral */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-900">Recent Activity & Rewards</h3>
              <span className="text-xs text-slate-400">Latest</span>
            </div>

            <div className="divide-y divide-slate-100">
              {transactions.slice(0, 5).map((tx) => (
                <div key={tx.id} className="py-3 flex items-center justify-between gap-2 text-xs">
                  <div>
                    <p className="font-bold text-slate-800">{tx.activity}</p>
                    <p className="text-[11px] text-slate-400">
                      {tx.date} • {tx.type}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-extrabold text-emerald-700 block">+{tx.amount}</span>
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

          {/* Quick Referral Box */}
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-200 p-5 rounded-3xl text-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-teal-900 text-sm">Direct Referral Code</span>
              <span className="text-[10px] bg-teal-200 text-teal-900 px-2 py-0.5 rounded-full font-bold">
                1-Tier
              </span>
            </div>
            <p className="text-slate-600 leading-snug">
              Apne doston ke saath share karein. Eligible campaign complete karne par direct bonus token milta hai.
            </p>
            <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-teal-300">
              <span className="font-mono text-slate-800 flex-1 truncate px-2 font-bold">
                {profile.referralCode}
              </span>
              <button
                onClick={copyReferralLink}
                className="px-3 py-1.5 bg-teal-700 hover:bg-teal-800 text-white rounded-lg font-bold text-xs transition"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
