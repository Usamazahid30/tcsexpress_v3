import { JobPosting, ValuePillar } from "../types/careers";

export const VALUE_PILLARS: ValuePillar[] = [
  { id: "purpose", label: "Purpose with Impact", iconKey: "purpose" },
  { id: "growth", label: "Growth & Development", iconKey: "growth" },
  { id: "culture", label: "Inclusive Work Culture", iconKey: "culture" },
  { id: "health", label: "Health & Wellness Benefits", iconKey: "health" },
  { id: "rewards", label: "Rewards & Recognition", iconKey: "rewards" },
];

export const SAMPLE_JOBS: JobPosting[] = [
  {
    id: "project-engineer-admin",
    title: "Project Engineer",
    subtitle: "Administration & Projects",
    department: "Administration & Projects",
    jobType: "Full-time",
    location: "Karachi, Pakistan",
    deadline: "15 Dec 2025",
    iconKey: "code",
    overview:
      "We are looking for a Project Engineer to support the planning, execution and monitoring of infrastructure and facility projects across TCS.",
    responsibilities: [
      "Plan, coordinate and execute assigned projects from initiation to closure.",
      "Monitor project progress, budgets and quality standards.",
      "Work with internal teams, vendors and contractors for timely delivery.",
    ],
    requirements: [
      "Bachelor's degree in Engineering (Civil / Mechanical / Electrical or related field).",
      "1–3 years of relevant project or facilities management experience.",
      "Strong planning and problem-solving skills.",
    ],
  },
  {
    id: "software-engineer-web",
    title: "Software Engineer",
    subtitle: "Web",
    department: "Information Technology",
    jobType: "Full-time",
    location: "Karachi, Pakistan",
    deadline: "22 Dec 2025",
    iconKey: "monitor",
    overview:
      "Join our digital engineering team to build responsive, high-availability web applications and customer-facing logistics platforms across Pakistan.",
    responsibilities: [
      "Architect and deliver accessible, performant web interfaces and service integrations.",
      "Collaborate with product designers, backend engineers, and QA on release milestones.",
      "Maintain clean TypeScript codebases, automated checks, and production telemetry.",
    ],
    requirements: [
      "Bachelor's degree in Computer Science or Software Engineering.",
      "2+ years of experience building modern web applications with React and TypeScript.",
      "Strong debugging discipline and familiarity with REST APIs.",
    ],
  },
  {
    id: "courier-operations",
    title: "Courier",
    department: "Express Operations",
    jobType: "Full-time",
    location: "Lahore, Pakistan",
    deadline: "18 Dec 2025",
    iconKey: "package",
    overview:
      "Be the front line of TCS reliability by ensuring safe, timely pickup and delivery of shipments across assigned urban routes.",
    responsibilities: [
      "Execute daily pickup and doorstep delivery routes accurately and on schedule.",
      "Verify shipment condition, capture delivery confirmation, and collect COD accurately.",
      "Represent TCS professionally with courteous customer interaction.",
    ],
    requirements: [
      "Matriculation or Intermediate education with clean record.",
      "Valid driving/riding license and familiarity with local city routes.",
      "Punctuality, accountability, and customer-first attitude.",
    ],
  },
  {
    id: "key-account-manager-it",
    title: "Key Account Manager",
    subtitle: "IT Infrastructure",
    department: "Commercial & Enterprise",
    jobType: "Full-time",
    location: "Islamabad, Pakistan",
    deadline: "28 Dec 2025",
    iconKey: "user",
    overview:
      "Drive strategic enterprise relationships and expand technology-enabled logistics and infrastructure solutions for key corporate accounts.",
    responsibilities: [
      "Manage long-term relationships and retention across assigned enterprise clients.",
      "Identify growth opportunities and scope tailored operational solutions.",
      "Coordinate account onboarding, SLA reviews, and cross-functional escalations.",
    ],
    requirements: [
      "Bachelor's or Master's degree in Business, IT, or a related discipline.",
      "3+ years of B2B account management or enterprise solutions experience.",
      "Strong negotiation, stakeholder management, and reporting skills.",
    ],
  },
  {
    id: "key-account-manager-sales",
    title: "Key Account Manager",
    subtitle: "Sales",
    department: "Commercial & Enterprise",
    jobType: "Full-time",
    location: "Karachi, Pakistan",
    deadline: "30 Dec 2025",
    iconKey: "user",
    overview:
      "Acquire high-value commercial accounts and grow recurring shipment volume across retail, e-commerce, and corporate sectors.",
    responsibilities: [
      "Prospect, pitch, and close new commercial contracts against quarterly revenue targets.",
      "Prepare commercial proposals, volume projections, and service-level agreements.",
      "Partner with hub and billing teams to ensure smooth new-client activation.",
    ],
    requirements: [
      "Bachelor's degree in Marketing, Business Administration, or Commerce.",
      "2–4 years of B2B sales or key account acquisition experience.",
      "Proven track record meeting quota and presenting to decision-makers.",
    ],
  },
  {
    id: "network-engineer-it",
    title: "Network Engineer",
    subtitle: "Information Technology",
    department: "Information Technology",
    jobType: "Full-time",
    location: "Karachi, Pakistan",
    deadline: "20 Dec 2025",
    iconKey: "network",
    overview:
      "Maintain resilient enterprise network connectivity across corporate offices, sorting hubs, and regional branches.",
    responsibilities: [
      "Configure, monitor, and troubleshoot routing, switching, VPN, and firewall infrastructure.",
      "Respond to network incidents and minimize downtime across critical operational hubs.",
      "Document network topologies, maintenance windows, and security hardening.",
    ],
    requirements: [
      "Bachelor's degree in Computer Science, Telecom, or Electrical Engineering.",
      "2+ years of hands-on enterprise networking experience (CCNA/equivalent preferred).",
      "Solid understanding of TCP/IP, VLANs, routing protocols, and diagnostics.",
    ],
  },
  {
    id: "procurement-manager",
    title: "Procurement Manager",
    department: "Supply Chain & Procurement",
    jobType: "Full-time",
    location: "Karachi, Pakistan",
    deadline: "24 Dec 2025",
    iconKey: "layers",
    overview:
      "Lead strategic sourcing, vendor evaluation, and cost-effective procurement of operational supplies, equipment, and services.",
    responsibilities: [
      "Run competitive RFQs/RFPs, negotiate contract terms, and onboard reliable vendors.",
      "Ensure timely availability of packaging, fleet, and office supplies while controlling spend.",
      "Audit vendor compliance, lead times, and purchase order accuracy.",
    ],
    requirements: [
      "Bachelor's degree in Supply Chain, Business, or Finance.",
      "4+ years of end-to-end procurement and vendor management experience.",
      "Strong analytical, contract negotiation, and ERP/purchasing workflow skills.",
    ],
  },
  {
    id: "drivers-long-haul",
    title: "Drivers",
    subtitle: "Long Haul Vehicles",
    department: "Fleet & Linehaul",
    jobType: "Full-time",
    location: "Multan, Pakistan",
    deadline: "19 Dec 2025",
    iconKey: "truck",
    overview:
      "Operate heavy and commercial linehaul vehicles safely along intercity corridors to keep national hub transfers moving on schedule.",
    responsibilities: [
      "Conduct pre-trip and post-trip safety and vehicle readiness inspections.",
      "Transport linehaul consignments safely between regional hubs following traffic rules.",
      "Log trip milestones, fuel/route updates, and any en-route issues promptly.",
    ],
    requirements: [
      "Valid LTV/HTV commercial driving license with clean safety record.",
      "3+ years of intercity or long-haul commercial driving experience.",
      "Familiarity with highway safety practices and basic vehicle care.",
    ],
  },
  {
    id: "courier-gift-delivery",
    title: "Courier",
    subtitle: "Gift Delivery Service",
    department: "Express Operations",
    jobType: "Full-time",
    location: "Faisalabad, Pakistan",
    deadline: "26 Dec 2025",
    iconKey: "gift",
    overview:
      "Deliver special-occasion parcels and gift orders with extra care, punctuality, and warmth for customers across the city.",
    responsibilities: [
      "Handle delicate gift and floral/parcel deliveries with care and presentation.",
      "Coordinate delivery timings with recipients for smooth, memorable handoffs.",
      "Update real-time delivery statuses and complete daily reconciliation.",
    ],
    requirements: [
      "Matriculation or equivalent with reliable local navigation skills.",
      "Valid license and prior delivery or customer-facing experience is a plus.",
      "Polite communication, reliability, and attention to detail.",
    ],
  },
  {
    id: "senior-frontend-engineer",
    title: "Senior Frontend Engineer",
    subtitle: "Design Systems & Portals",
    department: "Information Technology",
    jobType: "Full-time",
    location: "Karachi, Pakistan",
    deadline: "05 Jan 2026",
    iconKey: "code",
    overview:
      "Shape reusable UI architecture, design tokens, and high-traffic web experiences across TCS digital products.",
    responsibilities: [
      "Build modular React and TypeScript component libraries with strong accessibility.",
      "Partner with product and engineering leads to optimize bundle size and runtime speed.",
      "Review pull requests and mentor junior and mid-level frontend engineers.",
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field.",
      "4+ years of frontend engineering experience with React, TypeScript, and modern CSS.",
      "Deep understanding of responsive layout, state management, and UX polish.",
    ],
  },
  {
    id: "hub-operations-lead",
    title: "Hub Operations Supervisor",
    subtitle: "Sortation & Dispatch",
    department: "Express Operations",
    jobType: "Full-time",
    location: "Rawalpindi, Pakistan",
    deadline: "29 Dec 2025",
    iconKey: "package",
    overview:
      "Oversee shift sortation, scan accuracy, and timely dispatch waves at a regional TCS hub.",
    responsibilities: [
      "Lead shift supervisors, sorters, and dispatch staff to hit SLA cutoffs.",
      "Track exception rates, mis-sorts, and turnaround times across shifts.",
      "Enforce workplace safety, security, and operational SOP compliance.",
    ],
    requirements: [
      "Bachelor's degree in Operations, Supply Chain, or Management.",
      "2+ years supervising warehouse, hub, or logistics shift teams.",
      "Calm decision-making under time-sensitive operational schedules.",
    ],
  },
  {
    id: "hr-business-partner",
    title: "HR Business Partner",
    subtitle: "Talent & Employee Relations",
    department: "Human Resources",
    jobType: "Full-time",
    location: "Karachi, Pakistan",
    deadline: "08 Jan 2026",
    iconKey: "user",
    overview:
      "Support people managers and employees across regional teams with workforce planning, onboarding, engagement, and policy guidance.",
    responsibilities: [
      "Partner with department heads on hiring needs, role alignment, and retention.",
      "Guide managers through performance reviews, employee queries, and resolution workflows.",
      "Champion inclusive workplace practices and onboarding consistency.",
    ],
    requirements: [
      "Bachelor's or Master's degree in Human Resources or Business Administration.",
      "3+ years of HRBP or generalist experience in fast-paced organizations.",
      "Strong empathy, discretion, and organizational communication.",
    ],
  },
];
