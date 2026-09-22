import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Zap, MonitorPlay } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
  show: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 1.2, ease: "easeOut" } }
};

const Slide2 = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div style={{
      width: '100%', height: '100%', display: 'flex', 
      alignItems: 'center', padding: '0 120px', zIndex: 10,
      position: 'relative', overflow: 'hidden'
    }}>
      {/* Background Image with Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop")', // Abstract cyber/business background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
          filter: 'blur(3px)'
        }}
      />
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to right, var(--bg-color) 40%, transparent 100%)',
        zIndex: -1
      }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '100px', width: '100%', alignItems: 'center' }}>
        
        {/* Left: Content */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(14,165,233,0.1)', borderRadius: '100px', color: 'var(--accent-electric)', fontWeight: 600, marginBottom: '24px', letterSpacing: '2px' }}>
            SPEAKER PROFILE
          </motion.div>
          
          <motion.h1 variants={item} style={{ 
            fontFamily: "'Inter', sans-serif",
            fontSize: '100px', 
            fontWeight: 900, 
            marginBottom: '20px', 
            lineHeight: 1.05,
            letterSpacing: '-2px',
            textTransform: 'uppercase',
            color: '#a5f3fc', // Light cyan for the face
            textShadow: `
              0px 3px 0px #06b6d4,
              0px 6px 0px #0891b2,
              0px 9px 0px #164e63,
              0px 12px 0px #0f172a,
              0px 20px 40px rgba(0,0,0,0.8),
              0px 0px 40px rgba(6, 182, 212, 0.8)
            ` // 3D block + Glowing aura
          }}>
            NGUYỄN<br/>TÙNG LÂM
          </motion.h1>
          
          <motion.p variants={item} style={{ fontSize: '28px', color: 'var(--text-secondary)', marginBottom: '60px' }}>
            CEO — ZenTrix AI Academy
          </motion.p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <motion.div variants={item} className="glass-panel" style={{ 
              display: 'flex', alignItems: 'center', gap: '24px', padding: '16px 24px', borderRadius: '24px', 
              borderLeft: '4px solid var(--accent-electric)', 
              background: 'linear-gradient(90deg, rgba(14,165,233,0.2), rgba(3,7,18,0.8))',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5), inset 0 0 20px rgba(14,165,233,0.1)'
            }}>
              <div className="flex-center" style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(14, 165, 233, 0.2)', boxShadow: '0 0 15px rgba(14, 165, 233, 0.4)' }}>
                <Award size={28} color="var(--accent-electric)" />
              </div>
              <p style={{ fontSize: '22px', fontWeight: 600, color: '#ffffff' }}>Chuyên gia đào tạo MMO, AI & Marketing</p>
            </motion.div>
            
            <motion.div variants={item} className="glass-panel" style={{ 
              display: 'flex', alignItems: 'center', gap: '24px', padding: '16px 24px', borderRadius: '24px', 
              borderLeft: '4px solid var(--accent-purple)', 
              background: 'linear-gradient(90deg, rgba(139,92,246,0.2), rgba(3,7,18,0.8))',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5), inset 0 0 20px rgba(139,92,246,0.1)'
            }}>
              <div className="flex-center" style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(139, 92, 246, 0.2)', boxShadow: '0 0 15px rgba(139, 92, 246, 0.4)' }}>
                <Briefcase size={28} color="var(--accent-purple)" />
              </div>
              <p style={{ fontSize: '22px', fontWeight: 600, color: '#ffffff' }}>6+ năm kinh nghiệm MMO, Dropshipping & POD</p>
            </motion.div>
            
            <motion.div variants={item} className="glass-panel" style={{ 
              display: 'flex', alignItems: 'center', gap: '24px', padding: '16px 24px', borderRadius: '24px', 
              borderLeft: '4px solid var(--accent-electric)', 
              background: 'linear-gradient(90deg, rgba(14,165,233,0.2), rgba(3,7,18,0.8))',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5), inset 0 0 20px rgba(14,165,233,0.1)'
            }}>
              <div className="flex-center" style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(14, 165, 233, 0.2)', boxShadow: '0 0 15px rgba(14, 165, 233, 0.4)' }}>
                <Zap size={28} color="var(--accent-electric)" />
              </div>
              <p style={{ fontSize: '22px', fontWeight: 600, color: '#ffffff' }}>2+ năm nghiên cứu & ứng dụng AI vào kinh doanh</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Speaker Photo with Animated Border */}
        <motion.div variants={imageReveal} initial="hidden" animate="show" style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
          
          <div style={{ 
            position: 'relative', width: '100%', maxWidth: '550px', aspectRatio: '3/4', 
            borderRadius: '42px', overflow: 'hidden', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 30px 60px rgba(255,255,255,)'
          }}>
            {/* Spinning gradient layer */}
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{
                position: 'absolute',
                width: '150%', height: '150%',
                background: 'conic-gradient(from 0deg, transparent 70%, var(--accent-electric) 90%, var(--accent-purple) 100%)'
              }}
            />
            {/* Inner Content (Mask) */}
            <div style={{ 
              position: 'absolute', inset: '4px', borderRadius: '38px', 
              background: 'var(--bg-color)', overflow: 'hidden' 
            }}>
              <img 
                src="/speaker.jpg" 
                alt="Nguyễn Tùng Lâm" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 80%' }} 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://via.placeholder.com/600x800/030712/0ea5e9?text=Save+image+as+speaker.jpg+in+public+folder";
                }}
              />
              {/* Overlay gradient to blend image bottom with the dark theme */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '30%', background: 'linear-gradient(to top, rgba(3,7,18,1), transparent)' }}></div>
            </div>
          </div>
          {/* Decorative elements */}
          <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', borderTop: '4px solid var(--accent-electric)', borderRight: '4px solid var(--accent-electric)', borderRadius: '0 20px 0 0' }}></div>
          <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '100px', height: '100px', borderBottom: '4px solid var(--accent-purple)', borderLeft: '4px solid var(--accent-purple)', borderRadius: '0 0 0 20px' }}></div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Slide2;
