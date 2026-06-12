export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(135deg,#0a0a1a 0%,#1a0d2e 100%)', padding: '60px 0 24px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ width: 42, height: 42, borderRadius: '50%', background: '#E94560', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Playfair Display", serif', fontWeight: 900, fontSize: 14, color: '#fff', marginBottom: 16 }}>SSB</div>
            <div style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: 18, color: 'rgba(255,215,0,0.85)', marginBottom: 10 }}>Print. Sip. Done.</div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.42)', lineHeight: 1.75, maxWidth: 280 }}>
              Tirupati's most trusted print shop and fresh juice corner. Serving the community with speed, quality and a smile.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 16 }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Xerox & Printing','Telugu Typing','Stamp Papers','ID Photos','Fresh Juices','Ice Creams'].map(s => (
                <li key={s}><a href="#services" style={{ color: 'rgba(255,255,255,0.62)', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#E94560'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.62)'}>{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 16 }}>Contact</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: '📞 099495 42232', href: 'tel:09949542232' },
                { label: '💬 WhatsApp Us',  href: 'https://wa.me/919949542232', target: '_blank' },
                { label: '📍 Get Directions', href: 'https://www.google.com/maps/search/?api=1&query=Sri+Sai+Balaji+Xerox+Tirupati', target: '_blank' },
                { label: '🕙 Open 10AM–9PM', href: '#hours' },
              ].map(item => (
                <li key={item.label}>
                  <a href={item.href} target={item.target} rel={item.target ? 'noreferrer' : undefined}
                    style={{ color: 'rgba(255,255,255,0.62)', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#E94560'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.62)'}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.32)', fontFamily: 'Poppins, sans-serif' }}>
            © 2025 Sri Sai Balaji Xerox · 1-2-190/1, Balaji Colony, Tirupati, AP 517501
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.32)', fontFamily: 'Poppins, sans-serif' }}>
            Made with ❤️ for Tirupati
          </p>
        </div>
      </div>
    </footer>
  )
}