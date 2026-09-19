import React, { useState } from 'react';
import { Play, ExternalLink, MessageSquare, CheckCircle2, Video } from 'lucide-react';
import { APP_CONFIG } from '../../config/appConfig';

const YoutubeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playerMode, setPlayerMode] = useState<'youtube' | 'local'>('youtube');

  return (
    <section id="video-guide" className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-teal-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold">
            <Video className="w-3.5 h-3.5 text-teal-400" />
            <span>Official Video Explainer</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
            Dekhein KaamSaathi Kaise Kaam Karta Hai
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            1-minute video guide mein dekhein ki hamari Indian community kaise operate karti hai aur genuine tasks se ₹ Rupees rewards kaise milte hain.
          </p>

          {/* Toggle Switch between YouTube and Local MP4 Video */}
          <div className="inline-flex p-1 rounded-2xl bg-slate-800 border border-slate-700 text-xs font-bold pt-1">
            <button
              onClick={() => { setPlayerMode('youtube'); setIsPlaying(true); }}
              className={`px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
                playerMode === 'youtube' ? 'bg-red-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
              <span>YouTube Video</span>
            </button>
            <button
              onClick={() => { setPlayerMode('local'); setIsPlaying(true); }}
              className={`px-3.5 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
                playerMode === 'local' ? 'bg-teal-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>HD Video</span>
            </button>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-slate-950 aspect-video group">
          {isPlaying ? (
            playerMode === 'youtube' ? (
              <iframe
                src={APP_CONFIG.youtubeEmbedUrl}
                title="KaamSaathi Platform Explainer Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <video
                src={APP_CONFIG.localVideoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain bg-black"
                poster={APP_CONFIG.heroImage}
              >
                Your browser does not support the video tag.
              </video>
            )
          ) : (
            <div
              className="relative w-full h-full cursor-pointer select-none"
              onClick={() => setIsPlaying(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsPlaying(true); }}
              aria-label="Play KaamSaathi explainer video"
            >
              {/* Poster Image using user's kaamsaathi.png */}
              <img
                src={APP_CONFIG.heroImage}
                alt="KaamSaathi video preview poster"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20" />

              {/* Pulsing Play Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-emerald-500/40 blur-md animate-ping" />
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-white" />
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-xs sm:text-sm font-black tracking-wide text-white block drop-shadow-md">
                    Click to Watch Video (1 min)
                  </span>
                  <span className="text-[11px] text-emerald-300 flex items-center justify-center gap-1 mt-0.5">
                    <YoutubeIcon className="w-3.5 h-3.5 text-red-500" />
                    <span>Watch in Hindi / English</span>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Video Action Footer */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <a
            href={APP_CONFIG.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition"
          >
            <YoutubeIcon className="w-4 h-4 text-red-500" />
            <span>Open on YouTube ({APP_CONFIG.youtubeUrl})</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          <a
            href={APP_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Join Community Group</span>
          </a>
        </div>

        {/* Key Takeaways Grid */}
        <div className="grid sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-800">
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/80 space-y-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <p className="font-bold text-sm text-white">1. Join Free Community</p>
            <p className="text-xs text-slate-400">Zero joining fee. Tasks are shared directly in WhatsApp and Telegram.</p>
          </div>
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/80 space-y-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <p className="font-bold text-sm text-white">2. Genuine Indian Followers</p>
            <p className="text-xs text-slate-400">Support verified Indian creators & brands with real accounts—no bots.</p>
          </div>
          <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/80 space-y-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <p className="font-bold text-sm text-white">3. Direct ₹ UPI Rewards</p>
            <p className="text-xs text-slate-400">Verified activity earns direct Rupee rewards, UPI tokens, and recharge codes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
