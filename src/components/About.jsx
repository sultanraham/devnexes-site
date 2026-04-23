import { useState } from 'react'

export default function About() {
  const magentaGradient = 'linear-gradient(90deg, #ff8a00 0%, #ffae42 100%)'
  const primaryNavy = '#1a1a2e'
  const textBody = '#5e5e77'
  const accentMagenta = '#ff8a00'

  return (
    <section id="about" style={{ padding: '120px 0', background: '#ffffff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', display: 'flex', gap: '5rem', alignItems: 'center' }}>
        
        {/* Left Content */}
        <div style={{ flex: 1 }}>
          <div style={{ width: 45, height: 4, background: magentaGradient, marginBottom: '2rem' }} />
          
          <h2 style={{ fontSize: '2.5rem', color: primaryNavy, fontWeight: 300, lineHeight: 1.2, marginBottom: '2.5rem' }}>
            Leading companies trust us <br />
            <span style={{ fontWeight: 800 }}>to develop software</span>
          </h2>
          
          <p style={{ fontSize: '1.05rem', color: textBody, lineHeight: 1.8, marginBottom: '2.5rem' }}>
            We <span style={{ color: accentMagenta, fontWeight: 500 }}>add development capacity</span> to tech teams. 
            Our value isn't limited to building teams but is equally distributed across the project lifecycle. 
            We are a custom software development company that guarantees the successful delivery of your project.
          </p>

          <a href="/services" style={{ 
            display: 'flex', alignItems: 'center', gap: '0.8rem', 
            color: '#ff8a00', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' 
          }}>
            See more Information
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Right Video Mockup */}
        <div style={{ flex: 1.1, position: 'relative' }}>
          <div style={{ 
            width: '100%', borderRadius: 24, overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' 
          }}>
             {/* Team Image Placeholder */}
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
               alt="Our Team" 
               style={{ width: '100%', display: 'block', minHeight: 400, objectFit: 'cover' }}
             />
             
             {/* Play Button Overlay */}
             <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: 70, height: 70, borderRadius: '50%', background: '#ffffff',
                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
             }}>
                <div style={{
                   width: 50, height: 50, borderRadius: '50%', background: magentaGradient,
                   display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                     <path d="M5 3l14 9-14 9V3z" />
                   </svg>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
