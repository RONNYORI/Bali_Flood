import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Subak from './components/Subak'
import Timeline from './components/Timeline'
import MapSection from './components/MapSection'
import Charts from './components/Charts'
import Causes from './components/Causes'
import TriHitaKarana from './components/TriHitaKarana'
import BeforeAfter from './components/BeforeAfter'
import FloodViz from './components/FloodViz'
import Solutions from './components/Solutions'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // ── Lenis Smooth Scroll ──────────────────────────────────
    let lenis
    import('@studio-freight/lenis').then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.3,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })

      // Sync Lenis dengan GSAP ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update)
      gsap.ticker.add(time => lenis.raf(time * 1000))
      gsap.ticker.lagSmoothing(0)

      // Progress bar
      lenis.on('scroll', ({ progress }) => {
        const bar = document.getElementById('progress-bar')
        if (bar) bar.style.width = (progress * 100) + '%'
      })

      // Nav active state
      lenis.on('scroll', () => {
        const sections = document.querySelectorAll('section[id]')
        let current = ''
        sections.forEach(section => {
          if (window.scrollY >= section.offsetTop - 100)
            current = section.getAttribute('id')
        })
        document.querySelectorAll('.nav-link').forEach(link => {
          link.style.color = link.getAttribute('href') === `#${current}` ? '#c9a84c' : ''
        })
      })

      function raf(time) { lenis.raf(time); requestAnimationFrame(raf) }
      requestAnimationFrame(raf)
    }).catch(() => {
      // Lenis tidak tersedia, scroll biasa tetap jalan
    })

    // ── Custom Cursor ────────────────────────────────────────
    const dot  = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    if (dot && ring) {
      let mouseX = 0, mouseY = 0
      let ringX  = 0, ringY  = 0

      window.addEventListener('mousemove', e => {
        mouseX = e.clientX; mouseY = e.clientY
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      })

      const animateRing = () => {
        ringX += (mouseX - ringX) * 0.12
        ringY += (mouseY - ringY) * 0.12
        ring.style.transform = `translate(${ringX}px, ${ringY}px)`
        requestAnimationFrame(animateRing)
      }
      animateRing()

      // Hover effect on interactive elements
      const interactives = document.querySelectorAll('a, button, .cause-card, .ba-handle')
      interactives.forEach(el => {
        el.addEventListener('mouseenter', () => ring.classList.add('cursor-hover'))
        el.addEventListener('mouseleave', () => ring.classList.remove('cursor-hover'))
      })
    }

    // ── Reveal Animations (global) ───────────────────────────
    // Delay sedikit agar semua komponen sudah mount
    const revealTimer = setTimeout(() => {
      gsap.utils.toArray('.reveal').forEach(el => {
        gsap.to(el, {
          opacity: 1, y: 0, duration: 1.0, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%', once: true }
        })
      })
    }, 300)

    return () => {
      clearTimeout(revealTimer)
      if (lenis) lenis.destroy()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div className="dark">
      {/* Progress bar */}
      <div id="progress-bar"></div>
      {/* Custom cursor */}
      <div id="cursor-dot"></div>
      <div id="cursor-ring"></div>

      <Navbar />
      <Hero />
      <Subak />
      <Timeline />
      <MapSection />
      <Charts />
      <Causes />
      <TriHitaKarana />
      <BeforeAfter />
      <FloodViz />
      <Solutions />
      <Footer />
    </div>
  )
}