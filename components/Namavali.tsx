import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ScrollText, Play, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';

interface NamavaliProps {
  onClose: () => void;
}

const names = [
  "ōṃ bhairavāya namaḥ", "ōṃ bhūtanāthāya namaḥ", "ōṃ bhūtātmanē namaḥ", "ōṃ bhūtabhāvanāya namaḥ", "ōṃ kṣētradāya namaḥ",
  "ōṃ kṣētrapālāya namaḥ", "ōṃ kṣētrajñāya namaḥ", "ōṃ kṣatriyāya namaḥ", "ōṃ virājē namaḥ", "ōṃ śmaśānavāsinē namaḥ",
  "ōṃ māṃsāśinē namaḥ", "ōṃ kharparāśinē namaḥ", "ōṃ makhāntakṛtē namaḥ", "ōṃ raktapāya namaḥ", "ōṃ prāṇapāya namaḥ",
  "ōṃ siddhāya namaḥ", "ōṃ siddhidāya namaḥ", "ōṃ siddhasēvitāya namaḥ", "ōṃ karālāya namaḥ", "ōṃ kālaśamanāya namaḥ",
  "ōṃ kalākāṣṭhātanavē namaḥ", "ōṃ kavayē namaḥ", "ōṃ trinētrāya namaḥ", "ōṃ bahunētrāya namaḥ", "ōṃ piṅgalalōchanāya namaḥ",
  "ōṃ śūlapāṇayē namaḥ", "ōṃ khaḍgapāṇayē namaḥ", "ōṃ kaṅkālinē namaḥ", "ōṃ dhūmralōchanāya namaḥ", "ōṃ abhīravē namaḥ",
  "ōṃ bhairavāya namaḥ", "ōṃ bhairavīpatayē namaḥ", "ōṃ bhūtapāya namaḥ", "ōṃ yōginīpatayē namaḥ", "ōṃ dhanadāya namaḥ",
  "ōṃ dhanahāriṇē namaḥ", "ōṃ dhanapāya namaḥ", "ōṃ pratibhāvavatē namaḥ", "ōṃ nāgahārāya namaḥ", "ōṃ nāgakēśāya namaḥ",
  "ōṃ vyōmakēśāya namaḥ", "ōṃ kapālabhṛtē namaḥ", "ōṃ kālāya namaḥ", "ōṃ kapālamālinē namaḥ", "ōṃ kamanīyāya namaḥ",
  "ōṃ kalānidhayē namaḥ", "ōṃ trilōchanāya namaḥ", "ōṃ jvalannētrāya namaḥ", "ōṃ triśikhinē namaḥ", "ōṃ trilōkabhṛtē namaḥ",
  "ōṃ trivṛttanayanāya namaḥ", "ōṃ ḍimbhāya namaḥ", "ōṃ śāntāya namaḥ", "ōṃ śāntajanapriyāya namaḥ", "ōṃ vaṭukāya namaḥ",
  "ōṃ vaṭukēśāya namaḥ", "ōṃ khaṭvāṅgavaradhārakāya namaḥ", "ōṃ bhūtādhyakṣāya namaḥ", "ōṃ paśupatayē namaḥ", "ōṃ bhikṣukāya namaḥ",
  "ōṃ parichārakāya namaḥ", "ōṃ dhūrtāya namaḥ", "ōṃ digambarāya namaḥ", "ōṃ sauriṇē namaḥ", "ōṃ hariṇē namaḥ",
  "ōṃ pāṇḍulōchanāya namaḥ", "ōṃ praśāntāya namaḥ", "ōṃ śāntidāya namaḥ", "ōṃ śuddhāya namaḥ", "ōṃ śaṅkarapriy bāndhavāya namaḥ",
  "ōṃ aṣṭamūrtayē namaḥ", "ōṃ nidhīśāya namaḥ", "ōṃ jñānachakṣuṣē namaḥ", "ōṃ tamōmayāya namaḥ", "ōṃ aṣṭādhārāya namaḥ",
  "ōṃ kaḻādhārāya namaḥ", "ōṃ sarpayuktāya namaḥ", "ōṃ śaśīśikhāya namaḥ", "ōṃ bhūdharāya namaḥ", "ōṃ bhūdharādhīśāya namaḥ",
  "ōṃ bhūpatayē namaḥ", "ōṃ bhūdharātmakāya namaḥ", "ōṃ kaṅkāladhāriṇē namaḥ", "ōṃ muṇḍinē namaḥ", "ōṃ vyālayajñōpavītavatē namaḥ",
  "ōṃ jṛmbhaṇāya namaḥ", "ōṃ mōhanāya namaḥ", "ōṃ stambhinē namaḥ", "ōṃ māraṇāya namaḥ", "ōṃ kṣōbhaṇāya namaḥ",
  "ōṃ śuddhanīlāñjanaprakhyadēhāya namaḥ", "ōṃ muṇḍavibhūṣitāya namaḥ", "ōṃ balibhujē namaḥ", "ōṃ balibhutātmanē namaḥ", "ōṃ kāminē namaḥ",
  "ōṃ kāmaparākramāya namaḥ", "ōṃ sarvāpattārakāya namaḥ", "ōṃ durgāya namaḥ", "ōṃ duṣṭabhūtaniṣēvitāya namaḥ", "ōṃ kāminē namaḥ",
  "ōṃ kalānidhayē namaḥ", "ōṃ kāntāya namaḥ", "ōṃ kāminīvaśakṛtē namaḥ", "ōṃ vaśinē namaḥ", "ōṃ sarvasiddhipradāya namaḥ",
  "ōṃ vaidyāya namaḥ", "ōṃ prabhaviṣṇavē namaḥ", "ōṃ prabhāvavatē namaḥ"
];

export const Namavali: React.FC<NamavaliProps> = ({ onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="fixed inset-0 z-[100] bg-bhai-dark/98 backdrop-blur-2xl overflow-y-auto"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12 pb-40">
        <div className="flex justify-between items-center mb-8 md:mb-12 border-b border-white/10 pb-6 sticky top-0 bg-bhai-dark/90 backdrop-blur-md z-10 py-4">
          <div className="flex items-center space-x-3 md:space-x-4">
            <ScrollText className="w-6 h-6 md:w-8 md:h-8 text-bhai-gold" />
            <div>
              <h2 className="text-xl md:text-3xl font-serif font-bold text-white leading-tight">
                Sri Batuka Bhairava Ashtottara Sata Namavali
              </h2>
              <p className="text-bhai-gold/60 text-[10px] md:text-sm italic font-serif">108 Divine Names</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 md:p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10 flex-shrink-0"
          >
            <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
        </div>

        <div className="mb-8 md:mb-12 bg-white/5 p-4 md:p-8 rounded-3xl border border-white/10 shadow-inner">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4 md:space-x-6 w-full md:w-auto">
              <button 
                onClick={togglePlay}
                className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center bg-bhai-gold rounded-full text-bhai-dark hover:scale-105 transition-transform"
              >
                {isPlaying ? <Pause className="w-6 h-6 md:w-8 md:h-8 fill-current" /> : <Play className="w-6 h-6 md:w-8 md:h-8 fill-current ml-1" />}
              </button>
              <div className="flex-1">
                <p className="text-white font-medium text-sm md:text-base truncate">Recitation of Namavali</p>
                <p className="text-slate-400 text-xs">Artist: Shree Ji</p>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-2">
              <div className="w-full h-1.5 md:h-2 bg-white/10 rounded-full overflow-hidden relative">
                <motion.div 
                  className="absolute left-0 top-0 h-full bg-bhai-gold shadow-[0_0_10px_#fbbf24]"
                  animate={{ width: `${progress}%` }}
                  transition={{ type: 'tween', ease: 'linear' }}
                />
              </div>
              <span className="text-[8px] md:text-[10px] text-slate-500 uppercase tracking-widest font-bold">Audio Sanctuary</span>
            </div>
          </div>
          <audio 
            ref={audioRef}
            src="https://res.cloudinary.com/dn6sk8mqh/video/upload/v1770364210/108_Powerful_Names_of_Batuka_Bhairava_-_Shree_Ji_ztpsiv.mp3"
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {names.map((name, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-3 p-3 md:p-4 rounded-2xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5"
            >
              <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full border border-bhai-gold/20 flex items-center justify-center text-[8px] md:text-[10px] text-bhai-gold/60 font-mono">
                {index + 1}
              </div>
              <span className="text-sm md:text-lg text-slate-200 group-hover:text-bhai-gold transition-colors font-serif leading-tight pt-1">
                {name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 pt-8 md:pt-12 border-t border-white/10 text-center px-4">
          <p className="text-bhai-gold font-serif italic text-xl md:text-2xl mb-2">
            iti śrī baṭukabhairavāṣṭōttaraśatanāmāvaḻī ।
          </p>
          <p className="text-slate-500 text-[9px] md:text-xs font-sans uppercase tracking-[0.2em] md:tracking-[0.4em]">
            May the Lord of the Field Protect Thee
          </p>
        </div>
      </div>
    </motion.div>
  );
};