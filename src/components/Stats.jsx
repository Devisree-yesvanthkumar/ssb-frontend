import { useEffect, useRef, useState } from 'react'

function Counter({ target, suffix = '+', label }) {
  const [count, setCount] = useState(0)
  const ref = useRef()
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const step = Math.ceil(target / 60)
        const timer = setInterval(() => {
          setCount(c => {
            if (c + step >= target) { clearInterval(timer); return target }
            return c + step
          })
        }, 25)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return (
    <div ref={ref} className="reveal" style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(34px,5vw,52px)', fontWeight: 900, background: 'linear-gradient(135deg,#E94560,#FFD700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.58)', marginTop: 6, fontWeight: 500 }}>{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <div style={{ background: 'linear-gradient(90deg,#1A1A2E,#16213E)', padding: '64px 0', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24 }}>
        <Counter target={5000} suffix="+" label="Documents Printed" />
        <Counter target={1000} suffix="+" label="Happy Customers" />
        <div className="reveal" style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(34px,5vw,52px)', fontWeight: 900, background: 'linear-gradient(135deg,#E94560,#FFD700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>4.8★</div>
          <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.58)', marginTop: 6, fontWeight: 500 }}>Google Rating</div>
        </div>
        <Counter target={8} suffix="+" label="Years of Service" />
      </div>
    </div>
  )
}