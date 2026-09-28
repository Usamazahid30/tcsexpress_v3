import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/common";

const services = [
  {
    title: "Retail COD",
    description:
      "Retail-COD makes shipping simple and convenient for small businesses, home-based sellers, retailers and startups, with no complicated account requirements. This Independence season, there’s even more reason to ship with TCS. To celebrate Pakistan’s 79th Birthday, customers can now pay only 79% of the applicable Retail-COD tariff on their shipments and automatically get a chance to enter the Jashn-e-Pakistan Lucky Draw. Eligible customers can win exciting prizes. Ship more and make every delivery a chance to win with TCS Retail COD.",
    image: "/ecom-solution/R-COD.jpeg",
    href: "#retail-cod",
  },
  {
    title: "Fulfilment Services",
    description:
      "TCS offers a one-stop solution to fulfil all e-com needs and empowers online businesses without the need to invest in their own fulfilment facilities with tools required to meet the challenges of an eternally competitive online market. Our top of the line tool Envio, offers a one-window solution for all online business needs, ranging from booking and tracking multiple shipments at once, creating location-wise cost centres, multiple pickup/delivery options, to logging complaints and facilitating return logistics—all within the reach of a few clicks and without the hassle of having to manage the exhaustive paperwork.",
    image: "/ecom-solution/fulfilment-center.jpg",
    href: "#fulfilment",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function EcomServices() {
  return (
    <section className="relative overflow-hidden bg-surface py-12 sm:py-16 lg:py-24">
      <div className="container-page">
        <Reveal>
          <div className="mb-8 sm:mb-12">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-8 w-1 rounded-full bg-primary" aria-hidden="true" />
              <p className="text-lg font-bold uppercase tracking-[0.12em] text-primary">
                Our Solutions
              </p>
            </div>
          </div>
        </Reveal>

        <div className="space-y-8 sm:space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid overflow-hidden rounded-2xl bg-surface shadow-(--shadow-soft) lg:grid-cols-2"
            >
              <div
                className={`flex min-h-[260px] items-center justify-center p-4 sm:min-h-[320px] sm:p-6 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="max-h-[360px] w-full rounded-[5px] object-contain transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              <div
                className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <h3 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                  {service.title}
                </h3>

                <div className="mt-4 h-1 w-10 rounded-full bg-primary" />

                <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                  {service.description}
                </p>

                <a
                  href={service.href}
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
                >
                  View Details
                  <ArrowRight className="h-4 w-4 rtl-flip transition-transform duration-300 hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
