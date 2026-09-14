import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { services } from "../data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesSection({ showAll = false }) {
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const animationRef = useRef(null);
  const isPausedRef = useRef(false);

  const navigate = useNavigate();

  const displayed = showAll ? services : services.slice(0, 7);

  // Duplicate cards for seamless infinite scrolling
  const carouselServices = [...displayed, ...displayed];

  /* =========================
     SECTION VISIBILITY
  ========================= */
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
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /* =========================
     INFINITE AUTO SCROLL
  ========================= */
  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return undefined;

    let lastTime = performance.now();

    // Slow and smooth speed
    const speed = 28;

    const animate = (currentTime) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      if (!isPausedRef.current) {
        carousel.scrollLeft += (speed * delta) / 1000;

        const halfWidth = carousel.scrollWidth / 2;

        // Seamless loop
        if (carousel.scrollLeft >= halfWidth) {
          carousel.scrollLeft -= halfWidth;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  /* =========================
     ARROW NAVIGATION
  ========================= */
  const scrollNext = () => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: 340,
      behavior: "smooth",
    });
  };

  const scrollPrevious = () => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: -340,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-7 md:py-11 bg-white overflow-hidden"
      aria-label="Our Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================
            SECTION HEADING
        ========================= */}
        <div className="text-center mb-12">
          <p
            className={`
              section-label
              transition-all
              duration-500
              ease-out
              motion-reduce:transition-none
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }
            `}
          >
            WHAT WE OFFER
          </p>

          <span
            className={`
              section-divider
              mx-auto
              transition-all
              duration-500
              ease-out
              motion-reduce:transition-none
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }
            `}
          />

          <h2
            className={`
              section-title
              transition-all
              duration-500
              ease-out
              delay-100
              motion-reduce:transition-none
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }
            `}
          >
            Our Services
          </h2>
        </div>

        {/* =========================
            CAROUSEL
        ========================= */}
        <div className="relative">

          {/* LEFT ARROW */}
          <button
            type="button"
            onClick={scrollPrevious}
            aria-label="Previous services"
            className="
              absolute
              left-1 md:left-2
              top-1/2
              -translate-y-1/2
              z-30
              w-11 h-11
              rounded-full
              bg-white
              text-brand-blue
              shadow-lg
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:bg-brand-orange
              hover:text-white
              hover:scale-110
            "
          >
            <ChevronLeft size={22} />
          </button>

          {/* RIGHT ARROW */}
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next services"
            className="
              absolute
              right-1 md:right-2
              top-1/2
              -translate-y-1/2
              z-30
              w-11 h-11
              rounded-full
              bg-white
              text-brand-blue
              shadow-lg
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:bg-brand-orange
              hover:text-white
              hover:scale-110
            "
          >
            <ChevronRight size={22} />
          </button>

          {/* =========================
              HORIZONTAL CAROUSEL
          ========================= */}
          <div
            ref={carouselRef}
            className="
              flex
              gap-6
              overflow-x-hidden
              px-14
              md:px-16
              py-5
              touch-pan-x
            "
            onMouseEnter={() => {
              isPausedRef.current = true;
            }}
            onMouseLeave={() => {
              isPausedRef.current = false;
            }}
            onTouchStart={() => {
              isPausedRef.current = true;
            }}
            onTouchEnd={() => {
              setTimeout(() => {
                isPausedRef.current = false;
              }, 1200);
            }}
          >
            {carouselServices.map((service, index) => (
              <div
                key={`${service.id}-${index}`}
                className="
                  flex-shrink-0
                  w-[280px]
                  sm:w-[300px]
                  lg:w-[320px]
                  h-[390px]
                "
              >
                <ServiceCard
                  service={service}
                  isVisible={isVisible}
                  animationDelay={0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* =========================
            VIEW ALL SERVICES
        ========================= */}
        {!showAll && (
          <div
            className={`
              text-center
              mt-12
              transition-all
              duration-500
              ease-out
              motion-reduce:transition-none
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }
            `}
            style={{
              transitionDelay: `${displayed.length * 120 + 350}ms`,
            }}
          >
            <button
              onClick={() => navigate("/our-services")}
              aria-label="View all services"
              className="
                group
                relative
                appearance-none
                border-0
                bg-transparent
                cursor-pointer
                p-2
                uppercase
                font-bold
                text-[13px]
                text-brand-blue
                transition-all
                duration-150
              "
            >
              {/* Top Border */}
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

              {/* Bottom Border */}
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

                <span className="relative z-10">
                  VIEW ALL SERVICES
                </span>

                <ArrowRight
                  size={15}
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-300
                    group-hover:translate-x-[4px]
                  "
                />
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}