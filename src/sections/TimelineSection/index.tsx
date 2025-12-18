import React from "react";
import { Timeline } from "@/sections/TimelineSection/components/Timeline";

export const TimelineSection: React.FC = () => {
  return (
    <div className="box-border caret-transparent max-w-screen-lg w-full mx-auto">
      <div className="bg-zinc-900 box-border caret-transparent max-w-full w-screen px-0 md:px-10">
        <div className="box-border caret-transparent max-w-screen-xl mx-auto px-4 py-20 md:px-10">
          <h2 className="text-lg box-border caret-transparent leading-7 max-w-4xl mb-4 md:text-4xl md:leading-10">
            My journey report
          </h2>
          <p className="text-neutral-300 text-sm box-border caret-transparent mx-auto leading-5 max-w-lg md:text-base md:leading-6">
            I've had the opportunity to develop software across a variety of
            settings — from academic projects to professional internships,
            building ML pipelines, web systems, and AI agents. Here's the timeline
            of my journey from 2022 to present.
          </p>
        </div>

        <Timeline />
      </div>
    </div>
  );
};

export default TimelineSection;
