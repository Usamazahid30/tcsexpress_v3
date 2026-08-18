import { Facebook, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

import { Reveal } from "./reveal";
import { RippleButton } from "./ripple-button";

const columns = [
  {
    title: "Company",
    links: ["About Us", "Mission & Core Values", "Leadership", "Careers"],
  },
  {
    title: "Products & Services",
    links: ["Domestic", "International", "Express", "Logistics", "E-Com Solutions"],
  },
  {
    title: "Resources",
    links: ["Track Shipment", "Rate Calculator", "Locate a Branch", "Help Centre"],
  },
];

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: FaXTwitter, label: "X" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-footer-background text-foreground">
      {/* Main Footer */}
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.2fr_repeat(3,0.8fr)_1.1fr] lg:py-20">
        {/* Brand */}
        <Reveal>
          <div>
            <img src="/tcs.svg" alt="TCS" className="h-9 w-auto" />

            <p className="mt-5 max-w-xs text-sm leading-[1.7] text-muted-foreground">
              Pakistan's largest courier and logistics network, moving people and businesses forward
              since 1983.
            </p>
          </div>
        </Reveal>

        {/* Footer Columns */}
        {columns.map((column, i) => (
          <Reveal key={column.title} delay={0.08 * (i + 1)}>
            <div>
              <h3 className="text-primary text-sm font-bold tracking-[0.12em] uppercase">
                {column.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#contact"
                      className="link-underline text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}

        {/* Head Office + Newsletter */}
        <Reveal delay={0.32}>
          <div>
            <h3 className="text-primary text-sm font-semibold tracking-[0.12em] uppercase">
              Head Office
            </h3>

            <address className="mt-5 text-sm leading-[1.7] text-muted-foreground not-italic">
              101–104, Civil Aviation Club Road
              <br />
              Karachi 75202, Pakistan
            </address>

            {/* Newsletter */}
            <form
              onSubmit={(event) => event.preventDefault()}
              className="mt-6 flex items-center gap-2 rounded-full border border-border bg-background/60 p-1.5 transition-colors focus-within:border-primary"
            >
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>

              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted-foreground">
                <Mail className="h-4 w-4" />
              </span>

              <input
                id="newsletter"
                type="email"
                required
                placeholder="Signup for updates"
                className="h-9 w-full min-w-0 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />

              <RippleButton type="submit" size="sm" className="h-9 shrink-0 px-4">
                Join
              </RippleButton>
            </form>

            {/* Social Links */}
            <div className="mt-6 flex flex-wrap gap-2">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href="#contact"
                    aria-label={social.label}
                    className="press grid h-10 w-10 place-items-center rounded-full border border-border bg-background/50 text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-3 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© TCS {new Date().getFullYear()}. All rights reserved.</p>

          <div className="flex flex-wrap gap-6">
            {["Terms of Use", "Privacy Policy", "FAQs"].map((item) => (
              <a
                key={item}
                href="#contact"
                className="link-underline transition-colors hover:text-primary"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
