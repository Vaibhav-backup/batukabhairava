import React, { useState, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StorySegment } from '../types';
import { Interaction } from './Interactions';
import { Moon, Sun, CloudLightning, Sword, ShieldCheck, Heart } from 'lucide-react';

interface StorySectionProps {
  segment: StorySegment;
  isVisible: boolean;
  onInteractionComplete: () => void;
  isInteractionCompleted: boolean;
}

const icons: Record<string, React.ReactNode> = {
  Moon: <Moon className="w-6 h-6 md:w-8 md:h-8 text-bhai-gold" />,
  Sun: <Sun className="w-6 h-6 md:w-8 md:h-8 text-bhai-orange" />,
  CloudLightning: <CloudLightning className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />,
  Sword: <Sword className="w-6 h-6 md:w-8 md:h-8 text-bhai-red" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-green-400" />,
  Heart: <Heart className="w-6 h-6 md:w-8 md:h-8 text-pink-500" />
};

export const StorySection = forwardRef<HTMLElement, StorySectionProps>(({
  segment,
  isVisible,
  onInteractionComplete,
  isInteractionCompleted
}, ref) => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  if (!isVisible) return null;

  const renderContent = (paragraph: string, idx: number) => {
    let content: React.ReactNode = paragraph;

    if (segment.glossary) {
      segment.glossary.forEach(g => {
        const parts = paragraph.split(new RegExp(`(${g.term})`, 'gi'));
        content = parts.map((part, i) => 
          part.toLowerCase() === g.term.toLowerCase() ? (
            <span 
              key={i} 
              className="relative inline-block group cursor-help text-bhai-gold border-b border-dashed border-bhai-gold/40 hover:border-bhai-gold transition-colors font-semibold"
              onClick={() => setActiveTooltip(activeTooltip === g.term ? null : g.term)}
              onMouseEnter={() => setActiveTooltip(g.term)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              {part}
              <AnimatePresence>
                {activeTooltip === g.term && (
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-60 md:w-72 p-4 bg-slate-900/95 backdrop-blur-2xl text-xs md:text-sm text-slate-200 rounded-2xl shadow-2xl z-50 border border-white/10 pointer-events-none text-left"
                  >
                    <span className="block font-serif font-bold text-bhai-gold text-base md:text-lg mb-2 border-b border-white/10 pb-1">{g.term}</span>
                    <p className="font-sans leading-relaxed text-[10px] md:text-xs text-slate-400">{g.definition}</p>
                    <span className="absolute top-full left-1/2 -translate-x-1/2 border-[8px] md:border-[10px] border-transparent border-t-slate-900"></span>
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          ) : part
        );
      });
    }

    return (
      <motion.div 
        key={idx} 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 }}
        className={`relative ${idx === 0 ? "pt-2 md:pt-4" : ""}`}
      >
        <p className={idx === 0 ? "first-letter:text-5xl md:first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:text-bhai-gold first-letter:mr-3 md:first-letter:mr-4 first-letter:float-left first-letter:leading-none" : ""}>
          {content}
        </p>
      </motion.div>
    );
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full py-16 md:py-24 mb-6 border-l border-white/5 pl-6 md:pl-12 scroll-mt-24"
    >
      <motion.div 
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-px bg-gradient-to-b from-bhai-gold via-bhai-gold/20 to-transparent"
      />
      
      <div className="absolute top-0 -left-[4px] w-[8px] h-[8px] bg-bhai-gold rounded-full shadow-[0_0_15px_#fbbf24] z-10"></div>

      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mb-12 md:mb-16">
        {segment.icon && icons[segment.icon] && (
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex-shrink-0 w-max p-4 md:p-5 bg-white/[0.03] rounded-2xl md:rounded-[2rem] backdrop-blur-xl border border-white/10 shadow-inner"
          >
            {icons[segment.icon]}
          </motion.div>
        )}
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-2xl md:text-4xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight"
          >
            {segment.title}
          </motion.h2>
          <div className="h-0.5 w-10 md:w-12 bg-bhai-gold/50 mt-3 md:mt-4 rounded-full"></div>
        </div>
      </div>

      <div className="space-y-6 md:space-y-10 text-lg md:text-2xl lg:text-3xl leading-relaxed text-slate-300 font-serif font-light">
        {segment.content.map((paragraph, idx) => renderContent(paragraph, idx))}
      </div>

      <div className="mt-12 md:mt-20">
        <Interaction
          type={segment.interactionRequired}
          onComplete={onInteractionComplete}
          isCompleted={isInteractionCompleted}
        />
      </div>
    </motion.section>
  );
});