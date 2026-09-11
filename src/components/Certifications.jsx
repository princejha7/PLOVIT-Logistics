import { certifications, memberships } from "../data/certifications"

export default function Certifications() {
  return (
    <section className="py-7 md:py-11 bg-brand-gray border-t border-gray-200" aria-label="Memberships and Certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="section-label">TRUSTED & ACCREDITED</p>
          <span className="section-divider mx-auto" />
          <h2 className="section-title">Memberships & Certifications</h2>
      
        </div>


        {/* Certifications */}
        <div>
          <div className="flex flex-wrap justify-center gap-5">
            {certifications.map((c) => (
              <div
                key={c.id}
                className="bg-white border-2 border-dashed border-gray-300 rounded-xl px-8 py-6 flex items-center justify-center min-w-[160px] text-gray-400 font-semibold text-sm text-center"
                aria-label={c.name}
              >
                {c.logo ? (
                  <img src={c.logo} alt={c.name} className="h-12 object-contain" loading="lazy" />
                ) : (
                  c.placeholder
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
