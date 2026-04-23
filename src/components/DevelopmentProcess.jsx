import React from 'react'

const steps = [
  {
    id: '01',
    phase: 'TEAM SYNC',
    title: 'Curated team assembly',
    desc: "We handpick senior talent precisely matched to your mission's technical requirements and culture.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff8a00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    id: '02',
    phase: 'STRATEGY',
    title: 'Precision roadmap',
    desc: 'Every feature is broken into mission-critical tasks with clear ownership and delivery milestones.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff8a00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    )
  },
  {
    id: '03',
    phase: 'ENGINEERING',
    title: 'Scalable architecture',
    desc: 'Micro-service structures designed for zero-downtime and horizontal growth at enterprise scale.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff8a00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="12" y1="2" x2="12" y2="22" opacity="0.3"/>
      </svg>
    )
  },
  {
    id: '04',
    phase: 'COLLAB',
    title: 'Continuous sync',
    desc: 'Weekly demos and real-time standups keep stakeholders and engineers fully synchronized.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff8a00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    )
  },
  {
    id: '05',
    phase: 'QUALITY',
    title: 'Multi-layer audits',
    desc: 'Automated performance checks and peer reviews eliminate bottlenecks before production.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff8a00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    )
  },
  {
    id: '06',
    phase: 'DELIVERY',
    title: 'Iterative release',
    desc: 'Checkpoint-driven deployment ensures production stability and consistent value.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff8a00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    )
  }
]

export default function DevelopmentProcess() {
  return (
    <section id="development-process" style={{ background: '#fcfcfd', padding: '150px 0' }}>
      
      <div style={{ maxWidth: 1250, margin: '0 auto', padding: '0 25px' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ width: 40, height: 2, background: '#ff8a00' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#ff8a00', letterSpacing: '5px', textTransform: 'uppercase' }}>
              RELIABLE PROTOCOL
            </span>
          </div>
          <h2 style={{ fontSize: '3.6rem', fontWeight: 950, color: '#0f172a', letterSpacing: '-2.5px', lineHeight: 1, margin: 0 }}>
            The Devnexes <br /> <span style={{ color: '#ff8a00' }}>Blueprint.</span>
          </h2>
        </div>

        {/* Organized Step Cards */}
        <div className="protocol-grid">
          {steps.map((step) => (
            <div key={step.id} className="protocol-card">
              <div className="pc-top">
                <span className="pc-tag">{step.phase}</span>
                <span className="pc-num">{step.id}</span>
              </div>
              <div className="pc-icon-box">{step.icon}</div>
              <h4 className="pc-title">{step.title}</h4>
              <p className="pc-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Final Indicator */}
        <div className="pc-final">
          <div className="pc-badge">
             <div className="pc-pulse" />
             <span>SYSTEM READY FOR DEPLOYMENT</span>
          </div>
        </div>

      </div>

      <style>{`
        .protocol-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .protocol-card {
          background: #fff;
          border: 1.5px solid #f1f5f9;
          padding: 50px 45px;
          border-radius: 35px;
          transition: all 0.5s cubic-bezier(0.2, 1, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .protocol-card:hover {
          transform: translateY(-12px);
          border-color: #ff8a0022;
          box-shadow: 0 40px 80px rgba(255, 138, 0, 0.08);
        }
        .pc-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 35px; }
        .pc-tag { font-size: 0.65rem; font-weight: 1000; color: #ff8a00; letter-spacing: 2px; }
        .pc-num { font-size: 1.8rem; font-weight: 1000; color: #f1f5f9; font-family: 'PT Sans', sans-serif; }
        .pc-icon-box { width: 55px; height: 55px; background: #fff8f0; border-radius: 18px; display: flex; align-items: center; justify-content: center; margin-bottom: 30px; border: 1px solid #ff8a0011; }
        .pc-title { font-size: 1.35rem; font-weight: 900; color: #0f172a; margin-bottom: 15px; line-height: 1.2; }
        .pc-desc { font-size: 1rem; color: #64748b; line-height: 1.7; margin: 0; }

        .pc-final { margin-top: 80px; display: flex; justify-content: center; }
        .pc-badge { 
          display: flex; align-items: center; gap: 12px; padding: 15px 35px; 
          background: #0f172a; border-radius: 100px; color: #fff; font-weight: 900; 
          font-size: 0.75rem; letter-spacing: 2px; 
        }
        .pc-pulse { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 15px #22c55e; animation: p-pulse 1.5s infinite; }
        @keyframes p-pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; } }

        @media (max-width: 1100px) {
          .protocol-grid { grid-template-columns: 1fr 1fr; }
          #development-process h2 { font-size: 2.8rem !important; }
        }
        @media (max-width: 768px) {
          .protocol-grid { grid-template-columns: 1fr; }
          .protocol-card { padding: 40px; }
          #development-process { padding: 100px 0 !important; }
          #development-process h2 { font-size: 2.2rem !important; }
        }
      `}</style>
    </section>
  )
}
