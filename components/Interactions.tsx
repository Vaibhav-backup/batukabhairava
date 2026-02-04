import React from 'react';
import { Flame, Bell, Flower, ChevronDown } from 'lucide-react';
import { InteractionType } from '../types';

interface InteractionProps {
  type: InteractionType;
  onComplete: () => void;
  isCompleted: boolean;
}

export const Interaction: React.FC<InteractionProps> = ({ type, onComplete, isCompleted }) => {
  if (type === InteractionType.NONE) return null;

  if (isCompleted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 opacity-50">
        <div className="text-bhai-gold text-sm uppercase tracking-widest mb-2">Completed</div>
        <ChevronDown className="w-6 h-6 text-bhai-gold animate-bounce" />
      </div>
    );
  }

  const renderContent = () => {
    switch (type) {
      case InteractionType.LIGHT_LAMP:
        return (
          <div className="text-center">
            <p className="mb-4 text-gray-300 font-serif italic text-lg">
              "Darkness has fallen. Light the lamp to invite the Divine."
            </p>
            <button
              onClick={onComplete}
              className="group relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-bhai-gold transition-duration-300 ease-out border-2 border-bhai-gold rounded-full shadow-md hover:bg-bhai-gold hover:text-bhai-dark"
            >
              <Flame className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              <span>Light the Diya</span>
            </button>
          </div>
        );
      case InteractionType.RING_BELL:
        return (
          <div className="text-center">
            <p className="mb-4 text-gray-300 font-serif italic text-lg">
              "The silence of fear is deafening. Ring the bell to awaken hope."
            </p>
            <button
              onClick={onComplete}
              className="group relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-bhai-orange transition-duration-300 ease-out border-2 border-bhai-orange rounded-full shadow-md hover:bg-bhai-orange hover:text-white"
            >
              <Bell className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              <span>Ring the Bell</span>
            </button>
          </div>
        );
      case InteractionType.OFFER_FLOWER:
        return (
          <div className="text-center">
            <p className="mb-4 text-gray-300 font-serif italic text-lg">
              "The Divine Child has appeared. Offer a flower in devotion."
            </p>
            <button
              onClick={onComplete}
              className="group relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-pink-400 transition-duration-300 ease-out border-2 border-pink-400 rounded-full shadow-md hover:bg-pink-400 hover:text-white"
            >
              <Flower className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span>Offer Pushpam</span>
            </button>
          </div>
        );
      case InteractionType.READ_MORE:
        return (
          <div className="text-center">
             <p className="mb-4 text-gray-300 font-serif italic text-lg">
              "The battle is won. Witness the grace of the Protector."
            </p>
            <button
              onClick={onComplete}
              className="group relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-white transition-duration-300 ease-out bg-bhai-dark border-2 border-white rounded-full shadow-md hover:bg-white hover:text-bhai-dark"
            >
              <span>Continue the Journey</span>
              <ChevronDown className="w-5 h-5 ml-2" />
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="my-12 py-8 border-t border-b border-white/10 bg-white/5 rounded-xl backdrop-blur-sm">
      {renderContent()}
    </div>
  );
};