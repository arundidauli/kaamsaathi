import React from 'react';
import { UserPlus, Clock, Check } from 'lucide-react';
import { OpportunityItem } from '../../types';
import { useApp } from '../../hooks/useApp';

interface OpportunityCardProps {
  opp: OpportunityItem;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({ opp }) => {
  const { setSelectedOpportunity, startOpportunity } = useApp();

  return (
    <div className="bg-white rounded-3xl border border-slate-200 hover:border-teal-400 hover:shadow-xl transition-all duration-200 overflow-hidden flex flex-col justify-between group">
      <div>
        {/* Visual Thumbnail */}
        {opp.imageTag && (
          <div className="relative h-44 w-full overflow-hidden bg-slate-100">
            <img
              src={opp.imageTag}
              alt={opp.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-extrabold text-slate-900 border border-slate-200 shadow-2xs flex items-center gap-1">
              {opp.category === 'Social Follow' && <UserPlus className="w-3 h-3 text-teal-700" />}
              <span>{opp.category}</span>
            </div>
            <div className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-semibold text-white flex items-center gap-1">
              <Clock className="w-3 h-3 text-teal-400" />
              <span>{opp.timeEstimate}</span>
            </div>
            {opp.platformBadge && (
              <div className="absolute bottom-2.5 left-3 bg-emerald-900/90 text-emerald-200 px-2 py-0.5 rounded text-[10px] font-bold">
                {opp.platformBadge}
              </div>
            )}
          </div>
        )}

        <div className="p-5 space-y-3">
          <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-teal-800 transition-colors">
            {opp.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {opp.description}
          </p>

          {/* Requirements List */}
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Requirements:
            </span>
            <ul className="text-xs text-slate-600 space-y-1">
              {opp.requirements.slice(0, 2).map((req, i) => (
                <li key={i} className="flex items-center gap-1.5 truncate">
                  <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span className="truncate">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-5 pt-0">
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 block font-bold uppercase">Reward</span>
            <span className="text-xl font-black text-slate-900">{opp.rewardDisplay}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedOpportunity(opp)}
              className="px-3 py-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
            >
              Details
            </button>
            <button
              onClick={() => startOpportunity(opp)}
              className="px-4 py-1.5 text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-xs transition duration-150"
            >
              Start Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
