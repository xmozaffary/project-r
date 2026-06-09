// Sida: Om oss
import { Link } from 'react-router-dom'
import { colors } from '../theme'

function About() {
  return (
    <div>

      <section style={{ background: colors.primary, color: '#fff', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="wrap">
          <span className="section-label">Om oss</span>
          <h1 style={{ fontSize: '42px', fontWeight: 800, color: '#fff', marginTop: '8px' }}>Vilka är vi?</h1>
        </div>
      </section>

      <section style={{ background: '#fff', paddingTop: '48px', paddingBottom: '64px' }}>
        <div className="wrap">
          <div className="grid-equal">

            <div>
              <p style={{ color: colors.text, lineHeight: 1.8, fontSize: '15px', marginBottom: '16px' }}>
                Vi är ett modernt callcenter i Sverige med fokus på kvalitet och engagemang. Vi hanterar kundkontakter för företag i alla storlekar.
              </p>
              <p style={{ color: colors.text, lineHeight: 1.8, fontSize: '15px' }}>
                Vi arbetar med företag inom olika branscher och erbjuder flexibla lösningar anpassade efter varje kunds behov.
              </p>
              <Link to="/lediga-tjanster" style={{ display: 'inline-block', marginTop: '24px', background: colors.accent, color: '#fff', padding: '12px 24px', fontWeight: 700, fontSize: '14px', textDecoration: 'none', borderRadius: '6px' }}>
                Se lediga tjänster →
              </Link>
            </div>

            <div style={{ background: colors.bgLight, border: `1px solid ${colors.border}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', aspectRatio: '4/3', borderRadius: '8px' }}>
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
