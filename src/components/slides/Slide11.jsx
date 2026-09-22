import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Rocket, GraduationCap } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const Slide11 = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div style={{
      width: '100%', height: '100%', display: 'flex', 
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '20px 80px', zIndex: 10, textAlign: 'center'
    }}>
      <motion.div variants={container} initial="hidden" animate="show" style={{ width: '100%', maxWidth: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Title */}
        <motion.div variants={item} style={{ marginBottom: '24px' }}>
          <h1 style={{ fontSize: '36px', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <span className="text-gradient">CẢM ƠN THẦY & CÁC BẠN SINH VIÊN FTU</span> <GraduationCap size={36} color="var(--accent-electric)" />
          </h1>
        </motion.div>

        {/* Thank You Messages */}
        <motion.div variants={item} className="glass-panel" style={{ 
          padding: '24px', width: '100%', marginBottom: '24px',
          background: 'linear-gradient(135deg, rgba(0,0,0,) 0%, rgba(14,165,233,0.1) 100%)',
          borderTop: '4px solid var(--accent-electric)'
        }}>
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ fontSize: '24px', color: 'var(--text-primary)', marginBottom: '8px' }}>Xin chân thành cảm ơn Thầy</h3>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.4, margin: 0 }}>
              đã dành thời gian đồng hành và tạo điều kiện<br/>
              để chúng em có cơ hội chia sẻ những kiến thức thực tế về <strong style={{ color: 'var(--text-primary)' }}>AI & Kinh doanh số</strong>.
            </p>
          </div>
          <div style={{ width: '80px', height: '2px', background: 'rgba(0,0,0,)', margin: '0 auto 16px auto' }}></div>
          <div>
            <h3 style={{ fontSize: '24px', color: 'var(--text-primary)', marginBottom: '8px' }}>Cảm ơn tất cả các bạn sinh viên FTU</h3>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.4, margin: 0 }}>
              đã dành thời gian tham gia, lắng nghe và tương tác cùng workshop.
            </p>
          </div>
        </motion.div>

        {/* Hope */}
        <motion.div variants={item} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <Rocket size={24} /> HY VỌNG RẰNG...
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-primary)', lineHeight: 1.4, margin: 0, maxWidth: '800px' }}>
            Sau buổi workshop, mỗi bạn sẽ có thêm <strong>một góc nhìn mới về AI</strong> và quan trọng hơn là 
            <span style={{ color: 'var(--accent-electric)', fontWeight: 600 }}> biết cách biến AI thành công cụ để tạo ra giá trị thực tế.</span>
          </p>
        </motion.div>

        {/* Footer CTA */}
        <motion.div variants={item} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{ fontSize: '48px', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '16px', color: '#ef4444', textShadow: '0 0 20px rgba(239,68,68,0.5)' }}>
            HẸN GẶP LẠI CÁC BẠN! <Heart fill="#ef4444" size={40} />
          </h1>
          <div style={{ background: 'rgba(0,0,0,)', padding: '12px 32px', borderRadius: '40px', border: '1px solid rgba(0,0,0,)' }}>
            <h3 style={{ fontSize: '20px', margin: '0 0 4px 0', letterSpacing: '2px', color: 'var(--accent-electric)' }}>AI & KINH DOANH SỐ</h3>
            <p style={{ fontSize: '16px', margin: 0, color: 'var(--text-secondary)', fontStyle: 'italic' }}>Đột phá công nghệ – Bứt phá doanh thu</p>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Slide11;
