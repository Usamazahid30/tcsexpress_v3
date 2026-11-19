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
  const iconClass = "h-6 w-6 shrink-0 text-[#D90416] stroke-[1.75]";
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
      {/* Banner Container — pass `bannerImageUrl` once your asset is ready */}
      <div className="relative min-h-[420px] w-full overflow-hidden bg-gradient-to-br from-[#2B3245] via-[#4A3B52] to-[#C93B2B] sm:min-h-[470px]">
        {bannerImageUrl ? (
          <img
            src={bannerImageUrl}
            alt="TCS team members standing together in front of a TCS facility"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
          />
        ) : (
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-16 right-[14%] h-72 w-72 rotate-12 rounded-3xl border-[14px] border-[#FF2A3B]/45 shadow-[0_0_50px_rgba(255,42,59,0.35)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F9F4EE]/94 via-[#F9F4EE]/78 to-transparent md:w-3/4" />
          </div>
        )}

        {/* Foreground Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-6xl flex-col justify-center px-4 py-12 sm:min-h-[470px] sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xs font-bold tracking-wide text-[#18181B] sm:text-sm">
                Careers at TCS
              </span>
              <span className="h-[2px] w-7 rounded-full bg-[#D90416]" aria-hidden="true" />
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-[#111827] sm:text-5xl">
              Build a Career
              <br />
              That Keeps
              <br />
              <span className="text-[#D90416]">Pakistan Moving.</span>
            </h1>

            <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg bg-[#D90416] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#B80312] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D90416]"
              >
                <span>Explore Opportunities</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onWatchStoryClick}
                className="inline-flex min-h-11 cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold text-[#18181B] transition hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D90416]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#18181B]/35 bg-white/85 text-[#18181B]">
                  <Play className="ml-0.5 h-3.5 w-3.5 fill-current" aria-hidden="true" />
                </span>
                <span>Watch Our Story</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Value Proposition Bar */}
      <div className="relative z-20 mx-auto -mt-10 max-w-6xl px-4 sm:-mt-11 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#F0E6DA] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(24,24,27,0.08)] sm:px-6 sm:py-5">
          <ul className="grid grid-cols-1 divide-y divide-[#EFE8DF] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x lg:divide-[#EFE8DF]">
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
                <span className="text-xs font-semibold leading-snug text-[#1F2937] sm:text-[13px]">
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
