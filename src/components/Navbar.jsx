import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/images/companyLogo/logo.png";
import linkedin from "../assets/images/socialMedia/linkedin.png";

const navLinks = [
  { label: "About Us", to: "/" },
  { label: "Our Services", to: "/services" },
  { label: "Contact Us", to: "/contact" },
  { label: "Career", to: "/career" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleGetQuote = () => {
    navigate("/contact");
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* =========================
                LOGO
            ========================= */}

            <Link
              to="/"
              className="flex items-center gap-2.5 flex-shrink-0"
              aria-label="PLOVIT Logistics Home"
            >
              <img
                src={logo}
                alt="PLOVIT Logistics"
                className="h-20 w-20 mt-2 object-contain"
              />

              <div className="leading-none">
                <div className="text-brand-orange font-black text-xl tracking-[0.15em]">
                  PLOVIT
                </div>

                <div className="text-brand-blue text-[9px] tracking-[0.35em] font-semibold mt-0.5 opacity-70">
                  LOGISTICS
                </div>
              </div>
            </Link>

            {/* =========================
                DESKTOP NAV
            ========================= */}

            <div className="hidden md:flex items-center gap-7">

              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `text-sm font-semibold tracking-wide pb-1 relative transition-colors duration-200 ${
                      isActive
                        ? "text-brand-blue after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-orange"
                        : "text-brand-blue hover:text-brand-orange"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/plovit-logistics-private-limited"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="PLOVIT Logistics LinkedIn"
                className="group flex items-center justify-center"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-8 h-8 object-contain transition-transform rounded-lg duration-300 group-hover:scale-110"
                />
              </a>
            </div>

            {/* =========================
                GET A QUOTE
            ========================= */}

            <div className="hidden md:block">
              <button
                onClick={handleGetQuote}
                className="quote-button"
                aria-label="Get a Quote"
              >
                <span className="quote-button-lg">
                  <span className="quote-button-sl" />

                  <span className="quote-button-text">
                    GET A QUOTE
                  </span>

                  <ArrowRight
                    size={15}
                    className="quote-button-arrow"
                  />
                </span>
              </button>
            </div>

            {/* =========================
                MOBILE MENU BUTTON
            ========================= */}

            <button
              className="md:hidden p-2 text-brand-blue"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>

          {/* =========================
              MOBILE MENU
          ========================= */}

          {isOpen && (
            <div className="md:hidden border-t border-gray-100 py-3 animate-fade-in">
              <div className="flex flex-col">

                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                        isActive
                          ? "text-brand-orange bg-orange-50 border-l-2 border-brand-orange"
                          : "text-brand-blue hover:text-brand-orange hover:bg-gray-50"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}

                {/* Mobile LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/plovit-logistics-private-limited"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 flex items-center gap-3 text-sm font-semibold text-brand-blue hover:text-brand-orange"
                >
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="w-6 h-6 object-contain"
                  />

                  <span>LinkedIn</span>
                </a>

                {/* Mobile CTA */}
                <div className="px-4 pt-3 pb-1">
                  <button
                    onClick={handleGetQuote}
                    className="quote-button w-full"
                  >
                    <span className="quote-button-lg w-full">
                      <span className="quote-button-sl" />

                      <span className="quote-button-text">
                        GET A QUOTE
                      </span>

                      <ArrowRight
                        size={15}
                        className="quote-button-arrow"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* =========================
          CTA BUTTON STYLES
      ========================= */}

      <style>{`
        .quote-button {
          appearance: none;
          border: none;
          background: none;
          color: #0D2B5E;
          cursor: pointer;
          position: relative;
          padding: 8px;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 13px;
          transition: all 0.15s ease;
        }

        .quote-button::before,
        .quote-button::after {
          content: "";
          display: block;
          position: absolute;
          right: 0;
          left: 0;
          height: calc(50% - 5px);
          border: 1px solid #E84A0C;
          transition: all 0.15s ease;
        }

        .quote-button::before {
          top: 0;
          border-bottom-width: 0;
        }

        .quote-button::after {
          bottom: 0;
          border-top-width: 0;
        }

        .quote-button:active,
        .quote-button:focus {
          outline: none;
        }

        .quote-button:active::before,
        .quote-button:active::after {
          right: 3px;
          left: 3px;
        }

        .quote-button:active::before {
          top: 3px;
        }

        .quote-button:active::after {
          bottom: 3px;
        }

        .quote-button-lg {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 10px 20px;
          color: #ffffff;
          background-color: #0D2B5E;
          overflow: hidden;
        }

        .quote-button-lg::after {
          content: "";
          display: block;
          position: absolute;
          right: 0;
          bottom: 0;
          width: 4px;
          height: 4px;
          background-color: #0D2B5E;
          transition: all 0.2s ease;
        }

        .quote-button-sl {
          display: block;
          position: absolute;
          top: 0;
          bottom: -1px;
          left: -8px;
          width: 0;
          background-color: #E84A0C;
          transform: skew(-15deg);
          transition: all 0.3s ease;
        }

        .quote-button-text {
          position: relative;
          z-index: 2;
          transition: color 0.2s ease;
        }

        .quote-button-arrow {
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .quote-button:hover {
          color: #0D2B5E;
        }

        .quote-button:hover .quote-button-sl {
          width: calc(100% + 15px);
        }

        .quote-button:hover .quote-button-lg::after {
          background-color: #ffffff;
        }

        .quote-button:hover .quote-button-arrow {
          transform: translateX(3px);
        }

        .quote-button:active .quote-button-lg {
          transform: scale(0.98);
        }

        @media (max-width: 767px) {
          .quote-button {
            width: 100%;
          }

          .quote-button-lg {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}