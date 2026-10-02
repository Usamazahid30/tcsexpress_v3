import { motion } from "motion/react";

export function LeadershipHero() {
  return (
    <section className="relative overflow-hidden bg-primary pt-24 sm:pt-28 lg:pt-32 pb-52 sm:pb-64 lg:pb-72 text-primary-foreground">
      {/* Subtle ambient lighting orbs inside the red hero */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-black/15 blur-2xl"
        aria-hidden="true"
      />

      <div className="container-page relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl"
        >
          {/* Main Title matching the reference design */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Meet Our Leaders
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
