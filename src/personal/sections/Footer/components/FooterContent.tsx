import { SocialLinks } from "@/sections/Footer/components/SocialLinks";

export const FooterContent = () => {
  return (
    <div className="relative items-center box-border caret-transparent flex flex-col justify-between gap-y-5 z-10 mt-6 md:flex-row md:items-center md:justify-between">
      <p className="text-sm font-light box-border caret-transparent leading-5 md:text-base md:font-normal md:leading-6 text-center md:text-left">
        Radnaabazar Bulgan
      </p>
      <div className="mt-2 md:mt-0">
        <SocialLinks />
      </div>
    </div>
  );
};

