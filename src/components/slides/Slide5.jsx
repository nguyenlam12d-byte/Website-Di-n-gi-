import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Play, Share2, Users, ShoppingCart, DollarSign } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
  show: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { type: "spring", stiffness: 100 } }
};

const Slide5 = ({ isActive }) => {
  if (!isActive) return null;

  const flow = [
    { icon: <Cpu size={40} />, label: 'AI', color: '#0ea5e9' },
    { icon: <Play size={40} />, label: 'CONTENT', color: '#3b82f6' },
    { icon: <Share2 size={40} />, label: 'SOCIAL MEDIA', color: '#8b5cf6', sub: 'TikTok / FB / YT' },
    { icon: <Users size={40} />, label: 'AUDIENCE', color: '#ec4899' },
    { icon: <ShoppingCart size={40} />, label: 'PRODUCT', color: '#f59e0b' },
    { icon: <DollarSign size={40} />, label: 'AFFILIATE', color: '#10b981' }
  ];

  return (
    <div style={{
      width: '100%', height: '100%', display: 'flex', 
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '0 80px', zIndex: 10
    }}>
      <motion.div variants={container} initial="hidden" animate="show" style={{ width: '100%', textAlign: 'center' }}>
        
        <motion.h1 variants={item} style={{ 
          fontFamily: "'Inter', sans-serif",
          fontSize: '56px', marginBottom: '100px', fontWeight: 900
        }}>
          MÔ HÌNH: <span style={{ color: '#a5f3fc', textShadow: '0 4px 0px #0284c7, 0 10px 20px rgba(0,0,0,0.5), 0 0 30px rgba(14,165,233,0.5)' }}>AI + SOCIAL MEDIA + AFFILIATE</span>
        </motion.h1>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          {flow.map((node, index) => (
            <React.Fragment key={index}>
              <motion.div variants={item} className="glass-panel" style={{
                padding: '32px', width: '220px', height: '220px', display: 'flex', flexDirection: 'column', 
                alignItems: 'center', justifyContent: 'center', gap: '16px',
                border: `2px solid ${node.color}80`, 
                background: `linear-gradient(135deg, ${node.color}20 0%, rgba(3,7,18,0.8) 100%)`,
                boxShadow: `0 20px 40px rgba(0,0,0,0.5), inset 0 0 30px ${node.color}20`
              }}>
                <div style={{ color: node.color, padding: '16px', background: `${node.color}20`, borderRadius: '50%' }}>
                  {node.icon}
                </div>
                <div style={{ fontWeight: 800, fontSize: '24px' }}>{node.label}</div>
                {node.sub && <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{node.sub}</div>}
              </motion.div>
              
              {index < flow.length - 1 && (
                <motion.div variants={item} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '2px', background: 'var(--text-secondary)' }}></div>
                  <div style={{ 
                    width: 0, height: 0, 
                    borderTop: '8px solid transparent', 
                    borderBottom: '8px solid transparent', 
                    borderLeft: '12px solid var(--text-secondary)' 
                  }}></div>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>

        <motion.p variants={item} style={{ marginTop: '80px', fontSize: '28px', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
          "Tạo nội dung → Thu hút người xem → Giới thiệu sản phẩm phù hợp → Nhận hoa hồng."
        </motion.p>

      </motion.div>
    </div>
  );
};

export default Slide5;
