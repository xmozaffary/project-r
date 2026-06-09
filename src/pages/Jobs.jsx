// Sida: Lediga tjänster
import { Link } from 'react-router-dom'
import { jobs } from '../data/jobs'
import { colors } from '../theme'

function JobCard({ job }) {
  return (
    <Link
      to={`/lediga-tjanster/${job.id}`}
      style={{ display: 'block', textDecoration: 'none', background: '#fff', border: `1px solid ${colors.border}`, padding: '24px 28px', borderLeft: `4px solid ${colors.accent}`, borderRadius: '0 8px 8px 0' }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(30,64,175,0.1)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
        <div>
          <h3 style={{ fontSize: '17px', fontWeight: 700, color: colors.primaryDark, marginBottom: '6px' }}>{job.title}</h3>
          <p style={{ fontSize: '13px', color: colors.textMuted }}>
            {job.location} &nbsp;·&nbsp; {job.type} &nbsp;·&nbsp; {job.salary}
          </p>
          <p style={{ fontSize: '14px', color: colors.text, marginTop: '8px' }}>{job.shortDesc}</p>
        </div>
        <span style={{ color: colors.accent, fontWeight: 700, fontSize: '13px', flexShrink: 0 }}>Läs mer →</span>
      </div>
    </Link>
  )
}

function Jobs() {
  return (
    <div>

      <section style={{ background: colors.primary, color: '#fff', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="wrap">
          <span className="section-label">Jobba hos oss</span>
          <h1 style={{ fontSize: '42px', fontWeight: 800, color: '#fff', marginTop: '8px' }}>Lediga tjänster</h1>
          <p style={{ color: colors.textLight, fontSize: '15px', marginTop: '10px', lineHeight: 1.7 }}>
            Klicka på en tjänst för att läsa mer och ansöka.
          </p>
        </div>
      </section>

      <section style={{ background: colors.bgLight, paddingTop: '48px', paddingBottom: '64px' }}>
        <div className="wrap">

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {jobs.map(job => <JobCard key={job.id} job={job} />)}
          </div>

          <div style={{ marginTop: '24px', background: '#fff', border: `1px dashed ${colors.textLight}`, padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', borderRadius: '8px' }}>
            <p style={{ color: colors.text, fontSize: '14px' }}>
              Ser du inget passande? Skicka en öppen ansökan.
            </p>
            <Link to="/ansok" style={{ background: colors.primary, color: '#fff', padding: '10px 20px', fontWeight: 700, fontSize: '13px', textDecoration: 'none', borderRadius: '6px' }}>
              Öppen ansökan →
            </Link>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Jobs
