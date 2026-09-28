import { motion } from "motion/react";
import { Reveal } from "@/components/common";
import { Building2, MapPin, Users, Calendar } from "lucide-react";

const stats = [
  { icon: Calendar, value: "1983", label: "Founded" },
  { icon: MapPin, value: "1,000+", label: "Cities Covered" },
  { icon: Users, value: "10,000+", label: "Team Members" },
  { icon: Building2, value: "40+", label: "Years of Service" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function CompanyOverview() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24">
      {/* Decorative background glow */}
      <div
        className="pointer-events-none absolute -right-32 top-12 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page">
        {/* Section heading */}
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-8 w-1 rounded-full bg-primary" aria-hidden="true" />
            <p className="text-sm font-bold tracking-[0.12em] uppercase text-primary">Who We Are</p>
          </div>
          <h2 className="text-section text-foreground max-w-2xl">Our Story</h2>
        </Reveal>

        {/* Content grid */}
        <div className="mt-8 sm:mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start">
          {/* Left — Paragraphs */}
          <div className="space-y-5 sm:space-y-6 min-w-0">
            <Reveal>
              <p className="text-sm sm:text-base leading-[1.8] text-muted-foreground">
                Back in 1983, when TCS started off with just 25 shipments on its first day, there
                was no doubt that it would grow to become the leader in Pakistan's courier industry.
                Since then, TCS has moved from being a courier service provider to become a tested
                tested and proven name for delivering a wide range of logistics services. Not just
                that, but TCS is now on its way to becoming the logistics backbone of the
                country—much more than just a humble courier company.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-sm sm:text-base leading-[1.8] text-muted-foreground">
                While it is easy to take TCS for a technology-driven company, at the heart of the
                TCS phenomena of success are the people. Those, who do not forget that the customers
                are the only catalysts of change, and that the strategic insights about the business
                and the customers is the only true guide which makes it possible to achieve the high
                standards of service.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-sm sm:text-base leading-[1.8] text-muted-foreground">
                Our propensity to get the most out of modern technologies does not only help us to
                develop tailor-made products and services, it allows us to maintain
                industry-transforming standards which become the benchmarks that others aspire to
                achieve. We reaffirm our commitment to doing better for our customers everyday by
                providing exciting new possibilities and to continue to be your first choice. Today,
                tomorrow, always.
              </p>
            </Reveal>
          </div>

          {/* Right — Stats grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex flex-col items-center gap-2.5 sm:gap-3 rounded-2xl border border-border bg-card p-4 sm:p-6 text-center shadow-(--shadow-soft) transition-all hover:border-primary/30 hover:shadow-(--shadow-elevated)"
                >
                  <div className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
