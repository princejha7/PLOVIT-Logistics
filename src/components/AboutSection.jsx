import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// Images
import contactBuilding from "../assets/images/companyLogo/contactBuilding.png";
import companyBuilding from "../assets/images/companyLogo/companyBuilding.png";
import companyRes from "../assets/images/companyLogo/companyRes.png";

const slides = [
  {
    id: 1,
    image: contactBuilding,
    heading: "PLOVIT Logistics",
  },
  {
    id: 2,
    image: companyRes,
    heading: "PLOVIT Logistics",
  },
  {
    id: 3,
    image: companyBuilding,
    heading: "PLOVIT Logistics",
  },
];

export default function AboutSection() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  // Scroll to Contact section
  const scrollToConnect = () => {
    const el = document.getElementById("lets-connect");

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/contact-us");
    }
  };

  // Intersection animation
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-7 md:py-11 bg-brand-gray"
      aria-label="About PLOVIT Logistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ================= LEFT ================= */}
          <div>

            {/* Label */}
            <p
              className={`section-label transition-all duration-500 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              ABOUT US
            </p>

            {/* Divider */}
            <span
              className={`section-divider transition-all duration-500 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            />

            {/* Heading */}
            <h2
              className={`section-title mb-6 transition-all duration-500 ease-out delay-150 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <strong>Plovit Logistics Private Limited</strong>
            </h2>

            {/* Description */}
            <p
              className={`text-gray-500 leading-relaxed text-justify text-base md:text-lg mb-8 transition-all duration-500 ease-out delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              is a leading freight forwarding & logistics company based in Noida, founded by industry experts. We have rapidly expanded our presence across India, now operating from over 29 locations, including branches in Mumbai, Mundra, and Chennai. <br />
Our journey in the logistics industry began in 2020, well before our official registration in 2025 This early start allowed us to build valuable expertise, establish strong industry relationships, and develop a deep understanding of our clients’ needs. <br />
We offer a comprehensive range of logistics solutions, including international logistics, customs brokerage, warehousing, cross-border trade, and project cargo movement along with supply chain consultancy.
            </p>

            {/* ================= GET IN TOUCH BUTTON ================= */}
            <button
              type="button"
              onClick={scrollToConnect}
              className={`group relative appearance-none border-0 bg-transparent cursor-pointer p-2 uppercase font-bold text-[13px] text-brand-blue transition-all duration-500 ease-out delay-[450ms] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              aria-label="Get in touch with PLOVIT Logistics"
            >

              {/* Outer Top Border */}
              <span
                className="
                  absolute
                  top-0
                  left-0
                  right-0
                  h-[calc(50%-5px)]
                  border
                  border-brand-orange
                  border-b-0
                  transition-all
                  duration-150
                  group-active:left-[3px]
                  group-active:right-[3px]
                  group-active:top-[3px]
                "
              />

              {/* Outer Bottom Border */}
              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  h-[calc(50%-5px)]
                  border
                  border-brand-orange
                  border-t-0
                  transition-all
                  duration-150
                  group-active:left-[3px]
                  group-active:right-[3px]
                  group-active:bottom-[3px]
                "
              />

              {/* Main Button */}
              <span
                className="
                  relative
                  flex
                  items-center
                  justify-center
                  gap-2
                  overflow-hidden
                  bg-brand-blue
                  px-5
                  py-3
                  text-white
                "
              >

                {/* Orange Sliding Layer */}
                <span
                  className="
                    absolute
                    top-0
                    bottom-[-1px]
                    left-[-8px]
                    w-0
                    bg-brand-orange
                    skew-x-[-15deg]
                    transition-all
                    duration-300
                    ease-out
                    group-hover:w-[calc(100%+15px)]
                  "
                />

                {/* Button Text */}
                <span className="relative z-10">
                  Let's Connect
                </span>

                {/* Arrow */}
                <ArrowRight
                  size={15}
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-300
                    group-hover:translate-x-[3px]
                  "
                />
              </span>
            </button>
          </div>

          {/* ================= RIGHT / IMAGE SLIDER ================= */}
          <div
            className="
              relative
              h-72
              sm:h-80
              md:h-96
              lg:h-[520px]
              rounded-2xl
              overflow-hidden
              shadow-2xl
            "
          >

            {/* Slides */}
            {slides.map((slide, index) => (
              <img
                key={slide.id}
                src={slide.image}
                alt={slide.heading}
                className={`
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition-opacity
                  duration-700
                  ${
                    index === current
                      ? "opacity-100"
                      : "opacity-0"
                  }
                `}
              />
            ))}

            {/* Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-brand-blue/20
                to-transparent
              "
            />

            {/* Slide Dots */}
            <div
              className="
                absolute
                bottom-4
                left-1/2
                -translate-x-1/2
                flex
                gap-2
                z-10
              "
            >
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className={`
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      index === current
                        ? "w-6 h-2 bg-brand-orange"
                        : "w-2 h-2 bg-white/60 hover:bg-white"
                    }
                  `}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={
                    index === current ? "true" : undefined
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}