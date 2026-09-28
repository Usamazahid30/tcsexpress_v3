import { Reveal } from "@/components/common";

export function MilestonesTimeline() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24">
      {/* Decorative background glow */}
      <div
        className="pointer-events-none absolute -left-24 bottom-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page">
        {/* Section heading */}
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-8 w-1 rounded-full bg-primary" aria-hidden="true" />
            <p className="text-sm font-bold tracking-[0.12em] uppercase text-primary">
              Our Journey
            </p>
          </div>
          <h2 className="text-section text-foreground max-w-2xl">Milestones</h2>
          <p className="mt-3 max-w-lg text-sm sm:text-base text-muted-foreground leading-relaxed">
            Journey from an industry pioneer to the Pakistani vernacular
          </p>
        </Reveal>

        {/* Milestone image — responsive */}
        <Reveal delay={0.15}>
          <div className="mt-8 sm:mt-12 rounded-2xl border border-border bg-card p-3 sm:p-6 lg:p-8 shadow-(--shadow-soft)">
            {/* Desktop version */}
            <img
              src="/About/milestone-desktop.jpg"
              alt="TCS Milestones Timeline — from 1983 to 2020 onwards, showing key achievements across five decades"
              className="hidden w-full h-auto rounded-xl sm:block"
              loading="lazy"
              decoding="async"
            />
            {/* Mobile version */}
            <img
              src="/About/milestone.jpg"
              alt="TCS Milestones Timeline — from 1983 to 2020 onwards"
              className="w-full h-auto max-w-sm mx-auto rounded-xl block sm:hidden"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
