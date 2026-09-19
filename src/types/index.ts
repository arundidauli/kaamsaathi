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

export type NavigationRoute =
  | 'home'
  | 'how-it-works'
  | 'opportunities'
  | 'rewards'
  | 'community'
  | 'faq'
  | 'partner'
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
