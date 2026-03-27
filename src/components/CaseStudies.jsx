import React, { useState } from 'react'

const cases = [
  {
    id: 1,
    title: 'Website Design for Devnexes Core Project',
    desc: 'Empowering Devnexes with a world-class digital presence. Our core website reflects our identity through cutting-edge UI/UX.',
    executiveSummary: 'A complete brand overhaul and digital transformation for the Devnexes ecosystem, focusing on high-velocity engagement and neural-styled aesthetics.',
    challenges: 'The primary challenge was to balance a complex high-tech identity with extreme performance and a user-friendly interface for enterprise clients.',
    solutions: 'We implemented a custom React-based scroll engine, integrated fluid GSAP animations, and deployed a glassmorphic design system that maintains 99+ Lighthouse scores.',
    results: '400% increase in strategic lead generation, 65% reduction in bounce rate, and a 100% mission-success rating from stakeholders.',
    tech: 'React, Node.js, GSAP, Framer Motion',
    metrics: [
       { label: 'Performance', val: '100/100' },
       { label: 'Engagement', val: '+400%' },
       { label: 'SEO Score', val: '98/100' }
    ],
    objectives: ['Boost User Retention', 'Lead Generation Hub', 'Brand Identity Modernization'],
    bgColor: '#e3f2fd',
    imageBg: '#d0e5f5',
    mainImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Fitness & Health Mobile Companion',
    desc: 'Taking fitness and health monitoring to the next level. This mobile companion app leverages real-time data sync.',
    executiveSummary: 'An end-to-end IoT integrated mobile application designed to provide real-time physiological data tracking for elite athletes.',
    challenges: 'Ensuring low-latency synchronization between wearable hardware and the mobile interface across diverse network conditions.',
    solutions: 'Engineered a specialized WebSocket bridge and a serverless AWS Lambda backplane to handle burst data traffic from 500k+ concurrent IoT devices.',
    results: 'Reached #5 in Health & Fitness category within 3 weeks of launch. 95% user retention rate among professional athletes.',
    tech: 'React Native, Firebase, AWS Lambda, D3.js',
    metrics: [
       { label: 'Concurrent Users', val: '500k+' },
       { label: 'Retention', val: '95%' },
       { label: 'App Rating', val: '4.9/5.0' }
    ],
    objectives: ['IoT Synchronization', 'Real-time Analytics', 'Community Scaling'],
    bgColor: '#e0fcf4',
    imageBg: '#c1f5e8',
    mainImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Minimalist Luxury E-commerce UI',
    desc: 'Crafting luxury fashion through a minimalist lens. Our e-commerce solution prioritizes high-fidelity product imagery.',
    executiveSummary: 'A luxury-focused digital storefront designed for a European fashion house, emphasizing zero-friction transactions and AR visualization.',
    challenges: 'Translating the tactile feel of luxury products into a digital format while maintaining ultra-fast high-res image loading.',
    solutions: 'Implemented NexGen-CDN for asset delivery and a Three.js powered AR dressing room that works natively in the browser without plugins.',
    results: '35% reduction in checkout churn and a 2.5x increase in Average Order Value (AOV) via strategic cross-sell algorithms.',
    tech: 'Next.js, Shopify API, Stripe, Three.js',
    metrics: [
       { label: 'Conversion Lift', val: '+28%' },
       { label: 'Load Time', val: '0.8s' },
       { label: 'AOV Increase', val: '150%' }
    ],
    objectives: ['AR Visualization', 'Checkout Optimization', 'Performance at Scale'],
    bgColor: '#fff1f1',
    imageBg: '#ffe4e4',
    mainImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'
  }
]

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(null);
  const primaryNavy = '#1a1a2e'
  const magentaTheme = '#ff7eb3'
  const textGray = '#5e5e77'

  return (
    <section id="case-studies" className="case-studies-sec">

      {/* 🛸 PORTFOLIO LEDGER (MODAL) */}
      {selectedCase && (
        <div className="case-modal-overlay animate-fade" onClick={() => setSelectedCase(null)}>
           <div className="case-modal-card animate-slide-up" onClick={e => e.stopPropagation()}>
              <button className="close-modal" onClick={() => setSelectedCase(null)}>×</button>
              
              <div className="modal-scroll-area">
                 {/* Visual Header */}
                 <div className="modal-hero">
                    <img src={selectedCase.mainImage} alt="Case" className="modal-hero-img" />
                    <div className="hero-overlay">
                       <div className="modal-badge">CASE_ID // 00{selectedCase.id}</div>
                       <h2>{selectedCase.title}</h2>
                    </div>
                 </div>

                 <div className="modal-content-main">
                    {/* Metrics Row */}
                    <div className="metrics-ledger">
                       {selectedCase.metrics.map(m => (
                          <div key={m.label} className="metric-box">
                             <span className="m-val">{m.val}</span>
                             <span className="m-label">{m.label}</span>
                          </div>
                       ))}
                    </div>

                    <div className="details-grid">
                       <div className="details-left">
                          <section className="detail-sec">
                             <h3>Executive Summary</h3>
                             <p>{selectedCase.executiveSummary}</p>
                          </section>

                          <section className="detail-sec">
                             <h3>The Challenge</h3>
                             <p>{selectedCase.challenges}</p>
                          </section>

                          <section className="detail-sec">
                             <h3>Tactical solution</h3>
                             <p>{selectedCase.solutions}</p>
                          </section>

                          <section className="detail-sec result-node">
                             <h3>Strategic Results</h3>
                             <p>{selectedCase.results}</p>
                          </section>
                       </div>

                       <div className="details-right">
                          <div className="spec-card">
                             <h4>Technical Stack</h4>
                             <div className="tech-pile">
                                {selectedCase.tech.split(',').map(t => <span key={t} className="t-pill">{t.trim()}</span>)}
                             </div>
                          </div>

                          <div className="spec-card">
                             <h4>Mission Objectives</h4>
                             <ul className="obj-list">
                                {selectedCase.objectives.map(o => <li key={o}>{o}</li>)}
                             </ul>
                          </div>

                          <button className="initiate-btn" onClick={() => window.location.href='/contact'}>Start Similar Mission</button>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}

      <style>{`
        .case-studies-sec { background: #fdfdfd; padding: 120px 0; overflow: hidden; position: relative; }
        
        .case-card { display: flex; background: #ffffff; border-radius: 32px; overflow: hidden; box-shadow: 0 40px 100px rgba(0,0,0,0.03); border: 1.5px solid #f1f5f9; flex-direction: row; min-height: 550px; transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
        .case-card:hover { transform: translateY(-12px); box-shadow: 0 60px 120px rgba(0,0,0,0.08); }
        .case-img-box { flex: 1.2; overflow: hidden; position: relative; }
        .case-img-box img { width: 100%; height: 100%; object-fit: cover; transition: 0.8s; }
        .case-card:hover .case-img-box img { scale: 1.05; }
        
        .case-txt-box { flex: 1; padding: 70px; display: flex; flex-direction: column; justify-content: center; }
        
        /* 🛸 LEDGER STYLES */
        .case-modal-overlay { position: fixed; inset: 0; background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(12px); z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 40px; }
        .case-modal-card { width: 100%; max-width: 1150px; max-height: 90vh; background: #fff; border-radius: 40px; position: relative; overflow: hidden; box-shadow: 0 100px 200px rgba(0,0,0,0.3); }
        .close-modal { position: absolute; top: 30px; right: 30px; width: 50px; height: 50px; background: #fff; border: 1px solid #f1f5f9; border-radius: 50%; font-size: 1.5rem; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 100; transition: 0.3s; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
        .close-modal:hover { background: #0f172a; color: #fff; transform: rotate(90deg); }
        
        .modal-scroll-area { height: 100%; overflow-y: auto; }
        
        .modal-hero { height: 450px; position: relative; overflow: hidden; }
        .modal-hero-img { width: 100%; height: 100%; object-fit: cover; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, #0f172a, transparent); display: flex; flex-direction: column; justify-content: flex-end; padding: 60px; }
        .hero-overlay h2 { font-family: 'Playfair Display', serif; font-size: 3.5rem; font-weight: 900; color: #fff; line-height: 1.1; margin-top: 15px; }
        .modal-badge { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; font-weight: 800; color: #818cf8; letter-spacing: 4px; }

        .modal-content-main { padding: 60px; }
        
        /* 💹 METRICS */
        .metrics-ledger { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-bottom: 80px; }
        .metric-box { background: #f8fafc; padding: 30px; border-radius: 24px; text-align: center; border: 1px solid #f1f5f9; }
        .m-val { display: block; font-size: 2.2rem; font-weight: 900; color: #1a1a2e; margin-bottom: 5px; }
        .m-label { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: #94a3b8; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; }

        /* 📝 DETAILS */
        .details-grid { display: grid; grid-template-columns: 1.7fr 1fr; gap: 80px; }
        .detail-sec { margin-bottom: 50px; }
        .detail-sec h3 { font-size: 1.4rem; font-weight: 850; color: #1a1a2e; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px; color: #6366f1; }
        .detail-sec p { font-size: 1.25rem; line-height: 1.7; color: #475569; font-weight: 400; }
        .result-node { background: #f0fdf4; padding: 40px; border-radius: 24px; border: 1px solid #dcfce7; }
        .result-node h3 { color: #16a34a; }

        .spec-card { background: #f8fafc; padding: 35px; border-radius: 24px; margin-bottom: 30px; border: 1px solid #f1f5f9; }
        .spec-card h4 { font-size: 0.9rem; font-weight: 850; text-transform: uppercase; letter-spacing: 2px; color: #1e293b; margin-bottom: 25px; }
        
        .tech-pile { display: flex; flex-wrap: wrap; gap: 10px; }
        .t-pill { background: #fff; color: #475569; padding: 8px 16px; border-radius: 100px; font-size: 0.85rem; font-weight: 750; border: 1.5px solid #e2e8f0; }
        
        .obj-list { list-style: none; padding: 0; }
        .obj-list li { font-size: 1.05rem; color: #475569; font-weight: 600; margin-bottom: 12px; position: relative; padding-left: 25px; }
        .obj-list li::before { content: '→'; position: absolute; left: 0; color: #6366f1; font-weight: 900; }

        .initiate-btn { width: 100%; padding: 22px; background: #0f172a; color: #fff; border: none; border-radius: 16px; font-weight: 850; letter-spacing: 2px; cursor: pointer; transition: 0.4s; font-size: 1rem; margin-top: 20px; }
        .initiate-btn:hover { background: #6366f1; transform: translateY(-5px); box-shadow: 0 20px 40px rgba(99,102,241,0.2); }

        /* 🚀 ANIMATIONS */
        .animate-fade { animation: fadeIn 0.5s ease-out; }
        .animate-slide-up { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(80px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

        @media (max-width: 1100px) {
           .case-card { flex-direction: column; min-height: auto; }
           .case-txt-box { padding: 50px 40px; }
           .details-grid { grid-template-columns: 1fr; gap: 50px; }
           .hero-overlay h2 { font-size: 2.5rem; }
           .metrics-ledger { grid-template-columns: 1fr; gap: 15px; }
        }
      `}</style>
      
      <div style={{ textAlign: 'center', marginBottom: '80px', position: 'relative', zIndex: 2 }}>
        <div style={{ width: 60, height: 4, background: magentaTheme, margin: '0 auto 20px auto', borderRadius: 2 }} />
        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: primaryNavy, letterSpacing: '-1px' }}>Strategic Ledger</h2>
        <p style={{ color: textGray, fontSize: '1.2rem', marginTop: '10px' }}>Selected project execution records by Devnexes Core.</p>
      </div>

      <div style={{ maxWidth: 1250, margin: '0 auto', padding: '0 25px', display: 'flex', flexDirection: 'column', gap: '80px' }}>
        {cases.map((cs) => (
          <div key={cs.id} className="case-card">
            <div className="case-img-box">
              <img src={cs.mainImage} alt={cs.title} />
            </div>
            <div className="case-txt-box">
               <div className="modal-badge" style={{ marginBottom: '20px' }}>MISSION_RECORD_00{cs.id}</div>
              <h3 style={{ fontSize: '2.4rem', fontWeight: 900, color: primaryNavy, marginBottom: '2rem', lineHeight: 1.1 }}>{cs.title}</h3>
              <p style={{ fontSize: '1.2rem', color: textGray, lineHeight: 1.8, marginBottom: '3.5rem' }}>{cs.desc}</p>
              <button 
                className="read-more-btn"
                onClick={() => setSelectedCase(cs)}
                style={{ background: '#0f172a', border: 'none', color: '#fff', fontWeight: 850, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 35px', borderRadius: '12px', width: 'fit-content', transition: '0.3s' }}
              >
                ACCESS FULL RECORD →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
