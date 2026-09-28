import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

interface TickerRowProps {
  items: { id: string; image: string; title: string }[];
  direction?: 1 | -1;
  duration?: number;
}

function TickerRow({ items, direction = -1, duration = 35 }: TickerRowProps) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  // Measure the width of one set of items
  useEffect(() => {
    if (containerRef.current) {
      // Each set is a direct child flex container
      const firstSet = containerRef.current.querySelector("[data-ticker-set]") as HTMLElement;
      if (firstSet) {
        setContentWidth(firstSet.offsetWidth);
      }
    }
  }, [items]);

  // Calculate the gap between sets (matches the parent flex gap)
  const gapPx = 20; // matches gap-5 (1.25rem = 20px)
  const totalShift = contentWidth + gapPx;

  const cardClasses =
    "group relative flex-shrink-0 w-48 sm:w-56 lg:w-64 aspect-[3/4] rounded-2xl overflow-hidden border border-border shadow-(--shadow-soft) transition-shadow hover:shadow-(--shadow-elevated)";

  const renderItems = (key: string) => (
    <div className="flex gap-4 sm:gap-5" data-ticker-set key={key}>
      {items.map((item) => (
        <div key={`${key}-${item.id}`} className={cardClasses}>
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
          {/* Bottom gradient overlay */}
          <div
            className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
            style={{
              background: "linear-gradient(to top, oklch(0.15 0 0 / 0.85) 0%, transparent 100%)",
            }}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        ref={containerRef}
        animate={
          totalShift > 0
            ? {
                x: direction === -1 ? [0, -totalShift] : [-totalShift, 0],
              }
            : undefined
        }
        transition={{
          x: {
            duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop" as const,
          },
        }}
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
        className="flex gap-5 w-max"
        {...(isPaused && totalShift > 0
          ? {
              // When paused, we stop by not providing animate
              // Instead, we use a workaround: set transition duration to very high
            }
          : {})}
      >
        {/* Render two copies for seamless looping */}
        {renderItems("set-a")}
        {renderItems("set-b")}
      </motion.div>
    </div>
  );
}

export function ServicesTicker() {
  const services = [
    { id: "domestic", image: "/red.jpg", title: "TCS Domestic" },
    { id: "international", image: "/International.jpg", title: "TCS International" },
    { id: "air", image: "/air.jpg", title: "TCS Air" },
    { id: "logistics", image: "/logistics.jpg", title: "TCS Logistics" },
    { id: "ecom", image: "/ecom.jpg", title: "TCS Ecommerce" },
    { id: "sentiments", image: "/sentiments.jpg", title: "TCS Sentiments" },
    { id: "studio", image: "/studio.jpg", title: "TCS Studio" },
    { id: "student", image: "/student.jpg", title: "TCS Student" },
    { id: "travel", image: "/travel.jpg", title: "TCS Travel" },
  ];

  // Split services into two rows for visual variety
  const row1 = services;
  const row2 = [...services].reverse();

  return (
    <section className="relative overflow-hidden py-2">
      {/* Decorative side fades */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-24"
        style={{
          background: "linear-gradient(to right, var(--background) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-24"
        style={{
          background: "linear-gradient(to left, var(--background) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="space-y-4 sm:space-y-5">
        {/* Row 1: scrolls left */}
        <TickerRow items={row1} direction={-1} duration={40} />
        {/* Row 2: scrolls right */}
        <TickerRow items={row2} direction={1} duration={45} />
      </div>
    </section>
  );
}
