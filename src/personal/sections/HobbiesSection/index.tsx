import { SectionHeader } from "../../components/SectionHeader";
import { HobbiesGrid } from "./components/HobbiesGrid";

export const HobbiesSection = () => {
  return (
    <div className="relative box-border caret-transparent max-w-screen-xl z-20 mx-auto py-10 md:py-40">
      <SectionHeader />
      <div className="relative box-border caret-transparent">
        <HobbiesGrid />
      </div>
    </div>
  );
};
