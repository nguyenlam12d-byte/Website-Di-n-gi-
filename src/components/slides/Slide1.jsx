import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, User, Zap } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const Slide1 = ({ isActive }) => {
  if (!isActive) return null;
  
  return (
    <div style={{
      width: '100%', height: '100%', display: 'flex', 
      flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      position: 'relative', zIndex: 10,
      overflow: 'hidden'
    }}>
      {/* Subtle Cybernetic Background Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2 }}
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url("/slide1-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2,
          mixBlendMode: 'screen',
          filter: 'contrast(1.2) brightness(0.8)'
        }}
      />
      {/* Dark overlay to fade edges */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at center, transparent 30%, var(--bg-color) 100%)',
        zIndex: -1
      }} />

      {/* Light Burst Background Effect */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: '-10%', left: '-10%',
          width: '800px', height: '800px',
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, transparent 60%)',
          filter: 'blur(60px)',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      />
      
      {/* Diagonal Light Streak */}
      <motion.div 
        initial={{ opacity: 0, rotate: -45, x: -1000, y: -1000 }}
        animate={{ opacity: 0.6, rotate: -45, x: -200, y: -200 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '2000px', height: '4px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      />

      <motion.div variants={container} initial="hidden" animate="show" style={{ 
        textAlign: 'center', width: '100%', height: '100%', maxWidth: '1700px', 
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' 
      }}>
        
        {/* Top: Logos */}
        <motion.div variants={item} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '60px', marginBottom: '80px' }}>
          
          {/* FTU Logo */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <img src="https://upload.wikimedia.org/wikipedia/vi/8/8e/FTU_logo_2020.png" alt="FTU Logo" style={{ height: '80px', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '16px', color: 'var(--text-primary)', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Trường Đại học Ngoại Thương</span>
              <span style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Foreign Trade University</span>
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: '2px', height: '80px', background: 'rgba(255,255,255,0.2)' }}></div>

          {/* ZenTrix Logo */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
            {/* Custom Logo Graphic */}
            <img src="/logo.png" alt="ZenTrix Logo" style={{ 
              height: '80px', borderRadius: '16px', 
              boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
              objectFit: 'contain'
            }} />
            
            {/* Text below logo */}
            <div style={{ display: 'flex', gap: '6px', background: 'rgba(0,0,0,0.5)', padding: '6px 16px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ fontSize: '16px', fontWeight: 900, color: 'var(--accent-electric)', letterSpacing: '1px' }}>ZenTrix</span>
              <span style={{ fontSize: '16px', fontWeight: 400, color: 'var(--text-primary)' }}> AI Academy</span>
            </div>
          </div>

        </motion.div>

        {/* Center Content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          {/* Top Subtitle */}
          <motion.div variants={item} style={{ marginBottom: '10px' }}>
            <h2 style={{ 
              fontSize: '28px', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '4px', margin: 0, fontWeight: 600,
              textShadow: '0 4px 10px rgba(0,0,0,0.5)'
            }}>
              CHUYÊN ĐỀ ĐÀO TẠO KỸ NĂNG SỐ DÀNH CHO SINH VIÊN
            </h2>
          </motion.div>

          {/* Main Title - Massive 3D Style */}
          <motion.div variants={item} style={{ position: 'relative', marginBottom: '20px' }}>
            <h1 style={{ 
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '140px', lineHeight: '1.1', margin: '0', 
              fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-2px',
              fontStyle: 'italic',
              whiteSpace: 'nowrap',
              color: '#a5f3fc', // Very light cyan
              textShadow: `
                0px 4px 0px #06b6d4,
                0px 8px 0px #0891b2,
                0px 12px 0px #164e63,
                0px 16px 0px #0f172a,
                0px 20px 40px rgba(0,0,0,0.8),
                0px 0px 40px rgba(6, 182, 212, 0.6)
              ` // 3D effect + glow
            }}>
              AI & KINH DOANH SỐ
            </h1>
          </motion.div>
          
          {/* Subtitle */}
          <motion.div variants={item}>
            <h3 style={{ 
              fontSize: '44px', color: 'var(--text-primary)', margin: 0, fontWeight: 700, fontStyle: 'italic',
              textShadow: '0 0 20px rgba(6, 182, 212, 0.8), 0 4px 10px rgba(0,0,0,0.8)'
            }}>
              "Ứng dụng AI để sáng tạo nội dung & Affiliate"
            </h3>
          </motion.div>
        </div>

        {/* Bottom Info Pills */}
        <motion.div variants={item} style={{ 
          display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '100px'
        }}>
          {/* Speaker Pill */}
          <div style={{ 
            display: 'flex', alignItems: 'center', gap: '14px', padding: '18px 36px', 
            background: 'rgba(0,0,0,0.4)', borderRadius: '100px', border: '1px solid var(--accent-electric)',
            boxShadow: '0 10px 20px rgba(0,0,0,0.3), inset 0 0 20px rgba(251, 191, 36, 0.1)'
          }}>
            <User color="var(--accent-electric)" size={28} />
            <span style={{ fontSize: '22px', color: 'var(--text-secondary)' }}>Diễn giả:</span>
            <strong style={{ fontSize: '26px', color: 'var(--text-primary)', letterSpacing: '1px' }}>Nguyễn Tùng Lâm</strong>
          </div>

          {/* Location Pill */}
          <div style={{ 
            display: 'flex', alignItems: 'center', gap: '14px', padding: '18px 36px', 
            background: 'rgba(0,0,0,0.4)', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
          }}>
            <MapPin color="var(--accent-purple)" size={28} />
            <span style={{ fontSize: '22px', color: 'var(--text-primary)', letterSpacing: '1px' }}>Hội trường Trường ĐH Ngoại thương</span>
          </div>

          {/* Tag Pill */}
          <div style={{ 
            display: 'flex', alignItems: 'center', gap: '14px', padding: '18px 36px', 
            background: 'rgba(0,0,0,0.4)', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
          }}>
            <Zap color="var(--accent-electric)" size={28} />
            <span style={{ fontSize: '22px', color: 'var(--text-primary)', letterSpacing: '1px' }}>Workshop 2026</span>
          </div>
        </motion.div>

      </motion.div>

    </div>
  );
};

export default Slide1;
