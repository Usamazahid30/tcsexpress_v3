export interface Leader {
  id: string;
  name: string;
  role: string;
  category: "board" | "executive";
  image: string;
  href: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export const boardLeaders: Leader[] = [
  {
    id: "khalid-nawaz-awan",
    name: "Khalid Nawaz Awan",
    role: "Founder and Chairman",
    category: "board",
    image: "/leadership/khalid-nawaz.jpg",
    href: "/founder",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:info@tcsexpress.com",
    },
  },
  {
    id: "saira-awan-malik",
    name: "Saira Awan Malik",
    role: "President",
    category: "board",
    image: "/leadership/saira_awan.jpg",
    href: "/saira-awan-malik",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:info@tcsexpress.com",
    },
  },
  {
    id: "qasim-awan",
    name: "Qasim Awan",
    role: "Executive Director",
    category: "board",
    image: "/leadership/qasim-awan.jpg",
    href: "/qasim-awan",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:info@tcsexpress.com",
    },
  },
  {
    id: "saadia-awan",
    name: "Saadia Awan",
    role: "Company Director",
    category: "board",
    image: "/leadership/saadia-awaan.jpg",
    href: "/saadia-awan",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:info@tcsexpress.com",
    },
  },
];

export const executiveLeaders: Leader[] = [
  {
    id: "hassan-raza-leghari",
    name: "Hassan Raza Leghari",
    role: "CEO TCS Private Limited",
    category: "executive",
    image: "/leadership/HassanRazaLeghari.jpg",
    href: "/HassanRaza",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:info@tcsexpress.com",
    },
  },
  {
    id: "anwaar-nizami",
    name: "Anwaar Nizami",
    role: "CEO TCS Logistics (Pvt) Limited",
    category: "executive",
    image: "/leadership/AnwaarNizami.jpg",
    href: "/anwaar-nizami",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:info@tcsexpress.com",
    },
  },
  {
    id: "abdul-qadir-aziz",
    name: "Abdul Qadir Aziz",
    role: "CEO Intiana Private Limited",
    category: "executive",
    image: "/leadership/abdul-qadir-aziz.jpg",
    href: "/abdul-qadir-aziz",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:info@tcsexpress.com",
    },
  },
];

export const allLeaders: Leader[] = [...boardLeaders, ...executiveLeaders];
