import { AnimatedName } from "./AnimatedName";

export const HeroTitle = () => {
  return (
    <h1 className="relative text-transparent text-4xl font-semibold bg-clip-text bg-[linear-gradient(rgb(38,38,38),rgb(255,255,255))] box-border leading-10 max-w-screen-xl text-center z-20 mt-6 mx-auto py-6 md:text-7xl md:leading-[72px]">
      Hello again?
      <br className="text-4xl box-border leading-10 md:text-7xl md:leading-[72px]" />
      My nickname is
      <AnimatedName />
    </h1>
  );
};
