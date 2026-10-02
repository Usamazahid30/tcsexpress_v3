import { motion } from "motion/react";
import { LeaderCard } from "./leader-card";
import { boardLeaders, executiveLeaders } from "../data/leaders";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function LeadershipGrid() {
  return (
    <section className="relative bg-transparent pb-20 sm:pb-28 lg:pb-36">
      <div className="container-page relative z-10">
        {/* ROW 1: 4 cards positioned across the red-to-light boundary */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="-mt-40 sm:-mt-52 lg:-mt-60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {boardLeaders.map((leader) => (
            <motion.div key={leader.id} variants={itemVariants} className="h-full">
              <LeaderCard leader={leader} />
            </motion.div>
          ))}
        </motion.div>

        {/* ROW 2: 3 cards symmetrically centered on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-6 flex flex-wrap justify-center gap-6"
        >
          {executiveLeaders.map((leader) => (
            <motion.div
              key={leader.id}
              variants={itemVariants}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              <LeaderCard leader={leader} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
