export default function Footer() {
  return (
    <footer className="footer-section py-16 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="footer-ornament">
          <div className="ornament-line"></div>
          <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="footer-ornament-svg">
            <path d="M60 4 Q45 17 28 23 Q45 20 60 31 Q75 20 92 23 Q75 17 60 4Z" fill="none" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5"/>
            <circle cx="60" cy="17" r="5" fill="none" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5"/>
            <circle cx="35" cy="23" r="3" fill="#c9a84c" opacity="0.3"/>
            <circle cx="85" cy="23" r="3" fill="#c9a84c" opacity="0.3"/>
          </svg>
          <div className="ornament-line"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <svg className="nav-lotus" viewBox="0 0 24 24" fill="none">
                <path d="M12 3 Q8 9 4 11 Q8 10 12 15 Q16 10 20 11 Q16 9 12 3Z" stroke="#c9a84c" strokeWidth="0.9" fill="none" opacity="0.85"/>
                <circle cx="12" cy="11" r="2.2" stroke="#c9a84c" strokeWidth="0.9" fill="none" opacity="0.85"/>
              </svg>
              <div className="font-display text-2xl font-bold gradient-gold-text">BALI BANJIR</div>
            </div>
            <div className="text-xs text-muted font-mono pl-7">DATA STORYTELLING · 2024</div>
          </div>

          <div className="text-center text-xs text-muted leading-relaxed">
            <p>Data bersumber dari BPBD Bali, BMKG, BPS, dan laporan media lokal.</p>
            <p className="mt-1">Dibuat sebagai media edukasi dan advokasi publik.</p>
          </div>

          <div className="text-xs text-muted text-right">
            <p className="font-semibold">Sumber Data:</p>
            <p className="text-bali-gold mt-1">BPBD Bali · BMKG · Walhi Bali</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-muted">
          © 2024 Polemik Banjir di Bali — Data Storytelling Project. Semua data bersifat indikatif untuk keperluan edukasi.
        </div>

      </div>
    </footer>
  )
}
