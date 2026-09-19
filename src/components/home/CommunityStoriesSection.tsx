import React from 'react';
import { Users, CheckCircle2 } from 'lucide-react';
import { COMMUNITY_STORIES } from '../../data/communityStories';

export const CommunityStoriesSection: React.FC = () => {

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200 mb-2">
            <Users className="w-3.5 h-3.5 text-teal-700" />
            <span>Real Community Stories</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Log kya kehte hain
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Honest feedback from early members participating in genuine online campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {COMMUNITY_STORIES.map((story, i) => (
            <div
              key={i}
              className="bg-slate-50/70 border border-slate-200 rounded-3xl p-6 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    src={story.avatar}
                    alt={story.name}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{story.name}</h4>
                    <p className="text-xs text-slate-500">
                      {story.role} • {story.city}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed mb-4">
                  "{story.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-semibold text-teal-800">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  {story.verifiedTasks}
                </span>
                <span className="text-slate-400">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Stats Banner */}
        <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-teal-300">
                Community Pulse
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-1">Sirf app nahi, ek community.</h3>
            </div>
            <span className="text-xs bg-white/10 border border-white/20 text-slate-200 px-3 py-1 rounded-full font-semibold">
              Platform Statistics • Verified Network
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-black text-white">100%</p>
              <p className="text-xs text-slate-300 font-medium mt-1">Free Community</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-teal-400">Desi</p>
              <p className="text-xs text-slate-300 font-medium mt-1">Real Indian Members</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-emerald-400">UPI</p>
              <p className="text-xs text-slate-300 font-medium mt-1">Direct Payouts</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-amber-300">Pese Kamao</p>
              <p className="text-xs text-slate-300 font-medium mt-1">Free Time Activities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
