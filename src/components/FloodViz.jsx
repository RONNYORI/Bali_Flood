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
    }).catch(() => {})
  }, [])

  return (
    <section className="section-bg-alt" style={{ padding: 0, overflow: 'hidden' }}>
      <div
        className="reveal"
        style={{ width: '100vw', height: '500px', position: 'relative', left: '50%', transform: 'translateX(-50%)' }}
      >
        <div ref={lottieRef} style={{ width: '100%', height: '100%' }}></div>

        <div ref={fallbackRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          <svg
            viewBox="0 0 1440 500"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            <defs>
              <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#020810"/>
                <stop offset="100%" stopColor="#061428"/>
              </linearGradient>
              <linearGradient id="waterDeep" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0d58e1" stopOpacity="0.7"/>
                <stop offset="100%" stopColor="#040d2a" stopOpacity="1"/>
              </linearGradient>
              <linearGradient id="waterMid" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1570f5" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#0a1f5c" stopOpacity="0.9"/>
              </linearGradient>
              <linearGradient id="waterFront" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2e91ff" stopOpacity="0.9"/>
                <stop offset="100%" stopColor="#0d3a8a" stopOpacity="1"/>
              </linearGradient>
            </defs>

            {/* Background */}
            <rect width="1440" height="500" fill="url(#skyGrad)"/>

            {/* Bintang */}
            {[
              [120,40],[280,25],[450,60],[600,35],[780,20],[950,55],[1100,30],[1250,45],[1380,22],
              [200,80],[500,90],[800,70],[1050,85],[1300,75],[350,50],[700,40],[1150,60],
            ].map(([x,y], i) => (
              <circle key={i} cx={x} cy={y} r={i % 2 === 0 ? 1.2 : 0.8} fill="white" opacity="0.5">
                <animate attributeName="opacity" values="0.5;1;0.5" dur={`${2 + i % 3}s`} repeatCount="indefinite"/>
              </circle>
            ))}

            {/* Siluet bangunan */}
            <g fill="#040c1e" opacity="0.8">
              <rect x="0"    y="220" width="60"  height="140"/>
              <rect x="55"   y="240" width="40"  height="120"/>
              <rect x="90"   y="200" width="55"  height="160"/>
              <rect x="140"  y="230" width="35"  height="130"/>
              <rect x="170"  y="210" width="70"  height="150"/>
              <rect x="235"  y="245" width="30"  height="115"/>
              <rect x="260"  y="190" width="50"  height="170"/>
              <rect x="305"  y="235" width="45"  height="125"/>
              <rect x="345"  y="215" width="60"  height="145"/>
              <rect x="400"  y="250" width="35"  height="110"/>
              <rect x="430"  y="205" width="55"  height="155"/>
              <rect x="480"  y="230" width="40"  height="130"/>
              <rect x="515"  y="195" width="65"  height="165"/>
              <rect x="575"  y="240" width="30"  height="120"/>
              <rect x="600"  y="210" width="55"  height="150"/>
              <rect x="650"  y="225" width="45"  height="135"/>
              <rect x="690"  y="200" width="60"  height="160"/>
              <rect x="745"  y="245" width="35"  height="115"/>
              <rect x="775"  y="215" width="50"  height="145"/>
              <rect x="820"  y="235" width="40"  height="125"/>
              <rect x="855"  y="205" width="65"  height="155"/>
              <rect x="915"  y="240" width="30"  height="120"/>
              <rect x="940"  y="220" width="55"  height="140"/>
              <rect x="990"  y="230" width="45"  height="130"/>
              <rect x="1030" y="195" width="60"  height="165"/>
              <rect x="1085" y="245" width="35"  height="115"/>
              <rect x="1115" y="210" width="55"  height="150"/>
              <rect x="1165" y="235" width="40"  height="125"/>
              <rect x="1200" y="200" width="65"  height="160"/>
              <rect x="1260" y="240" width="30"  height="120"/>
              <rect x="1285" y="215" width="55"  height="145"/>
              <rect x="1335" y="225" width="50"  height="135"/>
              <rect x="1380" y="205" width="60"  height="155"/>
            </g>

            {/* Jendela berkedip */}
            <g fill="#c9a84c" opacity="0.35">
              {[
                [15,235],[15,255],[30,235],[30,255],[70,255],[70,270],
                [100,215],[100,235],[115,215],[130,235],[180,225],[180,245],[200,225],
                [270,205],[270,225],[285,205],[300,225],[360,225],[360,245],[375,225],
                [440,215],[440,235],[455,215],[530,210],[530,230],[545,210],[545,230],
                [610,225],[610,245],[625,225],[660,240],[660,255],[705,215],[705,235],[720,215],
                [785,230],[785,250],[800,230],[865,220],[865,240],[880,220],[880,240],
                [950,235],[950,250],[1000,215],[1000,235],[1015,215],[1045,220],[1045,240],[1060,220],
                [1125,225],[1125,245],[1140,225],[1175,250],[1205,215],[1205,235],[1220,215],
                [1295,230],[1295,245],[1345,240],[1345,255],[1390,220],[1390,240],[1405,220],
              ].map(([x,y], i) => (
                <rect key={i} x={x} y={y} width="8" height="6" rx="1">
                  <animate attributeName="opacity" values="0.35;0.7;0.35" dur={`${3 + i % 4}s`} repeatCount="indefinite"/>
                </rect>
              ))}
            </g>

            {/* Hujan */}
            <g stroke="#90caf9" strokeWidth="1.5" opacity="0.4">
              {[80,160,240,320,400,480,560,640,720,800,880,960,1040,1120,1200,1280,1360,180,540,900].map((x, i) => (
                <line key={i} x1={x} y1="0" x2={x - 4} y2="40">
                  <animate attributeName="y1" values={`${-30 + (i%5)*8};320`} dur={`${0.7 + (i%5)*0.12}s`} repeatCount="indefinite"/>
                  <animate attributeName="y2" values={`${10 + (i%5)*8};360`} dur={`${0.7 + (i%5)*0.12}s`} repeatCount="indefinite"/>
                </line>
              ))}
            </g>

            {/* Gelombang belakang */}
            <path d="M0,300 Q180,265 360,300 Q540,335 720,300 Q900,265 1080,300 Q1260,335 1440,300 L1440,500 L0,500Z" fill="url(#waterDeep)" opacity="0.5">
              <animate attributeName="d" dur="5s" repeatCount="indefinite"
                values="M0,300 Q180,265 360,300 Q540,335 720,300 Q900,265 1080,300 Q1260,335 1440,300 L1440,500 L0,500Z;M0,315 Q180,280 360,315 Q540,350 720,315 Q900,280 1080,315 Q1260,350 1440,315 L1440,500 L0,500Z;M0,300 Q180,265 360,300 Q540,335 720,300 Q900,265 1080,300 Q1260,335 1440,300 L1440,500 L0,500Z"
              />
            </path>

            {/* Gelombang tengah */}
            <path d="M0,330 Q180,300 360,330 Q540,360 720,330 Q900,300 1080,330 Q1260,360 1440,330 L1440,500 L0,500Z" fill="url(#waterMid)" opacity="0.65">
              <animate attributeName="d" dur="3.5s" repeatCount="indefinite"
                values="M0,330 Q180,300 360,330 Q540,360 720,330 Q900,300 1080,330 Q1260,360 1440,330 L1440,500 L0,500Z;M0,345 Q180,315 360,345 Q540,375 720,345 Q900,315 1080,345 Q1260,375 1440,345 L1440,500 L0,500Z;M0,330 Q180,300 360,330 Q540,360 720,330 Q900,300 1080,330 Q1260,360 1440,330 L1440,500 L0,500Z"
              />
            </path>

            {/* Gelombang depan */}
            <path d="M0,370 Q180,345 360,370 Q540,395 720,370 Q900,345 1080,370 Q1260,395 1440,370 L1440,500 L0,500Z" fill="url(#waterFront)" opacity="0.9">
              <animate attributeName="d" dur="2.5s" repeatCount="indefinite"
                values="M0,370 Q180,345 360,370 Q540,395 720,370 Q900,345 1080,370 Q1260,395 1440,370 L1440,500 L0,500Z;M0,382 Q180,357 360,382 Q540,407 720,382 Q900,357 1080,382 Q1260,407 1440,382 L1440,500 L0,500Z;M0,370 Q180,345 360,370 Q540,395 720,370 Q900,345 1080,370 Q1260,395 1440,370 L1440,500 L0,500Z"
              />
            </path>

            {/* Buih */}
            <g fill="white" opacity="0.15">
              {[100,300,500,700,900,1100,1300,200,600,1000].map((x, i) => (
                <ellipse key={i} cx={x} cy={370 + (i%3)*8} rx="18" ry="4">
                  <animate attributeName="cx" values={`${x};${x+30};${x}`} dur={`${2+i%3}s`} repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.15;0.3;0.15" dur={`${2+i%3}s`} repeatCount="indefinite"/>
                </ellipse>
              ))}
            </g>

            {/* Label di dalam SVG */}
            <text x="720" y="150" textAnchor="middle" fill="#7a9bb5" fontSize="11" fontFamily="'DM Mono',monospace" letterSpacing="4" opacity="0.6">
              VISUALISASI
            </text>
            <text x="720" y="185" textAnchor="middle" fill="white" fontSize="28" fontFamily="'Cormorant Garamond',serif" fontWeight="700" opacity="0.9">
              Dinamika Aliran Banjir
            </text>
            <text x="720" y="215" textAnchor="middle" fill="#c9a84c" fontSize="10" fontFamily="'DM Mono',monospace" letterSpacing="2" opacity="0.5">
              BALI · 2026
            </text>

          </svg>
        </div>
      </div>
    </section>
  )
}