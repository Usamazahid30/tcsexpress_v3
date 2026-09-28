import { useEffect } from "react";
import { EcomHero, EcomIntro, EcomServices } from "@/features/ecom-solution";

export function EcomSolutionPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main>
      <EcomHero />
      <EcomIntro />
      <EcomServices />
    </main>
  );
}
