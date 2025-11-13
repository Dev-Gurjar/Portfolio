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
<div className="relative inline-block group">
  <motion.button
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.3 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    type="button"
    onClick={(e) => e.preventDefault()}            // prevent action
    aria-disabled="true"
    className="flex items-center gap-2 h-11 px-6 rounded-full font-semibold
               bg-emerald-400 text-zinc-900
               cursor-pointer group-hover:cursor-not-allowed
               transition-colors"
  >
    <img
      src="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-1.svg"
      alt="Icon"
      className="h-6 w-6"
    />
    English
    <img
      src="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-2.svg"
      alt=""
      className="h-4 w-4 ml-1"
    />
  </motion.button>

  {/* badge shown under the button on hover / focus-within */}
  <span
    className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2
               bg-zinc-900 text-white text-xs px-3 py-1 rounded-md shadow-sm
               opacity-0 group-hover:opacity-100 group-focus-within:opacity-100
               transition-opacity"
    aria-hidden="true"
  >
    Not available yet
  </span>
</div>
    </div>
  );
};
