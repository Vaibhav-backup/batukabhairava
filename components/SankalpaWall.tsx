
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Users, Heart } from 'lucide-react';

interface SankalpaSpark {
  id: string;
  text: string;
  x: number;
  y: number;
  scale: number;
  duration: number;
}

const mockSankalpas = [
  "Healing for my family",
  "Strength to overcome addiction",
  "Success in upcoming exams",
  "Inner peace and stillness",
  "Protection for all beings",
  "Guidance in my career",
  "Grateful for life's blessings",
  "Fearlessness in the face of change",
  "Clarity of thought and purpose",
  "Compassion for my enemies",
  "A safe journey home",
  "Spiritual awakening"
];

export const SankalpaWall: React.FC<{ userSankalpa?: string }> = ({ userSankalpa }) => {
  const [sparks, setSparks] = useState<SankalpaSpark[]>([]);

  useEffect(() => {
    // Initialize with some sparks
    const initialSparks = Array.from({ length: 8 }).map((_, i) => ({
      id: `init-${i}`,
      text: mockSankalpas[Math.floor(Math.random() * mockSankalpas.length)],
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 20,
      scale: Math.random() * 0.5 + 0.8,
      duration: Math.random() * 10 + 15
    }));
    setSparks(initialSparks);

    // Occasionally add new sparks to simulate real-time
    const interval = setInterval(() => {
      const newSpark = {
        id: Math.random().toString(36).substr(2, 9),
        text: mockSankalpas[Math.floor(Math.random() * mockSankalpas.length)],
        x: Math.random() * 80 + 10,
        y: 100, // Start from bottom
        scale: Math.random() * 0.4 + 0.8,
        duration: Math.random() * 15 + 20
      };
      setSparks(prev => [...prev.slice(-15), newSpark]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[50vh] bg-slate-950/50 rounded-[3rem] border border-white/5 overflow-hidden my-20 p-8 md:p-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(251,191,36,0.05),transparent)]"></div>
      
      <div className="relative z-10 text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Users className="w-5 h-5 text-bhai-gold" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-bhai-gold/60">Community intentions</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">The Global Wall of Grace</h2>
        <p className="text-slate-400 font-serif italic max-w-xl mx-auto text-sm md:text-base">
          Every spark represents a soul seeking the Guardian. You are not alone in your prayer.
        </p>
      </div>

      <div className="relative h-[400px] w-full">
        <AnimatePresence>
          {sparks.map((spark) => (
            <motion.div
              key={spark.id}
              initial={{ opacity: 0, y: 100, x: `${spark.x}%` }}
              animate={{ 
                opacity: [0, 1, 1, 0], 
                y: -200, 
                x: `${spark.x + (Math.random() * 10 - 5)}%` 
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: spark.duration, ease: "linear" }}
              className="absolute pointer-events-none"
              style={{ scale: spark.scale }}
            >
              <div className="flex flex-col items-center">
                <div className="bg-bhai-gold/10 backdrop-blur-md border border-bhai-gold/20 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.1)]">
                  <p className="text-white/80 font-serif italic text-xs md:text-sm whitespace-nowrap">"{spark.text}"</p>
                </div>
                <div className="w-1 h-1 bg-bhai-gold rounded-full mt-2 animate-pulse shadow-[0_0_10px_#fbbf24]"></div>
              </div>
            </motion.div>
          ))}

          {userSankalpa && (
             <motion.div
             initial={{ opacity: 0, scale: 0 }}
             animate={{ opacity: 1, scale: 1.2 }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
           >
             <div className="flex flex-col items-center">
               <div className="bg-bhai-red/20 backdrop-blur-2xl border border-bhai-red/40 px-6 py-4 rounded-3xl shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                  <p className="text-[10px] uppercase tracking-widest text-bhai-red font-bold mb-1 text-center">Your Sacred Intention</p>
                  <p className="text-white font-serif italic text-xl md:text-2xl text-center">"{userSankalpa}"</p>
                  <Heart className="w-4 h-4 text-bhai-red mx-auto mt-3 fill-current animate-pulse" />
               </div>
             </div>
           </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 text-slate-600">
        <Sparkles className="w-3 h-3" />
        <span className="text-[9px] uppercase tracking-widest font-bold italic">Intention sparks are anonymous and eternal</span>
      </div>
    </div>
  );
};
