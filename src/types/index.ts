export type OpportunityCategory =
  | 'Survey'
  | 'Social Follow'
  | 'App Testing'
  | 'Website Feedback'
  | 'Product Testing'
  | 'Local Campaign'
  | 'Referral';

export type OpportunityStatus = 'active' | 'completed' | 'paused';

export interface OpportunityItem {
  id: string;
  title: string;
  category: OpportunityCategory;
  reward: number;
  rewardDisplay: string;
  timeEstimate: string;
  requirements: string[];
  description: string;
  steps: string[];
  status: OpportunityStatus;
  participantsCount: number;
  isPopular?: boolean;
  imageTag?: string;
  platformBadge?: string;
}

export interface UserProfile {
  name: string;
  phone: string;
  email: string;
  city: string;
  joinedDate: string;
  referralCode: string;
  whatsappJoined: boolean;
  telegramJoined: boolean;
  avatarInitials: string;
}

export type TransactionStatus = 'Verified' | 'Pending' | 'Rejected';

export interface RewardTransaction {
  id: string;
  date: string;
  activity: string;
  type: string;
  amount: number;
  status: TransactionStatus;
}

export type MemberStatus = 'Active' | 'Under Review' | 'Inactive';

export interface AdminMember {
  id: string;
  name: string;
  city: string;
  joined: string;
  tasks: number;
  rewards: number;
  status: MemberStatus;
}

export type NavigationRoute =
  | 'home'
  | 'how-it-works'
  | 'opportunities'
  | 'rewards'
  | 'community'
  | 'faq'
  | 'dashboard'
  | 'profile'
  | 'admin'
  | 'terms'
  | 'privacy';

export interface ToastNotification {
  text: string;
  type: 'success' | 'info' | 'warning';
}

export interface CommunityStory {
  name: string;
  city: string;
  role: string;
  avatar: string;
  quote: string;
  verifiedTasks: string;
}

export interface FAQItem {
  q: string;
  a: string;
}
