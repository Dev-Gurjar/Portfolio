export type ProjectCardProps = {
  backgroundImageUrl: string;
  coverImageUrl: string;
  title: string;
  description: string;
  techIcons: {
    nextIcon: string;
    expressIcon: string;
    tsIcon: string;
    tailwindIcon: string;
    uiLibraryIcon: string;
  };
  linkText: string;
  linkIcon: string;
};

import { motion } from "framer-motion";
export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="w-[300px] md:w-96 h-[520px]"
    >
      <div className="bg-slate-900/80 border border-white/10 rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
        {/* Image area */}
        <div className="relative h-[200px] md:h-[300px] w-full bg-slate-900 flex items-end justify-center overflow-hidden">
          <img
            alt="background"
            src={props.backgroundImageUrl}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="relative w-[85%] md:w-[85%] mb-0">
            <img
              alt="cover"
              src={props.coverImageUrl}
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Content area */}
        <div className="p-4 md:p-6 flex flex-col flex-1">
          <h3 className="text-base md:text-2xl font-bold leading-tight mb-2 text-left">
            {props.title}
          </h3>
          <p className="text-slate-300 text-sm md:text-base flex-1 italic text-left break-words whitespace-normal">{props.description}</p>

          <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="bg-black/70 rounded-full p-1 md:p-2 border border-white/10">
                  <img src={props.techIcons.nextIcon} alt="next" className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div className="bg-black/70 rounded-full p-1 md:p-2 border border-white/10">
                  <img src={props.techIcons.expressIcon} alt="express" className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div className="bg-black/70 rounded-full p-1 md:p-2 border border-white/10">
                  <img src={props.techIcons.tsIcon} alt="ts" className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div className="bg-black/70 rounded-full p-1 md:p-2 border border-white/10">
                  <img src={props.techIcons.tailwindIcon} alt="tailwind" className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div className="bg-black/70 rounded-full p-1 md:p-2 border border-white/10">
                  <img src={props.techIcons.uiLibraryIcon} alt="ui" className="h-5 w-5 md:h-6 md:w-6" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-emerald-400 text-sm md:text-base">{props.linkText}</p>
              <img src={props.linkIcon} alt="icon" className="h-4 w-4 md:h-5 md:w-5" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
