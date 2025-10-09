import { HeroContent } from "./components/HeroContent";

export const HeroSection = () => {
  return (
    <section className="relative box-border caret-transparent">
      {/* decorative full-bleed background */}


      {/* green glow / lightning-like decorative element behind hero */}
      <div className="absolute inset-0 pointer-events-none z-20 flex justify-center">
              <div className="absolute inset-0 pointer-events-none -z-10">
        <img
          alt="grid"
          src="https://c.animaapp.com/mgjkw8u78XhUAV/assets/footer-grid.svg"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
        <div className="rounded-full blur-3xl opacity-60 mix-blend-screen animate-pulse-slow"
             style={{width: '1200px', height: '1200px', marginTop: '-200px', background: 'radial-gradient(circle at 30% 30%, rgba(0,255,153,0.25), rgba(0,255,153,0.08) 20%, rgba(0,0,0,0) 45%)'}}/>
      </div>

      <main className="relative z-10 items-center box-border caret-transparent flex flex-col justify-center overflow-hidden mx-auto px-5 md:px-10">
        <div className="box-border caret-transparent max-w-screen-xl w-full">
          <div className="box-border caret-transparent pb-0 md:pb-20">
            {/* decorative overlay placed behind content */}
            <div className="absolute inset-0 pointer-events-none -z-10 flex justify-center items-start">
              <div className="w-full h-[1000px] bg-[url(data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2032%2032%27%20width=%27100%27%20height=%27100%27%20fill=%27none%27%20stroke=%27rgb%28255%20255%20255%20/%200.03)] bg-no-repeat bg-center bg-cover opacity-40"></div>
            </div>
            <div className="relative box-border caret-transparent flex justify-center">
              <div className="box-border caret-transparent h-full max-w-none w-full mx-auto px-[15px] md:max-w-[1200px]">
                <HeroContent />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
