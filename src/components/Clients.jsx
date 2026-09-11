import { clients } from "../data/clients"

export default function Clients() {
  return (
    <section className="py-7 md:py-11 bg-white border-t border-gray-100" aria-label="Our Global Clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="section-title">Trusted by Global Clients</h2>
          <span className="section-divider mx-auto h-0.5" />
        </div>
      <div className="grid grid-cols-2 items-center justify-items-center gap-y-10 md:flex md:flex-wrap md:justify-center md:gap-14">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
              aria-label={client.name}
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-20 object-contain max-w-[120px]"
                  loading="lazy"
                />
              ) : (
                <div className="border border-gray-300 rounded px-5 py-2.5 text-gray-400 font-black text-sm tracking-wider min-w-[80px] text-center select-none">
                  {client.placeholder}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
