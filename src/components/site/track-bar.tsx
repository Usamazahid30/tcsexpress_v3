import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Calculator,
  Loader2,
  MapPin,
  Package,
  PackageSearch,
  Truck,
  User,
} from "lucide-react";
import { RippleButton } from "./ripple-button";

const placeholders = [
  "Enter your tracking number",
  "e.g. 785412963001",
  "Track a domestic shipment",
  "Track an international parcel",
];

const actions = [
  { icon: PackageSearch, label: "TCS Kardo" },
  { icon: Truck, label: "Schedule a Pickup" },
  { icon: Calculator, label: "Rate Calculator" },
  { icon: MapPin, label: "TCS Locator" },
  { icon: User, label: "Open an Account" },
];

export function TrackBar() {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % placeholders.length), 3200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      aria-label="Track your shipment"
      className="border-b border-border bg-gray-200 pt-24 pb-6 sm:pt-28"
    >
      <div className="container-page flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0 flex-1">
          <p className="text-[15px] font-semibold text-foreground">Track Your Shipment</p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setLoading(true);
              window.setTimeout(() => setLoading(false), 1600);
            }}
            className="mt-3 flex w-full max-w-xl flex-col gap-2 rounded-[22px] border border-border bg-card p-2 shadow-shadow-(--shadow-soft) transition-all focus-within:border-primary/50  sm:flex-row sm:items-center"
          >
            <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
              <Package className="h-5 w-5 shrink-0 text-primary" aria-hidden />
              <label htmlFor="tracking" className="sr-only">
                Tracking number
              </label>
              <input
                id="tracking"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder={placeholders[index]}
                className="h-11 w-full min-w-0 bg-transparent text-base text-foreground placeholder:text-muted-foreground/80 focus:outline-none"
              />
            </div>
            <RippleButton type="submit" size="md" className="shrink-0 sm:min-w-40">
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Tracking
                </>
              ) : (
                <>
                  Track Shipment <ArrowRight className="h-4 w-4" />
                </>
              )}
            </RippleButton>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {actions.map((action, i) => (
            <motion.button
              key={action.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group grid h-21.5 w-full place-items-center gap-1.5 rounded-2xl border border-border bg-card px-3 text-center shadow-(--shadow-soft) transition-colors hover:border-primary/30 hover:shadow-(--shadow-elevated) sm:w-26"
            >
              <action.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span className="text-[11px] font-medium leading-tight text-muted-foreground">
                {action.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
