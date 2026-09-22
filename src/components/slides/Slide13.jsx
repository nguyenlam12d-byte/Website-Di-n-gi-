import React from 'react';
import { motion } from 'framer-motion';
import { Target, Search, PlayCircle, BarChart3, ArrowRight } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const Slide13 = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div style={{
      width: '100%', height: '100%', display: 'flex', 
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '40px 80px', zIndex: 10
    }}>
      <motion.div variants={container} initial="hidden" animate="show" style={{ width: '100%', maxWidth: '1400px', display: 'flex', flexDirection: 'column' }}>
        
        {/* Header Section */}
        <motion.div variants={item} style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h3 style={{ 
            fontFamily: "'Inter', sans-serif",
            fontSize: '24px', color: '#f472b6', marginBottom: '12px', letterSpacing: '2px', fontWeight: 600,
            textShadow: '0 0 15px rgba(244,114,182,0.5)'
          }}>
            ĐIỂM KHÁC BIỆT QUAN TRỌNG SO VỚI FACEBOOK
          </h3>
          <h1 style={{ 
            fontFamily: "'Inter', sans-serif",
            fontSize: '48px', margin: '0 0 24px 0', lineHeight: 1.2, fontWeight: 900
          }}>
            TIKTOK – XÂY KÊNH + VIDEO + <span style={{ color: '#00f2fe', textShadow: '0 4px 0px #00a4b4, 0 10px 20px rgba(0,0,0,0.5), 0 0 30px rgba(0,242,254,0.5)' }}>GIỎ HÀNG</span>
          </h1>
          <div style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '1000px', margin: '0 auto', lineHeight: 1.6 }}>
            Với TikTok, trước khi bắt đầu đăng bán hàng hàng loạt, chúng ta nên xác định rõ chủ đề và tệp khách hàng. <br/>
            <span style={{ color: '#f59e0b', fontWeight: 600 }}>Ví dụ:</span> Kênh chuyên Đồ gia dụng → Tập trung xem & tương tác với video gia dụng, mẹo nhà cửa, review sản phẩm...
          </div>
        </motion.div>
        
        {/* 3 Phases Grid */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', gap: '24px', marginBottom: '32px', width: '100%' }}>
          
          {/* Phase 1 */}
          <motion.div variants={item} className="glass-panel" style={{
            flex: '1 1 0', minWidth: 0,
            padding: '24px', borderRadius: '24px',
            borderTop: '4px solid #10b981',
            background: 'linear-gradient(180deg, rgba(16,185,129,0.1) 0%, rgba(3,7,18,0.8) 100%)',
            display: 'flex', flexDirection: 'column'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <Search size={32} color="#10b981" />
              <h2 style={{ fontSize: '24px', color: '#10b981', margin: 0 }}>Giai đoạn 1<br/><span style={{ fontSize: '16px', color: 'var(--text-primary)' }}>Nuôi định hướng kênh</span></h2>
            </div>
            <p style={{ fontSize: '14px', color: '#10b981', fontWeight: 600, marginBottom: '16px' }}>1-2 tuần đầu: Dùng tài khoản đúng ngách</p>
            <ul style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.6, paddingLeft: '20px', margin: '0 0 20px 0' }}>
              <li>Tìm kiếm & xem video cùng chủ đề</li>
              <li>Tương tác tự nhiên với nội dung phù hợp</li>
              <li>Theo dõi các kênh cùng lĩnh vực</li>
              <li>Hạn chế tương tác chủ đề rác, không liên quan</li>
            </ul>
            <div style={{ padding: '12px', background: 'rgba(16,185,129,0.2)', borderRadius: '12px', fontSize: '14px', color: '#a7f3d0' }}>
              <strong>Mục tiêu:</strong> Giúp hệ thống TikTok có tín hiệu để phân phối đúng tệp khách hàng.
            </div>
          </motion.div>

          {/* Phase 2 */}
          <motion.div variants={item} className="glass-panel" style={{
            flex: '1 1 0', minWidth: 0,
            padding: '24px', borderRadius: '24px',
            borderTop: '4px solid #3b82f6',
            background: 'linear-gradient(180deg, rgba(59,130,246,0.1) 0%, rgba(3,7,18,0.8) 100%)',
            display: 'flex', flexDirection: 'column'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <PlayCircle size={32} color="#3b82f6" />
              <h2 style={{ fontSize: '24px', color: '#3b82f6', margin: 0 }}>Giai đoạn 2<br/><span style={{ fontSize: '16px', color: 'var(--text-primary)' }}>Sản xuất nội dung</span></h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              {['AI tìm Insight', 'AI viết kịch bản', 'AI tạo video', 'Đăng TikTok', 'Gắn giỏ hàng'].map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>{i+1}</div>
                  {step}
                </div>
              ))}
            </div>
            <div style={{ padding: '12px', background: 'rgba(59,130,246,0.2)', borderRadius: '12px', fontSize: '14px', color: '#bfdbfe' }}>
              <strong>Lưu ý:</strong> Tập trung vào MỘT nhóm sản phẩm rõ ràng, không làm lẩu thập cẩm.
            </div>
          </motion.div>

          {/* Phase 3 */}
          <motion.div variants={item} className="glass-panel" style={{
            flex: '1 1 0', minWidth: 0,
            padding: '24px', borderRadius: '24px',
            borderTop: '4px solid #8b5cf6',
            background: 'linear-gradient(180deg, rgba(139,92,246,0.1) 0%, rgba(3,7,18,0.8) 100%)',
            display: 'flex', flexDirection: 'column'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <BarChart3 size={32} color="#8b5cf6" />
              <h2 style={{ fontSize: '24px', color: '#8b5cf6', margin: 0 }}>Giai đoạn 3<br/><span style={{ fontSize: '16px', color: 'var(--text-primary)' }}>Tối ưu theo dữ liệu</span></h2>
            </div>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Theo dõi phễu chuyển đổi:<br/>
              <span style={{ color: '#ddd', fontWeight: 600 }}>View → Retention → Tương tác → Click → Đơn</span>
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ padding: '12px', background: 'rgba(16,185,129,0.15)', borderLeft: '3px solid #10b981', borderRadius: '8px', fontSize: '14px' }}>
                <strong style={{ color: '#10b981' }}>Tín hiệu TỐT:</strong> Phân tích & nhân bản làm các phiên bản tương tự.
              </div>
              <div style={{ padding: '12px', background: 'rgba(239,68,68,0.15)', borderLeft: '3px solid #ef4444', borderRadius: '8px', fontSize: '14px' }}>
                <strong style={{ color: '#ef4444' }}>Tín hiệu KÉM:</strong> Thay đổi Hook, kịch bản, hoặc cách dựng video.
              </div>
            </div>
          </motion.div>

        </div>

        {/* Formula Bar */}
        <motion.div variants={item} className="glass-panel" style={{
          padding: '24px 32px', borderRadius: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px',
          background: 'linear-gradient(90deg, rgba(245,158,11,0.1) 0%, rgba(239,68,68,0.1) 100%)',
          border: '1px solid rgba(245,158,11,0.3)', width: '100%'
        }}>
          <Target size={28} color="#f59e0b" />
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Chọn ngách', 'Xác định SP', 'Xây nội dung', 'Đăng video', 'Gắn giỏ hàng', 'Đọc dữ liệu', 'Tối ưu', 'Nhân rộng'].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{step}</span>
                {idx < arr.length - 1 && <ArrowRight size={16} color="#f59e0b" />}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Slide13;
