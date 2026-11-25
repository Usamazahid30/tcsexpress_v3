import { Link } from "react-router-dom";
import { Plane, Package, Clock3, Globe, ArrowRight, MapPin, Headphones, Boxes } from "lucide-react";
import { InternationalExpressSolutions } from "./InternationalExpressSolutions";
import { Button } from "@/components/ui/button";

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
    icon: Globe,
    title: "Global Hubs in",
    subtitle: "UK, UAE & Canada",
  },
];

const stats = [
  {
    icon: Globe,
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
            alt="banner"
            className="w-full h-full object-fil"
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

              <Button className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#ed1018] px-7 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-red-700">
                Get a Quote
                <ArrowRight size={18} />
              </Button>
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

          <Button className="relative z-10 ml-[200px] inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-red-600 transition hover:bg-gray-100 sm:px-7 sm:text-sm">
            Get a Quote
            <ArrowRight size={17} />
          </Button>
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
