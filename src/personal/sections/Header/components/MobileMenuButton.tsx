export const MobileMenuButton = () => {
  return (
    <div className="box-border caret-transparent block min-h-[auto] min-w-[auto] md:hidden md:min-h-0 md:min-w-0">
      <button
        type="button"
        className="items-center bg-transparent caret-transparent flex justify-center text-center p-0"
      >
        <img
          src="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/icon-3.svg"
          alt="Icon"
          className="text-emerald-400 text-[32px] box-border caret-transparent h-8 leading-[64px] w-8"
        />
      </button>
    </div>
  );
};
