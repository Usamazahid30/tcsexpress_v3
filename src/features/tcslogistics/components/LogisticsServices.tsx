import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/common";

// The SVGs already contain each service name, so `label` is only used
// for accessibility (alt text + link name).
const services = [
  {
    label: "Overland Express",
    image: "/expressIcons/overlandexpress.svg",
    href: "/overland-logistics",
  },
  { label: "Warehousing", image: "/expressIcons/warehousing.svg", href: "/warehousing" },
  {
    label: "International Freight",
    image: "/expressIcons/intfreight.svg",
    href: "/international-freights",
  },
  { label: "Pack N Go", image: "/expressIcons/packngo.svg", href: "/pack-n-go" },
  {
    label: "Project Logistics",
    image: "/expressIcons/projectlogistics.svg",
    href: "/project-logistics",
  },
  { label: "Agri Logistics", image: "/expressIcons/agrilogistics.svg", href: "/agri-logistics" },
  {
    label: "Fleet Transportation",
    image: "/expressIcons/fleetransportation.svg",
    href: "/fleet-transportation",
  },
  { label: "Distribution", image: "/expressIcons/distribution.svg", href: "/distribution" },
  {
    label: "Customs Brokerage",
    image: "/expressIcons/customsbrokerage.svg",
    href: "/customs-bokerage",
  },
  { label: "Expo Logistics", image: "/expressIcons/expo-logistics.svg", href: "/expo-logistics" },
  { label: "Cold Chain", image: "/expressIcons/coldchain.svg", href: "/coldchain" },
  { label: "Regional Trade", image: "/expressIcons/tirregionaltrade.svg", href: "/regional-trade" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function LogisticsServices() {
  const reduce = useReducedMotion();

  // One orchestrated moment: the grid enters, cards cascade in a wave.
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.06, delayChildren: 0.05 },
    },
  };

  const card: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 32, scale: 0.94 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: reduce ? 0.2 : 0.7, ease: EASE },
    },
  };

  return (
    <section className="relative overflow-hidden bg-surface py-14 sm:py-16 lg:py-24">
      <div className="container-page">
        <Reveal>
          <div className="mb-10 flex items-center gap-3 sm:mb-14">
            <span className="h-8 w-1 rounded-full bg-primary" aria-hidden="true" />
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">
              Our Services
            </p>
          </div>
        </Reveal>

        <motion.ul
          role="list"
          className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.li key={service.href} variants={card} className="list-none">
              <motion.div
                whileHover={reduce ? undefined : { y: -6 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className="h-full"
              >
                <Link
                  to={service.href}
                  aria-label={service.label}
                  className="group relative flex aspect-4/3 h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-background p-6 shadow-(--shadow-soft) outline-none transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-(--shadow-elevated) focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/40 sm:p-8"
                >
                  {/* Soft spotlight that fades in behind the logo on hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,color-mix(in_oklab,var(--color-primary)_10%,transparent),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                  />

                  <img
                    src={service.image}
                    alt={service.label}
                    loading="lazy"
                    draggable={false}
                    className="relative max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.06] group-focus-visible:scale-[1.06]"
                  />

                  {/* Arrow badge: always visible on touch, reveals on hover for desktop */}
                  <span
                    aria-hidden="true"
                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-primary transition-all duration-300 md:translate-y-1 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    <ArrowUpRight className="h-4 w-4 rtl-flip" />
                  </span>

                  {/* Accent line that draws across the bottom on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                  />
                </Link>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
