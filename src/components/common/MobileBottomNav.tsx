import React from 'react';
import { Home, Compass, Wallet, Users, UserCheck } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { NavigationRoute } from '../../types';

export const MobileBottomNav: React.FC = () => {
  const { currentRoute, navigateTo, rewardBalance } = useApp();

  const NAV_ITEMS: { id: NavigationRoute; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'opportunities', label: 'Tasks', icon: Compass },
    { id: 'dashboard', label: `₹${rewardBalance}`, icon: Wallet },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'profile', label: 'Profile', icon: UserCheck },
  ];

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 md:hidden pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
    >
      <div className="flex items-center justify-around h-16 px-2">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = currentRoute === item.id;
          const isWallet = item.id === 'dashboard';

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => navigateTo(item.id)}
              className={`flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-2xl transition-all duration-150 ${
                isActive
                  ? 'text-teal-700 font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {isWallet ? (
                <div
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black transition-all ${
                    isActive
                      ? 'bg-teal-700 text-white shadow-sm shadow-teal-700/30'
                      : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>₹{rewardBalance}</span>
                </div>
              ) : (
                <>
                  <div className="relative">
                    <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110' : ''}`} />
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-teal-700 rounded-full" />
                    )}
                  </div>
                  <span className={`text-[10px] mt-1 leading-none ${isActive ? 'font-black text-teal-800' : 'font-medium'}`}>
                    {item.label}
                  </span>
                </>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
