import { useState, useRef, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ServiceItem {
  id: string;
  image: string;
  href: string;
}

const rawServices: ServiceItem[] = [
  {
    id: "air",
    image: "/air.jpg",
    href: "#services",
  },
  {
    id: "logistics",
    image: "/logistics.jpg",
    href: "#services",
  },
  {
    id: "sentiments",
    image: "/sentiments.jpg",
    href: "#services",
  },
  {
    id: "ecom",
    image: "/ecom.jpg",
    href: "#services",
  },
  {
    id: "international",
    image: "/internationals.jpg",
    href: "#services",
  },
  {
    id: "studio",
    image: "/studio.jpg",
    href: "#services",
  },
  {
    id: "redbox",
    image: "/red.jpg",
    href: "#services",
  },
];

export function ServiceCarousel() {
  const { t, i18n } = useTranslation(["site", "common"]);
  const isRtl = i18n.language === "ur";

  const [activeIndex, setActiveIndex] = useState(3);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const isPointerDown = useRef(false);
  const dragStartX = useRef(0);
  const hasMoved = useRef(false);

  const services = rawServices.map((service) => ({
    ...service,
    title: t(`site:services.${service.id}`),
  }));

  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    isPointerDown.current = true;
    dragStartX.current = e.clientX;
    hasMoved.current = false;
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDown.current) return;
    const delta = e.clientX - dragStartX.current;
    if (!hasMoved.current && Math.abs(delta) > 6) {
      hasMoved.current = true;
      setIsDragging(true);
      try {
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
    if (hasMoved.current) {
      setDragOffset(delta);
    }
  }, []);

  const handlePointerEnd = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isPointerDown.current) return;
      isPointerDown.current = false;

      if (hasMoved.current) {
        const threshold = 50;
        if (dragOffset < -threshold) {
          setActiveIndex((prev) =>
            isRtl ? Math.max(0, prev - 1) : Math.min(services.length - 1, prev + 1),
          );
        } else if (dragOffset > threshold) {
          setActiveIndex((prev) =>
            isRtl ? Math.min(services.length - 1, prev + 1) : Math.max(0, prev - 1),
          );
        }
        try {
          if ((e.currentTarget as HTMLElement).hasPointerCapture?.(e.pointerId)) {
            (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
          }
        } catch {
          // ignore
        }
        setIsDragging(false);
        setDragOffset(0);
        setTimeout(() => {
          hasMoved.current = false;
        }, 50);
      } else {
        setIsDragging(false);
        setDragOffset(0);
      }
    },
    [dragOffset, isRtl, services.length],
  );

  const handleCardClick = (index: number) => {
    if (hasMoved.current) return;
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <section
      id="services"
      className="service-carousel-section relative overflow-hidden pb-16 lg:pb-24 select-none"
      style={{ background: "var(--gradient-surface)" }}
    >
      {/* 3D Perspective Draggable Carousel */}
      <div className="service-carousel-wrapper">
        <div
          className={`service-carousel-track ${isDragging ? "service-carousel-track--dragging" : ""}`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
        >
          {services.map((service, i) => {
            const offset = i - activeIndex;
            const isActive = offset === 0;
            const absOffset = Math.abs(offset);

            const baseGap = 60;
            const cardW = 240;
            const activeHalf = cardW / 2;
            const inactiveHalf = (cardW * 0.8) / 2;

            let translateX = 0;
            if (absOffset > 0) {
              translateX = activeHalf + baseGap + inactiveHalf;
              for (let step = 2; step <= absOffset; step++) {
                const stepGap = baseGap + (step - 1) * 12;
                translateX += inactiveHalf * 2 + stepGap;
              }
              if (offset < 0) translateX = -translateX;
            }

            if (isRtl) {
              translateX = -translateX;
            }

            translateX += dragOffset;

            const rotateY = isActive ? 0 : offset < 0 ? (isRtl ? -16 : 16) : isRtl ? 16 : -16;
            const scale = isActive ? 1 : 0.8;
            const zIndex = 50 - absOffset * 10;

            return (
              <div
                key={service.id}
                className={`service-card ${isActive ? "service-card--active" : ""} ${
                  isDragging ? "service-card--dragging" : ""
                }`}
                style={{
                  transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
                  zIndex,
                  transition: isDragging ? "none" : "transform 0.5s ease-in-out",
                }}
                onClick={() => handleCardClick(i)}
              >
                {/* Full-bleed image */}
                <img
                  src={service.image}
                  alt={`${service.title} service`}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="service-card__image"
                />

                {/* Top gradient for title contrast */}
                <div className="service-card__top-gradient" />

                {/* Bottom gradient */}
                <div className="service-card__bottom-gradient" />

                {/* Top header: White TCS Logo, Divider & Service Title */}
                <div className="service-card__top">
                  <div className="service-card__brand-header">
                    <img
                      src="/tcs.svg"
                      alt="TCS"
                      className="service-card__tcs-logo"
                      draggable={false}
                    />
                    <span className="service-card__divider" aria-hidden="true" />
                    <span className="service-card__title">{service.title}</span>
                  </div>
                </div>

                {/* Bottom content: Circular Arrow button */}
                <div className="service-card__bottom">
                  <a
                    href={service.href}
                    aria-label={`${t("common:actions.explore")} ${service.title}`}
                    className={`service-card__arrow ${
                      isActive ? "service-card__arrow--active" : "service-card__arrow--inactive"
                    }`}
                    onClick={(e) => {
                      if (hasMoved.current || !isActive) {
                        e.preventDefault();
                      }
                    }}
                  >
                    <ArrowRight className="h-4 w-4 rtl-flip" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
