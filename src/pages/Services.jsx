import { useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle,
  XCircle,
} from "lucide-react";

import { services } from "../data/services";

export default function Services() {
  const [selectedService, setSelectedService] = useState(services[0]);

  // Form status
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // =========================================================
  // WEB3FORMS SUBMIT
  // =========================================================
  const onSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    setStatus({
      type: "",
      message: "",
    });

    const form = event.target;
    const formData = new FormData(form);

    // Web3Forms Access Key
    formData.append(
      "access_key",
      "9a9c2ea6-2d8c-4f4f-ba5e-14b47997d9a0"
    );

    // Email subject
    formData.append(
      "subject",
      "New Service Inquiry - PLOVIT Logistics"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your inquiry has been sent successfully.",
        });

        // Reset form
        form.reset();

        // Hide popup after 4 seconds
        setTimeout(() => {
          setStatus({
            type: "",
            message: "",
          });
        }, 4000);
      } else {
        setStatus({
          type: "error",
          message:
            data.message ||
            "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);

      setStatus({
        type: "error",
        message:
          "Unable to send your inquiry. Please check your internet connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white">

      {/* =========================================================
          POPUP NOTIFICATION
      ========================================================== */}
      {status.message && (
        <div className="fixed right-5 top-5 z-[9999] animate-[slideIn_0.4s_ease-out]">
          <div
            className={`flex min-w-[320px] max-w-[420px] items-center gap-3 rounded-xl border bg-white px-5 py-4 shadow-2xl ${
              status.type === "success"
                ? "border-green-200"
                : "border-red-200"
            }`}
          >
            {/* ICON */}
            <div
              className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${
                status.type === "success"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {status.type === "success" ? (
                <CheckCircle size={23} />
              ) : (
                <XCircle size={23} />
              )}
            </div>

            {/* MESSAGE */}
            <div className="flex-1">
              <p
                className={`text-sm font-semibold ${
                  status.type === "success"
                    ? "text-green-700"
                    : "text-red-700"
                }`}
              >
                {status.type === "success"
                  ? "Success"
                  : "Error"}
              </p>

              <p className="mt-1 text-sm leading-5 text-gray-600">
                {status.message}
              </p>
            </div>

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() =>
                setStatus({
                  type: "",
                  message: "",
                })
              }
              className="text-xl leading-none text-gray-400 transition-colors hover:text-gray-600"
              aria-label="Close notification"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* =========================================================
          SERVICES SECTION
      ========================================================== */}
      <section className="overflow-hidden py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* SECTION HEADING */}
          <div className="mb-12 mt-9">
            <p className="text-sm font-bold tracking-[0.18em] text-brand-orange">
              OUR EXPERTISE
            </p>

            <h2 className="mt-3 text-3xl font-bold text-brand-blue md:text-4xl">
              Logistics Services
            </h2>

            <div className="mt-5 h-1 w-16 bg-brand-orange" />
          </div>

          {/* =====================================================
              25 / 75 LAYOUT
          ====================================================== */}
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">

            {/* =====================================================
                LEFT - 25%
            ====================================================== */}
            <div className="w-full lg:w-[25%]">
              <div className="flex flex-col">
                {services.map((service) => {
                  const isActive =
                    selectedService.id === service.id;

                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() =>
                        setSelectedService(service)
                      }
                      className={`
                        group relative flex w-full items-center gap-3
                        rounded-lg border-b border-gray-100
                        px-4 py-2 text-left
                        transition-all duration-300
                        ${
                          isActive
                            ? "bg-brand-orange text-white"
                            : "bg-white text-brand-blue"
                        }
                      `}
                    >
                      {/* ACTIVE INDICATOR */}
                      <span
                        className={`
                          absolute bottom-0 left-0 top-0 w-1
                          bg-brand-blue
                          transition-all duration-300
                          ${
                            isActive
                              ? "opacity-100"
                              : "opacity-0"
                          }
                        `}
                      />

                      {/* SERVICE ICON */}
                      <span
                        className={`
                          flex h-12 w-14 flex-shrink-0
                          items-center justify-center
                          transition-all duration-300
                          ${
                            isActive
                              ? "bg-brand-orange text-white"
                              : "bg-white text-brand-blue"
                          }
                        `}
                      >
                        <img
                          src={service.icon}
                          alt={service.title}
                          className="h-full w-full object-contain"
                        />
                      </span>

                      {/* SERVICE NAME */}
                      <span className="flex-1 text-sm font-semibold leading-tight">
                        {service.title}
                      </span>

                      {/* ARROW */}
                      <ChevronRight
                        size={19}
                        className={`
                          flex-shrink-0
                          transition-all duration-300
                          ${
                            isActive
                              ? "translate-x-1 text-brand-blue drop-shadow-[0_0_6px_rgba(244,162,97,0.9)]"
                              : "text-gray-300 group-hover:translate-x-1 group-hover:text-brand-blue group-hover:drop-shadow-[0_0_6px_rgba(244,162,97,0.9)]"
                          }
                        `}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =====================================================
                RIGHT - 75%
            ====================================================== */}
            <div className="w-full lg:w-[75%]">
              <div
                key={selectedService.id}
                className="
                  grid
                  grid-cols-1
                  gap-8
                  overflow-hidden
                  rounded-2xl
                  bg-gray-50
                  animate-[fadeIn_0.4s_ease-out]
                  md:grid-cols-2
                "
              >
                {/* IMAGE */}
                <div className="relative min-h-[300px] overflow-hidden md:min-h-[460px]">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-105
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col justify-center p-5 sm:p-6 md:p-8">
                  <h3 className="text-2xl font-bold leading-tight text-brand-blue sm:text-2xl md:text-2xl">
                    {selectedService.title}
                  </h3>

                  <div className="my-4 h-1 w-12 bg-brand-orange sm:my-5" />

                  {/* FULL DESCRIPTION */}
                  <div
                    className="
                      text-base
                      leading-7
                      text-gray-500
                      sm:text-sm
                      sm:leading-6
                      [&_strong]:font-bold
                      [&_strong]:text-brand-blue
                      whitespace-pre-line
                    "
                    dangerouslySetInnerHTML={{
                      __html: selectedService.fullDescription,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LET'S CONNECT
      ========================================================== */}
      <section
        id="lets-connect"
        className="bg-gray-50 py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* =====================================================
                LEFT CONTENT
            ====================================================== */}
            <div>
              <p className="mb-4 text-sm font-bold tracking-[0.18em] text-brand-orange">
                LET'S CONNECT
              </p>

              <h2 className="text-3xl font-bold leading-tight text-brand-blue sm:text-4xl md:text-5xl">
                Let's discuss your
                <span className="text-brand-orange">
                  {" "}
                  logistics requirements.
                </span>
              </h2>

              <div className="mb-7 mt-6 h-1 w-16 bg-brand-orange" />

              <p className="max-w-xl leading-relaxed text-gray-500">
                Have a logistics requirement or looking for the right
                transportation solution? Get in touch with our team and
                let's find the right solution for your business.
              </p>

              {/* FEATURES */}
              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white">
                    <ArrowRight size={17} />
                  </div>

                  <span className="text-gray-600">
                    Professional logistics solutions
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white">
                    <ArrowRight size={17} />
                  </div>

                  <span className="text-gray-600">
                    Flexible service options
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white">
                    <ArrowRight size={17} />
                  </div>

                  <span className="text-gray-600">
                    Reliable customer support
                  </span>
                </div>

              </div>
            </div>

            {/* =====================================================
                FORM
            ====================================================== */}
            <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8 md:p-10">

              <h3 className="mb-2 text-2xl font-bold text-brand-blue">
                Get in Touch
              </h3>

              <p className="mb-8 text-sm text-gray-400">
                Tell us about your requirement.
              </p>

              <form
                className="space-y-5"
                onSubmit={onSubmit}
              >

                {/* NAME */}
                <div>
                  <label
                    htmlFor="service-name"
                    className="sr-only"
                  >
                    Your Name
                  </label>

                  <input
                    id="service-name"
                    name="name"
                    type="text"
                    placeholder="Your Name *"
                    required
                    className="
                      h-12
                      w-full
                      rounded-md
                      border
                      border-gray-200
                      px-4
                      text-sm
                      text-brand-blue
                      outline-none
                      transition-all
                      placeholder:text-gray-400
                      focus:border-brand-orange
                      focus:ring-1
                      focus:ring-brand-orange
                    "
                  />
                </div>

                {/* COMPANY */}
                <div>
                  <label
                    htmlFor="service-company"
                    className="sr-only"
                  >
                    Company Name
                  </label>

                  <input
                    id="service-company"
                    name="company"
                    type="text"
                    placeholder="Company Name *"
                    required
                    className="
                      h-12
                      w-full
                      rounded-md
                      border
                      border-gray-200
                      px-4
                      text-sm
                      text-brand-blue
                      outline-none
                      transition-all
                      placeholder:text-gray-400
                      focus:border-brand-orange
                      focus:ring-1
                      focus:ring-brand-orange
                    "
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="service-email"
                    className="sr-only"
                  >
                    Email Address
                  </label>

                  <input
                    id="service-email"
                    name="email"
                    type="email"
                    placeholder="Email Address *"
                    required
                    className="
                      h-12
                      w-full
                      rounded-md
                      border
                      border-gray-200
                      px-4
                      text-sm
                      text-brand-blue
                      outline-none
                      transition-all
                      placeholder:text-gray-400
                      focus:border-brand-orange
                      focus:ring-1
                      focus:ring-brand-orange
                    "
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label
                    htmlFor="service-phone"
                    className="sr-only"
                  >
                    Phone Number
                  </label>

                  <input
                    id="service-phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    className="
                      h-12
                      w-full
                      rounded-md
                      border
                      border-gray-200
                      px-4
                      text-sm
                      text-brand-blue
                      outline-none
                      transition-all
                      placeholder:text-gray-400
                      focus:border-brand-orange
                      focus:ring-1
                      focus:ring-brand-orange
                    "
                  />
                </div>

                {/* SERVICE */}
                <div>
                  <label
                    htmlFor="service-select"
                    className="sr-only"
                  >
                    Service Required
                  </label>

                  <select
                    id="service-select"
                    name="service"
                    defaultValue=""
                    required
                    className="
                      h-12
                      w-full
                      rounded-md
                      border
                      border-gray-200
                      bg-white
                      px-4
                      text-sm
                      text-gray-500
                      outline-none
                      transition-all
                      focus:border-brand-orange
                      focus:ring-1
                      focus:ring-brand-orange
                    "
                  >
                    <option value="" disabled>
                      Service Required *
                    </option>

                    <option value="Air Freight">
                      Air Freight
                    </option>

                    <option value="Ocean Freight">
                      Ocean Freight
                    </option>

                    <option value="Customs Clearance Services">
                      Customs Clearance Services
                    </option>

                    <option value="Domestic Transportation">
                      Domestic Transportation
                    </option>

                    <option value="ODC & Project Cargo Movements">
                      ODC &amp; Project Cargo Movements
                    </option>

                    <option value="Supply Chain Solutions">
                      Supply Chain Solutions
                    </option>

                    <option value="Consultancy Services">
                      Consultancy Services
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="service-message"
                    className="sr-only"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="service-message"
                    name="message"
                    rows="6"
                    placeholder="Your Message *"
                    required
                    className="
                      w-full
                      resize-none
                      rounded-md
                      border
                      border-gray-200
                      px-4
                      py-4
                      text-sm
                      text-brand-blue
                      outline-none
                      transition-all
                      placeholder:text-gray-400
                      focus:border-brand-orange
                      focus:ring-1
                      focus:ring-brand-orange
                    "
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    group
                    inline-flex
                    h-12
                    items-center
                    justify-center
                    gap-2
                    rounded-md
                    bg-brand-orange
                    px-6
                    text-sm
                    font-semibold
                    uppercase
                    text-white
                    transition-all
                    duration-300
                    hover:gap-3
                    hover:opacity-90
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                  "
                >
                  {isSubmitting
                    ? "Sending..."
                    : "Send Message"}

                  {!isSubmitting && (
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  )}

                  {isSubmitting && (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ANIMATIONS
      ========================================================== */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}