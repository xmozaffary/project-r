// Sida: Tjänster
const services = [
  { id: 1, icon: '📞', title: 'Inkommande samtal', desc: 'Vi svarar i ditt företags namn och hanterar kundförfrågningar och support.' },
  { id: 2, icon: '📲', title: 'Utgående samtal', desc: 'Vi kontaktar potentiella kunder och genomför försäljning på uppdrag av er.' },
  { id: 3, icon: '🛠️', title: 'Teknisk support', desc: 'Vår personal hanterar tekniska frågor och hjälper era kunder snabbt.' },
  { id: 4, icon: '🛒', title: 'Orderhantering', desc: 'Vi tar emot och registrerar ordrar och säkerställer en smidig process.' },
  { id: 5, icon: '📊', title: 'Marknadsundersökning', desc: 'Vi genomför kundundersökningar och samlar in feedback åt er.' },
  { id: 6, icon: '📋', title: 'Back office', desc: 'Administrativa uppgifter och ärendehantering – vi avlastar er.' },
]

function Services() {
  return (
    <div>

      <section style={{ background: '#1e40af', color: '#fff', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="wrap">
          <span className="section-label">Vad vi erbjuder</span>
          <h1 style={{ fontSize: '42px', fontWeight: 800, color: '#fff', marginTop: '8px' }}>Våra tjänster</h1>
        </div>
      </section>

      <section style={{ background: '#f0f5ff', paddingTop: '48px', paddingBottom: '64px' }}>
        <div className="wrap">
          <div className="grid-2col">
            {services.map(s => (
              <div key={s.id} style={{ background: '#fff', border: '1px solid #e0e7ff', borderLeft: '4px solid #f97316', padding: '28px', display: 'flex', gap: '16px', borderRadius: '0 8px 8px 0' }}>
                <div style={{ fontSize: '28px', flexShrink: 0 }}>{s.icon}</div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1e3a8a', marginBottom: '6px' }}>{s.title}</h3>
                  <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.6 }}>{s.desc}</p>
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
