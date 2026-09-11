import {
  ArrowRight,
  BriefcaseBusiness,
  Users,
  TrendingUp,
  Handshake,
  Globe2,
  GraduationCap,
  HeartPulse,
  Award,
  CalendarDays,
} from "lucide-react";

import careerHero from "../assets/images/companyLogo/companyRes.png";

export default function Careers() {
  const values = [
    {
      icon: Users,
      title: "People First",
      description: "We value our people and their potential",
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "Continuous learning and development",
    },
    {
      icon: Handshake,
      title: "One Team",
      description: "Collaborative, inclusive and supportive",
    },
    {
      icon: Globe2,
      title: "Make an Impact",
      description: "Your work drives global connections",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Opportunities to learn, grow and advance.",
    },
    {
      icon: HeartPulse,
      title: "Health & Well-being",
      description:
        "Comprehensive health insurance for you and your family.",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description:
        "Regular training programs to upskill and stay ahead.",
    },
    {
      icon: Award,
      title: "Recognition",
      description: "We recognize and reward your contribution.",
    },
    {
      icon: CalendarDays,
      title: "Work-Life Balance",
      description:
        "Flexible work culture that respects your personal life.",
    },
  ];

  // const openings = [
  //   {
  //     title: "Sales Executive – Logistics",
  //     location: "Noida, India",
  //     type: "Full-time",
  //   },
  //   {
  //     title: "Documentation Executive",
  //     location: "Noida, India",
  //     type: "Full-time",
  //   },
  //   {
  //     title: "Operations Executive – Air Freight",
  //     location: "Noida, India",
  //     type: "Full-time",
  //   },
  //   {
  //     title: "Customer Support Executive",
  //     location: "Noida, India",
  //     type: "Full-time",
  //   },
  // ];

  /*
    IMPORTANT:
    Sirf ek confirmed image asset use kiya gaya hai.
    Isse "Image unavailable" wala issue nahi aayega
    agar contact-building.png isi location par hai.
  */
  const galleryImages = [
    careerHero,
    careerHero,
    careerHero,
    careerHero,
  ];

  return (
    <main className="bg-white text-brand-blue">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden">
        <div className="grid min-h-[500px] grid-cols-1 lg:grid-cols-2">
          {/* LEFT CONTENT */}

          <div className="relative z-20 flex items-center bg-white px-6 py-14 sm:px-10 lg:px-16 xl:px-20">
            <div className="relative z-10 max-w-[520px]">
              <p className="mb-4 text-sm font-bold uppercase tracking-wide text-brand-orange">
                CAREER
              </p>

              <h1 className="text-4xl font-extrabold leading-[1.12] text-brand-blue sm:text-5xl lg:text-[48px]">
                Build Your Future
                <br />
                with{" "}
                <span className="text-brand-orange">
                  Plovit Logistics
                </span>
              </h1>

              <div className="my-5 h-[3px] w-12 bg-brand-orange" />

              <p className="max-w-[470px] text-sm leading-6 text-gray-600 sm:text-base">
                We are a team of passionate professionals working
                together to deliver excellence every day. Join us and
                be a part of our growth journey.
              </p>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("current-openings")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="group mt-7 inline-flex items-center gap-3 bg-brand-blue px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-brand-orange"
              >
                Join Our Team

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}

          <div className="relative min-h-[330px] overflow-hidden lg:min-h-[500px]">
            <img
              src={careerHero}
              alt="Plovit Logistics"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent" />
          </div>
        </div>

        {/* =====================================================
            VALUES STRIP
        ===================================================== */}

        <div className="relative z-30 mx-4 -mt-7 sm:mx-8 lg:mx-auto lg:max-w-6xl">
          <div className="grid grid-cols-1 overflow-hidden rounded-xl bg-brand-blue shadow-xl sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className={`flex items-center gap-4 px-5 py-5 sm:px-6 ${
                    index !== values.length - 1
                      ? "border-b border-white/20 lg:border-b-0 lg:border-r"
                      : ""
                  }`}
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center text-brand-orange">
                    <Icon size={29} strokeWidth={1.7} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {value.title}
                    </h3>

                    <p className="mt-1 text-[11px] leading-4 text-white/70">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY WORK WITH US
      ========================================================= */}

      <section className="px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-orange">
              WHY WORK WITH US?
            </p>

            <h2 className="text-3xl font-extrabold text-brand-blue sm:text-4xl">
              More Than a Job. It’s a Journey.
            </h2>

            <div className="mx-auto mt-4 h-[3px] w-12 bg-brand-orange" />
          </div>

          {/* BENEFITS */}

          <div className="grid overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className={`px-5 py-7 text-center ${
                    index !== benefits.length - 1
                      ? "border-b border-gray-200 sm:border-r lg:border-b-0"
                      : ""
                  }`}
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-brand-blue">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <h3 className="text-sm font-bold text-brand-blue">
                    {benefit.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-[180px] text-xs leading-5 text-gray-500">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          CURRENT OPENINGS + LIFE AT PLOVIT
      ========================================================= */}

      {/* <section
        id="current-openings"
        className="px-4 pb-16 sm:px-6 md:pb-24 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr]"> */}
          {/* =====================================================
              CURRENT OPENINGS
          ===================================================== */}

          {/* <div>
            <div className="mb-5">
              <h2 className="text-xl font-extrabold uppercase text-brand-blue">
                Current Openings
              </h2>

              <div className="mt-3 h-[3px] w-10 bg-brand-orange" />
            </div>

            <div className="space-y-3">
              {openings.map((job) => (
                <div
                  key={job.title}
                  className="group flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-orange-50 text-brand-orange">
                      <BriefcaseBusiness
                        size={20}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-brand-blue">
                        {job.title}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        {job.location}

                        <span className="mx-2">|</span>

                        {job.type}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="group/btn flex w-full items-center justify-center gap-2 border border-brand-orange px-4 py-2 text-xs font-bold uppercase text-brand-orange transition-all duration-300 hover:bg-brand-orange hover:text-white sm:w-auto"
                  >
                    Apply Now

                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </button>
                </div>
              ))}
            </div>

           
          </div> */}

          {/* =====================================================
              LIFE AT PLOVIT
          ===================================================== */}

          {/* <div className="rounded-xl bg-slate-50 p-6 sm:p-7">
            <div className="mb-5">
              <h2 className="text-2xl font-extrabold text-brand-blue">
                Life at Plovit Logistics
              </h2>

              <div className="mt-3 h-[3px] w-10 bg-brand-orange" />
            </div>

            <p className="mb-6 text-sm leading-6 text-gray-600">
              At Plovit Logistics, we believe great things happen
              when great people come together.
            </p> */}

            {/* IMAGE GRID */}

            {/* <div className="grid grid-cols-2 gap-2">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-[1.55] overflow-hidden rounded-md"
                >
                  <img
                    src={image}
                    alt={`Life at Plovit Logistics ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              className="group mt-5 inline-flex items-center gap-3 border border-brand-orange px-5 py-3 text-xs font-bold uppercase text-brand-orange transition-all duration-300 hover:bg-brand-orange hover:text-white"
            >
              Join Our Team

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div> */}
        {/* </div>
      </section> */}
    </main>
  );
}