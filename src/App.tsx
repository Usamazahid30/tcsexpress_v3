import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site/site-header";
import { TrackBar } from "@/components/site/track-bar";
import { Hero } from "@/components/site/hero";
import { ServiceCarousel } from "@/components/site/service-carousel";
import { SiteFooter } from "@/components/site/site-footer";

export default function App() {
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
