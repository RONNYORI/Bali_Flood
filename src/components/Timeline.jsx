import { useEffect } from 'react'
import { timelineData } from '../data'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Timeline() {
  useEffect(() => {
    const items = document.querySelectorAll('.timeline-item')
    items.forEach((item, i) => {
      gsap.set(item, { x: i % 2 === 0 ? -70 : 70, opacity: 0 })
      gsap.to(item, {
        opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: item, start: 'top 82%', once: true }
      })
    })
  }, [])

  return (
    <section id="timeline" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Rekam Jejak</span>
          <h2 className="font-display section-heading mt-3">
            Timeline Kejadian<br/>
            <span className="gradient-gold-text">Banjir di Bali</span>
          </h2>
        </div>

        <div className="relative" id="timeline-container">
          <div className="timeline-line"></div>

          {timelineData.map((item, i) => {
            const isRight   = item.side === 'right'
            const sideClass = isRight
              ? 'md:justify-end md:pr-[calc(50%+28px)]'
              : 'md:justify-start md:pl-[calc(50%+28px)]'

            return (
              <div key={i} className={`timeline-item relative flex ${sideClass} mb-16`}>
                <div className={item.critical ? 'timeline-dot timeline-dot-critical' : 'timeline-dot'}></div>

                <div className={`card-glass timeline-card ${item.critical ? 'timeline-card-critical' : ''} rounded-2xl overflow-hidden max-w-sm w-full`}>
                  <div className="timeline-img">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="p-6">
                    <div className={item.critical ? 'timeline-date text-red-400' : 'timeline-date'}>
                      {item.date}
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-sm text-muted">{item.desc}</p>
                    <div className="mt-4 flex gap-2 flex-wrap">
                      {item.tags.map((tag, j) => (
                        <span key={j} className={`tag tag-${tag.type}`}>{tag.label}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
