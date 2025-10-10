import { AnimatedText } from "./AnimatedText";

export const HeroDescription = () => {
  return (
    <div className="text-neutral-600 text-2xl box-border caret-transparent leading-8 text-center mx-auto md:text-4xl md:leading-10">
      Aara is
      <br className="text-2xl box-border caret-transparent block leading-8 md:text-4xl md:hidden md:leading-10" />
      <AnimatedText />
      <br className="text-2xl box-border caret-transparent leading-8 md:text-4xl md:leading-10" />
      <span className="text-2xl box-border caret-transparent hidden leading-8 md:text-4xl md:block md:leading-10">
        Built this website with love ❤️🍕🚀
      </span>
    </div>
  );
};
