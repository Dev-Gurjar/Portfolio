import { motion } from "framer-motion";
import { Header } from "../sections/Header";
import { HeroSection } from "../sections/HeroSection";
import { StatsSection } from "../sections/StatsSection";
import { EducationSection } from "../sections/EducationSection";
import { ProfileSection } from "../sections/ProfileSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { TimelineSection } from "../sections/TimelineSection";
import { Footer } from "../sections/Footer";

export const MainPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white text-base not-italic normal-nums font-normal accent-auto bg-zinc-900 box-border caret-transparent tracking-[normal] leading-8 font-jetbrains_mono min-h-screen"
    >
      <Header />
      <HeroSection />
      <StatsSection />
      <EducationSection />
      <ProfileSection />
      <ProjectsSection />
      <ExperienceSection />
      <TimelineSection />
      <Footer />
    </motion.div>
  );
};
