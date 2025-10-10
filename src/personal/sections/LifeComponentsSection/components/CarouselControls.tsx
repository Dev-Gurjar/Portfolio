export const CarouselControls = () => {
  return (
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
  );
};
