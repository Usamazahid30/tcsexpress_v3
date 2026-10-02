import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { Reveal } from "@/components/common";

const services = [
  {
    id: "domestic",
    image: "Services/domestic.jpg",
    title: "TCS Domestic",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cumque architecto facilis alias et. Nulla adipisci eaque voluptas minus iure id error repudiandae sapiente asperiores?",
    href: "#services",
  },
  {
    id: "international",
    image: "Services/International.jpg",
    title: "TCS International",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cumque architecto facilis alias et. Nulla adipisci eaque voluptas minus iure id error repudiandae sapiente asperiores?",
    href: "/international",
  },
  {
    id: "air",
    image: "Services/air.jpg",
    title: "TCS Air",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cumque architecto facilis alias et. Nulla adipisci eaque voluptas minus iure id error repudiandae sapiente asperiores?",
    href: "#services",
  },
  {
    id: "logistics",
    image: "Services/logistics.jpg",
    title: "TCS Logistics",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cumque architecto facilis alias et. Nulla adipisci eaque voluptas minus iure id error repudiandae sapiente asperiores?",
    href: "/logistics",
  },
  {
    id: "ecom",
    image: "Services/ecom.jpg",
    title: "TCS Ecommerce",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cumque architecto facilis alias et. Nulla adipisci eaque voluptas minus iure id error repudiandae sapiente asperiores?",
    href: "/ecom-solution",
  },
  {
    id: "sentiments",
    image: "Services/sentiments.jpg",
    title: "TCS Sentiments",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cumque architecto facilis alias et. Nulla adipisci eaque voluptas minus iure id error repudiandae sapiente asperiores?",
    href: "https://sentimentsexpress.com/",
    external: true,
  },
  {
    id: "studio",
    image: "Services/studio.jpg",
    title: "TCS Studio",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cumque architecto facilis alias et. Nulla adipisci eaque voluptas minus iure id error repudiandae sapiente asperiores?",
    href: "https://studiobytcs.pk/",
    external: true,
  },
  {
    id: "student",
    image: "Services/student.jpg",
    title: "TCS Student",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cumque architecto facilis alias et. Nulla adipisci eaque voluptas minus iure id error repudiandae sapiente asperiores?",
    href: "#services",
  },
  {
    id: "travel",
    image: "Services/travel.jpg",
    title: "TCS Travel",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cumque architecto facilis alias et. Nulla adipisci eaque voluptas minus iure id error repudiandae sapiente asperiores?",
    href: "#services",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-surface py-10 sm:py-14 lg:py-20">
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
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-7 w-1 rounded-full bg-primary" aria-hidden="true" />

              <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary sm:text-sm">
                Explore
              </p>

              <span className="h-7 w-1 rounded-full bg-primary" aria-hidden="true" />
            </div>

            <h2 className="text-section text-foreground">All Services</h2>

            <p className="mx-auto mt-2 max-w-lg text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Discover the full range of TCS solutions designed to serve businesses and consumers
              across Pakistan and beyond.
            </p>
          </div>
        </Reveal>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.05,
          }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.07,
              },
            },
          }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary/25 bg-card shadow-(--shadow-soft) transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_10px_30px_-5px_rgba(237,28,36,0.22)]">
                {/* Image */}
                <div className="relative aspect-3/4 w-full overflow-hidden bg-muted/20">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                  {/* Title + Description */}
                  <div>
                    <div className="mb-1.5 flex items-center gap-2">
                      <h3 className="text-base font-bold text-foreground transition-colors duration-200 group-hover:text-primary sm:text-lg">
                        {service.title}
                      </h3>
                    </div>

                    <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {service.summary}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                    <div className="overflow-hidden">
                      <div className="mt-3.5 border-t border-primary/20 pt-3.5">
                        {service.external ? (
                          <a
                            href={service.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Find out more about ${service.title}`}
                            className="group/btn relative flex w-full items-center justify-between overflow-hidden rounded-xl bg-linear-to-r from-primary via-primary-hover to-primary px-3.5 py-2.5 text-xs font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:shadow-[0_6px_20px_rgba(237,28,36,0.35)] active:scale-[0.98] sm:text-sm"
                          >
                            {/* Shimmer */}
                            <span
                              className="pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-700 ease-in-out group-hover/btn:translate-x-full"
                              style={{
                                background:
                                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                              }}
                            />

                            <span className="relative flex items-center gap-1.5 tracking-tight">
                              <span>Find out more</span>
                            </span>

                            <span className="relative flex h-6 w-6 items-center justify-center rounded-lg bg-white/20 text-white shadow-xs backdrop-blur-xs transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-105 group-hover/btn:bg-white group-hover/btn:text-primary sm:h-7 sm:w-7">
                              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 sm:h-4 sm:w-4" />
                            </span>
                          </a>
                        ) : (
                          <Link
                            to={service.href}
                            aria-label={`Find out more about ${service.title}`}
                            className="group/btn relative flex w-full items-center justify-between overflow-hidden rounded-xl bg-linear-to-r from-primary via-primary-hover to-primary px-3.5 py-2.5 text-xs font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:shadow-[0_6px_20px_-5px_rgba(237,28,36,0.35)] active:scale-[0.98] sm:text-sm"
                          >
                            {/* Shimmer */}
                            <span
                              className="pointer-events-none absolute inset-0 -translate-x-full transition-transform duration-700 ease-in-out group-hover/btn:translate-x-full"
                              style={{
                                background:
                                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                              }}
                            />

                            <span className="relative flex items-center gap-1.5 tracking-tight">
                              <span>Find out more</span>
                            </span>

                            <span className="relative flex h-6 w-6 items-center justify-center rounded-lg bg-white/20 text-white shadow-xs backdrop-blur-xs transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-105 group-hover/btn:bg-white group-hover/btn:text-primary sm:h-7 sm:w-7">
                              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 sm:h-4 sm:w-4" />
                            </span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
