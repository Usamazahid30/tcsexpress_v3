import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/common";

const services = [
  {
    title: "Overland Express",
    description: "Reliable overland transportation solutions across Pakistan.",
    image: "/expressIcons/overlandexpress.svg",
    href: "/overland-logistics",
  },
  {
    title: "Warehousing",
    description: "Secure storage and efficient inventory management solutions.",
    image: "/expressIcons/warehousing.svg",
    href: "/warehousing",
  },
  {
    title: "International Freight",
    description: "Seamless international freight and cargo movement.",
    image: "/expressIcons/intfreight.svg",
    href: "/international-freights",
  },
  {
    title: "Pack N Go",
    description: "Professional packing and logistics solutions for businesses.",
    image: "/expressIcons/packngo.svg",
    href: "/pack-n-go",
  },
  {
    title: "Project Logistics",
    description: "Specialized logistics support for complex projects.",
    image: "/expressIcons/projectlogistics.svg",
    href: "/project-logistics",
  },
  {
    title: "Agri Logistics",
    description: "Dedicated logistics solutions for the agriculture sector.",
    image: "/expressIcons/agrilogistics.svg",
    href: "/agri-logistics",
  },
  {
    title: "Fleet Transportation",
    description: "Flexible fleet and transportation solutions for businesses.",
    image: "/expressIcons/fleetransportation.svg",
    href: "/fleet-transportation",
  },
  {
    title: "Distribution",
    description: "Efficient distribution networks connecting businesses nationwide.",
    image: "/expressIcons/distribution.svg",
    href: "/distribution",
  },
  {
    title: "Customs Brokerage",
    description: "Expert customs clearance and regulatory support.",
    image: "/expressIcons/customsbrokerage.svg",
    href: "/customs-bokerage",
  },
  {
    title: "Expo Logistics",
    description: "End-to-end logistics support for exhibitions and events.",
    image: "/expressIcons/expo-logistics.svg",
    href: "/expo-logistics",
  },
  {
    title: "Cold Chain",
    description: "Temperature-controlled logistics for sensitive shipments.",
    image: "/expressIcons/coldchain.svg",
    href: "/coldchain",
  },
  {
    title: "Regional Trade",
    description: "Cross-border trade and regional logistics solutions.",
    image: "/expressIcons/tirregionaltrade.svg",
    href: "/regional-trade",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function LogisticsServices() {
  return (
    <section className="relative overflow-hidden bg-surface py-14 sm:py-16 lg:py-24">
      <div className="container-page">
        <Reveal>
          <div className="mb-10 sm:mb-14">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-8 w-1 rounded-full bg-primary" aria-hidden="true" />

              <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">
                Our Services
              </p>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              From transportation and warehousing to specialized logistics, TCS provides integrated
              solutions designed to keep your business moving.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              transition={{
                duration: 0.55,
                delay: index * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                to={service.href}
                className="group flex min-h-37.5 items-center gap-5 rounded-2xl border border-border/60 bg-background p-5 shadow-(--shadow-soft) transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-(--shadow-elevated) sm:p-6"
              >
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-surface p-4 sm:h-28 sm:w-28">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="max-h-16 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                    {service.description}
                  </p>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowRight className="h-4 w-4 rtl-flip transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
