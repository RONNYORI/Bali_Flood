import { useEffect, useRef } from 'react'
import { chartData } from '../data'
import {
  Chart as ChartJS,
  CategoryScale, LinearScale,
  BarElement, LineElement, PointElement,
  ArcElement, Tooltip, Legend, Filler,
} from 'chart.js'
import { Bar, Line, Doughnut } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale, LinearScale,
  BarElement, LineElement, PointElement,
  ArcElement, Tooltip, Legend, Filler
)

ChartJS.defaults.font = { family: "'DM Sans', sans-serif", size: 12 }
ChartJS.defaults.color = '#7a9bb5'

const COLOR = {
  gold:     '#c9a84c',
  goldFill: 'rgba(201,168,76,0.12)',
  blue:     '#2e91ff',
  blueFill: 'rgba(46,145,255,0.12)',
  red:      '#ef4444',
  grid:     { color: 'rgba(201,168,76,0.06)' },
}

const { years, frequency, rainfall, rainfallNormal, districtLabels, districtData, damage } = chartData

export default function Charts() {
  const frequencyRef = useRef(null)
  const damageRef    = useRef(null)

  // Gradient untuk bar chart (harus pakai ref karena butuh canvas context)
  const getGoldGradient = (ctx) => {
    const g = ctx.chart.ctx.createLinearGradient(0, 0, 0, 250)
    g.addColorStop(0, 'rgba(201,168,76,0.85)')
    g.addColorStop(1, 'rgba(201,168,76,0.2)')
    return g
  }

  const getRedGradient = (ctx) => {
    const g = ctx.chart.ctx.createLinearGradient(0, 0, 0, 220)
    g.addColorStop(0, 'rgba(239,68,68,0.85)')
    g.addColorStop(1, 'rgba(239,68,68,0.15)')
    return g
  }

  const frequencyChartData = {
    labels: years,
    datasets: [{
      label: 'Kejadian Banjir',
      data: frequency,
      backgroundColor: getGoldGradient,
      borderColor: COLOR.gold, borderWidth: 1.5, borderRadius: 6,
    }]
  }

  const rainfallChartData = {
    labels: years,
    datasets: [
      {
        label: 'Curah Hujan (mm)',
        data: rainfall,
        borderColor: COLOR.blue, backgroundColor: COLOR.blueFill,
        fill: true, tension: 0.4, borderWidth: 2,
        pointBackgroundColor: COLOR.blue, pointRadius: 4, pointHoverRadius: 7,
      },
      {
        label: 'Normal Historis',
        data: rainfallNormal,
        borderColor: COLOR.red, borderWidth: 1.5,
        borderDash: [6, 4], pointRadius: 0, fill: false,
      }
    ]
  }

  const districtChartData = {
    labels: districtLabels,
    datasets: [{
      data: districtData,
      backgroundColor: [
        '#c9a84c','#a0834a','#8b5e1e','#6b4515',
        '#2e91ff','#1570f5','#0d58e1','#143f8f'
      ],
      borderWidth: 0,
      hoverOffset: 8,
    }]
  }

  const damageChartData = {
    labels: years,
    datasets: [{
      label: 'Kerugian (Rp Miliar)',
      data: damage,
      backgroundColor: getRedGradient,
      borderColor: COLOR.red, borderWidth: 1.5, borderRadius: 6,
    }]
  }

  const baseOptions = {
    responsive: true,
    scales: {
      x: { grid: COLOR.grid },
      y: { grid: COLOR.grid, beginAtZero: true }
    }
  }

  return (
    <section id="data" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Analisis Data</span>
          <h2 className="font-display section-heading mt-3">
            Visualisasi<br/>
            <span className="gradient-gold-text">Tren Banjir</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card-glass rounded-2xl p-6 reveal chart-card">
            <h3 className="font-display font-bold text-xl mb-1">Frekuensi Banjir per Tahun</h3>
            <p className="text-xs text-muted mb-4">Jumlah kejadian banjir tercatat di seluruh Bali</p>
            <Bar data={frequencyChartData} options={{ ...baseOptions, plugins: { legend: { display: false } } }} height={220} />
          </div>

          <div className="card-glass rounded-2xl p-6 reveal chart-card">
            <h3 className="font-display font-bold text-xl mb-1">Curah Hujan Tahunan (mm)</h3>
            <p className="text-xs text-muted mb-4">Rata-rata curah hujan vs normal historis</p>
            <Line data={rainfallChartData} options={{ ...baseOptions, plugins: { legend: { position: 'top', labels: { boxWidth: 14, padding: 16 } } } }} height={220} />
          </div>

          <div className="card-glass rounded-2xl p-6 reveal chart-card">
            <h3 className="font-display font-bold text-xl mb-1">Sebaran Dampak per Kabupaten</h3>
            <p className="text-xs text-muted mb-4">Persentase kejadian banjir berdasarkan wilayah</p>
            <Doughnut data={districtChartData} options={{ responsive: true, cutout: '68%', plugins: { legend: { position: 'right', labels: { boxWidth: 12, padding: 14 } } } }} height={220} />
          </div>

          <div className="card-glass rounded-2xl p-6 reveal chart-card">
            <h3 className="font-display font-bold text-xl mb-1">Estimasi Kerugian Material (Rp M)</h3>
            <p className="text-xs text-muted mb-4">Total kerugian akibat banjir per tahun dalam miliar rupiah</p>
            <Bar data={damageChartData} options={{ ...baseOptions, plugins: { legend: { display: false } } }} height={220} />
          </div>
        </div>
      </div>
    </section>
  )
}
