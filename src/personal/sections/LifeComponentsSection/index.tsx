import { ComponentsCarousel } from "./components/ComponentsCarousel";

export const LifeComponentsSection = () => {
  return (
    <div className="box-border caret-transparent max-w-full w-screen">
      <h2 className="text-neutral-200 text-xl font-bold box-border caret-transparent leading-7 mx-auto pl-4 md:text-5xl md:leading-[48px]">
        Components of Aara&#39;s Life
      </h2>
      <div className="relative box-border caret-transparent w-full">
        <ComponentsCarousel />
        <div className="box-border caret-transparent gap-x-2 flex justify-end gap-y-2 mr-10">
          <button className="relative items-center bg-gray-100 caret-transparent flex h-10 justify-center opacity-50 text-center w-10 z-40 p-0 rounded-full">
            <img
              src="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/icon-10.svg"
              alt="Icon"
              className="text-gray-500 box-border caret-transparent h-6 w-6"
            />
          </button>
          <button className="relative items-center bg-gray-100 caret-transparent flex h-10 justify-center opacity-50 text-center w-10 z-40 p-0 rounded-full">
            <img
              src="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/icon-11.svg"
              alt="Icon"
              className="text-gray-500 box-border caret-transparent h-6 w-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
