import { useEffect } from "react";
import { ContactHero, ContactIntro, ContactForm } from "@/features/contact";

export function ContactPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <ContactHero />
      <ContactIntro />
      <ContactForm />
    </>
  );
}
