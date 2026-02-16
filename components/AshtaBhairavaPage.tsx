import React from 'react';
import { motion } from 'framer-motion';
import { X, Shield, Compass, Zap, MapPin } from 'lucide-react';
import { ashtaBhairavas } from '../bhairavaFormsData';

interface AshtaBhairavaPageProps {
  onClose: () => void;
}

export const AshtaBhairavaPage: React.FC<AshtaBhairavaPageProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/98 backdrop-blur-3xl overflow-y-auto"
    >
      <div className="sticky top-0 z-50 flex items-center justify-between p-4 md:p-8 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center space-x-3">
          <Shield className="w-6 h-6 text-bhai-gold" />
          <h2 className="text-lg md:text-2xl font-serif font-bold text-white">The Ashta Bhairavas</h2>
        </div>
        <button
          onClick={onClose}
          className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/10"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 pb-40">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12 md:mb-24"
        >
          <h1 className="text-3xl md:text-7xl font-serif font-bold text-white mb-4">The Eight <span className="text-bhai-gold">Guardians</span></h1>
          <p className="text-slate-400 font-serif italic text-base md:text-2xl max-w-3xl mx-auto leading-relaxed">
            "They reside in the eight directions, guarding the thresholds of consciousness."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ashtaBhairavas.map((form, index) => (
            <motion.div
              key={form.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col h-full bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.05] transition-all"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={form.image} 
                  alt={form.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <h3 className={`text-xl font-serif font-bold ${form.color}`}>{form.name}</h3>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <p className="text-slate-300 font-serif text-sm md:text-base leading-relaxed mb-6 flex-grow">
                  {form.description}
                </p>
                <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                  <p className="text-[10px] uppercase text-slate-500 tracking-widest mb-1">Mantra</p>
                  <p className={`font-serif italic text-xs md:text-sm ${form.color}`}>{form.mantra}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};