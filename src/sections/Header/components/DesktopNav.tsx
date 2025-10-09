import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export const DesktopNav = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Professional" },
    { path: "/personal", label: "Personal" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="items-center box-border caret-transparent gap-x-8 hidden min-h-0 min-w-0 gap-y-8 md:flex md:min-h-[auto] md:min-w-[auto]">
      <nav className="box-border caret-transparent gap-x-8 flex min-h-0 min-w-0 gap-y-8 md:min-h-[auto] md:min-w-[auto]">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                className={`font-medium box-border caret-transparent block min-h-0 min-w-0 capitalize md:min-h-[auto] md:min-w-[auto] transition-all relative ${
                  isActive
                    ? "text-emerald-400 border-b-2 border-emerald-400"
                    : "hover:text-emerald-400"
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          );
        })}
      </nav>
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="button"
        className="text-zinc-900 font-semibold items-center bg-emerald-400 caret-transparent inline-flex h-11 justify-center leading-6 min-h-0 min-w-0 text-center text-nowrap px-6 py-0 rounded-full md:flex md:min-h-[auto] md:min-w-[auto] hover:bg-emerald-500 transition-colors"
      >
        <img
          src="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-1.svg"
          alt="Icon"
          className="box-border caret-transparent h-6 text-nowrap w-6 mr-2"
        />
        English
        <img
          src="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-2.svg"
          alt="Icon"
          className="box-border caret-transparent h-4 text-nowrap w-4 ml-1"
        />
      </motion.button>
    </div>
  );
};
