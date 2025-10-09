import { motion } from "framer-motion";
import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";
import { ArrowLeft, Heart, Camera, Music, Book, Plane } from "lucide-react";
import { Link } from "react-router-dom";

export const PersonalPage = () => {
  const hobbies = [
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments and landscapes during my travels",
    },
    {
      icon: Music,
      title: "Music",
      description: "Playing guitar and exploring different genres",
    },
    {
      icon: Book,
      title: "Reading",
      description: "Tech books, sci-fi novels, and philosophy",
    },
    {
      icon: Plane,
      title: "Travel",
      description: "Exploring new cultures and cuisines",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white text-base bg-zinc-900 font-jetbrains_mono min-h-screen"
    >
      <Header />
      
      <main className="relative items-center box-border flex flex-col justify-center overflow-hidden mx-auto px-5 py-20 md:px-10">
        <div className="box-border max-w-screen-xl w-full">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Professional
          </Link>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Beyond the <span className="text-emerald-400">Code</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              When I'm not building software, here's what keeps me inspired and balanced
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-zinc-800/50 border border-white/10 rounded-2xl p-8 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105"
              >
                <hobby.icon className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{hobby.title}</h3>
                <p className="text-white/70">{hobby.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-white/10 rounded-3xl p-12 text-center"
          >
            <Heart className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Life Philosophy</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              "Balance is key. I believe in continuous learning, staying curious, and 
              maintaining a healthy work-life balance. Technology is my passion, but 
              life's experiences make me a better developer and person."
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};
