const features = [
  {
    icon: "bolt",
    title: "Quick",
    subtitle: "Account Setup",
  },
  {
    icon: "box",
    title: "Seamless",
    subtitle: "Shipments",
  },
  {
    icon: "chart",
    title: "Grow Your",
    subtitle: "Business with TCS",
  },
];

export function EcomAccountInfo() {
  return (
    <section className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-6 px-4 py-7 text-white md:gap-8">
      {features.map((item, index) => (
        <div key={item.title} className="flex items-center gap-3">
          {/* Icon with Neon Glow */}
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
            {/* Outer Glow */}
            <div
              className="absolute -inset-1 rounded-full bg-[#ff1744]/25 blur-sm"
              style={{
                boxShadow: "0 0 10px 3px rgba(255,23,68,0.22)",
              }}
            />

            {/* Icon Circle */}
            <div
              className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#ff3155] bg-[#e90016]/30"
              style={{
                boxShadow:
                  "0 0 5px rgba(255,23,68,0.4), 0 0 10px rgba(255,23,68,0.2), inset 0 0 6px rgba(255,23,68,0.12)",
              }}
            >
              {/* Lightning */}
              {item.icon === "bolt" && (
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 fill-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"
                >
                  <path d="M13.2 1.5 5.8 13h5.1l-.7 9.5L18.2 10h-5.1l.1-8.5Z" />
                </svg>
              )}

              {/* Package */}
              {item.icon === "box" && (
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 fill-none stroke-white drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 2 9 5-9 5-9-5 9-5Z" />
                  <path d="m3 7 9 5 9-5" />
                  <path d="M3 7v10l9 5 9-5V7" />
                  <path d="M12 12v10" />
                </svg>
              )}

              {/* Growth Chart */}
              {/* Growth Chart */}
              {item.icon === "chart" && (
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="12" y="40" width="6.5" height="10" rx="1" />
                  <rect x="23.5" y="33" width="6.5" height="17" rx="1" />
                  <rect x="35" y="26" width="6.5" height="24" rx="1" />
                  <rect x="46.5" y="19" width="6.5" height="31" rx="1" />
                  <path d="M13 31C25 28 38 21 51 11" />
                  <path d="M43 11H51V19" />
                </svg>
              )}
            </div>
          </div>

          {/* Feature Text */}
          <div className="text-xs leading-[18px]">
            <p className="font-medium">{item.title}</p>
            <p>{item.subtitle}</p>
          </div>

          {/* Divider */}
          {index !== 2 && <div className="ml-3 hidden h-9 w-px bg-white/25 sm:block" />}
        </div>
      ))}
    </section>
  );
}
