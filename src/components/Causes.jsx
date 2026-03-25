import { useState, useEffect } from 'react'
import { causesData } from '../data'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Causes() {
  const [flipped, setFlipped] = useState({})

  useEffect(() => {
    const cards = document.querySelectorAll('.cause-card')
    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out', delay: i * 0.07,
          scrollTrigger: { trigger: card, start: 'top 85%', once: true }
        }
        )
     })
  }, [])

  const toggleFlip = (i) => {
    setFlipped(prev => ({ ...prev, [i]: !prev[i] }))
  }

  return (
    <section id="causes" className="py-24 px-4 section-bg-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Analisis Penyebab</span>
          <h2 className="font-display section-heading mt-3">
            Mengapa Banjir<br/>
            <span className="gradient-gold-text">Terus Terjadi?</span>
          </h2>
          <p className="text-muted mt-4">Klik kartu untuk melihat penjelasan lebih detail</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {causesData.map((c, i) => (
            <div
              key={i}
              className={`cause-card card-glass rounded-2xl overflow-hidden reveal ${flipped[i] ? 'flipped' : ''}`}
              onClick={() => toggleFlip(i)}
            >
              <div className="card-front">
                <div className="cause-img">
                  <img
                    src={c.img}
                    alt={c.title}
                    style={{ objectPosition: c.imgPosition || 'center center' }}
                  />
                </div>
                <div className="p-6">
                  <div className="cause-icon-wrap">
                    <svg viewBox="0 0 48 48" fill="none" className="cause-svg-icon"
                      dangerouslySetInnerHTML={{ __html: c.svgPath }}
                    />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2">{c.title}</h3>
                  <p className="text-sm text-muted">{c.desc}</p>
                  <div className="mt-4 cause-flip-hint">
                    Klik untuk detail
                    <svg className="inline w-3 h-3 ml-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="card-back p-6">
                <div className="card-back-label">DETAIL ANALISIS</div>
                <p className="text-sm text-muted leading-relaxed">{c.detail}</p>
                <div className="mt-4 cause-flip-hint">
                  <svg className="inline w-3 h-3 mr-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                  Klik untuk kembali
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
