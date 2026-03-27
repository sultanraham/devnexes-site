import { useState, useEffect } from 'react'

const services = [
   {
      id: 1,
      icon: (
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
         </svg>
      ),
      iconBg: '#f0f7ff',
      iconBorder: '#dbeafe',
      title: 'Mobile App Development',
      desc: 'A Website is an extension of yourself and we can help you to express it properly.'
   },
   {
      id: 2,
      icon: (
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
         </svg>
      ),
      iconBg: '#fff1f2',
      iconBorder: '#ffe4e6',
      title: 'Full Stack Development',
      desc: 'Crafting responsive and high-performance websites tailored to your unique business needs.'
   },
   {
      id: 3,
      icon: (
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
         </svg>
      ),
      iconBg: '#f5f3ff',
      iconBorder: '#ede9fe',
      title: 'Web Design & Development',
      desc: 'A Website is an extension of yourself and we can help you to express it properly.'
   },
   {
      id: 4,
      icon: (
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="10" x2="21" y2="10"></line>
            <line x1="9" y1="22" x2="9" y2="10"></line>
            <line x1="15" y1="22" x2="15" y2="10"></line>
         </svg>
      ),
      iconBg: '#ecfdf5',
      iconBorder: '#d1fae5',
      title: 'Software Testing Service',
      desc: 'Ensuring your digital products are bug-free and perform optimally across all platforms.'
   },
   {
      id: 5,
      icon: (
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
            <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
            <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
         </svg>
      ),
      iconBg: '#fff7ed',
      iconBorder: '#ffedd5',
      title: 'AI Integration',
      desc: 'Custom AI solutions to automate your business processes and enhance decision-making.'
   }
]

export default function Services() {
   const [activeIndex, setActiveIndex] = useState(2)
   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)
   const [isPaused, setIsPaused] = useState(false)

   useEffect(() => {
      if (isPaused) return;
      const timer = setInterval(() => {
         setActiveIndex((prev) => (prev + 1) % services.length)
      }, 2000)
      return () => clearInterval(timer)
   }, [isPaused])

   useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 1024)
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
   }, [])

   const primaryNavy = '#1a1a2e'
   const magentaTheme = '#b03673'
   const magentaGradient = 'linear-gradient(135deg, #ff7eb3 0%, #3d1fc2 100%)'

   const cardSize = isMobile ? 280 : 460
   const gap = isMobile ? 35 : 45

   const getTransform = () => {
      const stride = cardSize + gap
      const xOffset = `calc(50vw - ${(activeIndex * stride) + (cardSize / 2)}px)`
      return `translateX(${xOffset})`
   }

   return (
      <div style={{ background: '#ffffff', overflow: 'visible', position: 'relative' }}>

         {/* 🔮 TOP BALL (On the WHITE SIDE Hero - Direction UP) */}
         {!isMobile && (
            <div style={{
               position: 'absolute', top: -50, left: '35%', transform: 'translateX(-50%)',
               width: 100, height: 100, borderRadius: '50%', background: magentaGradient,
               zIndex: 1,
               clipPath: 'inset(0px 0px 50% 0px)'
            }} />
         )}

         {/* 🔮 BOTTOM BALL (On the WHITE SIDE Trust - Direction DOWN) */}
         {!isMobile && (
            <div style={{
               position: 'absolute', bottom: -50, left: '6%', transform: 'translateX(-50%)',
               width: 100, height: 100, borderRadius: '50%', background: magentaGradient,
               zIndex: 1,
               clipPath: 'inset(50% 0px 0px 0px)' // Shows only BOTTOM half pointing into White Trust section
            }} />
         )}

         <section
            id="services"
            style={{
               background: '#fcfaff',
               padding: isMobile ? '70px 0' : '85px 0 110px 0',
               overflow: 'hidden',
               position: 'relative',
               borderTop: '1.2px solid #ececf4',
               borderBottom: '1.2px solid #ececf4'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
         >

            <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '5.5rem', position: 'relative', zIndex: 10 }}>
               <h2 style={{ fontSize: isMobile ? '2.2rem' : '3.2rem', fontWeight: 800, color: primaryNavy }}>
                  Services we offer
               </h2>
            </div>

            <div style={{ width: '100vw', position: 'relative' }}>
               <div style={{
                  display: 'flex',
                  transition: 'transform 0.55s cubic-bezier(0.23, 1, 0.32, 1)',
                  transform: getTransform(),
                  width: 'max-content',
                  alignItems: 'center'
               }}>
                  {services.map((svc, idx) => {
                     const isActive = idx === activeIndex
                     return (
                        <div key={svc.id}
                           onClick={() => setActiveIndex(idx)}
                           style={{
                              width: cardSize, height: cardSize,
                              background: '#ffffff',
                              marginRight: `${gap}px`,
                              borderRadius: 16, padding: isMobile ? '1.8rem' : '55px',
                              display: 'flex', flexDirection: 'column',
                              justifyContent: 'center', alignItems: 'flex-start',
                              boxShadow: isActive ? '0 50px 100px rgba(0,0,0,0.06)' : '0 10px 40px rgba(0,0,0,0.02)',
                              border: '1.5px solid',
                              borderColor: isActive ? 'transparent' : '#f4f4fa',
                              position: 'relative',
                              transform: isActive ? 'translateY(65px)' : 'none',
                              transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
                              cursor: 'pointer',
                              zIndex: isActive ? 10 : 1
                           }}>

                           {isActive && (
                              <div style={{
                                 position: 'absolute', top: -1.8, left: -1.8, right: -1.8, bottom: -1.8,
                                 borderRadius: 16, padding: 1.8,
                                 background: magentaGradient,
                                 WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                 WebkitMaskComposite: 'xor', maskComposite: 'exclude',
                                 pointerEvents: 'none'
                              }} />
                           )}

                           <div style={{
                              width: 62, height: 62, borderRadius: '50%',
                              background: svc.iconBg,
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              marginBottom: '2.5rem',
                              border: `1.5px solid ${svc.iconBorder}`,
                           }}>
                              {svc.icon}
                           </div>

                           <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.45rem', fontWeight: 800, color: isActive ? magentaTheme : primaryNavy, marginBottom: '1rem', lineHeight: 1.3 }}>
                              {svc.title}
                           </h3>

                           <p style={{ fontSize: '0.96rem', color: '#5e5e77', lineHeight: 1.8, opacity: 0.9 }}>
                              {svc.desc}
                           </p>
                        </div>
                     )
                  })}
               </div>
            </div>

            <div style={{ maxWidth: 1200, margin: '14rem auto 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '0 2rem' }}>
               <div style={{ display: 'flex', gap: '1.2rem' }}>
                  {services.map((_, i) => (
                     <div key={i} onClick={() => setActiveIndex(i)} style={{ width: 12, height: 12, borderRadius: '50%', background: i === activeIndex ? magentaTheme : '#ddd', cursor: 'pointer', transition: '0.3s' }} />
                  ))}
               </div>
               {!isMobile && (
                  <div style={{ position: 'absolute', right: '10%', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                     <span style={{ fontSize: '1.2rem', color: primaryNavy, fontWeight: 800 }}>0{activeIndex + 1}</span>
                     <div style={{ width: 150, height: 2, background: 'rgba(0,0,0,0.06)' }}>
                        <div style={{ height: '100%', width: `${((activeIndex + 1) / services.length) * 100}%`, background: magentaTheme, transition: 'width 0.5s' }} />
                     </div>
                     <span style={{ fontSize: '1.2rem', color: primaryNavy, fontWeight: 800 }}>0{services.length}</span>
                  </div>
               )}
            </div>

         </section>
      </div>
   )
}
