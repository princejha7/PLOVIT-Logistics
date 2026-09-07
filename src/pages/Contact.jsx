// import { useEffect } from "react";
// import { Mail, MapPin, Phone } from "lucide-react";
// import ContactForm from "../components/ContactForm";

// export default function Contact() {
//   useEffect(() => {
//     document.title = "Contact Us | PLOVIT Logistics";
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="pt-16 md:pt-20">
//       <div className="bg-brand-blue py-16 md:py-24 text-center text-white">
//         <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">
//           LET&apos;S CONNECT
//         </p>
//         <h1 className="text-3xl md:text-5xl font-black mb-3">Contact Us</h1>
//         <p className="text-white/75 max-w-xl mx-auto px-4 text-sm md:text-base">
//           Tell us what you need to move, and our team will help plan the way
//           forward.
//         </p>
//       </div>

//       <section className="py-16 md:py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10 lg:gap-16">
//           <div className="lg:col-span-2">
//             <p className="section-label">GET IN TOUCH</p>
//             <h2 className="section-title mt-2">
//               Your next shipment starts here.
//             </h2>
//             <span className="section-divider" />
//             <p className="text-gray-500 leading-relaxed mb-8">
//               Share a few details about your requirements. We&apos;ll get back
//               to you within one business day.
//             </p>
//             <div className="space-y-5 text-sm text-gray-600">
//               <div className="flex items-start gap-3">
//                 <MapPin className="text-brand-orange mt-0.5" size={19} />
//                 <span>[COMPANY ADDRESS]</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Phone className="text-brand-orange" size={19} />
//                 <span>[PHONE NUMBER]</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Mail className="text-brand-orange" size={19} />
//                 <span>[EMAIL ADDRESS]</span>
//               </div>
//             </div>
//           </div>
//           <div className="lg:col-span-3">
//             <ContactForm />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
























import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="min-h-[70vh] bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-xl">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange mb-4">
          CONTACT US
        </p>

        <h1 className="text-4xl md:text-6xl font-black text-brand-blue">
          Contact Us
        </h1>

        <span className="block w-10 h-0.5 bg-brand-orange mx-auto my-6" />

        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
          Our contact page is coming soon.
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