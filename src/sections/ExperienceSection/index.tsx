import { ExperienceGrid } from "@/sections/ExperienceSection/components/ExperienceGrid";

export const ExperienceSection = () => {
  return (
    <div className="box-border caret-transparent w-full py-20">
      <h1 className="text-4xl font-bold box-border caret-transparent leading-10 text-center md:text-5xl md:leading-[48px]">
        My&nbsp;
        <span className="text-emerald-400 text-4xl box-border caret-transparent leading-10 md:text-5xl md:leading-[48px]">
          Experience
        </span>
      </h1>
      <ExperienceGrid />
    </div>
  );
};
