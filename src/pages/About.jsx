// Sida: Om oss
import { Link } from 'react-router-dom'
import { colors } from '../theme'

function About() {
  return (
    <div>

      <section style={{ background: colors.primary, color: '#fff', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="wrap">
          <h1 style={{ fontSize: '42px', fontWeight: 800, color: '#fff' }}>Om Corelink Group</h1>
        </div>
      </section>

      <section style={{ background: '#fff', paddingTop: '48px', paddingBottom: '64px' }}>
        <div className="wrap">
          <div className="grid-equal">

            <div>
              <p style={{ color: colors.text, lineHeight: 1.8, fontSize: '15px', marginBottom: '16px' }}>
                Corelink Group är ett företag i Västerås som erbjuder professionella tjänster inom försäljning, mötesbokning och kundservice. Vi hjälper företag att stärka sina kundrelationer, skapa nya affärsmöjligheter och effektivisera sin dagliga verksamhet genom skräddarsydda lösningar anpassade efter varje kunds behov.
              </p>
              <p style={{ color: colors.text, lineHeight: 1.8, fontSize: '15px' }}>
                Med fokus på kvalitet, service och långsiktiga samarbeten arbetar vi för att skapa värde i varje kundkontakt. Vårt engagerade team representerar ert företag med professionalism och ett starkt kundfokus, vilket bidrar till ökad kundnöjdhet och hållbara affärsrelationer. Målet är att vara en pålitlig partner som hjälper företag att växa och utvecklas.
              </p>
              <Link to="/lediga-tjanster" style={{ display: 'inline-block', marginTop: '24px', background: colors.accent, color: '#fff', padding: '12px 24px', fontWeight: 700, fontSize: '14px', textDecoration: 'none', borderRadius: '6px' }}>
                Se lediga tjänster →
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/omoss.png" alt="Corelink Group" style={{ width: '100%', maxWidth: '480px', display: 'block' }} />
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default About
