import React from 'react'

const approaches = [
  {
    title: 'UX Driven Engineering',
    desc: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    icon: '🚀',
    iconBg: '#212529'
  },
  {
    title: 'Developing Shared Understanding',
    desc: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    icon: '',
    iconBg: '#64b5f6',
    isFontAwesome: true
  },
  {
    title: 'Proven Experience and Expertise',
    desc: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    icon: '💓',
    iconBg: '#f06292'
  },
  {
    title: 'Security & Intellectual Property (IP)',
    desc: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    icon: '🛡️',
    iconBg: '#4db6ac'
  },
  {
    title: 'Code Reviews',
    desc: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    icon: '✅',
    iconBg: '#ffd54f'
  },
  {
    title: 'Quality Assurance & Testing',
    desc: 'Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    icon: '🔐',
    iconBg: '#9575cd'
  }
]

export default function DesignApproach() {
  const primaryNavy = '#1a1a2e'
  const textGray = '#5e5e77'

  return (
    <section id="design-approach" className="approach-sec">

      {/* Absolute strict media mappings displacing unstable raw JS window reads */}
      <style>{`
        .approach-sec { background: #fcfaff; padding: 65px 0 120px 0; border-top: 1.2px solid #ececf4; }
        .approach-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; max-width: 1250px; margin: 0 auto; padding: 0 25px; }
        .approach-card {
           background: #ffffff; padding: 45px 40px; border-radius: 18px;
           display: flex; gap: 25px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); border: 1px solid #f0f0f5; transition: 0.3s;
        }
        
        @media (max-width: 1024px) {
           .approach-grid { grid-template-columns: 1fr; }
           .approach-card { padding: 35px 30px; }
        }
        @media (max-width: 600px) {
           .approach-sec { padding: 50px 0 80px 0; }
           .approach-card { flex-direction: column; text-align: center; align-items: center; gap: 15px; }
        }
      `}</style>

      {/* 🏷️ SECTION HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, #ff8a00 0%, #ffae42 100%)', margin: '0 auto 20px auto', borderRadius: 2 }} />
        <h4 style={{ fontSize: '1.6rem', fontWeight: 300, color: textGray, marginBottom: '0.8rem' }}>
          Our design and
        </h4>
        <h2 style={{ fontSize: '3.2rem', fontWeight: 800, color: primaryNavy }}>
          development approach
        </h2>
      </div>

      {/* 📦 GRID OF CARDS */}
      <div className="approach-grid">
        {approaches.map((app, i) => (
          <div key={i} className="approach-card">
            {/* Icon Box */}
            <div style={{
              width: 70, height: 70, borderRadius: 12, background: app.iconBg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.8rem', color: '#fff', flexShrink: 0
            }}>
              {app.isFontAwesome ? <span style={{ fontFamily: 'monospace', fontWeight: 800 }}>{'</>'}</span> : app.icon}
            </div>

            {/* Content Box */}
            <div>
              <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: primaryNavy, marginBottom: '1.2rem' }}>
                {app.title}
              </h4>
              <p style={{ fontSize: '0.95rem', color: textGray, lineHeight: 1.75 }}>
                {app.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
