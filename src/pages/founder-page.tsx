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
} from "lucide-react";
import { useCuratedPageTransition } from "@/components/common";

export function FounderPage() {
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

  const handleNavigateToSaira = () => {
    navigateWithTransition("/saira-awan-malik", {
      title: "SAIRA AWAN MALIK",
      subtitle: "President",
      type: "doors",
    });
  };

  const handleNavigateToHassan = () => {
    navigateWithTransition("/HassanRaza", {
      title: "HASSAN RAZA LEGHARI",
      subtitle: "CEO TCS Private Limited",
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
                    Visionary & Founder
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
                  Scale Without Losing Your Culture
                </h1>

                {/* Sub-headline */}
                <p className="mt-3 text-base sm:text-lg font-medium text-amber-200/90 leading-snug">
                  Delivering trust, connecting continents, and building Pakistan's logistics
                  backbone since 1983.
                </p>

                {/* Editorial Subtitle */}
                <p className="mt-5 text-sm sm:text-base font-normal italic text-white/85 leading-relaxed max-w-xl">
                  "A mechanical engineer and visionary pioneer who transformed Pakistan's courier
                  landscape from a modest 25-package startup into an international logistics
                  powerhouse serving 3,800+ destinations worldwide."
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
                    Explore Journey
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
                    src="/leadership/khalid-nawaz.jpg"
                    alt="Khalid Nawaz Awan"
                    className="w-full h-auto object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-700 hover:scale-102"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-5 text-white">
                    {/* <span className="text-xs font-bold uppercase tracking-widest text-[#dfff00]">
                      TCS Group
                    </span> */}
                    <span className="text-lg font-black tracking-wide text-[#dfff00]">
                      Khalid Nawaz Awan
                    </span>
                    <span className="text-xs text-white/80">Founder and Chairman</span>
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
                value: "40+",
                label: "Years of Leadership",
                sublabel: "Shaping nationwide courier & express supply chain",
              },
              {
                value: "3,800+",
                label: "Global & Domestic Hubs",
                sublabel: "Unmatched last-mile reach across Pakistan and beyond",
              },
              {
                value: "12,000+",
                label: "Logistics Professionals",
                sublabel: "Dedicated couriers, aviation crew, and engineers",
              },
              {
                value: "100M+",
                label: "Shipments Delivered",
                sublabel: "Annual cargo and parcel volume entrusted to TCS",
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
                Vision & Leadership Story
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground tracking-tight">
                The Architect of Modern Supply Chains in Pakistan
              </h2>

              <div className="space-y-5 text-sm sm:text-base text-muted-foreground leading-relaxed text-justify sm:text-left">
                <p>
                  A mechanical engineer by education, Mr Khalid Nawaz Awan was born in Dera Ismail
                  Khan. He entered the courier and logistics business in 1982 when his elder brother
                  established a joint venture, DHL Pakistan Private Ltd. with the global giant. The
                  two brothers then founded TCS Private Ltd. as the domestic arm accompanying the
                  international business.
                </p>
                <p>
                  The first decade saw a phenomenal growth of business. Soon it became obvious that
                  the future potential of the business—domestic and international—required long term
                  re-structuring. The brothers astutely addressed this in 1991 by diverging the
                  organisation into two companies, enabling each to pursue its own trajectory
                  independently.
                </p>
                <p>
                  Khalid Nawaz Awan, who had been serving as the Managing Director of both the TCS
                  and the DHL Pakistan under the Chairmanship of Sadiq Awan, took over as the
                  Chairman and the Managing Director of TCS Private Limited. The challenges that
                  emerged after this decision have been the subject of a Harvard Business School
                  Case Study which was commenced in 2002. Up until 2007, when Sadiq Awan disinvested
                  his share in DHL Pakistan, TCS maintained a collaborative non-competitive
                  relationship with DHL. Meanwhile, Khalid Awan went on to pilot the evolution of
                  TCS in Pakistan while establishing TCS foothold in the UK (1989), the UAE (1996),
                  and Canada (1999). On the 30th anniversary of its founding in 2013, Khalid Awan
                  outlined the course of TCS, guided by a mission statement, core values, and a
                  young leadership for the next thirty years.
                </p>
                <p>
                  Mr Awan is an active philanthropist who generously contributes to organisations
                  working in the fields of health, education, and social welfare. He is a lifetime
                  member of the World Presidents’ Organisation (WPO), and a member of the Chartered
                  Institute of Transport, and Fellow of the Royal Aeronautical Society. He has
                  served as the Chairman of Khalid Nawaz Awan Foundation and the Chairman TCS
                  Holdings Private Limited—YPO Pakistan Chapter. He has chaired the Corporate Award
                  Committee of the Management Association of Pakistan (MAP). He also serves on the
                  Pakistan National Committee of the International Chambers of Commerce (ICC), and
                  the Board of Governors—Karachi Council of Foreign Relations and Community Advisory
                  Board of the Aga Khan University Hospital, Karachi. From 1997–2007, Mr Awan served
                  on the Paris based Transportation Committee of the ICC, and represented it at the
                  United Nations in 2003 General Assembly Session on Millennium Development Goals.
                  He has also advised the Government of Pakistan on the development of Pakistan
                  Postal Services.
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
                    "Fellow of the Royal Aeronautical Society (FRAeS), United Kingdom",
                    "Pioneer of Pakistan's Private Express Courier & Air Cargo Industry",
                    "Harvard Business School Case Study Subject (2002)",
                    "Lifetime Member, World Presidents’ Organisation (WPO)",
                    "Former Representative to United Nations (2003 MDG Session)",
                    "Senior Advisor on Development of Pakistan Postal Services",
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
                  "Logistics is never just about moving boxes; it is the sacred bond of trust
                  between businesses, families, and nations. When you deliver on time with honor,
                  you build an economy."
                </blockquote>

                <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between">
                  <div>
                    <p className="font-extrabold text-base tracking-wide text-white">
                      Khalid Nawaz Awan
                    </p>
                    <p className="text-xs text-white/80 font-medium">Founder & Chairman</p>
                  </div>
                </div>

                <div className="absolute -right-10 -bottom-10 h-36 w-36 rounded-full bg-white/10 blur-xl pointer-events-none" />
              </motion.div>

              <div className="p-6 rounded-3xl border border-primary/20 bg-primary/5 dark:bg-primary/10">
                <h4 className="text-base font-bold text-foreground">
                  Commitment to National Prosperity
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Under Khalid Nawaz Awan's continuing guidance as Chairman, TCS maintains its role
                  as a key contributor to commerce, fostering trade corridors, e-commerce, and
                  logistics talent across South Asia and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. HISTORIC MILESTONES
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-muted/30 dark:bg-card/20 border-t border-border/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-2">
              <Milestone className="h-4 w-4" />
              Historic Milestones
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight">
              Four Decades of Logistics Leadership
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-linear-to-b from-primary via-primary/50 to-primary/10" />

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "1983",
                  title: "Founding of TCS",
                  description:
                    "Commenced operations with 25 initial shipments, establishing Pakistan's first organized private express courier service.",
                },
                {
                  year: "1989",
                  title: "Dedicated Air Cargo & UK Footprint",
                  description:
                    "Pioneered private chartered air freighter flights and expanded TCS operations to the United Kingdom.",
                },
                {
                  year: "1996–99",
                  title: "UAE & Canadian Expansion",
                  description:
                    "Established international logistics operations in the UAE (1996) and Canada (1999) to support the global Pakistani diaspora.",
                },
                {
                  year: "2002",
                  title: "Harvard Business School Case Study",
                  description:
                    "TCS's successful independent emergence and rapid growth documented as a case study by Harvard Business School.",
                },
                {
                  year: "2013",
                  title: "30-Year Vision & Youth Leadership",
                  description:
                    "Marked three decades of leadership by institutionalizing modern governance, core values, and next-generation executive leadership.",
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
                            {/* Chapter {idx + 1} */}
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
          5. DIRECT LINK TO SAIRA AWAN MALIK & ALL LEADERS
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
                Executive Leadership
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
            {/* Direct Card to Saira Awan Malik */}
            <div
              onClick={handleNavigateToSaira}
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

            {/* Direct Card to Hassan Raza Leghari */}
            <div
              onClick={handleNavigateToHassan}
              className="group cursor-pointer p-4 rounded-2xl bg-card border border-border/80 dark:border-white/10 hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center gap-4"
            >
              <div className="h-16 w-16 rounded-xl overflow-hidden bg-muted/40 shrink-0">
                <img
                  src="/leadership/HassanRazaLeghari.jpg"
                  alt="Hassan Raza Leghari"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-sm text-foreground uppercase tracking-wider truncate group-hover:text-primary transition-colors">
                  Hassan Raza Leghari
                </h3>
                <p className="text-xs text-muted-foreground truncate mt-0.5">
                  CEO TCS Private Limited
                </p>
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
