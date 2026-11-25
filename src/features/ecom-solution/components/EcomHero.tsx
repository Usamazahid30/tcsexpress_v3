import { motion } from "motion/react";
import { ArrowRight, Play, Share2, Warehouse, Wallet, TrendingUp } from "lucide-react";

const heroHighlights = [
  {
    title: "Widespread Network",
    icon: Share2,
    href: "#solutions",
  },
  {
    title: "Fulfillment & Warehousing",
    icon: Warehouse,
    href: "#fulfilment",
  },
  {
    title: "Quick Payments",
    icon: Wallet,
    href: "#retail-cod",
  },
  {
    title: "Business Growth",
    icon: TrendingUp,
    href: "#solutions",
  },
];

interface EcomHeroProps {
  onWatchVideo?: () => void;
}

export function EcomHero({ onWatchVideo }: EcomHeroProps) {
  return (
    <section className="relative flex min-h-[88vh] flex-col justify-between overflow-hidden bg-[#041531] pt-24 pb-8 sm:pt-28 sm:pb-12 lg:min-h-[92vh]">
      {/* Background Artwork */}
      <img
        src="/ecom-solution/ecom.jpg"
        alt="Power Your Business with TCS E-Com Solutions"
        className="pointer-events-none absolute inset-0 h-full w-full max-w-none object-fill"
        loading="eager"
        fetchPriority="high"
      />

      {/* Contrast Gradient for Left Typography & Bottom Strip */}
      {/* <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#041531]/90 via-[#041531]/55 to-transparent lg:via-[#041531]/30"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#041531]/80 via-[#041531]/30 to-transparent"
        aria-hidden="true"
      /> */}

      {/* Main Hero Copy */}
      <div className="container-page relative z-10 my-auto py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl font-extrabold uppercase leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            <span className="block">Power Your</span>
            <span className="block">Business With</span>
            <span className="mt-1 block text-[#ED1C24] drop-shadow-[0_2px_12px_rgba(212,5,17,0.35)] text-7xl">
              TCS E-Com
            </span>
            <span className="block text-[#ED1C24] drop-shadow-[0_2px_12px_rgba(212,5,17,0.35)] text-7xl">
              Solutions
            </span>
          </h1>

          {/* Signature Red Brush Swoosh */}
          {/* <svg
            viewBox="0 0 280 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-3 h-4 w-52 sm:h-5 sm:w-64"
            aria-hidden="true"
          >
            <path
              d="M4 17.5C68 5.5 178 2.5 274 14.5C277 14.9 276.5 18.8 273 18.5C180 10.5 72 11.5 6 19.5C3.5 19.8 2 17.9 4 17.5Z"
              fill="#ED1C24"
            />
          </svg> */}

          <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10 sm:gap-5">
            <a
              href="/ecom"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#D40511] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_-5px_rgba(212,5,17,0.6)] transition-all duration-300 hover:bg-[#b5040e] hover:shadow-[0_14px_30px_-5px_rgba(212,5,17,0.75)] sm:px-7 sm:text-base"
            >
              Open an Account
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl-flip" />
            </a>

            {/* <button
              type="button"
              onClick={onWatchVideo}
              className="group inline-flex items-center gap-3 text-sm font-medium text-white/95 transition-colors hover:text-white sm:text-base"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:border-white group-hover:bg-white/20">
                <Play className="h-4 w-4 fill-white text-white ml-0.5" />
              </span>
              <span>Watch How It Works</span>
            </button> */}
          </div>
        </motion.div>
      </div>

      {/* Bottom Glassmorphic Feature Strip */}
      <div className="container-page relative z-10 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4"
        >
          {heroHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.href}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-white/25 bg-[#0c2344]/45 px-5 py-4 text-white shadow-[0_8px_32px_rgba(0,0,0,0.22)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-[#0c2344]/65"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Icon className="h-5 w-5 stroke-[1.8]" />
                  </div>
                  <span className="text-sm font-semibold leading-snug tracking-wide sm:text-[15px]">
                    {item.title}
                  </span>
                </div>

                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-all duration-300 group-hover:bg-[#D40511] group-hover:translate-x-0.5">
                  <ArrowRight className="h-3.5 w-3.5 rtl-flip" />
                </span>
              </a>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Brand Accent Line */}
      {/* <div className="absolute inset-x-0 bottom-0 h-1 bg-[#D40511]" /> */}
    </section>
  );
}
