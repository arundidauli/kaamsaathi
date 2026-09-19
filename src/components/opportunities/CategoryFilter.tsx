import React from 'react';
import { useApp } from '../../hooks/useApp';

const CATEGORIES = [
  'All',
  'Social Follow',
  'Survey',
  'App Testing',
  'Website Feedback',
  'Product Testing',
] as const;

export const CategoryFilter: React.FC = () => {
  const { categoryFilter, setCategoryFilter } = useApp();

  return (
    <div className="flex items-center gap-1.5 flex-wrap" role="group" aria-label="Filter opportunities by category">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => setCategoryFilter(cat)}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
            categoryFilter === cat
              ? 'bg-teal-700 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
          aria-pressed={categoryFilter === cat}
        >
          {cat === 'Social Follow' ? '👥 Social Follow' : cat}
        </button>
      ))}
    </div>
  );
};
