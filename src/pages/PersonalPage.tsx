import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { SocialLinks } from "@/sections/Footer/components/SocialLinks";

export const PersonalPage = () => {
  return (
    <div className="app-root text-white text-base min-h-screen">
      <Header />
      <main className="mx-auto max-w-screen-xl">
        <Hero />
      </main>
        <div className="relative items-center box-border caret-transparent flex flex-col justify-between gap-y-5 px-2  pb-12 md:flex-row">
          <p className="text-sm font-light box-border caret-transparent leading-5 md:text-base md:font-normal md:leading-6">
            Devendra Gurjar
          </p>
          <SocialLinks />
        </div>
    </div>
  );
};

