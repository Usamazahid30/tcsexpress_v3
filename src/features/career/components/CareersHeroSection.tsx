import React from "react";
import { ArrowRight, Award, HeartPulse, Layers, Play, Truck, Users } from "lucide-react";
import { VALUE_PILLARS } from "../data/sampleJobs";
import { ValuePillarIconKey } from "../types/careers";

interface CareersHeroSectionProps {
  bannerImageUrl?: string;
  onExploreClick: () => void;
  onWatchStoryClick: () => void;
}

function renderPillarIcon(iconKey: ValuePillarIconKey) {
  const iconClass = "h-6 w-6 shrink-0 text-primary stroke-[1.75]";
  switch (iconKey) {
    case "purpose":
      return <Truck className={iconClass} aria-hidden="true" />;
    case "growth":
      return <Layers className={iconClass} aria-hidden="true" />;
    case "culture":
      return <Users className={iconClass} aria-hidden="true" />;
    case "health":
      return <HeartPulse className={iconClass} aria-hidden="true" />;
    case "rewards":
      return <Award className={iconClass} aria-hidden="true" />;
  }
}

export const CareersHeroSection: React.FC<CareersHeroSectionProps> = ({
  bannerImageUrl,
  onExploreClick,
  onWatchStoryClick,
}) => {
  return (
    <header className="relative w-full pb-16 sm:pb-20">
      {/* Banner Container */}
      <div className="relative min-h-[420px] w-full overflow-hidden bg-gradient-to-br from-[#2B3245] via-[#4A3B52] to-[#C93B2B] sm:min-h-[470px]">
        {bannerImageUrl ? (
          <img
            src={bannerImageUrl}
            alt="TCS Careers"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
          />
        ) : (
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-16 right-[14%] h-72 w-72 rotate-12 rounded-3xl border-[14px] border-primary/45 shadow-[0_0_50px_rgba(217,4,22,0.25)]" />
          </div>
        )}

        {/* Foreground Hero Content */}

        <div className="relative z-10 flex w-full min-h-[420px] flex-col justify-center py-12 pl-6 pr-6 sm:min-h-[470px] sm:pl-5 lg:pl-10">
          <div className="w-full max-w-xl text-left">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xs font-bold tracking-wide text-primary sm:text-sm">
                Careers at TCS
              </span>
              <span className="h-[2px] w-7 rounded-full bg-primary" aria-hidden="true" />
            </div>

            <h1 className="text-left text-4xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
              Build a Career
              <br />
              That Keeps
              <br />
              <span className="text-primary">Pakistan Moving.</span>
            </h1>

            <div className="mt-7 flex flex-wrap items-center justify-start gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onExploreClick}
                className="press inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <span>Explore Opportunities</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onWatchStoryClick}
                className="press inline-flex min-h-11 cursor-pointer items-center gap-2.5 rounded-sm px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-card/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card/90 text-foreground">
                  <Play className="ml-0.5 h-3.5 w-3.5 fill-current" aria-hidden="true" />
                </span>
                <span>Watch Our Story</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Value Proposition Bar */}
      <div className="container-page relative z-20 -mt-10 sm:-mt-11">
        <div className="rounded-2xl border border-border bg-card px-4 py-4 shadow-soft sm:px-6 sm:py-5">
          <ul className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x lg:divide-border">
            {VALUE_PILLARS.map((pillar, index) => (
              <li
                key={pillar.id}
                className={`flex items-center gap-3 py-3 sm:py-2 ${
                  index === 0
                    ? "lg:pr-4"
                    : index === VALUE_PILLARS.length - 1
                      ? "lg:pl-5"
                      : "lg:px-5"
                }`}
              >
                {renderPillarIcon(pillar.iconKey)}
                <span className="text-xs font-semibold leading-snug text-foreground sm:text-[13px]">
                  {pillar.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
