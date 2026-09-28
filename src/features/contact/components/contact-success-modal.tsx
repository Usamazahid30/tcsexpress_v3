import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, X } from "lucide-react";
import { useEffect } from "react";

interface ContactSuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export function ContactSuccessModal({ open, onClose }: ContactSuccessModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card p-8 text-center shadow-(--shadow-elevated)"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Icon Graphic */}
            <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-primary/10 text-primary shadow-(--shadow-glow)">
              <CheckCircle2 className="h-10 w-10 text-primary animate-in zoom-in-75 duration-300" />
            </div>

            {/* Text Content */}
            <h3 id="modal-title" className="text-2xl font-bold tracking-tight text-foreground">
              Thank you for submitting!
            </h3>
            <p className="mt-2 text-base text-muted-foreground leading-relaxed">
              We have received your message. Our customer service team will review your inquiry and
              get back to you promptly.
            </p>

            {/* Action Button */}
            <div className="mt-8">
              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-xl bg-primary py-3 px-6 text-sm font-semibold text-primary-foreground shadow-(--shadow-soft) transition-all hover:bg-primary-hover hover:shadow-(--shadow-glow) active:scale-[0.99]"
              >
                Done
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
