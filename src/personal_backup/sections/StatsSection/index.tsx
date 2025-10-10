import { StatsGrid } from "./components/StatsGrid";

export const StatsSection = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-4 flex flex-col gap-y-4 mt-20 p-4">
      <div className="absolute box-border caret-transparent min-h-full w-full left-0 top-0">
        <img
          src="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/footer-grid.svg"
          alt="grid"
          className="box-border caret-transparent h-full max-w-full opacity-50 w-full"
        />
      </div>
      <div className="relative box-border caret-transparent flex justify-center z-10">
        <StatsGrid />
      </div>
    </div>
  );
};
