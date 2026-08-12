import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Globe, Menu, Search, User, X } from "lucide-react";
import { RippleButton } from "./ripple-button";

const links = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
              key={link.label}
              href={link.href}
              className="link-underline text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            aria-label="Search"
            className="press grid h-10 w-10 place-items-center rounded-full text-muted-foreground hover:text-primary"
          >
            <Search className="h-4.5 w-4.5" />
          </button>
          <a
            href="#login"
            className="press inline-flex h-10 items-center gap-2 rounded-full px-3 text-sm font-medium text-muted-foreground hover:text-primary"
          >
            <User className="h-4.5 w-4.5" /> Login
          </a>
          <RippleButton size="sm">My TCS</RippleButton>
          <button
            aria-label="Select country"
            className="press inline-flex h-10 items-center gap-2 rounded-full border border-border px-3 text-sm font-medium text-foreground/80"
          >
            <Globe className="h-4 w-4" /> Pakistan
          </button>
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
                  key={link.label}
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
              <div className="mt-4 flex items-center gap-3">
                <RippleButton size="sm" className="flex-1">
                  My TCS
                </RippleButton>
                <RippleButton size="sm" variant="outline" className="flex-1">
                  Login
                </RippleButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
