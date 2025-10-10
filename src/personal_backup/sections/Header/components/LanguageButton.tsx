export const LanguageButton = () => {
  return (
    <button
      type="button"
      className="text-zinc-900 font-semibold items-center bg-emerald-400 caret-transparent inline-flex h-11 justify-center leading-6 min-h-0 min-w-0 text-center text-nowrap px-6 py-0 rounded-full md:flex md:min-h-[auto] md:min-w-[auto] hover:bg-emerald-500 hover:scale-105 transition-all duration-300"
    >
      <img
        src="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/icon-1.svg"
        alt="Icon"
        className="box-border caret-transparent h-6 text-nowrap w-6 mr-2"
      />
      English
      <img
        src="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/icon-2.svg"
        alt="Icon"
        className="box-border caret-transparent h-4 text-nowrap w-4"
      />
    </button>
  );
};
