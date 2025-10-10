import { Navigation } from "@/sections/Header/components/Navigation";
import { LanguageButton } from "@/sections/Header/components/LanguageButton";

export const DesktopMenu = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-8 hidden min-h-0 min-w-0 gap-y-8 md:flex md:min-h-[auto] md:min-w-[auto]">
      <Navigation />
      <LanguageButton />
    </div>
  );
};

