import { useEffect, useRef } from 'react'
import { heroStats } from '../data'
import { gsap } from 'gsap'

export default function Hero() {
  const statsRef = useRef([])

  useEffect(() => {
    // Rain effect
    const rainContainer = document.getElementById('rain')
    if (rainContainer) {
      for (let i = 0; i < 80; i++) {
        const drop = document.createElement('div')
        drop.className = 'rain-drop'
        drop.style.left = Math.random() * 100 + '%'
        drop.style.animationDuration = (0.4 + Math.random() * 0.6) + 's'
        drop.style.animationDelay = (Math.random() * 2) + 's'
        rainContainer.appendChild(drop)
      }
    }

    // GSAP hero animations
    const heroTl = gsap.timeline({ delay: 0.3 })
    heroTl
      .to('#hero-tag',      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0)
      .to('#hero-title',    { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' }, 0.2)
      .to('#hero-ornament', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.7)
      .to('#hero-sub',      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.9)
      .to('#hero-cta',      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 1.1)
      .to('#hero-stats',    { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 1.3)

    // Counter animations
    heroStats.forEach((s, i) => {
      const el = statsRef.current[i]
      if (!el) return
      gsap.to({ val: 0 }, {
        val: s.target,
        duration: 2.2,
        delay: 1.5,
        ease: 'power2.out',
        onUpdate: function () {
          el.textContent = Math.floor(this.targets()[0].val).toLocaleString('id')
        }
      })
    })
  }, [])

  return (
    <section id="hero">
      <div className="hero-bg">
        <img
          src="public/images/hero-bali-rice-terrace-rain.jpg"
          alt="Bali rice terraces in rain"
          className="hero-bg-img"
        />
      </div>

      <div className="rain-container" id="rain"></div>
      <div className="batik-overlay"></div>
      <div className="hero-overlay"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto hero-content">

        <div id="hero-tag" className="inline-flex items-center gap-2 px-5 py-2 rounded-full card-glass text-xs font-mono text-bali-gold mb-8 hero-fade">
          <span className="w-1.5 h-1.5 rounded-full bg-bali-gold animate-pulse"></span>
          DATA STORYTELLING · BALI 2024
          <span className="w-1.5 h-1.5 rounded-full bg-bali-gold animate-pulse"></span>
        </div>

        <h1 id="hero-title" className="font-display hero-headline font-bold leading-none mb-6 hero-fade">
          <span className="block gradient-gold-text">POLEMIK</span>
          <span className="block text-white/90">BANJIR</span>
          <span className="block italic text-flood-300">di Bali</span>
        </h1>

        <div id="hero-ornament" className="ornament-divider hero-fade">
          <div className="ornament-line"></div>
          <svg className="ornament-lotus" viewBox="0 0 60 28" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 4 Q20 13 10 18 Q20 16 30 23 Q40 16 50 18 Q40 13 30 4Z" fill="none" stroke="#c9a84c" strokeWidth="0.8" opacity="0.6"/>
            <circle cx="30" cy="13" r="3" fill="none" stroke="#c9a84c" strokeWidth="0.8" opacity="0.6"/>
          </svg>
          <div className="ornament-line"></div>
        </div>

        <p id="hero-sub" className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-10 hero-fade">
          Sebuah eksplorasi data mendalam tentang bencana banjir yang terus berulang di Pulau Dewata — dari penyebab struktural hingga dampak sosial yang semakin kompleks.
        </p>

        <div id="hero-cta" className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-fade">
          <a href="#timeline" className="btn-primary">
            Jelajahi Cerita
            <svg className="inline w-4 h-4 ml-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#data" className="btn-secondary">Lihat Data</a>
        </div>

        {/* Hero stats */}
        <div id="hero-stats" className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto hero-fade">
          {heroStats.map((s, i) => (
            <div key={i} className="stat-card">
              <div
                className="font-display text-4xl font-bold gradient-gold-text stat-number"
                ref={el => statsRef.current[i] = el}
              >
                0
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="wave-anim">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C240,70 480,10 720,40 C960,70 1200,10 1440,40 L1440,80 L0,80Z" fill="#060c14" opacity="0.9"/>
          <path d="M0,55 C200,75 440,25 720,55 C1000,80 1240,35 1440,55 L1440,80 L0,80Z" fill="#060c14"/>
        </svg>
      </div>
    </section>
  )
}
