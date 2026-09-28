export function LogisticsHero() {
  return (
    <section className="relative overflow-hidden pt-20">
      <img
        src="/LogisticsBanner/main-banner.jpg"
        alt="TCS Logistics"
        className="h-auto w-full object-contain"
        loading="eager"
        fetchPriority="high"
      />

      <div className="h-1 w-full bg-primary" />
    </section>
  );
}
