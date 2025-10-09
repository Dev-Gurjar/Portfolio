import { motion } from "framer-motion";

export const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="box-border caret-transparent order-1 mb-8 md:order-none md:mb-0"
    >
      <div className="relative box-border caret-transparent h-full w-full flex items-center justify-center">
        <div className="relative box-border caret-transparent h-[298px] w-[298px] md:h-[498px] md:w-[498px]">
          {/* place the spinning SVG ring behind the profile image but above background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 506 506"
              aria-hidden="true"
              className="h-[300px] w-[300px] md:h-[506px] md:w-[484px] animate-spin-slow origin-center"
              fill="none"
              style={{filter: 'drop-shadow(0 4px 12px rgba(0,255,153,0.4))'}}
            >
              <circle
                cx={253}
                cy={253}
                r={250}
                stroke="#00ff99"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="15.93573 31.10536 87.69411 68.97945"
                className="opacity-90 ring-dash"
              />
            </svg>
          </div>

          {/* profile image (centered) - allow ring to show by removing overflow clipping */}
          <div className="absolute inset-0 box-border caret-transparent flex items-center justify-center">
            <div className="box-border caret-transparent rounded-full h-[298px] w-[298px] md:h-[498px] md:w-[498px]">
              <img
                alt="Me"
                src="https://c.animaapp.com/mgjkw8u78XhUAV/assets/pic.jpg"
                className="block box-border h-full w-full object-cover p-3 rounded-full relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
