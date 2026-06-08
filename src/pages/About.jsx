// Sida: Om oss
import { Link } from 'react-router-dom'

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    color: '#0a66c2',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    color: '#1877f2',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    color: '#e1306c',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com',
    color: '#000',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
]

function About() {
  return (
    <div>

      <section style={{ background: '#1e40af', color: '#fff', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="wrap">
          <span className="section-label">Om oss</span>
          <h1 style={{ fontSize: '42px', fontWeight: 800, color: '#fff', marginTop: '8px' }}>Vilka är vi?</h1>
        </div>
      </section>

      <section style={{ background: '#fff', paddingTop: '48px', paddingBottom: '64px' }}>
        <div className="wrap">
          <div className="grid-equal">

            <div>
              <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '15px', marginBottom: '16px' }}>
                Vi är ett modernt callcenter i Sverige med fokus på kvalitet och engagemang. Vi hanterar kundkontakter för företag i alla storlekar.
              </p>
              <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '15px' }}>
                Vi arbetar med företag inom olika branscher och erbjuder flexibla lösningar anpassade efter varje kunds behov.
              </p>
              <Link to="/lediga-tjanster" style={{ display: 'inline-block', marginTop: '24px', background: '#f97316', color: '#fff', padding: '12px 24px', fontWeight: 700, fontSize: '14px', textDecoration: 'none', borderRadius: '6px' }}>
                Se lediga tjänster →
              </Link>

              {/* Sociala medier */}
              <div style={{ marginTop: '36px' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#9ca3af', marginBottom: '14px' }}>Följ oss</p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {socials.map(({ name, href, color, icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={name}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 16px', border: '1px solid #e0e7ff', borderRadius: '6px', color: '#374151', textDecoration: 'none', fontSize: '13px', fontWeight: 600, background: '#fff', transition: 'border-color 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.color = color }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#e0e7ff'; e.currentTarget.style.color = '#374151' }}
                    >
                      <span style={{ color: 'inherit' }}>{icon}</span>
                      {name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ background: '#f0f5ff', border: '1px solid #e0e7ff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', aspectRatio: '4/3', borderRadius: '8px' }}>
              <span style={{ fontSize: '48px' }}>📷</span>
              <p style={{ color: '#94a3b8', fontSize: '13px', marginTop: '10px' }}>Bild på kontoret / teamet</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default About
