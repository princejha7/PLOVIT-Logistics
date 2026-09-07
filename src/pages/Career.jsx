// import { useEffect } from "react";
// import { ArrowRight, BriefcaseBusiness } from "lucide-react";

// export default function Career() {
//   useEffect(() => {
//     document.title = "Careers | PLOVIT Logistics";
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="pt-16 md:pt-20">
//       <div className="bg-brand-blue py-16 md:py-24 text-center text-white">
//         <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">
//           JOIN OUR TEAM
//         </p>
//         <h1 className="text-3xl md:text-5xl font-black mb-3">
//           Build What Moves the World
//         </h1>
//         <p className="text-white/75 max-w-xl mx-auto px-4 text-sm md:text-base">
//           Bring your curiosity, care, and logistics expertise to a team that
//           keeps business moving.
//         </p>
//       </div>

//       <section className="py-16 md:py-24 bg-white">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
//           <BriefcaseBusiness
//             className="mx-auto text-brand-orange mb-5"
//             size={42}
//           />
//           <p className="section-label">OPPORTUNITIES</p>
//           <h2 className="section-title mt-2">
//             There&apos;s room to grow here.
//           </h2>
//           <span className="section-divider mx-auto" />
//           <p className="text-gray-500 leading-relaxed mb-8">
//             We&apos;re always interested in meeting thoughtful people who care
//             about customers, collaboration, and getting the details right. Send
//             us your profile and we&apos;ll be in touch when the right
//             opportunity opens.
//           </p>
//           <a href="mailto:[EMAIL ADDRESS]" className="btn-primary">
//             SEND YOUR PROFILE <ArrowRight size={15} />
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// }













import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Career() {
  return (
    <section className="min-h-[70vh] bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-xl">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange mb-4">
          CAREERS
        </p>

        <h1 className="text-4xl md:text-6xl font-black text-brand-blue">
          Career
        </h1>

        <span className="block w-10 h-0.5 bg-brand-orange mx-auto my-6" />

        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
          Our career opportunities are coming soon.
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