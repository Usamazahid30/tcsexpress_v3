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
  GraduationCap,
  BookOpen,
  Scale,
} from "lucide-react";
import { useCuratedPageTransition } from "@/components/common";

export function SairaPage() {
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

  const handleNavigateToFounder = () => {
    navigateWithTransition("/founder", {
      title: "KHALID NAWAZ AWAN",
      subtitle: "Founder and Chairman",
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
              <div className="relative overflow-hidden rounded-[2rem] sm:rounded-tl-[2.25rem] sm:rounded-bl-[2.25rem] sm:rounded-tr-[5rem] sm:rounded-br-[2.25rem] bg-linear-to-br from-[#73081e] via-[#65071a] to-[#4c0513] dark:from-[#590617] dark:via-[#470512] dark:to-[#33030d] p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_-12px_rgba(115,8,30,0.45)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10">
                {/* Top Badge + Neon Squiggle */}
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#dfff00] text-black font-extrabold text-xs uppercase tracking-wider shadow-sm">
                    President & Strategic Leader
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
                  Transforming Enterprise Scale & Inclusive Growth
                </h1>

                {/* Sub-headline */}
                <p className="mt-3 text-base sm:text-lg font-medium text-amber-200/90 leading-snug">
                  Uniting global corporate law, executive governance, and future-ready logistics.
                </p>

                {/* Editorial Subtitle */}
                <p className="mt-5 text-sm sm:text-base font-normal italic text-white/85 leading-relaxed max-w-xl">
                  "President of TCS Group. Formerly a corporate lawyer at Cleary Gottlieb Steen &
                  Hamilton LLP in London, specializing in cross-border M&A, restructuring, and
                  capital market issuances. An alumna of Yale, Cambridge, Lincoln's Inn, and
                  recipient of the Global Executive MBA with distinction from Columbia & London
                  Business Schools."
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
                    src="/leadership/saira_awan.jpg"
                    alt="Saira Awan Malik"
                    className="w-full h-auto object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-700 hover:scale-102"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-5 text-white">
                    {/* <span className="text-xs font-bold uppercase tracking-widest text-[#dfff00]">
                      TCS Group
                    </span> */}
                    <span className="text-lg font-black tracking-wide text-[#dfff00]">
                      Saira Awan Malik
                    </span>
                    <span className="text-xs text-white/80">President</span>
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
                value: "EMBA",
                label: "Columbia & LBS",
                sublabel: "Global Executive MBA awarded with distinction (2023)",
              },
              {
                value: "6+ Yrs",
                label: "Cleary Gottlieb London",
                sublabel: "International cross-border M&A, restructurings & finance",
              },
              {
                value: "Yale & Cantab",
                label: "World-Class Alma Mater",
                sublabel: "Yale University (BA History) & Cambridge University (Law)",
              },
              {
                value: "Lincoln's Inn",
                label: "Barrister-at-Law",
                sublabel: "Called to the Bar of England and Wales (2007)",
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
                Executive Profile & Background
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground tracking-tight">
                Leading TCS Group With Global Legal & Strategic Rigour
              </h2>

              <div className="space-y-5 text-sm sm:text-base text-muted-foreground leading-relaxed text-justify sm:text-left">
                <p>
                  Saira Awan Malik is the President of the TCS Group. After training as a corporate
                  lawyer, Saira worked for six years at the London office of international law firm
                  Cleary Gottlieb Steen & Hamilton LLP, focusing on corporate and financial
                  transactions, including cross-border mergers & acquisitions, restructurings and
                  capital market issuances.
                </p>
                <p>
                  Saira received an undergraduate degree in History from Yale University in May
                  1999. She read Law at the University of Cambridge (2001-3) and subsequently
                  completed the Bar Vocational Course at the Inns of Court School of Law in London.
                  She was called to the Bar of England and Wales at Lincoln’s Inn in October 2007.
                  In 2023, Saira completed, with distinction, the Global Executive MBA at Columbia
                  Business School and London Business School.
                </p>
                <p>
                  Saira served on the board of the British Pakistan Foundation (BPF) from 2012-23,
                  where she spearheaded the launch of the BPF Women’s Network. Saira is on the Board
                  of the Pakistan Business Council and the Marketing Association of Pakistan. She is
                  the first woman partner in the Champions of Change Coalition Pakistan and a member
                  of the Young Presidents’ Organization Pakistan Chapter. Most recently, Saira
                  joined the Board of Pakistan Cables Limited.
                </p>
              </div>

              {/* Board Directorships */}
              <div className="pt-6 border-t border-border">
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Board Directorships & Governance Roles
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Board of Directors, Pakistan Cables Limited",
                    "Board of Directors, Pakistan Business Council (PBC)",
                    "Board Member, Marketing Association of Pakistan (MAP)",
                    "First Woman Partner, Champions of Change Coalition Pakistan",
                    "Member, Young Presidents’ Organization (YPO) Pakistan Chapter",
                    "Former Board Member, British Pakistan Foundation (Founder of BPF Women's Network)",
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
                  "Building enduring institutions requires an uncompromising dedication to
                  governance, human dignity, and strategic clarity. When women lead at the highest
                  corporate tables, organizations innovate faster and economies grow stronger."
                </blockquote>

                <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between">
                  <div>
                    <p className="font-extrabold text-base tracking-wide text-white">
                      Saira Awan Malik
                    </p>
                    <p className="text-xs text-white/80 font-medium">President, TCS Group</p>
                  </div>
                </div>

                <div className="absolute -right-10 -bottom-10 h-36 w-36 rounded-full bg-white/10 blur-xl pointer-events-none" />
              </motion.div>

              <div className="p-6 rounded-3xl border border-primary/20 bg-primary/5 dark:bg-primary/10">
                <h4 className="text-base font-bold text-foreground">
                  Advocacy for Diversity & Women in Leadership
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  As the first woman partner in the Champions of Change Coalition Pakistan and
                  founder of the BPF Women’s Network, Saira actively fosters female leadership in
                  corporate executive boards and entrepreneurship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. ACADEMIC CREDENTIALS TIMELINE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-muted/30 dark:bg-card/20 border-t border-border/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-2">
              <GraduationCap className="h-4 w-4" />
              Academic Foundations
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight">
              World-Class Education & Legal Credentials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                institution: "Columbia Business School & London Business School",
                degree: "Global Executive MBA (With Distinction)",
                period: "2023",
                detail:
                  "Dual-degree executive leadership program focusing on international strategy, corporate finance, and enterprise innovation.",
              },
              {
                institution: "Lincoln’s Inn / Inns of Court School of Law, London",
                degree: "Barrister-at-Law (Called to the Bar of England & Wales)",
                period: "2007",
                detail:
                  "Completed Bar Vocational Course and called to the Bar of England and Wales.",
              },
              {
                institution: "University of Cambridge",
                degree: "Law (BA / MA Cantab)",
                period: "2001 – 2003",
                detail:
                  "Rigorous legal education specializing in corporate, commercial, and contract law.",
              },
              {
                institution: "Yale University",
                degree: "Bachelor of Arts in History",
                period: "Class of 1999",
                detail:
                  "Undergraduate education focusing on historical analysis, institutional development, and international affairs.",
              },
            ].map((edu, idx) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-card border border-border/80 dark:border-white/10 shadow-sm hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                      <BookOpen className="h-3.5 w-3.5" />
                      {edu.period}
                    </span>
                    {edu.degree.includes("Distinction") && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-500 bg-amber-500/10 px-2.5 py-0.5 rounded-md">
                        <Award className="h-3 w-3" />
                        Distinction
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-foreground">{edu.degree}</h3>

                  <p className="text-sm font-semibold text-primary mt-1">{edu.institution}</p>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-3">
                    {edu.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. DIRECT LINK TO FOUNDER & ALL LEADERS
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
            {/* Direct Card to Khalid Nawaz Awan */}
            <div
              onClick={handleNavigateToFounder}
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
