import React, { useState } from 'react'

const stackData = {
  Backend: [
    { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'PHP', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
    { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg' },
    { name: '.NET Core', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
    { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg' },
    { name: 'Rails', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg' },
    { name: 'Go', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg' },
    { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg' },
  ],
  Frontend: [
    { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Vue', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Angular', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Next.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Tailwind', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg' },
  ],
  Databases: [
    { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Redis', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  ],
  CMS: [
    { name: 'WordPress', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
    { name: 'Strapi', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/strapi/strapi-original.svg' },
  ]
}

const categories = ['Backend', 'Frontend', 'Databases', 'CMS', 'CloudTesting', 'DevOps']

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('Backend')
  const primaryNavy = '#1a1a2e'
  const textGray = '#5e5e77'
  const magentaTheme = '#b03673'

  return (
    <section id="tech-stack" style={{ background: '#ffffff', padding: '120px 0' }}>

      {/* 🏷️ SECTION HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, #ff7eb3 0%, #3d1fc2 100%)', margin: '0 auto 25px auto', borderRadius: 2 }} />
        <h4 style={{ fontSize: '1.8rem', fontWeight: 300, color: textGray, marginBottom: '0.8rem' }}>
          Our
        </h4>
        <h2 style={{ fontSize: '3.2rem', fontWeight: 800, color: primaryNavy }}>
          Tech Stack
        </h2>
      </div>

      {/* 📑 TABS NAVIGATION */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        marginBottom: '100px',
        flexWrap: 'wrap',
        padding: '0 25px'
      }}>
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => setActiveTab(cat)}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              transition: '0.3s'
            }}
          >
            <span style={{
              fontSize: '1.25rem',
              fontWeight: activeTab === cat ? 800 : 500,
              color: activeTab === cat ? magentaTheme : textGray,
              transition: '0.3s'
            }}>
              {cat}
            </span>
            {activeTab === cat && (
              <div style={{ width: '100%', height: 4, background: magentaTheme, borderRadius: 2 }} />
            )}
          </div>
        ))}
      </div>

      {/* 🌀 LOGO GRID */}
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '80px 100px',
        padding: '0 40px'
      }}>
        {stackData[activeTab]?.map((tech, i) => (
          <div key={i} style={{
            width: '120px',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: '0.4s',
            opacity: 0.9
          }}>
            <img
              src={tech.img}
              alt={tech.name}
              title={tech.name}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                filter: 'grayscale(0.1)',
                transition: '0.3s'
              }}
            />
          </div>
        )) || (
            <div style={{ color: textGray, opacity: 0.6, fontSize: '1.2rem', fontStyle: 'italic' }}>
              Coming soon for {activeTab}...
            </div>
          )}
      </div>

    </section>
  )
}
