import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-20">
      {/* Hero Image */}
      <div className="relative w-full">
        <img
          src="/About/aboutUs.jpg"
          alt="About TCS — collage of TCS services and operations"
          className="w-full h-auto object-cover"
          loading="eager"
          fetchPriority="high"
        />

        {/* Bottom gradient fade into content */}
        <div
          className="absolute inset-x-0 bottom-0 h-16 sm:h-24 pointer-events-none"
          style={{
            background: "linear-gradient(to top, var(--background) 0%, transparent 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Breadcrumb bar below the image */}
      {/* <div className="container-page py-3 sm:py-4">
        <motion.nav
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground"
        >
          <Link to="/" className="link-underline transition-colors hover:text-primary font-medium">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 shrink-0 rtl-flip text-muted-foreground/60" />
          <span className="text-foreground font-semibold">About Us</span>
        </motion.nav>
      </div> */}
    </section>
  );
}
