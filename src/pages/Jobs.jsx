// Sida: Lediga tjänster
import { Link } from 'react-router-dom'
import { colors } from '../theme'

const services = [
  {
    title: 'Försäljning & Telemarketing',
    desc: 'Corelink Group hjälper företag att skapa nya affärsmöjligheter och stärka relationen med sina kunder genom professionell och målinriktad försäljning. Våra medarbetare arbetar med fokus på kvalitet, service och resultat för att representera ert företag på bästa sätt. Genom personlig kommunikation och ett engagerat arbetssätt skapar vi förtroende som leder till långsiktiga kundrelationer och ökad tillväxt.',
  },
  {
    title: 'Mötesbokning',
    desc: 'En välfylld kalender med relevanta kundmöten är en viktig del av ett framgångsrikt företag. Vårt team arbetar strukturerat och effektivt för att skapa kontakt med potentiella kunder, väcka intresse för era tjänster och boka möten som bidrar till nya affärsmöjligheter. Vi anpassar vårt arbetssätt efter era mål och säkerställer en professionell kundupplevelse genom hela processen.',
  },
  {
    title: 'Kundservice & Support',
    desc: 'God kundservice handlar om mer än att besvara frågor – det handlar om att skapa trygghet och bygga förtroende. Vi erbjuder flexibla kundservicelösningar där våra medarbetare hanterar kundärenden, support, uppföljning och administration med hög servicekänsla och professionalism. Genom att vara en förlängning av ert företag hjälper vi er att skapa nöjda kunder och långsiktiga relationer.',
  },
]

const positions = [
  {
    title: 'På kontor',
    desc: 'Du arbetar från vårt kontor i Västerås tillsammans med ett engagerat team.',
    detail: 'Ateljégatan 4, 724 71 Västerås',
  },
  {
    title: 'Remote',
    desc: 'Du arbetar hemifrån med flexibla arbetstider och full support från teamet.',
    detail: 'Jobba var du vill i Sverige',
  },
]

function Jobs() {
  return (
    <div>

      <section style={{ background: colors.primary, color: '#fff', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="wrap">
          <h1 style={{ fontSize: '42px', fontWeight: 800, color: '#fff' }}>Lediga tjänster</h1>
          <p style={{ color: colors.textLight, fontSize: '15px', marginTop: '10px', lineHeight: 1.7 }}>
            Vi söker engagerade medarbetare inom försäljning, mötesbokning och kundservice.
          </p>
        </div>
      </section>

      {/* Vad vi jobbar med */}
      <section style={{ background: '#fff', paddingTop: '56px', paddingBottom: '56px' }}>
        <div className="wrap">
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: colors.primaryDark, marginBottom: '32px' }}>Vad vi jobbar med</h2>
          <div className="grid-3col">
            {services.map(s => (
              <div key={s.title} style={{ border: `1px solid ${colors.border}`, borderTop: `4px solid ${colors.accent}`, padding: '28px', borderRadius: '0 0 8px 8px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: colors.primaryDark, marginBottom: '12px' }}>{s.title}</h3>
                <p style={{ fontSize: '13px', color: colors.textMuted, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tillgängliga tjänster */}
      <section style={{ background: colors.bgLight, paddingTop: '56px', paddingBottom: '64px' }}>
        <div className="wrap">
          <h2 style={{ fontSize: '24px', fontWeight: 800, color: colors.primaryDark, marginBottom: '32px' }}>Tillgängliga tjänster</h2>
          <div className="grid-2col">
            {positions.map(p => (
              <div key={p.title} style={{ background: '#fff', border: `1px solid ${colors.border}`, borderLeft: `4px solid ${colors.accent}`, padding: '28px', borderRadius: '0 8px 8px 0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: colors.primaryDark, marginBottom: '10px' }}>{p.title}</h3>
                <p style={{ fontSize: '14px', color: colors.text, lineHeight: 1.7, marginBottom: '12px' }}>{p.desc}</p>
                <p style={{ fontSize: '13px', color: colors.textMuted }}>{p.detail}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px', background: '#fff', border: `1px solid ${colors.border}`, padding: '32px', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: colors.primaryDark, marginBottom: '10px' }}>Intresserad?</h3>
            <p style={{ fontSize: '14px', color: colors.text, marginBottom: '20px', lineHeight: 1.7 }}>
              Skicka ett mejl med en kort beskrivning av dig själv. Bifoga gärna ditt CV och personliga brev.
            </p>
            <a href="mailto:frank@corelinkgroup.se" style={{ display: 'inline-block', background: colors.accent, color: '#fff', padding: '13px 32px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', borderRadius: '6px' }}>
              frank@corelinkgroup.se
            </a>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Jobs
