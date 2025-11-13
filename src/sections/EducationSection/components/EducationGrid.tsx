export const EducationGrid = () => {
  return (
    <div className="box-border caret-transparent py-10">
      {/* Responsive grid: 1 col on mobile, 3 cols on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* card 1 */}
        <article className="relative flex flex-col justify-between min-h-[220px] p-6 rounded-2xl border border-white/20 bg-black/20 backdrop-blur-sm overflow-hidden transition-transform hover:scale-[1.02]">
          <header>
            <h4 className="text-zinc-100 font-bold tracking-[0.4px]">Bachelor of Science in Chemistry</h4>
            <div className="text-white/80 text-sm mt-1">2022 - Present</div>
          </header>

          {/* centered stat */}
          <div className="flex flex-col items-center mt-6">
            <div className="flex items-center gap-3">
              <img
                src="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-12.svg"
                alt="score icon"
                className="h-5 w-5"
              />
              <span className="text-emerald-400 font-semibold text-lg">6.88 *Current</span>
            </div>
            <div className="text-zinc-400 text-sm mt-3"> CGPA</div>
          </div>

          <footer className="mt-6 text-zinc-400 text-sm">Indian Institute Of Technology, Jodhpur</footer>
        </article>

        {/* card 2 */}
        <article className="relative flex flex-col justify-between min-h-[220px] p-6 rounded-2xl border border-white/20 bg-black/20 backdrop-blur-sm overflow-hidden transition-transform hover:scale-[1.02]">
          <header>
            <h4 className="text-zinc-100 font-bold tracking-[0.4px]">Senior Secondary (XII)</h4>
            <div className="text-white/80 text-sm mt-1">2021</div>
          </header>

          <div className="flex flex-col items-center mt-6">
            <div className="flex items-center gap-3">
              <img
                src="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-12.svg"
                alt="score icon"
                className="h-5 w-5"
              />
              <span className="text-emerald-400 font-semibold text-lg">93.87%</span>
            </div>
            <div className="text-zinc-400 text-sm mt-3">Aggregate Percentage</div>
          </div>

          <footer className="mt-6 text-zinc-400 text-sm">PSSS</footer>
        </article>

        {/* card 3 */}
        <article className="relative flex flex-col justify-between min-h-[220px] p-6 rounded-2xl border border-white/20 bg-black/20 backdrop-blur-sm overflow-hidden transition-transform hover:scale-[1.02]">
          <header>
            <h4 className="text-zinc-100 font-bold tracking-[0.4px]">Secondary (X)</h4>
            <div className="text-white/80 text-sm mt-1">2019</div>
          </header>

          <div className="flex flex-col items-center mt-6">
            <div className="flex items-center gap-3">
              <img
                src="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-12.svg"
                alt="score icon"
                className="h-5 w-5"
              />
              <span className="text-emerald-400 font-semibold text-lg">79.83%</span>
            </div>
            <div className="text-zinc-400 text-sm mt-3">Aggregate Percentage</div>
          </div>

          <footer className="mt-6 text-zinc-400 text-sm">SGAS</footer>
        </article>
      </div>
    </div>
  );
};
