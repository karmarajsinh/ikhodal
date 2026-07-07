import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DEVOTIONAL_VIDEOS } from '../data/devotionalData';
import { Play, Clock, Eye, EyeOff, Video, Tv } from 'lucide-react';

export const DevotionalDesk: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState(DEVOTIONAL_VIDEOS[0]);
  const [isFocusMode, setIsFocusMode] = useState(false);

  // Handle external Focus Mode dimming effects for navbar, footer, and audio player
  useEffect(() => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const player = document.querySelector('.fixed.bottom-0'); // Bottom Persistent Player
    
    const elements = [header, footer, player];

    if (isFocusMode) {
      elements.forEach((el) => {
        if (el) {
          (el as HTMLElement).style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
          (el as HTMLElement).style.opacity = '0.05';
          (el as HTMLElement).style.pointerEvents = 'none';
        }
      });
    } else {
      elements.forEach((el) => {
        if (el) {
          (el as HTMLElement).style.opacity = '1';
          (el as HTMLElement).style.pointerEvents = 'auto';
        }
      });
    }

    return () => {
      elements.forEach((el) => {
        if (el) {
          (el as HTMLElement).style.opacity = '1';
          (el as HTMLElement).style.pointerEvents = 'auto';
        }
      });
    };
  }, [isFocusMode]);

  return (
    <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Page Header (Dimmed gently if focus mode active) */}
      <motion.div 
        animate={{ opacity: isFocusMode ? 0.05 : 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center md:text-left"
      >
        <span className="text-xs uppercase tracking-widest text-crimson-800 dark:text-gold font-bold">Divine Meditations</span>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-zinc-950 dark:text-zinc-50 mt-1 flex items-center justify-center md:justify-start gap-3">
          <Tv className="w-8 h-8 text-crimson-800 dark:text-gold" />
          Devotional Video Desk
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 font-sans mt-2 max-w-2xl">
          Watch, listen, and immerse yourself in sacred hymns dedicated to Maa Khodiyar. Toggle focus mode for a completely distraction-free meditation.
        </p>
      </motion.div>

      {/* Main Content Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start flex-1">
        
        {/* Left Panel: Sleek Video Playlist Browser (Dimmed gently if focus mode active) */}
        <motion.div 
          animate={{ 
            opacity: isFocusMode ? 0.05 : 1,
            pointerEvents: isFocusMode ? 'none' : 'auto'
          }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-4"
        >
          <div className="p-4 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/20 dark:bg-zinc-900/10 backdrop-blur-md">
            <h3 className="text-base font-serif font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2 mb-4">
              <Video className="w-4 h-4 text-crimson-800 dark:text-gold" />
              Devotional Videos
            </h3>

            <div className="space-y-3 max-h-[65vh] overflow-y-auto pr-1">
              {DEVOTIONAL_VIDEOS.map((video) => {
                const isActive = activeVideo.id === video.id;

                return (
                  <div
                    key={video.id}
                    onClick={() => setActiveVideo(video)}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center gap-4 group ${
                      isActive
                        ? 'border-crimson-800/30 dark:border-gold/30 bg-crimson-800/[0.03] dark:bg-gold/[0.03] shadow-md shadow-crimson-800/5'
                        : 'border-zinc-200/50 dark:border-zinc-800/50 bg-white/30 dark:bg-zinc-900/30 hover:border-zinc-300 dark:hover:border-zinc-700'
                    }`}
                  >
                    {/* Video Thumbnail */}
                    <div className="relative w-24 h-16 sm:w-28 sm:h-18 rounded-lg overflow-hidden shrink-0 bg-black shadow-inner border border-zinc-200/20 dark:border-zinc-800/20">
                      <img 
                        src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`} 
                        alt={video.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                        <span className="w-7 h-7 rounded-full bg-crimson-800/90 dark:bg-gold/90 flex items-center justify-center text-white dark:text-zinc-950 shadow-md">
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </span>
                      </div>
                    </div>

                    {/* Video Meta Info */}
                    <div className="min-w-0 flex-1">
                      <h4 className={`text-sm font-semibold truncate transition-colors ${
                        isActive ? 'text-crimson-800 dark:text-gold' : 'text-zinc-900 dark:text-zinc-100'
                      }`}>
                        {video.title}
                      </h4>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-serif truncate mt-0.5">
                        {video.gujaratiTitle}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-[9px] uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400">
                          {video.singer}
                        </span>
                        <span className="text-[10px] text-zinc-400 dark:text-zinc-500 flex items-center gap-0.5 font-sans ml-auto shrink-0">
                          <Clock className="w-3.5 h-3.5" /> {video.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Panel: Devotional Video Player */}
        <div className="lg:col-span-7 flex flex-col h-full">
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/40 dark:bg-zinc-900/20 backdrop-blur-md flex-1 flex flex-col relative overflow-hidden shadow-glass-light dark:shadow-glass-dark">
            
            {/* YouTube Embed Player Wrapper */}
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-zinc-250/30 dark:border-zinc-800/30 bg-black relative">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=0&rel=0`}
                title={activeVideo.title}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Meta Header & Significance Details */}
            <div className="mt-6 border-t border-zinc-200/50 dark:border-zinc-800/50 pt-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-serif font-extrabold text-zinc-950 dark:text-zinc-50">
                      {activeVideo.title}
                    </h3>
                    <span className="text-xs font-serif text-crimson-800 dark:text-gold mt-1 block">
                      {activeVideo.gujaratiTitle}
                    </span>
                  </div>

                  {/* Focus Mode Utility Switch */}
                  <button
                    onClick={() => setIsFocusMode(!isFocusMode)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border transition-all shrink-0 ${
                      isFocusMode
                        ? 'bg-crimson-800 text-white border-crimson-850 dark:bg-gold dark:text-zinc-950 dark:border-gold shadow-md'
                        : 'bg-transparent text-zinc-700 dark:text-zinc-300 border-zinc-200/70 dark:border-zinc-800/70 hover:bg-zinc-500/5'
                    }`}
                  >
                    {isFocusMode ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Focusing...</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Focus Mode</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-zinc-500/5 border border-zinc-200/20 dark:border-zinc-800/20 text-sm font-sans text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  <p className="font-semibold text-zinc-800 dark:text-zinc-200 text-xs mb-1 uppercase tracking-wider">
                    Significance & Details:
                  </p>
                  <p className="italic text-zinc-550 dark:text-zinc-300">
                    {activeVideo.description}
                  </p>
                  <p className="text-[10px] text-zinc-450 dark:text-zinc-500 font-sans uppercase tracking-widest mt-3 leading-none">
                    Recitation Singer: {activeVideo.singer} • Duration: {activeVideo.duration} mins
                  </p>
                </div>
              </div>

              {/* Player Instructions Footer */}
              <div className="border-t border-zinc-200/60 dark:border-zinc-800/60 pt-4 mt-6 text-center text-[10px] text-zinc-450 dark:text-zinc-500 font-sans uppercase tracking-widest leading-none">
                * Click on the playlist items to instantly switch video contents *
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};
export default DevotionalDesk;
