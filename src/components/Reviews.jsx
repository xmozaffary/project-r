// Kundrecensioner – omdömen från företagskunder till Core Link AB
const reviews = [
  {
    id: 1, name: 'Erik J.', company: 'VD, TechNord AB', stars: 5,
    text: 'Core Link AB har hanterat vår kundservice i två år. Professionellt, snabbt och alltid med ett leende i rösten. Våra kunder märker skillnaden.',
  },
  {
    id: 2, name: 'Maria K.', company: 'Driftchef, Nordhem Fastigheter', stars: 5,
    text: 'Fantastisk partner. De lärde sig våra rutiner snabbt och hanterar hundratals ärenden i veckan utan problem. Kan varmt rekommendera.',
  },
  {
    id: 3, name: 'Jonas B.', company: 'Försäljningschef, SverigeShoppen', stars: 5,
    text: 'Utgående försäljning via Core Link gav oss en tydlig ökning i konvertering. Kompetent personal och bra uppföljning.',
  },
]

function ReviewCard({ name, company, stars, text }) {
  return (
    <div style={{ background: '#fff', border: '1px solid #e5e7eb', padding: '28px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ color: '#f97316', fontSize: '18px', letterSpacing: '3px', marginBottom: '14px' }}>{'★'.repeat(stars)}</div>
      <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: 1.7, flex: 1 }}>"{text}"</p>
      <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '16px', marginTop: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '38px', height: '38px', background: '#1a2e4a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '14px', flexShrink: 0 }}>
          {name[0]}
        </div>
        <div>
          <p style={{ fontWeight: 700, fontSize: '14px', color: '#1a2e4a' }}>{name}</p>
          <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>{company}</p>
        </div>
      </div>
    </div>
  )
}

function Reviews() {
  return (
    <section className="full-section" style={{ background: '#f8fafc' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', height: '100%', paddingTop: '48px', paddingBottom: '40px' }}>

        <div>
          <span className="section-label">Vad kunderna säger</span>
          <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#1a2e4a' }}>Kundrecensioner</h2>
          <div className="section-line"></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '28px', flex: 1 }}>
          {reviews.map(r => <ReviewCard key={r.id} name={r.name} company={r.company} stars={r.stars} text={r.text} />)}
        </div>

        <p style={{ marginTop: '20px', fontSize: '13px', color: '#9ca3af' }}>
          <span style={{ color: '#f97316' }}>★★★★★</span>&nbsp; 5.0 på Google – baserat på 80+ recensioner
        </p>

      </div>
    </section>
  )
}

export default Reviews
