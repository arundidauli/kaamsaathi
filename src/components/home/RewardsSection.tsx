import React from 'react';
import { Gift, Smartphone, IndianRupee, Award, CheckCircle2, ShieldCheck } from 'lucide-react';

const EARNING_METHODS = [
  {
    title: 'Mobile Recharge',
    desc: 'Top-up coupons aur data recharge for Jio, Airtel, aur VI.',
    badge: 'Popular',
    icon: Smartphone,
    color: 'border-teal-200 bg-white',
  },
  {
    title: 'Direct UPI',
    desc: 'Verified campaign complete karne par seedha aapke UPI handle par payment.',
    badge: 'Fast Transfer',
    icon: IndianRupee,
    color: 'border-emerald-200 bg-white',
  },
  {
    title: 'Brand Vouchers',
    desc: 'Food delivery aur shopping apps ke verified discount codes.',
    badge: 'Lifestyle',
    icon: Gift,
    color: 'border-amber-200 bg-white',
  },
  {
    title: 'Community Bonus',
    desc: 'Active aur regular participants ke liye special seasonal perks.',
    badge: 'Loyalty',
    icon: Award,
    color: 'border-purple-200 bg-white',
  },
] as const;

export const RewardsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 mb-2">
            <IndianRupee className="w-3.5 h-3.5 text-emerald-700" />
            <span>Pese Kamao & Payouts</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Phone se free time mein pese kamao.
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Creator follows, feedback surveys aur genuine app testing complete karke direct UPI ya recharge pao.
          </p>
          <p className="text-xs text-slate-400 mt-1 italic">
            * Earning har campaign aur task requirements par depend karti hai. Koi fixed daily amount claim nahi kiya jata.
          </p>
        </div>

        {/* Earning Methods Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {EARNING_METHODS.map((rw, i) => {
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

        {/* Transparent Payout Rules Card (No Fake Money Numbers) */}
        <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <h4 className="text-sm font-bold text-slate-900">Pese Kaise Milte Hain</h4>
            </div>
            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
              Transparent Model
            </span>
          </div>

          <div className="space-y-3 text-xs text-slate-600">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 block text-xs">Koi Fixed Guarantee Nahi</strong>
                <span>Hum koi daily ya monthly fixed paise ka jhootha claim nahi karte. Pese campaign aur task par nirbhar karte hain.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 block text-xs">Direct UPI & Mobile Recharge</strong>
                <span>Task verify hone ke baad seedha aapke PhonePe, Google Pay, Paytm ya mobile recharge par transfer milta hai.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-800 block text-xs">100% Free • Zero Investment</strong>
                <span>Pese kamane ke liye members se kabhi koi fees, registration charge ya deposit nahi liya jata.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
