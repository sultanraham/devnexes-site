import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const blogData = [
   {
      id: 1,
      tag: 'AI_LABS_ENGINEERING',
      title: 'Neural Orchestration: The Rise of Agentic Corporate Intelligence',
      desc: 'Architecting RAG-powered agents for mission-critical automation in 2026 enterprise ecosystems.',
      date: 'MAR 24, 2026',
      read: '25 MIN',
      author: 'Dr. Aris Thorne',
      // High-End Themed Visuals (Purple/Magenta/Navy)
      img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop',
      long: `The transition from static AI models to active, agentic systems marks the next phase of enterprise evolution. At Devnexes, we are engineering "Neural Orchestration" layers that allow AI agents to act within legacy ecosystems with absolute precision.\n\n### The Core Challenge: Beyond Static Responses\nMost current AI implementations are restricted to simple chat interfaces. While useful for basic querying, they lack the "Agency" required to perform complex corporate tasks. The primary barrier has been the disconnect between low-latency inference and high-integrity data access. When an AI generates a response, it is often a statistical probability rather than a logical certainty. For a B2B enterprise handling financial or industrial data, "statistical probability" is not enough.\n\n### The Logical Engine: RAG v4.0\nRetrieval-Augmented Generation (RAG) is the structural spine of modern business logic. Unlike basic LLM implementations that suffer from hallucinations, our RAG architecture utilizes high-density vector embeddings stored in specialized clusters. This allow the AI to cross-reference every incoming prompt with a verified "Digital Knowledge Base" in real-time.`,
      bullets: ['Multi-Agent Orchestration v4', 'Real-Time Vector Synchronization', 'Verifiable Logical Output Guard'],
      tech: ['PineconeDB', 'LangChain', 'OpenAI Enterprise', 'Py-FastAPI'],
      outcome: 'Reduction in manual logic overhead by 85% through autonomous agentic verification.'
   },
   {
      id: 2,
      tag: 'CORE_ENGINEERING',
      title: 'Rust vs Go: Solving Memory Safety in Industrial Cores',
      desc: 'Memory safety vs concurrency in high-load industrial cores and fintech infrastructures.',
      date: 'MAR 20, 2026',
      read: '30 MIN',
      author: 'Erik Volkov',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
      long: `When building systems that handle 10M+ concurrent transactions, language choice is a matter of survival. At Devnexes, we have transitioned our core mission-critical assets to a dual-core architecture using Rust and Golang.\n\n### The Memory Safety Crisis\nRust’s ownership model eliminates these risks at compile-time by enforcing strict borrow-check rules. This means we catch memory-related bugs during development, not in production. By moving the "Borrow Checker" to the center of our CI/CD pipeline.`,
      bullets: ['Zero-Cost Abstractions', 'Thread-Safe Memory Management', 'High-Throughput Parallelism'],
      tech: ['Rust 1.76', 'Golang 1.22', 'gRPC-Net', 'PostgreSQL'],
      outcome: 'A 60% reduction in server-side overhead and zero-downtime memory management.'
   },
   {
      id: 3,
      tag: 'UX_PRECISION',
      title: 'The Mechanical Beauty of Functional UX Design',
      desc: 'Why industrial-grade tools deserve high-fidelity elite design systems.',
      date: 'MAR 15, 2026',
      read: '15 MIN',
      author: 'Sasha Grey',
      img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop',
      long: `Enterprise tools should empower, not overwhelm. Devnexes Design System (DDS) focuses on high-contrast clarity and mechanical grid systems for elite performance.\n\n### The Industrial Aesthetic: Form Follows Logic\nWe prioritize physical visual depth and executive readability over consumer-grade soft aesthetics. An interface for an engineer or an executive should feel like a cockpit: all the necessary levers within reach, presented with aesthetic authority.`,
      bullets: ['High-Contrast Information Density', 'Mechanical Grid Consistency (4px)', 'Executive Readability Focus'],
      tech: ['Figma Engineering', 'React 18', 'Tailwind/SCSS'],
      outcome: 'Improved operator decision speed by 35% through reduced cognitive design load.'
   },
   {
      id: 4,
      tag: 'SCALABILITY_LABS',
      title: 'Scaling to 10M: Distributed Kubernetes Clusters',
      desc: 'Architecting for hyper-growth with distributed global Kubernetes clusters.',
      date: 'MAR 10, 2026',
      read: '35 MIN',
      author: 'Marcus Chen',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
      long: `Scaling to 10M concurrent users requires a distributed spine. We implement multi-region Kubernetes clusters with automated failover protocols that guarantee 99.999% uptime.\n\n### The Global Spine: Multi-Regional Clusters\nEach region is an isolated "Cell" that can operate independently. If North America goes down, the European and Asian cells can absorb the traffic load within 3 seconds using our proprietary "Traffic Shift" protocol.`,
      bullets: ['Multi-Region Failover Architecture', 'Density-Optimized Node Scaling', 'Zero-Downtime Data Replication'],
      tech: ['Kubernetes (EKS)', 'Terraform', 'Vault', 'ArgoCD'],
      outcome: 'Achieved 99.999% uptime for global e-commerce entity during peak 10M traffic bursts.'
   },
   {
      id: 5,
      tag: 'MOBILE_ENGINEERING',
      title: 'Next-Gen Mobile: Flutter vs Native Precision',
      desc: 'Determining the optimal stack for high-performance cross-platform applications.',
      date: 'MAR 05, 2026',
      read: '20 MIN',
      author: 'Leo Valdez',
      img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop',
      long: `Mobile ubiquity demand absolute performance. Our Hybrid-Core approach shares business logic via a common C++/Rust library across iOS and Android.`,
      bullets: ['Hybrid-Core Logic Architecture', 'Hardware-Accelerated Platform Channels', '120Hz UI Stability Parity'],
      tech: ['Swift 6.0', 'Kotlin Multiplatform', 'Flutter', 'FFI-Bridge'],
      outcome: 'A 25% faster time-to-market while maintaining native-level hardware integration performance.'
   },
   {
      id: 6,
      tag: 'SECURITY_OPS',
      title: 'Zero-Touch Security: The Devnexes Logic Guard',
      desc: 'Automating security audits and penetration testing within CI/CD pipelines.',
      date: 'MAR 02, 2026',
      read: '30 MIN',
      author: 'Celia Vance',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
      long: `Security is not a final step; it is a continuous logical guard. At Devnexes, we believe that security should be invisible, automated, and impossible to bypass.`,
      bullets: ['Neural Threat Modeling', 'Automated Infrastructure Hardening', 'Continuous Logical Validation'],
      tech: ['Snyk Security', 'Aqua Cloud', 'Sentinel v2', 'GitHub Actions'],
      outcome: 'Identified and mitigated 95% of critical logical vulnerabilities before production.'
   }
]

// 🛡️ THEMED SMART IMAGE (Magenta/Purple Fallback)
const ThemedImage = ({ src, alt, className }) => {
   const [imgSrc, setImgSrc] = useState(src)
   const [status, setStatus] = useState('loading')

   return (
      <div className={className} style={{ background: '#f8f8fb', position: 'relative', overflow: 'hidden' }}>
         <img 
            src={imgSrc} 
            alt={alt} 
            onLoad={() => setStatus('loaded')}
            onError={() => {
               setStatus('error')
               // Solid themed fallback if network fails
               setImgSrc(`https://via.placeholder.com/1200x800/1a1a2e/ff7eb3?text=DEVNEXES+CORPORATE+INSIGHT`)
            }} 
            style={{ 
               width: '100%', height: '100%', objectFit: 'cover', 
               filter: 'contrast(1.1) brightness(0.9) saturate(0.8)', // Professional cinematic filter
               transition: '0.6s'
            }}
            loading="lazy"
         />
         {/* 🌈 SUBTLE BRAND TINT OVERLAY */}
         <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 126, 179, 0.05)', pointerEvents: 'none' }} />
         {status === 'loading' && <div className="img-shimmer" />}
      </div>
   )
}

export default function BlogPage() {
   const [selected, setSelected] = useState(null)
   const [filter, setFilter] = useState('ALL_REPORTS')

   useEffect(() => {
      window.scrollTo(0, 0)
      document.body.style.backgroundColor = '#ffffff'
   }, [selected])

   const handleSelect = (post) => {
      setSelected(post)
      window.scrollTo({ top: 0, behavior: 'instant' })
   }

   const filteredData = filter === 'ALL_REPORTS' ? blogData : blogData.filter(b => b.tag === filter)

   return (
      <div className={`executive-suite ${selected ? 'monograph-mode' : 'catalog-mode'}`}>
         <Navbar />

         <main style={{ background: '#fff' }}>
            
            {/* 💎 EXECUTIVE HERO */}
            {!selected && (
               <section className="exec-hero animate-fade-in">
                  <div className="container" style={{ maxWidth: 1250, margin: '0 auto', padding: '140px 25px 60px 25px', textAlign: 'center' }}>
                     <div className="hero-head">
                        <span className="h-pre animate-fade-down">INTELLIGENCE_REPORTS // DEVNEXES_LABS</span>
                        <h1 className="h-title animate-reveal"><span className="eng-word">Engineering</span> <span className="mag-txt">Insights.</span></h1>
                        <p className="h-desc animate-fade-up">Deep-dives into neural automation, memory-safe architectures, and global-scale orchestration.</p>
                     </div>

                     <nav className="pill-filters animate-fade-up">
                        {['ALL_REPORTS', 'AI_LABS_ENGINEERING', 'CORE_ENGINEERING', 'UX_PRECISION', 'SCALABILITY_LABS', 'SECURITY_OPS'].map(item => (
                           <button 
                              key={item} 
                              onClick={() => setFilter(item)} 
                              className={`pill-tab ${filter === item ? 'active' : ''}`}
                           >
                              {item.replace(/_/g, ' ')}
                           </button>
                        ))}
                     </nav>
                  </div>
               </section>
            )}

            <div className="container" style={{ maxWidth: 1250, margin: '0 auto', padding: '0 25px' }}>
               
               {/* 🧱 THEMED EXECUTIVE GRID */}
               {!selected && (
                  <div className="exec-grid animate-fade-up">
                     {filteredData.map((post) => (
                        <div key={post.id} className="exec-card" onClick={() => handleSelect(post)}>
                           <ThemedImage src={post.img} alt={post.title} className="ec-media" />
                           <div className="ec-body">
                              <span className="ec-tag">
                                 {post.tag.includes('ENGINEERING')
                                   ? <>{post.tag.replace('ENGINEERING', '')} <span className="eng-word">ENGINEERING</span></>
                                   : post.tag
                                 }
                              </span>
                              <h3 className="ec-title">{post.title}</h3>
                              <p className="ec-desc">{post.desc}</p>
                              <div className="ec-foot">
                                 <span className="author">ARCHIVED BY <span className="mag-txt">{post.author}</span></span>
                                 <span className="dot" />
                                 <span className="read">{post.read} READ</span>
                              </div>
                           </div>
                           <div className="ec-hover-line" />
                        </div>
                     ))}
                  </div>
               )}

               {/* 📄 THEMED MONOGRAPH READER */}
               {selected && (
                  <div className="monograph-reader animate-fade-in">
                     <div className="reader-nav" style={{ marginTop: '140px' }}>
                        <button onClick={() => setSelected(null)} className="back-link">
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"></path></svg>
                           BACK_TO_ARCHIVES
                        </button>
                        <div className="archive-id"><span className="mag-txt">DEVN_REPORT_CODE</span>_0{selected.id}</div>
                     </div>

                     <article className="rd-document">
                        <header className="rd-head">
                           <span className="rd-tag">{selected.tag}</span>
                           <h1 className="rd-title">{selected.title}</h1>
                           <div className="rd-meta">
                              <div className="rd-item"><span>PRINCIPAL_AUTHOR</span>{selected.author}</div>
                              <div className="rd-item"><span>ARCHIVE_DATE</span>{selected.date}</div>
                              <div className="rd-item"><span>READER_DEPTH</span>{selected.read}</div>
                           </div>
                        </header>

                        <div className="rd-hero-visual">
                           <ThemedImage src={selected.img} alt="Hero" className="rd-img-fill" />
                        </div>

                        <div className="rd-content">
                           <div className="rd-text">
                              {selected.long?.split('\n\n').map((chunk, i) => (
                                 chunk.startsWith('###') ? 
                                 <h3 key={i} className="rs-h">{chunk.replace('###', '')}</h3> : 
                                 <p key={i} className={i === 0 ? "rs-lead" : "rs-p"}>
                                    {/* Subtly highlighting key tech phrases in navy-bold */}
                                    {chunk.replace(/(AI agents|RAG architecture|mission-critical|legacy ecosystems)/g, '<strong>$1</strong>')}
                                 </p>
                              ))}
                           </div>

                           <div className="rd-specs">
                              <div className="spec-box animate-fade-left">
                                 <h4 className="spec-h">TECHNICAL_SPEC</h4>
                                 <ul>{selected.bullets?.map((b, i) => <li key={i}>{b}</li>)}</ul>
                              </div>
                              <div className="spec-box animate-fade-right">
                                 <h4 className="spec-h">LOGIC_STACK</h4>
                                 <div className="pill-row">{selected.tech?.map((t, i) => <span key={i} className="s-pill">{t}</span>)}</div>
                              </div>
                           </div>

                           <div className="rd-cta">
                              <div className="cta-left">
                                 <h3>Architectural Strategic Session?</h3>
                                 <p>Facilitate a deep-dive regarding these standards with our executive leadership.</p>
                              </div>
                              <button className="cta-btn" onClick={() => window.location.href='/contact'}>INITIATE_STRATEGY_PROTOCOL</button>
                           </div>
                        </div>
                     </article>
                  </div>
               )}

            </div>
         </main>

         <Footer />

         <style>{`
            .executive-suite { background: #fff; font-family: 'Inter', sans-serif; min-height: 100vh; color: #1a1a2e; }
            .mag-txt { color: #ff7eb3; }

            /* 💎 EXECUTIVE HERO */
            .exec-hero { padding-bottom: 60px; }
            .h-pre { font-size: 0.7rem; font-weight: 950; color: #94a3b8; letter-spacing: 4px; display: block; margin-bottom: 25px; }
            .h-title { font-size: 5.2rem; font-weight: 800; color: #1a1a2e; letter-spacing: -4px; line-height: 1; margin-bottom: 30px; }
            .h-desc { font-size: 1.4rem; color: #64748b; margin: 0 auto 50px auto; line-height: 1.6; font-weight: 300; max-width: 650px; }

            .pill-filters { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
            .pill-tab { background: #fff; border: 1.5px solid #f2f2f5; padding: 12px 25px; border-radius: 50px; font-size: 0.65rem; font-weight: 950; color: #94a3b8; cursor: pointer; letter-spacing: 2px; transition: 0.3s; }
            .pill-tab:hover { border-color: #ff7eb3; color: #ff7eb3; }
            .pill-tab.active { background: #1a1a2e; color: #fff; border-color: #1a1a2e; box-shadow: 0 10px 20px rgba(26,26,46,0.1); }

            /* 🧱 THEMED EXECUTIVE GRID */
            .exec-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; padding-bottom: 120px; }
            .exec-card { cursor: pointer; border-radius: 6px; overflow: hidden; background: #fff; border: 1.5px solid #f2f2f5; transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); position: relative; }
            .exec-card:hover { transform: translateY(-10px); box-shadow: 0 40px 100px rgba(0,0,0,0.05); border-color: #ff7eb3; }

            .ec-media { height: 260px; }
            .rd-img-fill { height: 100%; width: 100%; }

            .ec-body { padding: 35px; }
            .ec-tag { font-size: 0.65rem; font-weight: 950; color: #ff7eb3; letter-spacing: 3px; display: block; margin-bottom: 20px; }
            .eng-word {
              color: #0f172a;
              font-style: normal;
              font-weight: 300;
              letter-spacing: -1px;
              text-shadow: 2px 2px 8px rgba(99, 102, 241, 0.25), 0 0 20px rgba(236, 72, 153, 0.12);
            }
            .ec-title { font-size: 1.7rem; font-weight: 900; color: #1a1a2e; line-height: 1.25; letter-spacing: -1.2px; margin-bottom: 20px; transition: 0.3s; }
            .exec-card:hover .ec-title { color: #ff7eb3; }
            .ec-desc { font-size: 1.05rem; color: #64748b; line-height: 1.7; margin-bottom: 35px; line-height: 1.6; }
            
            .ec-foot { display: flex; align-items: center; gap: 15px; border-top: 1.5px solid #f8f8fa; padding-top: 25px; font-size: 0.6rem; font-weight: 950; color: #cbd5e1; letter-spacing: 1.5px; }
            .ec-foot .dot { width: 5px; height: 5px; background: #ff7eb3; border-radius: 50%; opacity: 0.5; }

            .ec-hover-line { position: absolute; bottom: 0; left: 0; width: 100%; height: 4px; background: #ff7eb3; transform: scaleX(0); transition: 0.4s ease; transform-origin: left; }
            .exec-card:hover .ec-hover-line { transform: scaleX(1); }

            /* 📄 MONOGRAPH READER */
            .monograph-reader { animation: fadeIn 0.8s ease; }
            .rd-document { max-width: 900px; margin: 0 auto; padding-top: 40px; }
            .back-link { background: none; border: none; font-size: 0.75rem; font-weight: 950; color: #1a1a2e; cursor: pointer; display: flex; align-items: center; gap: 15px; letter-spacing: 3px; transition: 0.3s; }
            .back-link:hover { color: #ff7eb3; transform: translateX(-5px); }
            .archive-id { font-family: monospace; font-size: 0.7rem; color: #cbd5e1; font-weight: 900; }

            .rd-tag { font-size: 0.8rem; font-weight: 950; color: #ff7eb3; letter-spacing: 6px; display: block; margin-bottom: 30px; }
            .rd-title { font-size: 4.5rem; font-weight: 950; color: #1a1a2e; line-height: 1; letter-spacing: -4px; margin-bottom: 60px; }
            .rd-meta { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; padding: 40px 0; border-top: 1.5px solid #f2f2f5; border-bottom: 1.5px solid #f2f2f5; margin-bottom: 80px; }
            .rd-item span { font-size: 0.6rem; font-weight: 950; color: #94a3b8; letter-spacing: 3px; display: block; margin-bottom: 12px; }
            .rd-item { font-size: 1rem; font-weight: 800; color: #1a1a2e; letter-spacing: 1px; }

            .rd-hero-visual { border-radius: 6px; overflow: hidden; height: 500px; background: #f8f8fb; margin-bottom: 80px; }

            .rs-lead { font-size: 1.95rem; font-weight: 300; line-height: 1.6; color: #1a1a2e; margin-bottom: 60px; padding-bottom: 60px; border-bottom: 2px solid #f8f8fa; }
            .rs-h { font-size: 2.3rem; font-weight: 950; color: #1a1a2e; margin: 80px 0 40px 0; letter-spacing: -2px; }
            .rs-p { font-size: 1.35rem; line-height: 1.9; color: #5e5e77; margin-bottom: 45px; }
            .rs-p strong { font-weight: 800; color: #1a1a2e; }

            .rd-specs { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; padding: 70px; background: #fafafb; border-radius: 6px; margin: 100px 0; }
            .spec-h { font-size: 0.75rem; font-weight: 950; color: #ff7eb3; letter-spacing: 5px; margin-bottom: 40px; }
            .spec-box ul { list-style: none; padding: 0; }
            .spec-box li { font-size: 1.15rem; font-weight: 800; color: #1a1a2e; margin-bottom: 25px; display: flex; align-items: center; gap: 20px; }
            .spec-box li::before { content: ""; width: 14px; height: 2px; background: #ff7eb3; }

            .pill-row { display: flex; flex-wrap: wrap; gap: 12px; }
            .s-pill { padding: 12px 20px; background: #fff; border: 1.5px solid #e2e8f0; font-size: 0.85rem; font-weight: 800; color: #1a1a2e; border-radius: 4px; transition: 0.3s; }
            .s-pill:hover { border-color: #ff7eb3; color: #ff7eb3; }

            .rd-cta { display: flex; justify-content: space-between; align-items: center; padding: 85px; background: #1a1a2e; border-radius: 6px; color: #fff; margin-bottom: 120px; border: 1px solid rgba(255,126,179,0.15); box-shadow: 0 40px 100px rgba(0,0,0,0.2); }
            .cta-left h3 { font-size: 2.5rem; font-weight: 950; margin-bottom: 15px; letter-spacing: -1.5px; }
            .cta-left p { font-size: 1.15rem; color: #94a3b8; }
            .cta-btn { background: #ff7eb3; border: none; padding: 22px 50px; border-radius: 4px; color: #fff; font-weight: 950; font-size: 0.85rem; cursor: pointer; transition: 0.4s; }
            .cta-btn:hover { box-shadow: 0 0 40px rgba(255,126,179,0.5); transform: translateY(-5px); }

            .img-shimmer { position: absolute; inset:0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent); animation: shimmer 2s infinite; }
            @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }

            @media (max-width: 1024px) {
               .h-title { font-size: clamp(2.5rem, 10vw, 5.2rem); }
               .exec-grid { grid-template-columns: 1fr 1fr; }
               .rd-title { font-size: clamp(2.5rem, 10vw, 4.5rem); }
               .rd-meta { grid-template-columns: repeat(2, 1fr); }
               .rd-cta { flex-direction: column; text-align: center; gap: 50px; padding: 60px 40px; }
            }
            @media (max-width: 768px) {
               .exec-grid { grid-template-columns: 1fr; }
               .rd-meta { grid-template-columns: 1fr; gap: 20px; }
               .rd-specs { grid-template-columns: 1fr; padding: 30px; }
               .rd-hero-visual { height: 300px; }
            }

            .animate-reveal { animation: reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1); }
            @keyframes reveal { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
            .animate-fade-down { animation: fadeDown 1s ease-out; }
            @keyframes fadeDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
            .animate-fade-up { animation: fadeUp 1s ease-out; }
            @keyframes fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
            .animate-fade-in { animation: fadeIn 1.2s ease-out; }
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
         `}</style>
      </div>
   )
}
