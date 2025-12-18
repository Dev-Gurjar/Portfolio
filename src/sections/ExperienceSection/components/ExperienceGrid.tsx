import { ExperienceCard } from "./ExperienceCard";

export const  ExperienceGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-10 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-10 w-full mt-12 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
      <ExperienceCard
        iconSrc="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-17.svg"
        iconAlt="Icon"
        variant="translate-x-[472.235px] translate-y-[155.02px]"
        experienceImageSrc="https://c.animaapp.com/mgjkw8u78XhUAV/assets/exp1.svg"
        experienceImageAlt="/exp1.svg"
        title="Undergraduate Researcher Intern — IIT Jodhpur"
        description="Reproduced an DL coarse-graining workflow — preprocessed MD trajectories, engineered features, trained PyTorch models for CG forces/potentials, and validated results by comparing radial distribution functions and thermodynamic observables; performed model selection, hyperparameter tuning, and dataset curation."
      />
      <ExperienceCard
        iconSrc="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-17.svg"
        iconAlt="Icon"
        variant="translate-x-[391.368px] translate-y-[167.333px]"
        experienceImageSrc="https://c.animaapp.com/mgjkw8u78XhUAV/assets/exp2.svg"
        experienceImageAlt="/exp2.svg"
        title="Web Developer Intern — CoinQuest"
        description="Built an authoritative real-time game engine using a state-machine architecture and Socket.io for deterministic game flow and client synchronization; implemented wallet-first authentication (Privy), Postgres-backed bet/cashout modules for durable state, and session recovery with rate-limit/retry policies for reliability."
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
