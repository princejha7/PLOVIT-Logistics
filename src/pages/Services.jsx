// import { useEffect, useState } from "react"
// import { services } from "../data/services"
// import ServiceCard from "../components/ServiceCard"
// import ServiceModal from "../components/ServiceModal"

// export default function Services() {
//   const [selectedService, setSelectedService] = useState(null)

//   useEffect(() => {
//     document.title = "Our Services | PLOVIT Logistics"
//     window.scrollTo(0, 0)
//   }, [])

//   return (
//     <div className="pt-16 md:pt-20">
//       {/* Page Hero */}
//       <div className="relative h-60 md:h-80 overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1400&q=80"
//           alt="PLOVIT Logistics Services - shipping containers"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-brand-blue/72" />
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
//           <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">WHAT WE OFFER</p>
//           <h1 className="text-3xl md:text-5xl font-black mb-3">Our Services</h1>
//           <p className="text-white/75 max-w-xl text-sm md:text-base">
//             Comprehensive logistics solutions tailored to your business needs
//           </p>
//         </div>
//       </div>

//       {/* Services Grid */}
//       <section className="py-16 md:py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {services.map((service) => (
//               <ServiceCard key={service.id} service={service} onReadMore={setSelectedService} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {selectedService && (
//         <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
//       )}
//     </div>
//   )
// }














import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="min-h-[70vh] bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-xl">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange mb-4">
          OUR SERVICES
        </p>

        <h1 className="text-4xl md:text-6xl font-black text-brand-blue">
          Services
        </h1>

        <span className="block w-10 h-0.5 bg-brand-orange mx-auto my-6" />

        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
          Our services page is currently being updated.
          <br />
          Please check back shortly.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

      </div>
    </section>
  );
}