import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { services } from "../data/services";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";

export default function ServicesSection({ showAll = false }) {
  const [selectedService, setSelectedService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const displayed = showAll ? services : services.slice(0, 7);

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
      { threshold: 0.15 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-16 md:py-24 bg-white"
      aria-label="Our Services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <p
            className={`section-label transition-all duration-500 ease-out motion-reduce:transition-none ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            WHAT WE OFFER
          </p>

          <span
            className={`section-divider mx-auto transition-all duration-500 ease-out motion-reduce:transition-none ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          />

          <h2
            className={`section-title transition-all duration-500 ease-out delay-100 motion-reduce:transition-none ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            Our Services
          </h2>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayed.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              onReadMore={setSelectedService}
              isVisible={isVisible}
              animationDelay={index * 120 + 180}
            />
          ))}
        </div>

        {/* View All Button */}
        {!showAll && (
          <div
            className={`text-center mt-12 transition-all duration-500 ease-out motion-reduce:transition-none ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: `${displayed.length * 120 + 350}ms`,
            }}
          >
            <button
              onClick={() => navigate("/services")}
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

                {/* Text */}
                <span className="relative z-10">
                  VIEW ALL SERVICES
                </span>

                {/* Arrow */}
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

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}