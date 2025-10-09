import { Logo } from "@/sections/Header/components/Logo";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";

export const Navbar = () => {
  return (
    <div className="items-center box-border caret-transparent flex justify-between max-w-none w-full mx-auto px-[15px] md:max-w-[1200px]">
      <Logo />
      <DesktopNav />
      <MobileMenuButton />
    </div>
  );
};
