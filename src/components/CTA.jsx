import React from 'react';

// Custom precision Ray component with perfect structural orientation
const Ray = ({ style }) => (
  <div style={{
    position: 'absolute',
    width: '4.5px', // Exact stroke width from the image
    height: '18px', // Exact stroke pill length
    background: 'linear-gradient(to top, #fc7667 0%, #ffd05b 100%)', // Distinct Orange-to-Yellow gradient
    borderRadius: '10px', // Completely rounded bullet ends
    zIndex: 1, 
    ...style
  }} />
);

export default function CTA() {
  return (
    <section className="cta-section">
      {/* 🚀 CSS Engine for strict structural responsivenes without Tailwind JIT breakages */}
      <style>
        {`
          .cta-section { 
            width: 100%; 
            background-color: #ffffff; 
            padding: 80px 20px; 
            display: flex; 
            justify-content: center; 
          }
          .cta-card {
            width: 100%;
            max-width: 1200px;
            background-color: #f1f3f7; /* Identical light grayish-blue */
            border-radius: 16px;
            padding: 60px 80px; /* Strong desktop padding */
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 40px;
          }
          .cta-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #2d3340; /* Pitch-perfect dark slate color */
            line-height: 1.45;
            margin: 0;
            letter-spacing: -0.5px;
            max-width: 600px;
          }
          .cta-btn-wrapper {
            position: relative; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            margin-right: 30px;
          }
          
          /* Auto-Responsiveness specific bounds */
          @media (max-width: 950px) {
            .cta-card {
               padding: 50px 40px;
               justify-content: center;
               text-align: center;
            }
            .cta-title {
               font-size: 2.1rem;
            }
            .cta-title br {
               display: none; /* Unwrap specific breaks on tabs */
            }
            .cta-btn-wrapper {
               margin-right: 0;
               margin-top: 15px;
            }
          }
          @media (max-width: 480px) {
            .cta-section { padding: 60px 15px; }
            .cta-card { padding: 40px 20px; gap: 30px; border-radius: 12px; }
            .cta-title { font-size: 1.6rem; line-height: 1.35; }
          }
        `}
      </style>

      <div className="cta-card">
        
        {/* Title Text */}
        <h2 className="cta-title">
          Hire the best developers and <br /> designers around!
        </h2>
        
        {/* Shielded container for Button + Ray Geometrics */}
        <div className="cta-btn-wrapper">
          
          {/* Vertical Geometrics */}
          <Ray style={{ top: '-34px', left: '50%', transform: 'translateX(-50%) rotate(0deg)' }} />
          <Ray style={{ bottom: '-34px', left: '50%', transform: 'translateX(-50%) rotate(180deg)' }} />
          
          {/* Top Angled Geometrics */}
          <Ray style={{ top: '-20px', left: '10%', transform: 'rotate(-55deg)' }} />
          <Ray style={{ top: '-20px', right: '10%', transform: 'rotate(55deg)' }} />
          
          {/* Bottom Angled Geometrics */}
          <Ray style={{ bottom: '-20px', left: '10%', transform: 'rotate(-125deg)' }} />
          <Ray style={{ bottom: '-20px', right: '10%', transform: 'rotate(125deg)' }} />
          
          {/* Main Button */}
          <button style={{
            position: 'relative',
            zIndex: 10,
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '1.15rem',
            padding: '16px 42px',
            borderRadius: '6px',
            border: '2px solid #ffffff',
            cursor: 'pointer',
            background: 'linear-gradient(90deg, #fc7667 0%, #fab765 100%)',
            boxShadow: 'none',
            transition: 'transform 0.2s ease, opacity 0.2s'
          }}
          onClick={() => window.location.href = '/contact'}
          onMouseOver={(e) => { e.target.style.transform = 'scale(1.02)'; e.target.style.opacity = '0.92'; }}
          onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.opacity = '1'; }}
          >
            Hire Top Developers
          </button>
        </div>
      </div>
    </section>
  );
}
