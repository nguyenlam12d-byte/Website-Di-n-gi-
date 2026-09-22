import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, ShoppingCart, Banknote, Flame } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const itemVariant = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.5 } }
};

const SlideRevenue = ({ isActive }) => {
  if (!isActive) return null;

  const stats = [
    { icon: <MousePointerClick size={36} color="#00d4ff" />, label: 'Lượt nhấp', value: '26,8K', color: 'rgba(0, 212, 255, 0.1)', borderColor: '#00d4ff' },
    { icon: <ShoppingCart size={36} color="#a77bf3" />, label: 'Đơn hàng', value: '2K', color: 'rgba(167, 123, 243, 0.1)', borderColor: '#a77bf3' },
    { icon: <Banknote size={36} color="#10b981" />, label: 'Doanh số (đ)', value: '364,3tr', color: 'rgba(16, 185, 129, 0.1)', borderColor: '#10b981' },
    { icon: <Flame size={36} color="#f59e0b" />, label: 'Hoa hồng ước tính', value: '36,1tr', color: 'rgba(245, 158, 11, 0.1)', borderColor: '#f59e0b' }
  ];

  return (
    <div style={{
      width: '100%', height: '100%', display: 'flex', 
      alignItems: 'center', padding: '0 100px', zIndex: 10
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '80px', width: '100%', alignItems: 'center' }}>
        
        {/* Left Side: Stats */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1 variants={itemVariant} style={{ 
            fontFamily: "'Inter', sans-serif",
            fontSize: '72px', marginBottom: '16px', lineHeight: 1.1, fontWeight: 900
          }}>
            <span style={{ 
              color: '#a5f3fc', 
              textShadow: '0 4px 0px #0284c7, 0 10px 20px rgba(0,0,0,0.5), 0 0 30px rgba(14,165,233,0.5)' 
            }}>DOANH THU TỪ</span><br/>VIDEO AI AFFILIATE
          </motion.h1>
          
          <motion.p variants={itemVariant} style={{ fontSize: '28px', color: 'var(--text-secondary)', marginBottom: '60px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Facebook</span> 
            <span style={{ color: 'var(--accent-electric)' }}>→</span> 
            Video AI + Gắn Link Affiliate
          </motion.p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '60px' }}>
            {stats.map((stat, idx) => (
              <motion.div key={idx} variants={itemVariant} className="glass-panel" style={{
                padding: '32px 24px', display: 'flex', alignItems: 'center', gap: '24px',
                borderRadius: '24px', borderLeft: `4px solid ${stat.borderColor}`,
                background: `linear-gradient(90deg, ${stat.color} 0%, rgba(3,7,18,0.8) 100%)`
              }}>
                <div className="flex-center" style={{ width: '72px', height: '72px', borderRadius: '20px', background: stat.color, flexShrink: 0 }}>
                  {stat.icon}
                </div>
                <div>
                  <p style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '8px' }}>{stat.label}</p>
                  <p style={{ fontSize: '40px', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariant} className="glass-panel" style={{ 
            padding: '24px 32px', borderRadius: '100px', display: 'inline-block',
            background: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.3)'
          }}>
            <p style={{ fontSize: '22px', fontWeight: 700, margin: 0, letterSpacing: '1px' }}>
              <span style={{ color: 'var(--accent-electric)' }}>→ AI VIDEO + AFFILIATE</span> = MÔ HÌNH CÓ THỂ ĐO LƯỜNG & NHÂN BẢN
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div variants={imageVariant} initial="hidden" animate="show" style={{ display: 'flex', justifyContent: 'center' }}>
           <div className="glass-panel" style={{ 
            width: '100%', maxWidth: '420px', aspectRatio: '9/16', borderRadius: '32px',
            border: '2px solid rgba(0, 212, 255, 0.3)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0, 212, 255, 0.2)',
            overflow: 'hidden', position: 'relative'
          }}>
            <img 
              src="/revenue.png" 
              alt="Báo cáo doanh thu Affiliate" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://via.placeholder.com/900x1600/030712/0ea5e9?text=Save+screenshot+as+revenue.png+in+public+folder";
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SlideRevenue;
