import { SiteHeader, SiteFooter } from "@/components/layout";
import { Hero } from "@/features/hero";
import { TrackBar } from "@/features/tracking";
import { ServiceCarousel } from "@/features/services";

export function HomePage() {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />
      <main>
        <TrackBar />
        <Hero />
        <ServiceCarousel />
      </main>
      <SiteFooter />
    </div>
  );
}
