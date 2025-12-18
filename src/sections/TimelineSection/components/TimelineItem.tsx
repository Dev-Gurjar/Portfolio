export type TimelineItemProps = {
  year: string;
  description: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
  achievements?: Array<string>;
  scrollProgress?: number;
  itemIndex?: number;
  totalItems?: number;
};

export const TimelineItem = (props: TimelineItemProps) => {
  // Calculate if this item should be "active" based on scroll progress
  const itemProgress =
    props.itemIndex !== undefined && props.totalItems !== undefined
      ? props.itemIndex / (props.totalItems - 1)
      : 0;
  const isActive =
    props.scrollProgress !== undefined
      ? props.scrollProgress >= itemProgress - 0.05
      : true;
  const isPassed =
    props.scrollProgress !== undefined && props.totalItems !== undefined
      ? props.scrollProgress > itemProgress + 1 / (props.totalItems - 1) + 0.05
      : false;

  return (
    <div className="box-border caret-transparent gap-x-[normal] flex justify-start gap-y-[normal] pt-10 md:gap-x-10 md:gap-y-10 md:pt-40">
      <div className="sticky items-center self-start box-border caret-transparent flex flex-col max-w-xs w-auto z-40 top-40 md:flex-row md:max-w-sm md:w-full">
        {/* CIRCLE INDICATOR */}
        <div
          className={`absolute items-center box-border caret-transparent flex h-10 justify-center w-10 rounded-full left-3 transition-all duration-700 ${
            isPassed
              ? "bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 shadow-lg shadow-blue-500/60"
              : isActive
              ? "bg-gradient-to-br from-purple-500 via-pink-500 to-pink-600 scale-125 shadow-2xl shadow-pink-500/80 animate-pulse"
              : "bg-neutral-900 border-2 border-neutral-700"
          }`}
        >
          <div
            className={`box-border caret-transparent h-4 w-4 rounded-full transition-all duration-700 ${
              isActive
                ? "bg-white shadow-lg shadow-white/50"
                : "bg-neutral-800 border-2 border-neutral-700"
            }`}
          ></div>
        </div>
        <h3
          className={`text-xl font-bold box-border caret-transparent hidden leading-7 min-h-0 min-w-0 pl-0 md:text-5xl md:block md:leading-[48px] md:min-h-[auto] md:min-w-[auto] md:pl-20 transition-all duration-700 ${
            isActive ? "text-white scale-105" : "text-neutral-500"
          }`}
        >
          {props.year}
        </h3>
      </div>
      <div className="relative box-border caret-transparent w-full pl-20 pr-4 md:pl-4">
        <h3
          className={`text-2xl font-bold box-border caret-transparent block text-left mb-4 md:hidden transition-all duration-700 ${
            isActive ? "text-white" : "text-neutral-500"
          }`}
        >
          {props.year}
        </h3>
        <div className="box-border caret-transparent">
          <p
            className={`text-xs box-border caret-transparent leading-4 mb-8 md:text-sm md:leading-5 transition-all duration-700 ${
              isActive ? "text-neutral-100" : "text-neutral-500"
            }`}
          >
            {props.description}
          </p>
          {props.achievements && (
            <div className="box-border caret-transparent mb-8">
              {props.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`text-xs items-center box-border caret-transparent gap-x-2 flex leading-4 gap-y-2 mb-2 md:text-sm md:leading-5 transition-all duration-700 ${
                    isActive ? "text-neutral-200" : "text-neutral-400"
                  }`}
                >
                  ✅ {achievement}
                </div>
              ))}
            </div>
          )}
          <div className="box-border caret-transparent grid grid-cols-1 gap-4">
            {props.images.map((image, index) => (
              <div key={index} className="w-full bg-zinc-900/40 rounded-lg overflow-hidden">
                <img
                  alt={image.alt}
                  src={image.src}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src =
                      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80";
                  }}
                  loading="lazy"
                  className={`w-full h-auto block object-contain transition-transform duration-300 hover:scale-105 ${
                    isActive ? "opacity-100" : "opacity-60"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};