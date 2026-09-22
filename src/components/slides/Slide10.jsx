import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, ArrowDown, PlayCircle, Zap } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const Slide10 = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div style={{
      width: '100%', height: '100%', display: 'flex', 
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '20px 80px', zIndex: 10
    }}>
      <motion.div variants={container} initial="hidden" animate="show" style={{ width: '100%', maxWidth: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Header */}
        <motion.div variants={item} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <Rocket size={40} color="var(--accent-electric)" />
            <h1 style={{ fontSize: '36px', color: 'var(--text-primary)', margin: 0, textTransform: 'uppercase' }}>ĐỊNH HƯỚNG LỘ TRÌNH HỌC AI</h1>
          </div>
          <h2 style={{ fontSize: '20px', color: 'var(--accent-electric)', margin: 0, fontWeight: 600 }}>ĐỪNG HỌC TẤT CẢ – HÃY GIỎI MỘT THỨ TRƯỚC</h2>
        </motion.div>

        {/* 3 Paths */}
        <motion.div variants={item} style={{ display: 'flex', gap: '20px', width: '100%', maxWidth: '1000px', marginBottom: '16px' }}>
          <div className="glass-panel" style={{ flex: 1, padding: '16px', textAlign: 'center', opacity: 0.4, border: '1px solid rgba(0,0,0,)' }}>
            <div style={{ fontSize: '28px', marginBottom: '4px' }}>🎬</div>
            <h3 style={{ fontSize: '18px', margin: 0, color: 'var(--text-secondary)' }}>AI Sức khỏe</h3>
          </div>
          <div className="glass-panel" style={{ flex: 1, padding: '16px', textAlign: 'center', opacity: 0.4, border: '1px solid rgba(0,0,0,)' }}>
            <div style={{ fontSize: '28px', marginBottom: '4px' }}>💃</div>
            <h3 style={{ fontSize: '18px', margin: 0, color: 'var(--text-secondary)' }}>KOL AI Bắt Trend</h3>
          </div>
          <motion.div 
            animate={{ boxShadow: ['0 0 15px rgba(139,92,246,0.2)', '0 0 30px rgba(139,92,246,0.5)', '0 0 15px rgba(139,92,246,0.2)'] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="glass-panel" style={{ flex: 1, padding: '16px', textAlign: 'center', border: '2px solid var(--accent-purple)', background: 'rgba(139,92,246,0.15)' }}>
            <div style={{ fontSize: '28px', marginBottom: '4px' }}>👗</div>
            <h3 style={{ fontSize: '18px', margin: 0, color: 'var(--text-primary)' }}>KOL AI Thời Trang</h3>
          </motion.div>
        </motion.div>

        {/* Arrow Down */}
        <motion.div variants={item} style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', margin: 0 }}>Vậy nên bắt đầu từ đâu?</p>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={28} color="var(--accent-purple)" />
          </motion.div>
        </motion.div>

        {/* The Choice */}
        <motion.div variants={item} className="glass-panel" style={{ 
          width: '100%', padding: '24px 40px', 
          background: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(30,10,60,0.5) 100%)',
          border: '2px solid rgba(139,92,246,0.5)',
          boxShadow: '0 20px 50px rgba(139,92,246,0.2)',
          position: 'relative', overflow: 'hidden',
          display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <Target size={32} color="#c084fc" />
            <h2 style={{ fontSize: '28px', margin: 0, color: '#c084fc', textShadow: '0 0 15px rgba(192,132,252,0.5)' }}>LỰA CHỌN CỦA CHÚNG TA: KOL AI × THỜI TRANG</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', width: '100%', maxWidth: '900px', marginBottom: '24px' }}>
            {[
              { icon: '💰', text: 'Có khả năng thương mại hóa cao' },
              { icon: '🛍️', text: 'Phù hợp với Affiliate & TikTok Shop' },
              { icon: '🤖', text: 'Tận dụng tối đa sức mạnh của AI' },
              { icon: '📈', text: 'Dễ xây dựng & mở rộng thành hệ thống' }
            ].map((reason, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,)', padding: '12px 20px', borderRadius: '12px', border: '1px solid rgba(0,0,0,)' }}>
                <span style={{ fontSize: '24px' }}>{reason.icon}</span>
                <span style={{ fontSize: '18px', color: 'var(--text-primary)' }}>{reason.text}</span>
              </div>
            ))}
          </div>

          {/* Practical CTA */}
          <div style={{ 
            width: '100%', padding: '16px', background: 'rgba(139,92,246,0.2)', borderRadius: '16px',
            border: '1px solid rgba(139,92,246,0.4)', textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
              <Zap size={24} color="#fbbf24" /> BÂY GIỜ CHÚNG TA SẼ XÂY DỰNG TỪ A → Z
            </h3>
            <p style={{ fontSize: '16px', color: '#d8b4fe', margin: '0 0 16px 0', fontWeight: 600, letterSpacing: '1px' }}>
              Tạo nhân vật → Phối đồ → Tạo video → Đăng tải → Gắn sản phẩm → Affiliate
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(192,132,252,0.6)' }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                background: ['linear-gradient(90deg, #8b5cf6, #c084fc)', 'linear-gradient(90deg, #c084fc, #8b5cf6)', 'linear-gradient(90deg, #8b5cf6, #c084fc)']
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                color: 'var(--text-primary)', border: 'none', padding: '12px 32px',
                fontSize: '20px', fontWeight: 800, borderRadius: '40px',
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', margin: '0 auto',
                boxShadow: '0 10px 20px rgba(139,92,246,0.4)'
              }}
            >
              <PlayCircle size={28} /> BẮT ĐẦU PHẦN THỰC HÀNH!
            </motion.button>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Slide10;
