import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Flame, Shirt } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
};

const card = {
  hidden: { opacity: 0, y: 100, rotateX: -20 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
};

const Slide6 = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div style={{
      width: '100%', height: '100%', display: 'flex', 
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '0 80px', zIndex: 10, perspective: '1000px'
    }}>
      <motion.div variants={container} initial="hidden" animate="show" style={{ width: '100%', textAlign: 'center' }}>
        
        <motion.h3 variants={card} style={{ fontSize: '28px', color: 'var(--accent-electric)', marginBottom: '16px', letterSpacing: '4px' }}>
          3 FORMAT CÓ THỂ BẮT ĐẦU NGAY
        </motion.h3>
        
        <motion.h1 variants={card} style={{ 
          fontFamily: "'Inter', sans-serif",
          fontSize: '64px', marginBottom: '80px', fontWeight: 900
        }}>
          CHỌN HƯỚNG ĐI <span style={{ color: '#a5f3fc', textShadow: '0 4px 0px #0284c7, 0 10px 20px rgba(0,0,0,0.5), 0 0 30px rgba(14,165,233,0.5)' }}>PHÙ HỢP</span> VỚI BẠN
        </motion.h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '60px', width: '100%', padding: '0 40px' }}>
          
          {/* Card 1 */}
          <motion.div variants={card} className="glass-panel" whileHover={{ y: -20, scale: 1.02, boxShadow: '0 30px 60px rgba(16,185,129,0.4)', borderColor: '#10b981' }} style={{
            padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', transition: 'all 0.3s ease',
            border: '2px solid rgba(16,185,129,0.3)',
            background: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(3,7,18,0.8) 100%)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5), inset 0 0 30px rgba(16,185,129,0.1)'
          }}>
            <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: '24px', overflow: 'hidden', marginBottom: '32px', border: '2px solid rgba(16,185,129,0.3)' }}>
              <img src="/ai-health.png" alt="AI Health" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} 
                onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/400x400/030712/10b981?text=Save+ai-health.png"; }} 
              />
            </div>
            <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>01 — AI HEALTH</h2>
            <p style={{ fontSize: '20px', color: 'var(--text-secondary)', textAlign: 'center' }}>
              Video hoạt hình chia sẻ kiến thức sức khỏe & đời sống
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={card} className="glass-panel" whileHover={{ y: -20, scale: 1.02, boxShadow: '0 30px 60px rgba(245,158,11,0.4)', borderColor: '#f59e0b' }} style={{
            padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', transition: 'all 0.3s ease',
            border: '2px solid rgba(245,158,11,0.3)',
            background: 'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(3,7,18,0.8) 100%)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5), inset 0 0 30px rgba(245,158,11,0.1)'
          }}>
            <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: '24px', overflow: 'hidden', marginBottom: '32px', border: '2px solid rgba(245,158,11,0.3)' }}>
              <img src="/ai-kol.png" alt="AI KOL Trend" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} 
                onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/400x400/030712/f59e0b?text=Save+ai-kol.png"; }} 
              />
            </div>
            <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>02 — AI KOL TREND</h2>
            <p style={{ fontSize: '20px', color: 'var(--text-secondary)', textAlign: 'center' }}>
              Nhân vật AI nhảy múa, bắt trend giải trí
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={card} className="glass-panel" whileHover={{ y: -20, scale: 1.02, boxShadow: '0 30px 60px rgba(139,92,246,0.4)', borderColor: '#8b5cf6' }} style={{
            padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', transition: 'all 0.3s ease',
            border: '2px solid rgba(139,92,246,0.3)',
            background: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(3,7,18,0.8) 100%)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5), inset 0 0 30px rgba(139,92,246,0.1)'
          }}>
            <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: '24px', overflow: 'hidden', marginBottom: '32px', border: '2px solid rgba(139,92,246,0.3)' }}>
              <img src="/ai-fashion.png" alt="AI Fashion" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} 
                onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/400x400/030712/8b5cf6?text=Save+ai-fashion.png"; }} 
              />
            </div>
            <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>03 — AI FASHION</h2>
            <p style={{ fontSize: '20px', color: 'var(--text-secondary)', textAlign: 'center' }}>
              KOL AI làm mẫu ảnh Lookbook & Product Try-on
            </p>
          </motion.div>

        </div>

      </motion.div>
    </div>
  );
};

export default Slide6;
