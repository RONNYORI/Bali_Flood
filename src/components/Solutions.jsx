import { solutionsData } from '../data'

export default function Solutions() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Jalan Keluar</span>
          <h2 className="font-display section-heading mt-3">
            Apa yang Bisa<br/>
            <span className="gradient-gold-text">Dilakukan?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutionsData.map((s, i) => (
            <div key={i} className="card-glass rounded-2xl overflow-hidden reveal">
              <div className="cause-img">
                <img src={s.img} alt={s.title} />
              </div>
              <div className="p-6">
                <div className="cause-icon-wrap">
                  <svg viewBox="0 0 32 32" fill="none" className="cause-svg-icon"
                    dangerouslySetInnerHTML={{ __html: s.svgPath }}
                  />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
