import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
};

const Slide12 = ({ isActive }) => {
  if (!isActive) return null;

  const steps = [
    { title: 'BƯỚC 1', desc: 'Tìm sản phẩm tiềm năng trên Shopee', color: '#f59e0b', icon: '🔍' },
    { title: 'BƯỚC 2', desc: 'Dùng AI nghiên cứu sản phẩm & khách hàng mục tiêu', color: '#3b82f6', icon: '🧠' },
    { title: 'BƯỚC 3', desc: 'AI viết kịch bản video chi tiết', color: '#10b981', icon: '📝' },
    { title: 'BƯỚC 4', desc: 'Tạo video tự động bằng AI', color: '#ec4899', icon: '🎬' },
    { title: 'BƯỚC 5', desc: 'Đăng tải lên Facebook Reels', color: '#8b5cf6', icon: '📱' },
    { title: 'BƯỚC 6', desc: 'Điều hướng người xem tới link Shopee', color: '#0ea5e9', icon: '🔗' },
    { title: 'BƯỚC 7', desc: 'Người xem mua hàng → Nhận hoa hồng Affiliate', color: '#ef4444', icon: '💰' }
  ];

  return (
    <div style={{
      width: '100%', height: '100%', display: 'flex', 
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '0 80px', zIndex: 10
    }}>
      <motion.div variants={container} initial="hidden" animate="show" style={{ width: '100%', maxWidth: '1400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <motion.h3 variants={item} style={{ 
          fontFamily: "'Inter', sans-serif",
          fontSize: '28px', color: '#a5f3fc', marginBottom: '16px', letterSpacing: '2px',
          textShadow: '0 0 15px rgba(6, 182, 212, 0.5)'
        }}>
          VIDEO + LINK SHOPEE
        </motion.h3>
        
        <motion.h1 variants={item} style={{ 
          fontFamily: "'Inter', sans-serif",
          fontSize: '56px', marginBottom: '60px', lineHeight: 1.2, fontWeight: 900, textAlign: 'center'
        }}>
          QUY TRÌNH XÂY KÊNH <br/>
          <span style={{ color: '#3b82f6', textShadow: '0 4px 0px #1d4ed8, 0 10px 20px rgba(0,0,0,0.5), 0 0 30px rgba(59,130,246,0.5)' }}>FACEBOOK REELS</span>
        </motion.h1>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch', gap: '24px', flexWrap: 'wrap', width: '100%' }}>
          {steps.map((step, index) => (
            <motion.div key={index} variants={item} className="glass-panel" style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start',
              width: '280px', padding: '32px 24px', textAlign: 'center',
              border: `2px solid ${step.color}80`,
              background: `linear-gradient(135deg, ${step.color}15 0%, rgba(3,7,18,0.8) 100%)`,
              boxShadow: `0 15px 30px rgba(0,0,0,0.5), inset 0 0 20px ${step.color}15`,
              borderRadius: '24px'
            }}>
               <div style={{ fontSize: '48px', marginBottom: '16px', filter: `drop-shadow(0 0 10px ${step.color}80)` }}>{step.icon}</div>
               <div style={{ fontSize: '20px', fontWeight: 900, color: step.color, marginBottom: '12px', letterSpacing: '1px' }}>{step.title}</div>
               <div style={{ fontSize: '18px', color: 'var(--text-primary)', lineHeight: 1.5, fontWeight: 500 }}>{step.desc}</div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </div>
  );
};

export default Slide12;
