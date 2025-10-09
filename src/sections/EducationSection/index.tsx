import { EducationGrid } from "./components/EducationGrid";

export const EducationSection = () => {
  return (
    <div className="relative items-center box-border caret-transparent flex flex-col justify-center overflow-hidden px-5 md:px-10">
      <div className="box-border caret-transparent max-w-screen-xl w-full mx-auto">
        <div className="box-border caret-transparent max-w-screen-lg mt-32 mx-auto px-8">
          <h1 className="text-4xl font-bold items-center box-border caret-transparent flex justify-center leading-10 text-center md:text-5xl md:leading-[48px]">
            <img
              src="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-11.svg"
              alt="Icon"
              className="text-emerald-400 text-4xl box-border caret-transparent h-9 leading-10 w-9 md:text-5xl md:h-12 md:leading-[48px] md:w-12"
            />
            <div className="text-4xl box-border caret-transparent leading-10 md:text-5xl md:leading-[48px]">
              <span className="text-4xl box-border caret-transparent leading-10 md:text-5xl md:leading-[48px]">
                Education
              </span>
            </div>
          </h1>
          <EducationGrid />
        </div>
      </div>
    </div>
  );
};
