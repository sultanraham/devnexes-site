import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const projectsData = [
   {
      id: 1,
      title: 'NexGen Fintech Core',
      category: 'FINTECH',
      client: 'Global Bank Group',
      year: '2025',
      desc: 'Architecting a low-latency transaction engine capable of 150k TPS with 99.999% uptime.',
      img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1600',
      challenge: 'The existing legacy system suffered from 2s transaction latency and frequent downtime during peak hours.',
      outcome: 'Reduced latency to 15ms. Implemented a distributed Rust-based engine with real-time fraud detection.',
      metrics: ['150K TPS', '99.9% Uptime'],
      stack: ['Rust', 'gRPC', 'PostgreSQL', 'Kubernetes'],
   },
   {
      id: 2,
      title: 'Aura AI Healthcare',
      category: 'AI LABS',
      client: 'HealthPath Inc',
      year: '2026',
      desc: 'Deploying a HIPAA-compliant neural diagnostics platform for real-time patient analysis.',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600',
      challenge: 'Manual diagnostics were slow and prone to human error in high-stress clinical environments.',
      outcome: 'Automated 70% of initial scan reviews with 98.4% accuracy through custom RAG-logic.',
      metrics: ['98.4% Accuracy', 'HIPAA Secure'],
      stack: ['Python', 'PyTorch', 'FastAPI', 'AWS HealthLake'],
   },
   {
      id: 3,
      title: 'Summit eCommerce',
      category: 'ECOMMERCE',
      client: 'PrimeRetail',
      year: '2024',
      desc: 'Building an elastic distributed storefront for 10M+ concurrent users during seasonal peaks.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600',
      challenge: 'Server crashes during Black Friday resulted in $12M lost revenue in previous years.',
      outcome: 'Zero downtime during 10M concurrent user bursts. Optimized queries for 150% faster checkout.',
      metrics: ['10M Users', 'Zero Downtime'],
      stack: ['Next.js', 'Go', 'Redis', 'Terraform'],
   },
   {
      id: 4,
      title: 'Vanguard CyberLayer',
      category: 'SECURITY',
      client: 'IronGate Defense',
      year: '2026',
      desc: 'Automating enterprise security audits and real-time threat neutralization across global nodes.',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600',
      challenge: 'The client faced 500+ daily phishing and DDoS attacks on decentralized nodes.',
      outcome: 'Neutralized 99% of threats autonomously. Reduced audit time from 3 weeks to 4 hours.',
      metrics: ['99% Protection', '4hr Audits'],
      stack: ['Rust', 'Sentinel', 'Golang', 'Docker'],
   },
   {
      id: 5,
      title: 'Oasis Smart Logistics',
      category: 'LOGISTICS',
      client: 'FleetTrack',
      year: '2025',
      desc: 'Real-time global tracking and route optimization for a fleet of 5,000 autonomous units.',
      img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1600',
      challenge: 'GPS drift and inefficient routing caused 12% excess fuel consumption and delayed deliveries.',
      outcome: 'Optimized routing by 22% using real-time IoT telemetry and predictive AI traffic models.',
      metrics: ['5K Units', '22% Saved'],
      stack: ['C++', 'Node.js', 'MQTT', 'Google Cloud IoT'],
   },
   {
      id: 6,
      title: 'Titan Energy Core',
      category: 'INDUSTRIAL',
      client: 'EcoNext Power',
      year: '2026',
      desc: 'Managing decentralized energy grids through high-integrity software-defined power nodes.',
      img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600',
      challenge: 'Energy waste in distributed grids was reaching 15% due to poor load balancing.',
      outcome: 'Implemented real-time load shifting, reducing energy waste to 4% across the state grid.',
      metrics: ['State-Wide', '4% Waste'],
      stack: ['Rust', 'Elixir', 'TimescaleDB', 'Kubernetes'],
   }
]

const CATEGORIES = ['All', 'FINTECH', 'AI LABS', 'ECOMMERCE', 'SECURITY', 'LOGISTICS', 'INDUSTRIAL']

export default function ProjectsPage() {
   const [filter, setFilter] = useState('All')
   const [selected, setSelected] = useState(null)
   const [hovered, setHovered] = useState(null)
   const [isSubmitting, setIsSubmitting] = useState(false)

   const handleProposal = (e) => {
      e.preventDefault()
      setIsSubmitting(true)
      setTimeout(() => {
         setIsSubmitting(false)
         alert('Your project proposal has been submitted successfully. Our team will reach out within 24 hours.')
         e.target.reset()
      }, 1500)
   }

   const [scrollY, setScrollY] = useState(0)

   useEffect(() => {
      window.scrollTo(0, 0)
      document.body.style.backgroundColor = '#ffffff'
      
      const handleScroll = () => {
         setScrollY(window.scrollY)
      }
      window.addEventListener('scroll', handleScroll, { passive: true })

      // 👁️ REVEAL ON SCROLL OBSERVER
      const observerOptions = { threshold: 0.05 };
      const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               entry.target.classList.add('reveal-active');
            }
         });
      }, observerOptions);

      const targets = document.querySelectorAll('.scroll-reveal');
      targets.forEach(t => observer.observe(t));

      return () => {
         window.removeEventListener('scroll', handleScroll);
         targets.forEach(t => observer.unobserve(t));
      }
   }, [selected, filter]) // Re-run when filter changes to observe new items

   const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(p => p.category === filter)

   return (
      <div className="proj-root">
         <Navbar />
         <main>
            {/* HERO */}
            {!selected && (
               <section className="proj-hero">
                  <div className="proj-container">
                     <div className="proj-hero-split scroll-reveal">
                        <div className="proj-hero-left" style={{ transform: `translateY(${scrollY * 0.25}px)` }}>
                           <div className="proj-overline-wrap">
                              <span className="proj-overline">Our Work</span>
                              <span className="proj-year-badge">2024 - 2026</span>
                           </div>
                           <h1 className="proj-hero-title">
                              We Build <br />
                              <span className="proj-gradient-text">What Matters.</span>
                           </h1>
                           <p className="proj-hero-desc">
                              From fintech engines processing 150K TPS to AI diagnostics with 98% accuracy — explore the systems we've engineered for industry leaders.
                           </p>

                           {/* Live Stats Strip */}
                           <div className="proj-stats-strip">
                              <div className="proj-stat">
                                 <span className="proj-stat-num">06</span>
                                 <span className="proj-stat-label">Projects</span>
                              </div>
                              <div className="proj-stat-divider" />
                              <div className="proj-stat">
                                 <span className="proj-stat-num">12+</span>
                                 <span className="proj-stat-label">Clients</span>
                              </div>
                              <div className="proj-stat-divider" />
                              <div className="proj-stat">
                                 <span className="proj-stat-num">99.9%</span>
                                 <span className="proj-stat-label">Uptime</span>
                              </div>
                           </div>

                           <div className="proj-tabs">
                              {CATEGORIES.map(cat => (
                                 <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`proj-tab ${filter === cat ? 'proj-tab-active' : ''}`}
                                 >
                                    {cat}
                                 </button>
                              ))}
                           </div>
                        </div>

                        <div className="proj-hero-right" style={{ transform: `translateY(${scrollY * 0.12}px)` }}>
                           <div className="proj-hero-viz">
                              <svg className="neural-svg" viewBox="0 0 400 400">
                                 {/* Base Lines (Connecting Nodes) */}
                                 <path className="n-line" d="M200 50 L100 150 L200 250 L300 150 Z" />
                                 <path className="n-line" d="M200 50 L300 150 L200 250 L100 150 Z" />
                                 <path className="n-line-2" d="M100 150 L50 200 M300 150 L350 200 M200 50 L200 20 M200 250 L200 280" />
                                 
                                 {/* Central Core */}
                                 <circle className="n-core" cx="200" cy="150" r="60" />
                                 <circle className="n-core-inner" cx="200" cy="150" r="12" />
                                 
                                 {/* Orbiting Points (Satellite Nodes) */}
                                 <g className="orbit-ring">
                                    <circle cx="200" cy="90" r="5" className="n-node" />
                                    <circle cx="200" cy="210" r="4" className="n-node" />
                                    <circle cx="140" cy="150" r="4" className="n-node-2" />
                                    <circle cx="260" cy="150" r="5" className="n-node-2" />
                                 </g>
                                 
                                 <g className="orbit-ring-2">
                                    <circle cx="160" cy="100" r="3" className="n-node-3" />
                                    <circle cx="240" cy="200" r="3" className="n-node-3" />
                                 </g>
                              </svg>
                           </div>
                           <div className="proposal-card">
                              <h3 className="proposal-title">Start a Project</h3>
                              <p className="proposal-desc">Share your vision and let's build something extraordinary together.</p>
                              <form onSubmit={handleProposal} className="proposal-form">
                                 <div className="proposal-field">
                                    <label>Your Name</label>
                                    <input type="text" placeholder="Enter your name" required />
                                 </div>
                                 <div className="proposal-field">
                                    <label>Email</label>
                                    <input type="email" placeholder="you@company.com" required />
                                 </div>
                                 <div className="proposal-field">
                                    <label>Project Details</label>
                                    <textarea placeholder="Describe your project requirements..." required></textarea>
                                 </div>
                                 <button type="submit" className="proposal-submit" disabled={isSubmitting}>
                                    {isSubmitting ? 'Submitting...' : 'Submit Proposal'}
                                    {!isSubmitting && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
                                 </button>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
            )}

            {/* PROJECT GRID */}
            {!selected && (
               <div className="proj-container">
                  <div className="proj-grid">
                     {filteredProjects.map((proj, idx) => (
                        <div
                           key={proj.id}
                           className={`proj-card scroll-reveal ${idx === 0 ? 'proj-card-featured' : ''}`}
                           style={{ '--reveal-delay': `${(idx % 3) * 0.15}s` }}
                           onClick={() => { setSelected(proj); window.scrollTo({ top: 0 }); }}
                           onMouseEnter={() => setHovered(proj.id)}
                           onMouseLeave={() => setHovered(null)}
                        >
                           <div className="proj-card-img-wrap">
                              <img
                                 src={proj.img}
                                 alt={proj.title}
                                 className="proj-card-img"
                                 style={{ transform: hovered === proj.id ? 'scale(1.04)' : 'scale(1)' }}
                                 loading="lazy"
                              />
                              <div className="proj-card-img-overlay" />
                              <span className="proj-cat-badge">{proj.category}</span>
                           </div>
                           <div className="proj-card-body">
                              <div className="proj-card-meta">
                                 <span>{proj.client}</span>
                                 <span className="proj-dot" />
                                 <span>{proj.year}</span>
                              </div>
                              <h3 className="proj-card-title">{proj.title}</h3>
                              <p className="proj-card-desc">{proj.desc}</p>
                              <div className="proj-card-footer">
                                 <div className="proj-metrics">
                                    {proj.metrics.map(m => (
                                       <span key={m} className="proj-metric">{m}</span>
                                    ))}
                                 </div>
                                 <span className="proj-card-cta">
                                    View Case Study
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                 </span>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            )}

            {/* CASE STUDY DETAIL */}
            {selected && (
               <div className="case-root">
                  <div className="case-nav proj-container">
                     <button onClick={() => setSelected(null)} className="case-back-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                        Back to Projects
                     </button>
                     <span className="case-ref">Case Study #{String(selected.id).padStart(2, '0')}</span>
                  </div>

                  <div className="proj-container">
                     <header className="case-header">
                        <p className="case-category">{selected.category}</p>
                        <h1 className="case-title">{selected.title}</h1>
                        <div className="case-meta">
                           <div className="case-meta-item">
                              <span className="case-meta-label">Client</span>
                              <span className="case-meta-value">{selected.client}</span>
                           </div>
                           <div className="case-meta-item">
                              <span className="case-meta-label">Year</span>
                              <span className="case-meta-value">{selected.year}</span>
                           </div>
                           <div className="case-meta-item">
                              <span className="case-meta-label">Lead</span>
                              <span className="case-meta-value">Devnexes Labs</span>
                           </div>
                        </div>
                     </header>

                     <div className="case-hero-img">
                        <img src={selected.img} alt={selected.title} />
                     </div>

                     <div className="case-body-grid">
                        <div className="case-main">
                           <div className="case-section">
                              <h3 className="case-section-label">The Challenge</h3>
                              <p className="case-section-text">{selected.challenge}</p>
                           </div>
                           <div className="case-section">
                              <h3 className="case-section-label">Our Solution</h3>
                              <p className="case-section-text">{selected.desc}</p>
                           </div>
                           <div className="case-section">
                              <h3 className="case-section-label">The Outcome</h3>
                              <p className="case-section-text">{selected.outcome}</p>
                           </div>
                        </div>

                        <aside className="case-sidebar">
                           <div className="case-aside-box">
                              <h4 className="case-aside-title">Tech Stack</h4>
                              <div className="case-pills">
                                 {selected.stack.map(s => <span key={s} className="case-pill">{s}</span>)}
                              </div>
                           </div>
                           <div className="case-aside-box">
                              <h4 className="case-aside-title">Key Results</h4>
                              <ul className="case-results">
                                 {selected.metrics.map(m => (
                                    <li key={m}>
                                       <span className="case-result-dot" />
                                       {m}
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </aside>
                     </div>

                     <div className="case-cta-strip">
                        <div>
                           <h3 className="case-cta-title">Need a similar solution?</h3>
                           <p className="case-cta-desc">Our senior engineering team is ready to architect your next system.</p>
                        </div>
                        <button className="case-cta-btn" onClick={() => window.location.href='/contact'}>
                           Start a Project
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </button>
                     </div>
                  </div>
               </div>
            )}
         </main>

         <Footer />

         <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');

            .proj-root {
               background: #fff;
               min-height: 100vh;
               font-family: 'Outfit', sans-serif;
               color: #0f172a;
            }
            .proj-container {
               max-width: 1280px;
               margin: 0 auto;
               padding: 0 30px;
            }

            /* HERO */
            .proj-hero {
               padding: 120px 0 60px 0;
               background: linear-gradient(180deg, #f8fafc 0%, #fff 100%);
               border-bottom: 1px solid #f1f5f9;
            }
            .proj-overline-wrap {
               display: flex;
               align-items: center;
               gap: 14px;
               margin-bottom: 24px;
            }
            .proj-overline {
               font-size: 0.8rem;
               font-weight: 700;
               letter-spacing: 3px;
               text-transform: uppercase;
               color: #6366f1;
            }
            .proj-year-badge {
               font-size: 0.72rem;
               font-weight: 600;
               color: #94a3b8;
               background: #f1f5f9;
               border: 1px solid #e2e8f0;
               padding: 4px 12px;
               border-radius: 20px;
               letter-spacing: 1px;
            }
            .proj-hero-title {
               font-family: 'Playfair Display', serif;
               font-size: 3.8rem;
               font-weight: 700;
               line-height: 1.05;
               letter-spacing: -1.5px;
               color: #0f172a;
               margin-bottom: 20px;
            }
            .proj-gradient-text {
               background: linear-gradient(90deg, #6366f1, #ec4899);
               -webkit-background-clip: text;
               -webkit-text-fill-color: transparent;
            }
            .proj-hero-desc {
               font-size: 1.15rem;
               color: #64748b;
               max-width: 520px;
               line-height: 1.8;
               font-weight: 300;
               margin-bottom: 35px;
            }

            /* Stats Strip */
            .proj-stats-strip {
               display: flex;
               align-items: center;
               gap: 30px;
               margin-bottom: 40px;
               padding: 20px 0;
               border-top: 1px solid #f1f5f9;
               border-bottom: 1px solid #f1f5f9;
            }

            /* 👁️ SCROLL REVEAL ENGINE */
            .scroll-reveal {
               opacity: 0;
               transform: translateY(40px);
               transition: all 0.9s cubic-bezier(0.165, 0.84, 0.44, 1);
               transition-delay: var(--reveal-delay, 0s);
               will-change: transform, opacity;
            }
            .scroll-reveal.reveal-active {
               opacity: 1 !important;
               transform: translateY(0) !important;
            }

            .proj-hero { 
               background: #fff; padding-top: 140px; padding-bottom: 80px; 
               position: relative; overflow: hidden;
               border-bottom: 1px solid #f1f5f9;
            }
            .proj-stat { text-align: center; }
            .proj-stat-num {
               display: block;
               font-family: 'Playfair Display', serif;
               font-size: 2rem;
               font-weight: 700;
               color: #0f172a;
               line-height: 1;
               margin-bottom: 4px;
            }
            .proj-stat-label {
               font-size: 0.72rem;
               font-weight: 500;
               color: #94a3b8;
               letter-spacing: 1px;
               text-transform: uppercase;
            }
            .proj-stat-divider {
               width: 1px;
               height: 40px;
               background: #e2e8f0;
            }

            /* HERO SPLIT */
            .proj-hero-split {
               display: flex;
               gap: 50px;
               align-items: flex-start;
               justify-content: center;
               max-width: 1050px;
               margin: 0 auto;
            }
            .proj-hero-left { flex: 1; }
            .proj-hero-right { 
               flex-shrink: 0; 
               position: relative; /* Needed for absolute viz placement */
            }

            /* Neural Viz Hero Element */
            .proj-hero-viz {
               position: absolute;
               top: -50px;
               left: -120px;
               width: 500px;
               height: 500px;
               z-index: -1; /* Place behind form */
               pointer-events: none;
               opacity: 0.6;
               filter: blur(0.5px);
            }
            
            .neural-svg { width: 100%; height: 100%; overflow: visible; animation: viz-rotate 60s linear infinite; }
            .n-line { stroke: rgba(99,102,241,0.22); stroke-width: 1.5; stroke-dasharray: 8 4; animation: dash-flow 4s linear infinite; }
            .n-line-2 { stroke: rgba(236,72,153,0.18); stroke-width: 1; stroke-dasharray: 6 6; animation: dash-flow 5s linear infinite reverse; }
            .n-node { fill: #6366f1; animation: node-breathe 3s ease-in-out infinite; }
            .n-node-2 { fill: #ec4899; animation: node-breathe 3s ease-in-out infinite 1s; }
            .n-node-3 { fill: rgba(99,102,241,0.5); animation: node-breathe 3s ease-in-out infinite 2.5s; }
            .n-core { fill: none; stroke: #6366f1; stroke-width: 2; stroke-dasharray: 4 3; animation: core-rotate 10s linear infinite; transform-origin: 200px 150px; }
            .n-core-inner { fill: #6366f1; animation: core-pulse 2s ease-in-out infinite; filter: drop-shadow(0 0 8px rgba(99,102,241,0.6)); }
            .orbit-ring { animation: orbit-spin 30s linear infinite; transform-origin: 200px 150px; }
            .orbit-ring-2 { animation: orbit-spin 22s linear infinite reverse; transform-origin: 200px 150px; }

            @keyframes viz-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            @keyframes dash-flow { from { stroke-dashoffset: 24; } to { stroke-dashoffset: 0; } }
            @keyframes node-breathe { 0%, 100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 1; transform: scale(1.3); } }
            @keyframes core-pulse { 0%, 100% { r: 10; opacity: 0.5; } 50% { r: 14; opacity: 1; } }
            @keyframes core-rotate { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
            @keyframes orbit-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

            /* PROPOSAL FORM */
            .proposal-card {
               background: #fff;
               border: 1px solid #e2e8f0;
               border-radius: 16px;
               padding: 35px;
               width: 100%;
               max-width: 380px;
               box-shadow: 0 10px 40px rgba(0,0,0,0.04);
            }
            .proposal-title {
               font-family: 'Playfair Display', serif;
               font-size: 1.6rem;
               font-weight: 700;
               color: #0f172a;
               margin-bottom: 8px;
            }
            .proposal-desc {
               font-size: 0.9rem;
               color: #94a3b8;
               margin-bottom: 30px;
               line-height: 1.5;
            }
            .proposal-form { display: flex; flex-direction: column; gap: 20px; }
            .proposal-field { display: flex; flex-direction: column; gap: 6px; }
            .proposal-field label {
               font-size: 0.75rem;
               font-weight: 600;
               color: #64748b;
               letter-spacing: 0.5px;
               text-transform: uppercase;
            }
            .proposal-field input,
            .proposal-field textarea {
               padding: 12px 16px;
               border: 1px solid #e2e8f0;
               border-radius: 10px;
               font-size: 0.95rem;
               font-family: 'Outfit', sans-serif;
               color: #0f172a;
               background: #f8fafc;
               outline: none;
               transition: border-color 0.2s ease;
            }
            .proposal-field input:focus,
            .proposal-field textarea:focus {
               border-color: #6366f1;
               background: #fff;
            }
            .proposal-field textarea {
               height: 100px;
               resize: none;
            }
            .proposal-submit {
               display: inline-flex;
               align-items: center;
               justify-content: center;
               gap: 10px;
               background: linear-gradient(135deg, #6366f1, #ec4899);
               color: #fff;
               border: none;
               padding: 14px;
               border-radius: 10px;
               font-size: 0.95rem;
               font-weight: 600;
               cursor: pointer;
               transition: all 0.3s ease;
               box-shadow: 0 6px 20px rgba(99,102,241,0.25);
               margin-top: 5px;
            }
            .proposal-submit:hover {
               box-shadow: 0 10px 30px rgba(99,102,241,0.35);
               transform: translateY(-2px);
            }
            .proposal-submit:disabled {
               opacity: 0.7;
               cursor: not-allowed;
               transform: none;
            }

            /* TABS */
            .proj-tabs {
               display: flex;
               gap: 10px;
               flex-wrap: wrap;
            }
            .proj-tab {
               padding: 10px 22px;
               border-radius: 50px;
               border: 1px solid #e2e8f0;
               background: #fff;
               font-size: 0.85rem;
               font-weight: 500;
               color: #64748b;
               cursor: pointer;
               transition: all 0.25s ease;
            }
            .proj-tab:hover {
               border-color: #6366f1;
               color: #6366f1;
            }
            .proj-tab-active {
               background: #0f172a;
               border-color: #0f172a;
               color: #fff !important;
            }

            /* GRID */
            .proj-grid {
               display: grid;
               grid-template-columns: repeat(3, 1fr);
               gap: 30px;
               padding: 70px 0 120px 0;
            }
            .proj-card-featured {
               grid-column: span 2;
            }
            .proj-card {
               cursor: pointer;
               border-radius: 16px;
               overflow: hidden;
               background: #fff;
               border: 1px solid #f1f5f9;
               box-shadow: 0 4px 20px rgba(0,0,0,0.03);
               display: flex;
               flex-direction: column;
               transition: box-shadow 0.35s ease, transform 0.35s ease;
            }
            .proj-card:hover {
               box-shadow: 0 20px 60px rgba(0,0,0,0.08);
               transform: translateY(-5px);
            }
            .proj-card-img-wrap {
               position: relative;
               height: 280px;
               overflow: hidden;
            }
            .proj-card-featured .proj-card-img-wrap {
               height: 360px;
            }
            .proj-card-img {
               width: 100%;
               height: 100%;
               object-fit: cover;
               transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .proj-card-img-overlay {
               position: absolute;
               inset: 0;
               background: linear-gradient(to top, rgba(15,23,42,0.2), transparent);
            }
            .proj-cat-badge {
               position: absolute;
               top: 18px;
               left: 18px;
               background: rgba(255,255,255,0.92);
               backdrop-filter: blur(8px);
               border: 1px solid rgba(0,0,0,0.06);
               color: #0f172a;
               font-size: 0.72rem;
               font-weight: 700;
               letter-spacing: 1.5px;
               padding: 6px 14px;
               border-radius: 30px;
            }
            .proj-card-body {
               padding: 30px;
               display: flex;
               flex-direction: column;
               flex: 1;
            }
            .proj-card-meta {
               font-size: 0.8rem;
               font-weight: 500;
               color: #94a3b8;
               display: flex;
               align-items: center;
               gap: 10px;
               margin-bottom: 12px;
            }
            .proj-dot {
               width: 4px; height: 4px;
               background: #cbd5e1;
               border-radius: 50%;
               display: inline-block;
            }
            .proj-card-title {
               font-family: 'Playfair Display', serif;
               font-size: 1.6rem;
               font-weight: 700;
               color: #0f172a;
               margin-bottom: 12px;
               line-height: 1.2;
            }
            .proj-card-desc {
               font-size: 0.95rem;
               line-height: 1.7;
               color: #64748b;
               flex: 1;
               margin-bottom: 24px;
               font-weight: 300;
            }
            .proj-card-footer {
               display: flex;
               justify-content: space-between;
               align-items: center;
               padding-top: 20px;
               border-top: 1px solid #f1f5f9;
            }
            .proj-metrics {
               display: flex;
               gap: 8px;
               flex-wrap: wrap;
            }
            .proj-metric {
               font-size: 0.75rem;
               font-weight: 600;
               color: #475569;
               background: #f8fafc;
               border: 1px solid #e2e8f0;
               padding: 4px 12px;
               border-radius: 20px;
            }
            .proj-card-cta {
               font-size: 0.8rem;
               font-weight: 600;
               color: #6366f1;
               display: flex;
               align-items: center;
               gap: 6px;
               white-space: nowrap;
               transition: gap 0.2s ease;
            }
            .proj-card:hover .proj-card-cta { gap: 10px; }

            /* CASE STUDY */
            .case-root { padding-top: 140px; }
            .case-nav {
               display: flex;
               justify-content: space-between;
               align-items: center;
               margin-bottom: 60px;
            }
            .case-back-btn {
               display: flex;
               align-items: center;
               gap: 10px;
               background: none;
               border: none;
               font-size: 0.9rem;
               font-weight: 600;
               color: #0f172a;
               cursor: pointer;
               transition: gap 0.2s ease, color 0.2s ease;
            }
            .case-back-btn:hover { color: #6366f1; gap: 14px; }
            .case-ref {
               font-size: 0.75rem;
               font-weight: 600;
               color: #94a3b8;
               letter-spacing: 2px;
               text-transform: uppercase;
            }

            .case-header { margin-bottom: 60px; }
            .case-category {
               font-size: 0.8rem;
               font-weight: 700;
               letter-spacing: 2px;
               color: #6366f1;
               text-transform: uppercase;
               margin-bottom: 20px;
            }
            .case-title {
               font-family: 'Playfair Display', serif;
               font-size: 4.5rem;
               font-weight: 700;
               color: #0f172a;
               line-height: 1.05;
               letter-spacing: -2px;
               margin-bottom: 40px;
            }
            .case-meta {
               display: flex;
               gap: 60px;
               padding: 30px 0;
               border-top: 1px solid #f1f5f9;
               border-bottom: 1px solid #f1f5f9;
            }
            .case-meta-label {
               display: block;
               font-size: 0.72rem;
               font-weight: 700;
               color: #94a3b8;
               letter-spacing: 2px;
               text-transform: uppercase;
               margin-bottom: 8px;
            }
            .case-meta-value {
               font-size: 1.05rem;
               font-weight: 600;
               color: #0f172a;
            }

            .case-hero-img {
               border-radius: 16px;
               overflow: hidden;
               height: 520px;
               margin: 60px 0;
            }
            .case-hero-img img {
               width: 100%;
               height: 100%;
               object-fit: cover;
            }

            .case-body-grid {
               display: grid;
               grid-template-columns: 1fr 320px;
               gap: 80px;
               margin-bottom: 100px;
            }
            .case-section { margin-bottom: 55px; }
            .case-section-label {
               font-size: 0.75rem;
               font-weight: 700;
               letter-spacing: 2px;
               text-transform: uppercase;
               color: #6366f1;
               margin-bottom: 20px;
               padding-left: 16px;
               border-left: 3px solid #6366f1;
            }
            .case-section-text {
               font-size: 1.2rem;
               line-height: 1.9;
               color: #475569;
               font-weight: 300;
            }

            .case-aside-box {
               background: #f8fafc;
               border: 1px solid #e2e8f0;
               border-radius: 12px;
               padding: 30px;
               margin-bottom: 25px;
            }
            .case-aside-title {
               font-size: 0.75rem;
               font-weight: 700;
               letter-spacing: 2px;
               text-transform: uppercase;
               color: #94a3b8;
               margin-bottom: 20px;
            }
            .case-pills { display: flex; flex-wrap: wrap; gap: 8px; }
            .case-pill {
               background: #fff;
               border: 1px solid #e2e8f0;
               padding: 7px 14px;
               border-radius: 8px;
               font-size: 0.85rem;
               font-weight: 500;
               color: #0f172a;
            }
            .case-results { list-style: none; padding: 0; margin: 0; }
            .case-results li {
               display: flex;
               align-items: center;
               gap: 12px;
               font-size: 1rem;
               font-weight: 600;
               color: #0f172a;
               padding: 12px 0;
               border-bottom: 1px solid #f1f5f9;
            }
            .case-result-dot {
               width: 8px; height: 8px; border-radius: 50%;
               background: #6366f1; flex-shrink: 0;
            }

            .case-cta-strip {
               display: flex;
               justify-content: space-between;
               align-items: center;
               background: #0f172a;
               border-radius: 20px;
               padding: 60px 70px;
               margin-bottom: 120px;
               color: #fff;
            }
            .case-cta-title {
               font-family: 'Playfair Display', serif;
               font-size: 2rem;
               font-weight: 700;
               margin-bottom: 10px;
            }
            .case-cta-desc {
               font-size: 1rem;
               color: #94a3b8;
               font-weight: 300;
            }
            .case-cta-btn {
               display: flex;
               align-items: center;
               gap: 12px;
               background: linear-gradient(135deg, #6366f1, #ec4899);
               color: #fff;
               border: none;
               padding: 16px 36px;
               border-radius: 50px;
               font-size: 0.95rem;
               font-weight: 600;
               cursor: pointer;
               white-space: nowrap;
               transition: all 0.3s ease;
               box-shadow: 0 10px 30px rgba(99,102,241,0.3);
            }
            .case-cta-btn:hover {
               transform: translateY(-3px);
               box-shadow: 0 15px 40px rgba(99,102,241,0.4);
            }

            /* Responsive */
            @media (max-width: 1024px) {
               .proj-hero-split { flex-direction: column; }
               .proj-hero-right { justify-content: flex-start; width: 100%; }
               .proposal-card { max-width: 100%; }
               .proj-grid { grid-template-columns: 1fr 1fr; }
               .proj-card-featured { grid-column: span 2; }
               .proj-hero-title { font-size: 4rem; }
               .case-title { font-size: 3rem; }
               .case-body-grid { grid-template-columns: 1fr; }
               .case-cta-strip { flex-direction: column; gap: 40px; text-align: center; }
            }
            @media (max-width: 768px) {
               .proj-grid { grid-template-columns: 1fr; }
               .proj-card-featured { grid-column: span 1; }
               .case-meta { flex-direction: column; gap: 25px; }
            }
         `}</style>
      </div>
   )
}
