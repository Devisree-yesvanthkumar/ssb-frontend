import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Hero() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const scene    = new THREE.Scene()
    const camera   = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const count     = 800
    const positions = new Float32Array(count * 3)
    const colors    = new Float32Array(count * 3)
    const palette   = [
      [0.91, 0.27, 0.38],
      [1.00, 0.84, 0.00],
      [0.22, 0.94, 0.49],
      [0.00, 0.83, 1.00],
      [0.55, 0.29, 0.64],
    ]

    for (let i = 0; i < count; i++) {
      positions[i*3]   = (Math.random() - 0.5) * 14
      positions[i*3+1] = (Math.random() - 0.5) * 9
      positions[i*3+2] = (Math.random() - 0.5) * 6
      const c = palette[Math.floor(Math.random() * palette.length)]
      colors[i*3] = c[0]; colors[i*3+1] = c[1]; colors[i*3+2] = c[2]
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color',    new THREE.BufferAttribute(colors, 3))
    const mat    = new THREE.PointsMaterial({ size: 0.06, vertexColors: true, transparent: true, opacity: 0.85 })
    const points = new THREE.Points(geo, mat)
    scene.add(points)
    camera.position.z = 5

    let t = 0
    const origPos = Float32Array.from(positions)
    const posArr  = geo.attributes.position.array
    let rafId

    const animate = () => {
      rafId = requestAnimationFrame(animate)
      t += 0.003
      for (let i = 0; i < count; i++) {
        posArr[i*3+1] = origPos[i*3+1] + Math.sin(t + i * 0.1) * 0.09
      }
      geo.attributes.position.needsUpdate = true
      points.rotation.y = t * 0.08
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', onResize); renderer.dispose() }
  }, [])

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg,#1A1A2E 0%,#16213E 50%,#0F3460 100%)', overflow: 'hidden', position: 'relative' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }} />

      <div className="reveal" style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '120px 24px 80px', maxWidth: 900, margin: '0 auto' }}>

        {/* Badges */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', borderRadius: 50, background: 'rgba(233,69,96,0.18)', border: '1px solid rgba(233,69,96,0.45)', color: '#FF8FA3', fontFamily: 'Poppins, sans-serif', fontSize: 13, fontWeight: 600 }}>
            <i className="ti ti-printer" /> Print Services
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', borderRadius: 50, background: 'rgba(56,239,125,0.13)', border: '1px solid rgba(56,239,125,0.38)', color: '#6FFFA8', fontFamily: 'Poppins, sans-serif', fontSize: 13, fontWeight: 600 }}>
            <i className="ti ti-glass-full" /> Fresh Beverages
          </span>
        </div>

        {/* Headline */}
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(36px,7vw,78px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 14, color: '#fff' }}>
          Every Document.<br />
          <span style={{ color: '#FFD700' }}>Every Sip.</span><br />
          <span style={{ background: 'linear-gradient(90deg,#E94560,#FFD700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Perfectly Served.</span>
        </h1>

        <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: 'clamp(13px,2vw,17px)', color: 'rgba(255,255,255,0.62)', maxWidth: 680, margin: '0 auto 12px', lineHeight: 1.75 }}>
          Xerox · Printing · Telugu Typing · Stamp Papers · Fresh Sugarcane Juice · Milkshakes & Ice Creams<br />— All under one roof in Balaji Colony, Tirupati.
        </p>

        <p style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', color: 'rgba(255,215,0,0.8)', fontSize: 'clamp(15px,2.2vw,20px)', marginBottom: 36 }}>
          "Walk in to print, stay for the sip."
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 32 }}>
          <a href="tel:09949542232"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 50, background: '#E94560', color: '#fff', fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600, textDecoration: 'none', boxShadow: '0 4px 24px rgba(233,69,96,0.45)' }}>
            <i className="ti ti-phone" /> Call Now
          </a>
          <a href="https://wa.me/919949542232?text=Hello%20Sri%20Sai%20Balaji%20Xerox" target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 50, background: '#25D366', color: '#fff', fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
            <i className="ti ti-brand-whatsapp" /> WhatsApp
          </a>
          <a href="https://www.google.com/maps/search/?api=1&query=Sri+Sai+Balaji+Xerox+Tirupati" target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', borderRadius: 50, background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.45)', fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
            <i className="ti ti-map-pin" /> Directions
          </a>
        </div>

        {/* Rating */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', backdropFilter: 'blur(10px)', padding: '10px 22px', borderRadius: 50 }}>
          <span style={{ color: '#FFD700', fontSize: 16, letterSpacing: 2 }}>★★★★★</span>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>4.8 · 12 Google Reviews · Tirupati's Favourite</span>
        </div>
      </div>
    </section>
  )
}