// Sida: Jobbdetalj – info + ansökningsformulär
import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { jobs } from '../data/jobs'
import { colors } from '../theme'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

function JobDetail() {
  const { id } = useParams()
  const job = jobs.find(j => j.id === Number(id))

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  if (!job) return <Navigate to="/lediga-tjanster" />

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Jobbansökan – ${job.title}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const input = {
    width: '100%', border: `1px solid ${colors.inputBorder}`, padding: '10px 14px',
    fontSize: '14px', color: '#1f2937', outline: 'none', background: '#fff',
    fontFamily: 'inherit', borderRadius: '6px',
  }

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

            {/* Ansökningsformulär */}
            <div style={{ background: '#fff', border: `1px solid ${colors.border}`, padding: '32px', borderRadius: '8px' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div style={{ fontSize: '48px', marginBottom: '14px' }}>✅</div>
                  <h3 style={{ fontWeight: 700, color: colors.primaryDark, fontSize: '18px', marginBottom: '8px' }}>Ansökan skickad!</h3>
                  <p style={{ color: colors.textMuted, fontSize: '13px' }}>Vi återkommer ofta inom en vecka.</p>
                </div>
              ) : (
                <>
                  <h2 style={{ fontSize: '18px', fontWeight: 700, color: colors.primaryDark, marginBottom: '20px' }}>
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
                          {label} {req && <span style={{ color: colors.accent }}>*</span>}
                        </label>
                        <input style={input} type={type} name={name} value={form[name]} onChange={handleChange} required={req} placeholder={ph} />
                      </div>
                    ))}
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '5px' }}>
                        Berätta om dig själv <span style={{ color: colors.accent }}>*</span>
                      </label>
                      <textarea style={{ ...input, resize: 'vertical', minHeight: '120px' }} name="message" value={form.message} onChange={handleChange} required placeholder="Varför vill du jobba hos oss?" />
                    </div>
                    {error && (
                      <p style={{ color: '#dc2626', fontSize: '13px' }}>Något gick fel. Försök igen eller kontakta oss direkt.</p>
                    )}
                    <button type="submit" disabled={loading} style={{ background: loading ? '#9ca3af' : colors.accent, color: '#fff', border: 'none', padding: '13px', fontWeight: 700, fontSize: '14px', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit', borderRadius: '6px' }}>
                      {loading ? 'Skickar...' : 'Skicka ansökan →'}
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
