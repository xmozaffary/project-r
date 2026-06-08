// Om oss-sektionen för Core Link AB
function About() {
  return (
    <section id="om-oss" className="full-section" style={{ background: '#fff' }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', height: '100%', paddingTop: '48px', paddingBottom: '48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', width: '100%' }}>

          <div>
            <span className="section-label">Om oss</span>
            <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#1a2e4a' }}>Din partner inom kundkommunikation</h2>
            <div className="section-line"></div>

            <p style={{ color: '#4b5563', lineHeight: 1.8, marginTop: '20px', fontSize: '15px' }}>
              Vi är ett modernt callcenter baserat i Sverige. Vi specialiserar oss på att bygga broar mellan företag och deras kunder – med hög servicekvalitet och engagerade medarbetare.
            </p>
            <p style={{ color: '#4b5563', lineHeight: 1.8, marginTop: '12px', fontSize: '15px' }}>
              Vi arbetar med företag inom olika branscher och erbjuder flexibla lösningar anpassade efter varje kunds behov.
            </p>

            <ul style={{ listStyle: 'none', marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Utbildad och erfaren personal',
                'Moderna system och verktyg',
                'Flexibla öppettider och kapacitet',
                'Kvalitetssäkrade samtal',
              ].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: '#374151' }}>
                  <span style={{ width: '22px', height: '22px', background: '#f97316', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a href="#ansok" style={{ display: 'inline-block', marginTop: '28px', background: '#f97316', color: '#fff', padding: '12px 28px', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
              Ansök om jobb
            </a>
          </div>

          <div style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', aspectRatio: '4/3' }}>
            <span style={{ fontSize: '48px' }}>📷</span>
            <p style={{ color: '#94a3b8', fontWeight: 600, fontSize: '14px', marginTop: '12px' }}>Bild på kontoret / teamet</p>
            <p style={{ color: '#cbd5e1', fontSize: '12px', marginTop: '4px' }}>Ersätt med riktig bild</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
