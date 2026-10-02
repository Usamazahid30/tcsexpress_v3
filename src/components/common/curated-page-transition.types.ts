export type TransitionType = "doors" | "wipe" | "fade" | "iris";

export interface TransitionOptions {
  title?: string;
  subtitle?: string;
  type?: TransitionType;
}

export interface PageTransitionContextType {
  navigateWithTransition: (to: string, options?: TransitionOptions) => void;
  isTransitioning: boolean;
}
