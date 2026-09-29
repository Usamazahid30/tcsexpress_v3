import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const services = [
  {
    title: "RedBox",
    description:
      "RedBox service is specifically designed to send parcels of 1, 2, 3, 5, 10, 15, 20 and 25 kilograms at very special rates. You can send all non-perishable items including fragile, to all major, local and selected international destinations through our RedBox service.",
    image: "/international-banner/redbox.jpg",
  },
  {
    title: "Express Flyer",
    description:
      "Express Flyer is the most popular service of TCS. The name is derived from and based on the iconic sealed bag made of strong, recyclable, water-proof and tear-resistant, d2w-compliant Virgin material. The bag, once sealed, cannot be opened with an intention to re-seal, thus making it impossible to hide the signs of tempering with the enclosed contents. The Express Flyer can be used with a host of value-added services e.g. the Overnight Express.",
    image: "/international-banner/expressflyer.jpg",
  },
  {
    title: "US Passport Renewal",
    description:
      "TCS provides a secure and convenient way to renew US passport. The US citizens can either visit a TCS Express Centre to hand over their passports or arrange for a pickup of their documents to be submitted to the nearest US embassy on their behalf. Selected TCS Express Centres are open twenty-four hours, which makes it a more flexible and time-saving option.",
    image: "/InternationalExpress/uspassport.jpg",
  },
  {
    title: "Student Express",
    description:
      "TCS Students Express provides a reliable, convenient and affordable way for students to send their academic documents locally and abroad. For documents ’shipment only, this service benefits prospective students and alumni in need of safely sending and receiving letters, educational transcripts or other important documents to and from educational institutions worldwide. The service additionally helps students by allowing them to despatch important documents anywhere in the world for a flat rate.",
    image: "/international-banner/studentexpress.jpg",
  },
  {
    title: "Visatronix",
    description:
      "TCS Visatronix provides a hassle-free, one window, visa dropbox and value-added visa facilitation services. Operating from eleven major cities of Pakistan, with a dedicated team of courteous and experienced visa services officers, we manage over 100,000 visa applications annually. To offer further convenience, applications are booked on a ‘Return Service Basis ’at selected TCS Express Centres located in all major cities of Pakistan. The ever increasing list of destinations currently serves Egypt, Greece, India, Italy, Malaysia, Malta, South Africa, Spain, Thailand and Tunisia.",
    image: "/international-banner/image-5.jpg",
  },
  {
    title: "International Freight",
    description:
      "TCS provides seamless regional and global connectivity through its vast network which includes the leading logistics players from east to west. With international gateways in Karachi, Lahore, Islamabad, and our regional hub in the UAE and growing partnerships in Central Asia and the world, we are focused on enabling and enhancing trade and commerce for ‘Made in Pakistan’ as the logistics backbone of our economy.",
    image: "/international-banner/image-6.jpg",
  },
  {
    title: "Customs Brokerage",
    description:
      "Whether you are shipping through air, ocean, or overland, we will help you reduce the risks of delays and penalties by ensuring accurate customs and associated border agencies compliances. Regardless of the goods’ port of entry/exit, TCS covers the entire spectrum of customs services including import, export, transit customs clearance, supply chain valuation, customs consulting and complex customs solutions.",
    image: "/international-banner/customerbrokerage.jpg",
  },
  {
    title: "Regional Trade / TIR",
    description: [
      "Pakistan’s geographic location makes it an ideal gateway for Central Asian trade and combined with Afghanistan, offers a cost effective and time efficient transit corridor, linking Central Asian Republics with global markets. Sensing the opportunity, TCS, carrying a commercial load of medicines, opened the Pak Afghan corridor in 2021 as a transit route for Uzbekistan, Kazakhstan, Tajikistan, Kyrgyzstan, and beyond.",

      "We move cargo from ports of origin to Karachi by sea, and truck onwards to destinations in the Central Asian cluster and beyond. Our services include cargo pickup at origin, shipping, port and custom clearance, cross stuffing and border crossing solutions. We partner with marine freight forwarders for sea logistics and 3rd party vendors for trucking requirements, including ambient and temperature-controlled containers.",

      "In 2018 TCS became the 1st recipient of the TIR license awarded by the Pakistan National Council of the International Chamber of Commerce and offers customers a choice between regular trucking and TIR - allows containers to pass without being checked by customs at border crossing points, as per the 1975 TIR UN convention.",

      "The Pakistan Afghanistan corridor offers significant savings on cost and, more importantly, journey time as compared to bilateral and transit cargo movements through the traditional supply chain.",
    ],
    image: "/international-banner/tir2.jpg",
  },
];

function ScrollService({ service, index }: { service: (typeof services)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const isMultipleDescription = Array.isArray(service.description);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // SAME ANIMATION

  const cardY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [70, 0, 0, -60]);

  const cardScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.96, 1, 1, 0.97]);

  const cardOpacity = useTransform(scrollYProgress, [0, 0.15, 0.8, 1], [0, 1, 1, 0]);

  const imageX = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [80, 0, 0, -50]);

  const imageY = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [25, 0, 0, -20]);

  const imageScale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [1.08, 1, 1.02, 1.08]);

  const textX = useTransform(scrollYProgress, [0, 0.2, 0.75, 1], [-70, 0, 0, 40]);

  const textY = useTransform(scrollYProgress, [0, 0.2, 0.75, 1], [25, 0, 0, -15]);

  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className={
        isMultipleDescription
          ? "relative min-h-237.5 lg:min-h-225"
          : "relative h-[72vh] min-h-125 sm:h-[75vh] sm:min-h-135 lg:h-[78vh] lg:min-h-140"
      }
    >
      <div
        className={
          isMultipleDescription
            ? "relative flex items-start pt-8 sm:pt-10 lg:pt-16"
            : "sticky top-16 flex h-[calc(72vh-4rem)] items-center sm:top-20 sm:h-[calc(75vh-5rem)] lg:h-[calc(64vh-5rem)]"
        }
      >
        <div className="container-page w-full">
          <motion.div
            style={{ y: cardY, scale: cardScale, opacity: cardOpacity }}
            className="relative overflow-hidden rounded-2xl bg-surface shadow-(--shadow-elevated) sm:rounded-3xl"
          >
            <div
              className={
                isMultipleDescription
                  ? "grid min-h-225 grid-cols-1 lg:min-h-212.5 lg:grid-cols-2"
                  : "grid min-h-125 grid-cols-1 lg:min-h-125 lg:grid-cols-2"
              }
            >
              <div
                className={`relative overflow-hidden bg-background ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
              >
                <motion.div
                  style={{ x: imageX, y: imageY, scale: imageScale }}
                  className="flex min-h-62.5 h-full items-center justify-center p-5 sm:min-h-75 sm:p-7 lg:min-h-125 lg:p-10"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="max-h-57.5 w-full rounded-xl object-contain sm:max-h-75 lg:max-h-100 lg:rounded-2xl"
                  />
                </motion.div>
              </div>

              <motion.div
                style={{ x: textX, y: textY, opacity: textOpacity }}
                className={`flex flex-col justify-center p-6 sm:p-8 lg:p-12 xl:p-14 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
              >
                {/* <div className="mb-4 flex items-center gap-3 sm:mb-5">
                  <span className="h-7 w-1 rounded-full bg-primary sm:h-8" aria-hidden="true" />
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary sm:text-sm">
                    International
                  </p>
                </div> */}

                <h3 className="text-2xl font-semi-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
                  {service.title}
                </h3>

                <motion.div
                  style={{ scaleX: textOpacity, transformOrigin: "left" }}
                  className="mt-4 h-1 w-10 rounded-full bg-primary sm:mt-5 sm:w-12"
                />

                {Array.isArray(service.description) ? (
                  <div className="mt-5 max-w-xl space-y-3 sm:mt-6 sm:space-y-4">
                    {service.description.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-xs leading-6 text-muted-foreground sm:text-sm sm:leading-7 lg:text-base lg:leading-8"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="mt-5 max-w-xl text-xs leading-6 text-muted-foreground sm:mt-6 sm:text-sm sm:leading-7 lg:text-base lg:leading-8">
                    {service.description}
                  </p>
                )}
              </motion.div>
            </div>

            {/* <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-lg sm:right-5 sm:top-5 sm:h-10 sm:w-10 sm:text-sm">
              {String(index + 1).padStart(2, "0")}
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function InternationalServices() {
  return (
    <section className="bg-background">
      <div className="container-page py-10 sm:py-14 lg:py-16">
        <div className="mb-6 sm:mb-8">
          <div className="mb-3 flex items-center gap-3 sm:mb-4">
            <span className="h-7 w-1 rounded-full bg-primary sm:h-8" aria-hidden="true" />

            <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary sm:text-sm">
              Our Services
            </p>
          </div>
        </div>
      </div>

      <div className="pb-10 sm:pb-14 lg:pb-16">
        {services.map((service, index) => (
          <ScrollService key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
