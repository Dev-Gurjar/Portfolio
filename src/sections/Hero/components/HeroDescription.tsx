import { FlipWords } from '@/components/ui/shadcn-io/flip-words';
const words = ["Peacful", "Persistant", "Clever", "Curious", "Disciplined"];

export const HeroDescription = () => {
  return (
    <div className="text-neutral-600 text-3xl box-border caret-transparent leading-8 text-center mx-auto md:text-4xl md:leading-10">
      Dev is
      <br className="text-2xl box-border caret-transparent block leading-8 md:text-4xl md:hidden md:leading-10" />
        <FlipWords
          words={words}
          duration={3000}
          className="text-green-300 font-semibold m-0 p-0 pl-4"
          letterDelay={0.05}
          wordDelay={0.3}
      />;
      <br className="text-2xl box-border caret-transparent leading-8 md:text-4xl md:leading-10" />
      <span className="text-2xl box-border caret-transparent hidden leading-8 md:text-4xl md:block md:leading-10">
        Built this website with love ❤️🍕🚀
      </span>
    </div>
  );
};
