const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

const hours = [
  { day: 'Monday',    time: '10:00 AM – 09:00 PM' },
  { day: 'Tuesday',   time: '10:00 AM – 09:00 PM' },
  { day: 'Wednesday', time: '10:00 AM – 09:00 PM' },
  { day: 'Thursday',  time: '10:00 AM – 09:00 PM' },
  { day: 'Friday',    time: '10:00 AM – 09:00 PM' },
  { day: 'Saturday',  time: '10:00 AM – 09:00 PM' },
  { day: 'Sunday',    time: '10:00 AM – 09:00 PM' },
]

export default function Hours() {
  const today = DAYS[new Date().getDay()]

  const card = { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: 32 }

  return (
    <section id="hours" style={{ background: 'linear-gradient(135deg,#1a1a2e 0%,#16213E 100%)', padding: '90px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        <div className="reveal" style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FFD700', marginBottom: 12 }}>Hours & location</div>
          <h2 className="underline-draw" style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900, color: '#fff', display: 'inline-block' }}>
            Find Us & Plan Your Visit
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>

          {/* Hours table */}
          <div className="reveal-left" style={card}>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <i className="ti ti-clock" style={{ color: '#FFD700' }} /> Working Hours
            </h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {hours.map(row => {
                  const isToday  = row.day === today
                  const isClosed = row.closed
                  return (
                    <tr key={row.day} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <td style={{ padding: '12px 0', fontFamily: 'Poppins, sans-serif', fontSize: 14, color: isClosed ? 'rgba(255,100,100,0.7)' : isToday ? '#FFD700' : 'rgba(255,255,255,0.6)' }}>
                        {row.day}{isToday && ' ← Today'}
                      </td>
                      <td style={{ padding: '12px 0', textAlign: 'right', fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600, color: isClosed ? 'rgba(255,100,100,0.7)' : isToday ? '#FFD700' : '#fff' }}>
                        {row.time}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <div style={{ marginTop: 18, padding: '12px 16px', background: 'rgba(255,215,0,0.07)', borderLeft: '3px solid #FFD700', borderRadius: 8, fontSize: 12, color: 'rgba(255,255,255,0.58)', lineHeight: 1.65 }}>
              <i className="ti ti-info-circle" /> Peak hours 12:00 PM – 3:00 PM. Visit early morning or evening for faster service.
            </div>
          </div>

          {/* Location */}
          <div className="reveal-right" style={{ ...card, display: 'flex', flexDirection: 'column', gap: 18 }}>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 16, color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
              <i className="ti ti-map-pin" style={{ color: '#E94560' }} /> Locate Us
            </h3>

            {[
              { icon: 'ti-map-pin', color: '#E94560', label: 'Address', value: '1-2-190, Police Quarters Lane, Balaji Colony\n Prakasam Road, Tirupati-517501, Andhra Pradesh', isText: true },
              { icon: 'ti-phone',   color: '#E94560', label: 'Phone',   value: '099495 42232', href: 'tel:09949542232' },
              { icon: 'ti-brand-whatsapp', color: '#25D366', label: 'WhatsApp', value: '+91 99495 42232', href: 'https://wa.me/919949542232', target: '_blank' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: `${item.color}22`, border: `1px solid ${item.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className={`ti ${item.icon}`} style={{ fontSize: 20, color: item.color }} />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontFamily: 'Poppins, sans-serif', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 3 }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} target={item.target} rel={item.target ? 'noreferrer' : undefined} style={{ fontSize: 14, color: '#E94560', fontWeight: 600, textDecoration: 'none' }}>{item.value}</a>
                    : <div style={{ fontSize: 14, color: '#fff', lineHeight: 1.55, whiteSpace: 'pre-line' }}>{item.value}</div>
                  }
                </div>
              </div>
            ))}

            {/* Static map image via OpenStreetMap — no API key, no blocked content */}
            <a
              href="https://maps.app.goo.gl/zVa5VqQato2W1Pkz9"
              target="_blank" rel="noreferrer"
              style={{ display: 'block', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', position: 'relative', textDecoration: 'none' }}
            >
              <img
                src="https://maps.googleapis.com/maps/api/staticmap?center=Balaji+Colony,Tirupati,Andhra+Pradesh&zoom=15&size=600x200&maptype=roadmap&markers=color:red%7CBalaji+Colony,Tirupati&style=element:geometry%7Ccolor:0x242f3e&style=element:labels.text.fill%7Ccolor:0x746855&key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
                alt="Map location"
                style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }}
                onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
              />
              {/* Fallback map card when image fails */}
              <div style={{ display: 'none', height: 160, background: 'linear-gradient(135deg,#1a2a4a,#0f3460)', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 10 }}>
                <i className="ti ti-map-2" style={{ fontSize: 40, color: '#E94560' }} />
                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>Balaji Colony, Tirupati</span>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 11, color: '#E94560', fontWeight: 600 }}>Tap to open in Google Maps →</span>
              </div>
              <div style={{ position: 'absolute', bottom: 10, right: 10, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', padding: '6px 14px', borderRadius: 50, fontFamily: 'Poppins, sans-serif', fontSize: 12, color: '#fff', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                <i className="ti ti-external-link" style={{ fontSize: 13 }} /> Open in Maps
              </div>
            </a>

            <a href="https://maps.app.goo.gl/zVa5VqQato2W1Pkz9"
              target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#E94560,#ff8c42)', color: '#fff', padding: '14px 28px', borderRadius: 50, fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 20px rgba(233,69,96,0.4)', alignSelf: 'flex-start' }}>
              <i className="ti ti-navigation" /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}