"use client";
import { useEffect, useRef, useState } from "react";
import { TimelineItem } from "./TimelineItem";

export const Timeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineHeight = timelineRef.current.offsetHeight;

      // Calculate progress based on scroll position
      const startOffset = windowHeight * 0.2;
      const progress = Math.max(
        0,
        Math.min(
          1,
          (startOffset - rect.top) / (timelineHeight - windowHeight + startOffset)
        )
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Timeline data based on resume - chronological order (2022 → 2025)
  // Using PUBLIC folder paths - these work reliably on Vercel
  const timelineData = [
    {
      year: "2022",
      description:
        "Got admitted into IIT Jodhpur — Qualified JEE Main & JEE Advanced (top 2%). Beginning of my journey in B.S. Chemistry with specialization in Entrepreneurship, focusing on building strong fundamentals in algorithms, data structures, and software development.",
      images: [
        {
          src: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Indian_Institute_of_Technology_Jodhpur_Logo.svg/1200px-Indian_Institute_of_Technology_Jodhpur_Logo.svg.png",
          alt: "IIT Jodhpur",
        },
      ],
    },
    {
      year: "2023",
      description:
        "Histopathological Cancer Detection — Developed an end-to-end PyTorch pipeline for cancer detection using ML/DL and transfer learning. Implemented custom CNN & ResNet50 fine-tuning with data augmentation, achieving 92% test accuracy. Trained classical models (SVM, RF) and deep learning approaches with reproducible notebooks.",
      images: [
        {
          src: "/histopathology.png",
          alt: "Histopathological Cancer Detection",
        },
      ],
    },
    {
      year: "2024",
      description:
        "VISION CHATBOT — Built a multimodal AI assistant processing diverse inputs using NLP, Transformers, and LLMs. Explored and implemented models like BERT, BART, GPT, ViT, CLIP, BLIP, GANs, and Stable Diffusion from scratch. Smart Traffic Analytics Platform — Developed real-time traffic analysis system using YOLO and OpenCV for congestion prediction, deployed on AWS with PostgreSQL and TypeScript dashboard.",
      images: [
        {
          src: "/visionchatbot.png",
          alt: "Vision Chatbot",
        },
      ],
      achievements: [
        "Implemented Transformer architectures from scratch",
        "Deployed production-grade traffic prediction system on AWS"
      ]
    },
    {
      year: "2024",
      description:
        "Web & App Development Head, Prometeo IIT Jodhpur — Led development of official fest site & app supporting 1,200+ registrations. Coordinated 6-member dev team, managing event modules, schedules, and user workflows with a visually compelling interface.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
          alt: "Prometeo Fest",
        },
      ],
    },
    {
      year: "2024",
      description:
        "Multi-Agent RAG Legal Assistant — Built AI agent system for legal document analysis using Fusion-RAG on 1,900+ case documents. Integrated multi-agent architecture with spaCy and FSSAI compliance, achieving Rouge-L score of 37.9% and BLEU-3 score of 27.4%.",
      images: [
        {
          src: "/legalrag.png",
          alt: "Legal RAG Assistant",
        },
      ],
    },
    {
      year: "2025",
      description:
        "PrintPerfection — Freelance Full Stack Developer. Built complete Next.js e-commerce platform with admin inventory management, integrated Stripe payments, and CI/CD deployment on VPS for clothing wholesale company.",
      images: [
        {
          src: "/printperfection.png",
          alt: "PrintPerfection Website",
        },
        {
          src: "/printperfection1.png",
          alt: "PrintPerfection Dashboard",
        },
      ],
    },
    {
      year: "2025",
      description:
        "CoinQuest — Web Developer Intern. Developed authoritative real-time game engine using Socket.io with state machine ensuring deterministic game flow. Implemented wallet-first authentication (Privy), Postgres-backed bet/cashout modules, and modular chat features with rate-limiting and session recovery for concurrent users.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
          alt: "CoinQuest Gaming Platform",
        },
      ],
    },
    {
      year: "2025",
      description:
        "UG Research Assistant — Advanced Deep Learning under Prof. Nil Kamal Hazra. Reproduced ML-based coarse-graining methodology for molecular dynamics, implemented training pipelines in PyTorch to learn coarse-grained forces/potentials, and validated results through radial distribution functions and thermodynamic observables.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
          alt: "Deep Learning Research",
        },
      ],
    },
    {
      year: "2025",
      description:
        "Currently seeking full-time opportunities — Open to SDE or AI/ML Engineer roles. Passionate about building production-ready AI agents, scalable web systems, and ML research pipelines. Strong in Python, PyTorch, TypeScript, and modern web infrastructure (Next.js, Postgres, AWS).",
      images: [
        {
          src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
          alt: "Job Search - Future Opportunities",
        },
      ],
      achievements: [
        "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
        "Top-500 Rank in Kaggle competitions",
        "Led 6-member development team at Prometeo"
      ]
    },
  ];

  return (
    <div
      ref={timelineRef}
      className="relative box-border caret-transparent max-w-screen-xl mx-auto pb-20"
    >
      {/* Animated vertical line - POSITIONED TO ALIGN WITH CIRCLES */}
      <div className="absolute left-[31px] md:left-[31px] top-0 bottom-0 w-[2px] overflow-hidden pointer-events-none">
        {/* Background line (gray) */}
        <div className="absolute inset-0 bg-neutral-700 opacity-50"></div>
        
        {/* Animated progress line (gradient) */}
        <div
          className="absolute top-0 left-0 w-full transition-all duration-200 ease-out"
          style={{ 
            height: `${scrollProgress * 100}%`,
            background: 'linear-gradient(180deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)'
          }}
        ></div>
      </div>

      {/* Timeline items */}
      {timelineData.map((item, index) => (
        <TimelineItem
          key={index}
          year={item.year}
          description={item.description}
          images={item.images}
          achievements={item.achievements}
          scrollProgress={scrollProgress}
          itemIndex={index}
          totalItems={timelineData.length}
        />
      ))}
    </div>
  );
};
