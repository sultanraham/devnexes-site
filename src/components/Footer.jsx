import React from 'react';

export default function Footer() {
  const primaryOrange = '#ff8a00';
  const slateMuted = '#94a3b8';
  const slateDark = '#0f172a';
  
  return (
    <footer style={{ background: '#0a0d14', color: slateMuted, padding: '80px 0 50px 0', fontFamily: "'Lustria', serif", borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 25px' }}>
         
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '50px', marginBottom: '60px' }}>
            
            {/* Column 1: Brand Info */}
            <div style={{ flex: '1.5' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <img src="/favicon.png" alt="Devnexes" style={{ width: 28, height: 28, objectFit: 'contain' }} />
                  <span style={{ color: '#fff', fontWeight: 900, fontSize: '1.2rem', fontFamily: "'PT Sans', sans-serif" }}>Devnexes</span>
               </div>
               <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#64748b', maxWidth: '250px' }}>
                  Leading architectural engineering for digital products and industrial-scale solutions.
               </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
               <h5 style={{ color: '#fff', fontSize: '0.85rem', fontFamily: "'PT Sans', sans-serif", fontWeight: 700, marginBottom: '25px' }}>Services</h5>
               <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Web Development', 'Mobile Apps', 'AI Integration', 'Cloud Solutions'].map(item => (
                    <li key={item}><a href="#" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.85rem' }} onMouseEnter={e => e.target.style.color = primaryOrange} onMouseLeave={e => e.target.style.color = slateMuted}>{item}</a></li>
                  ))}
               </ul>
            </div>

            {/* Column 3: Company */}
            <div>
               <h5 style={{ color: '#fff', fontSize: '0.85rem', fontFamily: "'PT Sans', sans-serif", fontWeight: 700, marginBottom: '25px' }}>Company</h5>
               <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['About Us', 'Expertise', 'Projects', 'Privacy Policy'].map(item => (
                    <li key={item}><a href="#" style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.85rem' }} onMouseEnter={e => e.target.style.color = primaryOrange} onMouseLeave={e => e.target.style.color = slateMuted}>{item}</a></li>
                  ))}
               </ul>
            </div>

            {/* Column 4: Contact Priority */}
            <div>
               <h5 style={{ color: '#fff', fontSize: '0.85rem', fontFamily: "'PT Sans', sans-serif", fontWeight: 700, marginBottom: '25px' }}>Contact Hub</h5>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <a href="mailto:rahamq23@gmail.com" style={{ color: primaryOrange, textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem', display: 'block' }}>rahamq23@gmail.com</a>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                     <a href="mailto:ceo@devnexes.site" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.8rem', display: 'block' }}>ceo@devnexes.site</a>
                     <a href="mailto:cto@devnexes.site" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.75rem', display: 'block' }}>cto@devnexes.site</a>
                     <a href="mailto:coo@devnexes.site" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.75rem', display: 'block' }}>coo@devnexes.site</a>
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.8rem', margin: 0 }}>+92 309 5659479</p>
               </div>
            </div>

         </div>

         {/* Bottom Copyright */}
         <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <span style={{ fontSize: '0.75rem', color: '#475569' }}>© 2026 Devnexes Digital Solutions. All Rights Reserved.</span>
            <div style={{ display: 'flex', gap: '20px' }}>
               {['LinkedIn', 'Twitter', 'Github'].map(s => (
                  <a key={s} href="#" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.75rem', transition: '0.2s' }} onMouseEnter={e => e.target.style.color = primaryOrange} onMouseLeave={e => e.target.style.color = '#475569'}>
                    {s}
                  </a>
               ))}
            </div>
         </div>

      </div>

    </footer>
  );
}
