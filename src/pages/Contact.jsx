import { MapPin, Phone, Mail, Globe, Clock, ArrowRight } from "lucide-react";

import companybuilding from "../assets/images/CompanyLogo/contactBuilding.png";

export default function Contact() {
  return (
    <main className="bg-white text-brand-blue">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="relative flex items-center bg-white px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
            <div className="w-full max-w-xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-orange">
                CONTACT US
              </p>

              <h1 className="text-4xl font-bold leading-tight text-brand-blue sm:text-5xl lg:text-6xl">
                Let’s Connect.
                <br />
                We’re Here to Help.
              </h1>

              <span className="mt-6 block h-[3px] w-14 bg-brand-orange" />

              <p className="mt-6 max-w-lg text-base leading-7 text-gray-500 sm:text-lg">
                Have a question or need a logistics solution? Reach out to our
                team — we’ll get back to you as soon as possible.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[280px] sm:h-[340px] lg:h-[530px]">
            <img
              src={companybuilding}
              alt="PLOVIT Logistics"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT INFORMATION
      ========================================================= */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto -mt-4 max-w-7xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* OFFICE */}
            <div className="rounded-xl bg-white p-6 text-center shadow-lg border border-gray-200 transition-shadow duration-300 hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white">
                <MapPin size={23} />
              </div>

              <h3 className="mb-3 text-lg font-bold text-brand-blue">
                Our Office
              </h3>

              <p className="text-sm leading-6 text-gray-500">
                Corporate Address: 942, 9th Floor, Astralis Supernova, Sector
                94, Noida, Uttar Pradesh 201301, India{" "}
              </p>
            </div>

            {/* PHONE */}
            <div className="rounded-xl bg-white p-6 text-center shadow-lg border border-gray-200 transition-shadow duration-300 hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white">
                <Phone size={23} />
              </div>

              <h3 className="mb-3 text-lg font-bold text-brand-blue">
                Call Us
              </h3>

              <p className="text-sm leading-6 text-gray-500">
                +91 120 489 7315
              </p>
            </div>

            {/* EMAIL */}
            <div className="rounded-xl bg-white p-6 text-center shadow-lg border border-gray-200 transition-shadow duration-300 hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white">
                <Mail size={23} />
              </div>

              <h3 className="mb-3 text-lg font-bold text-brand-blue">
                Email Us
              </h3>

              <p className="text-sm leading-6 text-gray-500 break-words">
                info@plovitlogistics.com
              </p>
            </div>

            {/* WEBSITE */}
            <div className="rounded-xl bg-white p-6 text-center shadow-lg border border-gray-200 transition-shadow duration-300 hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white">
                <Globe size={23} />
              </div>

              <h3 className="mb-3 text-lg font-bold text-brand-blue">
                Website
              </h3>

              <p className="text-sm leading-6 text-gray-500 break-words">
                www.plovitlogistics.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT FORM + LOCATION
      ========================================================= */}
      <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* =====================================================
                FORM
            ===================================================== */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-brand-blue sm:text-3xl">
                  Send Us a Message
                </h2>

                <span className="mt-3 block h-[3px] w-12 bg-brand-orange" />
              </div>

              <form className="space-y-5">
                {/* NAME + COMPANY */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Your Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Your Name *"
                      className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-brand-blue outline-none transition-all placeholder:text-gray-400 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="sr-only">
                      Company Name
                    </label>

                    <input
                      id="company"
                      type="text"
                      placeholder="Company Name *"
                      className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-brand-blue outline-none transition-all placeholder:text-gray-400 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>
                </div>

                {/* EMAIL + PHONE */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="Email Address *"
                      className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-brand-blue outline-none transition-all placeholder:text-gray-400 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="Phone Number *"
                      className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-brand-blue outline-none transition-all placeholder:text-gray-400 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>
                </div>

                {/* SERVICE */}
                <div>
                  <label htmlFor="service" className="sr-only">
                    Service Required
                  </label>

                  <select
                    id="service"
                    defaultValue=""
                    className="h-12 w-full rounded-md border border-gray-200 bg-white px-4 text-sm text-gray-500 outline-none transition-all focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                  >
                    <option value="" disabled>
                      Service Required *
                    </option>

                    <option value="air-freight">Air Freight</option>

                    <option value="ocean-freight">Ocean Freight</option>

                    <option value="road-transportation">
                      Road Transportation
                    </option>

                    <option value="Supply Chain Solutions">
                      Supply Chain Solutions
                    </option>

                    <option value="customs">Customs Clearance</option>

                    <option value="other">Other</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label htmlFor="message" className="sr-only">
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    rows="6"
                    placeholder="Your Message *"
                    className="w-full resize-none rounded-md border border-gray-200 px-4 py-4 text-sm text-brand-blue outline-none transition-all placeholder:text-gray-400 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-brand-orange px-6 text-sm font-semibold uppercase text-white transition-all duration-300 hover:gap-3 hover:opacity-90"
                >
                  Send Message
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>
            </div>

            {/* =====================================================
                LOCATION
            ===================================================== */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-brand-blue sm:text-3xl">
                  Our Location
                </h2>

                <span className="mt-3 block h-[3px] w-12 bg-brand-orange" />
              </div>

              {/* MAP */}
              <div className="h-[280px] w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm sm:h-[330px]">
                <iframe
                  title="PLOVIT Logistics Location"
                  src="https://www.google.com/maps?q=PLOVIT%20Logistics%20Noida&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* OFFICE HOURS */}
              <div className="mt-5 flex items-center gap-4 rounded-xl bg-gray-50 p-5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
                  <Clock size={24} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-brand-blue">
                    Office Hours
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Monday - Saturday: 09:30 AM - 06:30 PM
                  </p>

                  <p className="text-sm text-gray-500">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
