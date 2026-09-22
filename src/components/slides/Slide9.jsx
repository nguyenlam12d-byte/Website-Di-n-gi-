import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const Slide9 = ({ isActive }) => {
  if (!isActive) return null;

  const pros = [
    { title: 'Dễ bán hàng', desc: 'Rất phù hợp với TikTok Shop & Affiliate Shopee.' },
    { title: 'Không cần mẫu thật', desc: 'AI thay thế nhiều công đoạn chụp/quay.' },
    { title: 'Đa dạng sản phẩm', desc: 'Dễ thay đổi quần áo, phụ kiện, concept.' },
    { title: 'Dễ tạo Lookbook', desc: 'Có thể tạo nhiều outfit trong thời gian ngắn.' },
    { title: 'Tiết kiệm chi phí', desc: 'Giảm chi phí thuê mẫu, studio và ekip quay.' },
    { title: 'Dễ scale (Mở rộng)', desc: 'Một KOL AI quảng bá nhiều sản phẩm khác nhau.' },
    { title: 'Tạo hình linh hoạt', desc: 'Tùy chỉnh ngoại hình, phong cách và bối cảnh.' }
  ];

  const cons = [
    { title: 'Khó tạo chân thực', desc: 'AI dễ làm sai form dáng, chất liệu trang phục.' },
    { title: 'Cần nhiều kỹ năng', desc: 'Phải biết tạo ảnh, thay đồ, chuyển động & dựng.' },
    { title: 'Dễ lỗi hình ảnh', desc: 'Tay chân, khuôn mặt, tóc, quần áo dễ biến dạng.' },
    { title: 'Khó giữ nhất quán', desc: 'Nhân vật & trang phục có thể thay đổi giữa các cảnh.' },
    { title: 'Tốn thời gian sửa', desc: 'Video đẹp thường phải tạo và sửa nhiều lần.' }
  ];

  return (
    <div style={{
      width: '100%', height: '100%', display: 'flex', 
      alignItems: 'center', justifyContent: 'center',
      padding: '0 100px', zIndex: 10
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '80px', width: '100%', alignItems: 'center' }}>
        
        {/* Left: Content */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1 variants={item} style={{ 
            fontFamily: "'Inter', sans-serif",
            fontSize: '56px', marginBottom: '40px', lineHeight: 1.1, fontWeight: 900
          }}>
            KOL AI TRONG LĨNH VỰC <br/>
            <span style={{ 
              color: '#c084fc', 
              textShadow: '0 4px 0px #7e22ce, 0 10px 20px rgba(0,0,0,0.5), 0 0 30px rgba(139,92,246,0.5)' 
            }}>THỜI TRANG</span>
          </motion.h1>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            {/* Pros */}
            <motion.div layoutId="pros-box" variants={item} className="glass-panel" style={{ 
              padding: '32px', borderRadius: '24px',
              border: '2px solid #10b981', 
              background: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(3,7,18,0.8) 100%)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 0 30px rgba(16,185,129,0.15)'
            }}>
              <h2 style={{ fontSize: '28px', color: '#10b981', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle2 size={32} /> ƯU ĐIỂM
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {pros.map((p, i) => (
                  <div key={i}>
                    <h3 style={{ fontSize: '16px', color: 'var(--text-primary)', margin: '0 0 4px 0' }}>{p.title}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>{p.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Cons */}
            <motion.div layoutId="cons-box" variants={item} className="glass-panel" style={{ 
              padding: '32px', borderRadius: '24px',
              border: '2px solid #ef4444', 
              background: 'linear-gradient(135deg, rgba(239,68,68,0.15) 0%, rgba(3,7,18,0.8) 100%)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 0 30px rgba(239,68,68,0.15)'
            }}>
              <h2 style={{ fontSize: '28px', color: '#ef4444', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <AlertTriangle size={32} /> NHƯỢC ĐIỂM
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {cons.map((c, i) => (
                  <div key={i}>
                    <h3 style={{ fontSize: '16px', color: 'var(--text-primary)', margin: '0 0 4px 0' }}>{c.title}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>{c.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Visual */}
        <motion.div variants={item} initial="hidden" animate="show" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="glass-panel" style={{ 
            width: '100%', maxWidth: '420px', aspectRatio: '9/16', borderRadius: '32px',
            border: '2px solid rgba(139,92,246,0.3)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(139,92,246,0.2)',
            overflow: 'hidden', position: 'relative'
          }}>
            <video 
              src="/ai-fashion.mp4" 
              controls
              loop 
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} 
              onError={(e) => {
                e.target.outerHTML = `<img src="https://via.placeholder.com/800x1000/030712/8b5cf6?text=Save+video+as+ai-fashion.mp4+in+public+folder" style="width:100%;height:100%;object-fit:cover;" />`;
              }}
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Slide9;
