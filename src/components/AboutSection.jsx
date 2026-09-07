import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 md:py-24 bg-white"
      aria-label="About PLOVIT Logistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT */}
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
              Delivering Excellence
              <br />
              Across{" "}
              <span className="text-brand-orange">
                Every Mile
              </span>
            </h2>

            {/* Description */}
            <p
              className={`text-gray-500 leading-relaxed text-base md:text-lg mb-8 transition-all duration-500 ease-out delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              PLOVIT Logistics is a global logistics company providing
              innovative and reliable solutions to connect your business to the
              world. With a strong network, advanced technology and a commitment
              to excellence, we ensure your cargo reaches its destination
              safely, on time and every time.
            </p>

            {/* GET IN TOUCH BUTTON */}
            <button
              onClick={() => navigate("/getaquote")}
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
                  GET IN TOUCH
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

          {/* RIGHT */}
          <div
            className={`relative transition-all duration-700 ease-out delay-150 ${
              isVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-4 scale-[0.96] opacity-0"
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">

              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
                alt="PLOVIT Logistics container terminal at sunset"
                className="w-full h-80 md:h-[420px] object-cover"
                loading="lazy"
              />

            </div>

            {/* Orange Decoration */}
            <div
              className="absolute -bottom-4 -right-4 w-20 h-20 bg-brand-orange/10 rounded-2xl -z-10"
              aria-hidden="true"
            />

            {/* Blue Decoration */}
            <div
              className="absolute -top-4 -left-4 w-14 h-14 bg-brand-blue/10 rounded-2xl -z-10"
              aria-hidden="true"
            />
          </div>

        </div>
      </div>
    </section>
  );
}