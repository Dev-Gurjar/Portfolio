export const StatsCard = () => {
  return (
    <div className="box-border caret-transparent gap-x-1 flex flex-col h-96 gap-y-1 w-32 p-1 rounded-md">
      <div className="relative bg-blue-500 box-border caret-transparent h-1/5 w-full rounded-md">
        <div className="absolute bg-blue-500 box-border caret-transparent h-4 translate-x-1 -translate-y-2 rotate-45 w-4 left-full top-2/4"></div>
        <div className="absolute bg-blue-500 box-border caret-transparent flex justify-center translate-x-3 translate-y-[-50.0%] w-20 rounded-md left-full top-2/4">
          <div className="relative font-bold box-border caret-transparent px-3 py-2">
            +50
          </div>
        </div>
        <div className="text-lg font-bold items-center box-border caret-transparent flex h-full justify-center leading-7 w-full">
          Books read
        </div>
      </div>
      <div className="relative bg-purple-500 box-border caret-transparent h-1/5 w-full rounded-md">
        <div className="absolute bg-purple-500 box-border caret-transparent h-4 translate-x-1 -translate-y-2 rotate-45 w-4 left-full top-2/4"></div>
        <div className="absolute bg-purple-500 box-border caret-transparent flex justify-center translate-x-3 translate-y-[-50.0%] w-20 rounded-md left-full top-2/4">
          <div className="relative font-bold box-border caret-transparent px-3 py-2">
            +300
          </div>
        </div>
        <div className="text-lg font-bold items-center box-border caret-transparent flex h-full justify-center leading-7 w-full">
          Animes watched
        </div>
      </div>
      <div className="relative bg-red-500 box-border caret-transparent h-1/5 w-full rounded-md">
        <div className="absolute bg-red-500 box-border caret-transparent h-4 translate-x-1 -translate-y-2 rotate-45 w-4 left-full top-2/4"></div>
        <div className="absolute bg-red-500 box-border caret-transparent flex justify-center translate-x-3 translate-y-[-50.0%] w-20 rounded-md left-full top-2/4">
          <div className="relative font-bold box-border caret-transparent px-3 py-2">
            +200
          </div>
        </div>
        <div className="text-lg font-bold items-center box-border caret-transparent flex h-full justify-center leading-7 w-full">
          Movies watched
        </div>
      </div>
      <div className="relative bg-green-500 box-border caret-transparent h-1/5 w-full rounded-md">
        <div className="absolute bg-green-500 box-border caret-transparent h-4 translate-x-1 -translate-y-2 rotate-45 w-4 left-full top-2/4"></div>
        <div className="absolute bg-green-500 box-border caret-transparent flex justify-center translate-x-3 translate-y-[-50.0%] w-20 rounded-md left-full top-2/4">
          <div className="relative font-bold box-border caret-transparent px-3 py-2">
            +20
          </div>
        </div>
        <div className="text-lg font-bold items-center box-border caret-transparent flex h-full justify-center leading-7 w-full">
          Musics learned
        </div>
      </div>
      <div className="relative bg-yellow-500 box-border caret-transparent h-1/5 w-full rounded-md">
        <div className="absolute bg-yellow-500 box-border caret-transparent h-4 translate-x-1 -translate-y-2 rotate-45 w-4 left-full top-2/4"></div>
        <div className="absolute bg-yellow-500 box-border caret-transparent flex justify-center translate-x-3 translate-y-[-50.0%] w-20 rounded-md left-full top-2/4">
          <div className="relative font-bold box-border caret-transparent px-3 py-2">
            +1000
          </div>
        </div>
        <div className="text-lg font-bold items-center box-border caret-transparent flex h-full justify-center leading-7 w-full">
          Kanji learned
        </div>
      </div>
    </div>
  );
};
