export const HeroButton = () => {
  return (
    <button className="relative text-black bg-white/100 caret-transparent flex justify-center text-center overflow-hidden px-4 py-2 rounded-md group hover:scale-105 transition-transform duration-300">
      <span className="box-border caret-transparent block group-hover:translate-x-40 transition-transform duration-500">Write a Letter</span>
      <div className="absolute text-white items-center box-border caret-transparent flex justify-center -translate-x-40 group-hover:translate-x-0 transition-transform duration-500 z-20 inset-0">
        ✉️
      </div>
    </button>
  );
};