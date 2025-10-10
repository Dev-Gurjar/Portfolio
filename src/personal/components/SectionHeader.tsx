export const SectionHeader = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="px-8">
      <h4 className="text-3xl font-medium tracking-[-0.75px] leading-9 max-w-screen-lg text-center mx-auto md:text-5xl md:tracking-[-1.2px] md:leading-[60px]">
        {children}
      </h4>
      <p className="text-neutral-300 text-sm leading-5 max-w-2xl text-center mx-auto my-4 md:text-base md:leading-6">
        I like to stay active. New hobbies are added almost every year.
      </p>
    </div>
  );
};

export default SectionHeader;
