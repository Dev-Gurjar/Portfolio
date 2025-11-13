import React, { useRef } from "react";

type LifeCard = {
  id: string;
  smallTitle: string;
  largeTitle: string;
  image?: string;
};

const ITEMS: LifeCard[] = [
  { id: "it", smallTitle: "Computer, IT", largeTitle: "Interest, Work", image: "https://c.animaapp.com/mgjqlkw0gfKBVk/assets/15.jpg" },
  { id: "music", smallTitle: "Music", largeTitle: "Musical Instruments, Band", image: "https://c.animaapp.com/mgjqlkw0gfKBVk/assets/9.jpg" },
  { id: "fitness", smallTitle: "Fitness", largeTitle: "Sports, Gym", image: "https://c.animaapp.com/mgjqlkw0gfKBVk/assets/16.jpg" },
  { id: "books", smallTitle: "Books", largeTitle: "Fiction Novels", image: "https://c.animaapp.com/mgjqlkw0gfKBVk/assets/18.jpg" },
  { id: "langs", smallTitle: "Languages", largeTitle: "Foreign Languages", image: "https://c.animaapp.com/mgjqlkw0gfKBVk/assets/19.jpg" },
];

const ComponentsOfLife: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByPage = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.8); // scroll by 80% of visible width
    el.scrollBy({ left: direction === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="w-full h-full">
      <div className="max-w-screen-xl px-4">
        <h2 className="text-neutral-200 text-left text-xl font-bold pl-1 md:text-4xl md:pl-0">
          Components of Dev's Life
        </h2>

        <div className="relative my-12">
          {/* scroller */}
          <div
            ref={scrollerRef}
            className="flex gap-4 overflow-x-auto whitespace-nowrap  scroll-smooth hide-scrollbar py-6"
            role="list"
            aria-label="Components of life"
          >
            {ITEMS.map((item) => (
              <button
                key={item.id}
                role="listitem"
                className="relative inline-block flex-shrink-0 w-56 md:w-96 md:h-[28rem] rounded-2xl overflow-hidden text-left"
                aria-label={`${item.largeTitle}`}
                onClick={() => {
                  /* optional: handle click */
                }}
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.largeTitle}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

                <div className="relative z-10   ">
                  <p className="text-sm font-medium">{item.smallTitle}</p>
                  <p className="text-lg md:text-2xl font-semibold mt-2">{item.largeTitle}</p>
                </div>
              </button>
            ))}
          </div>

          {/* controls */}
          <div className="absolute right-3 bottom-2 transform -translate-y-1/2 flex gap-2">
            <button
              type="button"
              onClick={() => scrollByPage("left")}
              aria-label="Scroll left"
              className="h-10 w-10 rounded-full bg-gray-100/80 flex items-center justify-center"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scrollByPage("right")}
              aria-label="Scroll right"
              className="h-10 w-10 rounded-full bg-gray-100/80 flex items-center justify-center"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentsOfLife;
