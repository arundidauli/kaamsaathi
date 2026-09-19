import { RewardTransaction } from '../types';

export const INITIAL_TRANSACTIONS: RewardTransaction[] = [
  { id: 'tx-1', date: '18 Sep', activity: 'Social Follow: Indie Tech YouTube', type: 'Social Follow', amount: 15, status: 'Verified' },
  { id: 'tx-2', date: '18 Sep', activity: 'Product Survey: Kirana UPI Habits', type: 'Survey', amount: 25, status: 'Verified' },
  { id: 'tx-3', date: '17 Sep', activity: 'App Testing: Desi Grocery Beta', type: 'App Testing', amount: 50, status: 'Verified' },
  { id: 'tx-4', date: '16 Sep', activity: 'Social Follow: Jaipur Handloom Page', type: 'Social Follow', amount: 20, status: 'Verified' },
  { id: 'tx-5', date: '15 Sep', activity: 'Direct Referral: Ramesh (Moradabad)', type: 'Referral', amount: 25, status: 'Pending' }
];
