export const SITE_CONFIG = {
  name: "TCS Express",
  description: "We Move You — Pakistan's Leading Express, Courier & Logistics Provider",
  logo: "/tcs.svg",
  navLinks: [
    { labelKey: "site:nav.home", href: "#top" },
    { labelKey: "site:nav.about", href: "#about" },
    { labelKey: "site:nav.services", href: "#services" },
    { labelKey: "site:nav.contact", href: "#contact" },
  ],
  socials: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "X", href: "https://x.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
} as const;
