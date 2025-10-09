import { FooterContent } from "./components/FooterContent";
import { SocialLinks } from "./components/SocialLinks";

export const Footer = () => {
  return (
    <footer className="relative box-border caret-transparent w-full pt-20 pb-10 overflow-hidden">
      <div className="absolute box-border caret-transparent h-full w-full left-0 bottom-26 ">
        <img
          alt="grid"
          src="https://c.animaapp.com/mgjkw8u78XhUAV/assets/footer-grid.svg"
          className="box-border caret-transparent h-full max-w-full opacity-50 w-full"
        />
      </div>
      <FooterContent />
      <div className="relative items-center box-border caret-transparent flex flex-col justify-between gap-y-5 z-10 mt-16 md:flex-row">
        <p className="text-sm font-light box-border caret-transparent leading-5 md:text-base md:font-normal md:leading-6">
          Devendra Gurjar
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
};
