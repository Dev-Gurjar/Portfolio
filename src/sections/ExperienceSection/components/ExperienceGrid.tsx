import { ExperienceCard } from "./ExperienceCard";

export const ExperienceGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-10 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-10 w-full mt-12 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
      <ExperienceCard
        iconSrc="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-17.svg"
        iconAlt="Icon"
        variant="translate-x-[472.235px] translate-y-[155.02px]"
        experienceImageSrc="https://c.animaapp.com/mgjkw8u78XhUAV/assets/exp1.svg"
        experienceImageAlt="/exp1.svg"
        title="Freelance Full Stack Web Developer — PrintPerfection"
        description="Built a complete e‑commerce application using Next.js and Node.js with an admin panel for inventory and order management. Integrated Stripe payments and implemented CI/CD for deployments."
      />
      <ExperienceCard
        iconSrc="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-17.svg"
        iconAlt="Icon"
        variant="translate-x-[391.368px] translate-y-[167.333px]"
        experienceImageSrc="https://c.animaapp.com/mgjkw8u78XhUAV/assets/exp2.svg"
        experienceImageAlt="/exp2.svg"
        title="Web Developer Intern — CoinQuest"
        description="Developed responsive frontends using Next.js and Tailwind; built RESTful APIs with Express.js and Node.js for real-time gaming data. Improved test coverage using unit tests."
      />
      <ExperienceCard
        iconSrc="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-17.svg"
        iconAlt="Icon"
        variant="translate-x-[385.564px] translate-y-[167.604px]"
        experienceImageSrc="https://c.animaapp.com/mgjkw8u78XhUAV/assets/exp3.svg"
        experienceImageAlt="/exp3.svg"
        title="Web & Application Development Head — Prometeo Technical Club"
        description="Led the club's web development initiatives, mentored members, and coordinated project-based workshops."
      />
      <ExperienceCard
        iconSrc="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-17.svg"
        iconAlt="Icon"
        variant="translate-x-[94.8269px] translate-y-[166.398px]"
        experienceImageSrc="https://c.animaapp.com/mgjkw8u78XhUAV/assets/exp4.svg"
        experienceImageAlt="/exp4.svg"
        title="Arts & Culture Assistant Head — Intellia Club"
        description="Assisted with coordinating cultural events and managing club activities during 2022–2023."
      />
    </div>
  );
};
