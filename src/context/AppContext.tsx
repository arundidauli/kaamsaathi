import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import {
  OpportunityItem,
  UserProfile,
  RewardTransaction,
  AdminMember,
  NavigationRoute,
} from '../types';
import { INITIAL_PROFILE } from '../config/appConfig';
import { INITIAL_OPPORTUNITIES } from '../data/initialOpportunities';
import { INITIAL_TRANSACTIONS } from '../data/initialTransactions';
import { INITIAL_MEMBERS } from '../data/initialMembers';
import { storage } from '../services/storage';
import { useToast } from './ToastContext';

interface AppContextType {
  // Navigation & UI state
  currentRoute: NavigationRoute;
  navigateTo: (route: NavigationRoute) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;

  // Modals
  selectedOpportunity: OpportunityItem | null;
  setSelectedOpportunity: (opp: OpportunityItem | null) => void;
  participateModalOpen: boolean;
  setParticipateModalOpen: (open: boolean) => void;
  participatingOpp: OpportunityItem | null;
  setParticipatingOpp: (opp: OpportunityItem | null) => void;
  withdrawModalOpen: boolean;
  setWithdrawModalOpen: (open: boolean) => void;

  // Filter
  categoryFilter: string;
  setCategoryFilter: (cat: string) => void;
  filteredOpportunities: OpportunityItem[];

  // Domain data
  profile: UserProfile;
  updateProfile: (profile: UserProfile) => void;
  rewardBalance: number;
  completedTasksCount: number;
  opportunities: OpportunityItem[];
  transactions: RewardTransaction[];
  adminMembers: AdminMember[];
  setAdminMembers: React.Dispatch<React.SetStateAction<AdminMember[]>>;

  // Business Actions
  startOpportunity: (opp: OpportunityItem) => void;
  confirmTaskCompletion: () => void;
  createCampaign: (data: {
    title: string;
    category: OpportunityItem['category'];
    reward: number;
    timeEstimate: string;
    description: string;
    targetMembers: number;
  }) => boolean;
  toggleCampaignStatus: (id: string) => void;
  deleteCampaign: (id: string) => void;
  copyReferralLink: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { showToast } = useToast();

  // Navigation
  const [currentRoute, setCurrentRoute] = useState<NavigationRoute>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Modals & Selection
  const [selectedOpportunity, setSelectedOpportunity] = useState<OpportunityItem | null>(null);
  const [participateModalOpen, setParticipateModalOpen] = useState<boolean>(false);
  const [participatingOpp, setParticipatingOpp] = useState<OpportunityItem | null>(null);
  const [withdrawModalOpen, setWithdrawModalOpen] = useState<boolean>(false);

  // Filter
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  // Persistent States
  const [profile, setProfile] = useState<UserProfile>(() =>
    storage.get<UserProfile>('ks_user_profile', INITIAL_PROFILE as UserProfile)
  );

  const [rewardBalance, setRewardBalance] = useState<number>(() =>
    storage.get<number>('ks_reward_balance', 135)
  );

  const [completedTasksCount, setCompletedTasksCount] = useState<number>(() =>
    storage.get<number>('ks_completed_count', 8)
  );

  const [opportunities, setOpportunities] = useState<OpportunityItem[]>(() =>
    storage.get<OpportunityItem[]>('ks_opportunities', INITIAL_OPPORTUNITIES)
  );

  const [transactions, setTransactions] = useState<RewardTransaction[]>(() =>
    storage.get<RewardTransaction[]>('ks_transactions', INITIAL_TRANSACTIONS)
  );

  const [adminMembers, setAdminMembers] = useState<AdminMember[]>(() =>
    storage.get<AdminMember[]>('ks_admin_members', INITIAL_MEMBERS)
  );

  // Sync to localStorage
  useEffect(() => {
    storage.set('ks_user_profile', profile);
  }, [profile]);

  useEffect(() => {
    storage.set('ks_reward_balance', rewardBalance);
  }, [rewardBalance]);

  useEffect(() => {
    storage.set('ks_completed_count', completedTasksCount);
  }, [completedTasksCount]);

  useEffect(() => {
    storage.set('ks_opportunities', opportunities);
  }, [opportunities]);

  useEffect(() => {
    storage.set('ks_transactions', transactions);
  }, [transactions]);

  useEffect(() => {
    storage.set('ks_admin_members', adminMembers);
  }, [adminMembers]);

  // Actions
  const navigateTo = useCallback((route: NavigationRoute) => {
    setCurrentRoute(route);
    setMobileMenuOpen(false);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const startOpportunity = useCallback((opp: OpportunityItem) => {
    setParticipatingOpp(opp);
    setParticipateModalOpen(true);
  }, []);

  const confirmTaskCompletion = useCallback(() => {
    if (!participatingOpp) return;
    const addedAmount = participatingOpp.reward;

    setRewardBalance((prev) => prev + addedAmount);
    setCompletedTasksCount((prev) => prev + 1);

    const newTx: RewardTransaction = {
      id: `tx-${Date.now()}`,
      date: 'Today',
      activity: participatingOpp.title,
      type: participatingOpp.category,
      amount: addedAmount,
      status: 'Verified',
    };

    setTransactions((prev) => [newTx, ...prev]);

    setOpportunities((prev) =>
      prev.map((o) =>
        o.id === participatingOpp.id ? { ...o, participantsCount: o.participantsCount + 1 } : o
      )
    );

    setParticipateModalOpen(false);
    showToast(`Shabash! Activity verified: +₹${addedAmount} added to balance.`, 'success');
  }, [participatingOpp, showToast]);

  const updateProfile = useCallback(
    (updated: UserProfile) => {
      setProfile(updated);
      showToast('Profile updated and saved to localStorage.', 'success');
    },
    [showToast]
  );

  const copyReferralLink = useCallback(() => {
    const link = `https://kaamsaathi.in/join/${profile.referralCode}`;
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(link).catch((err) => {
        console.warn('Clipboard write failed:', err);
      });
    }
    showToast('Referral link copied to clipboard!', 'info');
  }, [profile.referralCode, showToast]);

  const createCampaign = useCallback(
    (data: {
      title: string;
      category: OpportunityItem['category'];
      reward: number;
      timeEstimate: string;
      description: string;
      targetMembers: number;
    }): boolean => {
      if (!data.title.trim()) {
        showToast('Please enter a campaign title', 'warning');
        return false;
      }

      const created: OpportunityItem = {
        id: `opp-${Date.now()}`,
        title: data.title.trim(),
        category: data.category,
        reward: Number(data.reward) || 15,
        rewardDisplay: `₹${Number(data.reward) || 15}`,
        timeEstimate: data.timeEstimate || '3 min',
        requirements: ['Verified smartphone member', 'Genuine active social profile'],
        description: data.description || 'Verified KaamSaathi community campaign activity.',
        steps: ['Join the campaign', 'Perform required follow or survey action', 'Submit confirmation'],
        status: 'active',
        participantsCount: 0,
        imageTag:
          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
      };

      setOpportunities((prev) => [created, ...prev]);
      showToast('New campaign created & listed!', 'success');
      return true;
    },
    [showToast]
  );

  const toggleCampaignStatus = useCallback(
    (id: string) => {
      setOpportunities((prev) =>
        prev.map((opp) => {
          if (opp.id === id) {
            const nextStatus = opp.status === 'active' ? 'paused' : 'active';
            return { ...opp, status: nextStatus };
          }
          return opp;
        })
      );
      showToast('Campaign status updated.', 'info');
    },
    [showToast]
  );

  const deleteCampaign = useCallback(
    (id: string) => {
      setOpportunities((prev) => prev.filter((o) => o.id !== id));
      showToast('Campaign removed.', 'info');
    },
    [showToast]
  );

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
      participateModalOpen,
      setParticipateModalOpen,
      participatingOpp,
      setParticipatingOpp,
      withdrawModalOpen,
      setWithdrawModalOpen,
      categoryFilter,
      setCategoryFilter,
      filteredOpportunities,
      profile,
      updateProfile,
      rewardBalance,
      completedTasksCount,
      opportunities,
      transactions,
      adminMembers,
      setAdminMembers,
      startOpportunity,
      confirmTaskCompletion,
      createCampaign,
      toggleCampaignStatus,
      deleteCampaign,
      copyReferralLink,
    }),
    [
      currentRoute,
      navigateTo,
      mobileMenuOpen,
      selectedOpportunity,
      participateModalOpen,
      participatingOpp,
      withdrawModalOpen,
      categoryFilter,
      filteredOpportunities,
      profile,
      updateProfile,
      rewardBalance,
      completedTasksCount,
      opportunities,
      transactions,
      adminMembers,
      setAdminMembers,
      startOpportunity,
      confirmTaskCompletion,
      createCampaign,
      toggleCampaignStatus,
      deleteCampaign,
      copyReferralLink,
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
