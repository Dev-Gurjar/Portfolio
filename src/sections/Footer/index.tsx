import { FooterContent } from "./components/FooterContent";
import { SocialLinks } from "./components/SocialLinks";

export const Footer = () => {
  return (
    <footer className="relative box-border caret-transparent w-full pt-12 pb-6 overflow-hidden">
      <div className="absolute box-border caret-transparent h-96 w-full left-0 -bottom-28 pointer-events-none overflow-hidden">
        <img
          alt="grid"
          src="https://c.animaapp.com/mgjkw8u78XhUAV/assets/footer-grid.svg"
          className="box-border caret-transparent h-full max-w-full opacity-40 w-full object-cover"
        />
      </div>
      <div className="relative z-10">
        <FooterContent />
        <div className="relative items-center box-border caret-transparent flex flex-col justify-between gap-y-5 mt-12 md:flex-row">
          <p className="text-sm font-light box-border caret-transparent leading-5 md:text-base md:font-normal md:leading-6">
            Devendra Gurjar
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};
