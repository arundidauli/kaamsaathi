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
    <div
      role="group"
      aria-label="Filter opportunities by category"
      className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap"
    >
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => setCategoryFilter(cat)}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap shrink-0 transition-all duration-150 active:scale-95 ${
            categoryFilter === cat
              ? 'bg-teal-700 text-white shadow-sm shadow-teal-700/20 ring-1 ring-teal-700'
              : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-2xs'
          }`}
          aria-pressed={categoryFilter === cat}
        >
          {cat === 'Social Follow' ? '👥 Social Follow' : cat}
        </button>
      ))}
    </div>
  );
};
