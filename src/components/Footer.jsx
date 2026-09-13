import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import footerLogo from "../assets/images/companyLogo/FooterCompany.png";
import linkedin from "../assets/images/socialMedia/footlinkedin.png";
import x from "../assets/images/socialMedia/xlogo.png";
import telephone from "../assets/images/socialMedia/landline.png";

const navLinks = [
  { label: "About Us", to: "/" },
  { label: "Our Services", to: "/services" },
  { label: "Contact Us", to: "/contact" },
  { label: "Career", to: "/career" },
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
      <div className="mx-auto max-w-7xl px-4 py-14 pb-6 sm:px-6 lg:px-8">
        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* ===================================================
              BRAND
          ==================================================== */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="mb-5 flex items-center gap-2"
            >
              <img
                src={footerLogo}
                alt="PLOVIT Logistics"
                className="mt-2 h-20 w-20 object-contain"
              />

              <div className="leading-none">
                <div className="text-lg font-black tracking-[0.15em] text-white">
                  PLOVIT
                </div>

                <div className="mt-0.5 text-[9px] font-semibold tracking-[0.35em] text-white/60">
                  LOGISTICS
                </div>
              </div>
            </Link>

            <p className="mb-5 text-sm leading-relaxed text-white/60">
              End-to-end logistics services across the globe, driven by
              innovation, executed with precision.
            </p>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/plovit-logistics-private-limited"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-200 hover:text-brand-orange"
              aria-label="PLOVIT Logistics on LinkedIn"
            >
              <ExternalLink size={17} />
              Follow on LinkedIn
            </a>
          </div>

          {/* ===================================================
              NAVIGATION
          ==================================================== */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h3>

            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-1.5 text-sm text-white/60 transition-colors duration-200 hover:text-brand-orange"
                  >
                    <ArrowRight size={11} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===================================================
              CONTACT
          ==================================================== */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white">
              Contact Us
            </h3>

            <ul className="space-y-4">

              {/* Corporate Address */}
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin
                  size={15}
                  className="mt-0.5 flex-shrink-0 text-brand-orange"
                />

                <span>
                  Corporate Address: 942, 9th Floor, Astralis Supernova,
                  Sector 94, Noida, Uttar Pradesh 201301, India
                </span>
              </li>

              {/* Registered Address */}
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin
                  size={15}
                  className="mt-0.5 flex-shrink-0 text-brand-orange"
                />

                <span>
                  Registered Address: C-84, Ground Floor, Nai Basti,
                  Jamia Nagar, South Delhi, Delhi 110025, India
                </span>
              </li>

              {/* Mobile */}
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone
                  size={15}
                  className="flex-shrink-0 text-brand-orange"
                />

                <a
                  href="tel:+919315111174"
                  className="text-sm leading-6 transition-colors hover:text-brand-orange"
                >
                  +91 931 511 1174
                </a>
              </li>

              {/* Landline */}
              <li className="flex items-center gap-3 text-sm text-white/60">
                <img
                  src={telephone}
                  alt="Telephone"
                  className="h-4 w-4 flex-shrink-0 object-contain"
                />

                <a
                  href="tel:+911204897315"
                  className="transition-colors hover:text-brand-orange"
                >
                  +91 120 489 7315
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail
                  size={15}
                  className="flex-shrink-0 text-brand-orange"
                />

                <a
                  href="mailto:info@plovitlogistics.com"
                  className="break-all transition-colors hover:text-brand-orange"
                >
                  info@plovitlogistics.com
                </a>
              </li>
            </ul>
          </div>

          {/* ===================================================
              SOCIAL MEDIA
          ==================================================== */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white">
              Social Media
            </h3>

            <ul className="space-y-4">

              {/* LinkedIn */}
              <li className="flex items-start gap-3 text-sm text-white/60">
                <a
                  href="https://www.linkedin.com/company/plovit-logistics-private-limited"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-200 hover:text-brand-orange"
                  aria-label="PLOVIT Logistics on LinkedIn"
                >
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="h-5 w-5 object-contain"
                  />

                  LinkedIn
                </a>
              </li>

              {/* X */}
              <li className="flex items-start gap-3 text-sm text-white/60">
                <a
                  href="https://x.com/PlovitLogistics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-200 hover:text-brand-orange"
                  aria-label="PLOVIT Logistics on X"
                >
                  <img
                    src={x}
                    alt="X"
                    className="h-4 w-4 object-contain"
                  />

                  X
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="mx-auto text-center text-sm text-white/40">
            &copy; {new Date().getFullYear()} Plovit Logistics Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
}