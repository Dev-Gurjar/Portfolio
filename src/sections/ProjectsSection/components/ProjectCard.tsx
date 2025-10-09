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
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="items-center box-border caret-transparent flex h-[400px] justify-center min-h-[auto] w-[300px] md:min-h-[520px] md:w-96"
    >
      <div className="relative box-border caret-transparent z-50">
        <div className="absolute box-border caret-transparent ml-[1.5px] mt-4 left-2/4 top-2/4">
          <div className="absolute items-start shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.4)_0px_8px_16px_0px] box-border caret-transparent flex justify-start translate-x-[-50.0%] translate-y-[-50.0%] border overflow-hidden p-4 rounded-2xl border-solid border-white/10 left-2/4 top-2/4">
            <div className="relative box-border caret-transparent z-50">
              <div className="relative items-center box-border caret-transparent flex h-[200px] justify-center w-[300px] overflow-hidden mb-10 md:h-[300px] md:w-96">
                <div className="relative bg-slate-900 box-border caret-transparent h-full w-full overflow-hidden rounded-none md:rounded-3xl">
                  <img
                    alt="bgimg"
                    sizes="100vw"
                    src={props.backgroundImageUrl}
                    className="absolute text-transparent box-border h-full max-w-full w-full inset-0"
                  />
                </div>
                <img
                  alt="cover"
                  src={props.coverImageUrl}
                  className="absolute box-border caret-transparent max-w-full z-10 bottom-0"
                />
              </div>
              <h1 className="text-base font-bold box-border caret-transparent flow-root leading-6 overflow-hidden md:text-2xl md:leading-8">
                {props.title}
              </h1>
              <p className="text-slate-300 text-sm font-light box-border caret-transparent flow-root leading-5 overflow-hidden my-2.5 md:text-xl md:font-normal md:leading-7">
                {props.description}
              </p>
              <div className="items-center box-border caret-transparent flex justify-between mt-7 mb-3">
                <div className="items-center box-border caret-transparent flex">
                  <div className="items-center bg-black box-border caret-transparent flex h-8 justify-center -translate-x-0.5 w-8 border rounded-full border-solid border-white/20 md:h-10 md:w-10">
                    <img
                      alt="icon5"
                      src={props.techIcons.nextIcon}
                      className="box-border caret-transparent max-w-full p-2"
                    />
                  </div>
                  <div className="items-center bg-black box-border caret-transparent flex h-8 justify-center translate-x-[-7px] w-8 border rounded-full border-solid border-white/20 md:h-10 md:w-10">
                    <img
                      alt="icon5"
                      src={props.techIcons.expressIcon}
                      className="box-border caret-transparent max-w-full p-2"
                    />
                  </div>
                  <div className="items-center bg-black box-border caret-transparent flex h-8 justify-center -translate-x-3 w-8 border rounded-full border-solid border-white/20 md:h-10 md:w-10">
                    <img
                      alt="icon5"
                      src={props.techIcons.tsIcon}
                      className="box-border caret-transparent max-w-full p-2"
                    />
                  </div>
                  <div className="items-center bg-black box-border caret-transparent flex h-8 justify-center translate-x-[-17px] w-8 border rounded-full border-solid border-white/20 md:h-10 md:w-10">
                    <img
                      alt="icon5"
                      src={props.techIcons.tailwindIcon}
                      className="box-border caret-transparent max-w-full p-2"
                    />
                  </div>
                  <div className="items-center bg-black box-border caret-transparent flex h-8 justify-center translate-x-[-22px] w-8 border rounded-full border-solid border-white/20 md:h-10 md:w-10">
                    <img
                      alt="icon5"
                      src={props.techIcons.uiLibraryIcon}
                      className="box-border caret-transparent max-w-full p-2"
                    />
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex justify-center">
                  <p className="text-emerald-400 text-sm box-border caret-transparent flex leading-5 md:text-xl md:leading-7">
                    {props.linkText}
                  </p>
                  <img
                    src={props.linkIcon}
                    alt="Icon"
                    className="box-border caret-transparent h-4 w-4 ml-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </motion.div>
  );
};
