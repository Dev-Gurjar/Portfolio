import { TimelineItem } from "./TimelineItem";

export const Timeline = () => {
  return (
    <div className="relative box-border caret-transparent max-w-screen-xl mx-auto pb-20">
      <TimelineItem
        year="2025"
        description="Freelance Full Stack Web Developer at PrintPerfection — built a complete Next.js e-commerce app with admin inventory, integrated Stripe payments, and set up CI/CD. Web Developer Intern at CoinQuest — developed responsive frontends and RESTful APIs for real-time gaming data."
        images={[
          {
            src: "src/assets/printperfection.png",
            alt: "printperfection",
          },
          {
            src: "src/assets/printperfection1.png",
            alt: "coinquest",
          },
        ]}
      />
      <TimelineItem
        year="2024"
        description="VISION CHATBOT — built a multimodal AI assistant using transformer models with RAG architecture. Smart Traffic Analytics & Prediction System — deployed an OpenCV + TensorFlow pipeline for real-time congestion prediction and created a TypeScript dashboard for live sensor visualization."
        images={[
          {
            src: "src/assets/visionchatbot.png",
            alt: "vision chatbot",
          }
        ]}
      />
      <TimelineItem
        year="2023"
        description="Histopathological Cancer Detection System — implemented a ResNet50 transfer learning pipeline achieving 92% accuracy and used data augmentation and SVM ensembles to improve robustness."
        images={[
          {
            src: "https://www.researchgate.net/publication/333767950/figure/fig4/AS:875425521737728@1585729117289/Comprehensive-view-of-CAD-system-for-breast-cancer-using-histopathology.jpg",
            alt: "histopathology",
          },
        ]}
      />
      {/* <TimelineItem
        year="2023"
        description="Received an invitation from the government and 'American Corner' company to join the 'Call For You' project as a mentor teacher, teaching English to high school students from Darkhan-Uul province. Served as a mentor teacher for 2 months."
        images={[
          {
            src: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/23.jpg",
            alt: "hero template",
          },
        ]}
      />
      <div className="[mask-image:linear-gradient(rgba(228, 105, 105, 0)_0px,rgba(167, 65, 65, 1)_10%,rgba(90, 210, 146, 1)_90%,rgba(174, 196, 97, 0))] absolute bg-[linear-gradient(rgba(0,0,0,0)_0%,rgb(64,64,64),rgba(0,0,0,0)_99%)] box-border caret-transparent h-full w-0.5 overflow-hidden left-8 top-0"></div> */}
    </div>
  );
};
