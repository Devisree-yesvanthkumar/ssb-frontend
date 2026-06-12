const reviews = [
  { initial: 'R', name: 'Rizwan Mohammad', tag: 'Local Guide · 54 reviews', text: 'Nice place for xerox, printing and juice at affordable cost. Very satisfied with the service every time I visit.', color: '#E94560' },
  { initial: 'B', name: 'Balu Virat',       tag: 'Customer · Tirupati',     text: 'Good service in all works specially documents Telugu typing and xerox and available stamp papers also. Highly recommended!', color: '#764BA2' },
  { initial: 'Y', name: 'Yadala Chalapathi',tag: 'Customer · Best quality', text: 'This shop has become my regular place for all xerox and printing work. They are very fast and the staff treats customers respectfully.', color: '#2D9B6F' },
]

export default function Reviews() {
  return (
    <section id="reviews" style={{ background: 'linear-gradient(135deg,#F7971E 0%,#FFD200 100%)', padding: '90px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c4780a', marginBottom: 12 }}>Customer reviews</div>
          <h2 className="underline-draw" style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900, color: '#1A1A2E', display: 'inline-block' }}>
            What Our Customers Say
          </h2>
          <p style={{ marginTop: 12, fontSize: 15, color: 'rgba(26,26,46,0.62)' }}>Real words from real customers. No filters.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {reviews.map((r, i) => (
            <div key={i} className="reveal"
              style={{ transitionDelay: `${i * 0.1}s`, background: '#fff', borderRadius: 20, padding: 28, boxShadow: '0 8px 40px rgba(0,0,0,0.1)', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 60px rgba(0,0,0,0.18)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.1)' }}
            >
              <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 64, color: 'rgba(233,69,96,0.13)', lineHeight: 0.8, marginBottom: 14 }}>"</div>
              <div style={{ color: '#F7971E', fontSize: 14, letterSpacing: 2, marginBottom: 12 }}>★★★★★</div>
              <p style={{ fontSize: 14, color: '#333', lineHeight: 1.75, marginBottom: 18, fontStyle: 'italic' }}>{r.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: r.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 15, color: '#fff', flexShrink: 0 }}>{r.initial}</div>
                <div>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 14, color: '#1A1A2E' }}>{r.name}</div>
                  <div style={{ fontSize: 11, color: '#888' }}>{r.tag}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: 36 }}>
          <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: 'clamp(15px,2vw,20px)', color: 'rgba(26,26,46,0.65)' }}>
            "One stop. Zero stress. Full glass."
          </p>
        </div>
      </div>
    </section>
  )
}