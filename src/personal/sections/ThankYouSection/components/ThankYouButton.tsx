import { AnimatedBackground } from "@/components/AnimatedBackground";

export const ThankYouButton = () => {
  return (
    <button className="relative text-xl bg-zinc-900 caret-transparent block col-end-auto col-start-auto row-end-auto row-start-auto leading-7 text-center overflow-hidden px-px rounded-[26.88px] md:col-end-[span_2] md:col-start-[span_2] md:row-end-[span_1] md:row-start-[span_1]">
      <div className="absolute box-border caret-transparent rounded-[26.88px] inset-0">
        <img
          src="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/icon-20.svg"
          alt="Icon"
          className="absolute box-border caret-transparent h-full w-full"
        />
        <div className="absolute box-border caret-transparent translate-x-[-27.514px] translate-y-[472.08px] left-0 top-0">
          <div className="bg-[radial-gradient(rgb(0,255,153)_40%,rgba(0,0,0,0)_60%)] box-border caret-transparent h-20 opacity-80 w-20"></div>
        </div>
      </div>
      <div className="relative text-sm items-center backdrop-blur-xl bg-transparent box-border caret-transparent flex basis-[0%] grow h-full justify-center leading-5 w-full border border-slate-800 p-2 rounded-[26.88px] border-solid">
        <AnimatedBackground />
      </div>
    </button>
  );
};
