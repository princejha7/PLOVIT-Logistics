import { useEffect, useRef, useState } from "react";
import {
  Target,
  Globe2,
  PackageCheck,
  Clock,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Industry Expertise",
    description:
      "Years of experience in delivering reliable logistics solutions across industries.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description:
      "Strong global network ensuring seamless international operations.",
  },
  {
    icon: PackageCheck,
    title: "Customized Solutions",
    description:
      "Tailored logistics solutions designed to meet your unique business needs.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "We value time and ensure your cargo reaches on time, every time.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our expert team is available 24/7 to support your logistics requirements.",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

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

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 bg-brand-gray transition-all duration-700 ease-out delay-150 ${
        isVisible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-4 scale-[0.96] opacity-0"
      }`}
      aria-label="Why Choose PLOVIT Logistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="section-label">WHY CHOOSE US?</p>

          <span className="section-divider mx-auto" />

          <h2 className="section-title">
            Built on Trust. Driven by Excellence.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="
                group
                relative
                overflow-hidden
                bg-white
                rounded-xl
                p-6
                text-center
                shadow-sm
                flex
                flex-col
                items-center
                transition-all
                duration-[640ms]
                ease-[cubic-bezier(0.23,1,0.32,1)]
                hover:-translate-y-2
                hover:shadow-lg
              "
            >
              {/* Hover Background Effect */}
              <div
                className="
                  absolute
                  inset-0
                  bg-brand-orange
                  opacity-0
                  scale-100
                  skew-x-[-24deg]
                  origin-center
                  [clip-path:circle(0%_at_50%_50%)]
                  group-hover:opacity-100
                  group-hover:skew-x-0
                  group-hover:[clip-path:circle(140.9%_at_0_0)]
                  transition-all
                  duration-[640ms]
                  ease-[cubic-bezier(0.23,1,0.32,1)]
                  pointer-events-none
                "
              />

              {/* Icon */}
              <div
                className="
                  relative
                  z-10
                  w-16
                  h-16
                  rounded-full
                  bg-brand-orange/10
                  flex
                  items-center
                  justify-center
                  mb-5
                  transition-all
                  duration-[640ms]
                  ease-[cubic-bezier(0.23,1,0.32,1)]
                  group-hover:bg-white/20
                  group-hover:scale-105
                "
              >
                <Icon
                  size={26}
                  className="
                    text-brand-blue
                    transition-colors
                    duration-[640ms]
                    ease-[cubic-bezier(0.23,1,0.32,1)]
                    group-hover:text-white
                  "
                />
              </div>

              {/* Title */}
              <h3
                className="
                  relative
                  z-10
                  text-brand-blue
                  font-bold
                  text-[15px]
                  mb-3
                  transition-colors
                  duration-[640ms]
                  ease-[cubic-bezier(0.23,1,0.32,1)]
                  group-hover:text-white
                "
              >
                {title}
              </h3>

              {/* Description */}
              <p
                className="
                  relative
                  z-10
                  text-gray-400
                  text-sm
                  leading-relaxed
                  flex-1
                  transition-colors
                  duration-[640ms]
                  ease-[cubic-bezier(0.23,1,0.32,1)]
                  group-hover:text-white
                "
              >
                {description}
              </p>

              {/* Bottom Line */}
              <div
                className="
                  relative
                  z-10
                  w-8
                  h-0.5
                  bg-brand-orange
                  mt-5
                  transition-all
                  duration-[640ms]
                  ease-[cubic-bezier(0.23,1,0.32,1)]
                  group-hover:bg-white
                  group-hover:w-12
                "
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}