import React from 'react';

export const BackgroundGlow = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>

      {/* Top Center-Right Indigo Gradient Orb */}
      <div 
        className="absolute -top-40 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] animate-pulse-glow"
        aria-hidden="true"
      />

      {/* Middle-Left Cyan Gradient Orb */}
      <div 
        className="absolute top-1/3 -left-20 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] animate-pulse-glow"
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      />

      {/* Bottom-Right Violet Gradient Orb */}
      <div 
        className="absolute -bottom-20 right-10 w-[500px] h-[500px] bg-indigo-700/10 rounded-full blur-[150px] animate-pulse-glow"
        style={{ animationDelay: '4s' }}
        aria-hidden="true"
      />
    </div>
  );
};

