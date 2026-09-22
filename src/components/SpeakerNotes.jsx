import React from 'react';
import { motion } from 'framer-motion';
import { speakerNotes } from '../data/notes';

const SpeakerNotes = ({ slideIndex, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="glass-panel"
      style={{
        position: 'absolute',
        bottom: '80px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        maxWidth: '800px',
        maxHeight: '30vh',
        padding: '32px',
        zIndex: 9999,
        background: 'rgba(3, 7, 18, 0.85)',
        border: '1px solid rgba(14, 165, 233, 0.3)',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ color: 'var(--accent-electric)', margin: 0, fontSize: '18px' }}>Speaker Notes (Slide {slideIndex + 1})</h3>
        <button 
          onClick={onClose}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'var(--text-secondary)', 
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          [Press S to close]
        </button>
      </div>
      <div style={{
        overflowY: 'auto',
        color: 'var(--text-primary)',
        fontSize: '18px',
        lineHeight: 1.6,
        paddingRight: '12px'
      }}>
        {speakerNotes[slideIndex]}
      </div>
    </motion.div>
  );
};

export default SpeakerNotes;
