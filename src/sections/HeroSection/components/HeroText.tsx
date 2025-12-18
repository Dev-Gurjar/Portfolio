import { motion } from "framer-motion";

export const HeroText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="box-border caret-transparent order-2 text-center md:order-none md:text-left"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl box-border caret-transparent leading-7 text-center md:text-left"
      >
          AI/ML Engineer
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-5xl font-semibold box-border caret-transparent leading-[52.8px] text-center mb-6 md:text-[80px] md:leading-[88px] md:text-left"
      >
        Hello I&#39;m
        <br className="text-5xl box-border caret-transparent leading-[52.8px] text-center md:text-[80px] md:leading-[88px] md:text-left" />
          <span className="text-emerald-400 text-5xl box-border caret-transparent leading-[52.8px] text-center md:text-[80px] md:leading-[88px] md:text-left">
            Devendra
            <br className="text-5xl box-border caret-transparent leading-[52.8px] text-center md:text-[80px] md:leading-[88px] md:text-left" />
            Gurjar
          </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-white/80 box-border caret-transparent max-w-[500px] text-center mb-9 md:text-left"
      >
        AI Automation Specialist | Full-Stack Developer, <br/> Making Production ready Solutions
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="items-center box-border caret-transparent gap-x-8 flex flex-col gap-y-8 text-center md:flex-row md:text-left"
      >
        <motion.a
          href="https://drive.google.com/file/d/1U44sNi256R5Gtnlv3IROKLBjNrbmwMhg/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-emerald-400 text-sm font-semibold items-center bg-transparent caret-transparent gap-x-2 flex h-14 justify-center tracking-[2px] leading-5 gap-y-2 text-center uppercase text-nowrap border border-emerald-400 px-8 py-0 rounded-full border-solid hover:text-zinc-900 hover:bg-emerald-400 transition-all"
          aria-label="Open resume (opens in new tab)"
        >
          <span className="block">View Resume</span>
          <img
            src="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-4.svg"
            alt="Icon"
            className="h-5 w-5"
          />
        </motion.a>
        <div className="box-border caret-transparent text-center mb-8 md:text-left md:mb-0">
          <div className="box-border caret-transparent gap-x-6 flex gap-y-6 text-center md:text-left">
            {/* Removed unused social links: Facebook, Instagram, YouTube */}
            <a
              href="https://www.linkedin.com/in/Dev-Gurjar/"
              className="text-emerald-400 items-center box-border caret-transparent flex h-9 justify-center leading-6 text-center w-9 border border-emerald-400 rounded-full border-solid md:text-left hover:text-zinc-900 hover:bg-emerald-400"
            >
              <img
                src="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-8.svg"
                alt="Icon"
                className="box-border caret-transparent h-4 text-center w-4 md:text-left"
              />
            </a>
            <a
              href="https://github.com/dev-gurjar"
              className="text-emerald-400 items-center box-border caret-transparent flex h-9 justify-center leading-6 text-center w-9 border border-emerald-400 rounded-full border-solid md:text-left hover:text-zinc-900 hover:bg-emerald-400"
            >
              <img
                src="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-9.svg"
                alt="Icon"
                className="box-border caret-transparent h-4 text-center w-4 md:text-left"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
