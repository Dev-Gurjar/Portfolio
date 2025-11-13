import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => (
  <div
    className={
      "relative bg-zinc-900/60 backdrop-blur-sm border border-white/6 rounded-2xl overflow-hidden shadow-sm " +
      className
    }
    role="region"
  >
    {children}
  </div>
);

export const ProfileGrid = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-16 px-5 md:px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:auto-rows-min md:gap-6">
        {/* HERO - large image card */}
        <Card className="md:col-span-3 md:row-span-3 min-h-[420px]">
          {/* background image */}
          <div className="absolute inset-0">
            <img
              src="https://c.animaapp.com/mgjkw8u78XhUAV/assets/bg1-min.png"
              alt="Hero background"
              className="w-full h-full object-cover"
            />
            {/* stronger gradient for readability but subtle */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          </div>

          {/* content */}
          <div className="relative z-10 h-full p-6 md:p-10 flex flex-col justify-end">
            <p className="text-sm md:text-sm text-slate-300 max-w-xl mb-3 leading-relaxed">
              Developer who builds clean, reliable systems for e-commerce, real-time auctions, and production ML
              pipelines.
            </p>

            {/* reduced headline size, limited width, tighter leading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-2xl">
              Full-stack developer building reliable e-commerce and ML-backed web applications
            </h2>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center text-xs font-medium bg-neutral-800/70 text-neutral-200 px-3 py-1 rounded-md">
                Open to work
              </span>
              <span className="text-sm text-zinc-400 hidden md:inline">
                Scales systems • Shipping-focused • Clean UX
              </span>
            </div>
          </div>
        </Card>

        {/* Languages */}
        <Card className="p-5 md:p-6 flex flex-col justify-center">
          <div className="text-xs text-slate-400 mb-2">Languages</div>
          <div className="text-lg md:text-xl font-semibold text-white">English · Hindi · Japanese</div>
        </Card>

        {/* Tech Stack */}
        <Card className="p-5 md:p-6 flex flex-col justify-center">
          <div className="text-xs text-slate-400 mb-3">Primary tech</div>
          <div className="text-lg md:text-xl font-semibold text-white">Next.js</div>
          <div className="text-sm text-zinc-400 mt-2">React · TypeScript · Node</div>

          <div className="mt-4 flex flex-wrap gap-2 justify-end md:justify-end">
            <span className="text-xs bg-neutral-800 px-3 py-2 rounded-md">React</span>
            <span className="text-xs bg-neutral-800 px-3 py-2 rounded-md">Next.js</span>
            <span className="text-xs bg-neutral-800 px-3 py-2 rounded-md">TypeScript</span>
          </div>
        </Card>

        {/* Role */}
        <Card className="p-5 md:p-6 flex flex-col justify-center">
          <div className="text-xs text-slate-400 mb-2">Role</div>
          <div className="text-lg md:text-xl font-semibold text-white">Software Architect / Designer</div>
        </Card>

        {/* The Inside Scoop (wide) */}
        <Card className="md:col-span-2 p-6 md:p-8 flex items-center">
          <div>
            <div className="text-xs text-slate-400 mb-2">The Inside Scoop</div>
            <div className="text-lg md:text-2xl font-semibold text-white leading-relaxed max-w-xl">
              Currently studying at university while shipping freelance projects and refining system design skills
            </div>
          </div>
        </Card>

        {/* CTA */}
        <Card className="p-6 md:p-8 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-3">Have a question?</h3>
            <button
              className="inline-flex items-center justify-center bg-gradient-to-br from-violet-600 to-emerald-400 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              aria-label="Copy email"
            >
              Copy my email address
            </button>
          </div>
        </Card>

        {/* Side projects */}
        <Card className="md:col-span-2 p-6 md:p-8 flex items-center">
          <div>
            <div className="text-xs text-slate-400 mb-2">Side projects</div>
            <div className="text-lg md:text-2xl font-semibold text-white">Building tools & demos — focus on reliability and UX</div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProfileGrid;
