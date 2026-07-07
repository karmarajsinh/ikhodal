import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Compass, Calendar, Volume2, Camera, MapPin, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAudio } from '../context/AudioContext';
import { TEMPLES_DATA, DEVOTIONAL_TRACKS } from '../data/devotionalData';

export const Home: React.FC = () => {
  const { playTrack } = useAudio();
  const [activeShrineIndex, setActiveShrineIndex] = useState(0);
  const [darshanModalOpen, setDarshanModalOpen] = useState(false);
  const [aartiModalOpen, setAartiModalOpen] = useState(false);

  // Use the first three temples from the mock database for our home carousel showcase
  const featuredShrines = TEMPLES_DATA.slice(0, 3);

  const nextShrine = () => {
    setActiveShrineIndex((prev) => (prev + 1) % featuredShrines.length);
  };

  const prevShrine = () => {
    setActiveShrineIndex((prev) => (prev - 1 + featuredShrines.length) % featuredShrines.length);
  };

  const quickActions = [
    {
      title: 'Daily Darshan',
      desc: 'View live/daily deities images from Matel & Kagvad',
      icon: Camera,
      action: () => setDarshanModalOpen(true),
      color: 'border-crimson-500/20 text-crimson-800 dark:text-crimson-400 bg-crimson-500/5 hover:bg-crimson-500/10'
    },
    {
      title: 'Live Aarti',
      desc: 'View Aarti schedules and stream live events',
      icon: Volume2,
      action: () => setAartiModalOpen(true),
      color: 'border-gold-500/20 text-gold-700 dark:text-gold bg-gold-500/5 hover:bg-gold-500/10'
    },
    {
      title: 'Temple Locator',
      desc: 'Find directions, historical insights & hours',
      icon: Compass,
      route: '/temples',
      color: 'border-blue-500/20 text-blue-700 dark:text-blue-400 bg-blue-500/5 hover:bg-blue-500/10'
    },
    {
      title: 'Lunar Tithi',
      desc: 'Maa Khodiyar Jayanti & upcoming sacred festivals',
      icon: Calendar,
      action: () => {
        alert("Today's Hindu Lunar Date: Ashadh Sud Aatham\nSacred day of Maa Khodiyar. Special Abhishek prayers are conducted today.");
      },
      color: 'border-purple-500/20 text-purple-700 dark:text-purple-400 bg-purple-500/5 hover:bg-purple-500/10'
    }
  ];

  return (
    <div className="flex-1 flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden">
        
        {/* Soft Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-gradient-to-tr from-gold/15 to-crimson-800/10 rounded-full blur-3xl ambient-glow -z-10" />

        {/* Text Area */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 dark:bg-gold/10 text-gold-700 dark:text-gold text-xs font-semibold uppercase tracking-widest font-sans"
          >
            🛕 The Spiritual Gateway of Gujarat
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-6xl font-serif font-extrabold text-crimson-800 dark:text-gold tracking-wide leading-tight"
          >
            Shree Khodiyar Maa
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm font-serif italic text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto md:mx-0"
          >
            "મમ દુઃખં હર દેવિ ખોડિયાર કૃપામયી । ત્રિશૂળધારી સુરાસુરા પૂજિતા મંગલકારીણી ॥"
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base md:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl mx-auto md:mx-0 font-sans"
          >
            Welcome to the digital sanctuary of Maa Khodiyar. Experience peaceful temple views, explore the history of Matel Dham, and listen to sacred Aartis, Stutis, and Mantras, keeping you connected wherever you are.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4 items-center justify-center md:justify-start"
          >
            <button
              onClick={() => playTrack(DEVOTIONAL_TRACKS[1])} // play Khodiyar Maa Aarti
              className="px-6 py-3 rounded-full bg-crimson-800 hover:bg-crimson-700 text-white font-medium shadow-md transition-all flex items-center gap-2 hover:translate-y-[-1px] font-sans text-sm"
            >
              <Volume2 className="w-5 h-5 shrink-0" /> Play Sacred Aarti
            </button>
            <NavLink
              to="/desk"
              className="px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-crimson-800 dark:hover:border-gold hover:text-crimson-800 dark:hover:text-gold text-zinc-700 dark:text-zinc-300 font-medium transition-all flex items-center gap-1.5 font-sans text-sm"
            >
              Devotional Desk <ArrowRight className="w-4 h-4" />
            </NavLink>
          </motion.div>
        </div>

        {/* Centerpiece Vector Silhouette */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative z-10">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7, type: 'spring' }}
            className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full flex items-center justify-center bg-gradient-to-br from-crimson-800/10 to-gold/5 dark:from-crimson-800/20 dark:to-gold/10 border border-crimson-800/10 dark:border-gold/20 shadow-inner overflow-hidden crimson-glow"
          >
            {/* Halo ring animations */}
            <div className="absolute inset-4 rounded-full border border-dashed border-gold/30 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-8 rounded-full border border-double border-crimson-800/20 dark:border-gold/10 animate-[spin_60s_linear_infinite]" />

            {/* Glowing Golden Silhouette of Trishul and Halo */}
            <svg
              viewBox="0 0 100 100"
              className="w-44 h-44 sm:w-60 sm:h-60 text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.7)]"
              fill="currentColor"
            >
              {/* Sacred Halo */}
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
              <circle cx="50" cy="50" r="26" fill="none" stroke="currentColor" strokeWidth="0.5" />
              
              {/* Trident (Trishul) Vector */}
              <rect x="48.5" y="25" width="3" height="60" rx="1.5" />
              <path d="M49 45 C41 45, 38 35, 38 28 C38 28, 40.5 28, 41 28 C41 33, 44 41.5, 49 42 Z" />
              <path d="M51 45 C59 45, 62 35, 62 28 C62 28, 59.5 28, 59 28 C59 33, 56 41.5, 51 42 Z" />
              
              <path d="M47 25 L50 16 L53 25 Z" />
              <circle cx="50" cy="24" r="1.5" className="text-crimson-800 dark:text-crimson-400" fill="currentColor" />
              <circle cx="39.5" cy="28" r="1" />
              <circle cx="60.5" cy="28" r="1" />
              
              <path d="M44 54 L56 50 L56 58 L44 54 Z" fill="currentColor" />
              <path d="M56 54 L44 50 L44 58 L56 54 Z" fill="currentColor" />
              <path d="M50 54 Q46 64, 42 66" fill="none" stroke="currentColor" strokeWidth="0.75" />
              <circle cx="42" cy="66" r="0.75" />
              <path d="M50 54 Q54 64, 58 66" fill="none" stroke="currentColor" strokeWidth="0.75" />
              <circle cx="58" cy="66" r="0.75" />

              <path d="M36 82 C36 80, 42 78, 50 78 C58 78, 64 80, 64 82 C64 83, 58 84, 50 84 C42 84, 36 83, 36 82 Z" fill="none" stroke="currentColor" strokeWidth="0.7" />
            </svg>
            
            {/* Soft Ambient Floating Dust particles */}
            <div className="absolute inset-0 pointer-events-none select-none">
              <span className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-gold/50 rounded-full animate-ping" />
              <span className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-gold/30 rounded-full animate-pulse" />
              <span className="absolute top-1/2 right-1/3 w-2 h-2 bg-crimson-800/20 rounded-full animate-bounce" style={{ animationDuration: '6s' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-serif font-bold text-center text-zinc-950 dark:text-zinc-50 mb-8 tracking-wider">
          Sacred Pathways
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, i) => {
            const CardContent = (
              <div className="h-full flex flex-col justify-between p-6 rounded-2xl glass-card border border-zinc-200/50 dark:border-zinc-800/50 hover:border-gold/30 dark:hover:border-gold/30 transition-all cursor-pointer group">
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-4 transition-transform group-hover:scale-110 ${action.color}`}>
                    <action.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-zinc-900 dark:text-zinc-50 mb-1 group-hover:text-crimson-800 dark:group-hover:text-gold transition-colors">
                    {action.title}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-sans leading-relaxed">
                    {action.desc}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-crimson-800 dark:text-gold mt-6 group-hover:translate-x-1 transition-transform">
                  <span>Enter</span> <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );

            return (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                transition={{ delay: 0.08 * i, duration: 0.4 }}
                onClick={action.route ? undefined : action.action}
              >
                {action.route ? (
                  <NavLink to={action.route} className="block h-full">
                    {CardContent}
                  </NavLink>
                ) : (
                  <div className="h-full">{CardContent}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Featured Shrines Slider Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs uppercase tracking-widest text-crimson-800 dark:text-gold font-semibold">Historical Shrines</span>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-zinc-950 dark:text-zinc-50 mt-1">
              Shree Khodiyar Maa Abodes
            </h3>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <button
              onClick={prevShrine}
              className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-white dark:hover:bg-zinc-900 hover:text-crimson-800 dark:hover:text-gold transition-colors shadow-sm"
              aria-label="Previous Shrine"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextShrine}
              className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-white dark:hover:bg-zinc-900 hover:text-crimson-800 dark:hover:text-gold transition-colors shadow-sm"
              aria-label="Next Shrine"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeShrineIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Photo Area */}
              <div className="lg:col-span-7 relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-zinc-200/20 dark:border-zinc-800/20">
                <div className="absolute inset-0 bg-gradient-to-t from-crimson-900/60 to-gold-900/30 mix-blend-multiply z-10" />
                <img
                  src={featuredShrines[activeShrineIndex].image}
                  alt={featuredShrines[activeShrineIndex].name}
                  className="w-full h-full object-cover select-none scale-102"
                  onError={(e) => { e.currentTarget.src = '/assets/hero.png'; }}
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="flex items-center gap-1.5 text-xs text-white/95 bg-black/40 backdrop-blur-md rounded-full px-3 py-1 font-sans border border-white/10 w-fit">
                    <MapPin className="w-3.5 h-3.5" />
                    {featuredShrines[activeShrineIndex].location}
                  </span>
                </div>
              </div>

              {/* Text Area */}
              <div className="lg:col-span-5 space-y-5">
                <span className="text-xs text-gold-700 dark:text-gold font-serif font-semibold">{featuredShrines[activeShrineIndex].gujaratiName}</span>
                <h4 className="text-3xl font-serif font-bold text-zinc-950 dark:text-zinc-50 leading-none">
                  {featuredShrines[activeShrineIndex].name}
                </h4>
                <p className="text-zinc-600 dark:text-zinc-300 font-sans text-sm sm:text-base leading-relaxed">
                  {featuredShrines[activeShrineIndex].description}
                </p>
                <div className="flex gap-4 border-t border-zinc-200 dark:border-zinc-800 pt-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-crimson-800 dark:text-gold shrink-0" />
                    <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 font-sans">Hours: {featuredShrines[activeShrineIndex].hours}</span>
                  </div>
                </div>
                <div className="pt-2">
                  <NavLink
                    to="/temples"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-crimson-800 dark:hover:border-gold hover:text-crimson-800 dark:hover:text-gold text-zinc-700 dark:text-zinc-300 font-semibold text-sm transition-all font-sans"
                  >
                    Explore This Shrine <ArrowRight className="w-4 h-4" />
                  </NavLink>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Daily Darshan Modal Dialog */}
      <AnimatePresence>
        {darshanModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-2xl bg-spiritual-cream dark:bg-spiritual-zincDark rounded-2xl p-6 sm:p-8 shadow-xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setDarshanModalOpen(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-950 dark:hover:text-white"
              >
                ✕
              </button>
              <h3 className="text-2xl font-serif font-bold text-crimson-800 dark:text-gold mb-2">
                Daily Darshan Live Feed
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-sans mb-6">
                Freshly uploaded screenshots from the main shrines of Matel Dham and Kagvad (Khodaldham) as of today.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="h-64 rounded-xl bg-zinc-800/10 dark:bg-zinc-900 overflow-hidden relative border border-zinc-200/10">
                    <img
                      src={TEMPLES_DATA[0].image}
                      alt="Matel Darshan"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = '/assets/hero.png'; }}
                    />
                    <span className="absolute bottom-2 left-2 bg-black/60 px-2 py-0.5 text-[10px] text-white rounded font-sans">
                      Matel Dham
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-center text-zinc-700 dark:text-zinc-300">Mangla Darshan - Matel</p>
                </div>
                
                <div className="space-y-2">
                  <div className="h-64 rounded-xl bg-zinc-800/10 dark:bg-zinc-900 overflow-hidden relative border border-zinc-200/10">
                    <img
                      src={TEMPLES_DATA[2].image}
                      alt="Kagvad Darshan"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = '/assets/hero.png'; }}
                    />
                    <span className="absolute bottom-2 left-2 bg-black/60 px-2 py-0.5 text-[10px] text-white rounded font-sans">
                      Khodaldham
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-center text-zinc-700 dark:text-zinc-300 font-sans">Shangar Darshan - Kagvad</p>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-end">
                <button
                  onClick={() => setDarshanModalOpen(false)}
                  className="px-5 py-2 rounded-full bg-crimson-800 text-white text-sm font-semibold hover:bg-crimson-700 transition-colors font-sans"
                >
                  Close Darshan
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Live Aarti Schedule Modal Dialog */}
      <AnimatePresence>
        {aartiModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-md bg-spiritual-cream dark:bg-spiritual-zincDark rounded-2xl p-6 sm:p-8 shadow-xl"
            >
              <button
                onClick={() => setAartiModalOpen(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-950 dark:hover:text-white"
              >
                ✕
              </button>
              <h3 className="text-2xl font-serif font-bold text-crimson-800 dark:text-gold mb-6">
                Aarti Broadcast Times
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-500/5 border border-zinc-200/50 dark:border-zinc-800/50">
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-850 dark:text-zinc-100">Mangla Aarti</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-sans">Morning blessings at Matel</p>
                  </div>
                  <span className="text-sm font-serif font-bold text-crimson-800 dark:text-gold">06:00 AM</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-500/5 border border-zinc-200/50 dark:border-zinc-800/50">
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-850 dark:text-zinc-100">Shangar Aarti</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-sans">Kagvad Khodaldham worship</p>
                  </div>
                  <span className="text-sm font-serif font-bold text-crimson-800 dark:text-gold">09:00 AM</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-500/5 border border-zinc-200/50 dark:border-zinc-800/50">
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-850 dark:text-zinc-100">Sandhya Aarti</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-sans">Evening prayers with lightings</p>
                  </div>
                  <span className="text-sm font-serif font-bold text-crimson-800 dark:text-gold">07:30 PM</span>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-center col-span-full">
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-sans mb-4">
                  Note: Audio recordings are available on-demand inside the Devotional Desk.
                </p>
                <button
                  onClick={() => setAartiModalOpen(false)}
                  className="w-full py-2.5 rounded-full bg-crimson-800 text-white text-sm font-semibold hover:bg-crimson-700 transition-colors font-sans"
                >
                  Close Schedule
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Home;
