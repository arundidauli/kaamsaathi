import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';
import {
  OpportunityItem,
  NavigationRoute,
} from '../types';
import { INITIAL_OPPORTUNITIES } from '../data/initialOpportunities';

interface AppContextType {
  // Navigation
  currentRoute: NavigationRoute;
  navigateTo: (route: NavigationRoute) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;

  // Opportunity Detail Modal
  selectedOpportunity: OpportunityItem | null;
  setSelectedOpportunity: (opp: OpportunityItem | null) => void;

  // Filter & Opportunities
  categoryFilter: string;
  setCategoryFilter: (cat: string) => void;
  filteredOpportunities: OpportunityItem[];
  opportunities: OpportunityItem[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<NavigationRoute>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState<OpportunityItem | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [opportunities] = useState<OpportunityItem[]>(INITIAL_OPPORTUNITIES);

  const navigateTo = useCallback((route: NavigationRoute) => {
    setCurrentRoute(route);
    setMobileMenuOpen(false);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const filteredOpportunities = useMemo(() => {
    if (categoryFilter === 'All') return opportunities;
    return opportunities.filter((o) => o.category === categoryFilter);
  }, [opportunities, categoryFilter]);

  const value = useMemo(
    () => ({
      currentRoute,
      navigateTo,
      mobileMenuOpen,
      setMobileMenuOpen,
      selectedOpportunity,
      setSelectedOpportunity,
      categoryFilter,
      setCategoryFilter,
      filteredOpportunities,
      opportunities,
    }),
    [
      currentRoute,
      navigateTo,
      mobileMenuOpen,
      selectedOpportunity,
      categoryFilter,
      filteredOpportunities,
      opportunities,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
