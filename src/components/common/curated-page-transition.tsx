import React, { createContext, useContext, useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, type Easing } from "motion/react";
import {
  TransitionType,
  TransitionOptions,
  PageTransitionContextType,
} from "./curated-page-transition.types";

const PageTransitionContext = createContext<PageTransitionContextType | null>(null);

export function useCuratedPageTransition() {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error("useCuratedPageTransition must be used within a PageTransitionProvider");
  }
  return context;
}

interface PageTransitionProviderProps {
  children: React.ReactNode;
}

export function PageTransitionProvider({ children }: PageTransitionProviderProps) {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<"idle" | "closing" | "opening">("idle");
  const [transitionData, setTransitionData] = useState<{
    title: string;
    subtitle?: string;
    type: TransitionType;
  }>({
    title: "",
    subtitle: "",
    type: "doors",
  });

  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimeouts = () => {
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
  };

  const navigateWithTransition = useCallback(
    (to: string, options?: TransitionOptions) => {
      clearTimeouts();

      const type = options?.type || "doors";
      const title = options?.title || "";
      const subtitle = options?.subtitle || "";

      setTransitionData({ title, subtitle, type });
      setPhase("closing");

      // Phase 1: Doors / Curtain close
      const navTimer = setTimeout(() => {
        navigate(to);
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        setPhase("opening");
      }, 500);

      // Phase 2: Doors / Curtain open and finish
      const endTimer = setTimeout(() => {
        setPhase("idle");
      }, 1050);

      timeoutsRef.current = [navTimer, endTimer];
    },
    [navigate],
  );

  const isTransitioning = phase !== "idle";

  return (
    <PageTransitionContext.Provider value={{ navigateWithTransition, isTransitioning }}>
      {children}
      <CuratedOverlay
        phase={phase}
        type={transitionData.type}
        title={transitionData.title}
        subtitle={transitionData.subtitle}
      />
    </PageTransitionContext.Provider>
  );
}

interface CuratedOverlayProps {
  phase: "idle" | "closing" | "opening";
  type: TransitionType;
  title: string;
  subtitle?: string;
}

function CuratedOverlay({ phase, type, title, subtitle }: CuratedOverlayProps) {
  if (phase === "idle") return null;

  const isClosing = phase === "closing";

  return (
    <div
      className="fixed inset-0 z-9999 pointer-events-auto select-none overflow-hidden"
      aria-live="assertive"
      aria-label="Page transition in progress"
    >
      {type === "doors" && <DoorsEffect isClosing={isClosing} />}
      {type === "wipe" && <WipeEffect isClosing={isClosing} />}
      {type === "fade" && <FadeEffect isClosing={isClosing} />}
      {type === "iris" && <IrisEffect isClosing={isClosing} />}

      {/* Central Leader Typography & Visual Accent */}
      <AnimatePresence>
        {title && (
          <div className="absolute inset-0 z-10000 flex flex-col items-center justify-center p-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={
                isClosing ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 1.05, y: -20 }
              }
              transition={{
                duration: isClosing ? 0.55 : 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-center max-w-xl mx-auto"
            >
              {/* Pill Badge */}
              {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white/95 border border-white/20 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 shadow-sm backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                TCS Leadership
              </div> */}

              {/* Leader Main Name */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-wider leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                {title}
              </h1>

              {/* Subtitle / Role */}
              {subtitle && (
                <p className="mt-2 text-sm sm:text-base md:text-lg font-medium tracking-[0.2em] text-white/90 uppercase drop-shadow-sm">
                  {subtitle}
                </p>
              )}

              {/* Cinematic Glow Rule */}
              <div className="mt-5 h-0.75 w-20 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.9)]" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* 1. DOORS EFFECT - Split Left & Right TCS Brand Red Panels */
function DoorsEffect({ isClosing }: { isClosing: boolean }) {
  const panelEase: Easing = [0.85, 0, 0.15, 1] as const;

  return (
    <>
      {/* Left Door */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isClosing ? "0%" : "-100%" }}
        transition={{ duration: 0.48, ease: panelEase }}
        className="absolute top-0 bottom-0 left-0 w-1/2 bg-linear-to-r from-[#C2151B] to-[#ED1C24] dark:from-[#900E13] dark:to-[#B8141A] border-r border-white/15 shadow-[10px_0_30px_rgba(0,0,0,0.35)]"
      />

      {/* Right Door */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isClosing ? "0%" : "100%" }}
        transition={{ duration: 0.48, ease: panelEase }}
        className="absolute top-0 bottom-0 right-0 w-1/2 bg-linear-to-l from-[#C2151B] to-[#ED1C24] dark:from-[#900E13] dark:to-[#B8141A] border-l border-white/15 shadow-[-10px_0_30px_rgba(0,0,0,0.35)]"
      />
    </>
  );
}

/* 2. WIPE EFFECT - Full-Bleed Angular Sweep */
function WipeEffect({ isClosing }: { isClosing: boolean }) {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: isClosing ? "0%" : "100%" }}
      transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
      className="absolute inset-0 bg-linear-to-r from-[#C2151B] via-[#ED1C24] to-[#C2151B] dark:from-[#900E13] dark:via-[#B8141A] dark:to-[#900E13] shadow-2xl"
    />
  );
}

/* 3. FADE EFFECT - Rich Crimson Fade & Blur */
function FadeEffect({ isClosing }: { isClosing: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isClosing ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="absolute inset-0 bg-[#ED1C24]/95 dark:bg-[#900E13]/95 backdrop-blur-2xl"
    />
  );
}

/* 4. IRIS EFFECT - Expanding & Contracting Aperture Mask */
function IrisEffect({ isClosing }: { isClosing: boolean }) {
  return (
    <motion.div
      initial={{ clipPath: "circle(0% at 50% 50%)" }}
      animate={{
        clipPath: isClosing ? "circle(150% at 50% 50%)" : "circle(0% at 50% 50%)",
      }}
      transition={{ duration: 0.5, ease: [0.85, 0, 0.15, 1] }}
      className="absolute inset-0 bg-linear-to-tr from-[#900E13] via-[#ED1C24] to-[#B8141A]"
    />
  );
}
