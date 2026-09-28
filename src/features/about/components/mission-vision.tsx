import { motion } from "motion/react";
import { Reveal } from "@/components/common";
import { Heart, Users, Scale, ShieldCheck, HandHeart, TrendingUp } from "lucide-react";

const coreValues = [
  {
    icon: Heart,
    title: "Customer Love",
    description: "To love our customers and deliver quality",
  },
  {
    icon: Users,
    title: "Employee Growth",
    description: "Development of our employees in a merit-based culture",
  },
  {
    icon: Scale,
    title: "Justice",
    description: "Justice to all stakeholders",
  },
  {
    icon: ShieldCheck,
    title: "Lawfulness",
    description: "Lawful in every respect",
  },
  {
    icon: HandHeart,
    title: "Giving Back",
    description: "A giving back culture",
  },
  {
    icon: TrendingUp,
    title: "Efficiency",
    description: "Profitability through efficiency",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-surface py-12 sm:py-16 lg:py-24">
      {/* Subtle top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-border" aria-hidden="true" />

      <div className="container-page">
        {/* ── Mission Statement ────────────────────────────── */}
        <div className="max-w-3xl min-w-0">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-8 w-1 rounded-full bg-primary" aria-hidden="true" />
              <p className="text-sm font-bold tracking-[0.12em] uppercase text-primary">
                Our Purpose
              </p>
            </div>
            <h2 className="text-section text-foreground">Mission Statement</h2>
          </Reveal>

          <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
            <Reveal delay={0.05}>
              <p className="text-sm sm:text-base leading-[1.8] text-muted-foreground">
                Our most precious asset – the term 'TCS KARDO' has been gifted to us by the people
                of Pakistan as an expression of their affection and TRUST.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-sm sm:text-base leading-[1.8] text-muted-foreground">
                It is by delivering on this trust every single day, come rain or shine, over the
                shine, over the past four decades that we have become the country's logistics
                backbone delivering an array of services to businesses and consumers alike.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-sm sm:text-base leading-[1.8] text-muted-foreground">
                We now pledge to add greater value to our services through a blend of passion and
                new technologies aimed at enhancing productivity of our clients, whilst simplifying
                everyday lives of our consumers.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-sm sm:text-base leading-[1.8] text-muted-foreground">
                Additionally, we will extend our Air and Ground Logistics Services beyond borders
                opening new trade routes shaped by the emerging regional opportunities, to the
                benefit of Pakistan.
              </p>
            </Reveal>
          </div>
        </div>

        {/* ── Vision ──────────────────────────────────────── */}
        <Reveal delay={0.1}>
          <div className="mt-12 sm:mt-16 max-w-3xl min-w-0">
            <h2 className="text-section text-foreground mb-4 sm:mb-6">Vision</h2>
            <blockquote className="relative rounded-2xl border-l-4 border-primary bg-card px-5 py-4 sm:px-8 sm:py-6 shadow-(--shadow-soft)">
              <p className="text-base sm:text-lg lg:text-xl font-semibold leading-relaxed text-foreground">
                "To become the logistics backbone of the country."
              </p>
            </blockquote>
          </div>
        </Reveal>

        {/* ── Core Values ─────────────────────────────────── */}
        <div className="mt-12 sm:mt-16">
          <Reveal>
            <h2 className="text-section text-foreground mb-6 sm:mb-10">Core Values</h2>
          </Reveal>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="press group flex items-start gap-3.5 sm:gap-4 rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-(--shadow-soft) transition-all hover:border-primary/30"
                >
                  <div className="grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm sm:text-base font-bold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
