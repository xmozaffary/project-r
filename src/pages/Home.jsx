// Startsida
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { colors } from '../theme'

const cards = [
  { to: '/om-oss', title: 'Om oss', desc: 'Läs mer om företaget och vad vi gör.', img: '/au.png' },
  { to: '/lediga-tjanster', title: 'Lediga tjänster', desc: 'Vi söker nya medarbetare – kika in!', img: '/job.png' },
]

function ImageCard({ to, title, desc, img }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to={to}
      style={{ display: 'block', textDecoration: 'none', position: 'relative', backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px', overflow: 'hidden', minHeight: '280px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ position: 'absolute', inset: 0, background: hovered ? 'rgba(10,30,80,0.72)' : 'rgba(10,30,80,0.55)', transition: 'background 0.3s' }}></div>
      <div style={{ position: 'relative', padding: '32px', display: 'flex', flexDirection: 'column', minHeight: '280px', boxSizing: 'border-box' }}>
        <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>{title}</h3>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: 'auto' }}>{desc}</p>
        <div style={{ marginTop: '32px' }}>
          <span style={{ display: 'inline-block', border: '2px solid #fff', color: '#fff', padding: '9px 18px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em' }}>
            LÄS MER
          </span>
        </div>
      </div>
    </Link>
  )
}

function Home() {
  return (
    <div>

      {/* Hero – full skärm med bakgrundsbild */}
      <section style={{
        position: 'relative',
        color: '#fff',
        height: 'calc(100vh - 88px)',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url(/hero-img.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(30, 64, 175, 0.82)' }}></div>

        <div className="wrap" style={{ position: 'relative', textAlign: 'center', width: '100%' }}>
          <span className="section-label">Professionellt callcenter i Sverige</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 800, lineHeight: 1.2, margin: '12px 0 20px', color: '#fff' }}>
            Vi är rösten för ditt företag
          </h1>
          <p style={{ color: colors.textLight, fontSize: '17px', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 36px' }}>
            Vi hanterar din kundkontakt professionellt. Vi söker också engagerade medarbetare.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/lediga-tjanster" style={{ background: colors.accent, color: '#fff', padding: '13px 28px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', borderRadius: '6px' }}>
              Se lediga tjänster
            </Link>
            <Link to="/om-oss" style={{ border: '2px solid rgba(255,255,255,0.7)', color: '#fff', padding: '13px 28px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', borderRadius: '6px' }}>
              Om oss
            </Link>
          </div>
        </div>
      </section>

      {/* Bildkort – tjänster, om oss, lediga tjänster */}
      <section style={{ background: '#fff', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="wrap">
          <div className="grid-2col">
            {cards.map(card => <ImageCard key={card.to} {...card} />)}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
