import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SlideNavigator = ({ current, total, onNavigate }) => {
  return (
    <div style={{
      position: 'absolute',
      bottom: '32px',
      right: '48px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '8px 16px',
      background: 'rgba(0,0,0,0.4)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderRadius: '100px',
      border: '1px solid rgba(255,255,255,0.05)',
      zIndex: 50,
    }}>
      
      {/* Dots */}
      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
        {Array.from({ length: total }).map((_, idx) => (
          <motion.div
            key={idx}
            onClick={() => onNavigate(idx)}
            whileHover={{ scale: 1.2, background: 'rgba(255,255,255,0.8)' }}
            animate={{
              width: current === idx ? '16px' : '6px',
              background: current === idx ? 'var(--accent-electric)' : 'rgba(255,255,255,0.2)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{
              height: '6px',
              borderRadius: '6px',
              cursor: 'pointer',
              boxShadow: current === idx ? '0 0 8px rgba(0,212,255,0.4)' : 'none'
            }}
            title={`Go to Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Vertical Divider */}
      <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.2)' }} />

      {/* Counter */}
      <div style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '14px',
        color: 'var(--text-secondary)',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        opacity: 0.8
      }}>
        <div style={{ position: 'relative', width: '18px', height: '18px', overflow: 'hidden' }}>
          <AnimatePresence initial={false}>
            <motion.div
              key={current}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ position: 'absolute', width: '100%', textAlign: 'right' }}
            >
              {current + 1 < 10 ? `0${current + 1}` : current + 1}
            </motion.div>
          </AnimatePresence>
        </div>
        <span>/</span>
        <span>{total < 10 ? `0${total}` : total}</span>
      </div>

    </div>
  );
};

export default SlideNavigator;
