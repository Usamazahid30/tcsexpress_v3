import { Reveal } from "@/components/common";
import { Headphones, ShieldCheck, Clock } from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "Responsive care for all your domestic & international shipments",
  },
  {
    icon: Clock,
    title: "Prompt Turnaround",
    desc: "Quick resolution for inquiries, consignments, and feedback",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Network",
    desc: "Direct link to Pakistan's largest logistics and courier network",
  },
];

export function ContactIntro() {
  return (
    <section className="relative overflow-hidden bg-surface border-y border-border py-12 sm:py-16">
      <div className="container-page">
        <div className="max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-8 w-1 rounded-full bg-primary" aria-hidden="true" />
              <p className="text-sm font-bold tracking-[0.12em] uppercase text-primary">
                Get In Touch
              </p>
            </div>
            <h2 className="text-section text-foreground">We're Here to Help</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 text-base sm:text-lg leading-[1.8] text-muted-foreground">
              As an organisation that directly interacts with its customers on a daily basis, we
              believe in finding ways to constantly improve our services by understanding your needs
              better. Our dedicated support teams and customer service specialists are all ears.
              Please do not hesitate to contact us with your queries, input, or feedback.
            </p>
          </Reveal>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={0.1 + idx * 0.08}>
                <div className="press group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-(--shadow-soft) transition-all hover:border-primary/30">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm sm:text-base font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
