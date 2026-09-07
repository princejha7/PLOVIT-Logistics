import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import backgroundImage from "../assets/images/services/background-image.png";

const serviceOptions = [
  "Ocean Freight",
  "Air Freight",
  "Customs Clearance Services",
  "Domestic Transportation",
  "ODC & Project Cargo Movements",
  "Warehousing",
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

  // Section Animation
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

  const validate = () => {
    const errs = {};

    if (!form.company.trim()) {
      errs.company = "Company name is required.";
    }

    if (!form.phone.trim()) {
      errs.phone = "Contact number is required.";
    } else if (!/^[+\d][\d\s()-]{7,}$/.test(form.phone.trim())) {
      errs.phone = "Enter a valid contact number.";
    }

    if (!form.service) {
      errs.service = "Please select a service.";
    }

    if (!form.date) {
      errs.date = "Please select a date.";
    }

    return errs;
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (errors[e.target.name]) {
      setErrors((prev) => ({
        ...prev,
        [e.target.name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitted(true);

    setForm({
      company: "",
      phone: "",
      service: "",
      date: "",
    });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputCls = (name) =>
    `w-full rounded-lg border px-3.5 py-2.5 text-sm text-gray-800 outline-none transition-colors duration-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/15 ${
      errors[name]
        ? "border-red-400 bg-red-50"
        : "border-gray-200 bg-gray-50"
    }`;

  return (
    <section
      ref={sectionRef}
      id="lets-connect"
      className={`bg-white py-12 md:py-16 transition-all duration-700 ease-out delay-150 ${
        isVisible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-4 scale-[0.96] opacity-0"
      }`}
      aria-label="Let us Connect"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">

          {/* Left Content */}
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

              <a
                href="#lets-connect-form"
                className="mt-7 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-brand-blue transition-colors hover:text-brand-orange"
              >
                Explore Our Network{" "}
                <ArrowRight size={14} className="text-brand-orange" />
              </a>

            </div>
          </div>

          {/* Right Form */}
          <div className="rounded-2xl bg-brand-blue p-6 shadow-xl shadow-brand-blue/15 sm:p-8 lg:p-9">

            {submitted ? (
              <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 py-8 text-center">

                <CheckCircle size={48} className="text-green-500" />

                <h3 className="text-xl font-bold text-white">
                  Thank you!
                </h3>

                <p className="text-sm text-white/65">
                  We have received your enquiry and will get back to you
                  shortly.
                </p>

              </div>
            ) : (
              <form
                id="lets-connect-form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Let’s Connect form"
              >

                {/* Form Heading */}
                <div className="mb-6">

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
                    GET IN TOUCH
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-white">
                    Let&apos;s Connect
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    Tell us what you need.
                    <br />
                    We&apos;ll handle the rest.
                  </p>

                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                  {/* Company */}
                  <div>

                    <label
                      htmlFor="cta-company"
                      className="mb-1.5 block text-xs font-semibold text-white/85"
                    >
                      Company Name{" "}
                      <span className="text-brand-orange">*</span>
                    </label>

                    <input
                      id="cta-company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className={inputCls("company")}
                      aria-required="true"
                    />

                    {errors.company && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-300">
                        <AlertCircle size={11} />
                        {errors.company}
                      </p>
                    )}

                  </div>

                  {/* Phone */}
                  <div>

                    <label
                      htmlFor="cta-phone"
                      className="mb-1.5 block text-xs font-semibold text-white/85"
                    >
                      Contact Number{" "}
                      <span className="text-brand-orange">*</span>
                    </label>

                    <input
                      id="cta-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXXXXXX"
                      className={inputCls("phone")}
                      aria-required="true"
                    />

                    {errors.phone && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-300">
                        <AlertCircle size={11} />
                        {errors.phone}
                      </p>
                    )}

                  </div>

                  {/* Service */}
                  <div>

                    <label
                      htmlFor="cta-service"
                      className="mb-1.5 block text-xs font-semibold text-white/85"
                    >
                      Service Required{" "}
                      <span className="text-brand-orange">*</span>
                    </label>

                    <select
                      id="cta-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={inputCls("service")}
                      aria-required="true"
                    >
                      <option value="">Select a service</option>

                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>

                    {errors.service && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-300">
                        <AlertCircle size={11} />
                        {errors.service}
                      </p>
                    )}

                  </div>

                  {/* Date */}
                  <div>

                    <label
                      htmlFor="cta-date"
                      className="mb-1.5 block text-xs font-semibold text-white/85"
                    >
                      Preferred Date{" "}
                      <span className="text-brand-orange">*</span>
                    </label>

                    <input
                      id="cta-date"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className={inputCls("date")}
                      aria-required="true"
                    />

                    {errors.date && (
                      <p className="mt-1.5 flex items-center gap-1 text-xs text-red-300">
                        <AlertCircle size={11} />
                        {errors.date}
                      </p>
                    )}

                  </div>

                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-orange px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors"
                >
                  SUBMIT
                  <ArrowRight size={15} />
                </button>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}