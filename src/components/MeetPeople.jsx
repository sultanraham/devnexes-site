import { useState } from 'react'

export default function MeetPeople() {
  const magentaGradient = 'linear-gradient(90deg, #ff8a00 0%, #ffae42 100%)'
  const primaryNavy = '#1a1a2e'

  return (
    <section id="people" style={{ padding: '100px 0', background: '#FAFAFA' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Section Header with Navigation Arrows */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '5rem' }}>
          <div>
            <div style={{ width: 45, height: 4, background: magentaGradient, marginBottom: '2rem' }} />
            <h2 style={{ fontSize: '2.5rem', fontWeight: 300, color: primaryNavy, lineHeight: 1.2 }}>
               Meet the People <br />
               <span style={{ fontWeight: 800 }}>We are Working With</span>
            </h2>
          </div>

          {/* Navigation Arrows (Circle Buttons) */}
          <div style={{ display: 'flex', gap: '1rem', paddingBottom: '1rem' }}>
             {/* Previous Button (Outlined) */}
             <div style={{
                width: 54, height: 54, borderRadius: '50%',
                border: `1.5px solid #d1d5db`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all 0.3s', color: '#6b7280'
             }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                </svg>
             </div>

             {/* Next Button (Solid Orange) */}
             <div style={{
                width: 54, height: 54, borderRadius: '50%',
                background: '#ff8a00', // Vibrant Orange
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all 0.3s', color: '#ffffff'
             }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 5" />
                </svg>
             </div>
          </div>
        </div>

        {/* Content Area Placeholder (Cards will go here next) */}
        <div style={{ height: 300, border: '2px dashed #eee', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>
          Testimonials / People Cards placeholder
        </div>

      </div>
    </section>
  )
}
