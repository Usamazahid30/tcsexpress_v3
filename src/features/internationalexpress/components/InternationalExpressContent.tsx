import { Link } from "react-router-dom";
import {
  Plane,
  Package,
  Clock3,
  Globe2,
  ArrowRight,
  MapPin,
  Headphones,
  Boxes,
} from "lucide-react";
import { InternationalExpressSolutions } from "./InternationalExpressSolutions";

const features = [
  {
    icon: Plane,
    title: "Ship to 220+",
    subtitle: "Destinations",
  },
  {
    icon: Package,
    title: "Documents, Parcels",
    subtitle: "& Freight",
  },
  {
    icon: Clock3,
    title: "24/7 International",
    subtitle: "Support",
  },
  {
    icon: Globe2,
    title: "Global Hubs in",
    subtitle: "UK, UAE & Canada",
  },
];

const solutions = [
  {
    title: "Documents",
    subtitle: "& Parcels",
    image: "/international/documents-parcels.png",
    description:
      "Send important documents and parcels securely to destinations around the world with reliable international delivery.",
  },
  {
    title: "Freight",
    subtitle: "Solutions",
    image: "/international/freight-solutions.png",
    description:
      "Reliable international freight services for businesses, including transportation of large and heavy shipments.",
  },
  {
    title: "US Passport",
    subtitle: "Renewal",
    image: "/international/passport-renewal.png",
    description:
      "Get assistance with the US passport renewal process through convenient document handling services.",
  },
  {
    title: "Student Plus",
    subtitle: "",
    image: "/international/student-plus.png",
    description:
      "Convenient international document and parcel delivery support for students studying abroad.",
  },
  {
    title: "Regional",
    subtitle: "Trade / TIR",
    image: "/international/regional-trade.png",
    description:
      "Regional trade and transportation solutions designed to support cross-border cargo movement.",
  },
  {
    title: "Customer",
    subtitle: "Brokerage",
    image: "/international/customer-brokerage.png",
    description:
      "Customs brokerage support to help manage shipment documentation and international clearance.",
  },
];

const stats = [
  {
    icon: Globe2,
    number: "220+",
    label: "Countries",
  },
  {
    icon: MapPin,
    number: "1,000+",
    label: "Global Partners",
  },
  {
    icon: Package,
    number: "Millions",
    label: "of Shipments Annually",
  },
  {
    icon: Headphones,
    number: "24/7",
    label: "International Support",
  },
];

export function InternationalExpressContent() {
  return (
    <main className="w-full overflow-hidden bg-white text-[#101018]">
      {/* HERO SECTION */}
      <section className="relative min-h-[560px] overflow-hidden ">
        {/* Hero background image */}

        <div className="absolute inset-0">
          <img
            src="/internationalexpress/hero-background.jpg"
            alt=""
            className="object-cover object-center"
          />
        </div>

        <div className="container relative z-10 mx-auto px-5 pb-8 pt-16 lg:px-10">
          <div className="grid min-h-[390px] items-center gap-6 md:grid-cols-2">
            {/* Hero Text */}
            <div className="relative z-20 max-w-lg">
              <div className="mb-5 flex items-center gap-4">
                <span className="text-xs font-bold tracking-[0.3em] text-[#111827]">
                  TCS INTERNATIONAL EXPRESS
                </span>
                <span className="h-[2px] w-8 bg-red-600" />
              </div>

              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[66px]">
                We Deliver to
                <span className="block text-[88px] font-black leading-none text-[#ed1018] sm:text-[105px]">
                  220+
                </span>
                <span className="block text-5xl font-extrabold sm:text-6xl">Countries</span>
              </h1>

              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#ed1018] px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-red-700"
              >
                Get a Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Features Bar */}
          <div className="relative z-20 mt-2 grid grid-cols-2 gap-4 rounded-[24px] border border-white/80 bg-white/75 px-5 py-5 shadow-xl backdrop-blur-xl md:grid-cols-4 md:gap-0">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`flex items-center justify-center gap-3 ${
                    index !== 0 ? "md:border-l md:border-[#9db5d6]" : ""
                  }`}
                >
                  <Icon size={37} strokeWidth={1.8} className="shrink-0 text-red-600" />

                  <div className="text-xs font-bold leading-5 sm:text-sm">
                    <p>{item.title}</p>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTERNATIONAL SOLUTIONS */}
      {/* <section className="mx-auto max-w-[1440px] px-5 py-10 lg:px-9">
        <div className="mb-6 flex items-center gap-4">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Our International Solutions
          </h2>
          <span className="h-[3px] w-9 rounded-full bg-red-600" />
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          {solutions.map((item, index) => (
            <Link
              to="/contact"
              key={item.title}
              className={`group relative min-h-[145px] overflow-hidden rounded-2xl bg-[#edf0f5] sm:min-h-[165px] ${
                index === 0
                  ? "col-span-2 row-span-2 min-h-[300px] sm:col-span-1 sm:min-h-[340px] md:col-span-1"
                  : index === 1 || index === 2
                    ? "col-span-1 sm:col-span-1 md:col-span-1"
                    : ""
              }`}
            >
              <img
                src={item.image}
                alt={`${item.title} ${item.subtitle}`}

                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-white/25 to-transparent" />

              <div className="absolute right-3 top-4 z-10 max-w-[55%] text-right sm:right-5 sm:top-5">
                <h3 className="text-base font-extrabold leading-tight sm:text-xl">
                  {item.title}
                  {item.subtitle && (
                    <>
                      <br />
                      {item.subtitle}
                    </>
                  )}
                </h3>
              </div>

              <span className="absolute bottom-5 right-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg transition group-hover:bg-red-600 group-hover:text-white">
                <ArrowRight size={20} className="text-red-600 group-hover:text-white" />
              </span>
            </Link>
          ))}
        </div>
      </section> */}
      <InternationalExpressSolutions />

      {/* RED CTA BANNER */}
      <section className="mx-auto max-w-[1440px] px-5 pb-10 lg:px-9">
        <div
          className="relative flex min-h-[220px] items-center overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat px-7 py-7 text-white sm:min-h-[220px] sm:px-10"
          style={{
            backgroundImage: "url('/internationalexpress/RedBand.png')",
          }}
        >
          <div className="relative z-10 max-w-[65%]">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Ready to Ship Internationally?</h2>

            <p className="mt-2 text-sm leading-6 sm:text-lg">
              Documents, parcels or freight — we
              <br className="hidden sm:block" />
              move your shipments across 220+ countries.
            </p>
          </div>

          <Link
            to="/contact"
            className="relative z-10 ml-[200px] inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-red-600 transition hover:bg-gray-100 sm:px-7 sm:text-sm"
          >
            Get a Quote
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-7 px-5 py-7 sm:grid-cols-4 lg:px-9">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.number}
              className={`flex items-center justify-center gap-3 ${
                index !== 0 ? "sm:border-l sm:border-[#cbd5e1]" : ""
              }`}
            >
              <Icon size={39} strokeWidth={1.6} className="shrink-0 text-red-600" />

              <div>
                <h3 className="text-2xl font-extrabold leading-tight sm:text-3xl">{item.number}</h3>
                <p className="text-xs sm:text-sm">{item.label}</p>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
