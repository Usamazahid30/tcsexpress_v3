import { Hero } from "@/features/hero";
import { TrackBar } from "@/features/tracking";
import { ServiceCarousel } from "@/features/services";

export function HomePage() {
  return (
    <>
      <TrackBar />
      <Hero />
      <ServiceCarousel />
    </>
  );
}
