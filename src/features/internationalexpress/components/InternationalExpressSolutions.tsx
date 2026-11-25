import { useState } from "react";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    id: 1,
    title: "Documents & Parcels",
    image: "/internationalexpress/doumentparcel.png",
    description:
      "Send important documents and parcels worldwide with reliable international delivery solutions, backed by TCS's global network.",
    layout: "lg:col-span-4 lg:row-span-2 lg:min-h-[368px]",
  },
  {
    id: 2,
    title: "Freight Solutions",
    image: "/internationalexpress/freight-solutions.png",
    description:
      "Move your cargo across borders with flexible air, sea and land freight solutions designed for businesses of every size.",
    layout: "lg:col-span-3 lg:min-h-[180px]",
  },
  {
    id: 3,
    title: "US Passport Renewal",
    image: "/internationalexpress/passport-renewal.png",
    description:
      "Renew your U.S. passport conveniently through TCS with secure document collection and submission services.",
    layout: "lg:col-span-3 lg:min-h-[180px]",
  },
  {
    id: 4,
    title: "Student Plus",
    image: "/internationalexpress/student-plus.png",
    description:
      "Send academic documents and university applications internationally with affordable, student-focused shipping solutions.",
    layout: "lg:col-span-2 lg:min-h-[180px]",
  },
  {
    id: 5,
    title: "Regional Trade / TIR",
    image: "/internationalexpress/regional-trade.png",
    description:
      "Connect your business to regional markets with secure cross-border cargo transportation and streamlined transit solutions.",
    layout: "lg:col-span-2 lg:min-h-[180px]",
  },
  {
    id: 6,
    title: "Customer Brokerage",
    image: "/internationalexpress/customer-brokerage.png",
    description:
      "Simplify international shipping with expert customs clearance, documentation and regulatory compliance support.",
    layout: "lg:col-span-2 lg:min-h-[180px]",
  },
];

export function InternationalExpressSolutions() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const handleFlip = (id: number) => {
    setFlippedCard((current) => (current === id ? null : id));
  };

  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 py-8 lg:px-9">
      {/* Section Heading */}
      <div className="mb-6 flex items-center gap-4">
        <h2 className="text-2xl font-extrabold tracking-tight text-[#171717] sm:text-3xl">
          Our International Solutions
        </h2>
        <span className="h-[3px] w-9 shrink-0 rounded-full bg-red-600" />
      </div>

      {/* Solutions Grid */}
      <div
        className="
        grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-10 lg:grid-rows-[180px_180px]"
      >
        {solutions.map((item) => {
          const isFlipped = flippedCard === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleFlip(item.id)}
              aria-label={`${isFlipped ? "Show front of" : "Show details for"} ${item.title}`}
              aria-pressed={isFlipped}
              className={`group relative w-full min-h-[200px] cursor-pointer overflow-hidden rounded-[20px] text-left outline-none focus-visible:ring-2 focus-visible:ring-red-500 sm:min-h-[220px] lg:min-h-0
                ${item.layout}
                ${item.id === 1 ? "sm:col-span-2" : ""}
              `}
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative h-full min-h-inherit w-full transition-transform duration-700"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* FRONT SIDE */}
                <div
                  className="absolute inset-0 overflow-hidden rounded-[20px] bg-[#eef0f4]"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <h3
                    className="
                    absolute right-4 top-7 z-10 max-w-[55%] text-right text-lg font-extrabold leading-tight text-[#171717] sm:text-xl"
                  >
                    {item.title}
                  </h3>

                  <span
                    className="
                    absolute bottom-5 right-5 z-10
                    flex h-10 w-10 items-center justify-center
                    rounded-full bg-white text-red-600 shadow-lg
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                  >
                    <ArrowRight size={20} />
                  </span>
                </div>

                {/* BACK SIDE */}
                <div
                  className="
                    absolute inset-0 flex flex-col
                    justify-between overflow-hidden
                    rounded-[20px] border border-red-100
                    bg-gradient-to-br from-[#fff5f5] to-[#e9edf6]
                    p-6
                  "
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div>
                    <span className="mb-4 block h-[3px] w-10 rounded-full bg-red-600" />
                    <h3 className="mb-3 text-xl font-extrabold text-[#171717]">{item.title}</h3>
                    <p className="text-sm font-medium leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
