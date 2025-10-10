export const DailyRoutineCard = () => {
  return (
    <div className="bg-emerald-400/20 box-border caret-transparent w-full p-4 rounded-3xl md:w-72">
      <div className="items-center box-border caret-transparent flex justify-between">
        <p className="font-bold box-border caret-transparent">Daily routine</p>
        <img
          src="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/icon-12.svg"
          alt="Icon"
          className="box-border caret-transparent h-5 w-5 mt-1"
        />
      </div>
      <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2 mt-3">
        <div className="items-center box-border caret-transparent flex justify-between">
          <div className="tabular-nums box-border caret-transparent flex-col justify-start">
            <p className="font-bold box-border caret-transparent">6:00 AM</p>
            <p className="text-xs font-medium box-border caret-transparent leading-4">
              Wake up
            </p>
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex justify-between">
          <div className="tabular-nums box-border caret-transparent flex-col justify-start">
            <p className="font-bold box-border caret-transparent">8:00 AM</p>
            <p className="text-xs font-medium box-border caret-transparent leading-4">
              School/Work
            </p>
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex justify-between">
          <div className="tabular-nums box-border caret-transparent flex-col justify-start">
            <p className="font-bold box-border caret-transparent">5:00 PM</p>
            <p className="text-xs font-medium box-border caret-transparent leading-4">
              Gym
            </p>
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex justify-between">
          <div className="tabular-nums box-border caret-transparent flex-col justify-start">
            <p className="font-bold box-border caret-transparent">6:00 PM</p>
            <p className="text-xs font-medium box-border caret-transparent leading-4">
              Read books
            </p>
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex justify-between">
          <div className="tabular-nums box-border caret-transparent flex-col justify-start">
            <p className="font-bold box-border caret-transparent">7:00 PM</p>
            <p className="text-xs font-medium box-border caret-transparent leading-4">
              Piano &amp; Music
            </p>
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex justify-between">
          <div className="tabular-nums box-border caret-transparent flex-col justify-start">
            <p className="font-bold box-border caret-transparent">9:00 PM</p>
            <p className="text-xs font-medium box-border caret-transparent leading-4">
              Sleep
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
