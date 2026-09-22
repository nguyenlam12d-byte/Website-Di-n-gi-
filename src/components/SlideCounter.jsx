import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const SlideCounter = ({ current, total }) => {
  return (
    <div style={{
      position: 'absolute',
      bottom: '32px',
      right: '48px',
      fontFamily: 'var(--font-sans)',
      fontSize: '18px',
      color: 'var(--text-secondary)',
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      zIndex: 50,
      opacity: 0.6
    }}>
      <div style={{ position: 'relative', width: '24px', height: '24px', overflow: 'hidden' }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ position: 'absolute', width: '100%', textAlign: 'right' }}
          >
            {current < 10 ? `0${current}` : current}
          </motion.div>
        </AnimatePresence>
      </div>
      <span>/</span>
      <span>{total}</span>
    </div>
  );
};

export default SlideCounter;
