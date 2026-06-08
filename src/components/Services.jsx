// Tjänstesektionen – callcenter-tjänster för Core Link AB
const serviceList = [
  { id: 1, icon: '📞', title: 'Inkommande samtal', desc: 'Vi svarar i ditt företags namn och hanterar kundförfrågningar, klagomål och support professionellt.' },
  { id: 2, icon: '📲', title: 'Utgående samtal', desc: 'Vi kontaktar potentiella kunder, följer upp leads och genomför försäljning på uppdrag av er.' },
  { id: 3, icon: '🛠️', title: 'Teknisk support', desc: 'Vår personal hanterar tekniska frågor och hjälper era kunder att lösa problem snabbt och effektivt.' },
  { id: 4, icon: '🛒', title: 'Orderhantering', desc: 'Vi tar emot och registrerar ordrar, hanterar ändringar och säkerställer en smidig beställningsprocess.' },
  { id: 5, icon: '📊', title: 'Marknadsundersökning', desc: 'Vi genomför kundundersökningar och samlar in värdefull feedback för att hjälpa er fatta rätt beslut.' },
  { id: 6, icon: '📋', title: 'Back office', desc: 'Administrativa uppgifter, dataregistrering och ärendehantering – vi avlastar er backoffice.' },
]

function ServiceCard({ icon, title, desc }) {
  return (
    <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderLeft: '4px solid #f97316', padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ fontSize: '28px' }}>{icon}</div>
      <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1a2e4a' }}>{title}</h3>
      <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.6 }}>{desc}</p>
    </div>
  )
}

function Services() {
  return (
    <section id="tjanster" className="full-section" style={{ background: '#f8fafc' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', height: '100%', paddingTop: '48px', paddingBottom: '40px' }}>

        <div>
          <span className="section-label">Vad vi erbjuder</span>
          <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#1a2e4a' }}>Våra tjänster</h2>
          <div className="section-line"></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '12px', marginTop: '24px', flex: 1 }}>
          {serviceList.map(s => <ServiceCard key={s.id} icon={s.icon} title={s.title} desc={s.desc} />)}
        </div>

        <div style={{ marginTop: '20px' }}>
          <a href="#ansok" style={{ background: '#1a2e4a', color: '#fff', padding: '12px 28px', fontWeight: 700, fontSize: '13px', textDecoration: 'none', display: 'inline-block' }}>
            Jobba med oss →
          </a>
        </div>

      </div>
    </section>
  )
}

export default Services
