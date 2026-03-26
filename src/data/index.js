// ============================================================
//  src/data/index.js
//  Semua data untuk project Bali Banjir
//  Import di komponen dengan: import { navLinks, heroStats, ... } from '../data'
// ============================================================

export const navLinks = [
  { href: '#timeline',     label: 'Timeline' },
  { href: '#map',          label: 'Peta' },
  { href: '#data',         label: 'Data' },
  { href: '#causes',       label: 'Penyebab' },
  { href: '#tri-hita',     label: 'Tri Hita Karana' },
  { href: '#before-after', label: 'Sebelum–Sesudah' },
];

export const heroStats = [
  { target: 47,   label: 'Kejadian 2023' },
  { target: 9,    label: 'Kabupaten Terdampak' },
  { target: 3200, label: 'Jiwa Mengungsi' },
];

export const subakStats = [
  { value: '1.200+', desc: 'Subak aktif tersisa' },
  { value: '60%',    desc: 'Terancam konversi' },
  { value: '800th',  desc: 'Usia sistem Subak' },
];

export const timelineData = [
  {
    side: 'right',
    date: 'FEBRUARI 2017',
    title: 'Banjir Denpasar Selatan',
    desc: 'Hujan deras 6 jam menyebabkan genangan 80 cm di Sanur dan Renon. Ratusan kendaraan terjebak selama berjam-jam.',
    img: '/images/timeline-denpasar-2017.jpg',
    tags: [{ label: 'Denpasar', type: 'flood' }, { label: 'Sedang', type: 'medium' }],
  },
  {
    side: 'left',
    date: 'JANUARI 2018',
    title: 'Banjir Bandang Jembrana',
    desc: 'Tukad Biluk Poh meluap, menghantam 3 desa. Kerusakan Rp 4,2 miliar. 180 keluarga mengungsi ke tempat lebih aman.',
    img: '/images/timeline-jembrana-2018.jpg',
    tags: [{ label: 'Jembrana', type: 'flood' }, { label: 'Parah', type: 'severe' }],
  },
  {
    side: 'right',
    date: 'MARET 2019',
    title: 'Banjir Kuta & Seminyak',
    desc: 'Kawasan wisata premium lumpuh. Air 1,2 m menggenangi hotel dan restoran. Kerugian pariwisata Rp 25 miliar.',
    img: '/images/timeline-kuta-2019.jpg',
    tags: [{ label: 'Badung', type: 'flood' }, { label: 'Kritis', type: 'critical' }],
  },
  {
    side: 'left',
    date: 'DESEMBER 2020',
    title: 'Banjir Multi-Kabupaten',
    desc: 'Hujan ekstrem 3 hari melanda 6 kabupaten sekaligus. 870 rumah rusak, 2 korban jiwa, 1.200 warga mengungsi.',
    img: '/images/timeline-multi-2020.jpg',
    tags: [{ label: 'Multi-Kabupaten', type: 'flood' }, { label: 'Darurat', type: 'emergency' }],
  },
  {
    side: 'right',
    date: 'FEBRUARI 2022',
    title: 'Banjir Denpasar Utara',
    desc: 'Tukad Badung meluap pasca pembangunan mall di bantaran sungai. Kompleks Pemecutan Kaja terendam 3 hari berturut-turut.',
    img: '/images/timeline-denpasar-2022.jpg',
    tags: [{ label: 'Denpasar', type: 'flood' }, { label: 'Parah', type: 'severe' }],
  },
  {
    side: 'left',
    date: 'JANUARI 2026 · TERBARU',
    title: 'Banjir Terparah: Buleleng',
    desc: 'Banjir bandang terbesar dalam 20 tahun. Air 1,8 m, 3.200 jiwa terdampak, kerugian Rp 78 miliar. Jembatan Tukad Saba roboh.',
    img: '/images/timeline-buleleng-2026.jpg',
    tags: [{ label: 'Buleleng', type: 'flood' }, { label: 'DARURAT NASIONAL', type: 'national-emergency' }],
    critical: true,
  },
];

export const causesData = [
  {
    img: '/images/cause-heavy-rain.jpeg',
    imgPosition: 'center 45%',
    title: 'Curah Hujan Ekstrem',
    desc: 'Peningkatan intensitas hujan akibat perubahan iklim melampaui kapasitas infrastruktur drainase yang ada.',
    detail: 'Intensitas hujan di Bali meningkat 22% dalam 10 tahun terakhir. BMKG Ngurah Rai mencatat 312 mm/hari pada 2024, jauh melampaui rata-rata historis 180 mm/hari.',
    svgPath: `<path d="M14 30a8 8 0 010-16 8.5 8.5 0 0116.5-2A6 6 0 1134 30H14z" stroke="#c9a84c" stroke-width="1.8" stroke-linejoin="round"/>
              <line x1="16" y1="36" x2="14" y2="43" stroke="#59b3ff" stroke-width="2" stroke-linecap="round"/>
              <line x1="24" y1="36" x2="22" y2="43" stroke="#59b3ff" stroke-width="2" stroke-linecap="round"/>
              <line x1="32" y1="36" x2="30" y2="43" stroke="#59b3ff" stroke-width="2" stroke-linecap="round"/>`,
  },
  {
    img: '/images/cause-land-conversion.jpg',
    imgPosition: 'center 10%',
    title: 'Alih Fungsi Lahan',
    desc: 'Ribuan hektar sawah dan hutan resapan dialihkan menjadi villa, hotel, dan kompleks perumahan setiap tahunnya.',
    detail: 'Bali kehilangan 1.000–1.500 ha lahan hijau per tahun. Kawasan Kuta–Seminyak kini 90% tertutup beton. Koefisien limpasan naik dari 0,3 menjadi 0,8 dalam 20 tahun.',
    svgPath: `<rect x="8" y="24" width="14" height="18" stroke="#c9a84c" stroke-width="1.8" stroke-linejoin="round"/>
              <polygon points="15,12 26,24 4,24" stroke="#c9a84c" stroke-width="1.8" stroke-linejoin="round" fill="none"/>
              <rect x="26" y="16" width="14" height="26" stroke="#c9a84c" stroke-width="1.8" stroke-linejoin="round"/>
              <line x1="26" y1="8" x2="40" y2="16" stroke="#c9a84c" stroke-width="1.8" stroke-linecap="round"/>
              <line x1="6" y1="42" x2="42" y2="42" stroke="#c9a84c" stroke-width="1.8" stroke-linecap="round"/>`,
  },
  {
    img: '/images/cause-waste.jpeg',
    imgPosition: 'center 24%',
    title: 'Sampah & Sedimentasi',
    desc: 'Sungai dan drainase tersumbat 4.000+ ton sampah yang tidak terkelola dengan baik setiap harinya.',
    detail: 'Bali menghasilkan 4.281 ton sampah/hari, hanya 60% tertangani. Tukad Mati, Tukad Badung, dan Tukad Ayung mengalami pendangkalan 30–50 cm per tahun.',
    svgPath: `<polyline points="12,14 14,40 34,40 36,14" stroke="#c9a84c" stroke-width="1.8" stroke-linejoin="round"/>
              <line x1="8" y1="14" x2="40" y2="14" stroke="#c9a84c" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M18 14V10h12v4" stroke="#c9a84c" stroke-width="1.8" stroke-linejoin="round"/>
              <line x1="20" y1="20" x2="20" y2="34" stroke="#c9a84c" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="28" y1="20" x2="28" y2="34" stroke="#c9a84c" stroke-width="1.5" stroke-linecap="round"/>`,
  },
  {
    img: '/images/cause-drainage.jpg',
    imgPosition: 'center 25%',
    title: 'Drainase Usang',
    desc: 'Sistem drainase Denpasar dibangun 1970-an untuk 100.000 jiwa, kini harus melayani 900.000+ jiwa.',
    detail: 'Kapasitas drainase Denpasar hanya 45 m³/detik, sedangkan volume saat banjir mencapai 120 m³/detik. Investasi hanya Rp 80 M/tahun dari kebutuhan Rp 450 M/tahun.',
    svgPath: `<rect x="8" y="18" width="32" height="12" rx="6" stroke="#c9a84c" stroke-width="1.8"/>
              <line x1="24" y1="30" x2="24" y2="40" stroke="#c9a84c" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M16 40 Q24 36 32 40" stroke="#c9a84c" stroke-width="1.8" stroke-linecap="round" fill="none"/>
              <line x1="8" y1="12" x2="40" y2="12" stroke="#c9a84c" stroke-width="1.4" stroke-linecap="round" stroke-dasharray="4 3"/>
              <circle cx="14" cy="24" r="2.5" stroke="#59b3ff" stroke-width="1.4"/>
              <circle cx="24" cy="24" r="2.5" stroke="#59b3ff" stroke-width="1.4"/>
              <circle cx="34" cy="24" r="2.5" stroke="#59b3ff" stroke-width="1.4"/>`,
  },
  {
    img: '/images/cause-lanina.png',
    imgPosition: 'center 20%',
    title: 'Pengaruh La Niña',
    desc: 'Fenomena La Niña memperkuat musim hujan, membawa curah hujan 30–40% di atas normal di Bali.',
    detail: 'BMKG memperkirakan La Niña lebih sering dan kuat seiring perubahan iklim global. Tahun 2020 dan 2024 adalah La Niña terkuat dalam 30 tahun, bertepatan banjir terparah di Bali.',
    svgPath: `<path d="M4 28 Q10 20 16 28 Q22 36 28 28 Q34 20 40 28 Q43 32 44 34" stroke="#59b3ff" stroke-width="1.8" stroke-linecap="round" fill="none"/>
              <path d="M4 20 Q10 12 16 20 Q22 28 28 20 Q34 12 40 20" stroke="#c9a84c" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.6"/>
              <path d="M8 36 Q14 30 20 36 Q26 42 32 36 Q38 30 42 34" stroke="#59b3ff" stroke-width="1.4" stroke-linecap="round" fill="none" opacity="0.45"/>`,
  },
  {
    img: '/images/cause-spatial.jpg',
    imgPosition: 'center 25%',
    title: 'Lemahnya Tata Ruang',
    desc: 'Perizinan bangunan di zona rawan banjir terus diterbitkan meski melanggar Perda RTRW Bali.',
    detail: 'Walhi Bali mencatat 2.400+ bangunan ilegal di sempadan sungai. Perda No. 2/2020 tentang RTRW belum efektif — 78% pelanggaran tata ruang tidak dikenai sanksi.',
    svgPath: `<rect x="10" y="6" width="28" height="36" rx="3" stroke="#c9a84c" stroke-width="1.8"/>
              <line x1="16" y1="16" x2="32" y2="16" stroke="#c9a84c" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="16" y1="22" x2="32" y2="22" stroke="#c9a84c" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="16" y1="28" x2="24" y2="28" stroke="#c9a84c" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="32" cy="32" r="6" stroke="#ef4444" stroke-width="1.8"/>
              <line x1="29" y1="32" x2="35" y2="32" stroke="#ef4444" stroke-width="1.8" stroke-linecap="round"/>`,
  },
];

export const thkPillarsData = [
  {
    headerClass: 'thk-parhyangan',
    img: '/images/pillar-parhyangan.jpg',
    number: '01',
    sanskrit: 'Parahyangan',
    title: 'Hubungan dengan Tuhan',
    desc: 'Keselarasan antara manusia dengan kekuatan spiritual. Tercermin dalam ribuan pura dan upacara adat yang menjaga rasa syukur atas alam.',
    impact: 'Melemahnya kesadaran spiritual dan hilangnya upacara menjaga sungai (tukad) menyebabkan eksploitasi tanpa batas pada sumber daya air.',
    svgPath: `<polygon points="20,4 36,32 4,32" stroke="#c9a84c" stroke-width="1.5" fill="none"/>
              <line x1="20" y1="4" x2="20" y2="0" stroke="#c9a84c" stroke-width="1.5" stroke-linecap="round"/>
              <rect x="14" y="24" width="12" height="8" stroke="#c9a84c" stroke-width="1.2" fill="none"/>
              <line x1="4" y1="32" x2="36" y2="32" stroke="#c9a84c" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="20" cy="17" r="3" stroke="#c9a84c" stroke-width="1.2" fill="none"/>`,
  },
  {
    headerClass: 'thk-pawongan',
    img: '/images/pillar-pawongan.jpeg',
    number: '02',
    sanskrit: 'Pawongan',
    title: 'Hubungan antar Manusia',
    desc: 'Keharmonisan sosial dalam komunitas. Sistem Subak adalah contoh nyata — petani bersama merawat irigasi dan berbagi air secara adil.',
    impact: 'Konflik kepentingan antara developer, pemerintah, dan komunitas memperlemah koordinasi penanganan banjir dan drainase.',
    svgPath: `<circle cx="14" cy="14" r="6" stroke="#c9a84c" stroke-width="1.5"/>
              <circle cx="26" cy="14" r="6" stroke="#c9a84c" stroke-width="1.5"/>
              <path d="M4 36c0-6 4.5-10 10-10" stroke="#c9a84c" stroke-width="1.5" stroke-linecap="round" fill="none"/>
              <path d="M36 36c0-6-4.5-10-10-10" stroke="#c9a84c" stroke-width="1.5" stroke-linecap="round" fill="none"/>
              <path d="M14 26 Q20 22 26 26" stroke="#c9a84c" stroke-width="1.5" stroke-linecap="round" fill="none"/>`,
  },
  {
    headerClass: 'thk-palemahan',
    img: '/images/pillar-palemahan.jpg',
    number: '03',
    sanskrit: 'Palemahan',
    title: 'Hubungan dengan Alam',
    desc: 'Keseimbangan antara manusia dan lingkungan alam — tanah, air, hutan, dan ekosistem yang menyangga kehidupan.',
    impact: 'Kerusakan lahan resapan, alih fungsi sawah, dan pencemaran sungai adalah bukti terputusnya hubungan manusia Bali modern dengan alamnya.',
    svgPath: `<path d="M20 36 Q20 20 8 8 Q20 10 32 8 Q20 20 20 36Z" stroke="#c9a84c" stroke-width="1.5" stroke-linejoin="round" fill="none"/>
              <line x1="20" y1="36" x2="20" y2="22" stroke="#c9a84c" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M20 27 Q14 23 10 17" stroke="#c9a84c" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.6"/>
              <path d="M20 23 Q26 19 30 13" stroke="#c9a84c" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.6"/>`,
  },
];

export const solutionsData = [
  {
    img: '/images/solution-green-land.jpg',
    title: 'Restorasi Lahan Hijau',
    desc: 'Moratorium izin konversi lahan pertanian dan pemulihan 5.000 ha ruang terbuka hijau di kawasan penyangga utama.',
    svgPath: `<path d="M16 28 Q16 14 4 4 Q16 6 28 4 Q16 14 16 28Z" stroke="#c9a84c" stroke-width="1.5" fill="none"/>
              <line x1="16" y1="28" x2="16" y2="16" stroke="#c9a84c" stroke-width="1.5" stroke-linecap="round"/>`,
  },
  {
    img: '/images/solution-drainage.png',
    title: 'Revitalisasi Drainase',
    desc: 'Investasi Rp 2 triliun untuk sistem drainase terintegrasi dengan kapasitas 3× lebih besar dari yang ada saat ini.',
    svgPath: `<path d="M16 4 Q9 13 9 19 a7 7 0 0 0 14 0 Q23 13 16 4Z" stroke="#59b3ff" stroke-width="1.5" fill="none"/>`,
  },
  {
    img: '/images/solution-early-warning.jpeg',
    title: 'Sistem Peringatan Dini',
    desc: 'Jaringan sensor IoT di 47 titik rawan banjir terhubung langsung dengan sistem notifikasi warga berbasis SMS.',
    svgPath: `<circle cx="16" cy="20" r="3" stroke="#c9a84c" stroke-width="1.5"/>
              <path d="M10 15 Q10 8 16 8 Q22 8 22 15" stroke="#c9a84c" stroke-width="1.5" stroke-linecap="round" fill="none"/>
              <path d="M6 11 Q6 4 16 4 Q26 4 26 11" stroke="#c9a84c" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.5"/>
              <line x1="16" y1="23" x2="16" y2="28" stroke="#c9a84c" stroke-width="1.5" stroke-linecap="round"/>
              <line x1="10" y1="28" x2="22" y2="28" stroke="#c9a84c" stroke-width="1.5" stroke-linecap="round"/>`,
  },
];

export const mapMarkers = [
  { ll: [-8.670, 115.212], name: 'Kuta, Badung',        desc: 'Banjir Maret 2019 — ketinggian 1,2 m. Kerugian pariwisata Rp 25 M. Penyebab: drainase tersumbat sampah.', severe: true },
  { ll: [-8.650, 115.219], name: 'Seminyak, Badung',    desc: 'Banjir rutin setiap musim hujan. Hotel dan restoran terdampak akibat alih fungsi lahan rawa.', severe: false },
  { ll: [-8.659, 115.216], name: 'Legian, Badung',      desc: 'Banjir Februari 2020 — 400 KK mengungsi. Tukad Mati tidak mampu tampung debit 200 mm/hari.', severe: false },
  { ll: [-8.340, 115.090], name: 'Singaraja, Buleleng', desc: 'Banjir Bandang Jan 2024 — TERPARAH. Air 1,8 m, 3.200 jiwa terdampak, jembatan roboh. Kerugian Rp 78 M.', severe: true },
  { ll: [-8.619, 115.223], name: 'Denpasar Selatan',    desc: 'Banjir Feb 2017 — genangan 80 cm di Sanur & Renon. Ratusan kendaraan terjebak 6 jam.', severe: false },
  { ll: [-8.580, 115.215], name: 'Denpasar Utara',      desc: 'Banjir Feb 2022 — Tukad Badung meluap akibat pembangunan di bantaran. 3 hari genangan.', severe: true },
  { ll: [-8.358, 114.611], name: 'Jembrana',            desc: 'Banjir Bandang Jan 2018 — Sungai Biluk Poh meluap. 180 keluarga mengungsi. Kerusakan Rp 4,2 M.', severe: true },
  { ll: [-8.543, 115.104], name: 'Tabanan',             desc: 'Banjir Desember 2020 — 150 rumah terendam, sawah gagal panen.', severe: false },
  { ll: [-8.620, 115.390], name: 'Gianyar',             desc: 'Banjir tahunan di bantaran Tukad Ayung. Desa Sukawati terdampak tiap Desember–Januari.', severe: false },
  { ll: [-8.453, 115.561], name: 'Karangasem',          desc: 'Banjir bandang 2021 — lahar dingin Gunung Agung bercampur banjir. 6 desa tertimbun material vulkanik.', severe: true },
];

export const chartData = {
  years:          ['2016','2017','2018','2019','2020','2021','2022','2023','2024'],
  frequency:      [18, 24, 28, 32, 41, 35, 38, 47, 52],
  rainfall:       [1820, 2050, 2180, 2420, 2890, 2310, 2540, 2750, 3100],
  rainfallNormal: [1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900, 1900],
  districtLabels: ['Denpasar','Badung','Buleleng','Gianyar','Jembrana','Tabanan','Karangasem','Lainnya'],
  districtData:   [28, 24, 18, 10, 8, 6, 4, 2],
  damage:         [12, 18, 25, 38, 64, 32, 45, 58, 89],
};