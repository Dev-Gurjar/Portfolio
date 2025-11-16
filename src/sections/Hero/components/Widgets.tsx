"use client";
import React from "react";
import { MusicPlayer } from "@/components/ui/music-player";
import type { Track } from "@/components/ui/music-player";

interface WidgetsProps {
  currentTrack?: Track;
  queue?: Track[];
}

const DailyRoutine: React.FC = () => {
  const items = [
    { time: "6:00 AM", label: "Wake up" },
    { time: "8:00 AM", label: "School/Work" },
    { time: "5:00 PM", label: "Gym" },
    { time: "6:00 PM", label: "Read books" },
    { time: "7:00 PM", label: "Piano & Music" },
    { time: "9:00 PM", label: "Sleep" },
  ];

  return (
    <div className="w-full sm:w-64 md:w-72 p-4 sm:p-5 rounded-2xl bg-emerald-400/10 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base sm:text-lg font-semibold">Daily routine</h3>
        <img
          src="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/icon-12.svg"
          alt="routine icon"
          className="h-5 w-5 sm:h-6 sm:w-6"
        />
      </div>

      <div className="space-y-3">
        {items.map((it) => (
          <div key={it.time} className="flex flex-col gap-0 items-center justify-between sm:flex-row sm:gap-3">
            <p className="font-semibold text-sm sm:text-base tabular-nums whitespace-nowrap item-start">{it.time}</p>
            <p className="text-xs sm:text-sm text-muted-foreground/80 truncate">{it.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const FuturePlan: React.FC = () => {
  const plans = [
    "Graduation",
    "Travel to abroad",
    "Master Piano",
    "Master Guitar",
    "Go Gym",
    "Read Books",
    "Learn Languages",
    "Learn Trading",
    "Make family happy",
    "Make friends happy",
  ];

  return (
    <div className="w-full p-1 sm:w-80 md:w-96 sm:p-5 rounded-2xl bg-zinc-900 text-white shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <img
            src="https://c.animaapp.com/mgjqlkw0gfKBVk/assets/icon-13.svg"
            alt="plans"
            className="h-4 w-4 sm:h-5 sm:w-5"
          />
          <h3 className="text-base text-nowrap sm:text-lg font-semibold">Future plan</h3>
        </div>
        <div className="text-xs sm:text-sm bg-zinc-700 h-6 w-6 rounded-full flex items-center justify-center font-medium">
          10
        </div>
      </div>

      <div className="divide-y divide-zinc-700 rounded-md overflow-hidden">
        {plans.map((p) => (
          <label
            key={p}
            className="flex items-center gap-3 px-2 py-2.5 sm:py-3 text-sm sm:text-base cursor-pointer hover:bg-zinc-800/50 transition-colors"
          >
            <input 
              type="checkbox" 
              className="h-4 w-4 rounded-sm bg-transparent border-zinc-700 cursor-pointer flex-shrink-0" 
            />
            <span className="font-medium">{p}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

const StatsPanel: React.FC = () => {
  const stats = [
    { color: "bg-blue-500", label: "Books read", value: "+50" },
    { color: "bg-purple-500", label: "Animes watched", value: "+300" },
    { color: "bg-red-500", label: "Movies watched", value: "+200" },
    { color: "bg-green-500", label: "Musics learned", value: "+20" },
    { color: "bg-yellow-400", label: "Kanji learned", value: "+1000" },
  ];

  return (
    <div className="w-full sm:w-64 md:w-72 space-y-3">
      {stats.map((s) => (
        <div key={s.label} className="relative rounded-lg overflow-hidden h-12 sm:h-14">
          <div className={`${s.color} h-full flex items-center justify-start px-3 sm:px-4`}> 
            <div className="font-bold text-white text-xs sm:text-sm md:text-base pr-20">{s.label}</div>
          </div>
          <div className={`absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 ${s.color} px-3 sm:px-4 py-1.5 sm:py-2 rounded-md shadow-lg`}> 
            <div className="text-center text-xs sm:text-sm font-bold text-white whitespace-nowrap">{s.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const defaultTrack: Track = {
  id: "default",
  title: "Sample Track",
  artist: "Sample Artist",
  album: "Sample Album",
  artwork: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
  duration: 180,
};

export default function Widgets({ currentTrack, queue = [] }: WidgetsProps) {
  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-6">
      <div className="w-full max-w-7xl mx-auto">
        {/* Mobile: Stack vertically */}
        <div className="flex flex-col md:hidden gap-8">
          <div className="flex justify-center gap-2 w-full">
            <div className="flex flex-col gap-4">
              <DailyRoutine />
              <StatsPanel />
            </div>
            <FuturePlan />
          </div>
          <div className="flex justify-center w-full">
            <MusicPlayer
              theme="midnight"
              currentTrack={currentTrack || defaultTrack}
              queue={queue}
              currentIndex={0}
              initialTime={0}
              autoPlay={false}
              showEqualizer={true}
              className="w-full max-w-md"
            />
          </div>
        </div>

        {/* Tablet: 2x2 grid */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 items-start">
          <FuturePlan />
          <div className="flex justify-center">
            <MusicPlayer
              theme="midnight"
              currentTrack={currentTrack || defaultTrack}
              queue={queue}
              currentIndex={0}
              initialTime={0}
              autoPlay={false}
              showEqualizer={true}
              className="w-full max-w-md"
            />
          </div>
          <DailyRoutine />
          <StatsPanel />
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 xl:gap-8 items-start">
          <div className="flex flex-col gap-6">
            <DailyRoutine />
            <StatsPanel />
          </div>

          <div className="flex justify-center">
            <FuturePlan />
          </div>

          <div className="flex justify-center">
            <MusicPlayer
              theme="cosmic"
              currentTrack={currentTrack || defaultTrack}
              queue={queue}
              currentIndex={0}
              initialTime={0}
              autoPlay={false}
              showEqualizer={true}
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}