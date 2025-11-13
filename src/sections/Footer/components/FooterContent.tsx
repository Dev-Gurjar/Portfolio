import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const MotionLink = motion(Link);

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
    <MotionLink
      to="/contact"
      onClick={() => window.scrollTo(0, 0)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.98 }}
      aria-label="Go to contact page"
      className="inline-block w-full md:w-60 rounded-lg"
    >
      {/* gradient border */}
      <div className="bg-gradient-to-r from-purple-500 via-indigo-600 to-pink-500 rounded-lg p-[2px] ">
        {/* inner surface */}
        <div className="bg-slate-900/95 backdrop-blur-lg rounded-md px-5 py-3 flex items-center justify-center gap-3 text-white text-sm font-medium select-none">
          <span>Let’s get in touch</span>

          {/* small paper-plane icon (inline SVG to avoid external requests) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
            className="block"
          >
            <path
              d="M22 2L11 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 2L15 22L11 13L2 9L22 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </MotionLink>
  <hr className="box-border caret-transparent h-0 border-gray-200 my-8 border-b-0 border-x-0 border-solid" />
      <Link to="/personal" className="box-border caret-transparent block" onClick={() => window.scrollTo(0, 0)}>
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
