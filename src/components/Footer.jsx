import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-main-container">
      
      <style>
        {`
          .footer-main-container {
             width: 100%; 
             background-color: #0f172a; 
             padding-top: 120px; 
             color: #fff;
             position: relative;
             overflow: hidden;
          }
          .footer-content-wrap {
             max-width: 1350px; 
             margin: 0 auto; 
             padding: 0 40px; 
             display: grid;
             grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
             gap: 80px;
             margin-bottom: 100px;
             position: relative;
             z-index: 2;
          }
          .footer-col h4 {
             font-family: 'JetBrains Mono', monospace;
             font-size: 0.8rem;
             font-weight: 800;
             color: #818cf8;
             text-transform: uppercase;
             letter-spacing: 3px;
             margin-bottom: 35px;
          }
          .footer-links {
             display: flex;
             flex-direction: column;
             gap: 15px;
          }
          .footer-links a {
             color: #94a3b8;
             text-decoration: none;
             font-size: 1.05rem;
             font-weight: 500;
             transition: 0.3s;
          }
          .footer-links a:hover {
             color: #fff;
             transform: translateX(5px);
          }
          .newsletter-box {
             background: rgba(255,255,255,0.03);
             border: 1px solid rgba(255,255,255,0.08);
             padding: 30px;
             border-radius: 20px;
          }
          .footer-social-wrap {
             display: flex; 
             gap: 12px;
             margin-top: 30px;
          }
          .social-btn {
             width: 45px;
             height: 45px;
             border-radius: 12px;
             background: rgba(255,255,255,0.05);
             display: flex;
             align-items: center;
             justify-content: center;
             color: #fff;
             transition: 0.3s;
             border: 1px solid rgba(255,255,255,0.1);
          }
          .social-btn:hover {
             background: #6366f1;
             transform: translateY(-5px);
          }
          .footer-bottom {
             border-top: 1px solid rgba(255,255,255,0.05);
             padding: 40px;
             text-align: center;
             font-size: 0.9rem;
             color: #64748b;
             font-weight: 600;
          }
          .footer-bg-glow {
             position: absolute;
             bottom: -100px;
             right: -100px;
             width: 400px;
             height: 400px;
             background: radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%);
             filter: blur(50px);
          }

          @media (max-width: 1200px) {
             .footer-content-wrap { grid-template-columns: 1fr 1fr; gap: 60px; }
          }
          @media (max-width: 768px) {
             .footer-content-wrap { grid-template-columns: 1fr; gap: 50px; padding: 0 30px; }
             .footer-main-container { padding-top: 80px; }
          }
        `}
      </style>

      <div className="footer-bg-glow" />

      <div className="footer-content-wrap">
        
        {/* Brand Focus */}
        <div className="footer-col">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '25px' }}>
            <span style={{ color: '#fff', fontWeight: 900, fontSize: '1.85rem', letterSpacing: '-1.5px' }}>Devnexes</span>
            <span style={{ fontWeight: 400, fontSize: '1.6rem', color: '#6366f1' }}>.</span>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '35px' }}>
            A premier software engineering lab dedicated to building hyper-scale digital products and elite architectural solutions.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
             <div style={{ padding: '10px 18px', background: '#34A85322', border: '1px solid #34A85344', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: 8, height: 8, background: '#34A853', borderRadius: '50%' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#34A853', letterSpacing: '1px' }}>SYSTEM_ACTIVE</span>
             </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <h4>Exploration</h4>
          <div className="footer-links">
            {['Strategic Ledger', 'Our Arsenal', 'Mission Control', 'The Lab (Blog)', 'Join the Elite'].map(l => (
              <a key={l} href="#">{l}</a>
            ))}
          </div>
        </div>

        {/* Contact Intelligence */}
        <div className="footer-col">
          <h4>Connectivity</h4>
          <div className="footer-links">
            <div style={{ marginBottom: '15px' }}>
               <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', fontWeight: 800, marginBottom: '5px' }}>HOTLINE_DIRECT</span>
               <a href="tel:+923095659479" style={{ fontSize: '1.15rem', color: '#fff' }}>0309 5659479</a>
            </div>
            <div>
               <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', fontWeight: 800, marginBottom: '5px' }}>OFFICIAL_EMAIL</span>
               <a href="mailto:Devnexes.Solutions@gmail.com" style={{ fontSize: '1.05rem', color: '#fff' }}>Devnexes.Solutions@gmail.com</a>
            </div>
            <div className="footer-social-wrap">
               {['ig', 'tw', 'in', 'gh'].map(s => (
                  <a key={s} href="#" className="social-btn">
                     <i className={`fab fa-${s}`}></i>
                     {/* Standard icons for now */}
                     <span style={{ fontSize: '0.9rem', fontWeight: 900 }}>{s.toUpperCase()}</span>
                  </a>
               ))}
            </div>
          </div>
        </div>

        {/* Newsletter / Meta */}
        <div className="footer-col">
          <h4>Briefing Subscriptions</h4>
          <div className="newsletter-box">
             <p style={{ fontSize: '0.95rem', color: '#94a3b8', marginBottom: '20px', lineHeight: '1.6' }}>
                Join 2k+ tech leaders receiving our weekly architectural insights.
             </p>
             <div style={{ position: 'relative' }}>
                <input 
                   type="text" 
                   placeholder="Enter encrypted email..." 
                   style={{ width: '100%', padding: '15px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', outline: 'none' }}
                />
                <button style={{ position: 'absolute', right: '5px', top: '5px', bottom: '5px', padding: '0 15px', background: '#6366f1', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 800 }}>JOIN</button>
             </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 DEVNEXES CORE. ENGINEERED FOR SUPREMACY. ALL RIGHTS RESERVED.</p>
      </div>

    </footer>
  );
}
