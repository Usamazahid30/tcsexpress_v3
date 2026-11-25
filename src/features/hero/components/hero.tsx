import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Calculator, Loader2, MapPin, Package, Truck, User } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation(["site", "common"]);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const placeholders = [
    t("site:track_bar.placeholder_1", "Enter your tracking number"),
    t("site:track_bar.placeholder_2", "e.g. 123456789"),
    t("site:track_bar.placeholder_3", "Track a domestic shipment"),
    t("site:track_bar.placeholder_4", "Track an international parcel"),
  ];

  const actions = [
    { icon: Package, label: t("site:track_bar.action_kardo", "TCS Kardo") },
    { icon: Truck, label: t("site:track_bar.action_pickup", "Schedule a Pickup") },
    { icon: Calculator, label: t("site:track_bar.action_rate", "Rate Calculator") },
    { icon: MapPin, label: t("site:track_bar.action_locator", "TCS Locator") },
    { icon: User, label: t("site:track_bar.action_account", "Open an Account"), route: "/ecom" },
  ];

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % placeholders.length), 3200);
    return () => window.clearInterval(id);
  }, [placeholders.length]);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    setLoading(true);
    window.setTimeout(() => setLoading(false), 1600);
  };

  return (
    <section
      id="top"
      aria-label="TCS Home Hero"
      className="relative min-h-[620px] sm:min-h-[700px] lg:min-h-[780px] xl:min-h-[820px] w-full overflow-hidden bg-[#0A0D14]"
      // className="relative min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] xl:min-h-[640px] w-full overflow-hidden bg-[#0A0D14]"
    >
      {/* Background Images for Light and Dark Modes */}
      <img
        src="/hero/hero-banner-dark.jpg"
        alt="TCS Service Fleet at Dusk"
        className="absolute inset-0 h-full w-full object-cover object-[center_right] hidden dark:block transition-opacity duration-700"
        loading="eager"
      />
      <img
        src="/hero/hero-banner-light.jpg"
        alt="TCS Service Fleet in Daylight"
        className="absolute inset-0 h-full w-full object-cover object-[center_right] block dark:hidden transition-opacity duration-700"
        loading="eager"
      />

      {/* Layered Gradient Overlays for High Contrast & Legibility */}
      {/* Top Gradient Overlay (for header and controls contrast) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-black/80 via-black/45 to-transparent dark:from-black/90 dark:via-black/50"
      />

      {/* Left Gradient Overlay (for headline typography contrast) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent md:w-3/5"
      />

      {/* Bottom Gradient Fade (smooth transition to page body) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent"
      />

      {/* Foreground Content */}
      <div
        className="container-page relative z-10 flex min-h-[620px] sm:min-h-[700px] lg:min-h-[780px] xl:min-h-[820px] flex-col pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-24 lg:pb-28"
        // className="container-page relative z-10 flex min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] xl:min-h-[640px] flex-col pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20"
      >
        {/* TOP ROW: Tracking Bar & Quick Action Shortcuts */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          {/* Tracking Search Input Box */}
          <div className="w-full max-w-xl">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-white/90 drop-shadow-sm">
              {t("site:track_bar.title", "Track Your Shipment")}
            </p>

            <form
              onSubmit={handleTrackSubmit}
              className="mt-2.5 flex items-center justify-between rounded-full border border-white/20 bg-black/40 dark:bg-black/50 p-1.5 shadow-xl backdrop-blur-md transition-all focus-within:border-white/40 focus-within:bg-black/55"
            >
              <div className="flex min-w-0 flex-1 items-center gap-2.5 pl-3 pr-2">
                <Package className="h-4.5 w-4.5 shrink-0 text-primary drop-shadow-sm" aria-hidden />
                <label htmlFor="hero-tracking" className="sr-only">
                  {t("site:track_bar.placeholder_1", "Enter your tracking number")}
                </label>
                <input
                  id="hero-tracking"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder={placeholders[index % placeholders.length]}
                  className="h-9 w-full min-w-0 bg-transparent text-sm sm:text-base text-white placeholder:text-zinc-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="press inline-flex h-10 shrink-0 cursor-pointer items-center gap-2 rounded-full bg-primary px-5 text-xs sm:text-sm font-semibold text-white shadow-md transition-colors hover:bg-primary-hover disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>{t("common:actions.tracking", "Tracking...")}</span>
                  </>
                ) : (
                  <>
                    <span>{t("common:actions.track", "Track Shipment")}</span>
                    <ArrowRight className="h-3.5 w-3.5 rtl-flip" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Quick Action Shortcut Cards */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-2.5">
            {actions.map((action, i) => (
              <motion.button
                key={action.label}
                onClick={() => {
                  if (action.route) {
                    window.location.href = action.route;
                  }
                }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="group flex flex-col items-center justify-center gap-1.5 h-20 sm:h-22 min-w-20 sm:min-w-24 rounded-2xl border border-white/15 bg-black/35 hover:bg-black/50 dark:bg-white/10 dark:hover:bg-white/15 px-2.5 py-2 text-center shadow-lg backdrop-blur-md transition-all hover:border-white/30 cursor-pointer"
              >
                <action.icon className="h-5 w-5 text-white/90 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm" />
                <span className="text-[11px] sm:text-[11.5px] font-medium leading-tight text-white/90 group-hover:text-white">
                  {action.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* LOWER CONTENT: Bold Headline & Tagline */}
        <div className="mt-12 sm:mt-16 lg:mt-24 max-w-xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-md">
              {t("site:hero.title_part1", "Service that ")}
              <span className="text-primary">{t("site:hero.title_highlight", "moves")}</span>
              <br />
              {t("site:hero.title_part2", "Pakistan forward")}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mt-4 text-base sm:text-lg text-white/85 drop-shadow-sm max-w-lg">
              {t("site:hero.subtitle", "Explore the wide range of services offered by TCS")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
