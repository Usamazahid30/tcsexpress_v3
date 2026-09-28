import { useEffect } from "react";
import { ServicesHero } from "@/features/services/components/services-hero";
import { ServicesTicker } from "@/features/services/components/services-ticker";
import { ServicesGrid } from "@/features/services/components/services-grid";

export function ServicesPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <ServicesHero />
      <ServicesTicker />
      <ServicesGrid />
    </>
  );
}
