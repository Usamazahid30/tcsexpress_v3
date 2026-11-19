import { useEffect } from "react";
import { CareerPage as CareerFeaturePage } from "@/features/career";

export function CareerPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return <CareerFeaturePage />;
}

export default CareerPage;
