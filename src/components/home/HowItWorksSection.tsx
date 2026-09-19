import React from 'react';
import { Compass, Users, CheckCircle2, Award } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Join',
    desc: 'Join our free digital community on WhatsApp or Telegram.',
    icon: Users,
    highlight: '100% Free',
  },
  {
    step: '02',
    title: 'Explore',
    desc: 'See available campaigns, creator follows, app tests, and surveys.',
    icon: Compass,
    highlight: 'Daily Opportunities',
  },
  {
    step: '03',
    title: 'Participate',
    desc: 'Complete eligible activities with honest feedback and real follows.',
    icon: CheckCircle2,
    highlight: 'Genuine Submissions',
  },
  {
    step: '04',
    title: 'Pese Kamao',
    desc: 'Verified tasks complete karke direct UPI ya recharge se pese kamao. Koi fake currency ya points nahi.',
    icon: Award,
    highlight: 'Pese Kamao',
  },
] as const;

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200 mb-2">
            <Compass className="w-3.5 h-3.5 text-teal-700" />
            <span>Seedha aur Aasaan Process</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            4 simple steps mein shuru karein. No complex documentation, no hidden fees.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((item, idx) => {
            const StepIcon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/80 border border-slate-200 rounded-3xl p-6 relative flex flex-col justify-between hover:shadow-lg hover:border-teal-400 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-300 group-hover:text-teal-600 transition-colors">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-100/70 text-teal-800">
                      {item.highlight}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-teal-700 flex items-center justify-center mb-4 group-hover:bg-teal-700 group-hover:text-white transition-all shadow-xs">
                    <StepIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
