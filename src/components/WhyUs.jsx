const cards = [
  { icon: '⚡', title: 'Lightning Fast',     body: 'In and out in minutes, not hours. We respect your time — always.',           quote: '"They are very fast with work"' },
  { icon: '🎓', title: 'Student Friendly',   body: 'Special discounts for students every single day. Bring your ID.',             quote: '"I really appreciate the discounts"' },
  { icon: '🤝', title: 'Respectful Staff',   body: 'Every customer treated with genuine care and respect.',                       quote: '"The staff treats customers respectfully"' },
  { icon: '📍', title: 'Central Location',   body: 'Right at Balaji Colony Bus Stop — easy to find, easy to reach.',             quote: '"This shop has become my regular place"' },
  { icon: '💰', title: 'Budget Prices',      body: 'Premium quality printing and fresh beverages at prices that don\'t hurt.',   quote: '"Nice place at affordable cost"' },
  { icon: '🥤', title: 'Unique Combo',       body: 'Only in Tirupati — print your documents and sip something fresh, one stop.', quote: '"Paperwork never tasted this good."' },
]

export default function WhyUs() {
  return (
    <section id="why" style={{ background: 'linear-gradient(135deg,#667EEA 0%,#764BA2 100%)', padding: '90px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FFD700', marginBottom: 12 }}>Why choose us</div>
          <h2 className="underline-draw" style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900, color: '#fff', display: 'inline-block' }}>
            Why Tirupati Chooses Sri Sai Balaji
          </h2>
          <p style={{ marginTop: 16, fontSize: 15, color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '16px auto 0' }}>
            Trusted by students, professionals and families across Tirupati.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {cards.map((c, i) => (
            <div key={i} className="reveal"
              style={{ transitionDelay: `${i * 0.08}s`, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(16px)', borderRadius: 20, padding: '32px 24px', textAlign: 'center', transition: 'all 0.3s', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.18)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>{c.icon}</div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 17, color: '#fff', marginBottom: 10 }}>{c.title}</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, marginBottom: 12 }}>{c.body}</p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 12, fontStyle: 'italic', fontSize: 12, color: 'rgba(255,255,255,0.48)' }}>
                {c.quote} — Google Review
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}