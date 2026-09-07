import { certifications, memberships } from "../data/certifications"

export default function Certifications() {
  return (
    <section className="py-14 bg-brand-gray border-t border-gray-200" aria-label="Memberships and Certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="section-label">TRUSTED & ACCREDITED</p>
          <span className="section-divider mx-auto" />
          <h2 className="section-title">Memberships & Certifications</h2>
          {/* <p className="text-gray-400 mt-3 text-xs">
            Replace the placeholders below with actual certification and membership logos.
          </p> */}
        </div>

        {/* Memberships */}
        {/* <div className="mb-10">
          <h3 className="text-brand-blue font-semibold text-xs uppercase tracking-widest mb-5 text-center">Memberships</h3>
          <div className="flex flex-wrap justify-center gap-5">
            {memberships.map((m) => (
              <div
                key={m.id}
                className="bg-white border-2 border-dashed border-gray-300 rounded-xl px-8 py-6 flex items-center justify-center min-w-[160px] text-gray-400 font-semibold text-sm text-center hover:border-brand-orange/40 transition-colors duration-200"
                aria-label={m.name}
              >
                {m.logo ? (
                  <img src={m.logo} alt={m.name} className="h-12 object-contain" loading="lazy" />
                ) : (
                  m.placeholder
                )}
              </div>
            ))}
          </div>
        </div> */}

        {/* Certifications */}
        <div>
          {/* <h3 className="text-brand-blue font-semibold text-xs uppercase tracking-widest mb-5 text-center">Certifications</h3> */}
          <div className="flex flex-wrap justify-center gap-5">
            {certifications.map((c) => (
              <div
                key={c.id}
                className="bg-white border-2 border-dashed border-gray-300 rounded-xl px-8 py-6 flex items-center justify-center min-w-[160px] text-gray-400 font-semibold text-sm text-center hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none "
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
