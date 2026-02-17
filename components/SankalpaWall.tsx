
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Users, Heart, X } from 'lucide-react';

interface SankalpaSpark {
  id: string;
  text: string;
  x: number;
  y: number;
  scale: number;
  duration: number;
  isUser?: boolean;
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

interface SankalpaWallProps {
  userSankalpa?: string;
  globalSankalpas?: string[];
  onClose?: () => void;
  isOverlay?: boolean;
}

export const SankalpaWall: React.FC<SankalpaWallProps> = ({ 
  userSankalpa, 
  globalSankalpas = [], 
  onClose, 
  isOverlay = false 
}) => {
  const [sparks, setSparks] = useState<SankalpaSpark[]>([]);

  // Memoize all available texts to avoid re-calculating
  const allAvailableTexts = useMemo(() => {
    return [...mockSankalpas, ...globalSankalpas];
  }, [globalSankalpas]);

  useEffect(() => {
    // Initial sparks
    const initialSparks = Array.from({ length: 15 }).map((_, i) => ({
      id: `init-${i}`,
      text: allAvailableTexts[Math.floor(Math.random() * allAvailableTexts.length)],
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 20,
      scale: Math.random() * 0.5 + 0.8,
      duration: Math.random() * 10 + 15
    }));
    setSparks(initialSparks);

    // Continuous flow
    const interval = setInterval(() => {
      const isFromUserList = globalSankalpas.length > 0 && Math.random() > 0.7;
      const textPool = isFromUserList ? globalSankalpas : mockSankalpas;
      
      const newSpark = {
        id: Math.random().toString(36).substr(2, 9),
        text: textPool[Math.floor(Math.random() * textPool.length)],
        x: Math.random() * 80 + 10,
        y: 100,
        scale: Math.random() * 0.4 + 0.8,
        duration: Math.random() * 15 + 20,
        isUser: isFromUserList
      };
      setSparks(prev => [...prev.slice(-25), newSpark]);
    }, 3000);

    return () => clearInterval(interval);
  }, [allAvailableTexts, globalSankalpas]);

  const content = (
    <div className={`relative w-full ${isOverlay ? 'min-h-screen pt-24' : 'min-h-[60vh] rounded-[3rem]'} bg-slate-950/50 border border-white/5 overflow-hidden p-8 md:p-16`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(251,191,36,0.05),transparent)]"></div>
      
      {isOverlay && onClose && (
        <div className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between p-4 md:p-8 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
          <div className="flex items-center space-x-3">
            <Users className="w-6 h-6 text-bhai-gold" />
            <h2 className="text-xl md:text-2xl font-serif font-bold text-white">Global Sankalpa</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 md:p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10"
          >
            <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
        </div>
      )}

      <div className="relative z-10 text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-bhai-gold animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-bhai-gold/60">Community intentions</span>
        </div>
        <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-4">The Global Wall of Grace</h2>
        <p className="text-slate-400 font-serif italic max-w-xl mx-auto text-sm md:text-lg">
          {globalSankalpas.length + mockSankalpas.length} intentions lighting the path.
        </p>
      </div>

      <div className="relative h-[500px] w-full">
        <AnimatePresence>
          {sparks.map((spark) => (
            <motion.div
              key={spark.id}
              initial={{ opacity: 0, y: 150, x: `${spark.x}%` }}
              animate={{ 
                opacity: [0, 1, 1, 0], 
                y: -350, 
                x: `${spark.x + (Math.random() * 20 - 10)}%` 
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: spark.duration, ease: "linear" }}
              className="absolute pointer-events-none"
              style={{ scale: spark.scale }}
            >
              <div className="flex flex-col items-center">
                <div className={`backdrop-blur-md border px-4 py-2 rounded-full shadow-lg ${
                  spark.isUser 
                    ? 'bg-bhai-red/10 border-bhai-red/30 text-white shadow-bhai-red/20' 
                    : 'bg-white/5 border-white/10 text-white/70 shadow-black/50'
                }`}>
                  <p className="font-serif italic text-xs md:text-sm whitespace-nowrap">"{spark.text}"</p>
                </div>
                <div className={`w-1.5 h-1.5 rounded-full mt-2 animate-pulse ${
                  spark.isUser ? 'bg-bhai-red shadow-[0_0_10px_#dc2626]' : 'bg-bhai-gold/60 shadow-[0_0_8px_#fbbf24]'
                }`}></div>
              </div>
            </motion.div>
          ))}

          {userSankalpa && (
             <motion.div
             initial={{ opacity: 0, scale: 0 }}
             animate={{ opacity: 1, scale: 1 }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
           >
             <div className="flex flex-col items-center">
               <motion.div 
                 animate={{ scale: [1, 1.05, 1] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="bg-bhai-red/10 backdrop-blur-3xl border border-bhai-red/30 px-8 py-6 rounded-[2rem] shadow-[0_0_50px_rgba(220,38,38,0.25)] relative overflow-hidden"
               >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-bhai-red/50 to-transparent"></div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-bhai-red font-bold mb-2 text-center">Your Sacred Intention</p>
                  <p className="text-white font-serif italic text-2xl md:text-4xl text-center leading-tight">"{userSankalpa}"</p>
                  <Heart className="w-5 h-5 text-bhai-red mx-auto mt-4 fill-current animate-pulse" />
               </motion.div>
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

  if (isOverlay) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-slate-950/98 backdrop-blur-3xl overflow-y-auto"
      >
        {content}
      </motion.div>
    );
  }

  return content;
};
