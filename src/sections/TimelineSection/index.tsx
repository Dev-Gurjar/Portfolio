import { Timeline } from "@/sections/TimelineSection/components/Timeline";

export const TimelineSection = () => {
  return (
    <div className="box-border caret-transparent max-w-screen-lg w-full mx-auto">
      <div className="bg-zinc-900 box-border caret-transparent max-w-full w-screen px-0 md:px-10">
        <div className="box-border caret-transparent max-w-screen-xl mx-auto px-4 py-20 md:px-10">
          <h2 className="text-lg box-border caret-transparent leading-7 max-w-4xl mb-4 md:text-4xl md:leading-10">
            My journey report
          </h2>
          <p className="text-neutral-300 text-sm box-border caret-transparent leading-5 max-w-sm md:text-base md:leading-6">
            I&#39;ve had the opportunity to develop software across a variety of
            settings — from small side-jobs to large corporation, mostly
            building financial systems. Here&#39;s my timeline of my journey
          </p>
        </div>
        <Timeline />
      </div>
    </div>
  );
};
