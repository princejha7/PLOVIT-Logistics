import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ExternalLink, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import footerLogo from "../assets/images/companyLogo/FooterCompany.png";
import linkedin from "../assets/images/socialMedia/footlinkedin.png";
import x from "../assets/images/socialMedia/xlogo.png";
import telephone from "../assets/images/socialMedia/foottelephone.png";

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
  "Supply Chain Solutions",
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
      },
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
            <Link to="/" className="flex items-center gap-2 mb-5">
              <img
                src={footerLogo}
                alt="Company Logo"
                className="h-20 w-20 mt-2"
              />

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
              href="https://www.linkedin.com/company/plovit-logistics-private-limited"
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

                <span>
                  Corporate Address: 942, 9th Floor, Astralis Supernova, Sector
                  94, Noida, Uttar Pradesh 201301, India
                </span>
              </li>

              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin
                  size={15}
                  className="mt-0.5 text-brand-orange flex-shrink-0"
                />

                <span>
                  Registered Address: C-84, Ground Floor, Nai Basti, Jamia
                  Nagar, South Delhi, Delhi 110025, India
                </span>
              </li>

              <li className="flex items-center gap-3 text-white/60 text-sm">
                 <Phone
                  size={15}
                  className="mt-0.5 text-brand-orange flex-shrink-0"
                />
                 <a
                href="tel:+919315111174"
                className="text-sm leading-6 transition-colors hover:text-brand-orange"
              >
                +91 931 511 1174
              </a>
              </li>

              <li className="flex items-center gap-3 text-white/60 text-sm">
               <img
                  src={telephone}
                  alt="Telephone"
                  className="w-4 h-4 object-cover"
                />

              <a href="tel:+911204897315" className="hover:text-brand-orange">
               +91 120 489 7315
                </a>
              </li>

              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail size={15} className="text-brand-orange flex-shrink-0" />

                <a href="mailto:info@plovitlogistics.com" className="hover:text-brand-orange">info@plovitlogistics.com</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}

          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5">
              Social Media
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <a
                  href="https://www.linkedin.com/company/plovit-logistics-private-limited"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-brand-orange transition-colors duration-200 text-sm"
                  aria-label="PLOVIT Logistics on LinkedIn"
                >
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="w-5 h-5 object-cover"
                  />
                  LinkedIn
                </a>
              </li>

              <li className="flex items-start gap-3 text-white/60 text-sm">
                <a
                  href="https://x.com/PlovitLogistics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-brand-orange transition-colors duration-200 text-sm"
                  aria-label="PLOVIT Logistics on Twitter"
                >
                  <img
                    src={x}
                    alt="X"
                    className="w-4 h-4 object-cover"
                  />
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-sm mx-auto">
            &copy; {new Date().getFullYear()} Plovit Logistics Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
}
