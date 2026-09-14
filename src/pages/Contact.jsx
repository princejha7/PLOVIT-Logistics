import React, { useState } from "react";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle,
  XCircle,
} from "lucide-react";

import telephone from "../assets/images/telephone.png";
import companybuilding from "../assets/images/companyLogo/contactBuilding.png";

export default function Contact() {
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // =========================================================
  // FORM SUBMISSION
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

    formData.append(
      "access_key",
      "9a9c2ea6-2d8c-4f4f-ba5e-14b47997d9a0"
    );

    formData.append(
      "subject",
      "New Contact Form Submission - PLOVIT Logistics"
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
            "Thank you! Your message has been sent successfully.",
        });

        form.reset();

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
          "Unable to send your message. Please check your internet connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-brand-blue pt-14 sm:pt-16 lg:pt-16">

      {/* =========================================================
          POPUP MESSAGE
      ========================================================== */}
      {status.message && (
        <div className="fixed right-3 top-3 z-[9999] sm:right-5 sm:top-5">
          <div
            className={`flex w-[calc(100vw-24px)] max-w-[420px] items-center gap-3 rounded-xl border bg-white px-4 py-4 shadow-2xl sm:px-5 ${
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
            <div className="min-w-0 flex-1">
              <p
                className={`text-sm font-semibold ${
                  status.type === "success"
                    ? "text-green-700"
                    : "text-red-700"
                }`}
              >
                {status.type === "success" ? "Success" : "Error"}
              </p>

              <p className="mt-1 text-sm leading-5 text-gray-600">
                {status.message}
              </p>
            </div>

            {/* CLOSE */}
            <button
              type="button"
              onClick={() =>
                setStatus({
                  type: "",
                  message: "",
                })
              }
              className="flex-shrink-0 text-xl leading-none text-gray-400 transition-colors hover:text-gray-600"
              aria-label="Close notification"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* =========================================================
          COMMON PAGE CONTAINER
          Same width system as About/Career page.
      ========================================================== */}
      <div className="mx-auto w-full max-w-7xl">

        {/* =======================================================
            HERO
        ======================================================== */}
        <section className="relative overflow-hidden">
          <div className="grid grid-cols-1 items-center lg:grid-cols-2">

            {/* =====================================================
                LEFT CONTENT
            ====================================================== */}
            <div className="relative z-20 flex items-center bg-white px-5 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-12 lg:py-16 xl:px-14">
              <div className="w-full max-w-xl">

                {/* LABEL */}
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-brand-orange sm:mb-4 sm:text-sm sm:tracking-wide">
                  CONTACT US
                </p>

                {/* HEADING */}
                <h1 className="text-3xl font-bold leading-[1.15] text-brand-blue sm:text-4xl md:text-5xl lg:text-6xl">
                  Let’s Connect !
                  <br />
                  We’re here to help.
                </h1>

                {/* DIVIDER */}
                <span className="mt-5 block h-[3px] w-12 bg-brand-orange sm:mt-6 sm:w-14" />

                {/* DESCRIPTION */}
                <p className="mt-5 max-w-lg text-sm leading-6 text-gray-500 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
                  Have a question or need a logistics solution?<br/>
                  Reach out to our team for the best services.
                </p>
              </div>
            </div>

            {/* =====================================================
                RIGHT IMAGE
            ====================================================== */}
            <div className="relative px-5 pb-8 sm:px-8 sm:pb-10 lg:px-6 lg:py-10 xl:px-8">
              <div className="relative h-[240px] w-full overflow-hidden rounded-xl sm:h-[340px] md:h-[390px] lg:h-[430px] xl:h-[460px]">
                <img
                  src={companybuilding}
                  alt="PLOVIT Logistics"
                  className="h-full w-full object-cover object-center"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CONTACT INFORMATION
        ========================================================== */}
        <section className="relative z-10 px-5 sm:px-8 lg:px-0">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {/* =====================================================
                TELEPHONE
            ====================================================== */}
            <div className="group rounded-xl border border-gray-200 bg-white p-5 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange hover:bg-brand-orange hover:shadow-xl sm:p-6">

              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue transition-all duration-300">
                <img
                  src={telephone}
                  alt="Telephone"
                  className="h-6 w-6 object-contain transition-all duration-300"
                />
              </div>

              <h3 className="mb-3 text-lg font-bold text-brand-blue transition-colors duration-300 group-hover:text-white">
                Telephone
              </h3>

              <a
                href="tel:+911204897315"
                className="break-words text-sm leading-6 text-gray-500 transition-colors duration-300 group-hover:text-white hover:text-brand-orange"
              >
                +91 120 489 7315
              </a>
            </div>

            {/* =====================================================
                PHONE
            ====================================================== */}
            <div className="group rounded-xl border border-gray-200 bg-white p-5 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange hover:bg-brand-orange hover:shadow-xl sm:p-6">

              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white transition-all duration-300 ">
                <Phone size={22} />
              </div>

              <h3 className="mb-3 text-lg font-bold text-brand-blue transition-colors duration-300 group-hover:text-white">
                Call Us
              </h3>

              <a
                href="tel:+919315111174"
                className="break-words text-sm leading-6 text-gray-500 transition-colors duration-300 group-hover:text-white hover:text-brand-orange"
              >
                +91 931 511 1174
              </a>
            </div>

            {/* =====================================================
                EMAIL
            ====================================================== */}
            <div className="group rounded-xl border border-gray-200 bg-white p-5 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange hover:bg-brand-orange hover:shadow-xl sm:p-6">

              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white transition-all duration-300 ">
                <Mail size={22} />
              </div>

              <h3 className="mb-3 text-lg font-bold text-brand-blue transition-colors duration-300 group-hover:text-white">
                Email Us
              </h3>

              <a
                href="mailto:info@plovitlogistics.com"
                className="break-words text-sm leading-6 text-gray-500 transition-colors duration-300 group-hover:text-white hover:text-brand-orange"
              >
                info@plovitlogistics.com
              </a>
            </div>

              {/* =====================================================
                CORPORATE OFFICE
            ====================================================== */}
            <div className="group rounded-xl border border-gray-200 bg-white p-5 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange hover:bg-brand-orange hover:shadow-xl sm:p-6">


              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-white transition-all duration-300 ">
                <MapPin size={22} />
              </div>

              <h3 className="mb-3 text-lg font-bold text-brand-blue transition-colors duration-300 group-hover:text-white">
                Corporate Office
              </h3>

               <p className="mx-auto max-w-[330px] text-sm leading-6 text-gray-500 transition-colors duration-300 group-hover:text-white">
    942, 9th Floor, Astralis Supernova, Sector 94, Noida, Uttar Pradesh 201301, India
    
  </p>
            </div>

          </div>
        </section>

        {/* =========================================================
            CONTACT FORM + LOCATION
        ========================================================== */}
        <section className="px-5 py-12 sm:px-8 sm:py-16 md:py-20 lg:px-0">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14">

            {/* =====================================================
                FORM
            ====================================================== */}
            <div className="min-w-0">

              {/* HEADING */}
              <div className="mb-7 sm:mb-8">
                <h2 className="text-2xl font-bold text-brand-blue sm:text-3xl">
                  Send Us a Message
                </h2>

                <span className="mt-3 block h-[3px] w-12 bg-brand-orange" />
              </div>

              {/* FORM */}
              <form
                className="space-y-4 sm:space-y-5"
                onSubmit={onSubmit}
              >

                {/* NAME + COMPANY */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">

                  {/* NAME */}
                  <div>
                    <label
                      htmlFor="name"
                      className="sr-only"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name *"
                      required
                      autoComplete="name"
                      className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-brand-blue outline-none transition-all placeholder:text-gray-400 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>

                  {/* COMPANY */}
                  <div>
                    <label
                      htmlFor="company"
                      className="sr-only"
                    >
                      Company Name
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company Name *"
                      required
                      autoComplete="organization"
                      className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-brand-blue outline-none transition-all placeholder:text-gray-400 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>
                </div>

                {/* EMAIL + PHONE */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">

                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="email"
                      className="sr-only"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Address *"
                      required
                      autoComplete="email"
                      className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-brand-blue outline-none transition-all placeholder:text-gray-400 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="sr-only"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      autoComplete="tel"
                      className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-brand-blue outline-none transition-all placeholder:text-gray-400 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>
                </div>

                {/* SERVICE */}
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
                    required
                    className="h-12 w-full rounded-md border border-gray-200 bg-white px-4 text-sm text-gray-500 outline-none transition-all focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
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
                      ODC & Project Cargo Movements
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
                    className="min-h-[150px] w-full resize-none rounded-md border border-gray-200 px-4 py-4 text-sm text-brand-blue outline-none transition-all placeholder:text-gray-400 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange sm:min-h-[170px]"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-brand-orange px-6 text-sm font-semibold uppercase text-white transition-all duration-300 hover:gap-3 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
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

            {/* =====================================================
                LOCATION
            ====================================================== */}
            <div className="min-w-0">

              {/* HEADING */}
              <div className="mb-7 sm:mb-8">
                <h2 className="text-2xl font-bold text-brand-blue sm:text-3xl">
                  Our Location
                </h2>

                <span className="mt-3 block h-[3px] w-12 bg-brand-orange" />
              </div>

              {/* MAP */}
              <div className="h-[280px] w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm sm:h-[330px] md:h-[360px]">
                <iframe
                  title="PLOVIT Logistics Location"
                  src="https://www.google.com/maps?q=PLOVIT%20Logistics%20Noida&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* OFFICE HOURS */}
              <div className="mt-5 flex items-start gap-4 rounded-xl bg-gray-50 p-5 sm:p-6">

                {/* ICON */}
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue text-white sm:h-12 sm:w-12">
                  <Clock size={22} />
                </div>

                {/* TEXT */}
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-brand-blue sm:text-lg">
                    Office Hours
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
                    Monday - Saturday: 10:00 AM - 06:00 PM
                  </p>

                  <p className="text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}