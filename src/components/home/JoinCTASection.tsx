import React from 'react';
import { Smartphone, MessageSquare, Send } from 'lucide-react';
import { APP_CONFIG } from '../../config/appConfig';

export const JoinCTASection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-teal-50/40 via-white to-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="w-14 h-14 rounded-3xl bg-teal-100 text-teal-700 mx-auto flex items-center justify-center shadow-xs">
          <Smartphone className="w-7 h-7" />
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Community join karna simple hai.
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
          No joining fee. Bas community join karo aur jab suitable opportunity aaye, participate karo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={APP_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition text-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Join WhatsApp Community</span>
          </a>

          <a
            href={APP_CONFIG.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-md shadow-sky-600/20 transition text-sm"
          >
            <Send className="w-4 h-4" />
            <span>Join Telegram Community</span>
          </a>
        </div>

        <p className="text-xs text-slate-400">
          Links configure kiye gaye hain placeholder channels ke liye. Real groups can be attached anytime.
        </p>
      </div>
    </section>
  );
};
