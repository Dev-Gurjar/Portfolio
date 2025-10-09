import { ProfileGrid } from "@/sections/ProfileSection/components/ProfileGrid";

export const ProfileSection = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <h1 className="text-4xl font-bold box-border caret-transparent leading-10 text-center pt-20 md:text-5xl md:leading-[48px]">
          Short Profile
        </h1>
        <ProfileGrid />
      </div>
    </section>
  );
};
