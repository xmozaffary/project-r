// Sida: Jobbdetalj – info + kontaktuppgifter
import { useParams, Link, Navigate } from 'react-router-dom'
import { jobs } from '../data/jobs'
import { colors } from '../theme'

function JobDetail() {
  const { id } = useParams()
  const job = jobs.find(j => j.id === Number(id))

  if (!job) return <Navigate to="/lediga-tjanster" />

  return (
    <div>

      <section style={{ background: colors.primary, color: '#fff', paddingTop: '48px', paddingBottom: '48px' }}>
        <div className="wrap">
          <Link to="/lediga-tjanster" style={{ color: colors.textLight, fontSize: '13px', textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>
            ← Tillbaka till lediga tjänster
          </Link>
          <h1 style={{ fontSize: '40px', fontWeight: 800, color: '#fff' }}>{job.title}</h1>
          <p style={{ color: colors.textLight, fontSize: '14px', marginTop: '10px' }}>
            {job.location} &nbsp;·&nbsp; {job.type} &nbsp;·&nbsp; {job.salary}
          </p>
        </div>
      </section>

      <section style={{ background: colors.bgLight, paddingTop: '48px', paddingBottom: '64px' }}>
        <div className="wrap">
          <div className="grid-equal">

            {/* Jobbinfo */}
            <div style={{ background: '#fff', border: `1px solid ${colors.border}`, padding: '32px', borderRadius: '8px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: colors.primaryDark, marginBottom: '14px' }}>Om tjänsten</h2>
              <p style={{ fontSize: '14px', color: colors.text, lineHeight: 1.8 }}>{job.fullDesc}</p>

              <h2 style={{ fontSize: '18px', fontWeight: 700, color: colors.primaryDark, margin: '24px 0 12px' }}>Vi söker dig som</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {job.requirements.map(r => (
                  <li key={r} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: colors.text }}>
                    <span style={{ color: colors.accent, fontWeight: 700, flexShrink: 0 }}>✓</span> {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Kontaktuppgifter */}
            <div style={{ background: '#fff', border: `1px solid ${colors.border}`, padding: '32px', borderRadius: '8px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: colors.primaryDark, marginBottom: '8px' }}>Så här ansöker du</h2>
              <p style={{ fontSize: '14px', color: colors.text, lineHeight: 1.8, marginBottom: '24px' }}>
                Skicka ett mejl till oss med en kort beskrivning av dig själv. Bifoga gärna ditt CV och personliga brev.
              </p>

              <div style={{ background: colors.bgLight, border: `1px solid ${colors.border}`, borderLeft: `4px solid ${colors.accent}`, padding: '20px 24px', borderRadius: '0 8px 8px 0' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, color: colors.textMuted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Skicka din ansökan till</p>
                <a href="mailto:jobb@corelinkgroup.se" style={{ fontSize: '18px', fontWeight: 700, color: colors.primary, textDecoration: 'none' }}>
                  jobb@corelinkgroup.se
                </a>
              </div>

              <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Kort beskrivning om dig själv', 'CV (bifogad fil)', 'Personligt brev (bifogad fil)'].map(item => (
                  <div key={item} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: colors.text }}>
                    <span style={{ color: colors.accent, fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default JobDetail
