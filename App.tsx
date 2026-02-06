import React, { useState, useEffect, useRef } from 'react';
import { storyData } from './storyData';
import { StorySection } from './components/StorySection';
import { Namavali } from './components/Namavali';
import { ArrowUp, Sparkles, ScrollText, ShieldCheck, MapPin, Feather } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ReactLenis } from 'react-lenis';

function App() {
  const [unlockedIndex, setUnlockedIndex] = useState(0);
  const [showNamavali, setShowNamavali] = useState(false);
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
    // Scroll to the start of the newly revealed section
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

  return (
    <ReactLenis root>
      <div className={`min-h-screen bg-bhai-dark text-slate-100 overflow-x-hidden transition-colors duration-[3000ms] selection:bg-bhai-gold/20 selection:text-bhai-gold`} 
           style={{ backgroundColor: `rgb(${15 + (lightIntensity * 0.1)}, ${23 + (lightIntensity * 0.05)}, ${42 + (lightIntensity * 0.02)})` }}>
        
        <AnimatePresence>
          {isSankalpaModalOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-3xl"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="max-w-md w-full bg-slate-900/50 border border-bhai-gold/20 p-6 md:p-10 rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-bhai-gold to-transparent"></div>
                <Feather className="w-10 h-10 md:w-12 md:h-12 text-bhai-gold mx-auto mb-6 opacity-80" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">Set Your Sankalpa</h2>
                <p className="text-slate-400 text-xs md:text-sm mb-8 leading-relaxed font-serif italic px-2">
                  "An intention set with a pure heart is the first step toward the Divine. What is the one obstacle you wish the Lord to remove today?"
                </p>
                <form onSubmit={handleSankalpaSubmit} className="space-y-4">
                  <input 
                    type="text" 
                    value={sankalpa}
                    onChange={(e) => setSankalpa(e.target.value)}
                    placeholder="Type your intention..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-white focus:outline-none focus:border-bhai-gold transition-colors text-center italic font-serif text-lg md:text-xl"
                    autoFocus
                  />
                  <button 
                    type="submit"
                    className="w-full py-4 bg-bhai-gold text-bhai-dark font-black rounded-2xl hover:bg-white transition-all transform active:scale-95 shadow-lg shadow-bhai-gold/20 text-sm uppercase tracking-widest"
                  >
                    Enter the Presence
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div 
            className="absolute inset-0 transition-opacity duration-[3000ms]"
            style={{ 
              background: `radial-gradient(circle at 50% 50%, rgba(251, 191, 36, ${lightIntensity * 0.0015}) 0%, transparent 70%)`,
              opacity: lightIntensity > 10 ? 1 : 0
            }}
          />
          <div className="absolute inset-0 opacity-20 mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          <motion.div 
            animate={{ opacity: [0.05, 0.1, 0.05], x: [-20, 20, -20] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-0 w-full h-[60vh] bg-gradient-to-t from-bhai-gold/10 to-transparent blur-3xl"
          />
        </div>

        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-bhai-gold origin-left z-[60] shadow-[0_0_15px_#fbbf24]"
          style={{ scaleX }}
        />

        <div className={`fixed bottom-6 right-4 md:bottom-8 md:right-8 z-[70] flex flex-col space-y-3 md:space-y-4`}>
          <AnimatePresence>
            {unlockedIndex > 0 && (
              <motion.button 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="p-3 md:p-4 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full text-white/70 hover:text-bhai-gold transition-all shadow-2xl"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 flex flex-col space-y-2">
          <motion.button
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ x: 8 }}
            onClick={() => setShowNamavali(true)}
            className="bg-slate-900/40 backdrop-blur-2xl border border-bhai-gold/20 border-l-0 p-3 md:p-4 pr-4 md:pr-6 rounded-r-3xl shadow-2xl group transition-all"
          >
            <div className="flex flex-col items-center space-y-2">
              <ScrollText className="w-5 h-5 md:w-6 md:h-6 text-bhai-gold group-hover:scale-125 transition-transform" />
              <span className="[writing-mode:vertical-lr] text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-bhai-gold font-bold">
                Namavali
              </span>
            </div>
          </motion.button>

          <motion.button
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ x: 8 }}
            onClick={() => window.open('https://www.google.com/maps/search/Batuka+Bhairava+Temple+Varanasi', '_blank')}
            className="bg-slate-900/40 backdrop-blur-2xl border border-bhai-red/20 border-l-0 p-3 md:p-4 pr-4 md:pr-6 rounded-r-3xl shadow-2xl group transition-all"
          >
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-bhai-red group-hover:animate-bounce" />
              <span className="[writing-mode:vertical-lr] text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-bhai-red font-bold">
                Temple
              </span>
            </div>
          </motion.button>
        </div>

        <AnimatePresence>
          {showNamavali && <Namavali onClose={() => setShowNamavali(false)} />}
        </AnimatePresence>

        <header className={`relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6`}>
          <motion.div className="relative mb-12 md:mb-16">
            <div className="absolute inset-0 bg-bhai-gold/30 rounded-full blur-[60px] md:blur-[80px] animate-pulse"></div>
            <div className="relative z-10 w-48 h-48 md:w-80 md:h-80 rounded-full p-1 md:p-1.5 bg-gradient-to-tr from-bhai-orange via-bhai-gold to-bhai-red shadow-[0_0_50px_rgba(251,191,36,0.3)]">
              <div className="w-full h-full rounded-full overflow-hidden border-[4px] md:border-[6px] border-bhai-dark">
                <img 
                  src="https://res.cloudinary.com/dn6sk8mqh/image/upload/v1770310739/batuka-bhairava-jayanti-understanding-the-young-bhairava-v0-uglb8gxys25f1_oqkuih.jpg" 
                  alt="Batuka Bhairava" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-4 -right-4 md:-top-6 md:-right-6">
               <Sparkles className="w-10 h-10 text-bhai-gold" />
            </motion.div>
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-7xl lg:text-9xl font-serif font-bold text-white mb-6 md:mb-8 tracking-tighter leading-tight"
          >
            Batuka <span className="text-bhai-gold italic">Bhairava</span>
          </motion.h1>
          
          <motion.div className="flex items-center justify-center space-x-4 md:space-x-6 mb-12 md:mb-16">
            <div className="w-12 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-bhai-gold"></div>
            <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-bhai-gold" />
            <div className="w-12 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-bhai-gold"></div>
          </motion.div>

          {hasSetSankalpa && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              className="mb-10 md:mb-12"
            >
              <p className="text-slate-500 text-[8px] md:text-[10px] uppercase tracking-[0.6em] mb-2">Current Sankalpa</p>
              <p className="text-bhai-gold text-xl md:text-2xl font-serif italic max-w-sm md:max-w-xl">"{sankalpa}"</p>
            </motion.div>
          )}

          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-slate-500">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4">Scroll to Begin</p>
            <div className="w-px h-12 md:h-16 bg-gradient-to-b from-bhai-gold to-transparent mx-auto"></div>
          </motion.div>
        </header>

        <main className={`relative z-10 max-w-full mx-auto pb-40 px-4 md:px-8 md:max-w-5xl`}>
          {storyData.map((segment, index) => (
            <StorySection
              key={segment.id}
              ref={(el) => (sectionRefs.current[index] = el)}
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
              className="text-center py-24 md:py-32 border-t border-white/5 mt-20"
            >
              <p className="text-bhai-gold font-serif italic text-3xl md:text-5xl mb-6 px-4">Shubh Mastu</p>
              <p className="text-slate-500 text-xs md:text-sm uppercase tracking-[0.4em] mb-12 italic px-4">Your Sankalpa is sealed with grace.</p>
              <button 
                onClick={() => setShowNamavali(true)} 
                className="px-8 md:px-16 py-4 md:py-5 bg-bhai-gold text-bhai-dark font-black text-sm md:text-xl rounded-full hover:bg-white transition-all shadow-2xl hover:shadow-bhai-gold/40 uppercase tracking-widest"
              >
                Recite 108 Sacred Names
              </button>
            </motion.div>
          )}
        </main>

        <style dangerouslySetInnerHTML={{ __html: `
          body { scrollbar-width: none; -ms-overflow-style: none; overflow-x: hidden; }
          ::-webkit-scrollbar { display: none; }
        `}} />
      </div>
    </ReactLenis>
  );
}

export default App;