import React, { useState, useEffect } from 'react'

const cases = [
  {
    id: 1,
    title: 'Website Design',
    subtitle: 'Devnexes Ecosystem',
    desc: 'Full digital transformation combining high-velocity UI/UX with modern brand identity.',
    executiveSummary: 'A full brand overhaul and digital presence rebuild for Devnexes, focused on premium aesthetics and performance.',
    challenges: 'Balancing complex high-tech identity with a clean, user-friendly interface.',
    solutions: 'Built a custom React scroll engine with fluid animations and glassmorphism.',
    results: '400% increase in lead generation and 100% satisfaction rating.',
    tech: 'React, GSAP, Node.js',
    metrics: [
      { label: 'Perf', val: '100' },
      { label: 'Lead', val: '+400%' },
      { label: 'SEO', val: '98' }
    ],
    objectives: ['Retention', 'Lead Gen', 'Identity'],
    pic: '/minimal_orange_web_design_1776960495323.png'
  },
  {
    id: 2,
    title: 'Fitness Companion',
    subtitle: 'Health Monitoring',
    desc: 'Real-time health monitoring app syncing wearable data with a seamless interface.',
    executiveSummary: 'An IoT-integrated mobile application providing real-time tracking for professional athletes.',
    challenges: 'Maintaining low-latency synchronization between wearable hardware and mobile.',
    solutions: 'Engineered a WebSocket bridge and a serverless AWS Lambda backend.',
    results: 'Reached #5 in Health & Fitness on launch week with 95% retention.',
    tech: 'React Native, Firebase',
    metrics: [
      { label: 'Users', val: '500k+' },
      { label: 'Reten', val: '95%' },
      { label: 'Rank', val: '#5' }
    ],
    objectives: ['IoT Sync', 'Analytics', 'Scaling'],
    pic: '/minimal_orange_health_tech_1776960510505.png'
  },
  {
    id: 3,
    title: 'Luxury E-commerce',
    subtitle: 'European Fashion',
    desc: 'High-end storefront prioritizing premium imagery and zero-friction checkout.',
    executiveSummary: 'A luxury-focused experience built with a minimalist aesthetic and AR features.',
    challenges: 'Replicating the tactile feel of luxury products digitslly and fast.',
    solutions: 'NexGen-CDN for asset delivery and browser-native Three.js AR room.',
    results: '35% reduction in checkout churn and 2.5x increase in AOV.',
    tech: 'Next.js, Three.js',
    metrics: [
      { label: 'Conv', val: '+28%' },
      { label: 'Load', val: '0.8s' },
      { label: 'AOV', val: '2.5x' }
    ],
    objectives: ['AR Vision', 'Checkout', 'Scale'],
    pic: '/minimal_orange_ecommerce_luxury_1776960525145.png'
  }
]

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(null)
  const accentOrange = '#ff8a00'
  const primaryNavy = '#0f172a'
  const textMuted = '#64748b'

  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [selectedCase])

  return (
    <section id="case-studies" style={{ background: '#fff', padding: '140px 0' }}>
      
      {/* Advanced Typography Header */}
      <div style={{ maxWidth: 1200, margin: '0 auto 100px auto', padding: '0 25px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
          <div style={{ width: 45, height: 2, background: accentOrange }} />
          <span style={{ 
            fontSize: '0.78rem', fontWeight: 900, color: textMuted, 
            letterSpacing: '5px', textTransform: 'uppercase' 
          }}>
            Great product is
          </span>
        </div>
        <h2 style={{ 
          fontSize: '4.2rem', fontWeight: 950, color: primaryNavy, 
          letterSpacing: '-3px', lineHeight: 1, margin: 0 
        }}>
          built by <span style={{ 
            background: 'linear-gradient(90deg, #ff8a00 0%, #ffae42 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>great teams.</span>
        </h2>
      </div>

      {/* Sleek 3-Column Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 25px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
         {cases.map((cs) => (
            <div key={cs.id} className="case-grid-card">
               <div className="card-pic-wrap">
                  <img src={cs.pic} alt={cs.title} />
                  <div className="card-badge">CASE 0{cs.id}</div>
               </div>
               <div className="card-info">
                  <span className="card-sub">{cs.subtitle}</span>
                  <h3 className="card-title">{cs.title}</h3>
                  <p className="card-desc">{cs.desc}</p>
                  <button className="card-btn" onClick={() => setSelectedCase(cs)}>
                     Explore Project →
                  </button>
               </div>
            </div>
         ))}
      </div>

      {/* Simplified Modal */}
      {selectedCase && (
        <div className="modal-overlay" onClick={() => setSelectedCase(null)}>
           <div className="modal-box" onClick={e => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setSelectedCase(null)}>✕</button>
              <div className="modal-inner">
                 <div className="mi-left">
                    <img src={selectedCase.pic} alt="" />
                    <div className="mi-overlay">
                       <span className="mi-tag">Archive 0{selectedCase.id}</span>
                       <h2 className="mi-title">{selectedCase.title}</h2>
                    </div>
                 </div>
                 <div className="mi-right">
                    <div className="mi-sec">
                       <h4>Challenge</h4>
                       <p>{selectedCase.challenges}</p>
                    </div>
                    <div className="mi-sec">
                       <h4>Solution</h4>
                       <p>{selectedCase.solutions}</p>
                    </div>
                    <div className="mi-stats">
                       {selectedCase.metrics.map(m => (
                          <div key={m.label} className="mi-stat">
                             <div className="ms-v">{m.val}</div>
                             <div className="ms-l">{m.label}</div>
                          </div>
                       ))}
                    </div>
                    <button className="mi-btn" onClick={() => window.location.href='/contact'}>Start Project →</button>
                 </div>
              </div>
           </div>
        </div>
      )}

      <style>{`
         /* 🏆 MODAL REFINEMENTS (V117) 🏆 */
         .modal-overlay { 
            position: fixed; inset: 0; background: rgba(15,23,42,0.85); 
            backdrop-filter: blur(12px); z-index: 100000; 
            display: flex; align-items: center; justify-content: center; 
            padding: 20px; overflow-y: auto; 
         }
         .modal-box { 
            width: 100%; max-width: 1100px; max-height: none; 
            background: #fff; border-radius: 40px; position: relative; 
            overflow: hidden; box-shadow: 0 50px 100px rgba(0,0,0,0.4); 
            display: flex; flex-direction: column;
         }
         .modal-close-btn { 
            position: absolute; top: 25px; right: 25px; width: 45px; height: 45px; 
            border-radius: 50%; border: none; background: #fff; z-index: 100; 
            cursor: pointer; box-shadow: 0 10px 30px rgba(0,0,0,0.1); 
            font-size: 1.2rem; font-weight: 400; display: flex; align-items: center; justify-content: center;
         }
         .modal-inner { display: flex; width: 100%; min-height: 500px; }
         .mi-left { width: 42%; position: relative; background: #000; flex-shrink: 0; min-height: 100%; }
         .mi-left img { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; }
         .mi-overlay { position: absolute; bottom: 50px; left: 50px; right: 50px; z-index: 2; }
         .mi-tag { color: #ff8a00; font-size: 0.75rem; font-weight: 900; letter-spacing: 4px; text-transform: uppercase; }
         .mi-title { color: #fff; font-size: 2.8rem; font-weight: 950; margin-top: 15px; line-height: 1; letter-spacing: -2px; }
         
         .mi-right { flex: 1; padding: 70px 60px; background: #fff; }
         .mi-sec h4 { font-size: 0.8rem; font-weight: 900; text-transform: uppercase; color: #ff8a00; margin-bottom: 15px; letter-spacing: 2px; }
         .mi-sec p { color: #475569; font-size: 1.1rem; line-height: 1.8; margin-bottom: 45px; }
         .mi-stats { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-bottom: 50px; }
         .mi-stat { background: #f8fafc; padding: 25px 15px; border-radius: 20px; border: 1px solid #f1f5f9; text-align: center; }
         .ms-v { font-size: 1.6rem; font-weight: 950; color: #0f172a; margin-bottom: 5px; }
         .ms-l { font-size: 0.65rem; color: #64748b; text-transform: uppercase; font-weight: 800; letter-spacing: 1px; }
         .mi-btn { width: 100%; padding: 24px; border-radius: 20px; border: none; background: #ff8a00; color: #fff; font-weight: 900; cursor: pointer; transition: 0.4s; font-size: 1.1rem; box-shadow: 0 20px 40px rgba(255,138,0,0.2); }
         .mi-btn:hover { background: #0f172a; transform: translateY(-5px); }

         @media (max-width: 1100px) {
           .modal-box { max-width: 900px; }
           .mi-title { font-size: 2.2rem; }
           .mi-right { padding: 50px; }
         }
         @media (max-width: 900px) {
           .modal-overlay { padding: 0; align-items: flex-start; }
           .modal-box { border-radius: 0; max-height: none; min-height: 100vh; }
           .modal-inner { flex-direction: column; }
           .mi-left { width: 100%; height: 350px; }
           .mi-right { padding: 40px 25px; }
           .mi-title { font-size: 2rem; }
           .mi-stats { grid-template-columns: 1fr 1fr; }
         }
         @media (max-width: 600px) {
           .mi-stats { grid-template-columns: 1fr; }
           .mi-left { height: 280px; }
           .mi-overlay { bottom: 30px; left: 30px; }
         }
      `}</style>
    </section>
  )
}
