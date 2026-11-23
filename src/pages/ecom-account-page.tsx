import { useEffect } from "react";
import { EcomAccountForm, EcomAccountHero, EcomAccountInfo } from "@/features/ecom-account";

export function EcomAccountPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/ecom-solution/EcomBgImage.png')",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#080d35]/30" />

      {/* Page content */}
      <div className="relative z-10">
        <EcomAccountHero />
        <EcomAccountInfo />
        <EcomAccountForm />
      </div>
    </main>
  );
}
