import React from 'react';
import { motion } from 'framer-motion';

const Background = ({ slideIndex }) => {
  // We can subtly change the grid position based on slide index for a parallax effect
  const parallaxX = (slideIndex * -40) + 'px';
  const parallaxY = (slideIndex * -20) + 'px';

  return (
    <div style={{
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      backgroundColor: 'var(--bg-color)', // Light theme background
    }}>
      
      {/* 1. Animated Glow Orb - Purple (Top Left) */}
      <motion.div 
        animate={{ 
          x: ['0%', '10%', '-5%', '0%'],
          y: ['0%', '5%', '15%', '0%'],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '-20%', left: '-10%',
          width: '60vw', height: '60vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 60%)',
          filter: 'blur(80px)',
          transform: 'translateZ(0)'
        }}
      />

      {/* 2. Animated Glow Orb - Cyan (Bottom Right) */}
      <motion.div 
        animate={{ 
          x: ['0%', '-15%', '5%', '0%'],
          y: ['0%', '-10%', '-20%', '0%'],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '-30%', right: '-10%',
          width: '70vw', height: '70vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 60%)',
          filter: 'blur(100px)',
          transform: 'translateZ(0)'
        }}
      />

      {/* 3. Animated Glow Orb - Emerald/Green (Center) */}
      <motion.div 
        animate={{ 
          x: ['0%', '20%', '-20%', '0%'],
          y: ['0%', '20%', '-10%', '0%'],
          scale: [0.8, 1.2, 0.9, 0.8],
        }}
        transition={{ duration: 25, ease: "easeInOut", repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '20%', left: '20%',
          width: '50vw', height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 60%)',
          filter: 'blur(90px)',
          transform: 'translateZ(0)'
        }}
      />

      {/* 4. High-tech Parallax Grid */}
      <motion.div 
        animate={{ 
          x: parallaxX, 
          y: parallaxY 
        }}
        transition={{ type: 'spring', damping: 50, stiffness: 30 }}
        style={{
          position: 'absolute',
          top: '-20%', left: '-20%', width: '140%', height: '140%',
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
        }}
      />

      {/* 5. Subtle Scanline Overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%)',
        backgroundSize: '100% 4px',
        pointerEvents: 'none',
        opacity: 0.3
      }} />

    </div>
  );
};

export default Background;
