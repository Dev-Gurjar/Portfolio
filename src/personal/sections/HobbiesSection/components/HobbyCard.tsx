export type HobbyCardProps = {
  variant: string;
  title: string;
  description: string;
  singleImage?: string;
  multipleImages?: string[];
  videoUrl?: string;
  videoThumbnail?: string;
  videoIcon?: string;
};

export const HobbyCard = (props: HobbyCardProps) => {
  return (
    <div
      className={`relative box-border caret-transparent col-end-[span_1] col-start-[span_1] h-[600px] max-h-[600px] overflow-hidden p-4 border-solid md:p-8 ${props.variant} group hover:border-emerald-400 transition-all duration-300`}
    >
      <p className="text-xl box-border caret-transparent tracking-[-0.5px] leading-7 max-w-screen-lg text-left mx-auto md:text-2xl md:tracking-[-0.6px] md:leading-[33px] group-hover:text-emerald-400 transition-colors duration-300">
        {props.title}
      </p>
      <p className="text-neutral-300 text-sm box-border caret-transparent leading-5 max-w-sm text-left my-2">
        {props.description}
      </p>
      <div className="box-border caret-transparent h-full w-full">
        {props.variant ===
          "border-neutral-800 border-r-0 border-b md:col-end-[span_4] md:col-start-[span_4] md:border-r" && (
          <div className="relative box-border caret-transparent flex gap-x-10 h-full gap-y-10 px-2 py-8">
            <div className="bg-zinc-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.25)_0px_25px_50px_-12px] box-border caret-transparent h-full w-full mx-auto p-5">
              <div className="box-border caret-transparent flex basis-[0%] flex-col grow h-full w-full">
                <img
                  alt="header"
                  src={props.singleImage}
                  className="text-transparent box-border max-w-full object-cover aspect-square h-full object-[0%_0%] w-full rounded-bl rounded-br rounded-tl rounded-tr"
                />
              </div>
            </div>
            <div className="box-border caret-transparent absolute bg-[linear-gradient(to_top,rgb(0,0,0),rgb(0,0,0),rgba(0,0,0,0))] h-60 w-full z-40 bottom-0 inset-x-0"></div>
            <div className="absolute box-border caret-transparent bg-[linear-gradient(rgb(0,0,0),rgba(0,0,0,0),rgba(0,0,0,0))] h-60 w-full z-40 top-0 inset-x-0"></div>
          </div>
        )}

        {props.variant ===
          "border-neutral-800 border-b md:col-end-[span_2] md:col-start-[span_2]" && (
          <div className="relative box-border caret-transparent flex items-start gap-x-10 flex-col h-full gap-y-10 overflow-hidden p-8">
            <div className="box-border caret-transparent flex -ml-20">
              <div className="box-border caret-transparent bg-neutral-800 shrink-0 rotate-[5.445665867851552deg] border border-neutral-700 overflow-hidden -mr-4 mt-4 p-1 rounded-xl border-solid">
                <img
                  alt="bali images"
                  src={props.multipleImages?.[0]}
                  className="text-transparent aspect-[auto_500_/_500] box-border shrink-0 h-20 max-w-full object-cover w-20 rounded-lg md:h-40 md:w-40"
                />
              </div>
              <div className="bg-neutral-800 box-border caret-transparent shrink-0 rotate-[8.842223445758616deg] border border-neutral-700 overflow-hidden -mr-4 mt-4 p-1 rounded-xl border-solid">
                <img
                  alt="bali images"
                  src={props.multipleImages?.[1]}
                  className="text-transparent aspect-[auto_500_/_500] box-border shrink-0 h-20 max-w-full object-cover w-20 rounded-lg md:h-40 md:w-40"
                />
              </div>
              <div className="bg-neutral-800 box-border caret-transparent shrink-0 rotate-[6.794462139509612deg] border border-neutral-700 overflow-hidden -mr-4 mt-4 p-1 rounded-xl border-solid">
                <img
                  alt="bali images"
                  src={props.multipleImages?.[2]}
                  className="text-transparent aspect-[auto_500_/_500] box-border shrink-0 h-20 max-w-full object-cover w-20 rounded-lg md:h-40 md:w-40"
                />
              </div>
              <div className="bg-neutral-800 box-border caret-transparent shrink-0 rotate-[9.483930235820173deg] border border-neutral-700 overflow-hidden -mr-4 mt-4 p-1 rounded-xl border-solid">
                <img
                  alt="bali images"
                  src={props.multipleImages?.[3]}
                  className="text-transparent aspect-[auto_500_/_500] box-border shrink-0 h-20 max-w-full object-cover w-20 rounded-lg md:h-40 md:w-40"
                />
              </div>
              <div className="bg-neutral-800 box-border caret-transparent shrink-0 rotate-[-4.871320708486523deg] border border-neutral-700 overflow-hidden -mr-4 mt-4 p-1 rounded-xl border-solid">
                <img
                  alt="bali images"
                  src={props.multipleImages?.[4]}
                  className="text-transparent aspect-[auto_500_/_500] box-border shrink-0 h-20 max-w-full object-cover w-20 rounded-lg md:h-40 md:w-40"
                />
              </div>
            </div>
            <div className="box-border caret-transparent flex">
              <div className="bg-neutral-800 box-border caret-transparent shrink-0 rotate-[0.16233462818271543deg] border border-neutral-700 overflow-hidden -mr-4 mt-4 p-1 rounded-xl border-solid">
                <img
                  alt="bali images"
                  src={props.multipleImages?.[0]}
                  className="text-transparent aspect-[auto_500_/_500] box-border shrink-0 h-20 max-w-full object-cover w-20 rounded-lg md:h-40 md:w-40"
                />
              </div>
              <div className="bg-neutral-800 box-border caret-transparent shrink-0 rotate-[-5.23437694493001deg] border border-neutral-700 overflow-hidden -mr-4 mt-4 p-1 rounded-xl border-solid">
                <img
                  alt="bali images"
                  src={props.multipleImages?.[1]}
                  className="text-transparent aspect-[auto_500_/_500] box-border shrink-0 h-20 max-w-full object-cover w-20 rounded-lg md:h-40 md:w-40"
                />
              </div>
              <div className="bg-neutral-800 box-border caret-transparent shrink-0 rotate-[4.398011920646012deg] border border-neutral-700 overflow-hidden -mr-4 mt-4 p-1 rounded-xl border-solid">
                <img
                  alt="bali images"
                  src={props.multipleImages?.[2]}
                  className="text-transparent aspect-[auto_500_/_500] box-border shrink-0 h-20 max-w-full object-cover w-20 rounded-lg md:h-40 md:w-40"
                />
              </div>
              <div className="bg-neutral-800 box-border caret-transparent shrink-0 rotate-[7.048242990049121deg] border border-neutral-700 overflow-hidden -mr-4 mt-4 p-1 rounded-xl border-solid">
                <img
                  alt="bali images"
                  src={props.multipleImages?.[3]}
                  className="text-transparent aspect-[auto_500_/_500] box-border shrink-0 h-20 max-w-full object-cover w-20 rounded-lg md:h-40 md:w-40"
                />
              </div>
              <div className="bg-neutral-800 box-border caret-transparent shrink-0 rotate-[-9.949959382041062deg] border border-neutral-700 overflow-hidden -mr-4 mt-4 p-1 rounded-xl border-solid">
                <img
                  alt="bali images"
                  src={props.multipleImages?.[4]}
                  className="text-transparent aspect-[auto_500_/_500] box-border shrink-0 h-20 max-w-full object-cover w-20 rounded-lg md:h-40 md:w-40"
                />
              </div>
            </div>
            <div className="absolute box-border caret-transparent bg-[linear-gradient(to_right,rgb(0,0,0),rgba(0,0,0,0))] h-full w-20 z-[100] left-0 inset-y-0"></div>
            <div className="absolute bg-[linear-gradient(to_left,rgb(0,0,0),rgba(0,0,0,0))] box-border caret-transparent h-full w-20 z-[100] right-0 inset-y-0"></div>
          </div>
        )}

        {props.variant ===
          "border-gray-200 border-r-0 md:col-end-[span_3] md:col-start-[span_3] md:border-r" && (
          <a
            href={props.videoUrl}
            className="relative box-border caret-transparent gap-x-10 flex h-full gap-y-10"
          >
            <div className="box-border caret-transparent h-full w-full mx-auto">
              <div className="relative box-border caret-transparent flex basis-[0%] flex-col grow h-full w-full">
                <img
                  src={props.videoIcon}
                  alt="Icon"
                  className="absolute text-red-500 box-border caret-transparent h-20 w-20 z-10 m-auto inset-0"
                />
                <img
                  alt="header"
                  src={props.videoThumbnail}
                  className="text-transparent aspect-square box-border h-full max-w-full object-cover w-full mt-2 rounded-bl rounded-br rounded-tl rounded-tr"
                />
              </div>
            </div>
          </a>
        )}

        {props.variant ===
          "border-gray-200 border-b md:col-end-[span_3] md:col-start-[span_3] md:border-b-0 md:border-none" && (
          <div className="relative box-border caret-transparent flex items-center flex-col h-60 mt-10">
            <img
              src={props.singleImage}
              className="absolute aspect-square box-border caret-transparent h-[600px] max-w-full w-[600px] -right-10 -bottom-80 md:-bottom-72"
            />
          </div>
        )}
      </div>
    </div>
  );
};
