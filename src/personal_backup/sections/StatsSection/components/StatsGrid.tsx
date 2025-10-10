import { DailyRoutineCard } from "@/sections/StatsSection/components/DailyRoutineCard";
import { FuturePlanCard } from "@/sections/StatsSection/components/FuturePlanCard";
import { MusicCard } from "@/sections/StatsSection/components/MusicCard";
import { StatsCard } from "@/sections/StatsSection/components/StatsCard";

export const StatsGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-4 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-4 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
      <div className="box-border caret-transparent col-end-[span_1] col-start-[span_1]">
        <DailyRoutineCard />
      </div>
      <div className="box-border caret-transparent col-end-[span_1] col-start-[span_1]">
        <FuturePlanCard />
      </div>
      <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
        <div className="box-border caret-transparent col-end-[span_1] col-start-[span_1]">
          <MusicCard />
        </div>
        <div className="box-border caret-transparent col-end-[span_1] col-start-[span_1]">
          <StatsCard />
        </div>
        <div className="box-border caret-transparent col-end-[span_1] col-start-[span_1]"></div>
      </div>
    </div>
  );
};

