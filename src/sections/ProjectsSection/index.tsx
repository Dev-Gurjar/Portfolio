import { ProjectCard } from "./components/ProjectCard";

export const ProjectsSection = () => {
  return (
    <div className="box-border caret-transparent py-20">
      <h1 className="text-4xl font-bold box-border caret-transparent leading-10 text-center md:text-5xl md:leading-[48px]">
        A small selection of
        <span className="text-emerald-400 text-4xl box-border caret-transparent leading-10 md:text-5xl md:leading-[48px]">
          of recent projects
        </span>
      </h1>
      <div className="box-border caret-transparent mt-10 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <ProjectCard
          backgroundImageUrl="https://c.animaapp.com/mgjkw8u78XhUAV/assets/36.png"
          coverImageUrl="https://c.animaapp.com/mgjkw8u78XhUAV/assets/31.jpg"
          title="VISION CHATBOT"
          description="AI multimodal assistant using transformer models (BERT, CLIP) with RAG architecture for fast, contextual responses."
          techIcons={{
            nextIcon: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/next.svg",
            expressIcon:
              "https://c.animaapp.com/mgjkw8u78XhUAV/assets/express.png",
            tsIcon: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/ts.svg",
            tailwindIcon:
              "https://c.animaapp.com/mgjkw8u78XhUAV/assets/tail.svg",
            uiLibraryIcon:
              "https://c.animaapp.com/mgjkw8u78XhUAV/assets/shadcn.png",
          }}
          linkText="Check Live Site"
          linkIcon="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-16.svg"
  />
  <ProjectCard
          backgroundImageUrl="https://c.animaapp.com/mgjkw8u78XhUAV/assets/36.png"
          coverImageUrl="https://c.animaapp.com/mgjkw8u78XhUAV/assets/29.png"
          title="Smart Traffic Analytics & Prediction"
          description="Real-time traffic congestion prediction using OpenCV and TensorFlow, with a TypeScript dashboard for sensor visualization."
          techIcons={{
            nextIcon: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/next.svg",
            expressIcon:
              "https://c.animaapp.com/mgjkw8u78XhUAV/assets/express.png",
            tsIcon: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/ts.svg",
            tailwindIcon:
              "https://c.animaapp.com/mgjkw8u78XhUAV/assets/tail.svg",
            uiLibraryIcon:
              "https://c.animaapp.com/mgjkw8u78XhUAV/assets/daisyui.png",
          }}
          linkText="Check Live Site"
          linkIcon="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-16.svg"
  />
  <ProjectCard
          backgroundImageUrl="https://c.animaapp.com/mgjkw8u78XhUAV/assets/36.png"
          coverImageUrl="https://c.animaapp.com/mgjkw8u78XhUAV/assets/18.png"
          title="Histopathological Cancer Detection"
          description="CNN classifier using ResNet50 transfer learning for medical image analysis, achieving high accuracy with augmentation and ensembles."
          techIcons={{
            nextIcon: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/next.svg",
            expressIcon:
              "https://c.animaapp.com/mgjkw8u78XhUAV/assets/express.png",
            tsIcon: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/ts.svg",
            tailwindIcon:
              "https://c.animaapp.com/mgjkw8u78XhUAV/assets/tail.svg",
            uiLibraryIcon:
              "https://c.animaapp.com/mgjkw8u78XhUAV/assets/shadcn.png",
          }}
          linkText="Check Live Site"
          linkIcon="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-16.svg"
        />
        <ProjectCard
          backgroundImageUrl="https://c.animaapp.com/mgjkw8u78XhUAV/assets/36.png"
          coverImageUrl="https://c.animaapp.com/mgjkw8u78XhUAV/assets/41.jpg"
          title="PrintPerfection E‑commerce"
          description="Full-stack e-commerce platform with admin panel, Stripe integration, and automated deployments."
          techIcons={{
            nextIcon: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/next.svg",
            expressIcon:
              "https://c.animaapp.com/mgjkw8u78XhUAV/assets/express.png",
            tsIcon: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/ts.svg",
            tailwindIcon:
              "https://c.animaapp.com/mgjkw8u78XhUAV/assets/tail.svg",
            uiLibraryIcon:
              "https://c.animaapp.com/mgjkw8u78XhUAV/assets/shadcn.png",
          }}
          linkText="Check Live Site"
          linkIcon="https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-16.svg"
        />
        </div>
      </div>
    </div>
  );
};
