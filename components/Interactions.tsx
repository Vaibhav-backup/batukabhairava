import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Flame, Bell, Flower, ChevronDown, Sparkles } from 'lucide-react';
import { InteractionType } from '../types';

interface InteractionProps {
  type: InteractionType;
  onComplete: () => void;
  isCompleted: boolean;
}

// Resonant Temple Bell SFX Utility
const playTempleBell = () => {
  const bellUrl = 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3';
  const audio = new Audio(bellUrl);
  audio.volume = 0.6;
  audio.play().catch(() => {}); 
};

export const Interaction: React.FC<InteractionProps> = ({ type, onComplete, isCompleted }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dragX = useMotionValue(0);

  if (type === InteractionType.NONE) return null;

  if (isCompleted) {
    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 0.5 }} 
        className="flex flex-col items-center justify-center py-8"
      >
        <div className="text-bhai-gold text-xs uppercase tracking-[0.5em] mb-4">Ritual Sanctified</div>
        <div className="w-px h-12 bg-gradient-to-b from-bhai-gold/50 to-transparent"></div>
      </motion.div>
    );
  }

  const handleComplete = () => {
    if (type === InteractionType.RING_BELL) {
      playTempleBell();
    }
    onComplete();
  };

  const renderContent = () => {
    switch (type) {
      case InteractionType.LIGHT_LAMP:
        return (
          <div className="text-center group px-4">
            <p className="mb-8 text-gray-400 font-serif italic text-lg md:text-xl transition-colors group-hover:text-white">
              "The shadows deepen. Ignite the flame of awareness."
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleComplete}
              className="relative p-6 md:p-8 rounded-full border-2 border-bhai-gold/30 hover:border-bhai-gold shadow-[0_0_20px_rgba(251,191,36,0.1)] transition-all group overflow-hidden"
            >
              <div className="absolute inset-0 bg-bhai-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Flame className="w-8 h-8 md:w-10 md:h-10 text-bhai-gold animate-pulse" />
            </motion.button>
            <p className="mt-4 text-[10px] uppercase tracking-widest text-bhai-gold/60">Touch to Light</p>
          </div>
        );
      case InteractionType.RING_BELL:
        return (
          <div className="text-center group px-4">
            <p className="mb-8 text-gray-400 font-serif italic text-lg md:text-xl">
              "Break the silence of the mundane. Awaken the Guardian."
            </p>
            <motion.button
              animate={isHovered ? { rotate: [0, -15, 15, -15, 0] } : {}}
              transition={{ repeat: Infinity, duration: 0.5 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleComplete}
              className="p-6 md:p-8 rounded-full border-2 border-bhai-orange/30 hover:border-bhai-orange shadow-lg transition-all"
            >
              <Bell className="w-8 h-8 md:w-10 md:h-10 text-bhai-orange" />
            </motion.button>
            <p className="mt-4 text-[10px] uppercase tracking-widest text-bhai-orange/60">Invoke with Sound</p>
          </div>
        );
      case InteractionType.OFFER_FLOWER:
        return (
          <div className="text-center px-4">
            <p className="mb-8 text-gray-400 font-serif italic text-lg md:text-xl">
              "Offer the fragrance of your devotion at His feet."
            </p>
            <div className="flex justify-center items-center">
              <motion.div
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.y < -50) handleComplete();
                }}
                className="cursor-grab active:cursor-grabbing p-5 md:p-6 bg-pink-500/10 rounded-2xl border border-pink-500/30 hover:bg-pink-500/20 transition-all"
              >
                <Flower className="w-10 h-10 md:w-12 md:h-12 text-pink-400" />
                <p className="text-[9px] uppercase tracking-tighter mt-2 text-pink-300">Drag Upward</p>
              </motion.div>
            </div>
          </div>
        );
      case InteractionType.READ_MORE:
        return (
          <div className="text-center group">
            <button
              onClick={handleComplete}
              className="group flex flex-col items-center space-y-4 mx-auto"
            >
              <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/50 group-hover:text-bhai-gold transition-colors">Descend Deeper</span>
              <div className="p-3 md:p-4 rounded-full border border-white/10 group-hover:border-bhai-gold group-hover:scale-110 transition-all">
                <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white/30 group-hover:text-bhai-gold animate-bounce" />
              </div>
            </button>
          </div>
        );
      case InteractionType.APPLY_TILAK:
        return (
          <div className="text-center px-4">
            <p className="mb-8 text-gray-400 font-serif italic text-lg md:text-xl">
              "Seal the journey. Apply the Vermillion of Victory."
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={handleComplete}
              className="w-10 h-10 md:w-12 md:h-12 bg-bhai-red rounded-full shadow-[0_0_30px_rgba(220,38,38,0.5)] mx-auto relative group"
            >
              <Sparkles className="absolute -top-4 -right-4 w-5 h-5 md:w-6 md:h-6 text-bhai-gold opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
            <p className="mt-4 text-[10px] uppercase tracking-widest text-bhai-red/60">Apply Tilak</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="my-12 md:my-16 py-8 md:py-12 border-y border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent rounded-2xl md:rounded-3xl backdrop-blur-md relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-bhai-gold/50 to-transparent"></div>
      {renderContent()}
    </motion.div>
  );
};