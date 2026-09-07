import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "About Us", to: "/" },
  { label: "Our Services", to: "/services" },
  { label: "Contact Us", to: "/contact" },
  { label: "Career", to: "/career" },
];

const serviceLinks = [
  "Ocean Freight",
  "Air Freight",
  "Customs Clearance",
  "Domestic Transportation",
  "ODC & Project Cargo",
  "Warehousing",
  "Consultancy Services",
];

export default function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`relative bg-brand-blue text-white transition-all duration-700 ease-out delay-150 ${
              isVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-4 scale-[0.96] opacity-0"
            }`}
      aria-label="PLOVIT Logistics Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 pb-6">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-2 mb-5"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 42 42"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 21L21 6L36 13.5V21"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />

                <path
                  d="M6 21L21 36L36 28.5V21"
                  stroke="#E84A0C"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>

              <div className="leading-none">
                <div className="text-white font-black text-lg tracking-[0.15em]">
                  PLOVIT
                </div>

                <div className="text-white/60 text-[9px] tracking-[0.35em] font-semibold mt-0.5">
                  LOGISTICS
                </div>
              </div>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed mb-5">
              End-to-end logistics services across the globe, driven by
              innovation, executed with precision.
            </p>

            <a
              href="[LINKEDIN URL]"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-brand-orange transition-colors duration-200 text-sm"
              aria-label="PLOVIT Logistics on LinkedIn"
            >
              <ExternalLink size={17} />
              Follow on LinkedIn
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">
              Navigation
            </h3>

            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/60 hover:text-brand-orange text-sm transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <ArrowRight size={11} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">
              Our Services
            </h3>

            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-white/60 hover:text-brand-orange text-sm transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <ArrowRight size={11} />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">
              Contact Us
            </h3>

            <ul className="space-y-4">

              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin
                  size={15}
                  className="mt-0.5 text-brand-orange flex-shrink-0"
                />

                <span>[COMPANY ADDRESS]</span>
              </li>

              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone
                  size={15}
                  className="text-brand-orange flex-shrink-0"
                />

                <span>[PHONE NUMBER]</span>
              </li>

              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail
                  size={15}
                  className="text-brand-orange flex-shrink-0"
                />

                <span>[EMAIL ADDRESS]</span>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">

          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} PLOVIT Logistics. All rights
            reserved.
          </p>

          <p className="text-white/40 text-sm">
            Delivering Excellence Across Every Mile
          </p>

        </div>
      </div>
    </footer>
  );
}