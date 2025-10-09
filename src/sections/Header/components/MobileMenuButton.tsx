import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const MobileMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Professional" },
    { path: "/personal", label: "Personal" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="box-border caret-transparent block min-h-[auto] min-w-[auto] md:hidden md:min-h-0 md:min-w-0">
      <motion.button
        whileTap={{ scale: 0.9 }}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="items-center bg-transparent caret-transparent flex justify-center text-center p-2 relative z-50"
      >
        {isOpen ? (
          <X className="text-emerald-400 h-8 w-8" />
        ) : (
          <Menu className="text-emerald-400 h-8 w-8" />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-64 bg-zinc-900 border-l border-white/10 z-40 p-8 pt-20"
            >
              <nav className="flex flex-col gap-6">
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-xl font-medium block transition-colors ${
                          isActive ? "text-emerald-400" : "text-white hover:text-emerald-400"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
