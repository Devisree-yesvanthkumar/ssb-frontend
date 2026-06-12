const services = [
  { icon: 'ti-copy',      title: 'Xerox & Printing',         desc: 'Black & white and color prints. Bulk orders welcome. Fast delivery every time.',             tag: '₹1 per page onwards' },
  { icon: 'ti-file-text', title: 'DTP',                      desc: 'Telugu & English, All documents typing, Telugu old documents translation.',                   tag: 'Budget friendly' },
  { icon: 'ti-license',   title: 'Stamp Papers',             desc: 'All denominations available on the spot. No need to go anywhere else.',                        tag: 'All denominations' },
  { icon: 'ti-id-badge',  title: 'ID & Passport Photos',     desc: 'Instant prints in all standard sizes — Aadhaar, passport, visa, and more.',                    tag: 'Instant ready' },
  { icon: 'ti-scan',      title: 'Scanning & Digitization',  desc: 'Convert your physical documents to high-quality digital files in minutes.',                     tag: 'All formats' },
  { icon: 'ti-book',      title: 'Binding & Lamination',     desc: 'Protect and present your documents, projects and reports professionally.',                       tag: 'All sizes' },
  { icon: 'ti-printer',   title: 'Color Xerox',              desc: 'Premium color photocopies for certificates, projects, reports and passportsize photos.',         tag: 'HD Quality'},
  { icon: 'ti-credit-card', title: 'PVC Adharcard',            desc: 'Premium Plastic PVC Aadhaar Card – Wallet Size & Durable.',                                      tag:  'HD quality'}
]
export default function Services() {
  return (
    <section id="services" style={{ background: 'linear-gradient(135deg,#1a1a2e 0%,#2d1b69 60%,#1a1a2e 100%)', padding: '90px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        <div className="reveal" style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FFD700', marginBottom: 12 }}>Print services</div>
          <h2 className="underline-draw" style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900, color: '#fff', display: 'inline-block', marginBottom: 12 }}>
            Everything You Need, Printed Right
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', maxWidth: 520, lineHeight: 1.7 }}>
            Professional printing and document services at the best prices in Tirupati.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {services.map((s, i) => (
            <div key={i} className="reveal"
              style={{ transitionDelay: `${i * 0.07}s`, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(232,146,10,0.2)', borderRadius: 20, padding: '32px 24px', transition: 'all 0.3s', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = '#FFD700'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(255,215,0,0.12)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(232,146,10,0.2)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <i className={`ti ${s.icon}`} style={{ fontSize: 26, color: '#FFD700' }} />
              </div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, marginBottom: 14 }}>{s.desc}</p>
              <span style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.25)', borderRadius: 50, fontSize: 11, color: 'rgba(255,215,0,0.9)', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                {s.tag}
              </span>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: 48 }}>
          <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: 'clamp(16px,2vw,20px)', color: 'rgba(255,215,0,0.8)', marginBottom: 20 }}>
            "Come, type your story. We'll pour you something sweet while you wait."
          </p>
          <a href="tel:09949542232"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 50, background: '#E94560', color: '#fff', fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600, textDecoration: 'none', boxShadow: '0 4px 24px rgba(233,69,96,0.4)' }}>
            <i className="ti ti-phone" /> Call to confirm service
          </a>
        </div>
      </div>
    </section>
  )
}