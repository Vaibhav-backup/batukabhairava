import React from 'react';
import { motion } from 'framer-motion';
import { X, Coins, Sparkles, Gem, Hand, Sun } from 'lucide-react';

interface SwarnakarshanaBhairavStoryProps {
  onClose: () => void;
}

export const SwarnakarshanaBhairavStory: React.FC<SwarnakarshanaBhairavStoryProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl overflow-y-auto"
    >
      <div className="sticky top-0 z-50 flex items-center justify-between p-4 md:p-8 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center space-x-3">
          <Coins className="w-6 h-6 md:w-8 md:h-8 text-bhai-gold animate-bounce" />
          <h2 className="text-xl md:text-2xl font-serif font-bold text-white">The Attractor of Gold</h2>
        </div>
        <button
          onClick={onClose}
          className="p-2 md:p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10"
        >
          <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-20 pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-bhai-gold/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative rounded-3xl overflow-hidden border-2 border-bhai-gold/30 shadow-[0_0_50px_rgba(251,191,36,0.3)]">
              <img 
                src="https://res.cloudinary.com/dn6sk8mqh/image/upload/v1771242004/Airbrush-IMAGE-ENHANCER-1771241909335-1771241909335_wjidqr.jpg" 
                alt="Swarnakarshana Bhairav" 
                className="w-full h-auto object-cover transform transition-transform duration-[5s] group-hover:scale-110"
              />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <p className="text-[10px] uppercase text-slate-500 tracking-widest mb-1">Nature</p>
                <p className="text-white font-serif">Sattvic / Peaceful</p>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <p className="text-[10px] uppercase text-slate-500 tracking-widest mb-1">Blessing</p>
                <p className="text-white font-serif">Abundance & Wealth</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Swarna <span className="text-bhai-gold">Karshana</span></h1>
              <p className="text-bhai-gold font-serif italic text-xl md:text-2xl opacity-80">"He who attracts the Golden Light"</p>
            </div>

            <div className="space-y-6 text-slate-300 font-serif text-lg md:text-xl leading-relaxed">
              <p>
                Swarnakarshana Bhairava is the most gentle and auspicious form of Lord Bhairava. While other forms are fierce and reside in cremation grounds, Swarnakarshana Bhairava is a "Dhana Akarshana" deity, seated on a golden throne, radiating peace and prosperity.
              </p>
              
              <div className="border-l-4 border-bhai-gold/40 pl-6 py-2 bg-bhai-gold/5 rounded-r-2xl italic">
                "He holds a vessel made of the moon, filled with the nectar of immortality and overflowing with gold, diamonds, and precious gems. He is the guardian of the cosmic treasury."
              </div>

              <p>
                His worship is unique because he attracts not only material wealth (Gold) but also the "Swarna" of the soul—spiritual enlightenment. He is often called the 'Master of Lakshmi', as he provides the stability and protection required for wealth to stay and grow in a righteous way.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="flex gap-4">
                  <Gem className="w-8 h-8 text-bhai-gold shrink-0" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Cosmic Wealth</h4>
                    <p className="text-sm text-slate-400">He governs the movement of wealth and ensures that devotees never face poverty.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Sun className="w-8 h-8 text-bhai-gold shrink-0" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Golden Soul</h4>
                    <p className="text-sm text-slate-400">He transmutes the 'lead' of our lower ego into the 'gold' of divine consciousness.</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-bhai-gold/20 to-transparent p-6 rounded-3xl border border-bhai-gold/30 mt-8"
            >
              <h4 className="text-bhai-gold font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Prosperity Mantra
              </h4>
              <p className="text-2xl md:text-3xl font-serif text-white italic">
                "Om Shreem Hreem Kleem Swarnakarshana Bhairavaya Namaha"
              </p>
              <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                Worshipped particularly on Ashtami (8th day of the lunar cycle) to attract grace, clear debts, and stabilize one's financial life.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};