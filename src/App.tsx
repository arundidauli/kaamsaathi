import React from 'react';
import { useApp } from './hooks/useApp';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Toast } from './components/common/Toast';
import { OpportunityDetailModal } from './components/modals/OpportunityDetailModal';
import { ParticipateModal } from './components/modals/ParticipateModal';
import { WithdrawModal } from './components/modals/WithdrawModal';
import { HeroSection } from './components/home/HeroSection';
import { HowItWorksSection } from './components/home/HowItWorksSection';
import { SocialGrowthSection } from './components/home/SocialGrowthSection';
import { OpportunitiesSection } from './components/opportunities/OpportunitiesSection';
import { RewardsSection } from './components/home/RewardsSection';
import { CommunityStoriesSection } from './components/home/CommunityStoriesSection';
import { ReferralSection } from './components/home/ReferralSection';
import { TrustSection } from './components/home/TrustSection';
import { FAQSection } from './components/home/FAQSection';
import { JoinCTASection } from './components/home/JoinCTASection';
import { DashboardView } from './components/dashboard/DashboardView';
import { ProfileView } from './components/profile/ProfileView';
import { AdminView } from './components/admin/AdminView';
import { TermsAndPrivacyView } from './components/legal/TermsAndPrivacyView';

export const AppContent: React.FC = () => {
  const { currentRoute } = useApp();

  const renderCurrentView = () => {
    switch (currentRoute) {
      case 'how-it-works':
        return (
          <div>
            <HowItWorksSection />
            <SocialGrowthSection />
            <TrustSection />
            <JoinCTASection />
          </div>
        );

      case 'opportunities':
        return (
          <div>
            <OpportunitiesSection />
            <SocialGrowthSection />
            <JoinCTASection />
          </div>
        );

      case 'rewards':
        return (
          <div>
            <RewardsSection />
            <TrustSection />
          </div>
        );

      case 'community':
        return (
          <div>
            <SocialGrowthSection />
            <CommunityStoriesSection />
            <ReferralSection />
            <JoinCTASection />
          </div>
        );

      case 'faq':
        return (
          <div>
            <FAQSection />
            <TrustSection />
          </div>
        );

      case 'dashboard':
        return <DashboardView />;

      case 'profile':
        return <ProfileView />;

      case 'admin':
        return <AdminView />;

      case 'terms':
        return <TermsAndPrivacyView type="terms" />;

      case 'privacy':
        return <TermsAndPrivacyView type="privacy" />;

      case 'home':
      default:
        return (
          <main>
            <HeroSection />
            <HowItWorksSection />
            <SocialGrowthSection />
            <OpportunitiesSection />
            <RewardsSection />
            <CommunityStoriesSection />
            <ReferralSection />
            <TrustSection />
            <FAQSection />
            <JoinCTASection />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-teal-100 selection:text-teal-900 antialiased">
      <Navbar />

      <div className="flex-1">{renderCurrentView()}</div>

      <Footer />

      {/* Interactive Modals */}
      <OpportunityDetailModal />
      <ParticipateModal />
      <WithdrawModal />

      {/* Toast Notification */}
      <Toast />
    </div>
  );
};

export default function App() {
  return <AppContent />;
}
