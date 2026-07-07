import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAudio } from '../context/AudioContext';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Music, Video, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AudioPlayer: React.FC = () => {
  const {
    isPlaying,
    currentTrack,
    playbackProgress,
    duration,
    volume,
    isMuted,
    togglePlay,
    seek,
    nextTrack,
    prevTrack,
    setVolume,
    setIsMuted,
  } = useAudio();

  const [isMinimized, setIsMinimized] = useState(false);

  const formatTime = (timeInSecs: number) => {
    if (isNaN(timeInSecs)) return '0:00';
    const mins = Math.floor(timeInSecs / 60);
    const secs = Math.floor(timeInSecs % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    seek(parseFloat(e.target.value));
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (vol > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  if (!currentTrack) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-spiritual-cream/80 dark:bg-spiritual-charcoal/80 border-t border-crimson-100/10 dark:border-white/5 backdrop-blur-lg px-6 py-4 shadow-lg text-center text-sm text-zinc-500 dark:text-zinc-400">
        <p className="flex items-center justify-center gap-2 font-sans">
          <Music className="w-4 h-4 text-crimson-800 dark:text-gold" />
          Select an audio track on the{' '}
          <NavLink to="/" className="underline font-medium text-crimson-800 dark:text-gold hover:opacity-85">
            Home Page
          </NavLink>{' '}
          to play divine prayers, or watch video bhajans on our{' '}
          <NavLink to="/desk" className="underline font-medium text-crimson-850 dark:text-gold hover:opacity-85">
            Video Desk
          </NavLink>.
        </p>
      </div>
    );
  }

  const progressPercent = duration > 0 ? (playbackProgress / duration) * 100 : 0;

  return (
    <AnimatePresence mode="wait">
      {isMinimized ? (
        /* Minimized Floating Widget */
        <motion.div
          key="minimized-player"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <button
            onClick={() => setIsMinimized(false)}
            className="flex items-center gap-3 pl-3 pr-4 py-2.5 rounded-full border border-crimson-800/20 dark:border-gold/30 bg-spiritual-cream/95 dark:bg-spiritual-charcoal/95 backdrop-blur-xl shadow-glass-light dark:shadow-glass-dark hover:scale-105 transition-transform text-left group"
          >
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-crimson-800 to-gold flex items-center justify-center text-white shrink-0 shadow-md">
              <Music className={`w-4 h-4 ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`} />
            </div>
            
            <div className="max-w-[120px] sm:max-w-[180px] min-w-0">
              <h5 className="text-xs font-bold text-zinc-950 dark:text-zinc-50 truncate leading-none">
                {currentTrack.title}
              </h5>
              <span className="text-[9px] text-crimson-800 dark:text-gold font-sans block mt-0.5 tracking-wider font-semibold">
                {isPlaying ? 'PLAYING...' : 'PAUSED'}
              </span>
            </div>

            <ChevronUp className="w-4 h-4 text-zinc-400 group-hover:text-crimson-800 dark:group-hover:text-gold transition-colors ml-1 shrink-0" />
          </button>
        </motion.div>
      ) : (
        /* Full-Width Audio Player Panel */
        <motion.div
          key="full-player"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-spiritual-cream/95 dark:bg-spiritual-charcoal/95 border-t border-crimson-800/10 dark:border-white/10 backdrop-blur-xl px-4 py-3 md:px-8 md:py-4 shadow-glass-light dark:shadow-glass-dark"
        >
          {/* Progress Bar (Scrubber) */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-zinc-200 dark:bg-zinc-800 group">
            <div
              className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-crimson-800 to-gold"
              style={{ width: `${progressPercent}%` }}
            />
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={playbackProgress}
              onChange={handleProgressChange}
              className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer accent-crimson-800 dark:accent-gold"
            />
          </div>

          {/* Minimize Button in Top Right */}
          <button
            onClick={() => setIsMinimized(true)}
            className="absolute top-2 right-4 text-zinc-400 hover:text-crimson-800 dark:hover:text-gold p-1 rounded-full transition-colors hidden sm:block"
            title="Minimize Player"
            aria-label="Minimize Player"
          >
            <ChevronDown className="w-4 h-4" />
          </button>

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 mt-1">
            {/* Track Info */}
            <div className="flex items-center gap-4 w-full md:w-1/4 min-w-0">
              <div className="relative w-12 h-12 bg-gradient-to-tr from-crimson-800 to-gold rounded-lg flex items-center justify-center text-white shrink-0 shadow-md">
                <Music className={`w-6 h-6 ${isPlaying ? 'animate-pulse' : ''}`} />
                
                {/* Animated equalizer waves */}
                {isPlaying && (
                  <div className="absolute bottom-1 flex items-end gap-0.5 h-3 justify-center">
                    <span className="w-0.5 bg-white/80 animate-[bounce_1.2s_infinite] h-full" style={{ animationDelay: '0.1s' }} />
                    <span className="w-0.5 bg-white/80 animate-[bounce_1.2s_infinite] h-2/3" style={{ animationDelay: '0.3s' }} />
                    <span className="w-0.5 bg-white/80 animate-[bounce_1.2s_infinite] h-4/5" style={{ animationDelay: '0.5s' }} />
                  </div>
                )}
              </div>
              
              <div className="min-w-0 pr-4">
                <h4 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50 truncate">
                  {currentTrack.title}
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-serif truncate">
                  {currentTrack.gujaratiTitle}
                </p>
                <span className="inline-block text-[10px] uppercase tracking-wider font-semibold text-crimson-800 dark:text-gold mt-0.5">
                  {currentTrack.category} • {currentTrack.singer}
                </span>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex flex-col items-center gap-1.5 w-full md:w-2/4">
              <div className="flex items-center gap-5">
                <button
                  onClick={prevTrack}
                  className="text-zinc-500 hover:text-crimson-800 dark:text-zinc-400 dark:hover:text-gold transition-colors p-1"
                  aria-label="Previous Track"
                >
                  <SkipBack className="w-5 h-5" />
                </button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={togglePlay}
                  className="w-11 h-11 bg-crimson-800 dark:bg-gold rounded-full flex items-center justify-center text-white dark:text-zinc-950 shadow-md hover:bg-crimson-700 dark:hover:bg-gold/90 transition-colors"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                </motion.button>

                <button
                  onClick={nextTrack}
                  className="text-zinc-500 hover:text-crimson-800 dark:text-zinc-400 dark:hover:text-gold transition-colors p-1"
                  aria-label="Next Track"
                >
                  <SkipForward className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500 w-full justify-center font-sans">
                <span>{formatTime(playbackProgress)}</span>
                <span className="text-zinc-300 dark:text-zinc-700">/</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Volume & Aux Controls */}
            <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-1/4">
              {/* Mobile Minimize Toggle */}
              <button
                onClick={() => setIsMinimized(true)}
                className="flex sm:hidden items-center gap-1 text-xs text-zinc-400 hover:text-crimson-800 dark:hover:text-gold border border-zinc-200 dark:border-zinc-800 rounded-full px-2.5 py-1"
              >
                <ChevronDown className="w-3.5 h-3.5" />
                <span>Hide</span>
              </button>

              <div className="flex items-center gap-4">
                {/* Quick video desk link */}
                <NavLink
                  to="/desk"
                  className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-crimson-800 dark:text-zinc-400 dark:hover:text-gold transition-colors border border-zinc-200 dark:border-zinc-800 rounded-full px-3 py-1 bg-white/30 dark:bg-zinc-900/30"
                >
                  <Video className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Video Desk</span>
                </NavLink>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={toggleMute}
                    className="text-zinc-500 hover:text-crimson-800 dark:text-zinc-400 dark:hover:text-gold transition-colors"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-16 sm:w-20 md:w-24 h-1 rounded-lg bg-zinc-200 dark:bg-zinc-800 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default AudioPlayer;
