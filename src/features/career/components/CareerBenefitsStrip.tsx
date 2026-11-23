import React from "react";
import { CAREER_BENEFITS_PILLARS } from "../data/sampleJobs";
import { ValuePillar, ValuePillarIconKey } from "../types/careers";

interface CareerBenefitsStripProps {
  items?: ValuePillar[];
  className?: string;
}

function renderBenefitIcon(iconKey: ValuePillarIconKey) {
  const strokeProps = {
    className: "h-12 w-12 sm:h-14 sm:w-14 text-[#FF0000]",
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (iconKey) {
    case "health-pulse":
      return (
        <svg {...strokeProps}>
          <path d="M32 54C32 54 9 39.2 9 22.5C9 15.6 14.5 10 21.4 10C25.8 10 29.8 12.3 32 15.9C34.2 12.3 38.2 10 42.6 10C49.5 10 55 15.6 55 22.5C55 39.2 32 54 32 54Z" />
          <path d="M16 31H24L27.5 23.5L33.5 38.5L37.5 31H48" />
        </svg>
      );

    case "award-badge":
      return (
        <svg {...strokeProps}>
          <circle cx="32" cy="23" r="13" />
          <circle cx="32" cy="23" r="9.5" strokeDasharray="2 3" />
          <path d="M32 16.5L34.1 20.8L38.8 21.5L35.4 24.8L36.2 29.5L32 27.3L27.8 29.5L28.6 24.8L25.2 21.5L29.9 20.8L32 16.5Z" />
          <path d="M23 33.5L17 53L25.5 48.5L29 54L34 35.8" />
          <path d="M41 33.5L47 53L38.5 48.5L35 54L30 35.8" />
        </svg>
      );

    case "calendar-pto":
      return (
        <svg {...strokeProps}>
          <rect x="11" y="15" width="42" height="37" rx="3" />
          <path d="M11 24H53" />
          <path d="M21 10V18" />
          <path d="M43 10V18" />
          <circle cx="22" cy="33" r="1.6" fill="currentColor" stroke="none" />
          <circle cx="32" cy="33" r="1.6" fill="currentColor" stroke="none" />
          <circle cx="42" cy="33" r="1.6" fill="currentColor" stroke="none" />
          <circle cx="22" cy="42" r="1.6" fill="currentColor" stroke="none" />
          <circle cx="32" cy="42" r="1.6" fill="currentColor" stroke="none" />
          <circle cx="42" cy="42" r="1.6" fill="currentColor" stroke="none" />
        </svg>
      );

    case "graduation-cap":
      return (
        <svg {...strokeProps}>
          <path d="M8 24L32 13L56 24L32 35L8 24Z" />
          <path d="M18 28.5V39.5C18 43 24.3 46 32 46C39.7 46 46 43 46 39.5V28.5" />
          <path d="M51 26.5V39" />
          <circle cx="51" cy="41.5" r="2.2" />
        </svg>
      );

    case "lotus-wellbeing":
      return (
        <svg {...strokeProps}>
          <path d="M32 46C25.5 46 21 38.5 21 29C21 21.5 26.2 15.5 32 12C37.8 15.5 43 21.5 43 29C43 38.5 38.5 46 32 46Z" />
          <path d="M22.5 45.5C14.5 44.5 9 38.2 9 29.5C9 25.5 10.5 22 13 19.5C17.5 23.5 21.2 31.5 22.5 45.5Z" />
          <path d="M41.5 45.5C49.5 44.5 55 38.2 55 29.5C55 25.5 53.5 22 51 19.5C46.5 23.5 42.8 31.5 41.5 45.5Z" />
          <path d="M14 48.5H50" />
        </svg>
      );

    case "growth-bars":
      return (
        <svg {...strokeProps}>
          <rect x="12" y="40" width="6.5" height="12" rx="1" />
          <rect x="23.5" y="33" width="6.5" height="19" rx="1" />
          <rect x="35" y="26" width="6.5" height="26" rx="1" />
          <rect x="46.5" y="19" width="6.5" height="33" rx="1" />
          <path d="M13 31C25 28 38 21 51 11" />
          <path d="M43 11H51V19" />
        </svg>
      );

    default:
      return null;
  }
}

export const CareerBenefitsStrip: React.FC<CareerBenefitsStripProps> = ({
  items = CAREER_BENEFITS_PILLARS,
  className = "",
}) => {
  return (
    <section
      aria-label="Employee benefits and career highlights"
      className={`w-full bg-card py-10 sm:py-12 ${className}`}
    >
      <div className="container-page">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-4">
          {items.map((item) => (
            <li key={item.id} className="flex flex-col items-center justify-start px-2 text-center">
              <div className="mb-3.5 flex h-14 items-center justify-center sm:h-16">
                {renderBenefitIcon(item.iconKey)}
              </div>
              <span className="max-w-[140px] text-sm font-medium leading-snug text-foreground sm:text-[15px]">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
