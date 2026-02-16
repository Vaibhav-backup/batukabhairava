import React from 'react';
import { motion } from 'framer-motion';
import { X, Sparkles, Zap, Shield, Infinity as InfinityIcon, Eye } from 'lucide-react';

interface MahakalBhairavStoryProps {
  onClose: () => void;
}

export const MahakalBhairavStory: React.FC<MahakalBhairavStoryProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-3xl overflow-y-auto"
    >
      <div className="sticky top-0 z-50 flex items-center justify-between p-4 md:p-8 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center space-x-3">
          <InfinityIcon className="w-6 h-6 md:w-8 md:h-8 text-slate-200 animate-pulse" />
          <h2 className="text-xl md:text-2xl font-serif font-bold text-white">The Primordial Void</h2>
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
            <div className="absolute -inset-4 bg-slate-200/10 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700/30 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
              <img 
                src="https://res.cloudinary.com/dn6sk8mqh/image/upload/v1771243930/Screenshot_2026-02-16_174145_pqt6a9.png" 
                alt="Mahakal Bhairav" 
                className="w-full h-auto object-cover transform transition-transform duration-[5s] group-hover:scale-110"
              />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                <p className="text-[10px] uppercase text-slate-500 tracking-widest mb-1">Status</p>
                <p className="text-white font-serif">First Manifestation</p>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                <p className="text-[10px] uppercase text-slate-500 tracking-widest mb-1">Domain</p>
                <p className="text-white font-serif">Infinite Dissolution</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Mahakal <span className="text-slate-400">Bhairava</span></h1>
              <p className="text-slate-500 font-serif italic text-xl md:text-2xl opacity-80">"The Source from which All Echoes Rise"</p>
            </div>

            <div className="space-y-6 text-slate-300 font-serif text-lg md:text-xl leading-relaxed">
              <p>
                Mahakal Bhairava is the primordial root of the Bhairava lineage. He is the first manifestation of Shiva as the Protector, appearing not as a result of a boon, but as the raw expression of the Infinite Void.
              </p>
              
              <div className="border-l-4 border-slate-500/40 pl-6 py-2 bg-slate-900/50 rounded-r-2xl italic">
                "He exists before time was counted and remains after time has ceased. In Him, the creative spark of Brahma and the sustaining grace of Vishnu find their ultimate resolution."
              </div>

              <p>
                He is the Great Lord of Dissolution (Laya). While Kaal Bhairava governs the ticking of the clock, Mahakal Bhairava is the silence between the heartbeats. He is worshipped by those seeking liberation from the cycle of birth and death itself.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="flex gap-4">
                  <Eye className="w-8 h-8 text-slate-400 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Transcendent Eye</h4>
                    <p className="text-sm text-slate-400">His gaze pierces through the veil of Maya, revealing the absolute truth of non-duality.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="w-8 h-8 text-slate-400 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Ultimate Shield</h4>
                    <p className="text-sm text-slate-400">As the first guardian, He protects the very fabric of existence from cosmic chaos.</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-slate-800/20 to-transparent p-6 rounded-3xl border border-slate-700/30 mt-8"
            >
              <h4 className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Root Mantra
              </h4>
              <p className="text-2xl md:text-3xl font-serif text-white italic">
                "Om Hreem Mahakal Bhairavaya Namaha"
              </p>
              <p className="text-xs text-slate-600 mt-4 leading-relaxed">
                Invoking Mahakal Bhairava is to connect with the source energy of all protective deities. It clears the deepest karmic imprints.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};