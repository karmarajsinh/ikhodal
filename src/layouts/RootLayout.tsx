import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { AudioPlayer } from '../components/AudioPlayer';
import { Sun, Moon, Menu, X, Home, Video, Compass, BookOpen, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const RootLayout: React.FC = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize and monitor theme class
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/desk', label: 'Devotional Desk', icon: Video },
    { to: '/temples', label: 'Temple Locator', icon: Compass },
    { to: '/about', label: 'Maa Legacy', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-spiritual-cream text-zinc-950 dark:bg-spiritual-charcoal dark:text-zinc-50 transition-colors duration-300">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2 group">
              <span className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-crimson-800 dark:bg-gold flex items-center justify-center text-white dark:text-zinc-900 font-serif font-bold text-lg md:text-xl shadow-md group-hover:scale-105 transition-transform">
                🛕
              </span>
              <div>
                <h1 className="text-lg md:text-2xl font-serif font-bold text-crimson-800 dark:text-gold tracking-wide leading-none">
                  ikhodal.com
                </h1>
                <span className="text-[9px] md:text-[11px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-sans block mt-0.5">
                  Shree Khodiyar Maa Hub
                </span>
              </div>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `relative py-2 font-medium text-sm transition-colors hover:text-crimson-800 dark:hover:text-gold ${
                      isActive
                        ? 'text-crimson-800 dark:text-gold font-semibold'
                        : 'text-zinc-600 dark:text-zinc-300'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-crimson-800 dark:bg-gold"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-crimson-800 dark:hover:text-gold transition-colors"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-gold" /> : <Moon className="w-5 h-5" />}
              </button>
            </nav>

            {/* Mobile Actions */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 text-zinc-700 dark:text-zinc-300"
                aria-label="Toggle Theme"
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-gold" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 text-zinc-700 dark:text-zinc-300"
                aria-label="Open Mobile Menu"
              >
                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-crimson-100/10 dark:border-white/5 bg-spiritual-cream dark:bg-spiritual-charcoal"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map(({ to, label, icon: Icon }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-crimson-800/5 dark:bg-gold/5 text-crimson-800 dark:text-gold border-l-4 border-crimson-800 dark:border-gold'
                          : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50'
                      }`
                    }
                  >
                    <Icon className="w-5 h-5 shrink-0" />
                    {label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Viewport with Transitions */}
      <main className="flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex-1 flex flex-col"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Elegant Custom Footer */}
      <footer className="w-full bg-white/30 dark:bg-zinc-950/20 border-t border-crimson-800/10 dark:border-white/5 backdrop-blur-md pt-12 pb-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-crimson-800 dark:bg-gold flex items-center justify-center text-white dark:text-zinc-900 font-serif font-bold text-sm">
                🛕
              </span>
              <h2 className="text-lg font-serif font-bold text-crimson-800 dark:text-gold tracking-wide">
                ikhodal.com
              </h2>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-sans leading-relaxed">
              A premium digital gateway to experience the sacred abodes and chanting traditions of Shree Khodiyar Maa. Maintained with deep devotion and structural authenticity.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-crimson-850 dark:text-gold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400 font-sans">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to} className="hover:text-crimson-800 dark:hover:text-gold transition-colors">
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Shrines Listing */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-crimson-850 dark:text-gold">
              Maa Holy Shrines
            </h4>
            <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400 font-sans">
              <li><NavLink to="/temples" className="hover:text-crimson-800 dark:hover:text-gold transition-colors">Matel Dham (Morbi)</NavLink></li>
              <li><NavLink to="/temples" className="hover:text-crimson-800 dark:hover:text-gold transition-colors">Rajpara Mandir (Bhavnagar)</NavLink></li>
              <li><NavLink to="/temples" className="hover:text-crimson-800 dark:hover:text-gold transition-colors">Khodaldham (Kagvad)</NavLink></li>
              <li><NavLink to="/temples" className="hover:text-crimson-800 dark:hover:text-gold transition-colors">Galdhara (Dhari)</NavLink></li>
              <li><NavLink to="/temples" className="hover:text-crimson-800 dark:hover:text-gold transition-colors">Varana (Patan)</NavLink></li>
            </ul>
          </div>

          {/* Core Mantra Quote */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-crimson-850 dark:text-gold">
              Sacred Mantra
            </h4>
            <div className="p-3 rounded-lg bg-crimson-500/5 dark:bg-gold/5 border border-crimson-800/10 dark:border-gold/15">
              <p className="text-xs font-serif italic text-crimson-800 dark:text-gold leading-relaxed">
                "Om Hreem Shree Khodiyar Maayai Namah"
              </p>
              <span className="block text-[10px] text-zinc-400 dark:text-zinc-500 font-sans mt-2">
                Recite daily for inner peace, safety, and prosperity.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-sans">
            © {new Date().getFullYear()} ikhodal.com. All Rights Reserved. Devotionally crafted.
          </p>
        <div className="text-[10px] text-zinc-400 dark:text-zinc-500 flex flex-col sm:flex-row items-center gap-2 font-sans">
  <p className="flex items-center gap-1">
    Built with{" "}
    <Heart className="w-3 h-3 text-crimson-800 dark:text-gold fill-current" />
    for spiritual seekers worldwide.
  </p>

  <span className="hidden sm:inline">•</span>

  <a
    href="mailto:team@ikhodal.com"
    className="hover:text-crimson-800 dark:hover:text-gold transition-colors"
  >
    team@ikhodal.com
  </a>
</div>
        </div>
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-sans">
            © {new Date().getFullYear()} ikhodal.com. All Rights Reserved. Devotionally crafted.
          </p>
          <p className="text-[10px] text-zinc-400 dark:text-zinc-500 flex items-center gap-1 font-sans justify-center">
            Built with <Heart className="w-3 h-3 text-crimson-800 dark:text-gold fill-current" /> for spiritual seekers worldwide.
          </p>
        </div> */}
      </footer>

      {/* Persistent Audio Media Player */}
      <AudioPlayer />
    </div>
  );
};
