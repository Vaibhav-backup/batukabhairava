import React, { useState, useEffect, useRef } from 'react';
import { storyData } from './storyData';
import { StorySection } from './components/StorySection';
import { Namavali } from './components/Namavali';
import { BhairavaForms } from './components/BhairavaForms';
import { KaalBhairavStory } from './components/KaalBhairavStory';
import { SwarnakarshanaBhairavStory } from './components/SwarnakarshanaBhairavStory';
import { AshtaBhairavaPage } from './components/AshtaBhairavaPage';
import { ArrowUp, Sparkles, ScrollText, ShieldCheck, MapPin, Feather, Compass, Clock, Coins, Shield, Menu, X as CloseIcon } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const [unlockedIndex, setUnlockedIndex] = useState(0);
  const [showNamavali, setShowNamavali] = useState(false);
  const [showForms, setShowForms] = useState(false);
  const [showKaalBhairav, setShowKaalBhairav] = useState(false);
  const [showSwarnaBhairav, setShowSwarnaBhairav] = useState(false);
  const [showAshtaBhairav, setShowAshtaBhairav] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [sankalpa, setSankalpa] = useState('');
  const [isSankalpaModalOpen, setIsSankalpaModalOpen] = useState(true);
  const [hasSetSankalpa, setHasSetSankalpa] = useState(false);
  
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const lightIntensity = (unlockedIndex / (storyData.length - 1)) * 100;

  useEffect(() => {
    if (unlockedIndex > 0 && sectionRefs.current[unlockedIndex]) {
      setTimeout(() => {
        sectionRefs.current[unlockedIndex]?.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    }
  }, [unlockedIndex]);

  const handleSankalpaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sankalpa.trim()) {
      setHasSetSankalpa(true);
      setIsSankalpaModalOpen(false);
    }
  };

  const handleInteractionComplete = (index: number) => {
    if (index === unlockedIndex && index < storyData.length - 1) {
      setUnlockedIndex(prev => prev + 1);
    }
  };

  const mobileActions = [
    { id: 'names', label: 'Names', icon: <ScrollText className="w-5 h-5" />, color: 'text-bhai-gold', onClick: () => setShowNamavali(true) },
    { id: 'ashta', label: 'Ashta', icon: <Shield className="w-5 h-5" />, color: 'text-bhai-gold', onClick: () => setShowAshtaBhairav(true) },
    { id: 'kaal', label: 'Kaal', icon: <Clock className="w-5 h-5" />, color: 'text-bhai-red', onClick: () => setShowKaalBhairav(true) },
    { id: 'swarna', label: 'Swarna', icon: <Coins className="w-5 h-5" />, color: 'text-bhai-gold', onClick: () => setShowSwarnaBhairav(true) },
    { id: 'forms', label: 'Forms', icon: <Compass className="w-5 h-5" />, color: 'text-bhai-orange', onClick: () => setShowForms(true) },
    { id: 'temple', label: 'Temple', icon: <MapPin className="w-5 h-5" />, color: 'text-bhai-red', onClick: () => window.open('https://www.google.com/maps/search/Batuka+Bhairava+Temple+Varanasi', '_blank') },
  ];

  return (
    <div className="min-h-screen bg-bhai-dark text-slate-100 overflow-x-hidden transition-colors duration-[3000ms] selection:bg-bhai-gold/20 selection:text-bhai-gold" 
           style={{ backgroundColor: `rgb(${15 + (lightIntensity * 0.1)}, ${23 + (lightIntensity * 0.05)}, ${42 + (lightIntensity * 0.02)})` }}>
        
        <AnimatePresence>
          {isSankalpaModalOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-3xl"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="max-w-md w-full bg-slate-900/50 border border-bhai-gold/20 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-bhai-gold to-transparent"></div>
                <Feather className="w-10 h-10 text-bhai-gold mx-auto mb-6 opacity-80" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">Set Your Sankalpa</h2>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed font-serif italic">
                  "An intention set with a pure heart is the first step toward the Divine."
                </p>
                <form onSubmit={handleSankalpaSubmit} className="space-y-4">
                  <input 
                    type="text" 
                    value={sankalpa}
                    onChange={(e) => setSankalpa(e.target.value)}
                    placeholder="Your intention..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-bhai-gold transition-colors text-center italic font-serif text-lg"
                    autoFocus
                  />
                  <button 
                    type="submit"
                    className="w-full py-4 bg-bhai-gold text-bhai-dark font-black rounded-xl hover:bg-white transition-all shadow-lg text-sm uppercase tracking-widest"
                  >
                    Enter the Presence
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0 opacity-10 mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          <motion.div 
            animate={{ opacity: [0.05, 0.1, 0.05], x: [-20, 20, -20] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-0 w-full h-[60vh] bg-gradient-to-t from-bhai-gold/10 to-transparent blur-3xl"
          />
        </div>

        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-bhai-gold origin-left z-[210] shadow-[0_0_15px_#fbbf24]"
          style={{ scaleX }}
        />

        {/* Mobile Navigation FAB */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[150] md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="flex items-center space-x-2 px-6 py-4 bg-slate-900/90 backdrop-blur-xl border border-bhai-gold/30 rounded-full text-bhai-gold shadow-2xl shadow-black/50"
          >
            {showMobileMenu ? <CloseIcon className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Divine Menu</span>
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {showMobileMenu && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="fixed inset-0 z-[140] bg-black/90 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center p-8"
            >
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                {mobileActions.map((action) => (
                  <motion.button
                    key={action.id}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      action.onClick();
                      setShowMobileMenu(false);
                    }}
                    className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-3xl"
                  >
                    <div className={`${action.color} mb-2`}>{action.icon}</div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-white/70">{action.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="fixed bottom-6 right-6 z-[70] flex flex-col space-y-3">
          <AnimatePresence>
            {unlockedIndex > 0 && (
              <motion.button 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="p-4 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full text-white/70 hover:text-bhai-gold shadow-2xl"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Sidebar (Left) */}
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col space-y-2">
          <motion.button
            whileHover={{ x: 8 }}
            onClick={() => setShowNamavali(true)}
            className="bg-slate-900/40 backdrop-blur-2xl border border-bhai-gold/20 border-l-0 p-4 pr-6 rounded-r-3xl group transition-all"
          >
            <div className="flex flex-col items-center space-y-2">
              <ScrollText className="w-6 h-6 text-bhai-gold group-hover:scale-125 transition-transform" />
              <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.4em] text-bhai-gold font-bold">Names</span>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ x: 8 }}
            onClick={() => window.open('https://www.google.com/maps/search/Batuka+Bhairava+Temple+Varanasi', '_blank')}
            className="bg-slate-900/40 backdrop-blur-2xl border border-bhai-red/20 border-l-0 p-4 pr-6 rounded-r-3xl group transition-all"
          >
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-6 h-6 text-bhai-red group-hover:animate-bounce" />
              <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.4em] text-bhai-red font-bold">Temple</span>
            </div>
          </motion.button>
        </div>

        {/* Desktop Sidebar (Right) */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col space-y-2">
          <motion.button
            whileHover={{ x: -8 }}
            onClick={() => setShowForms(true)}
            className="bg-slate-900/40 backdrop-blur-2xl border border-bhai-orange/20 border-r-0 p-4 pl-6 rounded-l-3xl group transition-all"
          >
            <div className="flex flex-col items-center space-y-2">
              <Compass className="w-6 h-6 text-bhai-orange group-hover:rotate-90 transition-transform duration-500" />
              <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.4em] text-bhai-orange font-bold">Forms</span>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ x: -8 }}
            onClick={() => setShowAshtaBhairav(true)}
            className="bg-slate-900/40 backdrop-blur-2xl border border-bhai-gold/20 border-r-0 p-4 pl-6 rounded-l-3xl group transition-all"
          >
            <div className="flex flex-col items-center space-y-2">
              <Shield className="w-6 h-6 text-bhai-gold group-hover:scale-110 transition-transform" />
              <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.4em] text-bhai-gold font-bold">Ashta</span>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ x: -8 }}
            onClick={() => setShowKaalBhairav(true)}
            className="bg-slate-900/40 backdrop-blur-2xl border border-bhai-red/20 border-r-0 p-4 pl-6 rounded-l-3xl group transition-all"
          >
            <div className="flex flex-col items-center space-y-2">
              <Clock className="w-6 h-6 text-bhai-red group-hover:scale-110" />
              <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.4em] text-bhai-red font-bold">Kaal</span>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ x: -8 }}
            onClick={() => setShowSwarnaBhairav(true)}
            className="bg-slate-900/40 backdrop-blur-2xl border border-bhai-gold/20 border-r-0 p-4 pl-6 rounded-l-3xl group transition-all"
          >
            <div className="flex flex-col items-center space-y-2">
              <Coins className="w-6 h-6 text-bhai-gold group-hover:animate-pulse" />
              <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.4em] text-bhai-gold font-bold">Swarna</span>
            </div>
          </motion.button>
        </div>

        <AnimatePresence>
          {showNamavali && <Namavali onClose={() => setShowNamavali(false)} />}
          {showForms && <BhairavaForms onClose={() => setShowForms(false)} />}
          {showKaalBhairav && <KaalBhairavStory onClose={() => setShowKaalBhairav(false)} />}
          {showSwarnaBhairav && <SwarnakarshanaBhairavStory onClose={() => setShowSwarnaBhairav(false)} />}
          {showAshtaBhairav && <AshtaBhairavaPage onClose={() => setShowAshtaBhairav(false)} />}
        </AnimatePresence>

        <header className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-6">
          <motion.div className="relative mb-8 md:mb-16">
            <div className="absolute inset-0 bg-bhai-gold/30 rounded-full blur-[40px] md:blur-[80px] animate-pulse"></div>
            <div className="relative z-10 w-40 h-40 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-tr from-bhai-orange via-bhai-gold to-bhai-red">
              <div className="w-full h-full rounded-full overflow-hidden border-[3px] md:border-[6px] border-bhai-dark">
                <img 
                  src="https://res.cloudinary.com/dn6sk8mqh/image/upload/v1770310739/batuka-bhairava-jayanti-understanding-the-young-bhairava-v0-uglb8gxys25f1_oqkuih.jpg" 
                  alt="Batuka Bhairava" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-white mb-6 tracking-tighter leading-tight"
          >
            Batuka <span className="text-bhai-gold italic">Bhairava</span>
          </motion.h1>
          
          <motion.div className="flex items-center justify-center space-x-4 mb-12">
            <div className="w-8 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-bhai-gold"></div>
            <ShieldCheck className="w-5 h-5 text-bhai-gold" />
            <div className="w-8 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-bhai-gold"></div>
          </motion.div>

          {hasSetSankalpa && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
              <p className="text-slate-500 text-[10px] uppercase tracking-[0.4em] mb-1">Your Sankalpa</p>
              <p className="text-bhai-gold text-lg md:text-2xl font-serif italic">"{sankalpa}"</p>
            </motion.div>
          )}

          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-slate-500">
            <p className="text-[10px] uppercase tracking-[0.5em] mb-2">Scroll to Begin</p>
            <div className="w-px h-12 bg-gradient-to-b from-bhai-gold to-transparent mx-auto"></div>
          </motion.div>
        </header>

        <main className="relative z-10 max-w-full mx-auto pb-40 px-4 md:px-8 md:max-w-4xl lg:max-w-5xl">
          {storyData.map((segment, index) => (
            <StorySection
              key={segment.id}
              ref={(el) => { sectionRefs.current[index] = el; }}
              segment={segment}
              isVisible={index <= unlockedIndex}
              isInteractionCompleted={index < unlockedIndex}
              onInteractionComplete={() => handleInteractionComplete(index)}
            />
          ))}

          {unlockedIndex === storyData.length - 1 && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center py-20 border-t border-white/5 mt-12"
            >
              <p className="text-bhai-gold font-serif italic text-3xl md:text-5xl mb-6">Shubh Mastu</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => setShowNamavali(true)} 
                  className="w-full sm:w-auto px-8 py-4 bg-bhai-gold text-bhai-dark font-black rounded-full shadow-lg text-sm uppercase tracking-widest"
                >
                  Recite Names
                </button>
                <button 
                  onClick={() => setShowAshtaBhairav(true)} 
                  className="w-full sm:w-auto px-8 py-4 border border-bhai-gold/30 text-bhai-gold font-black rounded-full hover:bg-bhai-gold/10 text-sm uppercase tracking-widest"
                >
                  The Eight Forms
                </button>
              </div>
            </motion.div>
          )}
        </main>
      </div>
  );
}

export default App;