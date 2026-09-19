import React from 'react';
import { Home, Compass, Gift, Users, MessageSquare } from 'lucide-react';
import { useApp } from '../../hooks/useApp';
import { APP_CONFIG } from '../../config/appConfig';
import { NavigationRoute } from '../../types';

export const MobileBottomNav: React.FC = () => {
  const { currentRoute, navigateTo } = useApp();

  const NAV_ITEMS: { id: NavigationRoute; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'how-it-works', label: 'Process', icon: Compass },
    { id: 'opportunities', label: 'Tasks', icon: Gift },
    { id: 'community', label: 'Community', icon: Users },
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
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110 text-teal-700' : ''}`} />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-teal-700 rounded-full" />
                )}
              </div>
              <span className={`text-[10px] mt-1 leading-none ${isActive ? 'font-black text-teal-800' : 'font-medium'}`}>
                {item.label}
              </span>
            </button>
          );
        })}

        {/* Highlighted WhatsApp CTA Button */}
        <a
          href={APP_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center flex-1 py-1 px-1 text-emerald-600 active:scale-95 transition"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/30">
            <MessageSquare className="w-4 h-4" />
          </div>
          <span className="text-[10px] mt-1 leading-none font-black text-emerald-700">
            Join
          </span>
        </a>
      </div>
    </nav>
  );
};
