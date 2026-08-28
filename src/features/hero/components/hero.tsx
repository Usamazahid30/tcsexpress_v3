import { motion, useMotionValue, useSpring } from "motion/react";
import { useTranslation } from "react-i18next";

function BrandShape() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, {
    stiffness: 140,
    damping: 20,
  });

  const rotateY = useSpring(x, {
    stiffness: 140,
    damping: 20,
  });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;

    const rect = e.currentTarget.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(relativeX * 30);
    y.set(-relativeY * 30);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative grid place-items-center"
      style={{ perspective: 800 }}
      aria-hidden="true"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4.5,
          ease: "easeInOut",
        }}
        className="w-full flex justify-center"
      >
        <motion.img
          src="/tcs.svg"
          alt=""
          draggable={false}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
          className="relative w-[90%] max-w-140 select-none drop-shadow-xl"
        />
      </motion.div>
    </div>
  );
}

export function Hero() {
  const { t } = useTranslation(["site", "common"]);

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-10 pb-2 lg:pt-14"
      style={{
        background: "var(--gradient-surface)",
      }}
    >
      {/* Anchor for About section */}
      <span id="about" className="absolute -top-24" aria-hidden="true" />

      {/* Decorative background glow */}
      <div
        className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {/* Heading */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 24,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h1 className="text-hero max-w-xl text-foreground">
              {t("site:hero.title_part1")}
              <span className="text-primary">{t("site:hero.title_highlight")}</span>
              {t("site:hero.title_part2")}
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 24,
              },
              show: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mt-4 max-w-lg text-[1.3rem] font-semibold leading-[1.55] text-foreground/80">
              {t("site:hero.subtitle")}
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT LOGO */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.75,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-0"
        >
          <BrandShape />
        </motion.div>
      </div>
    </section>
  );
}
