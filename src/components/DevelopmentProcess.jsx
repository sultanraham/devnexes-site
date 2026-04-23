import React from 'react'

const steps = [
  {
    id: '01',
    title: 'Curated Team Assembly',
    desc: "We handpick senior engineering talent precisely matched to your mission's technical requirements.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff8a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    id: '02',
    title: 'Strategic Roadmap',
    desc: 'Every feature broken into mission-critical tasks with clear ownership and delivery milestones.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff8a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        <line x1="8" y1="14" x2="14" y2="14"/>
      </svg>
    )
  },
  {
    id: '03',
    title: 'Architecture & Engineering',
    desc: 'Scalable micro-service architecture designed for zero-downtime and horizontal growth at enterprise scale.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff8a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        <line x1="12" y1="2" x2="12" y2="22" opacity="0.3"/>
      </svg>
    )
  },
  {
    id: '04',
    title: 'Continuous Collaboration',
    desc: 'Weekly demos and real-time standups keep stakeholders and engineers fully synchronized.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff8a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    )
  },
  {
    id: '05',
    title: 'Multi-Layer Code Audits',
    desc: 'Automated performance checks and peer reviews eliminate bottlenecks before they reach production.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff8a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    )
  },
  {
    id: '06',
    title: 'Iterative Release',
    desc: 'Checkpoint-driven deployment ensures production stability and consistent value at every milestone.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff8a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    )
  }
]

export default function DevelopmentProcess() {
  return (
    <section id="development-process" style={{ background: '#fff', padding: '160px 0' }}>

      {/* Header */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 25px', marginBottom: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '16px' }}>
          <div style={{ width: 40, height: 2, background: '#ff8a00' }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#ff8a00', letterSpacing: '4px', textTransform: 'uppercase' }}>
            THE PROTOCOL
          </span>
        </div>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: '#0f172a', letterSpacing: '-2px', lineHeight: 1.1, margin: 0 }}>
          How we build <span style={{ color: '#ff8a00' }}>success.</span>
        </h2>
      </div>

      {/* Process Steps */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 25px' }}>

        <div className="proc-grid-container">
          {/* Row 1 — Steps 01 02 03 with arrows */}
          <div className="proc-row">
            {[steps[0], 'arrow', steps[1], 'arrow', steps[2]].map((item, idx) =>
              item === 'arrow' ? (
                <div key={idx} className="proc-arrow">
                  <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                    <path d="M0 8 L28 8 M22 2 L30 8 L22 14" stroke="#ff8a0066" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              ) : (
                <div key={item.id} className="proc-card">
                  <div className="proc-top">
                    <div className="proc-icon-wrap">{item.icon}</div>
                    <span className="proc-num">{item.id}</span>
                  </div>
                  <h4 className="proc-title">{item.title}</h4>
                  <p className="proc-desc">{item.desc}</p>
                </div>
              )
            )}
          </div>

          {/* Down connector (Hidden on mobile) */}
          <div className="proc-down-arrow">
            <svg width="16" height="32" viewBox="0 0 16 32" fill="none">
              <path d="M8 0 L8 28 M2 22 L8 30 L14 22" stroke="#ff8a0066" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Row 2 — Steps 06 05 04 (Hidden logic handled in CSS for snake reverse) */}
          <div className="proc-row row-reverse">
            {[steps[5], 'arrow', steps[4], 'arrow', steps[3]].map((item, idx) =>
              item === 'arrow' ? (
                <div key={idx} className="proc-arrow">
                   <svg width="32" height="16" viewBox="0 0 32 16" fill="none" style={{ transform: 'rotate(180deg)' }}>
                    <path d="M0 8 L28 8 M22 2 L30 8 L22 14" stroke="#ff8a0066" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              ) : (
                <div key={item.id} className="proc-card">
                  <div className="proc-top">
                    <div className="proc-icon-wrap">{item.icon}</div>
                    <span className="proc-num">{item.id}</span>
                  </div>
                  <h4 className="proc-title">{item.title}</h4>
                  <p className="proc-desc">{item.desc}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Final badge */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '14px',
            padding: '16px 40px', background: '#0f172a', borderRadius: '100px',
            boxShadow: '0 20px 50px rgba(15,23,42,0.12)'
          }}>
            <span style={{ fontSize: '1.4rem' }}>🏆</span>
            <span style={{ color: '#fff', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '2px' }}>
              PRODUCTION SUCCESS DELIVERED
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .proc-grid-container { display: flex; flex-direction: column; gap: 40px; }
        .proc-row { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; align-items: stretch; }
        .proc-arrow { display: flex; align-items: center; justify-content: center; padding: 0 15px; }
        .proc-down-arrow { display: flex; justify-content: flex-end; padding-right: calc(16.66% + 15px); }
        
        .proc-card {
          background: #fff;
          border: 1.5px solid #f1f5f9;
          border-radius: 28px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .proc-card:hover {
          transform: translateY(-8px);
          border-color: #ff8a0033;
          box-shadow: 0 30px 60px rgba(255, 138, 0, 0.06);
        }
        .proc-top { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 25px; }
        .proc-icon-wrap { width: 52px; height: 52px; background: #fff8f0; border-radius: 14px; display: flex; align-items: center; justify-content: center; border: 1px solid #ff8a0022; }
        .proc-num { font-size: 2.2rem; font-weight: 900; color: #f1f5f9; line-height: 1; font-family: 'PT Sans', sans-serif; }
        .proc-title { font-size: 1.25rem; font-weight: 800; color: #0f172a; margin: 0 0 15px 0; line-height: 1.3; }
        .proc-desc { font-size: 0.95rem; color: #64748b; line-height: 1.7; margin: 0; }

        @media (max-width: 1100px) {
          .proc-row { grid-template-columns: 1fr 1fr; gap: 30px; }
          .proc-arrow, .proc-down-arrow { display: none; }
          .row-reverse { flex-direction: column; }
          #development-process h2 { font-size: 2.8rem !important; }
        }
        @media (max-width: 768px) {
          .proc-row { grid-template-columns: 1fr; }
          .proc-card { padding: 35px 30px; }
          #development-process { padding: 100px 0 !important; }
          #development-process h2 { font-size: 2.2rem !important; }
        }
      `}</style>
    </section>
  )
}
