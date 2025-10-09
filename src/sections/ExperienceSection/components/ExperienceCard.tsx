export type ExperienceCardProps = {
  iconSrc: string;
  iconAlt: string;
  variant: string;
  experienceImageSrc: string;
  experienceImageAlt: string;
  title: string;
  description: string;
};

export const ExperienceCard = (props: ExperienceCardProps) => {
  return (
    <button className="relative text-xl bg-zinc-900 caret-transparent block col-end-auto col-start-auto row-end-auto row-start-auto leading-7 text-center overflow-hidden px-px rounded-[26.88px] md:col-end-[span_2] md:col-start-[span_2] md:row-end-[span_1] md:row-start-[span_1]">
      <div className="absolute box-border caret-transparent rounded-[26.88px] inset-0">
        <img
          src={props.iconSrc}
          alt={props.iconAlt}
          className="absolute box-border caret-transparent h-full w-full"
        />
        <div
          className={`absolute box-border caret-transparent left-0 top-0 ${props.variant}`}
        >
          <div className="bg-[radial-gradient(rgb(0,255,153)_40%,rgba(0,0,0,0)_60%)] box-border caret-transparent h-20 opacity-80 w-20"></div>
        </div>
      </div>
      <div className="relative text-sm items-center backdrop-blur-xl bg-transparent box-border caret-transparent flex basis-[0%] grow h-full justify-center leading-5 w-full border border-slate-800 rounded-[26.88px] border-solid">
        <div className="[align-items:normal] box-border caret-transparent gap-x-2 flex flex-col gap-y-2 px-3 py-6 md:items-center md:flex-row md:p-10">
          <img
            alt={props.experienceImageAlt}
            src={props.experienceImageSrc}
            className="text-transparent aspect-[auto_128_/_128] box-border max-w-full w-16 md:w-32"
          />
          <div className="box-border caret-transparent ml-0 md:ml-5">
            <h1 className="text-xl font-bold box-border caret-transparent leading-7 text-start md:text-2xl md:leading-8">
              {props.title}
            </h1>
            <p className="font-semibold box-border caret-transparent text-start mt-3">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};
