import React from 'react';
import { motion } from 'framer-motion';
import { ashtaBhairavas, supremeBhairavas } from '../bhairavaFormsData';
import { Compass, Zap, Crown, Coins, X } from 'lucide-react';

interface BhairavaFormsProps {
  onClose: () => void;
}

export const BhairavaForms: React.FC<BhairavaFormsProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-bhai-dark/98 backdrop-blur-3xl overflow-y-auto"
      data-lenis-prevent
    >
       <div className="sticky top-0 z-50 flex items-center justify-between p-4 md:p-8 bg-bhai-dark/95 backdrop-blur-md border-b border-white/10">
         <div className="flex items-center space-x-3">
            <Compass className="w-6 h-6 md:w-8 md:h-8 text-bhai-gold" />
            <h2 className="text-xl md:text-2xl font-serif font-bold text-white">Divine Forms</h2>
         </div>
         <button
            onClick={onClose}
            className="p-2 md:p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10"
          >
            <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
       </div>

      <div className="w-full py-8 md:py-12 relative px-4 md:px-8 max-w-7xl mx-auto pb-40">
       
       <motion.div 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         className="text-center mb-16 px-4"
       >
         <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">The Divine Manifestations</h2>
         <p className="text-slate-400 font-serif italic max-w-2xl mx-auto">
           Beyond the child form, the Lord manifests in infinite ways to protect the eight directions and rule over time itself.
         </p>
       </motion.div>

       {/* Supreme Forms */}
       <div className="mb-24">
          <div className="flex items-center space-x-3 mb-8 justify-center md:justify-start">
            <Crown className="w-6 h-6 text-bhai-red" />
            <h3 className="text-xl md:text-2xl font-serif text-slate-200">Supreme Manifestations</h3>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
           {supremeBhairavas.map((form) => (
             <motion.div 
               key={form.id}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className={`relative rounded-3xl p-1 overflow-hidden ${form.id === 'kaal' ? 'bg-gradient-to-br from-bhai-red/20 via-slate-900 to-transparent' : 'bg-gradient-to-br from-bhai-gold/20 via-slate-900 to-transparent'}`}
             >
               <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm m-[1px] rounded-[22px] z-0"></div>
               <div className="relative z-10 p-6 md:p-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className={`text-2xl md:text-4xl font-serif font-bold mb-2 ${form.color}`}>{form.name}</h3>
                      <p className="text-slate-400 text-sm uppercase tracking-[0.2em]">{form.translation}</p>
                    </div>
                    {form.id === 'kaal' ? <Crown className="w-8 h-8 md:w-10 md:h-10 text-bhai-red opacity-80" /> : <Coins className="w-8 h-8 md:w-10 md:h-10 text-bhai-gold opacity-80" />}
                  </div>
                  
                  <p className="text-slate-300 font-serif text-lg leading-relaxed mb-8 flex-grow">
                    {form.description}
                  </p>

                  <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                    <p className="text-[10px] uppercase text-slate-500 tracking-widest mb-1">Mantra</p>
                    <p className={`font-serif italic ${form.color} opacity-90`}>{form.mantra}</p>
                  </div>
               </div>
             </motion.div>
           ))}
         </div>
       </div>

       {/* Ashta Bhairavas Grid */}
       <div className="mb-24">
         <div className="flex items-center space-x-3 mb-8 justify-center md:justify-start">
            <Compass className="w-6 h-6 text-bhai-gold" />
            <h3 className="text-xl md:text-2xl font-serif text-slate-200">Ashta Bhairavas (The Eight Guardians)</h3>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {ashtaBhairavas.map((form, index) => (
              <motion.div
                key={form.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.03)' }}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 p-3 opacity-20 font-black text-4xl ${form.color}`}>
                  {index + 1}
                </div>
                <h4 className={`text-lg font-bold mb-1 ${form.color}`}>{form.name}</h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">{form.translation}</p>
                
                <div className="space-y-2 text-sm text-slate-300 font-serif leading-relaxed mb-4">
                  <p>{form.description}</p>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/5 pt-3 mt-auto">
                  <span className="flex items-center gap-1">
                    <Zap className="w-3 h-3" /> {form.vehicle}
                  </span>
                  <span className="uppercase tracking-wider opacity-60">{form.direction}</span>
                </div>
              </motion.div>
            ))}
         </div>
       </div>
    </div>
    </motion.div>
  );
};