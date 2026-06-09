// Sida: Tjänster
import { colors } from '../theme'

const services = [
  { id: 1, title: 'Inkommande samtal', desc: 'Vi svarar i ditt företags namn och hanterar kundförfrågningar och support.' },
  { id: 2, title: 'Utgående samtal', desc: 'Vi kontaktar potentiella kunder och genomför försäljning på uppdrag av er.' },
  { id: 3, title: 'Teknisk support', desc: 'Vår personal hanterar tekniska frågor och hjälper era kunder snabbt.' },
  { id: 4, title: 'Orderhantering', desc: 'Vi tar emot och registrerar ordrar och säkerställer en smidig process.' },
  { id: 5, title: 'Marknadsundersökning', desc: 'Vi genomför kundundersökningar och samlar in feedback åt er.' },
  { id: 6, title: 'Back office', desc: 'Administrativa uppgifter och ärendehantering – vi avlastar er.' },
]

function Services() {
  return (
    <div>

      <section style={{ background: colors.primary, color: '#fff', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="wrap">
          <span className="section-label">Vad vi erbjuder</span>
          <h1 style={{ fontSize: '42px', fontWeight: 800, color: '#fff', marginTop: '8px' }}>Våra tjänster</h1>
        </div>
      </section>

      <section style={{ background: '#fff', paddingTop: '48px', paddingBottom: '64px' }}>
        <div className="wrap">
          <div className="grid-2col">
            {services.map(s => (
              <div key={s.id} style={{ background: '#fff', border: `1px solid ${colors.border}`, borderLeft: `4px solid ${colors.accent}`, padding: '28px', display: 'flex', gap: '20px', borderRadius: '0 8px 8px 0', alignItems: 'flex-start' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: colors.border, color: colors.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700, flexShrink: 0 }}>
                  {s.id}
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: colors.primaryDark, marginBottom: '6px' }}>{s.title}</h3>
                  <p style={{ fontSize: '13px', color: colors.textMuted, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Services
