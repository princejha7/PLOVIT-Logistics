import {
  ArrowRight,
  Users,
  TrendingUp,
  Handshake,
  Globe2,
  GraduationCap,
  HeartPulse,
  Award,
  CalendarDays,
} from "lucide-react";


import linkedin from "../assets/images/socialMedia/linkedin.png"
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

  return (
    <main className="w-full overflow-x-hidden bg-white text-brand-blue pt-14 sm:pt-16 lg:pt-16">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="relative z-20 flex items-center px-5 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-12 lg:py-16 xl:px-14">
            <div className="relative z-10 w-full max-w-[520px]">

              <p className="mb-4 pt-1 text-sm font-bold uppercase tracking-wide text-brand-orange sm:pt-0">
                CAREER
              </p>

              <h1 className="text-3xl font-extrabold leading-[1.12] text-brand-blue sm:text-4xl md:text-5xl lg:text-[48px]">
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
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex min-h-[280px] items-center justify-center px-5 pb-8 sm:min-h-[340px] sm:px-8 sm:pb-10 md:min-h-[390px] lg:min-h-[430px] lg:px-8 lg:py-10 xl:px-10">
            <img
              src={careerHero}
              alt="Plovit Logistics"
              className="relative z-10 h-[250px] w-full max-w-[620px] rounded-xl object-cover sm:h-[320px] md:h-[360px] lg:h-[390px] xl:h-[410px]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent" />
          </div>
        </div>

        {/* =====================================================
            VALUES STRIP
        ====================================================== */}
        <div className="relative z-30 mx-4 -mt-2 sm:mx-8 md:mx-10 lg:mx-auto lg:max-w-6xl">
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
                    <Icon
                      size={29}
                      strokeWidth={1.7}
                    />
                  </div>

                  <div className="min-w-0">
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
    JOIN OUR TEAM CTA
========================================================= */}
<section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
  <div className="mx-auto max-w-7xl">

    <div className="relative overflow-hidden rounded-2xl border border-orange-100 bg-[#fff8f5] px-5 py-10 text-center sm:px-10 sm:py-12 md:px-16">

      {/* Decorative Orange Line */}
      <div className="absolute left-0 top-0 h-full w-1 bg-brand-orange" />

      {/* Decorative Circles */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border-[24px] border-brand-orange/5" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full border-[24px] border-brand-orange/5" />

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* Label */}
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-[1px] w-8 bg-brand-orange" />

          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-orange sm:text-sm">
            JOIN OUR TEAM
          </p>

          <span className="h-[1px] w-8 bg-brand-orange" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-extrabold leading-tight text-brand-blue sm:text-4xl md:text-5xl">
          Build Your Future
          <span className="text-brand-orange">
            {" "}With Us
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7 md:text-lg">
          We’re looking for passionate and talented people who are
          ready to make a difference in the world of logistics and
          supply chain. Join our team and grow with us.
        </p>

        {/* Email */}
        <p className="mt-4 text-sm text-gray-600 sm:text-base">
          Send your resume to{" "}
          <a
            href="mailto:info@plovitlogistics.com"
            className="font-bold text-brand-blue transition-colors hover:text-brand-orange"
          >
            info@plovitlogistics.com
          </a>
        </p>

      
        {/* =====================================================
            RESUME BUTTON
        ====================================================== */}
        <a
          href="mailto:info@plovitlogistics.com?subject=Career%20Application%20-%20Plovit%20Logistics"
          className="group mt-7 inline-flex items-center justify-center gap-3 rounded-md bg-brand-orange px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue hover:shadow-md sm:px-7"
        >
          Send Your Resume

          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>


          {/* =====================================================
            LINKEDIN CARD
        ====================================================== */}
        <div className="mx-auto mt-8 max-w-2xl">

          <div className="group flex flex-col items-center gap-5 rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange hover:shadow-md sm:flex-row sm:p-6 sm:text-left">

            {/* LinkedIn Logo */}
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl  text-white transition-all duration-300">
              <img
                src={linkedin}
                alt="LinkedIn"
                className="h-full w-full object-contain rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">

              <h3 className="text-base font-bold text-brand-blue sm:text-lg">
                Stay Connected With Plovit Logistics
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6">
                Follow us on LinkedIn for the latest company updates,
                logistics insights, career opportunities, and stories
                from our team.
              </p>

            </div>

            {/* CTA Button */}
            <a
              href="https://www.linkedin.com/company/plovit-logistics-private-limited"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-md bg-brand-orange px-5 py-3 text-xs font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-brand-blue sm:px-6"
            >
              Visit LinkedIn

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </a>

          </div>
        </div>


      </div>
    </div>
  </div>
</section>

 

      {/* =========================================================
          WHY WORK WITH US
      ========================================================= */}
      <section className="px-5 py-14 sm:px-8 sm:py-16 md:py-20 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">

          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-brand-orange">
              WHY WORK WITH US?
            </p>

            <h2 className="text-2xl font-extrabold leading-tight text-brand-blue sm:text-3xl md:text-4xl">
              More Than a Job. It’s a Journey.
            </h2>

            <div className="mx-auto mt-4 h-[3px] w-12 bg-brand-orange" />
          </div>

          {/* BENEFITS */}
          <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-5">

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
                    <Icon
                      size={23}
                      strokeWidth={1.7}
                    />
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
    </main>
  );
}