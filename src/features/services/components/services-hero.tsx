import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden pt-10">
      {/* Gradient hero background */}
      <div
        className="relative w-full py-14 sm:py-16 lg:py-18"
        style={{ background: "var(--gradient-surface)" }}
      >
        {/* Decorative blurred orbs */}
        <div
          className="pointer-events-none absolute -right-20 top-8 h-64 w-64 rounded-full bg-primary/8 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-4 h-48 w-48 rounded-full bg-primary/5 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-page relative z-10">
          {/* Breadcrumb */}
          {/* <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground mb-6"
          >
            <Link
              to="/"
              className="link-underline transition-colors hover:text-primary font-medium"
            >
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 rtl-flip text-muted-foreground/60" />
            <span className="text-foreground font-semibold">Services</span>
          </motion.nav> */}

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="h-8 w-1 rounded-full bg-primary" aria-hidden="true" />
              <p className="text-sm font-bold tracking-[0.12em] uppercase text-primary">
                What We Offer
              </p>
            </div>
            <h1 className="text-hero text-foreground max-w-3xl">Our Services</h1>
            <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              From domestic deliveries to international logistics, TCS provides comprehensive
              solutions tailored to every need.
            </p>
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
          style={{
            background: "linear-gradient(to top, var(--background) 0%, transparent 100%)",
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
