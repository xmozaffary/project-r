// Sida: Jobbdetalj – info + ansökningsformulär
import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { jobs } from '../data/jobs'

function JobDetail() {
  const { id } = useParams()
  const job = jobs.find(j => j.id === Number(id))

  if (!job) return <Navigate to="/lediga-tjanster" />

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  const input = {
    width: '100%', border: '1px solid #c7d2fe', padding: '10px 14px',
    fontSize: '14px', color: '#1f2937', outline: 'none', background: '#fff',
    fontFamily: 'inherit', borderRadius: '6px',
  }

  return (
    <div>

      <section style={{ background: '#1e40af', color: '#fff', paddingTop: '48px', paddingBottom: '48px' }}>
        <div className="wrap">
          <Link to="/lediga-tjanster" style={{ color: '#bfdbfe', fontSize: '13px', textDecoration: 'none', display: 'inline-block', marginBottom: '16px' }}>
            ← Tillbaka till lediga tjänster
          </Link>
          <h1 style={{ fontSize: '40px', fontWeight: 800, color: '#fff' }}>{job.title}</h1>
          <p style={{ color: '#bfdbfe', fontSize: '14px', marginTop: '10px' }}>
            📍 {job.location} &nbsp;·&nbsp; ⏰ {job.type} &nbsp;·&nbsp; 💰 {job.salary}
          </p>
        </div>
      </section>

      <section style={{ background: '#f0f5ff', paddingTop: '48px', paddingBottom: '64px' }}>
        <div className="wrap">
          <div className="grid-equal">

            {/* Jobbinfo */}
            <div style={{ background: '#fff', border: '1px solid #e0e7ff', padding: '32px', borderRadius: '8px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#1e3a8a', marginBottom: '14px' }}>Om tjänsten</h2>
              <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.8 }}>{job.fullDesc}</p>

              <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#1e3a8a', margin: '24px 0 12px' }}>Vi söker dig som</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {job.requirements.map(r => (
                  <li key={r} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: '#4b5563' }}>
                    <span style={{ color: '#f97316', fontWeight: 700, flexShrink: 0 }}>✓</span> {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ansökningsformulär */}
            <div style={{ background: '#fff', border: '1px solid #e0e7ff', padding: '32px', borderRadius: '8px' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div style={{ fontSize: '48px', marginBottom: '14px' }}>✅</div>
                  <h3 style={{ fontWeight: 700, color: '#1e3a8a', fontSize: '18px', marginBottom: '8px' }}>Ansökan skickad!</h3>
                  <p style={{ color: '#6b7280', fontSize: '13px' }}>Vi återkommer inom 2 arbetsdagar.</p>
                </div>
              ) : (
                <>
                  <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#1e3a8a', marginBottom: '20px' }}>
                    Ansök – {job.title}
                  </h2>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {[
                      { label: 'Namn', name: 'name', type: 'text', ph: 'Ditt fullständiga namn', req: true },
                      { label: 'E-post', name: 'email', type: 'email', ph: 'din@email.se', req: true },
                      { label: 'Telefon', name: 'phone', type: 'tel', ph: '070-000 00 00', req: true },
                    ].map(({ label, name, type, ph, req }) => (
                      <div key={name}>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '5px' }}>
                          {label} {req && <span style={{ color: '#f97316' }}>*</span>}
                        </label>
                        <input style={input} type={type} name={name} value={form[name]} onChange={handleChange} required={req} placeholder={ph} />
                      </div>
                    ))}
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '5px' }}>
                        Berätta om dig själv <span style={{ color: '#f97316' }}>*</span>
                      </label>
                      <textarea style={{ ...input, resize: 'vertical', minHeight: '120px' }} name="message" value={form.message} onChange={handleChange} required placeholder="Varför vill du jobba hos oss?" />
                    </div>
                    <button type="submit" style={{ background: '#f97316', color: '#fff', border: 'none', padding: '13px', fontWeight: 700, fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit', borderRadius: '6px' }}>
                      Skicka ansökan →
                    </button>
                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default JobDetail
