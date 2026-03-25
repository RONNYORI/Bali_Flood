import { subakStats } from '../data'

export default function Subak() {
  return (
    <>
      <section className="py-16 px-4 subak-section">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="subak-badge">
            <svg className="w-3.5 h-3.5 mr-2" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.6">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Sistem Subak
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-4 mb-6">
            Warisan Leluhur yang <span className="gradient-gold-text">Mulai Terabaikan</span>
          </h2>

          <p className="text-muted leading-relaxed max-w-2xl mx-auto mb-8">
            Selama berabad-abad, sistem irigasi <em>Subak</em> — diakui UNESCO sejak 2012 — menjaga keseimbangan air di Bali melalui jaringan saluran yang cerdas dan filosofi gotong royong. Namun ekspansi pariwisata dan urbanisasi kini mengancam keberadaannya.
          </p>

          <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto">
            {subakStats.map((s, i) => (
              <div key={i} className="subak-stat">
                <div className="subak-number">{s.value}</div>
                <div className="subak-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider">
        <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,20 Q180,0 360,20 Q540,40 720,20 Q900,0 1080,20 Q1260,40 1440,20 L1440,40 L0,40Z" fill="#0a1520"/>
        </svg>
        <div className="divider-ornament">
          <span className="div-line"></span>
          <svg viewBox="0 0 80 20" xmlns="http://www.w3.org/2000/svg" width="80">
            <path d="M0,10 Q20,0 40,10 Q60,20 80,10" stroke="#c9a84c" strokeWidth="0.8" fill="none" opacity="0.45"/>
            <circle cx="40" cy="10" r="3" fill="#c9a84c" opacity="0.35"/>
            <circle cx="20" cy="10" r="2" fill="#c9a84c" opacity="0.25"/>
            <circle cx="60" cy="10" r="2" fill="#c9a84c" opacity="0.25"/>
          </svg>
          <span className="div-line"></span>
        </div>
      </div>
    </>
  )
}
