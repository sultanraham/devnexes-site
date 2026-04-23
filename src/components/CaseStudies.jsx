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
      
      {/* Dynamic Tagline Header */}
      <div style={{ textAlign: 'center', marginBottom: '100px', padding: '0 25px' }}>
        <div style={{ width: 60, height: 4, background: accentOrange, margin: '0 auto 30px auto', borderRadius: 2 }} />
        <div style={{ marginBottom: '15px' }}>
           <span style={{ 
              fontSize: '0.85rem', fontWeight: 800, color: textMuted, 
              letterSpacing: '5px', textTransform: 'uppercase', display: 'block', 
              marginBottom: '10px' 
           }}>
              Great Product is
           </span>
           <h2 style={{ 
              fontSize: '3.8rem', fontWeight: 900, color: primaryNavy, 
              letterSpacing: '-2px', lineHeight: 1.1, margin: 0 
           }}>
              built by <span style={{ color: accentOrange }}>great teams.</span>
           </h2>
        </div>
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
         .case-grid-card { background: #fff; border-radius: 24px; overflow: hidden; border: 1.5px solid #f1f5f9; display: flex; flex-direction: column; transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); }
         .case-grid-card:hover { transform: translateY(-10px); border-color: #ff8a0044; box-shadow: 0 40px 80px rgba(0,0,0,0.06); }
         
         .card-pic-wrap { height: 220px; position: relative; overflow: hidden; }
         .card-pic-wrap img { width: 100%; height: 100%; object-fit: cover; transition: 1s; }
         .case-grid-card:hover .card-pic-wrap img { transform: scale(1.1); }
         .card-badge { position: absolute; top: 20px; right: 20px; background: rgba(15,23,42,0.9); color: #fff; padding: 6px 14px; border-radius: 100px; font-size: 0.65rem; font-weight: 800; letter-spacing: 1px; backdrop-filter: blur(5px); }
         
         .card-info { padding: 35px; flex: 1; display: flex; flex-direction: column; }
         .card-sub { font-size: 0.7rem; font-weight: 800; color: #ff8a00; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px; display: block; }
         .card-title { font-size: 1.55rem; font-weight: 900; color: #0f172a; margin-bottom: 15px; line-height: 1.2; }
         .card-desc { font-size: 0.95rem; color: #64748b; line-height: 1.7; margin-bottom: 25px; flex: 1; }
         
         .card-btn { background: #f8fafc; border: 1.5px solid #e2e8f0; color: #0f172a; padding: 12px 25px; border-radius: 12px; font-weight: 800; font-size: 0.8rem; cursor: pointer; transition: 0.3s; width: fit-content; }
         .card-btn:hover { background: #0f172a; border-color: #0f172a; color: #fff; transform: scale(1.05); }

         /* Modal styles minimized */
         .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); backdrop-filter: blur(10px); z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 20px; }
         .modal-box { width: 100%; max-width: 1000px; max-height: 90vh; background: #fff; border-radius: 32px; position: relative; overflow: hidden; box-shadow: 0 50px 100px rgba(0,0,0,0.2); }
         .modal-close-btn { position: absolute; top: 20px; right: 20px; width: 40px; height: 40px; border-radius: 50%; border: none; background: #fff; z-index: 10; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
         .modal-inner { display: flex; height: 100%; }
         .mi-left { width: 40%; position: relative; background: #000; flex-shrink: 0; }
         .mi-left img { width: 100%; height: 100%; object-fit: cover; opacity: 0.6; }
         .mi-overlay { position: absolute; bottom: 40px; left: 40px; right: 40px; }
         .mi-tag { color: #ff8a00; font-size: 0.7rem; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; }
         .mi-title { color: #fff; font-size: 2rem; font-weight: 900; margin-top: 10px; line-height: 1.1; }
         .mi-right { flex: 1; padding: 50px; overflow-y: auto; }
         .mi-sec h4 { font-size: 0.7rem; font-weight: 900; text-transform: uppercase; color: #ff8a00; margin-bottom: 10px; }
         .mi-sec p { color: #475569; font-size: 1rem; line-height: 1.7; margin-bottom: 30px; }
         .mi-stats { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin-bottom: 40px; }
         .mi-stat { background: #f8fafc; padding: 15px; border-radius: 12px; border: 1px solid #f1f5f9; text-align: center; }
         .ms-v { font-size: 1.2rem; font-weight: 900; color: #0f172a; }
         .ms-l { font-size: 0.55rem; color: #64748b; text-transform: uppercase; font-weight: 800; }
         .mi-btn { width: 100%; padding: 18px; border-radius: 15px; border: none; background: #ff8a00; color: #fff; font-weight: 800; cursor: pointer; transition: 0.3s; }
         .mi-btn:hover { background: #0f172a; }

         @media (max-width: 900px) {
           .modal-inner { flex-direction: column; }
           .mi-left { width: 100%; height: 200px; }
           .mi-right { padding: 30px; }
         }
      `}</style>
    </section>
  )
}
