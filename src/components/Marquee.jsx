const items = [
  'Print. Sip. Done', 
  'Fast Service', 
  'Student Discounts', 
  'Telugu Typing',
  'Stamp Papers', 
  'Fresh Sugarcane', 
  'Milkshakes & Ice Creams',
  'Open 10AM–9PM', 
  'Call 099495 42232'
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div style={{ background: '#E94560', padding: '14px 0', overflow: 'hidden' }}>
      <div className="marquee-track" style={{ display: 'flex', width: 'max-content' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ 
            whiteSpace: 'nowrap', 
            padding: '0 32px', 
            fontFamily: 'Poppins, sans-serif', 
            fontSize: 13, 
            fontWeight: 600, 
            color: '#fff', 
            letterSpacing: '0.05em' 
          }}>
            ✦&nbsp;&nbsp;{item}
          </span>
        ))}
      </div>
    </div>
  )
}