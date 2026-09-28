import { useEffect } from "react";
import { LogisticsHero, LogisticsIntro, LogisticsServices } from "@/features/tcslogistics";

export function LogisticsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <main>
      <LogisticsHero />
      <LogisticsIntro />
      <LogisticsServices />
    </main>
  );
}
