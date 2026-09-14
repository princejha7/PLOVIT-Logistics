import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  AlertCircle,
  X,
} from "lucide-react";

import backgroundImage from "../assets/images/CTA/background-image.png";

const serviceOptions = [
  "Ocean Freight",
  "Air Freight",
  "Customs Clearance Services",
  "Domestic Transportation",
  "ODC & Project Cargo Movements",
  "Supply Chain Solutions",
  "Consultancy Services",
  "Other",
];

export default function CTASection() {
  const [form, setForm] = useState({
    company: "",
    phone: "",
    service: "",
    date: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [popup, setPopup] = useState({
    show: false,
    type: "",
    message: "",
  });

  // =========================================================
  // SECTION ANIMATION
  // =========================================================
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

  // =========================================================
  // VALIDATION
  // =========================================================
  const validate = () => {
    const errs = {};

    if (!form.company.trim()) {
      errs.company = "Company name is required.";
    }

    if (!form.phone.trim()) {
      errs.phone = "Contact number is required.";
    } else if (
      !/^[+\d][\d\s()-]{7,}$/.test(form.phone.trim())
    ) {
      errs.phone = "Enter a valid contact number.";
    }

    if (!form.service) {
      errs.service = "Please select a service.";
    }

    return errs;
  };

  // =========================================================
  // HANDLE CHANGE
  // =========================================================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // =========================================================
  // SHOW POPUP
  // =========================================================
  const showPopup = (type, message) => {
    setPopup({
      show: true,
      type,
      message,
    });

    setTimeout(() => {
      setPopup({
        show: false,
        type: "",
        message: "",
      });
    }, 5000);
  };

  // =========================================================
  // WEB3FORMS SUBMIT
  // =========================================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    formData.append(
      "access_key",
      "9a9c2ea6-2d8c-4f4f-ba5e-14b47997d9a0"
    );

    formData.append(
      "subject",
      "New Enquiry - PLOVIT Logistics"
    );

    // Convert FormData -> JSON
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      console.log("Web3Forms Response:", result);

      if (response.ok && result.success) {
        setSubmitted(true);

        showPopup(
          "success",
          "Thank you! Your enquiry has been sent successfully."
        );

        setForm({
          company: "",
          phone: "",
          service: "",
          date: "",
        });

        formElement.reset();

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        console.error("Web3Forms API Error:", result);

        showPopup(
          "error",
          result.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Web3Forms Network Error:", error);

      showPopup(
        "error",
        "Unable to send your enquiry. Please check your internet connection."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // =========================================================
  // INPUT CLASS
  // =========================================================
  const inputCls = (name) =>
    `w-full rounded-lg border px-3.5 py-2.5 text-sm text-gray-800 outline-none transition-colors duration-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/15 ${
      errors[name]
        ? "border-red-400 bg-red-50"
        : "border-gray-200 bg-gray-50"
    }`;

  return (
    <>
      {/* =====================================================
          SUCCESS / ERROR POPUP
      ====================================================== */}
      {popup.show && (
        <div className="fixed right-5 top-5 z-[9999]">
          <div
            className={`flex w-[calc(100vw-40px)] max-w-[420px] items-start gap-3 rounded-xl border bg-white px-5 py-4 shadow-2xl ${
              popup.type === "success"
                ? "border-green-200"
                : "border-red-200"
            }`}
          >
            {/* ICON */}
            <div
              className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${
                popup.type === "success"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {popup.type === "success" ? (
                <CheckCircle size={23} />
              ) : (
                <AlertCircle size={23} />
              )}
            </div>

            {/* MESSAGE */}
            <div className="flex-1">
              <p
                className={`text-sm font-bold ${
                  popup.type === "success"
                    ? "text-green-700"
                    : "text-red-700"
                }`}
              >
                {popup.type === "success"
                  ? "Success"
                  : "Error"}
              </p>

              <p className="mt-1 text-sm leading-5 text-gray-600">
                {popup.message}
              </p>
            </div>

            {/* CLOSE */}
            <button
              type="button"
              onClick={() =>
                setPopup({
                  show: false,
                  type: "",
                  message: "",
                })
              }
              className="text-gray-400 transition-colors hover:text-gray-700"
              aria-label="Close notification"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      {/* =====================================================
          CTA SECTION
      ====================================================== */}
      <section
        ref={sectionRef}
        id="lets-connect"
        className={`bg-white py-12 transition-all duration-700 ease-out delay-150 md:py-16 ${
          isVisible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-[0.96] opacity-0"
        }`}
        aria-label="Let us Connect"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
            
            {/* =================================================
                LEFT CONTENT
            ================================================== */}
            <div className="relative isolate flex min-h-[360px] items-center overflow-hidden rounded-2xl bg-white px-6 py-8 sm:px-10 lg:min-h-[390px] lg:px-12">
              <img
                src={backgroundImage}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute right-[-24%] top-0 z-[-1] h-full w-[118%] object-cover object-right opacity-55"
              />

              <div className="relative z-10 max-w-sm">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
                  GLOBAL NETWORK
                </p>

                <h2 className="mt-4 text-3xl font-black leading-[1.08] text-brand-blue sm:text-4xl">
                  Connecting Businesses.
                  <br />
                  Powering Possibilities.
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-gray-500 sm:text-base">
                  India to the World.
                  <br />
                  We&apos;ll handle the rest.
                </p>
              </div>
            </div>

            {/* =================================================
                RIGHT FORM
            ================================================== */}
            <div className="rounded-2xl bg-brand-blue p-6 shadow-xl shadow-brand-blue/15 sm:p-8 lg:p-9">
              {submitted ? (
                <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 py-8 text-center">
                  <CheckCircle
                    size={48}
                    className="text-green-500"
                  />

                  <h3 className="text-xl font-bold text-white">
                    Thank you!
                  </h3>

                  <p className="text-sm text-white/65">
                    We have received your enquiry and will get back
                    to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  className="space-y-5"
                  id="lets-connect-form"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Let’s Connect form"
                >
                  {/* =================================================
                      FORM HEADING
                  ================================================== */}
                  <div className="mb-2">
                    <h2 className="text-2xl font-bold text-white">
                      Let&apos;s Connect
                    </h2>

                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      Tell us what you need.
                      <br />
                      We&apos;ll handle the rest.
                    </p>
                  </div>

                  {/* =================================================
                      NAME + COMPANY
                  ================================================== */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="sr-only"
                      >
                        Your Name
                      </label>

                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        required
                        className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-brand-blue outline-none transition-all placeholder:text-gray-400 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="sr-only"
                      >
                        Company Name
                      </label>

                      <input
                        id="company"
                        type="text"
                        name="company"
                        placeholder="Company Name *"
                        value={form.company}
                        onChange={handleChange}
                        className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-brand-blue outline-none transition-all placeholder:text-gray-400 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                      />

                      {errors.company && (
                        <p className="mt-1 text-xs text-red-300">
                          {errors.company}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* =================================================
                      EMAIL + PHONE
                  ================================================== */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="sr-only"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        required
                        className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-brand-blue outline-none transition-all placeholder:text-gray-400 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="sr-only"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        value={form.phone}
                        onChange={handleChange}
                        className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-brand-blue outline-none transition-all placeholder:text-gray-400 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                      />

                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-300">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* =================================================
                      SERVICE
                  ================================================== */}
                  <div>
                    <label
                      htmlFor="service"
                      className="sr-only"
                    >
                      Service Required
                    </label>

                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      onChange={handleChange}
                      className="h-12 w-full rounded-md border border-gray-200 bg-white px-4 text-sm text-gray-500 outline-none transition-all focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    >
                      <option value="" disabled>
                        Service Required *
                      </option>

                      <option value="air-freight">
                        Air Freight
                      </option>

                      <option value="ocean-freight">
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

                      <option value="other">
                        Other
                      </option>
                    </select>

                    {errors.service && (
                      <p className="mt-1 text-xs text-red-300">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* =================================================
                      MESSAGE
                  ================================================== */}
                  <div>
                    <label
                      htmlFor="message"
                      className="sr-only"
                    >
                      Your Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Your Message *"
                      required
                      className="w-full resize-none rounded-md border border-gray-200 px-4 py-4 text-sm text-brand-blue outline-none transition-all placeholder:text-gray-400 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>

                  {/* =================================================
                      SUBMIT BUTTON
                  ================================================== */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-brand-orange px-6 text-sm font-semibold uppercase text-white transition-all duration-300 hover:gap-3 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
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
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          POPUP ANIMATION
      ====================================================== */}
      <style>{`
        @keyframes popupSlideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}