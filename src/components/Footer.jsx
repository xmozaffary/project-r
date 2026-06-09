// Footer – delad komponent på alla sidor
import { Link } from 'react-router-dom'
import { colors } from '../theme'

function Footer() {
  return (
    <footer style={{ background: colors.primaryDark, color: colors.textLight }}>
      <div className="wrap" style={{ paddingTop: '48px', paddingBottom: '48px' }}>

        <div className="grid-3col" style={{ paddingBottom: '36px', borderBottom: '1px solid rgba(255,255,255,0.1)', gap: '40px' }}>

          <div>
            <p style={{ color: '#fff', fontWeight: 800, fontSize: '18px', marginBottom: '10px' }}>Corelink Group AB</p>
            <p style={{ fontSize: '13px', lineHeight: 1.7 }}>Professionellt callcenter i Sverige. Vi är rösten för ditt företag.</p>
          </div>

          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Snabblänkar</p>
            {[['/', 'Hem'], ['/om-oss', 'Om oss'], ['/lediga-tjanster', 'Lediga tjänster'], ['/ansok', 'Ansök om jobb']].map(([to, label]) => (
              <Link key={to} to={to}
                style={{ display: 'block', color: colors.textLight, textDecoration: 'none', fontSize: '13px', padding: '3px 0' }}
                onMouseEnter={e => e.target.style.color = colors.highlight}
                onMouseLeave={e => e.target.style.color = colors.textLight}>
                {label}
              </Link>
            ))}
          </div>

          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Kontakta oss</p>
            <p style={{ fontSize: '13px', lineHeight: 2.0 }}>
              ✉️ frank@corelinkgroup.se<br />
              📍 Ateljégatan 4, 724 71 Västerås<br />
              🌐 corelinkgroup.se
            </p>
          </div>

        </div>

        <p style={{ textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.35)', paddingTop: '20px' }}>
          © {new Date().getFullYear()} Corelink Group AB · Org.nr: 559579-3539 · Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  )
}

export default Footer
