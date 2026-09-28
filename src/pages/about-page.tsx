import { useEffect } from "react";
import { AboutHero, CompanyOverview, MissionVision, MilestonesTimeline } from "@/features/about";

export function AboutPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <AboutHero />
      <CompanyOverview />
      <MissionVision />
      <MilestonesTimeline />
    </>
  );
}
