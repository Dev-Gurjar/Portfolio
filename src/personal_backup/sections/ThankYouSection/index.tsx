import { ThankYouButton } from "./components/ThankYouButton";

export const ThankYouSection = () => {
  return (
    <div className="box-border caret-transparent grid grid-cols-[repeat(1,minmax(0px,1fr))] w-full mt-12">
      <ThankYouButton />
    </div>
  );
};
