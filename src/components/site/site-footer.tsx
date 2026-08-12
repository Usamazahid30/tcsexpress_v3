import { Facebook, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import { Reveal } from "./reveal";
import { FaXTwitter } from "react-icons/fa6";

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
    <footer id="contact" className="bg-charcoal text-primary-foreground">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.2fr_repeat(3,0.8fr)_1.1fr] lg:py-20">
        <Reveal>
          <img src="/tcs.svg" alt="TCS" className="h-9 w-auto " />
          {/* for change color logo */}
          {/* brightness-0 invert */}
          <p className="mt-5 max-w-xs text-sm leading-[1.7] text-primary-foreground/65">
            Pakistan's largest courier and logistics network, moving people and businesses forward
            since 1983.
          </p>
        </Reveal>

        {columns.map((column, i) => (
          <Reveal key={column.title} delay={0.08 * (i + 1)}>
            <h3 className="text-primary  text-sm font-bold tracking-[0.12em] uppercase">
              {column.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#contact"
                    className="link-underline text-sm text-primary-foreground/65 transition-colors hover:text-primary-foreground"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}

        <Reveal delay={0.32}>
          <h3 className="text-primary text-sm font-semibold tracking-[0.12em] uppercase">
            Head office
          </h3>
          <address className="mt-5 text-sm leading-[1.7] text-primary-foreground/65 not-italic">
            101–104, Civil Aviation Club Road
            <br />
            Karachi 75202, Pakistan
          </address>
          <form
            onSubmit={(event) => event.preventDefault()}
            className="mt-6 flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 transition-colors focus-within:border-primary"
          >
            <label htmlFor="newsletter" className="sr-only">
              Email address
            </label>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-primary-foreground/60">
              <Mail className="h-4 w-4" />
            </span>
            <input
              id="newsletter"
              type="email"
              required
              placeholder="Signup for updates"
              className="h-9 w-full min-w-0 bg-transparent text-sm text-primary-foreground placeholder:text-primary-foreground/45 focus:outline-none"
            />
            <RippleButton type="submit" size="sm" className="h-9 shrink-0 px-4">
              Join
            </RippleButton>
          </form>
          <div className="mt-6 flex flex-wrap gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#contact"
                aria-label={social.label}
                className="press grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/5 text-primary-foreground/75 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-sm text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© TCS {new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            {["Terms of Use", "Privacy Policy", "FAQs"].map((item) => (
              <a
                key={item}
                href="#contact"
                className="link-underline transition-colors hover:text-primary-foreground"
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
