import React, { useState, useEffect, useRef } from 'react';
import { storyData } from './storyData';
import { StorySection } from './components/StorySection';
import { ArrowUp, Sparkles } from 'lucide-react';

function App() {
  const [unlockedIndex, setUnlockedIndex] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll when new section is unlocked
  useEffect(() => {
    if (unlockedIndex > 0 && bottomRef.current) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [unlockedIndex]);

  const handleInteractionComplete = (index: number) => {
    if (index === unlockedIndex && index < storyData.length - 1) {
      setUnlockedIndex(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-bhai-dark bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-bhai-dark to-black text-slate-100 overflow-x-hidden selection:bg-bhai-orange selection:text-white">
      
      {/* Ambient Background Particles (Simplified) */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>

      {/* Header/Hero */}
      <header className="relative z-10 min-h-[60vh] flex flex-col items-center justify-center text-center px-4 pt-20 pb-10">
        <div className="animate-pulse-slow mb-6">
          <Sparkles className="w-16 h-16 text-bhai-gold opacity-80" />
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
          Batuka <span className="text-bhai-gold">Bhairava</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto mb-8">
          The Child. The Warrior. The Guardian.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-bhai-orange to-transparent opacity-50"></div>
        <p className="mt-8 text-sm text-slate-500 uppercase tracking-widest">
          A Devotional Journey
        </p>
      </header>

      {/* Main Story Container */}
      <main className="relative z-10 max-w-4xl mx-auto pb-40">
        
        {/* Render sections up to the unlocked index */}
        {storyData.map((segment, index) => (
          <StorySection
            key={segment.id}
            segment={segment}
            isVisible={index <= unlockedIndex}
            isInteractionCompleted={index < unlockedIndex}
            onInteractionComplete={() => handleInteractionComplete(index)}
          />
        ))}

        <div ref={bottomRef} className="h-2" />
        
        {/* Footer / End of content marker */}
        {unlockedIndex === storyData.length - 1 && (
          <div className="text-center py-20 opacity-0 animate-[fadeIn_2s_ease-in_forwards]">
            <p className="text-bhai-gold font-serif italic text-2xl mb-4">
              Shubh Mastu
            </p>
            <p className="text-slate-500 text-sm">
              (Let there be auspiciousness)
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-12 p-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-6 h-6 text-slate-400" />
            </button>
          </div>
        )}

      </main>

      {/* Fixed Sticky Progress/Ambience bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-bhai-orange via-bhai-gold to-bhai-orange transition-all duration-1000 ease-out"
          style={{ width: `${((unlockedIndex + 1) / storyData.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

export default App;