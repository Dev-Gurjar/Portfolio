export const AnimatedBackground = () => {
  return (
    <div className="relative items-center bg-[linear-gradient(rgb(10,10,10),rgb(38,38,38))] box-border gap-x-4 flex flex-col h-96 justify-center gap-y-4 w-full overflow-hidden md:h-[640px]">
      <div className="absolute inset-0 -z-10 opacity-30"></div>
      <h2 className="relative text-2xl font-bold tracking-[-0.6px] leading-8 z-20 md:text-7xl md:tracking-[-1.8px] md:leading-[72px]">
        For visiting my profile
        <br />
        <div className="relative text-2xl inline-block tracking-[-0.6px] leading-8 w-max mx-auto md:text-7xl md:tracking-[-1.8px] md:leading-[72px]">
          <div className="absolute text-transparent text-2xl bg-clip-text bg-[linear-gradient(to_right,rgb(168,85,247),rgb(139,92,246),rgb(236,72,153))] bg-no-repeat tracking-[-0.6px] leading-8 py-4 left-0 top-px md:text-7xl md:tracking-[-1.8px] md:leading-[72px]">
            <span>Thank you.</span>
          </div>
          <div className="relative text-transparent text-2xl bg-clip-text bg-[linear-gradient(to_right,rgb(168,85,247),rgb(139,92,246),rgb(236,72,153))] bg-no-repeat tracking-[-0.6px] leading-8 py-4 md:text-7xl md:tracking-[-1.8px] md:leading-[72px]">
            <span>Thank you.</span>
          </div>
        </div>
      </h2>
      <div className="absolute bg-neutral-100 shadow-lg w-full bottom-0 inset-x-0" />
    </div>
  );
};

export default AnimatedBackground;
