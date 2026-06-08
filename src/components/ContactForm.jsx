// Jobbansökningsformulär – folk söker jobb hos Core Link AB via email
import { useState } from 'react'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', experience: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Här kopplar du in EmailJS eller Formspree för att skicka via email
    setSent(true)
    setForm({ name: '', email: '', phone: '', experience: '', message: '' })
  }

  const input = {
    width: '100%', border: '1px solid #d1d5db', padding: '9px 14px',
    fontSize: '13px', color: '#1f2937', outline: 'none', background: '#fff', fontFamily: 'inherit',
  }

  return (
    <section id="ansok" className="full-section" style={{ background: '#fff' }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', height: '100%', paddingTop: '48px', paddingBottom: '48px' }}>
        <div style={{ width: '100%' }}>

          <span className="section-label">Bli en del av teamet</span>
          <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#1a2e4a' }}>Ansök om jobb</h2>
          <div className="section-line"></div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', marginTop: '36px', alignItems: 'start' }}>

            {/* Info om jobbet */}
            <div>
              <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '15px', marginBottom: '24px' }}>
                Vi söker engagerade och serviceinriktade medarbetare till vårt callcenter. Ingen tidigare erfarenhet krävs – vi utbildar dig!
              </p>

              {/* Vad vi erbjuder */}
              <div style={{ background: '#f8fafc', border: '1px solid #e5e7eb', padding: '20px', marginBottom: '20px' }}>
                <p style={{ fontWeight: 700, fontSize: '13px', color: '#1a2e4a', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Vi erbjuder</p>
                {[
                  'Fast lön + provision',
                  'Betald utbildning',
                  'Flexibla arbetstider',
                  'Trevlig arbetsmiljö',
                  'Karriärmöjligheter',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '5px 0', borderBottom: '1px solid #f1f5f9', fontSize: '13px', color: '#374151' }}>
                    <span style={{ color: '#f97316', fontWeight: 700 }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>

              {/* Kontaktinfo */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                <div style={{ width: '40px', height: '40px', background: '#1a2e4a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>✉️</div>
                <a href="mailto:jobb@dittforetag.se" style={{ color: '#374151', fontSize: '14px', textDecoration: 'none' }}>jobb@dittforetag.se</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '40px', height: '40px', background: '#1a2e4a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>📞</div>
                <a href="tel:+46700000000" style={{ color: '#374151', fontSize: '14px', textDecoration: 'none' }}>070-000 00 00</a>
              </div>
            </div>

            {/* Ansökningsformulär */}
            <div style={{ background: '#f8fafc', border: '1px solid #e5e7eb', padding: '32px' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div style={{ fontSize: '44px', marginBottom: '14px' }}>✅</div>
                  <h3 style={{ fontWeight: 700, color: '#1a2e4a', fontSize: '18px', marginBottom: '8px' }}>Ansökan skickad!</h3>
                  <p style={{ color: '#6b7280', fontSize: '13px' }}>Vi återkommer till dig inom 2 arbetsdagar.</p>
                  <button onClick={() => setSent(false)} style={{ marginTop: '16px', color: '#f97316', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', fontSize: '13px', fontFamily: 'inherit' }}>
                    Skicka en ny ansökan
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <p style={{ fontWeight: 700, fontSize: '14px', color: '#1a2e4a', marginBottom: '4px' }}>Fyll i dina uppgifter</p>

                  {/* Namn */}
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '5px' }}>
                      Namn <span style={{ color: '#f97316' }}>*</span>
                    </label>
                    <input style={input} type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Ditt fullständiga namn" />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '5px' }}>
                      E-post <span style={{ color: '#f97316' }}>*</span>
                    </label>
                    <input style={input} type="email" name="email" value={form.email} onChange={handleChange} required placeholder="din@email.se" />
                  </div>

                  {/* Telefon */}
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '5px' }}>
                      Telefon <span style={{ color: '#f97316' }}>*</span>
                    </label>
                    <input style={input} type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="070-000 00 00" />
                  </div>

                  {/* Erfarenhet */}
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '5px' }}>
                      Tidigare erfarenhet
                    </label>
                    <select
                      name="experience"
                      value={form.experience}
                      onChange={handleChange}
                      style={{ ...input, cursor: 'pointer' }}
                    >
                      <option value="">Välj alternativ...</option>
                      <option value="ingen">Ingen erfarenhet</option>
                      <option value="under1">Mindre än 1 år</option>
                      <option value="1-3">1–3 år</option>
                      <option value="over3">Mer än 3 år</option>
                    </select>
                  </div>

                  {/* Om dig */}
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#374151', marginBottom: '5px' }}>
                      Berätta om dig själv <span style={{ color: '#f97316' }}>*</span>
                    </label>
                    <textarea
                      style={{ ...input, resize: 'vertical', minHeight: '80px' }}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="Varför vill du jobba hos oss? Vad kan du bidra med?"
                    />
                  </div>

                  <button type="submit" style={{ background: '#f97316', color: '#fff', border: 'none', padding: '13px', fontWeight: 700, fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit' }}>
                    Skicka ansökan →
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
