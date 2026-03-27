import React from 'react'

const steps = [
  { id: '#1', title: 'Assemble the right team', desc: "We handle all aspects of vetting and choosing the right team that you don't have the time.", pos: 'top', left: '0%' },
  { id: '#2', title: 'Sprint planning', desc: 'Sprint roadmap is a collective planning effort. Team members collaborate to clarify items.', pos: 'bottom', left: '16%' },
  { id: '#3', title: 'Tech architecture', desc: 'We break monolithic apps into microservices. Decoupling the code allows teams faster.', pos: 'top', left: '32%' },
  { id: '#4', title: 'Standups & weekly demos', desc: 'Standups, weekly demos, and weekly reviews make sure everyone is on the same page.', pos: 'bottom', left: '48%' },
  { id: '#5', title: 'Code reviews', desc: 'Code reviews before release help detect issues like memory leaks, performance signs.', pos: 'top', left: '64%' },
  { id: '#6', title: 'Iterative delivery', desc: 'We divide the implementation process into several checkpoints rather than a single deadline.', pos: 'bottom', left: '80%' }
]

export default function DevelopmentProcess() {
  const primaryNavy = '#1a1a2e'
  const textGray = '#5e5e77'
  const magentaTheme = '#b03673'
  const lavenderBorder = '#ebebf9'
  const gradientLine = 'linear-gradient(90deg, #ff7eb3 0%, #3d1fc2 100%)'

  return (
    <section id="development-process" style={{ background: '#ffffff', padding: '140px 0', overflow: 'hidden' }}>
      
      {/* 🏷️ SECTION HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '140px' }}>
        <div style={{ width: 60, height: 4, background: gradientLine, margin: '0 auto 25px auto', borderRadius: 2 }} />
        <h4 style={{ fontSize: '1.8rem', fontWeight: 300, color: textGray, marginBottom: '0.8rem' }}>
          How development
        </h4>
        <h2 style={{ fontSize: '3.2rem', fontWeight: 800, color: primaryNavy }}>
          through Devnexes works
        </h2>
      </div>

      {/* 🛤️ FIXED TIMELINE CONTAINER (Native Horizontal Swipe on Mobile to protect UI proportions) */}
      <div style={{ width: '100%', overflowX: 'auto', overflowY: 'hidden', paddingBottom: '30px', WebkitOverflowScrolling: 'touch' }} className="hide-scroll">
        <div style={{ position: 'relative', minWidth: 1250, maxWidth: 1350, margin: '0 auto', height: 500, padding: '0 40px' }}>
          
          {/* Main Horizontal Gradient Bar (The Root of the Tree) */}
          <div style={{ position: 'absolute', top: '50%', left: '20px', right: '80px', height: 3.5, background: gradientLine, transform: 'translateY(-50%)', borderRadius: 20, zIndex: 1 }} />
          
          {/* Trophy Icon */}
          <div style={{ position: 'absolute', top: '50%', right: '25px', transform: 'translateY(-50%)', fontSize: '3.2rem', zIndex: 2 }}>🏆</div>

          {/* 📦 STEPS FLOW (The Branches) */}
          <div style={{ position: 'relative', height: '100%', zIndex: 2 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ 
                position: 'absolute', left: step.left, width: '280px', 
                top: step.pos === 'top' ? '0' : 'auto', bottom: step.pos === 'bottom' ? '0' : 'auto',
                height: '210px', display: 'flex', flexDirection: 'column', 
                justifyContent: step.pos === 'top' ? 'flex-start' : 'flex-end', alignItems: 'center'
              }}>
                <div style={{ 
                  position: 'absolute', top: step.pos === 'top' ? 'auto' : '-50px', bottom: step.pos === 'top' ? '-50px' : 'auto',
                  left: '20%', width: 2.5, height: 50, background: '#ff7eb3', opacity: 0.9, zIndex: 1
                }} />
                <div style={{
                  background: '#ffffff', padding: '28px 24px', borderRadius: 16, border: `1.2px solid ${lavenderBorder}`,
                  boxShadow: '0 12px 35px rgba(0,0,0,0.02)', width: '100%', zIndex: 3, position: 'relative'
                }}>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '0.8rem', alignItems: 'center' }}>
                    <span style={{ color: magentaTheme, fontSize: '1.25rem', fontWeight: 800 }}>{step.id}</span>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: primaryNavy, margin: 0, lineHeight: 1.1 }}>{step.title}</h4>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: textGray, lineHeight: 1.6, opacity: 0.85 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide Scrollbar for a cleaner pure-swipe experience on mobile */}
      <style>{`
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}
