import { useEffect } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  Award,
  Sparkles,
  Quote,
  CheckCircle2,
  Users,
  Milestone,
  Flag,
  Globe,
} from "lucide-react";
import { useCuratedPageTransition } from "@/components/common";

export function HassanRazaPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const { navigateWithTransition } = useCuratedPageTransition();

  const handleBackToLeadership = () => {
    navigateWithTransition("/leadership", {
      title: "OUR LEADERSHIP",
      subtitle: "TCS Board of Directors & Executive Committee",
      type: "doors",
    });
  };

  const handleNavigateToLeader = (name: string, role: string, href: string) => {
    navigateWithTransition(href, {
      title: name.toUpperCase(),
      subtitle: role,
      type: "doors",
    });
  };

  return (
    <article className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* ─────────────────────────────────────────────────────────────
          1. KEYNOTE HERO SECTION (Asymmetrical Card + Portrait)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#fdf9f3] dark:bg-[#0c0d12] transition-colors duration-300">
        <div className="absolute top-0 right-1/4 -z-10 h-125 w-125 rounded-full bg-primary/5 blur-[120px] dark:bg-primary/10 pointer-events-none" />
        <div className="absolute bottom-0 left-10 -z-10 h-72 w-72 rounded-full bg-amber-500/5 blur-[90px] dark:bg-amber-500/10 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-16 sm:pb-24">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 sm:mb-8"
          >
            <button
              onClick={handleBackToLeadership}
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 text-primary" />
              <span>Back to Leadership</span>
            </button>
          </motion.div>

          {/* Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Asymmetrical Keynote Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 relative"
            >
              <div className="relative overflow-hidden rounded-[2rem] sm:rounded-tl-[2.25rem] sm:rounded-bl-[2.25rem] sm:rounded-tr-[5rem] sm:rounded-br-[2.25rem] bg-[#65071a] bg-linear-to-br from-[#73081e] via-[#65071a] to-[#4c0513] dark:from-[#590617] dark:via-[#470512] dark:to-[#33030d] p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_-12px_rgba(115,8,30,0.45)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10">
                {/* Top Badge + Neon Squiggle */}
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#dfff00] text-black font-extrabold text-xs uppercase tracking-wider shadow-sm">
                    CEO & Operations Visionary
                  </span>

                  <svg
                    className="h-6 w-24 sm:w-28 text-[#dfff00] opacity-95 shrink-0"
                    viewBox="0 0 130 30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M 5 22 Q 25 5 45 18 T 85 14 T 125 10" />
                  </svg>
                </div>

                {/* Bold Headline */}
                <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-white tracking-tight leading-[1.08]">
                  Operational Velocity & Pan-Asian Excellence
                </h1>

                {/* Sub-headline */}
                <p className="mt-3 text-base sm:text-lg font-medium text-amber-200/90 leading-snug">
                  26+ years steering courier, express, and logistics transformation across Pakistan
                  and the Asia Pacific region.
                </p>

                {/* Editorial Subtitle */}
                <p className="mt-5 text-sm sm:text-base font-normal italic text-white/85 leading-relaxed max-w-xl">
                  "CEO of TCS Private Limited. Former Head of Operations at DHL Express Pakistan and
                  DHL APEC Regional Office in Singapore across 35+ countries. A certified
                  international manager and coaching facilitator dedicated to network efficiency and
                  human empowerment."
                </p>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {/* <a
                    href="mailto:info@tcsexpress.com"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#ffd000] text-black font-extrabold text-sm uppercase tracking-wider shadow-lg hover:bg-[#ffe033] hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    <Mail className="h-4 w-4" />
                    Get in Touch
                  </a> */}

                  <a
                    href="#biography"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-semibold text-sm uppercase tracking-wider border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-200"
                  >
                    <Award className="h-4 w-4 text-[#dfff00]" />
                    Explore Profile
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Executive Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col items-center justify-center relative"
            >
              <div className="relative w-full max-w-105">
                <div className="absolute inset-0 rounded-full bg-linear-to-tr from-primary/10 via-amber-500/10 to-transparent blur-2xl dark:from-primary/20 dark:via-amber-500/15" />

                <div className="relative overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-card/40 backdrop-blur-sm shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
                  <img
                    src="/leadership/HassanRazaLeghari.jpg"
                    alt="Hassan Raza Leghari"
                    className="w-full h-auto object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-700 hover:scale-102"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="text-lg font-black tracking-wide text-[#dfff00]">
                      Hassan Raza Leghari
                    </span>
                    <span className="text-xs text-white/80">CEO TCS Private Limited</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. STATS BAR
      ───────────────────────────────────────────────────────────── */}
      <section className="border-y border-border/60 bg-muted/20 dark:bg-card/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                value: "26+ Yrs",
                label: "Express Leadership",
                sublabel: "Courier, express and international logistics",
              },
              {
                value: "35+",
                label: "Asia-Pacific Nations",
                sublabel: "Regional operational command at DHL APEC Singapore",
              },
              {
                value: "Market #1",
                label: "Transit Time Distinction",
                sublabel: "Propelled Pakistan operations to national leadership",
              },
              {
                value: "Certified",
                label: "International Manager",
                sublabel: "Coaching for success facilitator & people leader",
              },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col items-center text-center p-4 rounded-xl border border-transparent hover:border-primary/20 hover:bg-card/50 transition-all"
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary tracking-tight">
                  {stat.value}
                </span>
                <span className="mt-2 text-sm sm:text-base font-bold text-foreground">
                  {stat.label}
                </span>
                <span className="mt-1 text-xs text-muted-foreground max-w-50">{stat.sublabel}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. BIOGRAPHY & PULL-QUOTE
      ───────────────────────────────────────────────────────────── */}
      <section id="biography" className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Biography Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                <Award className="h-4 w-4" />
                Executive Profile & Operational Impact
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground tracking-tight">
                Pioneering Operational Excellence Across Borders
              </h2>

              <div className="space-y-5 text-sm sm:text-base text-muted-foreground leading-relaxed text-justify sm:text-left">
                <p>
                  With over 26 years of distinguished leadership experience in courier, express, and
                  logistics, Mr. Hassan Raza Leghari has consistently driven operational excellence
                  growth across Pakistan and the Asia Pacific region. His tenure at DHL Express is
                  marked by visionary leadership, large-scale operational transformations, and
                  strengthening of strategic regulatory and industry partnerships.
                </p>
                <p>
                  From 2008 to 2015, as Head of Operations, Mr. Hassan propelled DHL Express
                  Pakistan to market-leading transit times and operational distinctions, earning
                  recognition for innovation and performance.
                </p>
                <p>
                  In 2015, Mr. Hassan transitioned to the DHL APEC Regional Office in Singapore,
                  leading operations across 35+ countries. With his trademark energy and commitment,
                  he has delivered numerous achievements and initiatives across the region. He has
                  been deeply committed to people development, deploying network operations
                  efficiency programs being a certified international manager and coaching for
                  success facilitator.
                </p>
                <p>
                  Mr. Hassan has been an integral part of courier, express and logistics business. A
                  true ambassador of our values, passion and excellence.
                </p>
              </div>

              {/* Accolades */}
              <div className="pt-6 border-t border-border">
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Key Accolades & Governance Roles
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "CEO, TCS Private Limited",
                    "Former Head of Operations, DHL Express Pakistan (2008–2015)",
                    "Regional Operations Director, DHL APEC Office Singapore (35+ Countries)",
                    "Certified International Manager (CIM)",
                    "Certified Coaching for Success Facilitator",
                    "Network Operations Efficiency & Modernization Leader",
                  ].map((cred, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-card border border-border/80 dark:border-white/10"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-foreground leading-snug">
                        {cred}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pull Quote Card */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary to-[#B8141A] dark:from-[#900E13] dark:to-[#6E070B] p-8 sm:p-10 text-white shadow-xl"
              >
                <Quote className="h-12 w-12 text-white/30 mb-4" />

                <blockquote className="text-lg sm:text-xl font-bold italic leading-relaxed text-white">
                  "Excellence in logistics is born from passion, discipline, and relentless
                  dedication to our people. When frontline operations run with precision, customer
                  trust becomes insurmountable."
                </blockquote>

                <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between">
                  <div>
                    <p className="font-extrabold text-base tracking-wide text-white">
                      Hassan Raza Leghari
                    </p>
                    <p className="text-xs text-white/80 font-medium">CEO, TCS Private Limited</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-black text-xs text-white">
                    TCS
                  </div>
                </div>

                <div className="absolute -right-10 -bottom-10 h-36 w-36 rounded-full bg-white/10 blur-xl pointer-events-none" />
              </motion.div>

              <div className="p-6 rounded-3xl border border-primary/20 bg-primary/5 dark:bg-primary/10">
                <h4 className="text-base font-bold text-foreground">
                  Frontline Passion & Value Commitment
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Steering Pakistan's largest private express network with a commitment to rapid
                  transit times, technology-driven route optimization, and service consistency
                  across every hub.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. OPERATIONAL MILESTONES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-muted/30 dark:bg-card/20 border-t border-border/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-2">
              <Milestone className="h-4 w-4" />
              Career & Operational Milestones
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight">
              Milestones of Pan-Asian Logistics Leadership
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-linear-to-b from-primary via-primary/50 to-primary/10" />

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "2008 – 2015",
                  title: "Head of Operations, DHL Express Pakistan",
                  description:
                    "Propelled DHL Express Pakistan to market-leading transit times and operational distinctions, earning industry-wide recognition for innovation and reliable service delivery.",
                },
                {
                  year: "2015 – 2023",
                  title: "Regional Operations Leadership, DHL APEC Singapore",
                  description:
                    "Transitioned to the DHL APEC Regional Office in Singapore, steering operations across 35+ countries while championing people development and network efficiency.",
                },
                {
                  year: "Present",
                  title: "Chief Executive Officer, TCS Private Limited",
                  description:
                    "Leading Pakistan's flagship domestic express network, driving service modernization, transit velocity, and transformative supply chain partnerships.",
                },
              ].map((item, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`relative flex flex-col md:flex-row items-center ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-full md:w-1/2 px-0 md:px-8">
                      <div className="p-6 rounded-2xl bg-card border border-border/80 dark:border-white/10 shadow-sm hover:border-primary/40 hover:shadow-md transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-primary">
                            {/* Phase {idx + 1} */}
                          </span>
                          <span className="text-xl sm:text-2xl font-black text-primary">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="my-3 md:my-0 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-md z-10">
                      <Flag className="h-4 w-4" />
                    </div>

                    <div className="hidden md:block md:w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. PEER LEADERSHIP NAVIGATION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-background border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-2">
                <Users className="h-4 w-4" />
                Executive Governance
              </div>
              <h2 className="text-xl sm:text-3xl font-black text-foreground">
                Meet the Leadership Team
              </h2>
            </div>

            <button
              onClick={handleBackToLeadership}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-primary hover:text-primary-hover transition-colors cursor-pointer"
            >
              <span>View All Leaders</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Link to Khalid Nawaz Awan */}
            <div
              onClick={() =>
                handleNavigateToLeader("Khalid Nawaz Awan", "Founder and Chairman", "/founder")
              }
              className="group cursor-pointer p-4 rounded-2xl bg-card border border-border/80 dark:border-white/10 hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center gap-4"
            >
              <div className="h-16 w-16 rounded-xl overflow-hidden bg-muted/40 shrink-0">
                <img
                  src="/leadership/khalid-nawaz.jpg"
                  alt="Khalid Nawaz Awan"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-sm text-foreground uppercase tracking-wider truncate group-hover:text-primary transition-colors">
                  Khalid Nawaz Awan
                </h3>
                <p className="text-xs text-muted-foreground truncate mt-0.5">
                  Founder and Chairman
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary mt-2">
                  View Profile <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>

            {/* Link to Saira Awan Malik */}
            <div
              onClick={() =>
                handleNavigateToLeader("Saira Awan Malik", "President", "/saira-awan-malik")
              }
              className="group cursor-pointer p-4 rounded-2xl bg-card border border-border/80 dark:border-white/10 hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center gap-4"
            >
              <div className="h-16 w-16 rounded-xl overflow-hidden bg-muted/40 shrink-0">
                <img
                  src="/leadership/saira_awan.jpg"
                  alt="Saira Awan Malik"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-sm text-foreground uppercase tracking-wider truncate group-hover:text-primary transition-colors">
                  Saira Awan Malik
                </h3>
                <p className="text-xs text-muted-foreground truncate mt-0.5">President</p>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary mt-2">
                  View Profile <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
