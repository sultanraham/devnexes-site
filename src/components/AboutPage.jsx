import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.backgroundColor = '#fafafa'; // Very subtle off-white for contrast
    document.body.style.color = '#0f172a';
  }, []);

  return (
    <div className="advanced-corporate-root">
      {/* Engineering Grid Background */}
      <div className="engineering-grid-bg" />

      <Navbar />

      <main className="bento-main">
        {/* HERO */}
        <div className="bento-hero">
          <div className="hero-badge animate-fade-in">Devnexes Solutions</div>
          <h1 className="hero-h1 animate-fade-up">
            Architecting the <br /> <span className="text-gradient">Automated Future.</span>
          </h1>
          <p className="hero-p animate-fade-up delay-1">
            Bridging elite artificial intelligence with hyper-scalable full-stack architecture.
          </p>
        </div>

        {/* BENTO BOX GRID */}
        <div className="bento-wrapper">

          {/* 1. EXECUTIVE PROFILE (Span 2 cols) */}
          <div className="bento-card bento-profile animate-slide-up">
            <div className="bento-profile-inner">
              <div className="profile-img-container">
                <img
                  src="/assets/founder.jpg"
                  alt="Founder"
                  className="profile-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1000";
                  }}
                />
                <div className="live-status">
                  <span className="status-dot"></span> Online
                </div>
              </div>
              <div className="profile-content">
                <h3 className="card-label">FOUNDER & LEAD ENGINEER</h3>
                <h2 className="card-title">Pioneering Logic.</h2>
                <p className="card-text">
                  I specialize in utilizing AI, machine learning, and advanced system integration to solve complex business challenges. We don't just write code; we build intelligent, scalable ecosystems that completely eliminate human manual overhead.
                </p>

                <div className="metric-bars">
                  <div className="metric">
                    <span>System Architecture</span>
                    <div className="bar-bg"><div className="bar-fill" style={{ width: '98%' }}></div></div>
                  </div>
                  <div className="metric">
                    <span>AI Integration</span>
                    <div className="bar-bg"><div className="bar-fill" style={{ width: '95%' }}></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. TECH STACK (Span 1 col) */}
          <div className="bento-card bento-stack animate-slide-up delay-1">
            <h3 className="card-label">CORE STACK</h3>
            <div className="tech-pills">
              <span className="tech-pill">Python</span>
              <span className="tech-pill">Node.js</span>
              <span className="tech-pill">React</span>
              <span className="tech-pill">Next.js</span>
              <span className="tech-pill">Flask</span>
              <span className="tech-pill">Django</span>
              <span className="tech-pill">PHP</span>
              <span className="tech-pill">PostgreSQL</span>
              <span className="tech-pill">Docker</span>
            </div>
            <div className="stack-visual">
              <svg viewBox="0 0 100 100" className="rotating-gear">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="5, 10" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="#6366f1" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="10" fill="#ec4899" />
              </svg>
            </div>
          </div>

          {/* 3. PHILOSOPHY 1 */}
          <div className="bento-card animate-slide-up delay-2">
            <div className="card-icon">01</div>
            <h3 className="card-title-sm">Calculated Precision</h3>
            <p className="card-text-sm">Every digital product is the result of rigorous architecting and highly precise engineering before deployment.</p>
          </div>

          {/* 4. PHILOSOPHY 2 */}
          <div className="bento-card animate-slide-up delay-3">
            <div className="card-icon">02</div>
            <h3 className="card-title-sm">Hyper-Scalability</h3>
            <p className="card-text-sm">Robut systems designed not just to work flawlessly today, but to adapt and scale with tomorrow's growth.</p>
          </div>

          {/* 5. PHILOSOPHY 3 */}
          <div className="bento-card animate-slide-up delay-4">
            <div className="card-icon">03</div>
            <h3 className="card-title-sm">Zero-Touch Automation</h3>
            <p className="card-text-sm">Workflows that allow modern enterprises to operate with absolute speed, eliminating operational overhead.</p>
          </div>

        </div>
      </main>

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');

        .advanced-corporate-root {
          min-height: 100vh;
          font-family: 'Outfit', sans-serif;
          position: relative;
          background-color: #fafafa;
          overflow-x: hidden;
        }

        /* Subtle Blueprint Grid */
        .engineering-grid-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image: 
            linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }
        
        /* Fade grid at bottom */
        .engineering-grid-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 40%, #fafafa 100%);
        }

        .bento-main {
          position: relative;
          z-index: 10;
          padding: 180px 20px 100px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Hero */
        .bento-hero {
          text-align: center;
          margin-bottom: 80px;
        }
        .hero-badge {
          display: inline-block;
          background: rgba(99, 102, 241, 0.1);
          color: #6366f1;
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 25px;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }
        .hero-h1 {
          font-family: 'Playfair Display', serif;
          font-size: 5rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.1;
          margin-bottom: 25px;
          letter-spacing: -2px;
        }
        .text-gradient {
          background: linear-gradient(90deg, #6366f1 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-p {
          font-size: 1.25rem;
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
          font-weight: 400;
        }

        /* BENTO GRID LAYOUT */
        .bento-wrapper {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: minmax(280px, auto);
          gap: 25px;
        }

        .bento-card {
          background: #ffffff;
          border-radius: 30px;
          padding: 40px;
          border: 1px solid rgba(0,0,0,0.04);
          box-shadow: 0 10px 40px -15px rgba(0,0,0,0.05); /* Soft premium shadow */
          position: relative;
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        
        .bento-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px -15px rgba(99, 102, 241, 0.15); /* Tinted shadow on hover */
          border-color: rgba(99, 102, 241, 0.1);
        }

        .bento-profile {
          grid-column: span 2;
        }

        /* Profile Content */
        .bento-profile-inner {
          display: flex;
          gap: 40px;
          align-items: center;
          height: 100%;
        }
        .profile-img-container {
          position: relative;
          width: 250px;
          height: 300px;
          flex-shrink: 0;
        }
        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 15px 35px -10px rgba(0,0,0,0.1);
        }
        .live-status {
          position: absolute;
          bottom: 15px;
          left: 15px;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(10px);
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }
        .status-dot {
          width: 8px; height: 8px; background: #10b981; border-radius: 50%;
          box-shadow: 0 0 10px #10b981;
          animation: pulse-green 2s infinite;
        }

        @keyframes pulse-green {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
          70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        .card-label {
          font-size: 0.75rem;
          font-weight: 800;
          color: #6366f1;
          letter-spacing: 2px;
          margin-bottom: 15px;
        }
        .card-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          color: #0f172a;
          margin-bottom: 20px;
          line-height: 1.1;
        }
        .card-text {
          font-size: 1rem;
          line-height: 1.7;
          color: #64748b;
          margin-bottom: 30px;
        }

        .metric-bars { display: flex; flex-direction: column; gap: 15px; }
        .metric span { font-size: 0.85rem; font-weight: 600; color: #0f172a; display: block; margin-bottom: 8px; }
        .bar-bg { width: 100%; height: 6px; background: #f1f5f9; border-radius: 10px; overflow: hidden; }
        .bar-fill { height: 100%; background: linear-gradient(90deg, #6366f1, #ec4899); border-radius: 10px; }

        /* Tech Stack Card */
        .bento-stack {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .bento-stack .card-label { color: #6366f1; }
        .tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
          position: relative;
          z-index: 2;
        }
        .tech-pill {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #475569;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          backdrop-filter: blur(5px);
          transition: all 0.3s ease;
        }
        .tech-pill:hover {
          background: #f1f5f9;
          color: #0f172a;
          border-color: #cbd5e1;
        }
        
        .stack-visual {
          text-align: right;
          opacity: 0.5;
        }
        .rotating-gear {
          width: 100px; height: 100px;
          animation: rotate-slow 20s linear infinite;
        }
        @keyframes rotate-slow { 100% { transform: rotate(360deg); } }

        /* Small Cards */
        .card-icon {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          color: #f1f5f9;
          font-weight: 700;
          position: absolute;
          top: 20px; right: 30px;
          line-height: 1;
        }
        .card-title-sm {
          font-size: 1.3rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 15px;
          margin-top: 10px;
          position: relative;
          z-index: 2;
        }
        .card-text-sm {
          font-size: 1rem;
          line-height: 1.6;
          color: #64748b;
          position: relative;
          z-index: 2;
        }

        /* Entry Animations */
        .animate-fade-in { opacity: 0; animation: fadeIn 1s ease forwards; }
        .animate-fade-up { opacity: 0; animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-up { opacity: 0; animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }

        @keyframes fadeIn { to { opacity: 1; } }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Responsive Flow */
        @media (max-width: 1024px) {
          .hero-h1 { font-size: clamp(2.5rem, 8vw, 4rem); }
          .bento-wrapper { grid-template-columns: 1fr; }
          .bento-profile { grid-column: span 1; }
          .bento-profile-inner { flex-direction: column; text-align: center; }
          .profile-img-container { width: 100%; height: 350px; }
        }
        @media (max-width: 768px) {
          .bento-main { padding: 120px 20px 60px 20px; }
          .bento-card { padding: 30px 20px; }
          .card-title { font-size: 2rem; }
        }
      `}</style>
    </div>
  )
}
