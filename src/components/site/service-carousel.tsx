import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    title: "TCS Air",
    description: "Same-day air movement across 20 domestic destinations.",
    image: "/air.jpg",
  },
  {
    title: "Logistics",
    description: "Warehousing, fleet and supply-chain solutions at scale.",
    image: "/logistics.jpg",
  },
  {
    title: "Sentiments",
    description: "Flowers, cakes and gifts delivered on the day that matters.",
    image: "/sentiments.jpg",
  },
  {
    title: "E-Com Solutions",
    description: "Sell online with COD, daily payments and fast fulfilment.",
    image: "/ecom.jpg",
  },
  {
    title: "International Express",
    description: "Documents and parcels to 200+ countries, tracked end to end.",
    image: "/internationals.jpg",
  },
  {
    title: "TCS Studio",
    description: "Print, packaging and brand collateral produced in-house.",
    image: "/studio.jpg",
  },
  {
    title: "Red Box",
    description: "Fixed-rate flat boxes for effortless nationwide shipping.",
    image: "/red.jpg",
  },
];

export function ServiceCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Drag state kept in a ref
  const drag = useRef({
    active: false,
    startX: 0,
    startScroll: 0,
    moved: false,
    pointerId: -1,
  });

  const syncEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const { scrollLeft, clientWidth, scrollWidth } = el;
    // Small tolerance avoids flicker at the edges
    setAtStart(scrollLeft <= 2);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    syncEdges();

    el.addEventListener("scroll", syncEdges, { passive: true });
    window.addEventListener("resize", syncEdges);

    // Also re-check after images / fonts load
    const ro = new ResizeObserver(syncEdges);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", syncEdges);
      window.removeEventListener("resize", syncEdges);
      ro.disconnect();
    };
  }, [syncEdges]);

  /** Distance to scroll for one “page” (one card + gap) */
  const getStep = () => {
    const el = trackRef.current;
    if (!el) return 300;

    const card = el.querySelector<HTMLElement>("[data-card]");
    if (!card) return Math.round(el.clientWidth * 0.75);

    // 20px matches the gap-5 class
    return card.offsetWidth + 20;
  };

  const scrollByCards = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;

    el.scrollBy({
      left: direction * getStep(),
      behavior: "smooth",
    });
  };

  // ── Pointer / drag handlers ──────────────────────────────────────────────

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only primary button / touch
    if (e.button !== 0 && e.pointerType === "mouse") return;

    const el = trackRef.current;
    if (!el) return;

    drag.current = {
      active: true,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      moved: false,
      pointerId: e.pointerId,
    };

    el.setPointerCapture(e.pointerId);
    setIsDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el || !drag.current.active) return;

    const delta = e.clientX - drag.current.startX;

    // Threshold before we consider it a real drag
    if (Math.abs(delta) > 6) {
      drag.current.moved = true;
    }

    // Direct scroll for responsive feel (no inertia lag while dragging)
    el.scrollLeft = drag.current.startScroll - delta;
  };

  const endDrag = (e?: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;

    const el = trackRef.current;
    if (el && e) {
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        // already released
      }
    }

    drag.current.active = false;
    setIsDragging(false);
  };

  const onClickCapture = (e: React.MouseEvent) => {
    // Prevent accidental clicks on links/buttons after a drag
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <section
      id="services"
      className="relative pb-16 lg:pb-20"
      style={{ background: "var(--gradient-surface)" }}
    >
      {/* Navigation buttons */}
      {/* <div className="container-page flex justify-end gap-2 pb-5">
        <button
          type="button"
          onClick={() => scrollByCards(-1)}
          disabled={atStart}
          aria-label="Previous services"
          className="press grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground transition-all duration-200 hover:text-primary disabled:pointer-events-none disabled:opacity-40"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={() => scrollByCards(1)}
          disabled={atEnd}
          aria-label="Next services"
          className="press grid h-11 w-11 place-items-center rounded-full border border-primary/30 bg-primary text-primary-foreground transition-all duration-200 hover:bg-primary-hover disabled:pointer-events-none disabled:opacity-40"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div> */}

      {/* Scroll track */}
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
        className={[
          "flex gap-5 overflow-x-auto scroll-smooth",
          "snap-x snap-mandatory",
          // Added pt-6 so the cards don't clip at the top when they scale up
          "px-5 pt-6 pb-6 lg:px-8",
          "select-none",
          "scrollbar-none [&::-webkit-scrollbar]:hidden",
          isDragging ? "cursor-grabbing" : "cursor-grab",
        ].join(" ")}
        style={{ scrollPaddingLeft: "1.25rem" }}
      >
        {/* Left spacer so first card aligns with container on large screens */}
        <div className="hidden shrink-0 lg:block lg:w-[max(0px,calc((100vw-80rem)/2))]" />

        {services.map((service, i) => (
          <motion.article
            key={service.title}
            data-card
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.55,
              delay: Math.min(i, 5) * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -12,
              scale: 1.06, // Increased scale for the entire card
              zIndex: 10, // Keeps the hovered card above adjacent cards
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            }}
            className="
              group relative aspect-3/4 w-65.5 shrink-0 snap-start
              overflow-hidden rounded-[22px]
              border border-border
              shadow-(--shadow-soft)
              transition-shadow duration-300
              hover:shadow-(--shadow-elevated)
              sm:w-[288px]
            "
          >
            {/* Full image */}
            <img
              src={service.image}
              alt={`${service.title} service`}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="
                absolute inset-0
                h-full w-full
                object-cover
                object-[center_top]
              "
            />

            {/* Dark gradient for text readability */}
            <div
              className="
                absolute inset-0
                bg-linear-to-t
                from-charcoal/95
                via-charcoal/35
                to-transparent
              "
            />

            {/* Content */}
            <div
              className="
                absolute inset-x-0 bottom-0
                flex items-end justify-between
                gap-3 p-5
              "
            >
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-primary-foreground">{service.title}</h3>

                <p className="mt-1 text-sm leading-normal text-primary-foreground/75">
                  {service.description}
                </p>
              </div>

              <a
                href="#services"
                aria-label={`Explore ${service.title}`}
                className="
                  glass grid h-10 w-10 shrink-0 place-items-center
                  rounded-full border border-white/25
                  text-primary-foreground
                  transition-all duration-300
                  group-hover:rotate-45
                  group-hover:bg-primary
                  group-hover:border-primary
                "
              >
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
