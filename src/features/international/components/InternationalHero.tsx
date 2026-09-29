export function InternationalHero() {
  return (
    <section className="relative overflow-hidden pt-20">
      <img
        src="/international-banner/main-banner.jpg"
        alt="TCS International"
        className="h-auto w-full object-contain"
        loading="eager"
        fetchPriority="high"
      />

      <div className="h-1 w-full bg-primary" />
    </section>
  );
}
