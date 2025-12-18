// src/sections/ProjectsSection/components/ProjectCard.tsx
import React, { useState } from "react";
import type { Project } from "../index";

const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='100%25' height='100%25' fill='%23111827'/%3E%3Ctext x='50%25' y='50%25' fill='%239CA3AF' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18'%3EImage not available%3C/text%3E%3C/svg%3E";

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const {
    id,
    title,
    description,
    coverImageUrl,
    techIcons,
    linkText,
    linkIcon,
    linkUrl,
  } = project;

  const [imgError, setImgError] = useState(false);
  const [iconErrors, setIconErrors] = useState<Record<string, boolean>>({});

  const handleImageError = () => setImgError(true);
  
  const handleIconError = (key: string) => {
    setIconErrors(prev => ({ ...prev, [key]: true }));
  };

  return (
    <article
      className="group relative flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:border-emerald-400/50 transition-all duration-300 h-[480px]"
      aria-labelledby={`project-${id}-title`}
    >
      {/* Fixed height image container - prevents shifting */}
      <div className="relative w-full h-52 bg-zinc-800 overflow-hidden flex-shrink-0">
        <img
          src={imgError ? FALLBACK_IMAGE : coverImageUrl}
          alt={`${title} preview`}
          onError={handleImageError}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {/* Optional gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content area with flex layout to prevent image shifting */}
      <div className="flex flex-col flex-1 p-5">
        <h3
          id={`project-${id}-title`}
          className="text-xl font-bold text-white mb-3 line-clamp-2"
        >
          {title}
        </h3>

        <p className="text-sm text-zinc-400 mb-4 line-clamp-3 flex-1">
          {description}
        </p>

        {/* Tech stack icons - fixed positioning at bottom */}
        <div className="flex items-center justify-between gap-3 mt-auto">
          <div className="flex items-center gap-2 flex-wrap">
            {Object.entries(techIcons).map(([key, iconUrl]) => (
              <div
                key={key}
                className="w-8 h-8 rounded-md bg-grey-300 border border-zinc-700 flex items-center justify-center  hover:border-emerald-400/50 transition-colors"
                title={key}
              >
                {!iconErrors[key] ? (
                  <img
                    src={iconUrl}
                    alt={`${key} icon`}
                    onError={() => handleIconError(key)}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-[10px] text-zinc-500 uppercase font-bold">
                    {key.slice(0, 2)}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Link button */}
          {linkUrl ? (
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-400 text-zinc-900 font-semibold text-sm hover:bg-emerald-500 transition-colors flex-shrink-0"
              aria-label={`Open ${title} in a new tab`}
            >
              <span>{linkText || "View"}</span>
              {linkIcon && (
                <img
                  src={linkIcon}
                  alt=""
                  className="w-4 h-4"
                  aria-hidden="true"
                />
              )}
            </a>
          ) : (
            <button
              className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-500 text-sm cursor-not-allowed flex-shrink-0"
              disabled
              aria-disabled="true"
            >
              No Link
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;