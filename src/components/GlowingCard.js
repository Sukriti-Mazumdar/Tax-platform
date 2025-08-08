import React from 'react';

const GlowingCard = () => {
  return (
    <div className="flex justify-end md:flex-row flex-col p-6 min-h-screen items-center bg-transparent">
      <div className="relative bg-[rgba(42,42,90,0.7)] rounded-2xl shadow-lg p-6 text-center text-white font-inter max-w-xs mx-auto backdrop-blur-sm">
        <div className="text-xl font-bold mb-2">Files ITR in 7 minutes</div>
        <div className="text-sm">
          Tax saved: <span className="font-bold text-yellow-400">₹32,500</span>
        </div>
        {/* Glow effect */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-8 bg-white opacity-50 rounded-full filter blur-3xl"></div>
      </div>
    </div>
  );
};

export default GlowingCard;
