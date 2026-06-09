// Sida: Öppen ansökan
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { colors } from '../theme'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const jobOptions = ['Lediga tjänster kontor', 'Lediga tjänster remote', 'Öppen ansökan']

function Apply() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', job: 'Öppen ansökan', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

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
          subject: `Öppen ansökan – ${form.job}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          phone: form.phone,
          job: form.job,
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

      <section style={{ background: colors.primary, color: '#fff', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="wrap">
          <span className="section-label">Bli en del av teamet</span>
          <h1 style={{ fontSize: '42px', fontWeight: 800, color: '#fff', marginTop: '8px' }}>Öppen ansökan</h1>
          <p style={{ color: colors.textLight, fontSize: '15px', marginTop: '10px' }}>
            <Link to="/lediga-tjanster" style={{ color: colors.highlight }}>← Se lediga tjänster</Link>
          </p>
        </div>
      </section>

      <section style={{ background: colors.bgLight, paddingTop: '48px', paddingBottom: '64px' }}>
        <div className="wrap">
          <div className="grid-1-2">

            <div style={{ background: '#fff', border: `1px solid ${colors.border}`, padding: '28px', borderRadius: '8px' }}>
              <h2 style={{ fontSize: '16px', fontWeight: 700, color: colors.primaryDark, marginBottom: '14px' }}>Vi erbjuder</h2>
              {['Betald utbildning', 'Fast lön + provision', 'Flexibla arbetstider', 'Karriärmöjligheter'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 0', borderBottom: `1px solid ${colors.border}`, fontSize: '13px', color: '#374151' }}>
                  <span style={{ color: colors.accent, fontWeight: 700 }}>✓</span> {item}
                </div>
              ))}
              <div style={{ marginTop: '20px', fontSize: '13px', color: colors.text, lineHeight: 1.7 }}>
                Frågor? <a href="mailto:jobb@corelinkgroup.se" style={{ color: colors.primary }}>jobb@corelinkgroup.se</a>
              </div>
            </div>

            <div style={{ background: '#fff', border: `1px solid ${colors.border}`, padding: '36px', borderRadius: '8px' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '52px', marginBottom: '14px' }}>✅</div>
                  <h3 style={{ fontWeight: 700, color: colors.primaryDark, fontSize: '20px', marginBottom: '8px' }}>Ansökan skickad!</h3>
                  <p style={{ color: colors.textMuted, fontSize: '14px' }}>Vi återkommer inom 2 arbetsdagar.</p>
                  <button onClick={() => setSent(false)} style={{ marginTop: '16px', color: colors.accent, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', fontSize: '13px', fontFamily: 'inherit' }}>Skicka en ny ansökan</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '5px' }}>Namn <span style={{ color: colors.accent }}>*</span></label>
                      <input style={input} type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Ditt fullständiga namn" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '5px' }}>E-post <span style={{ color: colors.accent }}>*</span></label>
                      <input style={input} type="email" name="email" value={form.email} onChange={handleChange} required placeholder="din@email.se" />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '5px' }}>Telefon <span style={{ color: colors.accent }}>*</span></label>
                      <input style={input} type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="070-000 00 00" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '5px' }}>Tjänst</label>
                      <select style={{ ...input, cursor: 'pointer' }} name="job" value={form.job} onChange={handleChange}>
                        {jobOptions.map(j => <option key={j} value={j}>{j}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '5px' }}>Berätta om dig själv <span style={{ color: colors.accent }}>*</span></label>
                    <textarea style={{ ...input, resize: 'vertical', minHeight: '130px' }} name="message" value={form.message} onChange={handleChange} required placeholder="Varför vill du jobba hos oss?" />
                  </div>
                  {error && (
                    <p style={{ color: '#dc2626', fontSize: '13px' }}>Något gick fel. Försök igen eller kontakta oss direkt.</p>
                  )}
                  <button type="submit" disabled={loading} style={{ background: loading ? '#9ca3af' : colors.accent, color: '#fff', border: 'none', padding: '13px', fontWeight: 700, fontSize: '14px', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit', borderRadius: '6px' }}>
                    {loading ? 'Skickar...' : 'Skicka ansökan →'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Apply
