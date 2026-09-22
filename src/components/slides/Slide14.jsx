import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle2, AlertCircle, FileText, Zap, BrainCircuit, Network } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const Slide14 = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div style={{
      width: '100%', height: '100%', display: 'flex', 
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '40px 60px', zIndex: 10
    }}>
      <motion.div variants={container} initial="hidden" animate="show" style={{ width: '100%', maxWidth: '1400px', display: 'flex', flexDirection: 'column' }}>
        
        {/* Header Section */}
        <motion.div variants={item} style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h1 style={{ 
            fontFamily: "'Inter', sans-serif",
            fontSize: '48px', margin: '0 0 16px 0', lineHeight: 1.2, fontWeight: 900
          }}>
            NÊN CHỌN <span style={{ color: '#3b82f6', textShadow: '0 4px 0px #1d4ed8, 0 0 30px rgba(59,130,246,0.5)' }}>FACEBOOK</span> HAY <span style={{ color: '#ec4899', textShadow: '0 4px 0px #be185d, 0 0 30px rgba(236,72,153,0.5)' }}>TIKTOK</span>?
          </h1>
          <div style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            padding: '12px 24px', background: 'rgba(59,130,246,0.15)', borderRadius: '100px',
            border: '1px solid rgba(59,130,246,0.4)', color: '#60a5fa', fontSize: '20px', fontWeight: 600
          }}>
            <Target size={24} /> Với người mới: Có thể ưu tiên FACEBOOK để bắt đầu
          </div>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '32px' }}>
          
          {/* Left Column: Reasons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <motion.h3 variants={item} style={{ fontSize: '24px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Vì sao?</motion.h3>
            
            {/* Reason 1 */}
            <motion.div variants={item} className="glass-panel" style={{ padding: '24px', borderLeft: '4px solid #10b981', background: 'linear-gradient(90deg, rgba(16,185,129,0.1) 0%, rgba(3,7,18,0.8) 100%)' }}>
              <h4 style={{ fontSize: '20px', color: '#10b981', margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={24} /> 1. Dễ triển khai mô hình Content Affiliate
              </h4>
              <ul style={{ margin: 0, paddingLeft: '24px', fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <li>Dùng AI sản xuất video hàng loạt.</li>
                <li>Đăng Facebook Reels để tiếp cận người xem.</li>
                <li>Điều hướng người xem tới <strong style={{ color: 'var(--text-primary)' }}>link Shopee Affiliate</strong>.</li>
                <li>Facebook có chương trình hợp tác hỗ trợ Shopee Affiliate.</li>
              </ul>
            </motion.div>

            {/* Reason 2 */}
            <motion.div variants={item} className="glass-panel" style={{ padding: '24px', borderLeft: '4px solid #f59e0b', background: 'linear-gradient(90deg, rgba(245,158,11,0.1) 0%, rgba(3,7,18,0.8) 100%)' }}>
              <h4 style={{ fontSize: '20px', color: '#f59e0b', margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertCircle size={24} /> 2. Hạn chế phụ thuộc vào TikTok Shop
              </h4>
              <ul style={{ margin: 0, paddingLeft: '24px', fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <li>TikTok Shop yêu cầu nhiều điều kiện & quy định khắt khe về nội dung TMĐT.</li>
                <li>Yêu cầu cung cấp thông tin thuế và xác minh danh tính phức tạp.</li>
              </ul>
            </motion.div>

            {/* Reason 3 */}
            <motion.div variants={item} className="glass-panel" style={{ padding: '24px', borderLeft: '4px solid #0ea5e9', background: 'linear-gradient(90deg, rgba(14,165,233,0.1) 0%, rgba(3,7,18,0.8) 100%)' }}>
              <h4 style={{ fontSize: '20px', color: '#0ea5e9', margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={24} /> 3. Quy trình thuế Shopee đơn giản hơn
              </h4>
              <ul style={{ margin: 0, paddingLeft: '24px', fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <li>Với cá nhân không kinh doanh, Shopee <strong style={{ color: 'var(--text-primary)' }}>khấu trừ, kê khai & nộp thuế TNCN thay</strong>.</li>
                <li>Cung cấp chứng từ khấu trừ thuế định kỳ rõ ràng.</li>
                <li style={{ color: '#94a3b8' }}>*Lưu ý: Không phải mọi trường hợp đều được khai thuế thay, tuỳ thuộc loại hình đăng ký.</li>
              </ul>
            </motion.div>
          </div>

          {/* Right Column: Strategy & Mindset */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Strategy */}
            <motion.div variants={item} className="glass-panel" style={{ 
              padding: '32px', borderRadius: '24px', border: '2px solid rgba(139,92,246,0.3)',
              background: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(3,7,18,0.8) 100%)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 0 20px rgba(139,92,246,0.1)'
            }}>
              <h3 style={{ fontSize: '24px', color: '#c084fc', margin: '0 0 24px 0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Zap size={28} /> CHIẾN LƯỢC ĐỀ XUẤT
              </h3>
              
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#3b82f6', marginBottom: '8px' }}>FACEBOOK = KÊNH CHÍNH</div>
                <div style={{ fontSize: '15px', color: 'var(--text-secondary)', background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '8px' }}>
                  AI Video → Facebook Reels → Link Shopee → Affiliate
                </div>
              </div>

              <div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: '#ec4899', marginBottom: '8px' }}>TIKTOK = KÊNH MỞ RỘNG</div>
                <div style={{ fontSize: '15px', color: 'var(--text-secondary)', background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '8px' }}>
                  AI Video → Nuôi chủ đề → TikTok → Giỏ hàng → Affiliate
                </div>
              </div>
            </motion.div>

            {/* Mindset */}
            <motion.div variants={item} className="glass-panel" style={{ 
              padding: '32px', borderRadius: '24px', border: '2px solid rgba(236,72,153,0.3)',
              background: 'linear-gradient(135deg, rgba(236,72,153,0.15) 0%, rgba(3,7,18,0.8) 100%)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 0 20px rgba(236,72,153,0.1)'
            }}>
              <h3 style={{ fontSize: '24px', color: '#f472b6', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <BrainCircuit size={28} /> TƯ DUY NỀN TẢNG
              </h3>
              <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 16px 0' }}>
                Không cần chỉ chọn một nền tảng.
              </p>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', margin: '0 0 16px 0', lineHeight: 1.5 }}>
                Hãy xây <strong style={{ color: '#f472b6' }}>một hệ thống nội dung</strong>, sau đó phân phối sang nhiều nền tảng.<br/><br/>
                • Facebook để kéo traffic về Shopee<br/>
                • TikTok để khai thác giỏ hàng TikTok Shop
              </p>
              <div style={{ 
                padding: '16px', background: 'rgba(236,72,153,0.2)', borderRadius: '12px', border: '1px solid rgba(236,72,153,0.4)',
                textAlign: 'center', fontSize: '16px', fontWeight: 800, color: '#fbcfe8', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'
              }}>
                <Network size={24} /> 1 NỘI DUNG → NHIỀU NỀN TẢNG → NHIỀU DOANH THU
              </div>
            </motion.div>

          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Slide14;

