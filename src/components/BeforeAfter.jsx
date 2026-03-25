import { useEffect, useRef } from 'react'

export default function BeforeAfter() {
  const containerRef  = useRef(null)
  const afterDivRef   = useRef(null)
  const divLineRef    = useRef(null)
  const handleRef     = useRef(null)
  const labelLeftRef  = useRef(null)
  const labelRightRef = useRef(null)
  const dragging      = useRef(false)

  const setPos = (clientX) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const pct  = Math.min(Math.max((clientX - rect.left) / rect.width, 0.02), 0.98)
    const pctStr = (pct * 100) + '%'

    afterDivRef.current.style.clipPath = `inset(0 ${(1 - pct) * 100}% 0 0)`
    divLineRef.current.style.left      = pctStr
    handleRef.current.style.left       = pctStr

    // Label SEBELUM: hanya muncul saat slider di ujung KANAN (pct > 0.85)
    // artinya gambar "sebelum" hampir full terlihat
    if (labelLeftRef.current) {
      labelLeftRef.current.style.opacity = pct > 0.85 ? '1' : '0'
    }

    // Label SESUDAH: hanya muncul saat slider di ujung KIRI (pct < 0.15)
    // artinya gambar "sesudah" hampir full terlihat
    if (labelRightRef.current) {
      labelRightRef.current.style.opacity = pct < 0.15 ? '1' : '0'
    }
  }

  useEffect(() => {
    setTimeout(() => {
      const container = containerRef.current
      if (!container) return
      const rect = container.getBoundingClientRect()
      setPos(rect.left + rect.width / 2)
    }, 100)

    const onMouseMove = (e) => { if (dragging.current) setPos(e.clientX) }
    const onMouseUp   = () => { dragging.current = false }
    const onTouchMove = (e) => { if (dragging.current) setPos(e.touches[0].clientX) }
    const onTouchEnd  = () => { dragging.current = false }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  return (
    <section id="before-after" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 reveal">
          <span className="section-label">Perbandingan Visual</span>
          <h2 className="font-display section-heading mt-3">
            Sebelum &amp;<br/>
            <span className="gradient-gold-text">Sesudah Banjir</span>
          </h2>
          <p className="text-muted mt-4">Geser slider untuk melihat perbandingan kondisi sebelum dan sesudah banjir</p>
        </div>

        <div className="reveal">
          <div
            className="ba-container"
            ref={containerRef}
            onMouseDown={(e) => { dragging.current = true; setPos(e.clientX) }}
            onTouchStart={(e) => { dragging.current = true; setPos(e.touches[0].clientX) }}
          >
            <div className="ba-before">
              <img src="/images/before-bali-normal.jpg" alt="Kondisi sebelum banjir" className="ba-img" />
            </div>

            <div className="ba-after" ref={afterDivRef}>
              <img src="/images/after-bali-flood.jpg" alt="Kondisi sesudah banjir" className="ba-img" />
            </div>

            <div className="ba-divider" ref={divLineRef}></div>

            <div className="ba-handle" ref={handleRef}>
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path d="M7 5L3 10L7 15" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round"/>
                <path d="M13 5L17 10L13 15" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Label SEBELUM — muncul hanya saat slider di ujung kanan */}
            <div
              className="ba-label ba-label-left"
              ref={labelLeftRef}
              style={{ opacity: 0 }}
            >
              SESUDAH
            </div>

            {/* Label SESUDAH — muncul hanya saat slider di ujung kiri */}
            <div
              className="ba-label ba-label-right"
              ref={labelRightRef}
              style={{ opacity: 0 }}
            >
              SEBELUM
            </div>
          </div>

          <p className="text-center text-xs text-muted mt-3">
            Perbandingan kondisi kawasan sebelum dan sesudah banjir
          </p>
        </div>
      </div>
    </section>
  )
}