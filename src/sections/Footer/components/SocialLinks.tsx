import { motion } from "framer-motion";

export const SocialLinks = () => {
  const socialLinks = [
    { href: "https://www.linkedin.com/in/devendra-gurjar", icon: "icon-8.svg", label: "LinkedIn" },
    { href: "https://github.com/devgurjar", icon: "icon-9.svg", label: "GitHub" },
  ];

  return (
    <div className="box-border caret-transparent gap-x-6 flex gap-y-6">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="text-emerald-400 items-center box-border caret-transparent flex h-9 justify-center leading-6 w-9 border border-emerald-400 rounded-full border-solid hover:text-zinc-900 hover:bg-emerald-400 transition-all"
          aria-label={link.label}
        >
          <img
            src={`https://c.animaapp.com/mgjkw8u78XhUAV/assets/${link.icon}`}
            alt={link.label}
            className="box-border caret-transparent h-4 w-4"
          />
        </motion.a>
      ))}
    </div>
  );
// ...existing code...
};
