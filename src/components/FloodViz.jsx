import { useEffect, useRef } from 'react'

export default function FloodViz() {
  const lottieRef = useRef(null)
  const fallbackRef = useRef(null)

  useEffect(() => {
    import('lottie-react').then(({ default: lottie }) => {
      const anim = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets5.lottiefiles.com/packages/lf20_x62chJ.json',
      })
      anim.addEventListener('data_ready', () => {
        if (fallbackRef.current) fallbackRef.current.style.display = 'none'
      })
    }).catch(() => {
      // fallback tetap tampil
    })
  }, [])

  return (
    <section className="py-16 px-4 section-bg-alt">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 reveal">
          <span className="section-label">Visualisasi</span>
          <h2 className="font-display text-3xl font-bold mt-3">
            Dinamika <span className="gradient-gold-text">Aliran Banjir</span>
          </h2>
        </div>

        <div className="reveal lottie-wrapper card-glass rounded-2xl p-4">
          <div ref={lottieRef} className="lottie-container"></div>

          {/* SVG Fallback */}
          <div ref={fallbackRef} className="flood-fallback">
            <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1570f5" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#0d3a8a" stopOpacity="0.9"/>
                </linearGradient>
              </defs>
              <rect width="400" height="180" fill="#0a1a2e" rx="12"/>
              <path d="M0,80 Q50,60 100,80 Q150,100 200,80 Q250,60 300,80 Q350,100 400,80 L400,180 L0,180Z" fill="url(#waterGrad)" opacity="0.7">
                <animate attributeName="d" dur="3s" repeatCount="indefinite"
                  values="M0,80 Q50,60 100,80 Q150,100 200,80 Q250,60 300,80 Q350,100 400,80 L400,180 L0,180Z;M0,90 Q50,70 100,90 Q150,110 200,90 Q250,70 300,90 Q350,110 400,90 L400,180 L0,180Z;M0,80 Q50,60 100,80 Q150,100 200,80 Q250,60 300,80 Q350,100 400,80 L400,180 L0,180Z"/>
              </path>
              <path d="M0,105 Q50,85 100,105 Q150,125 200,105 Q250,85 300,105 Q350,125 400,105 L400,180 L0,180Z" fill="url(#waterGrad)" opacity="0.45">
                <animate attributeName="d" dur="2.5s" repeatCount="indefinite"
                  values="M0,105 Q50,85 100,105 Q150,125 200,105 Q250,85 300,105 Q350,125 400,105 L400,180 L0,180Z;M0,115 Q50,95 100,115 Q150,135 200,115 Q250,95 300,115 Q350,135 400,115 L400,180 L0,180Z;M0,105 Q50,85 100,105 Q150,125 200,105 Q250,85 300,105 Q350,125 400,105 L400,180 L0,180Z"/>
              </path>
              <g stroke="#90caf9" strokeWidth="1.5" opacity="0.5">
                <line x1="60" y1="10" x2="57" y2="42">
                  <animate attributeName="y1" values="10;-32" dur="1.2s" repeatCount="indefinite"/>
                  <animate attributeName="y2" values="42;0" dur="1.2s" repeatCount="indefinite"/>
                </line>
                <line x1="160" y1="5" x2="157" y2="37">
                  <animate attributeName="y1" values="5;-37" dur="1.0s" repeatCount="indefinite"/>
                  <animate attributeName="y2" values="37;-5" dur="1.0s" repeatCount="indefinite"/>
                </line>
                <line x1="260" y1="15" x2="257" y2="47">
                  <animate attributeName="y1" values="15;-27" dur="1.4s" repeatCount="indefinite"/>
                  <animate attributeName="y2" values="47;5" dur="1.4s" repeatCount="indefinite"/>
                </line>
                <line x1="340" y1="8" x2="337" y2="40">
                  <animate attributeName="y1" values="8;-34" dur="1.1s" repeatCount="indefinite"/>
                  <animate attributeName="y2" values="40;-2" dur="1.1s" repeatCount="indefinite"/>
                </line>
              </g>
              <text x="200" y="46" textAnchor="middle" fill="#7a9bb5" fontSize="11" fontFamily="'DM Mono',monospace" letterSpacing="2">
                DINAMIKA ALIRAN BANJIR
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
