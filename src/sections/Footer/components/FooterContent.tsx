import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const FooterContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative items-center box-border caret-transparent flex flex-col z-10 text-center md:text-left"
    >
      <h1 className="text-4xl font-bold box-border caret-transparent leading-10 max-w-none md:text-5xl md:leading-[48px] md:max-w-xl">
        Let&#39;s
        <span className="text-emerald-400 text-4xl box-border caret-transparent leading-10 md:text-5xl md:leading-[48px]">
          Talk
        </span>
      </h1>
      <p className="box-border caret-transparent my-4 md:mt-6">
        What led you here? What are you looking for? I would love to hear from
        you over a virtual coffee chat!
      </p>
      <Link to="/contact" className="box-border caret-transparent block">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative bg-transparent caret-transparent inline-flex h-12 text-center w-full overflow-hidden mt-0 px-px rounded-lg md:w-60 md:mt-10"
        >
          <span className="absolute bg-[conic-gradient(from_90deg,rgb(226,203,255)_0deg,rgb(57,59,178)_50%,rgb(226,203,255)_100%)] bottom-[-1000%] box-border caret-transparent block left-[-1000%] right-[-1000%] top-[-1000%]"></span>
          <span className="text-sm font-medium items-center backdrop-blur-3xl bg-slate-950 box-border caret-transparent gap-x-2 flex h-full justify-center leading-5 gap-y-2 w-full px-7 rounded-lg">
            Let&#39;s get in touch
            <img
              src="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-18.svg"
              alt="Icon"
              className="box-border caret-transparent h-3.5 w-3.5"
            />
          </span>
        </motion.button>
      </Link>
  <hr className="box-border caret-transparent h-0 border-gray-200 my-8 border-b-0 border-x-0 border-solid" />
      <Link to="/personal" className="box-border caret-transparent block">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-emerald-400 font-semibold items-center bg-transparent caret-transparent inline-flex h-11 justify-center leading-6 text-center text-nowrap border border-emerald-400 mt-3 px-6 py-0 rounded-full border-solid hover:text-zinc-900 hover:bg-emerald-400 transition-all"
        >
          Peer through my Personal Life
        </motion.button>
      </Link>
    </motion.div>
  );
};
