// Footer – delad komponent på alla sidor
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer style={{ background: '#1e3a8a', color: '#bfdbfe' }}>
      <div className="wrap" style={{ paddingTop: '48px', paddingBottom: '48px' }}>

        <div className="grid-3col" style={{ paddingBottom: '36px', borderBottom: '1px solid rgba(255,255,255,0.1)', gap: '40px' }}>

          <div>
            <p style={{ color: '#fff', fontWeight: 800, fontSize: '18px', marginBottom: '10px' }}>Ditt Företag</p>
            <p style={{ fontSize: '13px', lineHeight: 1.7 }}>Professionellt callcenter i Sverige. Vi är rösten för ditt företag.</p>
          </div>

          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Snabblänkar</p>
            {[['/', 'Hem'], ['/tjanster', 'Tjänster'], ['/om-oss', 'Om oss'], ['/lediga-tjanster', 'Lediga tjänster'], ['/ansok', 'Ansök om jobb']].map(([to, label]) => (
              <Link key={to} to={to} style={{ display: 'block', color: '#bfdbfe', textDecoration: 'none', fontSize: '13px', padding: '3px 0' }}
                onMouseEnter={e => e.target.style.color = '#fcd34d'}
                onMouseLeave={e => e.target.style.color = '#bfdbfe'}>
                {label}
              </Link>
            ))}
          </div>

          <div>
            <p style={{ color: '#fff', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Kontakta oss</p>
            <p style={{ fontSize: '13px', lineHeight: 2.0 }}>
              📞 070-000 00 00<br />
              ✉️ info@dittforetag.se<br />
              ✉️ jobb@dittforetag.se<br />
              📍 Sverige
            </p>
          </div>

        </div>

        <p style={{ textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.35)', paddingTop: '20px' }}>
          © {new Date().getFullYear()} Ditt Företag AB. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  )
}

export default Footer
