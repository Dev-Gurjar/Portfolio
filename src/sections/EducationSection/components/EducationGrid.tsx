export const EducationGrid = () => {
  return (
    <div className="box-border caret-transparent grid grid-cols-[repeat(1,minmax(0px,1fr))] py-10 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
      <div className="relative box-border caret-transparent h-full w-full p-2">
        <div className="relative box-border caret-transparent h-full w-full z-20 border overflow-hidden p-4 rounded-2xl border-solid border-white/20">
          <div className="relative box-border caret-transparent z-50">
            <div className="box-border caret-transparent p-4">
              <h4 className="text-zinc-100 font-bold box-border caret-transparent tracking-[0.4px] mt-4">
                Bachelor of Science in Chemistry
              </h4>
              <div className="text-white/80 text-sm box-border caret-transparent leading-5">
                2022 - Present
              </div>
              <div className="text-emerald-400 items-center box-border caret-transparent gap-x-3 flex justify-end gap-y-3">
                <img
                  src="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-12.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-5 w-5"
                />
                6.88 (Current)
              </div>
              <p className="text-zinc-400 text-sm box-border caret-transparent tracking-[0.35px] leading-5 mt-8">
                Indian Institute Of Technology, Jodhpur
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative box-border caret-transparent h-full w-full p-2">
        <div className="relative box-border caret-transparent h-full w-full z-20 border overflow-hidden p-4 rounded-2xl border-solid border-white/20">
          <div className="relative box-border caret-transparent z-50">
            <div className="box-border caret-transparent p-4">
              <h4 className="text-zinc-100 font-bold box-border caret-transparent tracking-[0.4px] mt-4">
                Senior Secondary (XII)
              </h4>
              <div className="text-white/80 text-sm box-border caret-transparent leading-5">
                2021
              </div>
              <div className="text-emerald-400 items-center box-border caret-transparent gap-x-3 flex justify-end gap-y-3">
                <img
                  src="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-12.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-5 w-5"
                />
                93.87%
              </div>
              <p className="text-zinc-400 text-sm box-border caret-transparent tracking-[0.35px] leading-5 mt-8">
                PSSS
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative box-border caret-transparent h-full w-full p-2">
        <div className="relative box-border caret-transparent h-full w-full z-20 border overflow-hidden p-4 rounded-2xl border-solid border-white/20">
          <div className="relative box-border caret-transparent z-50">
            <div className="box-border caret-transparent p-4">
              <h4 className="text-zinc-100 font-bold box-border caret-transparent tracking-[0.4px] mt-4">
                Secondary (X)
              </h4>
              <div className="text-white/80 text-sm box-border caret-transparent leading-5">
                2019
              </div>
              <div className="text-emerald-400 items-center box-border caret-transparent gap-x-3 flex justify-end gap-y-3">
                <img
                  src="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-12.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-5 w-5"
                />
                79.83%
              </div>
              <p className="text-zinc-400 text-sm box-border caret-transparent tracking-[0.35px] leading-5 mt-8">
                SGAS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
