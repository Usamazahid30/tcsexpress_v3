import { useEffect } from "react";
import { LeadershipHero, LeadershipGrid } from "@/features/leadership";

export function LeadershipPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <LeadershipHero />
      <LeadershipGrid />
    </>
  );
}
