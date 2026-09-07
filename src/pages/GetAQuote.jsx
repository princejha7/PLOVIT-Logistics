import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function GetAQuote() {
  return (
    <section className="min-h-[70vh] bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-xl">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange mb-4">
          GET A QUOTE
        </p>

        <h1 className="text-4xl md:text-6xl font-black text-brand-blue">
          Get a Quote
        </h1>

        <span className="block w-10 h-0.5 bg-brand-orange mx-auto my-6" />

        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
          Our quotation page is coming soon.
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