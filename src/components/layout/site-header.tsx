import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Globe, Menu, Search, User, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { RippleButton } from "@/components/common";

export function SiteHeader() {
  const { t, i18n } = useTranslation(["site", "common"]);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const currentLang = i18n.language || "en";

  const links = [
    { label: t("site:nav.home"), href: "#top" },
    { label: t("site:nav.about"), href: "#about" },
    { label: t("site:nav.services"), href: "#services" },
    { label: t("site:nav.contact"), href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border shadow-(--shadow-soft) " : "bg-surface"
      }`}
    >
      <div
        className={`container-page flex items-center justify-between gap-4 transition-all duration-500  ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="TCS home">
          <img
            src="/tcs.svg"
            alt="TCS — We Move You"
            className={`w-auto transition-all duration-500 ${scrolled ? "h-7" : "h-9"}`}
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <button
            aria-label={t("common:actions.search")}
            className="press grid h-10 w-10 place-items-center rounded-full text-muted-foreground hover:text-primary"
          >
            <Search className="h-4.5 w-4.5" />
          </button>
          <a
            href="#login"
            className="press inline-flex h-10 items-center gap-2 rounded-full px-3 text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <User className="h-4.5 w-4.5" /> {t("common:actions.login")}
          </a>
          <RippleButton size="sm">{t("common:actions.my_tcs")}</RippleButton>

          {/* Pakistan Country Badge */}
          <button
            aria-label={t("common:brand.country")}
            className="press inline-flex h-10 items-center gap-2 rounded-full border border-border px-3 text-sm font-medium text-foreground/80"
          >
            <Globe className="h-4 w-4" /> {t("common:brand.country")}
          </button>

          {/* Language Switcher Pill alongside Country Badge */}
          <div className="flex items-center rounded-full border border-border bg-card p-1 text-xs font-semibold shadow-xs">
            <button
              onClick={() => changeLanguage("en")}
              className={`rounded-full px-2.5 py-1 transition-all ${
                currentLang === "en"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("common:languages.en")}
            </button>
            <button
              onClick={() => changeLanguage("ur")}
              className={`rounded-full px-2.5 py-1 transition-all ${
                currentLang === "ur"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("common:languages.ur")}
            </button>
          </div>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="press grid h-11 w-11 place-items-center rounded-full border border-border lg:hidden"
        >
          <motion.span animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.3 }}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="rounded-2xl px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Mobile Language & Action Row */}
              <div className="mt-4 flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Globe className="h-4 w-4 text-primary" /> {t("common:brand.country")}
                  </div>

                  <div className="flex items-center rounded-full border border-border bg-muted p-1 text-xs font-semibold">
                    <button
                      onClick={() => changeLanguage("en")}
                      className={`rounded-full px-3 py-1 transition-all ${
                        currentLang === "en"
                          ? "bg-primary text-primary-foreground shadow-xs"
                          : "text-muted-foreground"
                      }`}
                    >
                      {t("common:languages.en")}
                    </button>
                    <button
                      onClick={() => changeLanguage("ur")}
                      className={`rounded-full px-3 py-1 transition-all ${
                        currentLang === "ur"
                          ? "bg-primary text-primary-foreground shadow-xs"
                          : "text-muted-foreground"
                      }`}
                    >
                      {t("common:languages.ur")}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <RippleButton size="sm" className="flex-1">
                    {t("common:actions.my_tcs")}
                  </RippleButton>
                  <RippleButton size="sm" variant="outline" className="flex-1">
                    {t("common:actions.login")}
                  </RippleButton>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
