import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Footer } from "@/sections/Footer";

export const PersonalApp = () => {
  return (
    <div className="app-root text-white text-base min-h-screen">
      <div>
        <Header />
        <main className="mx-auto max-w-screen-xl px-4 py-12">
          <Hero />
        </main>
        <Footer />
      </div>
    </div>
  );
};
export default PersonalApp;

