export type CarouselItemProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageVariant?: string;
  containerVariant?: string;
};

export const CarouselItem = (props: CarouselItemProps) => {
  return (
    <div
      className={`box-border caret-transparent rounded-3xl ${props.containerVariant || ""}`}
    >
      <button className="relative items-start bg-zinc-900 caret-transparent flex flex-col h-80 justify-start text-center w-56 z-10 overflow-hidden p-0 rounded-3xl md:h-[640px] md:w-96 hover:scale-105 transition-transform duration-300 group">
        <div className="absolute bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0),rgba(0,0,0,0))] box-border caret-transparent h-full z-30 top-0 inset-x-0"></div>
        <div className="relative box-border caret-transparent z-40 p-8">
          <p className="text-sm font-medium box-border caret-transparent leading-5 text-left md:text-base md:leading-6">
            {props.title}
          </p>
          <p className="text-xl font-semibold box-border caret-transparent leading-7 max-w-xs text-left mt-2 md:text-3xl md:leading-9">
            {props.subtitle}
          </p>
        </div>
        <img
          alt={props.subtitle}
          sizes="100vw"
          src={props.imageUrl}
          className={`absolute text-transparent box-border blur-0 h-full max-w-full object-cover w-full z-10 inset-0 ${props.imageVariant || ""} group-hover:scale-110 transition-transform duration-500`}
        />
      </button>
    </div>
  );
};
