// Sida: Öppen ansökan
import { useState } from 'react'
import { Link } from 'react-router-dom'

const jobOptions = ['Kundtjänstagent', 'Säljare – utgående samtal', 'Teamledare', 'Teknisk supportagent', 'Öppen ansökan']

function Apply() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', job: 'Öppen ansökan', experience: '', message: '' })
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

      <section style={{ background: '#1e40af', color: '#fff', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="wrap">
          <span className="section-label">Bli en del av teamet</span>
          <h1 style={{ fontSize: '42px', fontWeight: 800, color: '#fff', marginTop: '8px' }}>Öppen ansökan</h1>
          <p style={{ color: '#bfdbfe', fontSize: '15px', marginTop: '10px' }}>
            <Link to="/lediga-tjanster" style={{ color: '#fcd34d' }}>← Se lediga tjänster</Link>
          </p>
        </div>
      </section>

      <section style={{ background: '#f0f5ff', paddingTop: '48px', paddingBottom: '64px' }}>
        <div className="wrap">
          <div className="grid-1-2">

            <div style={{ background: '#fff', border: '1px solid #e0e7ff', padding: '28px', borderRadius: '8px' }}>
              <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#1e3a8a', marginBottom: '14px' }}>Vi erbjuder</h2>
              {['Betald utbildning', 'Fast lön + provision', 'Flexibla arbetstider', 'Karriärmöjligheter'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 0', borderBottom: '1px solid #e0e7ff', fontSize: '13px', color: '#374151' }}>
                  <span style={{ color: '#f97316', fontWeight: 700 }}>✓</span> {item}
                </div>
              ))}
              <div style={{ marginTop: '20px', fontSize: '13px', color: '#4b5563', lineHeight: 1.7 }}>
                Frågor? <a href="mailto:jobb@dittforetag.se" style={{ color: '#1e40af' }}>jobb@dittforetag.se</a>
              </div>
            </div>

            <div style={{ background: '#fff', border: '1px solid #e0e7ff', padding: '36px', borderRadius: '8px' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '52px', marginBottom: '14px' }}>✅</div>
                  <h3 style={{ fontWeight: 700, color: '#1e3a8a', fontSize: '20px', marginBottom: '8px' }}>Ansökan skickad!</h3>
                  <p style={{ color: '#6b7280', fontSize: '14px' }}>Vi återkommer inom 2 arbetsdagar.</p>
                  <button onClick={() => setSent(false)} style={{ marginTop: '16px', color: '#f97316', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', fontSize: '13px', fontFamily: 'inherit' }}>Skicka en ny ansökan</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '5px' }}>Namn <span style={{ color: '#f97316' }}>*</span></label>
                      <input style={input} type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Ditt fullständiga namn" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '5px' }}>E-post <span style={{ color: '#f97316' }}>*</span></label>
                      <input style={input} type="email" name="email" value={form.email} onChange={handleChange} required placeholder="din@email.se" />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '5px' }}>Telefon <span style={{ color: '#f97316' }}>*</span></label>
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
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '5px' }}>Berätta om dig själv <span style={{ color: '#f97316' }}>*</span></label>
                    <textarea style={{ ...input, resize: 'vertical', minHeight: '130px' }} name="message" value={form.message} onChange={handleChange} required placeholder="Varför vill du jobba hos oss?" />
                  </div>
                  <button type="submit" style={{ background: '#f97316', color: '#fff', border: 'none', padding: '13px', fontWeight: 700, fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit', borderRadius: '6px' }}>
                    Skicka ansökan →
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
