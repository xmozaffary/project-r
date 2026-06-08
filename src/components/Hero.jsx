// Hjältesektionen för Core Link AB – callcenter
import NavBar from './NavBar'

function Hero() {
  return (
    <section id="hem" className="full-section" style={{ background: '#1a2e4a', color: '#fff' }}>

      <NavBar />

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>

          <span className="section-label">Professionellt callcenter i Sverige</span>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 800, lineHeight: 1.15, margin: '16px 0 20px', color: '#fff' }}>
            Vi är rösten för<br />ditt företag
          </h1>

          <p style={{ color: '#94a3b8', fontSize: '17px', lineHeight: 1.7, maxWidth: '540px', margin: '0 auto 36px' }}>
            Vi hanterar din kundkontakt professionellt – så att du kan fokusera på det du gör bäst. Vi söker nu engagerade medarbetare.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#ansok" style={{ background: '#f97316', color: '#fff', padding: '14px 32px', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
              Ansök om jobb
            </a>
            <a href="#tjanster" style={{ border: '2px solid #fff', color: '#fff', padding: '14px 32px', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
              Se våra tjänster
            </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '56px', marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #2a3e5a', flexWrap: 'wrap' }}>
            {[['100+','Agenter'],['50+','Företagskunder'],['5.0 ★','Google-betyg']].map(([num, label]) => (
              <div key={label}>
                <p style={{ fontSize: '38px', fontWeight: 800, color: '#f97316', lineHeight: 1 }}>{num}</p>
                <p style={{ fontSize: '13px', color: '#64748b', marginTop: '6px' }}>{label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
