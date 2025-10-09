import { TimelineItem } from "./TimelineItem";

export const Timeline = () => {
  return (
    <div className="relative box-border caret-transparent max-w-screen-xl mx-auto pb-20">
      <TimelineItem
        year="2025"
        description="Freelance Full Stack Web Developer at PrintPerfection — built a complete Next.js e-commerce app with admin inventory, integrated Stripe payments, and set up CI/CD. Web Developer Intern at CoinQuest — developed responsive frontends and RESTful APIs for real-time gaming data."
        images={[
          {
            src: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/31.jpg",
            alt: "printperfection",
          },
          {
            src: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/41.jpg",
            alt: "coinquest",
          },
        ]}
      />
      <TimelineItem
        year="2024"
        description="VISION CHATBOT — built a multimodal AI assistant using transformer models with RAG architecture. Smart Traffic Analytics & Prediction System — deployed an OpenCV + TensorFlow pipeline for real-time congestion prediction and created a TypeScript dashboard for live sensor visualization."
        images={[
          {
            src: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/24.jpg",
            alt: "vision chatbot",
          },
          {
            src: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/29.png",
            alt: "smart traffic",
          },
        ]}
      />
      <TimelineItem
        year="2023"
        description="Histopathological Cancer Detection System — implemented a ResNet50 transfer learning pipeline achieving 92% accuracy and used data augmentation and SVM ensembles to improve robustness."
        images={[
          {
            src: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/18.png",
            alt: "histopathology",
          },
        ]}
      />
      <TimelineItem
        year="2023"
        description="Received an invitation from the government and 'American Corner' company to join the 'Call For You' project as a mentor teacher, teaching English to high school students from Darkhan-Uul province. Served as a mentor teacher for 2 months."
        images={[
          {
            src: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/23.jpg",
            alt: "hero template",
          },
        ]}
      />
      <div className="[mask-image:linear-gradient(rgba(0,0,0,0)_0px,rgb(0,0,0)_10%,rgb(0,0,0)_90%,rgba(0,0,0,0))] absolute bg-[linear-gradient(rgba(0,0,0,0)_0%,rgb(64,64,64),rgba(0,0,0,0)_99%)] box-border caret-transparent h-[3000px] w-0.5 overflow-hidden left-8 top-0"></div>
    </div>
  );
};
