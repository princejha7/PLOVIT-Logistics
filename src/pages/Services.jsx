import { useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { services } from "../data/services";

export default function Services() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <main className="bg-white">
      {/* =========================
          SERVICES SECTION
      ========================= */}

      <section className="py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="mb-12">
            <p className="text-brand-orange font-bold text-sm tracking-[0.18em]">
              OUR EXPERTISE
            </p>

            <h2 className="text-brand-blue text-3xl md:text-4xl font-bold mt-3">
              Logistics Services
            </h2>

            <div className="w-16 h-1 bg-brand-orange mt-5" />
          </div>

          {/* =========================
              25 / 75 LAYOUT
          ========================= */}

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

            {/* =========================
                LEFT - 25%
            ========================= */}

            <div className="w-full lg:w-[25%]">
              <div className="flex flex-col">

                {services.map((service) => {
                  const isActive = selectedService.id === service.id;

                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`
                        group
                        relative
                        w-full
                        text-left
                        flex
                        items-center
                        rounded-lg
                        gap-3
                        px-4
                        py-2
                        border-b
                        border-gray-100
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "bg-brand-orange text-white"
                            : "bg-white text-brand-blue hover:bg-gray-50"
                        }
                      `}
                    >

                      {/* Active Indicator */}
                      <span
                        className={`
                          absolute
                          left-0
                          top-0
                          bottom-0
                          w-1
                          bg-brand-blue
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "opacity-100"
                              : "opacity-0"
                          }
                        `}
                      />

                      {/* Service Icon */}
                      <span
                        className={`
                          flex
                          items-center
                          justify-center
                          w-14
                          h-12
                          flex-shrink-0
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "bg-brand-orange text-white"
                              : "bg-white text-brand-blue group-hover:bg-white group-hover:text-white"
                          }
                        `}
                      >
                        <img
                          src={service.icon}
                          alt={service.title}
                          className="w-full h-full object-contain"
                        />
                      </span>

                      {/* Service Name */}
                      <span className="flex-1 text-sm font-semibold leading-tight">
                        {service.title}
                      </span>

                      {/* Arrow */}
                      <ChevronRight
                        size={19}
                        className={`
                          flex-shrink-0
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "text-brand-blue translate-x-1 drop-shadow-[0_0_6px_rgba(244,162,97,0.9)]"
                              : "text-gray-300 group-hover:text-brand-blue group-hover:translate-x-1 group-hover:drop-shadow-[0_0_6px_rgba(244,162,97,0.9)]"
                          }
                        `}
                      />

                    </button>
                  );
                })}

              </div>
            </div>

            {/* =========================
                RIGHT - 75%
            ========================= */}

            <div className="w-full lg:w-[75%]">

              <div
                key={selectedService.id}
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-8
                  bg-gray-50
                  rounded-2xl
                  overflow-hidden
                  animate-[fadeIn_0.4s_ease-out]
                "
              >

                {/* Image */}
                <div className="relative min-h-[300px] md:min-h-[460px] overflow-hidden">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-105
                    "
                  />
                </div>

                {/* Content */}
        <div className="flex flex-col justify-center p-5 sm:p-6 md:p-8">

  <span className="text-brand-orange font-bold text-xl sm:text-sm  mb-3 sm:mb-4">
    PLOVIT LOGISTICS
  </span>

  <h3 className="text-brand-blue text-3xl sm:text-2xl md:text-2xl font-bold leading-tight">
    {selectedService.title}
  </h3>

  <div className="w-12 h-1 bg-brand-orange my-4 sm:my-5" />

  {/* Full Description */}
  <div
    className="
      text-gray-500
      text-base
      sm:text-sm
      leading-7
      sm:leading-6
      whitespace-pre-line
      [&_strong]:font-bold
      [&_strong]:text-brand-blue
    "
    dangerouslySetInnerHTML={{
      __html: selectedService.fullDescription,
    }}
  />

</div>

{/* kk */}

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================
          LET'S CONNECT
      ========================= */}

      <section
        id="lets-connect"
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Content */}
            <div>

              <p className="text-brand-orange font-bold text-sm tracking-[0.18em] mb-4">
                LET'S CONNECT
              </p>

              <h2 className="text-brand-blue text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Let's discuss your
                <span className="text-brand-orange">
                  {" "}logistics requirements.
                </span>
              </h2>

              <div className="w-16 h-1 bg-brand-orange mt-6 mb-7" />

              <p className="text-gray-500 leading-relaxed max-w-xl">
                Have a logistics requirement or looking for the right
                transportation solution? Get in touch with our team and
                let's find the right solution for your business.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center">
                    <ArrowRight size={17} />
                  </div>

                  <span className="text-gray-600">
                    Professional logistics solutions
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center">
                    <ArrowRight size={17} />
                  </div>

                  <span className="text-gray-600">
                    Flexible service options
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center">
                    <ArrowRight size={17} />
                  </div>

                  <span className="text-gray-600">
                    Reliable customer support
                  </span>
                </div>

              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">

              <h3 className="text-brand-blue text-2xl font-bold mb-2">
                Get in Touch
              </h3>

              <p className="text-gray-400 text-sm mb-8">
                Tell us about your requirement.
              </p>

              <form className="space-y-5">

                {/* Company Name */}
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-semibold text-gray-600 mb-2"
                  >
                    Company Name
                  </label>

                  <input
                    id="companyName"
                    type="text"
                    placeholder="Enter company name"
                    className="
                      w-full
                      px-4
                      py-3.5
                      rounded-lg
                      border
                      border-gray-200
                      outline-none
                      text-gray-700
                      focus:border-brand-orange
                      transition-all
                    "
                  />
                </div>

                {/* Company Representative Name */}
                <div>
                  <label
                    htmlFor="companyRepresentativeName"
                    className="block text-sm font-semibold text-gray-600 mb-2"
                  >
                    Company Representative Name
                  </label>

                  <input
                    id="companyRepresentativeName"
                    type="text"
                    placeholder="Representative name"
                    className="
                      w-full
                      px-4
                      py-3.5
                      rounded-lg
                      border
                      border-gray-200
                      outline-none
                      text-gray-700
                      focus:border-brand-orange
                      transition-all
                    "
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-gray-600 mb-2"
                  >
                    Service
                  </label>

                  <select
                    id="service"
                    className="
                      w-full
                      px-4
                      py-3.5
                      rounded-lg
                      border
                      border-gray-200
                      outline-none
                      text-gray-700
                      focus:border-brand-orange
                      transition-all
                      bg-white
                    "
                  >
                    <option value="">
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option
                        key={service.id}
                        value={service.title}
                      >
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-600 mb-2"
                  >
                    Email ID
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter email ID"
                    className="
                      w-full
                      px-4
                      py-3.5
                      rounded-lg
                      border
                      border-gray-200
                      outline-none
                      text-gray-700
                      focus:border-brand-orange
                    "
                  />
                </div>

                {/* Contact Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-600 mb-2"
                  >
                    Contact Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter contact number"
                    className="
                      w-full
                      px-4
                      py-3.5
                      rounded-lg
                      border
                      border-gray-200
                      outline-none
                      text-gray-700
                      focus:border-brand-orange
                    "
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="
                    group
                    w-full
                    relative
                    overflow-hidden
                    bg-brand-blue
                    text-white
                    py-4
                    rounded-lg
                    font-bold
                    uppercase
                    text-sm
                    tracking-wide
                    transition-all
                    duration-300
                  "
                >
                  <span
                    className="
                      absolute
                      inset-0
                      w-0
                      bg-brand-orange
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Submit

                    <ArrowRight
                      size={17}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </span>
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}