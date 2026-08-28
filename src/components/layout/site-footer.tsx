import { Facebook, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { Reveal, RippleButton } from "@/components/common";

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: FaXTwitter, label: "X" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
];

export function SiteFooter() {
  const { t } = useTranslation(["site", "common"]);

  const columns = [
    {
      title: t("site:footer.company"),
      links: [
        { label: t("site:footer.about_us"), href: "#about" },
        { label: t("site:footer.mission"), href: "#about" },
        { label: t("site:footer.leadership"), href: "#about" },
        { label: t("site:footer.careers"), href: "#about" },
      ],
    },
    {
      title: t("site:footer.products_services"),
      links: [
        { label: t("site:footer.domestic"), href: "#services" },
        { label: t("site:footer.international_svc"), href: "#services" },
        { label: t("site:footer.express"), href: "#services" },
        { label: t("site:footer.logistics_svc"), href: "#services" },
        { label: t("site:footer.ecom_svc"), href: "#services" },
      ],
    },
    {
      title: t("site:footer.resources"),
      links: [
        { label: t("site:footer.track_shipment"), href: "#top" },
        { label: t("site:footer.rate_calc"), href: "#top" },
        { label: t("site:footer.locate_branch"), href: "#top" },
        { label: t("site:footer.help_centre"), href: "#contact" },
      ],
    },
  ];

  return (
    <footer id="contact" className="bg-footer-background text-foreground">
      {/* Main Footer */}
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.2fr_repeat(3,0.8fr)_1.1fr] lg:py-20">
        {/* Brand */}
        <Reveal>
          <div>
            <img src="/tcs.svg" alt="TCS" className="h-9 w-auto" />

            <p className="mt-5 max-w-xs text-sm leading-[1.7] text-muted-foreground">
              {t("site:footer.description")}
            </p>
          </div>
        </Reveal>

        {/* Footer Columns */}
        {columns.map((column) => (
          <Reveal key={column.title}>
            <div>
              <h3 className="text-primary text-sm font-bold tracking-[0.12em] uppercase">
                {column.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="link-underline text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
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
              {t("site:footer.head_office")}
            </h3>

            <address className="mt-5 text-sm leading-[1.7] text-muted-foreground not-italic">
              {t("site:footer.address_line1")}
              <br />
              {t("site:footer.address_line2")}
            </address>

            {/* Newsletter */}
            <form
              onSubmit={(event) => event.preventDefault()}
              className="mt-6 flex items-center gap-2 rounded-full border border-border bg-background/60 p-1.5 transition-colors focus-within:border-primary"
            >
              <label htmlFor="newsletter" className="sr-only">
                {t("site:footer.newsletter_placeholder")}
              </label>

              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted-foreground">
                <Mail className="h-4 w-4" />
              </span>

              <input
                id="newsletter"
                type="email"
                required
                placeholder={t("site:footer.newsletter_placeholder")}
                className="h-9 w-full min-w-0 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />

              <RippleButton type="submit" size="sm" className="h-9 shrink-0 px-4">
                {t("common:actions.join")}
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
          <p>{t("site:footer.copyright", { year: new Date().getFullYear() })}</p>

          <div className="flex flex-wrap gap-6">
            {[
              { label: t("site:footer.terms"), href: "#contact" },
              { label: t("site:footer.privacy"), href: "#contact" },
              { label: t("site:footer.faqs"), href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="link-underline transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
