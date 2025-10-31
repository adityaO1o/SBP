import React, { useEffect, useState } from 'react';
import sbpLogo from '@/assets/SBP.gif';

interface EntranceLogoProps {
  onFinish: () => void;
}

const EntranceLogo: React.FC<EntranceLogoProps> = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 2.5 seconds ke baad fade out start karo
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // 3 seconds ke baad completely finish karo
    const finishTimer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative">
        {/* Logo GIF */}
        <img
          src={sbpLogo}
          alt="Shri Balaji Polymers"
          className="w-64 h-64 md:w-80 md:h-80 object-contain animate-pulse"
        />
        
        {/* Optional: Loading text */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white text-lg md:text-xl font-bold whitespace-nowrap">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default EntranceLogo;
