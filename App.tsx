import React, { useState, useEffect, useRef } from 'react';
import { storyData } from './storyData';
import { StorySection } from './components/StorySection';
import { Namavali } from './components/Namavali';
import { ArrowUp, ScrollText, MapPin, Feather, Loader2 } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ReactLenis } from 'react-lenis';

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbw7whilVfsmJ_KpfCqJcZs0b7I9InDmaSiQUtdMPTtJOLpL2b6ggPqImFfuctVDSWg_gw/exec'; 

function App() {
  const [unlockedIndex, setUnlockedIndex] = useState(0);
  const [showNamavali, setShowNamavali] = useState(false);
  const [sankalpa, setSankalpa] = useState('');
  const [isSankalpaModalOpen, setIsSankalpaModalOpen] = useState(true);
  const [hasSetSankalpa, setHasSetSankalpa] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const lightIntensity = (unlockedIndex / (storyData.length - 1)) * 100;

  useEffect(() => {
    // Only scroll to view if the Sankalpa is already set
    if (hasSetSankalpa && unlockedIndex > 0 && sectionRefs.current[unlockedIndex]) {
      setTimeout(() => {
        sectionRefs.current[unlockedIndex]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500);
    }
  }, [unlockedIndex, hasSetSankalpa]);

  const handleSankalpaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sankalpa.trim()) return;

    setIsSubmitting(true);

    try {
      if (GOOGLE_SHEET_URL) {
        // No-cors mode allows triggering the script without CORS headers requirements from Apps Script
        await fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            sankalpa, 
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent
          }),
        });
      }
    } catch (error) {
      console.error('Sheet submission failed:', error);
    } finally {
      setIsSubmitting(false);
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
    <ReactLenis root options={{ 
      lerp: 0.1, 
      duration: 1.2, 
      smoothWheel: true, 
      wheelMultiplier: 1, 
      touchMultiplier: 2
    }}>
      <div 
        className="relative min-h-screen text-slate-100 selection:bg-bhai-gold/20 selection:text-bhai-gold transition-colors duration-[3000ms]" 
        style={{ 
          backgroundColor: `rgb(${7 + (lightIntensity * 0.1)}, ${11 + (lightIntensity * 0.05)}, ${20 + (lightIntensity * 0.02)})` 
        }}
      >
        
        {/* Intention Ritual Modal */}
        <AnimatePresence>
          {isSankalpaModalOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            >
              <motion.div 
                initial={{ scale: 0.95, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                className="max-w-md w-full bg-slate-900/40 border border-bhai-gold/10 p-8 md:p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden backdrop-blur-md"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-bhai-gold to-transparent opacity-50"></div>
                
                <Feather className="w-12 h-12 text-bhai-gold mx-auto mb-8 opacity-60 animate-bounce" />
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Enter the Sanctuary</h2>
                <p className="text-slate-400 text-sm mb-10 leading-relaxed font-serif italic">
                  "Before the Lord of Time, an intention is a seed of destiny. What obstacle shall we offer to the flames today?"
                </p>
                <form onSubmit={handleSankalpaSubmit} className="space-y-6">
                  <input 
                    type="text" 
                    value={sankalpa}
                    onChange={(e) => setSankalpa(e.target.value)}
                    placeholder="Your sacred intention..."
                    disabled={isSubmitting}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-bhai-gold transition-all text-center italic font-serif text-xl disabled:opacity-50"
                    autoFocus
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-bhai-gold text-bhai-dark font-black rounded-2xl hover:bg-white transition-all transform active:scale-95 shadow-xl shadow-bhai-gold/10 text-xs uppercase tracking-[0.3em] flex items-center justify-center space-x-3"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Offering...</span>
                      </>
                    ) : (
                      <span>Initiate Journey</span>
                    )}
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Atmosphere Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div 
            className="absolute inset-0 transition-opacity duration-[3000ms]"
            style={{ 
              background: `radial-gradient(circle at 50% 30%, rgba(251, 191, 36, ${0.03 + (lightIntensity * 0.0005)}) 0%, transparent 70%)`
            }}
          />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dust.png')]"></div>
        </div>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-bhai-gold origin-left z-[60] shadow-[0_0_20px_#fbbf24]"
          style={{ scaleX }}
        />

        {/* Floating Actions */}
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 flex flex-col space-y-3">
          <motion.button
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ x: 10 }}
            onClick={() => setShowNamavali(true)}
            className="bg-slate-900/60 backdrop-blur-3xl border border-bhai-gold/20 border-l-0 p-4 pr-6 rounded-r-[2rem] shadow-2xl group transition-all"
          >
            <div className="flex flex-col items-center space-y-3">
              <ScrollText className="w-6 h-6 text-bhai-gold group-hover:scale-110 transition-transform" />
              <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.5em] text-bhai-gold font-bold">
                Namavali
              </span>
            </div>
          </motion.button>

          <motion.button
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ x: 10 }}
            onClick={() => window.open('https://www.google.com/maps/search/Batuka+Bhairava+Temple+Varanasi', '_blank')}
            className="bg-slate-900/60 backdrop-blur-3xl border border-bhai-red/20 border-l-0 p-4 pr-6 rounded-r-[2rem] shadow-2xl group transition-all"
          >
            <div className="flex flex-col items-center space-y-3">
              <MapPin className="w-6 h-6 text-bhai-red group-hover:animate-bounce" />
              <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.5em] text-bhai-red font-bold">
                Temple
              </span>
            </div>
          </motion.button>
        </div>

        <AnimatePresence>
          {showNamavali && <Namavali onClose={() => setShowNamavali(false)} />}
        </AnimatePresence>

        {/* Hero Header */}
        <header className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="relative mb-16"
          >
            <div className="absolute inset-0 bg-bhai-gold/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="relative z-10 w-64 h-64 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-bhai-orange via-bhai-gold to-bhai-red shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden border-[8px] border-bhai-dark">
                <img 
                  src="https://res.cloudinary.com/dn6sk8mqh/image/upload/v1770310739/batuka-bhairava-jayanti-understanding-the-young-bhairava-v0-uglb8gxys25f1_oqkuih.jpg" 
                  alt="Batuka Bhairava" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 scale-110"
                />
              </div>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-8 tracking-tighter leading-none"
          >
            Batuka <span className="text-bhai-gold italic">Bhairava</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-bhai-gold/60 text-xs md:text-sm uppercase tracking-[0.8em] font-light mb-12"
          >
            The Radiant Child-God of Kashi
          </motion.p>

          {hasSetSankalpa && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="mb-16 p-6 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-3xl"
            >
              <p className="text-slate-500 text-[9px] uppercase tracking-[0.5em] mb-3">Intention Set</p>
              <p className="text-bhai-gold text-2xl md:text-3xl font-serif italic">"{sankalpa}"</p>
            </motion.div>
          )}

          <motion.div 
            animate={{ y: [0, 15, 0] }} 
            transition={{ duration: 3, repeat: Infinity }} 
            className="text-slate-500 mt-8"
          >
            <p className="text-[10px] uppercase tracking-[0.5em] mb-4 opacity-50">Descend into Grace</p>
            <div className="w-px h-20 bg-gradient-to-b from-bhai-gold to-transparent mx-auto"></div>
          </motion.div>
        </header>

        {/* Narrative Flow */}
        <main className="relative z-10 max-w-4xl mx-auto pb-64 px-6">
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

          {/* Completion Ritual */}
          {unlockedIndex === storyData.length - 1 && (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center py-32 mt-32 relative"
            >
              <div className="absolute inset-0 bg-bhai-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
              <p className="text-bhai-gold font-serif italic text-4xl md:text-6xl mb-8">Shubh Mastu</p>
              <p className="text-slate-500 text-xs md:text-sm uppercase tracking-[0.5em] mb-16 leading-relaxed italic">
                The journey is complete. Your intention is heard.<br/>The Guardian walks with you.
              </p>
              <button 
                onClick={() => setShowNamavali(true)} 
                className="group relative px-12 py-6 bg-bhai-gold text-bhai-dark font-black text-lg rounded-full hover:bg-white transition-all shadow-2xl hover:shadow-bhai-gold/40 uppercase tracking-[0.2em] overflow-hidden"
              >
                <span className="relative z-10">Recite 108 Sacred Names</span>
                <motion.div 
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </button>
            </motion.div>
          )}
        </main>

        <footer className="relative z-10 py-12 text-center border-t border-white/5 opacity-30 text-[10px] uppercase tracking-[0.4em]">
          Om Shanti Shanti Shanti
        </footer>

        {/* Scroll to Top */}
        <AnimatePresence>
          {unlockedIndex > 0 && (
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-10 right-10 p-5 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-full text-bhai-gold transition-all shadow-2xl z-[70] hover:bg-bhai-gold hover:text-bhai-dark"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </ReactLenis>
  );
}

export default App;