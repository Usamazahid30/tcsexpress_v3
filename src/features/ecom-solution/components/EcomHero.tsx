export function EcomHero() {
  return (
    <section className="relative overflow-hidden pt-20">
      <img
        src="/ecom-solution/main-banner.jpg"
        alt="Ecom Solution"
        className="h-auto w-full object-contain"
        loading="eager"
        fetchPriority="high"
      />

      <div className="h-1 w-full bg-[#D40511]" />
    </section>
  );
}
