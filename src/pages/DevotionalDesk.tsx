import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAudio } from '../context/AudioContext';
import { DEVOTIONAL_TRACKS } from '../data/devotionalData';
import { useSchema } from '../hooks/useSchema';
import { Play, Pause, Radio, Languages, Clock } from 'lucide-react';

export const DevotionalDesk: React.FC = () => {
  const { currentTrack, isPlaying, playbackProgress, playTrack, togglePlay, seek } = useAudio();
  const [lyricsLanguage, setLyricsLanguage] = useState<'gu' | 'en'>('gu');

  // Default to the first track if none is selected
  const activeTrack = currentTrack || DEVOTIONAL_TRACKS[0];

  // Expose JSON-LD Schema for the active track
  const parseIsoDuration = (durationStr: string) => {
    const parts = durationStr.split(':');
    return parts.length === 2 ? `PT${parts[0]}M${parts[1]}S` : 'PT0M';
  };

  const audioSchema = {
    '@context': 'https://schema.org',
    '@type': 'AudioObject',
    'name': activeTrack.title,
    'description': `${activeTrack.category} dedicated to Shree Khodiyar Maa sung by ${activeTrack.singer}`,
    'duration': parseIsoDuration(activeTrack.duration),
    'inLanguage': 'gu',
    'contentUrl': activeTrack.audioUrl,
    'author': {
      '@type': 'Person',
      'name': activeTrack.singer
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Traditional'
    }
  };

  // Inject AudioObject schema
  useSchema(audioSchema);

  // Compute which lyric line is currently active
  const activeLyricIndex = activeTrack.lyrics.reduce((acc, line, idx) => {
    if (playbackProgress >= line.time) {
      return idx;
    }
    return acc;
  }, 0);

  // Automatically scroll the active lyric row into view smoothly
  useEffect(() => {
    const activeElement = document.querySelector(`[data-lyric-idx="${activeLyricIndex}"]`);
    if (activeElement) {
      activeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      });
    }
  }, [activeLyricIndex]);

  const handleTrackClick = (track: typeof DEVOTIONAL_TRACKS[0]) => {
    if (currentTrack && currentTrack.id === track.id) {
      togglePlay();
    } else {
      playTrack(track, DEVOTIONAL_TRACKS);
    }
  };

  const getCategoryClass = (category: string) => {
    switch (category) {
      case 'Aarti':
        return 'text-crimson-800 dark:text-crimson-400 bg-crimson-800/10 dark:bg-crimson-800/20';
      case 'Chalisa':
        return 'text-gold-700 dark:text-gold bg-gold-700/10 dark:bg-gold-700/20';
      case 'Stuti':
        return 'text-blue-800 dark:text-blue-400 bg-blue-800/10 dark:bg-blue-800/20';
      case 'Mantra':
        return 'text-purple-800 dark:text-purple-400 bg-purple-800/10 dark:bg-purple-800/20';
      case 'Garbo':
        return 'text-amber-800 dark:text-amber-400 bg-amber-800/10 dark:bg-amber-800/20';
      default:
        return 'text-zinc-650 bg-zinc-100 dark:bg-zinc-800';
    }
  };

  return (
    <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      
      {/* Page Header */}
      <div className="mb-10 text-center md:text-left">
        <span className="text-xs uppercase tracking-widest text-crimson-800 dark:text-gold font-bold">Divine Meditations</span>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-zinc-950 dark:text-zinc-50 mt-1">
          Devotional Desk
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 font-sans mt-2 max-w-2xl">
          Listen to holy verses dedicated to Maa Khodiyar. Study bilingual scripts and recite prayers with a persistent desktop music player.
        </p>
      </div>

      {/* Main Grid Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start flex-1">
        
        {/* Left Panel: Track listing */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/20 dark:bg-zinc-900/10 backdrop-blur-md">
            <h3 className="text-base font-serif font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2 mb-4">
              <Radio className="w-4 h-4 text-crimson-800 dark:text-gold" />
              Devotional Playlist
            </h3>

            <div className="space-y-3">
              {DEVOTIONAL_TRACKS.map((track) => {
                const isActive = activeTrack.id === track.id;
                const isCurrentlyPlaying = isActive && isPlaying;

                return (
                  <div
                    key={track.id}
                    onClick={() => handleTrackClick(track)}
                    className={`p-3 md:p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 group ${
                      isActive
                        ? 'border-crimson-800/30 dark:border-gold/30 bg-crimson-800/[0.03] dark:bg-gold/[0.03] shadow-md shadow-crimson-800/5'
                        : 'border-zinc-200/50 dark:border-zinc-800/50 bg-white/30 dark:bg-zinc-900/30 hover:border-zinc-300 dark:hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Play State Indicator */}
                      <button
                        className={`w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center shrink-0 transition-all ${
                          isActive
                            ? 'bg-crimson-800 text-white dark:bg-gold dark:text-zinc-950'
                            : 'bg-zinc-100 text-zinc-650 group-hover:bg-crimson-800 group-hover:text-white dark:bg-zinc-900 dark:text-zinc-400 dark:group-hover:bg-gold dark:group-hover:text-zinc-950'
                        }`}
                        aria-label={isCurrentlyPlaying ? 'Pause' : 'Play'}
                      >
                        {isCurrentlyPlaying ? (
                          <Pause className="w-4 h-4 fill-current" />
                        ) : (
                          <Play className="w-4 h-4 fill-current ml-0.5" />
                        )}
                      </button>

                      <div className="min-w-0">
                        <h4 className={`text-sm md:text-base font-semibold truncate ${
                          isActive ? 'text-crimson-800 dark:text-gold' : 'text-zinc-900 dark:text-zinc-100'
                        }`}>
                          {track.title}
                        </h4>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 font-serif truncate mt-0.5">
                          {track.gujaratiTitle}
                        </p>
                        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                          <span className={`text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded ${getCategoryClass(track.category)}`}>
                            {track.category}
                          </span>
                          <span className="text-[10px] text-zinc-400 dark:text-zinc-500 flex items-center gap-0.5 font-sans">
                            <Clock className="w-3.5 h-3.5" /> {track.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* SVG Soundwave Visualizer next to track name when playing */}
                    {isCurrentlyPlaying && (
                      <div className="shrink-0 flex items-center justify-center pr-2">
                        <svg className="w-6 h-5 text-crimson-800 dark:text-gold" viewBox="0 0 24 24" fill="currentColor">
                          <rect x="2" y="4" width="3" height="16" rx="1.5">
                            <animate attributeName="height" values="8;16;4;12;8" dur="1.2s" repeatCount="indefinite" />
                            <animate attributeName="y" values="12;4;16;8;12" dur="1.2s" repeatCount="indefinite" />
                          </rect>
                          <rect x="9" y="4" width="3" height="16" rx="1.5">
                            <animate attributeName="height" values="16;4;12;8;16" dur="0.9s" repeatCount="indefinite" />
                            <animate attributeName="y" values="4;16;8;12;4" dur="0.9s" repeatCount="indefinite" />
                          </rect>
                          <rect x="16" y="4" width="3" height="16" rx="1.5">
                            <animate attributeName="height" values="6;14;4;16;6" dur="1.5s" repeatCount="indefinite" />
                            <animate attributeName="y" values="14;6;16;4;14" dur="1.5s" repeatCount="indefinite" />
                          </rect>
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Panel: Bilingual Lyrics Reader */}
        <div className="lg:col-span-7 flex flex-col h-full">
          <div className="p-6 md:p-8 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/40 dark:bg-zinc-900/20 backdrop-blur-md shadow-glass-light dark:shadow-glass-dark flex-1 flex flex-col">
            
            {/* Lyrics Header Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-5 mb-6">
              <div>
                <span className="text-[10px] uppercase font-semibold text-crimson-800 dark:text-gold tracking-widest block mb-0.5">Live Synced Subtitles</span>
                <h3 className="text-xl font-serif font-bold text-zinc-950 dark:text-zinc-50">
                  {activeTrack.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-sans mt-0.5">
                  Sing along: Sung by {activeTrack.singer}
                </p>
              </div>

              {/* Language Toggle Slider */}
              <div className="relative flex p-1 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-full w-fit shrink-0">
                <button
                  onClick={() => setLyricsLanguage('gu')}
                  className={`relative z-10 px-4 py-1.5 text-xs font-semibold rounded-full transition-colors flex items-center gap-1.5 ${
                    lyricsLanguage === 'gu'
                      ? 'text-white dark:text-zinc-950'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
                  }`}
                >
                  <Languages className="w-3.5 h-3.5" />
                  ગુજરાતી
                </button>
                <button
                  onClick={() => setLyricsLanguage('en')}
                  className={`relative z-10 px-4 py-1.5 text-xs font-semibold rounded-full transition-colors flex items-center gap-1.5 ${
                    lyricsLanguage === 'en'
                      ? 'text-white dark:text-zinc-950'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200'
                  }`}
                >
                  <Languages className="w-3.5 h-3.5" />
                  English
                </button>
                
                {/* Background Slider Indicator */}
                <motion.div
                  layoutId="active-lang-bg"
                  className="absolute top-1 bottom-1 bg-crimson-800 dark:bg-gold rounded-full"
                  animate={{
                    left: lyricsLanguage === 'gu' ? 4 : 86,
                    width: lyricsLanguage === 'gu' ? 82 : 82
                  }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              </div>
            </div>

            {/* Dynamic Lyrics Viewer */}
            <div className="flex-1 overflow-y-auto h-[45vh] pr-2 scroll-smooth border border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl p-4 bg-white/20 dark:bg-zinc-950/20">
              <div className="space-y-6 py-[20vh] flex flex-col items-center">
                {activeTrack.lyrics.map((line, idx) => {
                  const isActive = activeLyricIndex === idx;

                  return (
                    <motion.div
                      key={idx}
                      data-lyric-idx={idx}
                      onClick={() => seek(line.time)} // Quick seek by clicking lyric lines
                      className={`text-center py-2 px-4 rounded-xl cursor-pointer transition-all duration-300 w-full hover:bg-zinc-500/5 ${
                        isActive
                          ? 'scale-105 font-bold border-l-2 border-r-2 border-crimson-800 dark:border-gold shadow-sm bg-crimson-800/[0.02] dark:bg-gold/[0.02]'
                          : 'opacity-40 filter blur-xs hover:opacity-75 hover:blur-none'
                      }`}
                    >
                      {lyricsLanguage === 'gu' ? (
                        <p className={`text-lg md:text-xl font-serif leading-relaxed ${
                          isActive ? 'text-crimson-800 dark:text-gold' : 'text-zinc-800 dark:text-zinc-350'
                        }`}>
                          {line.textGu}
                        </p>
                      ) : (
                        <p className={`text-sm md:text-base font-sans leading-relaxed ${
                          isActive ? 'text-crimson-800 dark:text-gold' : 'text-zinc-700 dark:text-zinc-400'
                        }`}>
                          {line.textEn}
                        </p>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Lyrics Footer */}
            <div className="border-t border-zinc-200 dark:border-zinc-800 pt-5 mt-6 text-center text-[10px] text-zinc-400 dark:text-zinc-500 font-sans uppercase tracking-widest">
              * Click on any line above to seek audio directly to that verse *
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default DevotionalDesk;
