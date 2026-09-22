import React from 'react';
import { motion } from 'framer-motion';
import { Users, User, ArrowRight, Bot, PenTool, Video, Mic, Edit3, Send } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const Slide3 = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div style={{
      width: '100%', height: '100%', display: 'flex', 
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '20px 80px', zIndex: 10
    }}>
      <motion.div variants={container} initial="hidden" animate="show" style={{ width: '100%', maxWidth: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Title Section */}
        <motion.div variants={item} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}>
          <h2 style={{ 
            fontFamily: "'Inter', sans-serif", 
            fontSize: '24px', color: '#a5f3fc', textAlign: 'center', marginBottom: '12px', letterSpacing: '4px', textTransform: 'uppercase',
            textShadow: '0 0 15px rgba(6, 182, 212, 0.5)'
          }}>
            Sự dịch chuyển của ngành sáng tạo
          </h2>
          <h1 style={{ 
            fontFamily: "'Inter', sans-serif",
            fontSize: '56px', textAlign: 'center', margin: 0, lineHeight: 1.1,
            color: '#a5f3fc',
            textShadow: `
              0px 2px 0px #06b6d4,
              0px 4px 0px #0891b2,
              0px 6px 0px #164e63,
              0px 10px 20px rgba(0,0,0,0.8),
              0px 0px 20px rgba(6, 182, 212, 0.6)
            `
          }}>
            AI ĐANG THAY ĐỔI CUỘC CHƠI
          </h1>
        </motion.div>
        
        {/* Comparison Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '40px', alignItems: 'stretch', width: '100%' }}>
          
          {/* Before */}
          <motion.div variants={item} className="glass-panel" style={{ 
            padding: '40px 32px', borderRadius: '24px', 
            border: '2px solid var(--accent-electric)', 
            background: 'linear-gradient(135deg, rgba(14,165,233,0.2) 0%, rgba(139,92,246,0.1) 100%)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 0 30px rgba(14,165,233,0.2)',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between' 
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px', justifyContent: 'center' }}>
                <Users size={36} color="#ffffff" />
                <h3 style={{ fontSize: '28px', color: '#ffffff', margin: 0 }}>TRƯỚC ĐÂY</h3>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  {icon: <PenTool size={20}/>, text: 'Biên kịch (Idea & Script)'}, 
                  {icon: <Video size={20}/>, text: 'Quay phim (Shooting)'}, 
                  {icon: <Mic size={20}/>, text: 'Thu âm (Voice talent)'}, 
                  {icon: <Edit3 size={20}/>, text: 'Editor (Chỉnh sửa)'}, 
                  {icon: <Send size={20}/>, text: 'Publish'}
                ].map((step, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 20px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ color: '#ffffff', display: 'flex' }}>{step.icon}</div>
                    <p style={{ fontSize: '16px', color: '#ffffff', margin: 0, fontWeight: 500 }}>{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <p style={{ fontSize: '20px', color: '#ffffff', textAlign: 'center', marginTop: '32px', fontWeight: 600, marginBottom: 0 }}>Cả một Ekip cồng kềnh</p>
          </motion.div>

          {/* Arrow */}
          <motion.div variants={item} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="flex-center" style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(0, 212, 255, 0.1)', border: '2px solid rgba(0, 212, 255, 0.3)', boxShadow: '0 0 20px rgba(0,212,255,0.2)' }}>
              <ArrowRight size={32} color="var(--accent-electric)" />
            </div>
          </motion.div>

          {/* After */}
          <motion.div variants={item} className="glass-panel flex-center" style={{ 
            padding: '40px 32px', borderRadius: '24px', flexDirection: 'column', 
            background: 'linear-gradient(135deg, rgba(14,165,233,0.2) 0%, rgba(139,92,246,0.1) 100%)',
            border: '2px solid var(--accent-electric)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 0 30px rgba(14,165,233,0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
              <Bot size={40} color="var(--accent-electric)" />
              <h3 style={{ fontSize: '32px', color: 'var(--text-primary)', margin: 0, textShadow: '0 0 15px rgba(0,212,255,0.5)' }}>HIỆN TẠI</h3>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
              <User size={64} color="var(--text-primary)" />
              <span style={{ fontSize: '48px', color: 'var(--accent-electric)', fontWeight: 300 }}>+</span>
              <Bot size={64} color="var(--accent-purple)" />
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <h4 style={{ fontSize: '32px', color: 'var(--text-primary)', marginBottom: '12px' }}>1 Người</h4>
              <p style={{ fontSize: '24px', color: 'var(--accent-electric)', margin: 0, fontWeight: 600 }}>Sức mạnh bằng cả Ekip</p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default Slide3;
