import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const serviceList = [
   {
      id: 1,
      title: 'Mobile App Development',
      desc: 'Developing high-performance, native-feel applications for iOS and Android with seamless UX.',
      fullDesc: 'We specialize in mission-critical mobile engineering. From real-time data synchronization to custom native modules, our mobile strategy ensures your product dominates the App Store and Google Play with zero-lag performance.',
      stack: ['Swift', 'Kotlin', 'Flutter', 'Firebase', 'GraphQL'],
      process: ['User Journey Mapping', 'Hi-Fi Prototyping', 'Native Development', 'Performance Auditing']
   },
   {
      id: 2,
      title: 'Software Development',
      desc: 'Building robust, scalable desktop and system-level software tailored for business growth.',
      fullDesc: 'Our software engineering vertical focuses on building the backbone of enterprise operations. We develop distributed systems, microservices architectures, and desktop solutions that integrate seamlessly with your legacy assets.',
      stack: ['Rust', 'Go', 'C++', 'Docker', 'Kubernetes'],
      process: ['Architecture Design', 'Core Logic Dev', 'Module Integration', 'Stress Testing']
   },
   {
      id: 3,
      title: 'Web App Development',
      desc: 'Crafting responsive, secure, and fast web platforms using modern architectural standards.',
      fullDesc: 'Next-generation web applications require more than just a UI. We build high-frame, SSR-optimized, and secure web platforms that handle millions of users with absolute precision and sub-second load times.',
      stack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
      process: ['Component Architecture', 'API Engineering', 'UX Optimization', 'Security Hardening']
   },
   {
      id: 4,
      title: 'AI Models',
      desc: 'Engineering custom RAG-based LLMs and predictive models to automate complex decision-making.',
      fullDesc: 'We bridge the gap between research and production AI. Our team specializes in Retrieval-Augmented Generation (RAG), fine-tuning large language models, and building predictive pipelines that turn data into decision-making gold.',
      stack: ['PyTorch', 'TensorFlow', 'Pinecone', 'LangChain', 'OpenAI'],
      process: ['Data Ingestion', 'Model Tuning', 'Vector Embedding', 'Deployment & Monitoring']
   },
   {
      id: 5,
      title: 'Software Testing',
      desc: 'Rigorous QA and automated testing protocols ensuring your products are bug-free and efficient.',
      fullDesc: 'Quality is not an afterthought; it is our foundation. We implement end-to-end automated testing pipelines, security penetration testing, and load-balancing simulations to ensure your software never fails under pressure.',
      stack: ['Cypress', 'Playwright', 'Jest', 'Selenium', 'JMeter'],
      process: ['Test Case Planning', 'Automation Scripting', 'Regression Cycles', 'Final Audit']
   },
   {
      id: 6,
      title: 'AI Integration',
      desc: 'Seamlessly embedding intelligent AI agents into existing ecosystems for enhanced productivity.',
      fullDesc: 'Bring the power of AI to your existing tools. We integrate intelligent agents, neural pipelines, and automated reasoning engines into your current business ecosystem to eliminate manual overhead and boost ROI.',
      stack: ['API Hooks', 'Model Hosting', 'Logic Orchestration', 'Data Privacy Tools'],
      process: ['Ecosystem Audit', 'Pipeline Design', 'Secure Integration', 'Output Validation']
   }
]

export default function ServicesPage() {
   const primaryNavy = '#1a1a2e'
   const brandMagenta = '#ff7eb3'
   const purpleGradient = 'linear-gradient(135deg, #ff7eb3 0%, #3d1fc2 100%)'

   const [scrollY, setScrollY] = useState(0)
   const [selectedService, setSelectedService] = useState(null)

   useEffect(() => {
      window.scrollTo(0, 0)
      document.body.style.backgroundColor = '#ffffff'

      const handleScroll = () => {
         setScrollY(window.scrollY)
      }
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])

   const handleBack = () => {
      setSelectedService(null)
      window.scrollTo({ top: 400, behavior: 'instant' })
   }

   return (
      <div className="themed-services-page">
         <Navbar />

         <main style={{ paddingTop: '140px', paddingBottom: '160px', position: 'relative' }}>

            <div className="container" style={{ maxWidth: 1250, margin: '0 auto', padding: '0 25px', position: 'relative', zIndex: 10 }}>

               {/* 🏷️ MAIN SITE SYNCED HERO */}
               {!selectedService && (
                  <div className="dec-hero hero-grid animate-fade-up">
                     <div className="hero-info" style={{ transform: `translateY(${scrollY * 0.15}px)` }}>
                        <span className="dec-badge">STRATEGIC_CAPABILITIES_01</span>
                        <h1 className="hero-h1">
                           <span className="thin-txt">Building</span> Digital <br />
                           <span className="grad-bold">Success.</span>
                        </h1>
                        <p className="hero-p-txt">
                           Transforming technical complexity into mission-critical engineering solutions
                           built for industrial-scale production.
                        </p>
                     </div>

                     <div className="hero-box" style={{ transform: `translateY(${scrollY * -0.1}px)` }}>
                         <div className="neural-viz">
                           <svg viewBox="0 0 400 400" className="neural-svg">
                             <line x1="200" y1="200" x2="80" y2="80" className="n-line" />
                             <line x1="200" y1="200" x2="320" y2="80" className="n-line" />
                             <line x1="200" y1="200" x2="320" y2="320" className="n-line" />
                             <line x1="200" y1="200" x2="80" y2="320" className="n-line" />
                             <line x1="200" y1="200" x2="200" y2="50" className="n-line n-line-2" />
                             <line x1="200" y1="200" x2="350" y2="200" className="n-line n-line-2" />
                             <line x1="200" y1="200" x2="200" y2="350" className="n-line n-line-2" />
                             <line x1="200" y1="200" x2="50" y2="200" className="n-line n-line-2" />
                             <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(99,102,241,0.1)" strokeWidth="1" strokeDasharray="4 8" className="orbit-ring" />
                             <circle cx="200" cy="200" r="90" fill="none" stroke="rgba(236,72,153,0.08)" strokeWidth="1" strokeDasharray="3 6" className="orbit-ring-2" />
                             <circle cx="80" cy="80" r="8" className="n-node" />
                             <circle cx="320" cy="80" r="6" className="n-node n-node-2" />
                             <circle cx="320" cy="320" r="8" className="n-node" />
                             <circle cx="80" cy="320" r="6" className="n-node n-node-2" />
                             <circle cx="200" cy="50" r="5" className="n-node n-node-3" />
                             <circle cx="350" cy="200" r="5" className="n-node n-node-3" />
                             <circle cx="200" cy="350" r="5" className="n-node n-node-3" />
                             <circle cx="50" cy="200" r="5" className="n-node n-node-3" />
                             <circle cx="200" cy="200" r="22" fill="rgba(99,102,241,0.08)" />
                             <circle cx="200" cy="200" r="14" className="n-core" />
                             <circle cx="200" cy="200" r="7" className="n-core-inner" />
                           </svg>
                           <div className="neural-label">NEURAL ARCHITECTURE</div>
                         </div>
                      </div>
                  </div>
               )}

               {/* 📦 CLEAN PRODUCTIVE GRID (Sync with Main Animation) */}
               {!selectedService && (
                  <div className="mosaic-v4 animate-fade-up">
                     {serviceList.map((s, idx) => (
                        <div key={s.id} className={`m4-card m4-idx-${idx + 1}`}
                           onClick={() => {
                              setSelectedService(s);
                              window.scrollTo({ top: 0 });
                           }}>
                           <div className="m4-top">
                              <div className="m4-num">0{s.id}</div>
                              <h3 className="m4-title">{s.title}</h3>
                           </div>

                           <p className="m4-desc">{s.desc}</p>

                           <div className="m4-stack">
                              {s.stack.slice(0, 3).map((item, i) => (
                                 <span key={i} className="m4-tag">{item}</span>
                              ))}
                           </div>

                           <div className="m4-footer">
                              <div className="m4-btn">
                                 EXPLORE_VERTICAL
                                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="ico"><path d="M7 17L17 7M17 7H7M17 7V17"></path></svg>
                              </div>
                           </div>
                           <div className="glow-border" />
                        </div>
                     ))}
                  </div>
               )}

               {/* 💎 SERVICE DETAIL VIEW (Active State) */}
               {selectedService && (
                  <div className="service-detail-view animate-fade-up">
                     <div className="detail-header">
                        <button className="back-btn" onClick={handleBack}>
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"></path></svg>
                           BACK_TO_CATALOG
                        </button>
                        <div className="detail-meta">DEVN_LAB_0{selectedService.id} // PROFILE_ENGINE</div>
                     </div>

                     <div className="detail-content-grid" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
                        <div className="detail-left">
                           <h1 className="detail-h1">{selectedService.title}</h1>
                           <div className="detail-accent-line" />
                           <p className="detail-long-desc">{selectedService.fullDesc}</p>

                           <div className="detail-cta-box">
                              <button className="discuss-cta" onClick={() => window.location.href = '/contact'}>
                                 INITIATE_STRATEGY_DISCUSSON
                                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                              </button>
                           </div>
                        </div>

                        <div className="detail-right">
                           <div className="spec-section">
                              <h4 className="spec-h4">TECHNOLOGY_STACK</h4>
                              <div className="spec-grid">
                                 {selectedService.stack.map((t, i) => (
                                    <div key={i} className="spec-pill">{t}</div>
                                 ))}
                              </div>
                           </div>

                           <div className="spec-section" style={{ marginTop: '50px' }}>
                              <h4 className="spec-h4">EXECUTION_PROCESS</h4>
                              <div className="process-list">
                                 {selectedService.process.map((p, i) => (
                                    <div key={i} className="process-item">
                                       <span className="p-dot" />
                                       {p}
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               )}

            </div>
         </main>

         <Footer />

         <style>{`
            .themed-services-page { background: #fff; font-family: 'Inter', sans-serif; overflow-x: hidden; }

            /* Hero Layout */
            .dec-hero { display: grid; grid-template-columns: 1.15fr 1fr; gap: 20px; align-items: center; margin-bottom: 150px; }
            .dec-badge { font-size: 0.75rem; font-weight: 900; color: #1a1a2e; letter-spacing: 5px; margin-bottom: 35px; display: block; opacity: 0.55; }
            .hero-h1 { font-size: 4.2rem; font-weight: 800; line-height: 1.1; letter-spacing: -2px; color: ${primaryNavy}; margin-bottom: 40px; }
            .hero-h1 .thin-txt { font-weight: 100 !important; color: #a3a3bd; margin-right: 15px; }
            .grad-bold { 
               font-weight: 850 !important; 
               background: ${purpleGradient}; -webkit-background-clip: text; -webkit-text-fill-color: transparent; 
               letter-spacing: -2.5px;
            }
            .hero-p-txt { font-size: 1.15rem; line-height: 1.8; color: #5e5e77; max-width: 550px; font-weight: 350; }

            .hero-box { display: flex; justify-content: flex-start; perspective: 1500px; padding-left: 40px; }

            /* Neural Viz */
            .neural-viz {
              width: 420px; height: 420px; position: relative;
              display: flex; align-items: center; justify-content: center; flex-direction: column;
              background: radial-gradient(circle at center, rgba(99,102,241,0.04) 0%, transparent 70%);
              border-radius: 50%;
              animation: viz-float 6s ease-in-out infinite;
            }
            .neural-svg { width: 380px; height: 380px; overflow: visible; animation: viz-rotate 40s linear infinite; }
            .n-line { 
              stroke: rgba(99,102,241,0.18); stroke-width: 1.2; 
              stroke-dasharray: 8 4;
              animation: dash-flow 3s linear infinite;
            }
            .n-line-2 { 
              stroke: rgba(236,72,153,0.15); stroke-width: 0.8;
              stroke-dasharray: 6 6;
              animation: dash-flow 4s linear infinite reverse;
            }
            .n-node { 
              fill: #6366f1; 
              animation: node-breathe 3s ease-in-out infinite;
            }
            .n-node-2 { 
              fill: #ec4899; 
              animation: node-breathe 3s ease-in-out infinite 1s;
            }
            .n-node-3 { 
              fill: rgba(99,102,241,0.5); 
              animation: node-breathe 3s ease-in-out infinite 2s;
            }
            .n-core { 
              fill: none; stroke: #6366f1; stroke-width: 2; 
              stroke-dasharray: 4 3;
              animation: core-rotate 8s linear infinite; 
              transform-origin: 200px 200px; 
            }
            .n-core-inner { 
              fill: #6366f1; 
              animation: core-pulse 2s ease-in-out infinite;
              filter: drop-shadow(0 0 6px rgba(99,102,241,0.5));
            }
            .orbit-ring { 
              animation: orbit-spin 25s linear infinite; 
              transform-origin: 200px 200px; 
            }
            .orbit-ring-2 { 
              animation: orbit-spin 18s linear infinite reverse; 
              transform-origin: 200px 200px; 
            }
            .neural-label {
              font-size: 0.7rem; font-weight: 700; letter-spacing: 3px;
              color: rgba(99,102,241,0.35); margin-top: 12px; text-align: center;
              animation: label-fade 3s ease-in-out infinite;
            }

            @keyframes viz-float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-12px); }
            }
            @keyframes viz-rotate { 100% { transform: rotate(360deg); } }
            @keyframes dash-flow { 100% { stroke-dashoffset: -40; } }
            @keyframes node-breathe { 
              0%, 100% { opacity: 0.5; transform: scale(1); } 
              50% { opacity: 1; transform: scale(1.3); } 
            }
            @keyframes core-rotate { 100% { transform: rotate(360deg); } }
            @keyframes core-pulse { 
              0%, 100% { opacity: 0.5; } 
              50% { opacity: 1; } 
            }
            @keyframes orbit-spin { 100% { transform: rotate(360deg); } }
            @keyframes label-fade {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 0.7; }
            }

            /* Grid Layout */
            .mosaic-v4 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 35px; }
            .m4-card {
               background: #ffffff; border: 1px solid #f2f2f5; padding: 55px; border-radius: 4px;
               transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1); position: relative;
               display: flex; flex-direction: column; justify-content: space-between;
               box-shadow: 0 15px 45px rgba(0,0,0,0.03); min-height: 480px; cursor: pointer;
            }
            .m4-idx-2 { grid-row: span 1.15; }
            .m4-card:hover { transform: translateY(-10px); border-color: ${brandMagenta}; box-shadow: 0 40px 90px rgba(0,0,0,0.06); }
            .m4-title { font-size: 2.1rem; font-weight: 900; color: ${primaryNavy}; letter-spacing: -1px; margin-bottom: 25px; line-height: 1.15; }
            .m4-desc { font-size: 1.05rem; color: #5e5e77; margin-bottom: 30px; line-height: 1.8; }
            .m4-stack { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 40px; }
            .m4-tag { font-size: 0.65rem; font-weight: 900; color: #8c8c9e; padding: 5px 12px; background: #f8f8fb; border: 1px solid #f0f0f5; text-transform: uppercase; }
            .m4-btn { font-size: 0.75rem; font-weight: 950; color: ${brandMagenta}; letter-spacing: 2.5px; display: flex; align-items: center; gap: 10px; opacity: 0.4; transition: 0.3s; }
            .m4-card:hover .m4-btn { opacity: 1; transform: translateX(5px); }

            .service-detail-view { width: 100%; min-height: 70vh; position: relative; }
            .detail-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 80px; padding-bottom: 20px; border-bottom: 1px solid #eee; }
            .back-btn { background: none; border: none; font-size: 0.75rem; font-weight: 950; color: ${primaryNavy}; cursor: pointer; display: flex; align-items: center; gap: 15px; letter-spacing: 3px; }
            .back-btn:hover { color: ${brandMagenta}; }
            .detail-meta { font-family: 'Courier New', monospace; font-size: 0.7rem; color: #cbd5e1; font-weight: 850; letter-spacing: 2px; }

            .detail-content-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 100px; }
            .detail-h1 { font-size: 4.8rem; font-weight: 950; letter-spacing: -4px; color: ${primaryNavy}; margin-bottom: 30px; line-height: 1; }
            .detail-accent-line { width: 80px; height: 4px; background: ${purpleGradient}; border-radius: 4px; margin-bottom: 45px; }
            .detail-long-desc { font-size: 1.4rem; line-height: 1.7; color: #4b4b66; font-weight: 300; margin-bottom: 60px; }

            .discuss-cta { 
               display: flex; align-items: center; gap: 20px; padding: 22px 45px; border-radius: 4px; 
               background: ${primaryNavy}; color: #fff; font-weight: 950; font-size: 0.85rem; letter-spacing: 3px; border: none; cursor: pointer;
               box-shadow: 0 20px 50px rgba(26,26,46,0.15); transition: 0.3s;
            }
            .discuss-cta:hover { background: #000; transform: translateY(-5px); box-shadow: 0 30px 70px rgba(0,0,0,0.2); }

            .spec-h4 { font-size: 0.75rem; font-weight: 950; color: ${brandMagenta}; letter-spacing: 4px; margin-bottom: 30px; }
            .spec-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
            .spec-pill { padding: 18px; border: 1px solid #f0f0f5; background: #fafafa; font-size: 0.95rem; font-weight: 700; color: ${primaryNavy}; border-radius: 4px; }

            .process-list { display: flex; flex-direction: column; gap: 20px; }
            .process-item { display: flex; align-items: center; gap: 20px; font-size: 1.1rem; color: #4b4b66; font-weight: 350; }
            .p-dot { width: 8px; height: 8px; background: ${brandMagenta}; border-radius: 50%; box-shadow: 0 0 10px ${brandMagenta}; }

            .glow-border {
               position: absolute; top:0; left:0; width:100%; height:100%; border: 3px solid transparent; border-radius: 4px;
               background: ${purpleGradient} border-box; 
               -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
               -webkit-mask-composite: destination-out; mask-composite: exclude;
               opacity: 0; transition: 0.4s; pointer-events: none;
            }
            .m4-card:hover .glow-border { opacity: 1; }

            @media (max-width: 1024px) {
               .dec-hero { grid-template-columns: 1fr; text-align: center; }
               .hero-box { justify-content: center; padding-left: 0; }
               .neural-viz { width: 300px; height: 300px; }
               .neural-svg { width: 270px; height: 270px; }
               .hero-h1 { font-size: 3.2rem; }
               .detail-content-grid { grid-template-columns: 1fr; gap: 60px; }
               .detail-h1 { font-size: 3.2rem; }
               .mosaic-v4 { grid-template-columns: 1fr 1fr; }
            }
            @media (max-width: 768px) {
               .mosaic-v4 { grid-template-columns: 1fr; }
               .neural-viz { width: 250px; height: 250px; }
               .neural-svg { width: 220px; height: 220px; }
               .hero-h1 { font-size: 2.5rem; letter-spacing: -1px; }
               .hero-p-txt { font-size: 1rem; }
               .m4-card { padding: 35px; min-height: 380px; }
            }
         `}</style>
      </div>
   )
}
