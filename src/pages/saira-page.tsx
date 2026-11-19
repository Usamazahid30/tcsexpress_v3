import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Users } from "lucide-react";
import { useCuratedPageTransition } from "@/components/common";

interface ExecutiveLeader {
  id: string;
  name: string;
  role: string;
  route: string;
  transitionTitle: string;
  image: string;
}

const OTHER_LEADERS: ExecutiveLeader[] = [
  {
    id: "khalid-nawaz",
    name: "Khalid Nawaz Awan",
    role: "Founder and Chairman",
    route: "/founder",
    transitionTitle: "KHALID NAWAZ AWAN",
    image: "/leadership/khalid-nawaz.jpg",
  },
  {
    id: "hassan-raza",
    name: "Hassan Raza Leghari",
    role: "CEO TCS Private Limited",
    route: "/hassan-raza",
    transitionTitle: "HASSAN RAZA LEGHARI",
    image: "/leadership/HassanRazaLeghari.jpg",
  },
];

const BIO_PARAGRAPHS = [
  "Saira Awan Malik is the President of the TCS Group. After training as a corporate lawyer, Saira worked for six years at the London office of international law firm Cleary Gottlieb Steen & Hamilton LLP, focusing on corporate and financial transactions, including cross-border mergers & acquisitions, restructurings and capital market issuances.",
  "Saira received an undergraduate degree in History from Yale University in May 1999. She read Law at the University of Cambridge (2001–03) and subsequently completed the Bar Vocational Course at the Inns of Court School of Law in London. She was called to the Bar of England and Wales at Lincoln’s Inn in October 2007. In 2023, Saira completed, with distinction, the Global Executive MBA at Columbia Business School and London Business School.",
  "Saira served on the board of the British Pakistan Foundation (BPF) from 2012–23, where she spearheaded the launch of the BPF Women’s Network. Saira is on the Board of the Pakistan Business Council and the Marketing Association of Pakistan. She is the first woman partner in the Champions of Change Coalition Pakistan and a member of the Young Presidents’ Organization Pakistan Chapter. Most recently, Saira joined the Board of Pakistan Cables Limited.",
];

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

  const handleNavigateToLeader = (leader: ExecutiveLeader) => {
    navigateWithTransition(leader.route, {
      title: leader.transitionTitle,
      subtitle: leader.role,
      type: "doors",
    });
  };

  return (
    <article className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <section className="relative overflow-hidden bg-[#fdf9f3] dark:bg-[#0c0d12] transition-colors duration-300">
        <div
          aria-hidden="true"
          className="absolute top-0 right-1/4 -z-10 h-125 w-125 rounded-full bg-primary/5 blur-[120px] dark:bg-primary/10 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-10 -z-10 h-72 w-72 rounded-full bg-amber-500/5 blur-[90px] dark:bg-amber-500/10 pointer-events-none"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-16 sm:pb-24">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 sm:mb-8"
          >
            <button
              type="button"
              onClick={handleBackToLeadership}
              className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 text-primary" />
              <span>Back to Leadership</span>
            </button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Bio Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="order-2 lg:order-1 lg:col-span-7 relative min-w-0"
            >
              <div className="relative overflow-hidden rounded-[2rem] sm:rounded-tl-[2.25rem] sm:rounded-bl-[2.25rem] sm:rounded-tr-[5rem] sm:rounded-br-[2.25rem] bg-[#65071a] bg-linear-to-br from-[#73081e] via-[#65071a] to-[#4c0513] dark:from-[#590617] dark:via-[#470512] dark:to-[#33030d] p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_-12px_rgba(115,8,30,0.45)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10">
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#dfff00] text-black font-extrabold text-xs uppercase tracking-wider shadow-sm">
                    President
                  </span>

                  <svg
                    aria-hidden="true"
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

                <h1 className="mt-5 text-2xl sm:text-3xl font-black tracking-tight text-white">
                  Saira Awan Malik
                </h1>

                <div className="mt-4 space-y-5 max-w-xl">
                  {BIO_PARAGRAPHS.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-sm sm:text-base font-normal text-white/90 leading-relaxed text-justify"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Portrait Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8 flex flex-col items-center justify-start relative min-w-0 mt-6 sm:mt-8 lg:mt-10"
            >
              <div className="relative w-full max-w-sm mx-auto">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-linear-to-tr from-primary/10 via-amber-500/10 to-transparent blur-2xl dark:from-primary/20 dark:via-amber-500/15"
                />
                <div className="relative overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-card/40 backdrop-blur-sm shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
                  <img
                    src="/leadership/saira_awan.jpg"
                    alt="Saira Awan Malik, President of the TCS Group"
                    className="w-full aspect-4/5 object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-700 hover:scale-[1.02]"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/75 via-black/35 to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="text-lg font-black tracking-wide text-[#dfff00]">
                      Saira Awan Malik
                    </span>
                    <span className="text-xs text-white/85">President</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Executive Leadership Navigation */}
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
              type="button"
              onClick={handleBackToLeadership}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-primary hover:text-primary-hover transition-colors cursor-pointer"
            >
              <span>View All Leaders</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OTHER_LEADERS.map((leader) => (
              <button
                key={leader.id}
                type="button"
                onClick={() => handleNavigateToLeader(leader)}
                className="group text-left cursor-pointer p-4 rounded-2xl bg-card border border-border/80 dark:border-white/10 hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center gap-4"
              >
                <div className="h-16 w-16 rounded-xl overflow-hidden bg-muted/40 shrink-0">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-sm text-foreground uppercase tracking-wider truncate group-hover:text-primary transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-xs text-muted-foreground truncate mt-0.5">{leader.role}</p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary mt-2">
                    View Profile <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
