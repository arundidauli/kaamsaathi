import React from 'react';
import { Gift, Smartphone, IndianRupee, Award } from 'lucide-react';

const REWARD_TYPES = [
  {
    title: 'Mobile Recharge',
    desc: '₹10, ₹19, ₹25 top-up coupons for Jio, Airtel, VI.',
    badge: 'Most Popular',
    icon: Smartphone,
    color: 'border-teal-200 bg-white',
  },
  {
    title: 'Direct Small UPI',
    desc: 'Verified campaign amounts sent directly via UPI handle.',
    badge: 'Fast Transfer',
    icon: IndianRupee,
    color: 'border-emerald-200 bg-white',
  },
  {
    title: 'Brand Coupons',
    desc: 'Discount codes for Swiggy, Zomato, Blinkit, and Amazon.',
    badge: 'Lifestyle',
    icon: Gift,
    color: 'border-amber-200 bg-white',
  },
  {
    title: 'Campaign Bonuses',
    desc: 'Special tokens for regular participants with 100% genuine inputs.',
    badge: 'Loyalty',
    icon: Award,
    color: 'border-purple-200 bg-white',
  },
] as const;

export const RewardsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-bold border border-purple-200 mb-2">
            <Gift className="w-3.5 h-3.5 text-purple-700" />
            <span>Rewards Structure</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Small rewards can make a difference.
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Phone recharge, small UPI amounts, ya discount vouchers. Real tasks, simple tokens.
          </p>
          <p className="text-xs text-slate-400 mt-1 italic">
            * Rewards depend on campaign availability and verified participation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {REWARD_TYPES.map((rw, i) => {
            const Icon = rw.icon;
            return (
              <div
                key={i}
                className={`p-6 rounded-3xl border ${rw.color} shadow-xs hover:shadow-lg transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {rw.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">{rw.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{rw.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sample Reward Breakdown */}
        <div className="max-w-xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900">Sample Reward History</h4>
              <p className="text-xs text-slate-400">Member activity demonstration</p>
            </div>
            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
              Demo Preview Data
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between py-1 border-b border-slate-50">
              <span className="text-slate-700">Survey completed: Payment App</span>
              <span className="font-bold text-emerald-700">+₹20</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-slate-50">
              <span className="text-slate-700">App testing: Grocery Beta</span>
              <span className="font-bold text-emerald-700">+₹50</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-slate-50">
              <span className="text-slate-700">Direct referral bonus</span>
              <span className="font-bold text-emerald-700">+₹25</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-slate-50">
              <span className="text-slate-700">Product feedback survey</span>
              <span className="font-bold text-emerald-700">+₹30</span>
            </div>
            <div className="flex items-center justify-between pt-2 text-sm font-black text-slate-900">
              <span>Total Example Balance:</span>
              <span className="text-teal-700">₹125</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
