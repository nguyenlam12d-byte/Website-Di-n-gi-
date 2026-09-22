import React from 'react';

const ProgressBar = ({ current, total }) => {
  const progress = (current / (total - 1)) * 100;
  
  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: '4px',
      width: '100%',
      background: 'rgba(255, 255, 255, 0.05)',
      zIndex: 100
    }}>
      <div style={{
        height: '100%',
        width: `${progress}%`,
        background: 'var(--gradient-primary)',
        transition: 'width 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
      }} />
    </div>
  );
};

export default ProgressBar;
