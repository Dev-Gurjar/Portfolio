import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="box-border caret-transparent block">
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-semibold box-border caret-transparent leading-10 hover:text-emerald-400 transition-colors"
      >
  Devendra Gurjar
    <span className="text-emerald-400 box-border caret-transparent">.</span>
      </motion.h1>
    </Link>
  );
};
