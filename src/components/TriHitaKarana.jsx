import { useEffect } from 'react'
import { thkPillarsData } from '../data'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TriHitaKarana() {
  useEffect(() => {
    // Pillar stagger animation
    const cards = document.querySelectorAll('.thk-pillar-card')
    cards.forEach((card, i) => {
     gsap.fromTo(card, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: i * 0.15, scrollTrigger: { trigger: card, start: 'top 85%', once: true } } )
    })

    // THK symbol scroll rotation
    const thkSvg = document.querySelector('.thk-svg')
    if (thkSvg) {
      ScrollTrigger.create({
        trigger: '#tri-hita',
        start: 'top center',
        end: 'bottom center',
        onUpdate: self => {
          thkSvg.style.transform = `rotate(${self.progress * 120}deg)`
        }
      })
    }
  }, [])

  return (
    <section id="tri-hita" className="py-28 px-4 tri-hita-section">
      <div className="tri-hita-bg-pattern"></div>
      <div className="max-w-6xl mx-auto relative z-10">

        <div className="text-center mb-16 reveal">
          <span className="section-label gold">Filosofi Bali</span>
          <h2 className="font-display section-heading mt-3">
            Air, Alam, dan<br/>
            <span className="gradient-gold-text">Keseimbangan Bali</span>
          </h2>
          <div className="ornament-divider mt-6">
            <div className="ornament-line"></div>
            <svg className="ornament-lotus" viewBox="0 0 80 30" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 4 Q28 15 14 21 Q28 18 40 27 Q52 18 66 21 Q52 15 40 4Z" fill="none" stroke="#c9a84c" strokeWidth="0.8" opacity="0.7"/>
              <circle cx="40" cy="15" r="4" fill="none" stroke="#c9a84c" strokeWidth="0.8" opacity="0.7"/>
            </svg>
            <div className="ornament-line"></div>
          </div>
        </div>

        {/* Intro card */}
        <div className="tri-hita-intro card-glass rounded-3xl overflow-hidden mb-16 reveal">
          <div className="tri-hita-intro-grid">
            <div className="tri-hita-intro-img">
              <img src="/images/tri-hita-karana.jpg" alt="Tri Hita Karana Bali" />
            </div>
            <div className="p-8 sm:p-12">
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
                <span className="gradient-gold-text">Tri Hita Karana</span>
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                <em>Tri Hita Karana</em> — "tiga penyebab kebaikan" — adalah filosofi Bali kuno yang mengajarkan bahwa keharmonisan lahir dari keseimbangan tiga hubungan fundamental antara manusia, alam, dan spiritualitas.
              </p>
              <p className="text-muted leading-relaxed">
                Ketika salah satu pilar ini terganggu, seluruh sistem kehidupan ikut terdampak. Banjir yang terjadi saat ini bukan sekadar bencana alam, melainkan cerminan dari ketidakseimbangan yang semakin dalam.
              </p>
            </div>
          </div>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-stretch">
          {thkPillarsData.map((p, i) => (
            <div key={i} className="thk-pillar-card h-full reveal">
        {/* Header dengan gambar */}
        <div className={`thk-pillar-header ${p.headerClass}`}>
          <img src={p.img} alt={p.sanskrit} className="thk-pillar-img" />
            <div className="thk-pillar-overlay">
              <div className="thk-pillar-icon-wrap">
               <svg viewBox="0 0 40 40" fill="none" className="thk-pillar-svg"
                dangerouslySetInnerHTML={{ __html: p.svgPath }}
              />
              </div>
            <div className="thk-pillar-number">{p.number}</div>
           <div className="thk-pillar-sanskrit">{p.sanskrit}</div>
          </div>
        </div>
          <div className="thk-pillar-body p-6">
            <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted mb-4">{p.desc}</p>
            <div className="thk-impact">
            <div className="thk-impact-label">Dampak Ketidakseimbangan</div>
              <p className="text-xs text-muted">{p.impact}</p>
            </div>
          </div>
        </div>
          ))}
        </div>

        {/* Chain */}
        <div className="thk-imbalance card-glass rounded-3xl p-8 reveal">
          <h3 className="font-display text-2xl font-bold text-center mb-8">
            Ketidakseimbangan yang <span className="gradient-gold-text">Memperparah Banjir</span>
          </h3>
          <div className="thk-chain">
            <div className="thk-chain-item">
              <div className="thk-chain-icon-wrap">
                <svg viewBox="0 0 32 32" fill="none" className="chain-svg">
                  <rect x="4" y="14" width="10" height="14" stroke="#c9a84c" strokeWidth="1.4"/>
                  <polygon points="9,8 18,14 0,14" stroke="#c9a84c" strokeWidth="1.4" fill="none"/>
                  <rect x="17" y="8" width="10" height="20" stroke="#c9a84c" strokeWidth="1.4"/>
                </svg>
              </div>
              <div className="thk-chain-text">Ekspansi<br/>Pariwisata</div>
            </div>

            <div className="thk-chain-arrow">
              <svg viewBox="0 0 24 12" fill="none" width="24">
                <path d="M0 6h20M14 1l6 5-6 5" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
              </svg>
            </div>

            <div className="thk-chain-item">
              <div className="thk-chain-icon-wrap">
                <svg viewBox="0 0 32 32" fill="none" className="chain-svg">
                  <path d="M16 28 Q16 16 4 6 Q16 8 28 6 Q16 16 16 28Z" stroke="#c9a84c" strokeWidth="1.4" fill="none"/>
                  <line x1="16" y1="28" x2="16" y2="18" stroke="#c9a84c" strokeWidth="1.4"/>
                  <line x1="4" y1="30" x2="28" y2="30" stroke="#c9a84c" strokeWidth="1.4" strokeDasharray="2 2"/>
                </svg>
              </div>
              <div className="thk-chain-text">Subak<br/>Menghilang</div>
            </div>

            <div className="thk-chain-arrow">
              <svg viewBox="0 0 24 12" fill="none" width="24">
                <path d="M0 6h20M14 1l6 5-6 5" stroke="#c9a84c" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
              </svg>
            </div>

            <div className="thk-chain-item">
              <div className="thk-chain-icon-wrap">
                <svg viewBox="0 0 32 32" fill="none" className="chain-svg">
                  <path d="M4 20 Q8 14 12 20 Q16 26 20 20 Q24 14 28 20" stroke="#59b3ff" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
                  <path d="M4 13 Q8 7 12 13 Q16 19 20 13 Q24 7 28 13" stroke="#59b3ff" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.45"/>
                </svg>
              </div>
              <div className="thk-chain-text">Sistem Air<br/>Rusak</div>
            </div>

            <div className="thk-chain-arrow">
              <svg viewBox="0 0 24 12" fill="none" width="24">
                <path d="M0 6h20M14 1l6 5-6 5" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
              </svg>
            </div>

            <div className="thk-chain-item thk-chain-final">
              <div className="thk-chain-icon-wrap">
                <svg viewBox="0 0 32 32" fill="none" className="chain-svg">
                  <rect x="2" y="18" width="28" height="12" rx="2" fill="rgba(239,68,68,0.12)" stroke="#ef4444" strokeWidth="1.4"/>
                  <path d="M2 18 Q8 10 16 18 Q24 26 32 18" stroke="#ef4444" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
                  <line x1="10" y1="11" x2="8" y2="5" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round"/>
                  <line x1="16" y1="9" x2="16" y2="3" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round"/>
                  <line x1="22" y1="11" x2="24" y2="5" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="thk-chain-text">Banjir<br/>Makin Parah</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
