
import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Star, Zap } from 'lucide-react';
import { TithiInfo } from '../types';

const getMockTithi = (): TithiInfo => {
  const day = new Date().getDate();
  const tithis = [
    { name: "Pratipada", sanskrit: "प्रतिपदा", significance: "New beginnings and mental clarity.", isSpecial: false },
    { name: "Dwitiya", sanskrit: "द्वितीया", significance: "Success in worldly ventures.", isSpecial: false },
    { name: "Tritiya", sanskrit: "तृतीया", significance: "Spiritual growth and health.", isSpecial: false },
    { name: "Chaturthi", sanskrit: "चतुर्थी", significance: "Removal of obstacles (Ganesha's day).", isSpecial: false },
    { name: "Panchami", sanskrit: "पञ्चमी", significance: "Knowledge and creativity.", isSpecial: false },
    { name: "Shashti", sanskrit: "षष्ठी", significance: "Victory over internal enemies.", isSpecial: false },
    { name: "Saptami", sanskrit: "सप्तमी", significance: "Radiance and vitality.", isSpecial: false },
    { name: "Ashtami", sanskrit: "अष्टमी", significance: "Kalashtami: Supreme day for Bhairava. High energy.", isSpecial: true },
    { name: "Navami", sanskrit: "नवमी", significance: "Power and protection.", isSpecial: false },
    { name: "Dashami", sanskrit: "दशमी", significance: "Success in all directions.", isSpecial: false },
  ];
  return tithis[day % tithis.length];
};

export const BhairavaPanchang: React.FC = () => {
  const tithi = getMockTithi();

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`p-4 rounded-2xl border backdrop-blur-xl transition-all ${tithi.isSpecial ? 'bg-bhai-red/10 border-bhai-red/30 shadow-[0_0_20px_rgba(220,38,38,0.1)]' : 'bg-white/5 border-white/10'}`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Moon className={`w-4 h-4 ${tithi.isSpecial ? 'text-bhai-red' : 'text-bhai-gold'}`} />
          <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Lunar Tithi</span>
        </div>
        {tithi.isSpecial && (
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex items-center gap-1 px-2 py-0.5 bg-bhai-red/20 rounded-full"
          >
            <Zap className="w-3 h-3 text-bhai-red" />
            <span className="text-[8px] font-bold text-bhai-red">SACRED DAY</span>
          </motion.div>
        )}
      </div>

      <div className="space-y-1">
        <h4 className="text-white font-serif font-bold text-lg">{tithi.sanskrit} <span className="text-slate-500 text-sm font-sans font-light">({tithi.name})</span></h4>
        <p className="text-[11px] text-slate-400 font-serif italic leading-tight">{tithi.significance}</p>
      </div>
      
      {tithi.isSpecial && (
        <div className="mt-3 pt-3 border-t border-bhai-red/10">
          <p className="text-[9px] text-bhai-red font-bold uppercase tracking-tighter">Energy is highly favorable for Bhairava Upasana.</p>
        </div>
      )}
    </motion.div>
  );
};
