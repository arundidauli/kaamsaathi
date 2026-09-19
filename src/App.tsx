import React from 'react';
import { useApp } from './hooks/useApp';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Toast } from './components/common/Toast';
import { MobileBottomNav } from './components/common/MobileBottomNav';
import { OpportunityDetailModal } from './components/modals/OpportunityDetailModal';
import { HeroSection } from './components/home/HeroSection';
import { VideoSection } from './components/home/VideoSection';
import { HowItWorksSection } from './components/home/HowItWorksSection';
import { SocialGrowthSection } from './components/home/SocialGrowthSection';
import { OpportunitiesSection } from './components/opportunities/OpportunitiesSection';
import { RewardsSection } from './components/home/RewardsSection';
import { CommunityStoriesSection } from './components/home/CommunityStoriesSection';
import { ReferralSection } from './components/home/ReferralSection';
import { TrustSection } from './components/home/TrustSection';
import { FAQSection } from './components/home/FAQSection';
import { JoinCTASection } from './components/home/JoinCTASection';
import { TermsAndPrivacyView } from './components/legal/TermsAndPrivacyView';

export const AppContent: React.FC = () => {
  const { currentRoute } = useApp();

  const renderCurrentView = () => {
    switch (currentRoute) {
      case 'how-it-works':
        return (
          <div>
            <HowItWorksSection />
            <VideoSection />
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
            <JoinCTASection />
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
            <JoinCTASection />
          </div>
        );

      case 'terms':
        return <TermsAndPrivacyView type="terms" />;

      case 'privacy':
        return <TermsAndPrivacyView type="privacy" />;

      case 'home':
      default:
        return (
          <main>
            <HeroSection />
            <VideoSection />
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

      <div className="flex-1 pb-16 md:pb-0">{renderCurrentView()}</div>

      <Footer />

      {/* Mobile Bottom Navigation Bar */}
      <MobileBottomNav />

      {/* Opportunity Detail Modal */}
      <OpportunityDetailModal />

      {/* Toast Notification */}
      <Toast />
    </div>
  );
};

export default function App() {
  return <AppContent />;
}
