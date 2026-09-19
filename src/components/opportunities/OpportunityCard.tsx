import React from 'react';
import { UserPlus, Clock, Check, Sparkles, MessageCircle, MessageSquare } from 'lucide-react';
import { OpportunityItem } from '../../types';
import { useApp } from '../../hooks/useApp';
import { APP_CONFIG } from '../../config/appConfig';

interface OpportunityCardProps {
  opp: OpportunityItem;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({ opp }) => {
  const { setSelectedOpportunity } = useApp();

  const handleShareWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const shareText = encodeURIComponent(
      `Check out this task on KaamSaathi: "${opp.title}" - Earn ${opp.rewardDisplay} in pure Indian Rupees! Join here: https://kaamsaathi.in`
    );
    window.open(`https://api.whatsapp.com/send?text=${shareText}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 hover:border-teal-400 hover:shadow-xl transition-all duration-200 overflow-hidden flex flex-col justify-between group">
      <div>
        {/* Visual Thumbnail */}
        {opp.imageTag && (
          <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
            <img
              src={opp.imageTag}
              alt={opp.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl text-[10px] font-extrabold text-slate-900 border border-slate-200/80 shadow-2xs flex items-center gap-1">
              {opp.category === 'Social Follow' && <UserPlus className="w-3 h-3 text-teal-700" />}
              <span>{opp.category}</span>
            </div>

            <div className="absolute top-3 right-3 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-xl text-[10px] font-semibold text-white flex items-center gap-1 shadow-2xs">
              <Clock className="w-3 h-3 text-teal-400" />
              <span>{opp.timeEstimate}</span>
            </div>

            <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5">
              {opp.platformBadge && (
                <div className="bg-emerald-900/90 backdrop-blur-xs text-emerald-200 px-2.5 py-0.5 rounded-lg text-[10px] font-bold shadow-2xs">
                  {opp.platformBadge}
                </div>
              )}
              {opp.isPopular && (
                <div className="bg-amber-500 text-slate-950 px-2 py-0.5 rounded-lg text-[10px] font-black flex items-center gap-0.5 shadow-2xs">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>Popular</span>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="p-4 sm:p-5 space-y-3">
          <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug group-hover:text-teal-800 transition-colors">
            {opp.title}
          </h3>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {opp.description}
          </p>

          {/* Requirements List */}
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 space-y-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Sample Requirements:
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
      <div className="p-4 sm:p-5 pt-0">
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Estimated Reward</span>
            <span className="text-xl sm:text-2xl font-black text-slate-900 leading-none">
              {opp.rewardDisplay}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handleShareWhatsApp}
              className="p-2 text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition active:scale-95"
              aria-label="Share task on WhatsApp"
              title="Share task with a friend on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
            <button
              onClick={() => setSelectedOpportunity(opp)}
              className="px-3 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition active:scale-95"
            >
              Details
            </button>
            <a
              href={APP_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3.5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition duration-150 active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Participate</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
