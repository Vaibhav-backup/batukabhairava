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

  const audioSources = {
    '108': 'https://res.cloudinary.com/dn6sk8mqh/video/upload/v1770364210/108_Powerful_Names_of_Batuka_Bhairava_-_Shree_Ji_ztpsiv.mp3',
    '1000': 'https://res.cloudinary.com/dn6sk8mqh/video/upload/v1770366109/%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AC%E0%A4%9F%E0%A5%81%E0%A4%95%E0%A4%AD%E0%A5%88%E0%A4%B0%E0%A4%B5%E0%A4%B8%E0%A4%B9%E0%A4%B8%E0%A5%8D%E0%A4%B0%E0%A4%A8%E0%A4%BE%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%AE%E0%A5%8D_Batuk_Bhairav_Sahasranam_Stotram_-_Rajendra_Kumar_Vyas_Palji_1_jeom59.mp3'
  };

  const currentNames = activeTab === '108' ? ashtottaraNames : sahasranamaNames;
  const accentColor = activeTab === '108' ? 'text-bhai-gold' : 'text-bhai-red';
  const bgColor = activeTab === '108' ? 'bg-bhai-gold' : 'bg-bhai-red';

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      setIsPlaying(false);
      setProgress(0);
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

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-bhai-dark/98 backdrop-blur-3xl overflow-y-auto"
    >
      <div className="max-w-6xl mx-auto px-4 py-8 pb-40">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 sticky top-0 bg-bhai-dark/95 backdrop-blur-md z-50 p-4 rounded-2xl border border-white/5 gap-4">
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <ScrollText className={`w-6 h-6 ${accentColor}`} />
            <h2 className="text-lg md:text-2xl font-serif font-bold text-white truncate">
              {activeTab === '108' ? '108 Names' : 'Sahasranama'}
            </h2>
          </div>

          <div className="flex items-center space-x-2 bg-white/5 p-1 rounded-xl w-full md:w-auto justify-center">
            <button 
              onClick={() => setActiveTab('108')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === '108' ? 'bg-bhai-gold text-bhai-dark' : 'text-slate-400'}`}
            >
              108
            </button>
            <button 
              onClick={() => setActiveTab('1000')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === '1000' ? 'bg-bhai-red text-white' : 'text-slate-400'}`}
            >
              1000
            </button>
          </div>

          <button onClick={onClose} className="p-2 bg-white/5 rounded-full md:relative absolute -top-2 -right-2">
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="mb-8 bg-white/5 p-6 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center gap-6">
          <button onClick={togglePlay} className={`w-16 h-16 flex-shrink-0 flex items-center justify-center ${bgColor} rounded-full text-white shadow-xl`}>
            {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
          </button>
          <div className="flex-1 w-full">
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
              <motion.div className={`h-full ${bgColor}`} animate={{ width: `${progress}%` }} />
            </div>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest text-center md:text-left">Listen to the Sacred Sound</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {currentNames.map((name, index) => (
            <div key={`${activeTab}-${index}`} className="flex items-center space-x-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className={`text-[10px] font-mono ${accentColor}`}>{index + 1}</span>
              <span className="text-sm text-slate-300 font-serif">{name}</span>
            </div>
          ))}
        </div>
      </div>
      <audio ref={audioRef} src={audioSources[activeTab]} onTimeUpdate={handleTimeUpdate} onEnded={() => setIsPlaying(false)} />
    </motion.div>
  );
};