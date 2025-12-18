// src/sections/ProjectsSection/index.tsx
import React from "react";
import { ProjectCard } from "./components/ProjectCard";

// Import local images properly
import visionChatbotImg from "/visionchatbot.png";
import printPerfectionImg from "/printperfection.png";
import HistopathalogyImg from "/histopathology.png";
import CoinquestImg from "/Coinquest.png";
import legalRagImg from "/legalrag.png";

type TechIcons = {
  [key: string]: string;
};

export type Project = {
  id: string;
  backgroundImageUrl: string;
  coverImageUrl: string;
  title: string;
  description: string;
  techIcons: TechIcons;
  linkText?: string;
  linkIcon?: string;
  linkUrl?: string;
};

const projects: Project[] = [
  {
    id: "vision-chatbot",
    backgroundImageUrl: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/36.png",
    coverImageUrl: visionChatbotImg,
    title: "VISION CHATBOT",
    description:
      "AI multimodal assistant using transformer models (BERT, CLIP) with RAG architecture for fast, contextual responses.",
    techIcons: {
      python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      pytorch: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      fastapi: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    linkText: "View Project",
    linkIcon: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-16.svg",
    linkUrl: "https://github.com/dev-gurjar/vision-chatbot",
  },
  {
    id: "Coin Quest",
    backgroundImageUrl: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/36.png",
    coverImageUrl: CoinquestImg,
    title: "Coin Quest",
    description:
      "Developed authoritative real-time game engine using Socket.io with state machine ensuring deterministic game flow. Implemented wallet-first authentication (Privy), Postgres-backed bet/cashout modules, and modular chat features with rate-limiting and session recovery for concurrent users.",
    techIcons: {
      python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      pytorch: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      fastapi: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    linkText: "View Project",
    linkIcon: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-16.svg",
    linkUrl: "https://github.com/dev-gurjar/Coinquest",
  },

  {
    id: "traffic-analytics",
    backgroundImageUrl: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/36.png",
    coverImageUrl: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/29.png",
    title: "Smart Traffic Analytics & Prediction",
    description:
      "Real-time traffic congestion prediction using OpenCV and TensorFlow, with a TypeScript dashboard for sensor visualization.",
    techIcons: {
      typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      tensorflow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      opencv: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
      react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    linkText: "View Project",
    linkIcon: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-16.svg",
    linkUrl: "https://github.com/Dev-Gurjar/Smart_Traffic_Analytics",
  },
  {
    id: "histopath-cancer",
    backgroundImageUrl: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/36.png",
    coverImageUrl: HistopathalogyImg,
    title: "Histopathological Cancer Detection",
    description:
      "CNN classifier using ResNet50 transfer learning for medical image analysis, achieving high accuracy with augmentation and ensembles.",
    techIcons: {
      python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      jupyter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      tensorflow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      numpy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    },
    linkText: "View Code",
    linkIcon: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-16.svg",
    linkUrl: "https://www.kaggle.com/devgurjar/code",
  },
  {
    id: "printperfection",
    backgroundImageUrl: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/36.png",
    coverImageUrl: printPerfectionImg,
    title: "PrintPerfection E-commerce",
    description:
      "Full-stack e-commerce platform with admin panel, Stripe integration, and automated deployments.",
    techIcons: {
      nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    linkText: "View Project",
    linkIcon: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-16.svg",
    linkUrl: "https://github.com/Dev-Gurjar/print_perfection",
  },
  {
    id: "multi-agent-rag-legal-assistant",
    backgroundImageUrl: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/36.png",
    coverImageUrl: legalRagImg,
    title: "Multi-Agent RAG Legal Assistant",
    description:
      "Multi-agent Retrieval-Augmented Generation (RAG) system for legal research, drafting, and Q&A.",
    techIcons: {
      python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      langchain: "https://cdn.simpleicons.org/langchain/1C3C3C",
      openai: "https://cdn.simpleicons.org/openai/412991",
      pinecone: "https://avatars.githubusercontent.com/u/24711520?s=200&v=4",
    },
    linkText: "View Repo",
    linkIcon: "https://c.animaapp.com/mgjkw8u78XhUAV/assets/icon-16.svg",
    linkUrl: "https://github.com/Dev-Gurjar/Multi-agent-rag-legal-assistant",
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <h1 className="text-4xl font-bold leading-10 text-center md:text-5xl md:leading-[48px]">
        A small selection of
        <span className="text-emerald-400">
          {" "}recent projects
        </span>
      </h1>

      <div className="mt-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;