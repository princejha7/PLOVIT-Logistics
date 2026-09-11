import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  service,
  onReadMore,
  isVisible = true,
  animationDelay = 0,
}) {
  return (
    <article
      className={`
        group relative overflow-hidden
        bg-white
        rounded-xl
        shadow-lg
        border border-gray-100
        flex flex-col
        cursor-pointer
        transition-all duration-300 ease-in-out
        hover:-translate-y-1
        hover:shadow-md
        ${isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-5 opacity-0"
        }
      `}
      style={{
        transitionDelay: `${animationDelay}ms`,
      }}
      aria-label={service.title}
    >

      {/* =========================
          HOVER BACKGROUND
      ========================= */}
      <span
        className="
          absolute
          left-0
          top-0
          bottom-0
          w-0
          bg-brand-orange
          z-0
          transition-all
          duration-500
          ease-in-out
          group-hover:w-full
        "
      />

      {/* =========================
          IMAGE
      ========================= */}
      <div className="relative z-10 h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className={`
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            ease-out

            group-hover:scale-105

            ${isVisible
              ? "scale-100"
              : "scale-[0.96]"
            }
          `}
          style={{
            transitionDelay: `${animationDelay + 100}ms`,
          }}
          loading="lazy"
        />

        {/* Image overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-brand-blue/50
            to-transparent
          "
        />

        {/* Icon badge */}
        <div
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            translate-y-1/2
            z-20
          "
        >
          <div
            className="
              w-11
              h-11
              bg-brand-blue
              rounded-full
              flex
              items-center
              justify-center
              shadow-lg
              border-2
              border-white

              transition-all
              duration-300
              ease-in-out

              group-hover:bg-brand-blue
            "
          >
            <svg
              viewBox="0 0 20 20"
              fill="white"
              width="18"
              height="18"
              aria-hidden="true"
            >
              <path d="M10 2L18 7v6l-8 5-8-5V7l8-5z" />
            </svg>
          </div>
        </div>
      </div>

      {/* =========================
          CONTENT
      ========================= */}
      <div
        className={`
          relative
          z-10
          flex
          flex-col
          flex-1
          px-5
          pt-9
          pb-5
          text-center

          transition-all
          duration-500
          ease-out

          ${isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-3 opacity-0"
          }
        `}
        style={{
          transitionDelay: `${animationDelay + 180}ms`,
        }}
      >

        {/* Title */}
        <h3
          className="
            text-brand-blue
            font-bold
            text-[15px]
            mb-2.5
            leading-snug

            transition-colors
            duration-300
            ease-in-out

            group-hover:text-white
          "
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          className="
            text-gray-400
            text-sm
            leading-relaxed
            flex-1
            transition-colors
            duration-300
            ease-in-out

            group-hover:text-white
          "
        >
          {service.shortDescription}
        </p>
      </div>
    </article>
  );
}