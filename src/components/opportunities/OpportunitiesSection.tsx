import React from 'react';
import { Zap } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { CategoryFilter } from './CategoryFilter';
import { OpportunityCard } from './OpportunityCard';

export const OpportunitiesSection: React.FC = () => {
  const { filteredOpportunities } = useApp();

  return (
    <section className="py-16 sm:py-20 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 mb-2">
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Indian Tasks Available Today</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Sample Active Tasks & Campaigns
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              * Reward is in pure Indian Rupee (₹). Actual rewards vary by campaign and verified submission.
            </p>
          </div>

          <CategoryFilter />
        </div>

        {/* Opportunities Grid */}
        {filteredOpportunities.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.map((opp) => (
              <OpportunityCard key={opp.id} opp={opp} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8">
            <p className="text-sm font-semibold text-slate-600">
              No campaigns available in this category right now.
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Check other categories or come back later for new Indian community campaigns.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
