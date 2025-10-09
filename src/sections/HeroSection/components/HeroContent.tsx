import { HeroText } from "./HeroText";
import { HeroImage } from "./HeroImage";

export const HeroContent = () => {
  return (
    <div className="items-center box-border caret-transparent flex flex-col justify-between py-0 md:flex-row md:pt-8 md:pb-24">
      <HeroText />
      <HeroImage />
    </div>
  );
};
