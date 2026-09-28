import { motion } from "motion/react";
import { Reveal } from "@/components/common";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "domestic",
    image: "/red.jpg",
    title: "TCS Domestic",
    summary:
      "Pakistan's largest and most trusted domestic courier network, delivering millions of shipments across 1,000+ cities every day with speed and reliability.",
  },
  {
    id: "international",
    image: "/International.jpg",
    title: "TCS International",
    summary:
      "Expanding Pakistan's reach beyond borders with reliable cross-border shipping solutions to over 200 countries worldwide.",
  },
  {
    id: "air",
    image: "/air.jpg",
    title: "TCS Air",
    summary:
      "Time-critical deliveries powered by our dedicated air cargo operations, offering same-day and next-day services for urgent shipments.",
  },
  {
    id: "logistics",
    image: "/logistics.jpg",
    title: "TCS Logistics",
    summary:
      "End-to-end supply chain and logistics solutions for enterprises of all scales, from warehousing to freight management.",
  },
  {
    id: "ecom",
    image: "/ecom.jpg",
    title: "TCS Ecommerce",
    summary:
      "Purpose-built fulfillment solutions for Pakistan's e-commerce ecosystem, from cash-on-delivery to automated reverse logistics.",
  },
  {
    id: "sentiments",
    image: "/sentiments.jpg",
    title: "TCS Sentiments",
    summary:
      "Express your feelings across distances with curated gifts, fresh flowers, cakes, and personalized hampers delivered nationwide.",
  },
  {
    id: "studio",
    image: "/studio.jpg",
    title: "TCS Studio",
    summary:
      "Creative and branding solutions powered by TCS's in-house design team, delivering packaging design and visual brand collateral.",
  },
  {
    id: "student",
    image: "/student.jpg",
    title: "TCS Student",
    summary:
      "Tailored shipping solutions for Pakistan's student community with affordable rates and dedicated campus support.",
  },
  {
    id: "travel",
    image: "/travel.jpg",
    title: "TCS Travel",
    summary:
      "Comprehensive travel and tourism services making travel effortless, from visa processing to custom holiday tour packages.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function ServicesGrid() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14 lg:py-20 bg-surface">
      {/* Subtle top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-border" aria-hidden="true" />

      {/* Decorative background glow */}
      <div
        className="pointer-events-none absolute -right-32 top-32 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page">
        {/* Section heading */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-7 w-1 rounded-full bg-primary" aria-hidden="true" />
              <p className="text-xs sm:text-sm font-bold tracking-[0.12em] uppercase text-primary">
                Explore
              </p>
              <span className="h-7 w-1 rounded-full bg-primary" aria-hidden="true" />
            </div>
            <h2 className="text-section text-foreground">All Services</h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
              Discover the full range of TCS solutions designed to serve businesses and consumers
              across Pakistan and beyond.
            </p>
          </div>
        </Reveal>

        {/* Services Grid - Compact, refined cards with default light red border */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={`/services/${service.id}`}
                className="group flex flex-col h-full rounded-2xl border border-primary/25 bg-card overflow-hidden shadow-(--shadow-soft) transition-all duration-300 hover:border-primary hover:shadow-[0_10px_30px_-5px_rgba(237,28,36,0.22)] hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {/* Image - Exact 3:4 aspect ratio displays 100% full height of 900x1200 TCS posters */}
                <div className="relative aspect-3/4 w-full overflow-hidden bg-muted/20">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Content - Compact padding & elegant typography */}
                <div className="flex flex-col flex-1 p-4 sm:p-5 justify-between">
                  {/* Default State: Title and Description */}
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-foreground transition-colors duration-200 group-hover:text-primary">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {service.summary}
                    </p>
                  </div>

                  {/* On hover: Interactive "Find out more" CTA button appears */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] max-sm:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                    <div className="overflow-hidden">
                      <div className="pt-3.5 mt-3.5 border-t border-primary/20 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 max-sm:opacity-100 transition-opacity duration-300 delay-50">
                        {/* High-impact interactive CTA button */}
                        <div className="relative group/btn w-full overflow-hidden rounded-xl p-px bg-linear-to-r from-primary via-primary-hover to-primary shadow-sm transition-all duration-300 hover:shadow-[0_6px_20px_rgba(237,28,36,0.35)] active:scale-[0.98]">
                          <div className="relative flex items-center justify-between px-3.5 py-2.5 rounded-[11px] bg-linear-to-r from-primary to-[#d91921] text-primary-foreground font-semibold text-xs sm:text-sm overflow-hidden">
                            {/* Shimmer sweep animation across button on hover */}
                            <span
                              className="pointer-events-none absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out"
                              style={{
                                background:
                                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                              }}
                            />

                            <span className="tracking-tight flex items-center gap-1.5">
                              <span>Find out more</span>
                            </span>

                            <div className="flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 rounded-lg bg-white/20 backdrop-blur-xs text-white transition-all duration-300 group-hover/btn:bg-white group-hover/btn:text-primary group-hover/btn:translate-x-1 group-hover/btn:scale-105 shadow-xs">
                              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
