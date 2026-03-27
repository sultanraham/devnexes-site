import React from 'react'

const resources = [
  { img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80', title: 'Building a Custom Next-Gen IDE' },
  { img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=80', title: 'Integrating a Custom AI Assistant' },
  { img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80', title: 'End-to-End Website Automation' },
  { img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80', title: 'Modern Cloud Architecture' },
  { img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80', title: 'Custom Mobile Apps & APIs' }
]

export default function FeaturedResources() {
  const primaryNavy = '#1a1a2e'
  const textGray = '#5e5e77'
  const gradientLine = 'linear-gradient(90deg, #ff7eb3 0%, #3d1fc2 100%)'

  return (
    <section id="featured-resources" className="w-full bg-[#fcfaff] py-[120px] border-t border-[#f0f0f5]">
      
      {/* 🏷️ SECTION HEADER */}
      <div className="text-center w-full" style={{ marginBottom: '130px' }}>
        <div style={{ width: 60, height: 4, background: gradientLine, margin: '0 auto 25px auto', borderRadius: 2 }} />
        <h4 style={{ fontSize: '1.8rem', fontWeight: 300, color: textGray, marginBottom: '0.8rem' }}>
          Featured
        </h4>
        <h2 style={{ fontSize: '3.2rem', fontWeight: 800, color: primaryNavy }}>
          Resources
        </h2>
      </div>

      {/* 📦 RESOURCES (Strict 5-Column Grid for Desktop) */}
      <div className="w-full px-4 lg:px-8 xl:px-12 flex justify-center">
        {/* lg:grid-cols-5 forces exactly 5 columns side-by-side on all laptop/desktop screens */}
        <div className="w-full max-w-[1600px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8">
          
          {resources.map((res, i) => (
            <div key={i} className="group flex flex-col gap-5 cursor-pointer w-full">
              
              {/* Image Frame with Rounded Corners */}
              <div 
                className="w-full overflow-hidden rounded-[14px] bg-[#1a1a2e] shadow-[0_12px_25px_rgba(0,0,0,0.06)] h-[170px] xl:h-[190px]"
              >
                <img 
                  src={res.img} 
                  alt={res.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col grow px-1">
                <h4 
                  className="text-[1.05rem] font-semibold text-[#1a1a2e] leading-[1.4] mb-4 grow break-words"
                >
                  {res.title}
                </h4>
                
                {/* Read More Link (Right Aligned) */}
                <div className="flex justify-end mt-auto">
                  <span 
                    className="flex items-center gap-2 font-bold text-[0.95rem] text-[#7f289d] transition-colors duration-300 group-hover:text-[#b03673]"
                  >
                    Read More 
                    <span className="text-[1.2rem] font-bold">→</span>
                  </span>
                </div>
              </div>
              
            </div>
          ))}
          
        </div>
      </div>

    </section>
  )
}
