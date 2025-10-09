import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 20, label: "Age" },
    { value: 2, label: "Years of experience" },
    { value: 6, label: "Projects worked on" },
    { value: 3, label: "Projects Deployed" },
  ];

  return (
    <section ref={ref} className="box-border caret-transparent pt-4 pb-12 md:py-0">
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1200px]">
        <div className="box-border caret-transparent gap-x-6 flex flex-wrap max-w-[375px] gap-y-6 mx-auto md:max-w-none">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="items-center box-border caret-transparent gap-x-4 flex basis-[0%] grow justify-center gap-y-4 md:justify-start"
            >
              <div className="items-center box-border caret-transparent gap-x-4 flex gap-y-4">
                <div className="items-center box-border caret-transparent gap-x-4 flex blur-0 gap-y-4">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                    className="text-4xl font-extrabold box-border caret-transparent block leading-10 md:text-6xl md:leading-[60px] text-emerald-400"
                  >
                    {stat.value}
                  </motion.span>
                  <p className="text-white/80 box-border caret-transparent leading-[22px] max-w-[150px]">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
