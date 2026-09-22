import React from 'react';
import { motion } from 'framer-motion';
import { Zap, PiggyBank, Copy, FlaskConical } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const Slide4 = ({ isActive }) => {
  if (!isActive) return null;

  const features = [
    { icon: <Zap size={48} />, title: 'NHANH', desc: 'Tạo nội dung nhanh hơn gấp 10 lần', color: '#f59e0b' },
    { icon: <PiggyBank size={48} />, title: 'TIẾT KIỆM', desc: 'Giảm 90% chi phí sản xuất ekip', color: '#10b981' },
    { icon: <Copy size={48} />, title: 'SCALE', desc: 'Khả năng sản xuất hàng loạt (Mass production)', color: '#3b82f6' },
    { icon: <FlaskConical size={48} />, title: 'TEST', desc: 'Dễ dàng A/B Testing nhiều ý tưởng', color: '#8b5cf6' }
  ];

  return (
    <div style={{
      width: '100%', height: '100%', display: 'flex', 
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '0 80px', zIndex: 10
    }}>
      <motion.div variants={container} initial="hidden" animate="show" style={{ width: '100%', textAlign: 'center' }}>
        
        <motion.h1 variants={cardVariant} style={{ fontSize: '64px', marginBottom: '80px' }}>
          VÌ SAO <span className="text-gradient">AI VIDEO</span> ĐANG BÙNG NỔ?
        </motion.h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', marginBottom: '100px', width: '100%' }}>
          {features.map((feat, idx) => (
            <motion.div key={idx} variants={cardVariant} className="glass-panel" style={{
              padding: '60px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center',
              borderTop: `4px solid ${feat.color}`, position: 'relative', overflow: 'hidden'
            }}>
              {/* Subtle background glow for each card based on its color */}
              <div style={{ position: 'absolute', top: 0, width: '100%', height: '100%', background: `radial-gradient(circle at top, ${feat.color}20, transparent 70%)`, pointerEvents: 'none' }}></div>
              
              <div style={{ color: feat.color, marginBottom: '24px' }}>{feat.icon}</div>
              <h3 style={{ fontSize: '32px', marginBottom: '16px', letterSpacing: '2px' }}>{feat.title}</h3>
              <p style={{ fontSize: '20px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={cardVariant} style={{ fontSize: '36px', fontWeight: 600 }}>
          <span style={{ color: 'var(--accent-electric)' }}>AI</span> + <span style={{ color: 'var(--accent-purple)' }}>Social Media</span> = Cơ hội mới cho <span style={{ color: 'var(--text-primary)' }}>Creator & Digital Business</span>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Slide4;
