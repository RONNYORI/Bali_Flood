import { useEffect, useRef } from 'react'
import { mapMarkers } from '../data'

export default function MapSection() {
  const mapRef = useRef(null)
  const mapInstance = useRef(null)

  useEffect(() => {
    // Leaflet harus diimport secara dinamis karena butuh window
    if (mapInstance.current) return

    import('leaflet').then(L => {
      const isDark = document.documentElement.classList.contains('dark')
      const darkTile  = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
      const lightTile = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'

      const map = L.map('flood-map', {
        scrollWheelZoom: false,
        zoomControl: true,
      }).setView([-8.45, 115.2], 9)

      mapInstance.current = map

      L.tileLayer(isDark ? darkTile : lightTile, {
        attribution: '© CartoDB',
        maxZoom: 19,
      }).addTo(map)

      // Sungai Tukad Badung
      L.polyline([
        [-8.58, 115.218], [-8.61, 115.217], [-8.64, 115.215],
        [-8.67, 115.213], [-8.705, 115.210],
      ], {
        color: '#4fc3f7', weight: 2.5, opacity: 0.55, dashArray: '6, 4',
      }).addTo(map).bindTooltip('Tukad Badung')

      // Markers
      mapMarkers.forEach(m => {
        const color = m.severe ? '#ef4444' : '#2e91ff'
        const glow  = m.severe ? 'rgba(239,68,68,0.6)' : 'rgba(46,145,255,0.5)'
        const size  = m.severe ? 22 : 18

        const icon = L.divIcon({
          html: `<div style="width:${size}px;height:${size}px;background:${color};border-radius:50%;border:2px solid rgba(255,255,255,0.8);box-shadow:0 0 0 4px ${glow},0 4px 12px rgba(0,0,0,0.4);position:relative;">
            <div style="position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:8px solid ${color};"></div>
          </div>`,
          iconSize: [size, size + 8],
          iconAnchor: [size / 2, size + 8],
          className: ''
        })

        const popup = `<div style="font-family:'DM Sans',sans-serif;padding:4px;">
          <div style="font-size:13px;font-weight:700;color:#c9a84c;margin-bottom:4px;">${m.name}</div>
          <div style="font-size:12px;color:#aabbd0;line-height:1.5;">${m.desc}</div>
          <div style="margin-top:8px;font-size:10px;font-family:'DM Mono',monospace;color:${m.severe ? '#f87171' : '#59b3ff'};">
            ${m.severe ? '⚠ DAMPAK PARAH' : '● Banjir Tahunan'}
          </div>
        </div>`

        L.marker(m.ll, { icon }).addTo(map).bindPopup(popup, { maxWidth: 260, className: '' })
      })
    })
  }, [])

  return (
    <section id="map" className="py-24 px-4 section-bg-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 reveal">
          <span className="section-label">Sebaran Wilayah</span>
          <h2 className="font-display section-heading mt-3">
            Peta Titik Rawan<br/>
            <span className="gradient-gold-text">Banjir Bali</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            Klik marker untuk melihat detail. Merah = dampak parah. Biru = banjir tahunan.
          </p>
        </div>

        <div className="reveal map-wrapper">
          <div id="flood-map" ref={mapRef}></div>
          <div className="map-legend card-glass">
            <div className="legend-title">Legenda</div>
            <div className="legend-item">
              <span className="legend-dot legend-severe"></span>Dampak Parah
            </div>
            <div className="legend-item">
              <span className="legend-dot legend-flood"></span>Banjir Tahunan
            </div>
            <div className="legend-item">
              <span className="legend-river"></span>Tukad (Sungai)
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
