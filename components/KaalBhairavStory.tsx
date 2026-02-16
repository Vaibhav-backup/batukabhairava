import React from 'react';
import { motion } from 'framer-motion';
import { X, Clock, Sword, ShieldAlert, MapPin, Sparkles } from 'lucide-react';

interface KaalBhairavStoryProps {
  onClose: () => void;
}

export const KaalBhairavStory: React.FC<KaalBhairavStoryProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl overflow-y-auto"
    >
      <div className="sticky top-0 z-50 flex items-center justify-between p-4 md:p-8 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center space-x-3">
          <Clock className="w-6 h-6 md:w-8 md:h-8 text-bhai-red animate-pulse" />
          <h2 className="text-xl md:text-2xl font-serif font-bold text-white">The Lord of Time</h2>
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
            <div className="absolute -inset-4 bg-bhai-red/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative rounded-3xl overflow-hidden border-2 border-bhai-red/30 shadow-[0_0_50px_rgba(220,38,38,0.3)]">
              <img 
                src="https://res.cloudinary.com/dn6sk8mqh/image/upload/v1771241449/kaal_bhairav_hffdps.jpg" 
                alt="Kaal Bhairav" 
                className="w-full h-auto object-cover transform transition-transform duration-[5s] group-hover:scale-110"
              />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <p className="text-[10px] uppercase text-slate-500 tracking-widest mb-1">Manifestation</p>
                <p className="text-white font-serif">Shiva's Wrath</p>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <p className="text-[10px] uppercase text-slate-500 tracking-widest mb-1">Vahana</p>
                <p className="text-white font-serif">Shvana (Dog)</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Kaal <span className="text-bhai-red">Bhairava</span></h1>
              <p className="text-bhai-red font-serif italic text-xl md:text-2xl opacity-80">"The Terrible Form of Time"</p>
            </div>

            <div className="space-y-6 text-slate-300 font-serif text-lg md:text-xl leading-relaxed">
              <p>
                Kaal Bhairava is the terrifying manifestation of Lord Shiva, associated with annihilation and the absolute rule of Time. He appeared from the mid-brow of Shiva (the third eye) during a cosmic dispute between Brahma and Vishnu.
              </p>
              
              <div className="border-l-4 border-bhai-red/40 pl-6 py-2 bg-bhai-red/5 rounded-r-2xl italic">
                "When Brahma's fifth head spoke with arrogance, Shiva's wrath materialized as Kaal Bhairava. With a flick of his fingernail, he severed the head, teaching that even creators are subject to the laws of the Universe."
              </div>

              <p>
                As the 'Kotwal' or Divine Police Officer of Kashi, it is said that no one can enter the city of Varanasi without his permission. He is the guardian of the sacred threshold, the one who destroys the ego of the seeker before they can face the ultimate light of Vishwanatha.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="flex gap-4">
                  <Sword className="w-8 h-8 text-bhai-red shrink-0" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Punisher of Sins</h4>
                    <p className="text-sm text-slate-400">He holds the Kapala (skull) of Brahma, reminding us of the transient nature of life and pride.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="w-8 h-8 text-bhai-red shrink-0" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Kashi Kotwal</h4>
                    <p className="text-sm text-slate-400">The supreme administrator of the City of Light, ensuring justice for all souls.</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-bhai-red/20 to-transparent p-6 rounded-3xl border border-bhai-red/30 mt-8"
            >
              <h4 className="text-bhai-red font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Sacred Mantra
              </h4>
              <p className="text-2xl md:text-3xl font-serif text-white italic">
                "Om Hreem Kaal Bhairavaya Namaha"
              </p>
              <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                Reciting this mantra is believed to destroy the fear of death and remove the most stubborn obstacles in one's life.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};