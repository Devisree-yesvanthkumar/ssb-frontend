import { useState } from 'react'
import axios from 'axios'

const SERVICES = [
  'General Enquiry', 'Xerox & Printing', 'DTP',
  'Stamp Papers', 'ID & Passport Photos', 'Scanning & Digitization',
  'Binding & Lamination', 'Juice / Beverages'
]

function ToastLocal({ msg, type, visible }) {
  return (
    <div style={{
      position: 'fixed', bottom: 28, right: 28, zIndex: 9999,
      background: type === 'error' ? '#dc2626' : '#16a34a',
      color: '#fff', padding: '16px 24px', borderRadius: 14,
      fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600,
      transform: visible ? 'translateY(0)' : 'translateY(120px)',
      opacity: visible ? 1 : 0, transition: 'all 0.4s',
      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      display: 'flex', alignItems: 'center', gap: 8, maxWidth: 360
    }}>
      <i className={`ti ${type === 'error' ? 'ti-alert-circle' : 'ti-circle-check'}`} />
      {msg}
    </div>
  )
}

export default function Contact() {
  const [form, setForm]   = useState({ name: '', phone: '', service: 'General Enquiry', message: '' })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({ visible: false, msg: '', type: 'success' })

  const showToast = (msg, type = 'success') => {
    setToast({ visible: true, msg, type })
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 4000)
  }

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.message) {
      showToast('Please fill in all required fields.', 'error'); return
    }
    setLoading(true)
    try {
      const res = await axios.post(
        'https://ssb-backend.vercel.app',
        form
      )
      if (res.data.success) {
        showToast(`Thanks ${form.name}! We'll call you back shortly. 🎉`)
        setForm({ name: '', phone: '', service: 'General Enquiry', message: '' })
      }
    } catch (err) {
      console.error('Error:', err)
      showToast('Something went wrong. Please call us directly.', 'error')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: 12, padding: '14px 16px', color: '#fff', fontFamily: 'Inter, sans-serif',
    fontSize: 14, outline: 'none', transition: 'border-color 0.3s', boxSizing: 'border-box'
  }
  const labelStyle = {
    display: 'block', fontFamily: 'Poppins, sans-serif', fontSize: 12, fontWeight: 600,
    color: 'rgba(255,255,255,0.58)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8
  }

  return (
    <>
      <section id="contact" style={{ background: 'linear-gradient(135deg,#0f1a3e 0%,#1a2a5e 50%,#0f1a3e 100%)', padding: '90px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#38EF7D', marginBottom: 12 }}>Get in touch</div>
            <h2 className="underline-draw" style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900, color: '#fff', display: 'inline-block', marginBottom: 12 }}>
              Send an Enquiry
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.58)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              We'll call you back within the hour. Come in, get your work done, and treat yourself to something fresh.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40 }}>

            {/* Form */}
            <div className="reveal-left" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24, padding: 36 }}>
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ marginBottom: 20 }}>
                  <label style={labelStyle}>Your Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Ravi Kumar" style={inputStyle} autoComplete="name"
                    onFocus={e => e.target.style.borderColor = '#E94560'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'} />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={labelStyle}>Phone Number *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="e.g. 9876543210" type="tel" style={inputStyle} autoComplete="tel"
                    onFocus={e => e.target.style.borderColor = '#E94560'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'} />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={labelStyle}>Service Needed</label>
                  <select name="service" value={form.service} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => e.target.style.borderColor = '#E94560'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}>
                    {SERVICES.map(s => <option key={s} value={s} style={{ background: '#1A1A2E' }}>{s}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={labelStyle}>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us what you need..." rows={4}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 110 }}
                    onFocus={e => e.target.style.borderColor = '#E94560'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'} />
                </div>
                <button type="submit" disabled={loading}
                  style={{ width: '100%', background: 'linear-gradient(135deg,#E94560,#ff7043)', color: '#fff', border: 'none', padding: '16px', borderRadius: 50, fontFamily: 'Poppins, sans-serif', fontSize: 15, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, opacity: loading ? 0.65 : 1, transition: 'all 0.3s' }}>
                  <i className={`ti ${loading ? 'ti-loader spin' : 'ti-send'}`} />
                  {loading ? 'Sending…' : 'Send Enquiry'}
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 28 }}>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 17, color: '#fff', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <i className="ti ti-headset" style={{ color: '#E94560' }} /> Reach Us Directly
                </div>
                {[
                  { icon: 'ti-phone', bg: 'rgba(233,69,96,0.18)', ic: '#E94560', label: 'Call us 10AM–9PM', val: '099495 42232', href: 'tel:09949542232' },
                  { icon: 'ti-brand-whatsapp', bg: 'rgba(37,211,102,0.18)', ic: '#25D366', label: 'Chat on WhatsApp', val: '+91 99495 42232', href: 'https://wa.me/919949542232', target: '_blank' },
                  { icon: 'ti-map-pin', bg: 'rgba(66,133,244,0.18)', ic: '#4285f4', label: 'Walk in anytime', val: 'Balaji Colony, Tirupati', href: 'https://www.google.com/maps/search/?api=1&query=Sri+Sai+Balaji+Xerox+Tirupati', target: '_blank' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <i className={`ti ${item.icon}`} style={{ color: item.ic, fontSize: 18 }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>{item.label}</div>
                      <a href={item.href} target={item.target} rel={item.target ? 'noreferrer' : undefined}
                        style={{ fontSize: 14, color: '#fff', fontWeight: 600, textDecoration: 'none' }}
                        onMouseEnter={e => e.target.style.color = '#E94560'}
                        onMouseLeave={e => e.target.style.color = '#fff'}>
                        {item.val}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: 'rgba(233,69,96,0.08)', border: '1px solid rgba(233,69,96,0.25)', borderRadius: 20, padding: 28 }}>
                <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.65, marginBottom: 20 }}>
                  "Come for the xerox. Stay for the juice. Leave with a smile."
                </p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <a href="tel:09949542232"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '11px 20px', borderRadius: 50, background: '#E94560', color: '#fff', fontFamily: 'Poppins, sans-serif', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
                    <i className="ti ti-phone" /> Call Now
                  </a>
                  <a href="https://wa.me/919949542232" target="_blank" rel="noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '11px 20px', borderRadius: 50, background: '#25D366', color: '#fff', fontFamily: 'Poppins, sans-serif', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
                    <i className="ti ti-brand-whatsapp" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ToastLocal {...toast} />
    </>
  )
}