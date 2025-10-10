export const MusicCard = () => {
  return (
    <div className="bg-[linear-gradient(to_left_bottom,rgb(199,210,254),rgb(79,70,229))] box-border caret-transparent flex flex-col h-60 w-full p-4 rounded-3xl md:w-72">
      <div className="relative box-border caret-transparent flex basis-[0%] flex-col grow justify-between">
        <div className="box-border caret-transparent flex">
          <div className="box-border caret-transparent basis-[0%] grow">
            <img
              src="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/kiki.jpg"
              alt="Album Pic"
              className="box-border caret-transparent h-20 max-w-full w-20 rounded-2xl"
            />
          </div>
          <div className="box-border caret-transparent gap-x-1 flex flex-wrap h-fit justify-center gap-y-1 w-12">
            <img
              src="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/icon-14.svg"
              alt="Icon"
              className="box-border caret-transparent hidden h-4 w-4"
            />
            <img
              src="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/icon-15.svg"
              alt="Icon"
              className="box-border caret-transparent hidden h-3.5 w-3.5"
            />
            <img
              src="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/icon-16.svg"
              alt="Icon"
              className="box-border caret-transparent hidden h-[18px] w-[18px]"
            />
          </div>
        </div>
        <p
          title="The Merry-Go-Round of Life"
          className="text-lg font-bold box-border caret-transparent flow-root leading-[18px] w-full overflow-hidden"
        >
          The Merry-Go-Round of Life
        </p>
        <p
          title="Howl's Moving Castle"
          className="text-indigo-300 text-xs font-semibold box-border caret-transparent flow-root leading-3 overflow-hidden -mt-6"
        >
          Howl&#39;s Moving Castle
        </p>
      </div>
      <div className="items-center box-border caret-transparent flex justify-center mt-2">
        <div className="box-border caret-transparent">
          <img
            src="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/icon-17.svg"
            alt="Icon"
            className="box-border caret-transparent h-[25px] w-[25px]"
          />
        </div>
        <div className="box-border caret-transparent">
          <img
            src="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/icon-18.svg"
            alt="Icon"
            className="box-border caret-transparent h-[25px] w-[25px]"
          />
        </div>
        <div className="box-border caret-transparent">
          <img
            src="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/icon-19.svg"
            alt="Icon"
            className="box-border caret-transparent h-[25px] w-[25px]"
          />
        </div>
      </div>
    </div>
  );
};
