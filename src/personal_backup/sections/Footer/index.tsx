import { FooterContent } from "@/sections/Footer/components/FooterContent";

export const Footer = () => {
  return (
    <footer className="relative box-border caret-transparent w-full pt-12 pb-6 overflow-hidden">
      <div className="absolute box-border caret-transparent min-h-72 w-full left-0 -bottom-28 overflow-hidden pointer-events-none">
        <img
          src="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/footer-grid.svg"
          alt="grid"
          className="box-border caret-transparent h-full max-w-full opacity-40 w-full object-cover"
        />
      </div>
      <div className="relative z-10">
        <FooterContent />
      </div>
    </footer>
  );
};

