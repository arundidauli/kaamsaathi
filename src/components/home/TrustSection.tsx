import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const PRINCIPLES = [
  'No joining fee ever',
  'No investment or recharge required',
  'Clear campaign instructions upfront',
  'Reward amount shown before starting',
  'Referral participation is 100% optional',
  'Suspicious or spam activity is rejected',
  'Privacy-conscious data handling',
  'Authentic brand campaigns only',
  'Friendly community support',
] as const;

export const TrustSection: React.FC = () => {
  return (
    <section className="py-14 bg-slate-50/60 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Simple rules. Clear rewards.
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Hamare basic principles jisse har member safe rahe
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PRINCIPLES.map((point, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs"
            >
              <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
              <span className="text-xs font-bold text-slate-800">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
