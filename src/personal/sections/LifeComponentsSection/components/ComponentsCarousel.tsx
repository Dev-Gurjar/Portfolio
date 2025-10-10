import { CarouselItem } from "./CarouselItem";

export const ComponentsCarousel = () => {
  return (
    <div className="box-border caret-transparent flex overflow-x-scroll overflow-y-auto scroll-smooth w-full py-10 md:py-20">
      <div className="absolute box-border caret-transparent w-[5%] z-[1000] overflow-hidden right-0"></div>
      <div className="box-border caret-transparent gap-x-4 flex justify-start max-w-screen-xl gap-y-4 mx-auto pl-4">
        <CarouselItem
          title="Computer, IT"
          subtitle="Interest, Work"
          imageUrl="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/15.jpg"
          imageVariant="md:blur-sm"
        />
        <CarouselItem
          title="Music"
          subtitle="Musical Instruments, Band"
          imageUrl="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/9.jpg"
        />
        <CarouselItem
          title="Fitness"
          subtitle="Sports, Gym"
          imageUrl="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/16.jpg"
        />
        <CarouselItem
          title="Books"
          subtitle="Fiction Novels"
          imageUrl="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/18.jpg"
        />
        <CarouselItem
          title="Foreign Languages"
          subtitle="Foreign Languages"
          imageUrl="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/19.jpg"
          containerVariant="pr-[5%] md:pr-[33%]"
        />
      </div>
    </div>
  );
};
