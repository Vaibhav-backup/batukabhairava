import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ScrollText, Play, Pause, ListMusic, ListOrdered } from 'lucide-react';
import { ashtottaraNames, sahasranamaNames } from '../namavaliData';

interface NamavaliProps {
  onClose: () => void;
}

type NamavaliType = '108' | '1000';

export const Namavali: React.FC<NamavaliProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<NamavaliType>('108');
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const audioSources = {
    '108': 'https://res.cloudinary.com/dn6sk8mqh/video/upload/v1770364210/108_Powerful_Names_of_Batuka_Bhairava_-_Shree_Ji_ztpsiv.mp3',
    '1000': 'https://res.cloudinary.com/dn6sk8mqh/video/upload/v1770366109/%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AC%E0%A4%9F%E0%A5%81%E0%A4%95%E0%A4%AD%E0%A5%88%E0%A4%B0%E0%A4%B5%E0%A4%B8%E0%A4%B9%E0%A4%B8%E0%A5%8D%E0%A4%B0%E0%A4%A8%E0%A4%BE%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%AE%E0%A5%8D_Batuk_Bhairav_Sahasranam_Stotram_-_Rajendra_Kumar_Vyas_Palji_1_jeom59.mp3'
  };

  const currentNames = activeTab === '108' ? ashtottaraNames : sahasranamaNames;
  const accentColor = activeTab === '108' ? 'text-bhai-gold' : 'text-bhai-red';
  const bgColor = activeTab === '108' ? 'bg-bhai-gold' : 'bg-bhai-red';
  const shadowColor = activeTab === '108' ? 'shadow-bhai-gold/40' : 'shadow-bhai-red/40';

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      setIsPlaying(false);
      setProgress(0);
    }
    // Reset scroll when tab changes
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const p = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(p);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-bhai-dark/98 backdrop-blur-3xl overflow-hidden flex flex-col"
    >
      {/* Header - Fixed Height */}
      <div className="flex-shrink-0 bg-bhai-dark/95 border-b border-white/10 p-4 md:p-8 z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3 md:space-x-4">
            <ScrollText className={`w-6 h-6 md:w-8 md:h-8 ${accentColor} transition-colors duration-500`} />
            <div>
              <h2 className="text-xl md:text-3xl font-serif font-bold text-white leading-tight">
                {activeTab === '108' ? 'Ashtottara Sata Namavali' : 'Batuka Bhairava Sahasranama'}
              </h2>
              <p className={`${accentColor} opacity-60 text-[10px] md:text-sm italic font-serif transition-colors duration-500`}>
                {activeTab === '108' ? '108 Sacred Names' : 'Full Sahasranama (1000 Names)'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 bg-white/5 p-1.5 rounded-2xl border border-white/10">
            <button 
              onClick={() => setActiveTab('108')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs md:text-sm font-bold tracking-widest transition-all ${activeTab === '108' ? 'bg-bhai-gold text-bhai-dark shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              <ListOrdered className="w-4 h-4" />
              <span>108</span>
            </button>
            <button 
              onClick={() => setActiveTab('1000')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs md:text-sm font-bold tracking-widest transition-all ${activeTab === '1000' ? 'bg-bhai-red text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              <ListMusic className="w-4 h-4" />
              <span>1000</span>
            </button>
          </div>

          <button 
            onClick={onClose}
            className="p-2 md:p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10"
          >
            <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto scroll-smooth custom-scrollbar" 
        data-lenis-prevent
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 pb-40">
          
          {/* Audio Player Card */}
          <div className="mb-8 md:mb-12 bg-white/5 p-4 md:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className={`absolute top-0 left-0 h-full w-1 ${bgColor} opacity-30 transition-colors duration-500`}></div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-4 md:space-x-6 w-full md:w-auto">
                <button 
                  onClick={togglePlay}
                  className={`w-14 h-14 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center ${bgColor} rounded-full text-white hover:scale-105 transition-all duration-300 ${shadowColor} shadow-xl`}
                >
                  {isPlaying ? <Pause className="w-6 h-6 md:w-10 md:h-10 fill-current" /> : <Play className="w-6 h-6 md:w-10 md:h-10 fill-current ml-1" />}
                </button>
                <div className="flex-1">
                  <p className="text-white font-serif text-lg md:text-2xl truncate">
                    {activeTab === '108' ? '108 Names (Shree Ji)' : 'Sahasranama (Rajendra Kumar Vyas)'}
                  </p>
                  <p className="text-slate-400 text-xs md:text-sm font-sans uppercase tracking-[0.2em]">Sacred Recitation</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-3">
                <div className="w-full h-1.5 md:h-3 bg-white/10 rounded-full overflow-hidden relative">
                  <motion.div 
                    className={`absolute left-0 top-0 h-full ${bgColor} transition-colors duration-500`}
                    animate={{ width: `${progress}%` }}
                    transition={{ type: 'tween', ease: 'linear' }}
                  />
                </div>
                <div className="flex justify-between w-full text-[8px] md:text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                  <span>Temple Sanctuary</span>
                  <span>{isPlaying ? 'Reciting...' : 'Silent'}</span>
                </div>
              </div>
            </div>
            <audio 
              key={activeTab}
              ref={audioRef}
              src={audioSources[activeTab]}
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleEnded}
            />
          </div>

          {/* Names Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
            <AnimatePresence mode="wait">
              {currentNames.map((name, index) => (
                <motion.div 
                  key={`${activeTab}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.002, 0.3) }}
                  className="group flex items-start space-x-3 p-3 md:p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] transition-all border border-white/5 hover:border-white/10"
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] ${accentColor} font-mono group-hover:scale-110 transition-transform`}>
                    {index + 1}
                  </div>
                  <span className="text-sm md:text-base text-slate-300 group-hover:text-white transition-colors font-serif leading-tight pt-1">
                    {name}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Footer Mantra */}
          <div className="mt-16 md:mt-24 pt-12 border-t border-white/10 text-center px-4">
            <motion.p 
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`${accentColor} font-serif italic text-xl md:text-3xl mb-4 transition-colors duration-500`}
            >
              {activeTab === '108' ? 'iti śrī baṭukabhairavāṣṭōttaraśatanāmāvaḻī' : 'iti śrī baṭukabhairava sahasranāmāvaḻī'}
            </motion.p>
            <p className="text-slate-500 text-[9px] md:text-xs font-sans uppercase tracking-[0.3em] md:tracking-[0.5em] max-w-lg mx-auto leading-relaxed">
              The sound of His name is the shield against the darkness of time.
            </p>
          </div>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(251, 191, 36, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(251, 191, 36, 0.4);
        }
      `}</style>
    </motion.div>
  );
};
