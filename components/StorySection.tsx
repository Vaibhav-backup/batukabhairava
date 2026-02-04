import React from 'react';
import { motion } from 'framer-motion';
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
  Moon: <Moon className="w-8 h-8 text-bhai-gold" />,
  Sun: <Sun className="w-8 h-8 text-bhai-orange" />,
  CloudLightning: <CloudLightning className="w-8 h-8 text-gray-400" />,
  Sword: <Sword className="w-8 h-8 text-bhai-red" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-green-400" />,
  Heart: <Heart className="w-8 h-8 text-pink-500" />
};

export const StorySection: React.FC<StorySectionProps> = ({
  segment,
  isVisible,
  onInteractionComplete,
  isInteractionCompleted
}) => {
  if (!isVisible) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-3xl mx-auto px-6 py-12 md:py-20"
    >
      <div className="flex items-center space-x-4 mb-6">
        {segment.icon && icons[segment.icon] && (
          <div className="p-3 bg-white/10 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
            {icons[segment.icon]}
          </div>
        )}
        <h2 className="text-3xl md:text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-bhai-gold to-bhai-orange font-semibold">
          {segment.title}
        </h2>
      </div>

      <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-300 font-serif">
        {segment.content.map((paragraph, idx) => (
          <p key={idx} className={idx === 0 ? "first-letter:text-5xl first-letter:text-bhai-gold first-letter:font-bold first-letter:mr-2 first-letter:float-left" : ""}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-12">
        <Interaction
          type={segment.interactionRequired}
          onComplete={onInteractionComplete}
          isCompleted={isInteractionCompleted}
        />
      </div>
    </motion.section>
  );
};