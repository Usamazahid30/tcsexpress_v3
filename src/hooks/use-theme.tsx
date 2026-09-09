import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { flushSync } from "react-dom";

type Theme = "light" | "dark";

export type ThemeToggleEvent = ReactMouseEvent<HTMLElement> | MouseEvent;

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: (e?: ThemeToggleEvent) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "theme";

function getInitialTheme(): Theme {
  // Check localStorage first
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  }
  // Default to light mode
  return "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

/**
 * Executes an expanding circle reveal transition using the native View Transitions API.
 * Falls back to smooth transition for unsupported browsers or when prefers-reduced-motion is active.
 */
export function toggleThemeWithTransition(
  e: ThemeToggleEvent | undefined,
  toggleThemeCallback: () => void,
) {
  // Immediate fallback if View Transitions API is not supported or reduced motion is preferred
  if (
    !e ||
    typeof document.startViewTransition !== "function" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    const root = document.documentElement;
    root.classList.add("theme-transition");
    toggleThemeCallback();
    window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 400);
    return;
  }

  const x = e.clientX;
  const y = e.clientY;

  // Calculate maximum Euclidean distance to viewport corners
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  );

  const transition = document.startViewTransition(() => {
    flushSync(() => {
      toggleThemeCallback();
    });
  });

  transition.ready.then(() => {
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];

    document.documentElement.animate(
      {
        clipPath,
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Apply theme on mount and changes (without transition on first load)
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback((e?: ThemeToggleEvent) => {
    toggleThemeWithTransition(e, () => {
      setTheme((prev) => {
        const next = prev === "light" ? "dark" : "light";
        applyTheme(next);
        localStorage.setItem(STORAGE_KEY, next);
        return next;
      });
    });
  }, []);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
