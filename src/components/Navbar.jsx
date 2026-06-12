import { useEffect, useState } from 'react'

const links = [
  { name: 'Why Us',   href: '#why' },
  { name: 'Printing', href: '#services' },
  { name: 'Juice Bar',href: '#juice' },
  { name: 'Reviews',  href: '#reviews' },
  { name: 'Hours',    href: '#hours' },
  { name: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 3, left: 0, right: 0, zIndex: 1000,
          padding: scrolled ? '12px 0' : '18px 0',
          background: scrolled ? 'rgba(26,26,46,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(233,69,96,0.35)' : 'none',
          transition: 'all 0.4s'
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <div style={{ width: 42, height: 42, borderRadius: '50%', background: '#E94560', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Playfair Display", serif', fontWeight: 900, fontSize: 15, color: '#fff', flexShrink: 0 }}>
              SSB
            </div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 15, color: '#fff', lineHeight: 1.1 }}>
              Sri Sai Balaji Xerox
              <span style={{ display: 'block', fontSize: 11, fontWeight: 400, color: 'rgba(255,255,255,0.55)' }}>Balaji Colony, Tirupati</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: 28 }}>
            {links.map(l => (
              <a key={l.name} href={l.href} style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.85)'}
              >{l.name}</a>
            ))}
            <a href="tel:09949542232"
              style={{ background: '#E94560', color: '#fff', padding: '10px 22px', borderRadius: 50, fontFamily: 'Poppins, sans-serif', fontSize: 13, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, boxShadow: '0 4px 20px rgba(233,69,96,0.4)' }}>
              <i className="ti ti-phone" /> Call Now
            </a>
          </div>

          {/* Hamburger */}
          <button className="md:hidden" onClick={() => setOpen(true)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5, padding: 4 }}>
            {[0,1,2].map(i => (
              <span key={i} style={{ display: 'block', width: 24, height: 2, background: '#fff', borderRadius: 2 }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(26,26,46,0.98)', backdropFilter: 'blur(20px)', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32 }}>
          <button onClick={() => setOpen(false)}
            style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', color: '#fff', fontSize: 28, cursor: 'pointer' }}>
            <i className="ti ti-x" />
          </button>
          {links.map(l => (
            <a key={l.name} href={l.href} onClick={() => setOpen(false)}
              style={{ color: '#fff', textDecoration: 'none', fontFamily: 'Poppins, sans-serif', fontSize: 22, fontWeight: 600 }}>
              {l.name}
            </a>
          ))}
          <a href="tel:09949542232" style={{ color: '#E94560', textDecoration: 'none', fontFamily: 'Poppins, sans-serif', fontSize: 20, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
            <i className="ti ti-phone" /> 099495 42232
          </a>
        </div>
      )}
    </>
  )
}