"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Heart,
  Repeat,
  Shuffle,
  Volume2,
  VolumeX,
  MoreHorizontal,
  Maximize2,
  Minimize2,
  List,
  X,
} from "lucide-react";

export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  artwork: string;
  duration: number;
  url?: string;
}

export interface MusicPlayerProps {
  theme?: "default" | "spotify" | "cosmic" | "midnight";
  currentTrack?: Track;
  queue?: Track[];
  currentIndex?: number;
  initialTime?: number;
  className?: string;
  autoPlay?: boolean;
  showEqualizer?: boolean;
  onPlayPause?: (isPlaying: boolean) => void;
  onTimeChange?: (time: number) => void;
  onTrackEnd?: () => void;
  onTrackChange?: (track: Track, index: number) => void;
  onVolumeChange?: (volume: number) => void;
}

const defaultTrack: Track = {
  id: "default",
  title: "Neon Dreams",
  artist: "Synthwave Collective",
  album: "Electric Nights",
  artwork:
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
  duration: 245,
};

export const MusicPlayer = ({
  theme = "midnight",
  currentTrack,
  queue = [],
  currentIndex = 0,
  initialTime = 0,
  className = "",
  autoPlay = false,
  showEqualizer = true,
  onPlayPause,
  onTimeChange,
  onTrackEnd,
  onTrackChange,
  onVolumeChange,
}: MusicPlayerProps) => {
  const track = currentTrack || defaultTrack;
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [currentTime, setCurrentTime] = useState(0);
  const initialSeekDone = useRef(false);
  const initialTimeRef = useRef(initialTime);
  const [duration, setDuration] = useState(track.duration || 0);
  const [volume, setVolume] = useState(75);
  const [isMuted, setIsMuted] = useState(false);
  const [liked, setLiked] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState<"off" | "all" | "one">("off");
  const [isExpanded, setIsExpanded] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [showQueue, setShowQueue] = useState(false);
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [equalizerBars, setEqualizerBars] = useState(Array(12).fill(0));
  const progressRef = useRef<HTMLDivElement>(null);
  const volumeRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const normalizePublicPath = (url?: string) => {
    if (!url) return undefined;
    let u = url;
    if (u.startsWith("public/")) {
      u = u.replace(/^public/, "/public/");
    }
    if (!u.startsWith("/") && !u.startsWith("http")) u = "/" + u;
    return u;
  };

  // ------------ THEME TOKENS (centralized) ------------
  const getThemeTokens = (t: MusicPlayerProps["theme"] = "midnight") => {
    switch (t) {
      case "spotify":
        return {
          panel:
            "bg-green-50 dark:bg-black text-green-700 dark:text-green-400 border-2 border-green-400/40 shadow-2xl shadow-green-500/20",
          accentBg: "bg-green-500 dark:bg-green-600",
          accentText: "text-white",
          iconActive: "text-green-600 dark:text-green-300",
          iconInactive: "text-green/60 dark:text-white/70",
          progressFill: "bg-gradient-to-r from-green-300 to-green-500",
          equalizerGradient: "from-green-300 to-green-500",
          queueIndicator: "bg-green-500 dark:bg-green-400",
          control:
            "bg-black/20 dark:bg-white/10 hover:bg-black/30 dark:hover:bg-white/20", // neutral control bg (subtle)
          popupBg: "bg-black/90", // popups like volume
          disabledIcon: "text-black/40 dark:text-white/40",
        };
      case "cosmic":
        return {
          panel:
            "bg-gradient-to-br from-violet-900/95 via-purple-800/95 to-fuchsia-900/95 text-white border border-violet-400/40 shadow-2xl shadow-purple-500/20",
          accentBg: "bg-violet-500 dark:bg-violet-600",
          accentText: "text-white",
          iconActive: "text-violet-500",
          iconInactive: "text-white/70",
          progressFill: "bg-gradient-to-r from-violet-300 to-purple-500",
          equalizerGradient: "from-violet-300 to-purple-500",
          queueIndicator: "bg-violet-400",
          control:
            "bg-white/10 hover:bg-white/20", // lighter translucent controls on dark panel
          popupBg: "bg-black/90",
          disabledIcon: "text-white/40",
        };
      case "midnight":
        return {
          panel:
            "bg-gradient-to-br from-slate-200 via-gray-200 to-zinc-200 dark:from-slate-900/95 dark:via-neutral-800/95 dark:to-zinc-900/95 text-black dark:text-white border border-slate-400/40 shadow-2xl shadow-slate-500/20",
          accentBg: "bg-zinc-400 dark:bg-zinc-600",
          accentText: "text-black dark:text-white",
          iconActive: "text-zinc-700 dark:text-zinc-200",
          iconInactive: "text-white/70 dark:text-white/70",
          progressFill: "bg-gradient-to-r from-slate-300 to-gray-400",
          equalizerGradient: "from-slate-200 to-gray-400",
          queueIndicator: "bg-zinc-400 dark:bg-zinc-600",
          control:
            "bg-black/20 dark:bg-white/10 hover:bg-black/30 dark:hover:bg-white/20",
          popupBg: "bg-black/90",
          disabledIcon: "text-black/40 dark:text-white/40",
        };
      default:
        return {
          panel:
            "bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100 dark:from-blue-900/95 dark:via-cyan-800/95 dark:to-teal-900/95 text-black dark:text-white border border-blue-400/40 shadow-2xl shadow-cyan-500/20",
          accentBg: "bg-cyan-400 dark:bg-cyan-500",
          accentText: "text-black dark:text-white",
          iconActive: "text-cyan-600 dark:text-cyan-300",
          iconInactive: "text-black/70 dark:text-white/70",
          progressFill: "bg-gradient-to-r from-indigo-300 to-purple-500",
          equalizerGradient: "from-indigo-300 to-purple-500",
          queueIndicator: "bg-cyan-400 dark:bg-cyan-500",
          control:
            "bg-black/20 dark:bg-white/10 hover:bg-black/30 dark:hover:bg-white/20",
          popupBg: "bg-black/90",
          disabledIcon: "text-black/40 dark:text-white/40",
        };
    }
  };

  const tokens = getThemeTokens(theme);
  // ----------------------------------------------------

  useEffect(() => {
    setDuration(track.duration || 0);
  }, [track.duration, track.url]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      const d = isFinite(audio.duration) ? Math.floor(audio.duration) : track.duration;
      setDuration(d);

      if (!initialSeekDone.current && initialTimeRef.current > 0) {
        const seekTo = Math.min(initialTimeRef.current, Math.floor(d || track.duration || 0));
        try {
          audio.currentTime = seekTo;
          setCurrentTime(seekTo);
          initialSeekDone.current = true;
        } catch (err) {
          console.warn("[music-player] initial seek failed:", err);
        }
      } else {
        setCurrentTime(Math.floor(audio.currentTime));
      }
    };

    const handleTimeUpdate = () => {
      const t = Math.floor(audio.currentTime);
      setCurrentTime(t);
      if (onTimeChange) onTimeChange(t);
    };

    const handleEnded = () => {
      if (repeatMode === "one") {
        audio.currentTime = 0;
        audio.play().catch(() => {});
        setCurrentTime(0);
        return;
      }
      if (repeatMode === "all" || currentIndex < queue.length - 1) {
        const nextIndex = currentIndex + 1 >= queue.length ? 0 : currentIndex + 1;
        if (onTrackChange && queue[nextIndex]) {
          onTrackChange(queue[nextIndex], nextIndex);
        }
      } else {
        setIsPlaying(false);
      }
      if (onTrackEnd) onTrackEnd();
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audioRef, onTimeChange, onTrackEnd, onTrackChange, queue, currentIndex, repeatMode, track.duration]);

  useEffect(() => {
    if (!audioRef.current) return;
    const normalized = normalizePublicPath(track.url);
    if (normalized) {
      audioRef.current.src = normalized;
      audioRef.current.load();

      if (autoPlay || isPlaying) {
        audioRef.current.play().catch((err) => {
          console.error("Audio play failed:", err);
          setIsPlaying(false);
        });
      }
    } else {
      audioRef.current.removeAttribute("src");
    }
  }, [track.url]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      console.warn("Audio element not found");
      return;
    }
    if (isPlaying) {
      audio.play().catch((err) => {
        console.error("Audio play failed:", err);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
    if (onPlayPause) onPlayPause(isPlaying);
  }, [isPlaying, onPlayPause]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (Math.abs(audio.currentTime - currentTime) > 0.5) {
      audio.currentTime = currentTime;
    }
  }, [currentTime]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = isMuted;
    audio.volume = Math.max(0, Math.min(1, volume / 100));
    if (onVolumeChange) onVolumeChange(isMuted ? 0 : volume);
  }, [volume, isMuted, onVolumeChange]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying && showEqualizer) {
      interval = setInterval(() => {
        setEqualizerBars((bars) => bars.map(() => Math.random() * 100));
      }, 150);
    } else {
      setEqualizerBars(Array(12).fill(0));
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, showEqualizer]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;
      switch (e.code) {
        case "Space":
          e.preventDefault();
          togglePlay();
          break;
        case "ArrowLeft":
          e.preventDefault();
          setCurrentTime((prev) => Math.max(0, prev - 10));
          break;
        case "ArrowRight":
          e.preventDefault();
          setCurrentTime((prev) => Math.min(duration || track.duration, prev + 10));
          break;
        case "ArrowUp":
          e.preventDefault();
          setVolume((prev) => Math.min(100, prev + 10));
          break;
        case "ArrowDown":
          e.preventDefault();
          setVolume((prev) => Math.max(0, prev - 10));
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [duration, track.duration]);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" + sec : sec}`;
  };

  const togglePlay = () => {
    setIsPlaying((p) => {
      const newState = !p;
      if (onPlayPause) onPlayPause(newState);
      return newState;
    });
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!progressRef.current || !duration) return;
    const { left, width } = progressRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clickPosition = clientX - left;
    const percentage = Math.max(0, Math.min(1, clickPosition / width));
    const newTime = Math.floor(duration * percentage);
    setCurrentTime(newTime);
    if (audioRef.current) audioRef.current.currentTime = newTime;
    if (onTimeChange) onTimeChange(newTime);
  };

  const handleProgressHover = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !duration) return;
    const { left, width } = progressRef.current.getBoundingClientRect();
    const hoverPosition = e.clientX - left;
    const percentage = Math.max(0, Math.min(1, hoverPosition / width));
    const hoverTimeValue = Math.floor(duration * percentage);
    setHoverTime(hoverTimeValue);
  };

  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!volumeRef.current) return;
    const { top, height } = volumeRef.current.getBoundingClientRect();
    const clientY = "touches" in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    const clickPosition = clientY - top;
    const percentage = Math.max(0, Math.min(1, 1 - clickPosition / height));
    const newVolume = Math.floor(percentage * 100);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    if (onVolumeChange) onVolumeChange(newVolume);
  };

  const toggleMute = () => {
    setIsMuted((m) => {
      const newMute = !m;
      if (onVolumeChange) onVolumeChange(newMute ? 0 : volume);
      return newMute;
    });
  };

  const toggleVolumeSlider = () => {
    setShowVolumeSlider(!showVolumeSlider);
  };

  const toggleRepeat = () => {
    const modes: ("off" | "all" | "one")[] = ["off", "all", "one"];
    const currentModeIndex = modes.indexOf(repeatMode);
    const nextMode = modes[(currentModeIndex + 1) % modes.length];
    setRepeatMode(nextMode);
  };

  const skipTrack = (direction: "next" | "prev") => {
    if (!queue.length) return;

    let nextIndex;
    if (direction === "next") {
      nextIndex = isShuffled ? Math.floor(Math.random() * queue.length) : (currentIndex + 1) % queue.length;
    } else {
      nextIndex = isShuffled
        ? Math.floor(Math.random() * queue.length)
        : currentIndex === 0
        ? queue.length - 1
        : currentIndex - 1;
    }

    if (onTrackChange && queue[nextIndex]) {
      onTrackChange(queue[nextIndex], nextIndex);
    }
  };

  const selectTrackFromQueue = (t: Track, index: number) => {
    if (onTrackChange) {
      onTrackChange(t, index);
    }
    setShowQueue(false);
  };

  // ---------- RENDER ----------
  return (
    <div className="relative w-full">
      <audio ref={audioRef} preload="metadata" style={{ display: "none" }} />

      <div className={`${tokens.panel} ${className} rounded-2xl overflow-hidden shadow-lg w-full max-w-md mx-auto`}>
        {/* Artwork Section */}
        <div className="relative">
          <div
            className={`w-full transition-all duration-500 ${isExpanded ? "h-72 xs:h-80 sm:h-96" : "h-40 xs:h-48 sm:h-60"} relative overflow-hidden`}
          >
            <img
              src={
                normalizePublicPath(track.artwork) ||
                "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop"
              }
              alt={`${track.title} by ${track.artist}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${isExpanded ? "from-transparent" : "from-black/80"} via-transparent to-transparent`}
            ></div>

            {/* Equalizer Overlay */}
            {showEqualizer && isPlaying && (
              <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 left-2 xs:left-3 sm:left-4 flex items-end gap-0.5 sm:gap-1 opacity-80">
                {equalizerBars.map((height, i) => (
                  <div
                    key={i}
                    className={`w-0.5 xs:w-1 sm:w-1.5 bg-gradient-to-t ${tokens.equalizerGradient} rounded-full transition-all duration-150 shadow-sm`}
                    style={{ height: `${Math.max(4, height * 0.25)}px` }}
                  />
                ))}
              </div>
            )}

            {/* Expand Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`absolute top-2 xs:top-3 sm:top-4 right-2 xs:right-3 sm:right-4 p-1.5 xs:p-2 rounded-full ${tokens.control} transition-colors active:scale-95`}
              aria-pressed={isExpanded}
              title={isExpanded ? "Collapse" : "Expand"}
            >
              {isExpanded ? (
                <Minimize2 className={`h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4 ${tokens.iconInactive}`} />
              ) : (
                <Maximize2 className={`h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4 ${tokens.iconInactive}`} />
              )}
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-3 xs:p-4 sm:p-6">
          <div className="flex items-start justify-between mb-3 xs:mb-4 sm:mb-6">
            <div className="flex-1 min-w-0 pr-2">
              <h1 className="text-base xs:text-lg sm:text-xl font-bold mb-0.5 xs:mb-1 truncate">
                {track.title}
              </h1>
              <p className="text-xs sm:text-sm opacity-70 truncate">
                {track.artist} • {track.album}
              </p>
            </div>
            <div className="flex items-center gap-0.5 xs:gap-1 sm:gap-2 flex-shrink-0">
              <button
                onClick={() => setLiked(!liked)}
                className={`p-1.5 xs:p-2 rounded-full transition-all hover:scale-110 active:scale-95 duration-300 ${liked ? "text-red-500 drop-shadow-lg" : tokens.iconInactive}`}
                aria-pressed={liked}
                title={liked ? "Unlike" : "Like"}
              >
                <Heart
                  className={`h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 ${liked ? "fill-current" : ""}`}
                />
              </button>

              <button
                className={`p-1.5 xs:p-2 rounded-full ${tokens.iconInactive} hover:${tokens.iconActive} transition-colors active:scale-95`}
                title="More"
                aria-label="More options"
              >
                <MoreHorizontal className={`h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5 ${tokens.iconInactive}`} />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-3 xs:mb-4 sm:mb-6">
            <div
              ref={progressRef}
              className="relative h-2 sm:h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden cursor-pointer group backdrop-blur-sm border border-white/5 touch-none"
              onClick={handleProgressClick}
              onTouchStart={handleProgressClick}
              onMouseMove={handleProgressHover}
              onMouseLeave={() => setHoverTime(null)}
            >
              <div
                className={`absolute top-0 left-0 h-full ${tokens.progressFill} rounded-full transition-all`}
                style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg border-2 border-white/20"
                style={{
                  left: `${(currentTime / (duration || 1)) * 100}%`,
                  marginLeft: "-6px",
                }}
              />
              {hoverTime !== null && (
                <div
                  className="absolute -top-7 xs:-top-8 sm:-top-10 bg-black/90 text-white text-xs px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg pointer-events-none backdrop-blur-sm border border-white/10 hidden sm:block"
                  style={{
                    left: `${(hoverTime / (duration || 1)) * 100}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  {formatTime(hoverTime)}
                </div>
              )}
            </div>
            <div className="flex justify-between mt-1 xs:mt-1.5 sm:mt-2 text-xs opacity-70">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration || track.duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between gap-2">
            {/* Left Controls */}
            <div className="flex items-center gap-0.5 xs:gap-1 sm:gap-3 flex-shrink-0">
              <button
                onClick={() => setIsShuffled(!isShuffled)}
                className={`p-1.5 xs:p-2 rounded-full transition-all hover:scale-110 active:scale-95 ${isShuffled ? tokens.iconActive : tokens.iconInactive}`}
                aria-pressed={isShuffled}
                title="Shuffle"
              >
                <Shuffle className="h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4" />
              </button>
              <button
                onClick={() => toggleRepeat()}
                className={`p-1.5 xs:p-2 rounded-full transition-all hover:scale-110 active:scale-95 relative ${repeatMode !== "off" ? tokens.iconActive : tokens.iconInactive}`}
                aria-pressed={repeatMode !== "off"}
                title={`Repeat: ${repeatMode}`}
              >
                <Repeat className="h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4" />
                {repeatMode === "one" && (
                  <span className="absolute -top-0.5 xs:-top-1 -right-0.5 xs:-right-1 w-2.5 h-2.5 xs:w-3 xs:h-3 bg-white text-black text-[9px] xs:text-xs rounded-full flex items-center justify-center font-bold">
                    1
                  </span>
                )}
              </button>
            </div>

            {/* Center Controls */}
            <div className="flex items-center gap-1 xs:gap-2 sm:gap-4 flex-shrink-0">
              <button
                onClick={() => skipTrack("prev")}
                className={`p-1 xs:p-1.5 sm:p-2 transition-all hover:scale-110 active:scale-95 ${queue.length > 0 ? tokens.iconInactive : tokens.disabledIcon}`}
                disabled={queue.length === 0}
                title="Previous"
              >
                <SkipBack className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6" />
              </button>

              <button
                onClick={togglePlay}
                className={`p-2.5 xs:p-3 sm:p-4 rounded-full ${tokens.accentBg} ${tokens.accentText} hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-xl flex-shrink-0`}
                aria-pressed={isPlaying}
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Play className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 ml-0.5" />
                )}
              </button>

              <button
                onClick={() => skipTrack("next")}
                className={`p-1 xs:p-1.5 sm:p-2 transition-all hover:scale-110 active:scale-95 ${queue.length > 0 ? tokens.iconInactive : tokens.disabledIcon}`}
                disabled={queue.length === 0}
                title="Next"
              >
                <SkipForward className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-0.5 xs:gap-1 sm:gap-2 relative flex-shrink-0">
              <button
                onClick={toggleVolumeSlider}
                className={`p-1.5 xs:p-2 rounded-full ${tokens.iconInactive} hover:${tokens.iconActive} transition-all hover:scale-110 active:scale-95`}
                title="Volume"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4" />
                ) : (
                  <Volume2 className="h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4" />
                )}
              </button>

              {/* Vertical Volume Slider */}
              {showVolumeSlider && (
                <div className={`absolute bottom-full mb-2 right-0 p-2 xs:p-2.5 sm:p-3 rounded-xl backdrop-blur-sm border border-white/10 z-10 ${tokens.popupBg}`}>
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-xs text-white/70">{isMuted ? 0 : volume}%</div>
                    <div
                      ref={volumeRef}
                      className="w-1.5 xs:w-2 h-14 xs:h-16 sm:h-20 bg-white/20 rounded-full cursor-pointer border border-white/5 relative touch-none"
                      onClick={handleVolumeChange}
                      onTouchStart={handleVolumeChange}
                    >
                      <div
                        className={`absolute bottom-0 w-full ${tokens.progressFill} rounded-full transition-all`}
                        style={{ height: `${isMuted ? 0 : volume}%` }}
                      />
                    </div>
                    <button onClick={toggleMute} className="p-1 rounded text-white/60 hover:text-white transition-colors active:scale-95" title={isMuted ? "Unmute" : "Mute"}>
                      {isMuted ? (
                        <VolumeX className="h-2.5 w-2.5 xs:h-3 xs:w-3" />
                      ) : (
                        <Volume2 className="h-2.5 w-2.5 xs:h-3 xs:w-3" />
                      )}
                    </button>
                  </div>
                </div>
              )}

              <button
                onClick={() => setShowQueue(!showQueue)}
                className={`p-1.5 xs:p-2 rounded-full transition-all hover:scale-110 active:scale-95 ${showQueue || queue.length > 0 ? tokens.iconActive : tokens.iconInactive} ${queue.length === 0 ? "opacity-50" : ""}`}
                disabled={queue.length === 0}
                title="Queue"
                aria-pressed={showQueue}
              >
                <List className="h-3.5 w-3.5 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Queue */}
      {showQueue && queue.length > 0 && (
        <div className={`${tokens.panel} rounded-2xl mt-4 overflow-hidden shadow-lg w-full max-w-md mx-auto`}>
          <div className="p-3 xs:p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Queue ({queue.length})</h3>
              <button
                onClick={() => setShowQueue(false)}
                className={`p-1.5 rounded-full transition-colors ${showQueue || queue.length > 0 ? tokens.iconActive : tokens.iconInactive} ${queue.length === 0 ? "opacity-50" : ""}`}
                title="Close queue"
                aria-label="Close queue"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-2 max-h-64 overflow-y-auto">
              {queue.map((queueTrack, index) => (
                <div
                  key={queueTrack.id}
                  onClick={() => selectTrackFromQueue(queueTrack, index)}
                  className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all hover:bg-black/5 dark:hover:bg-white/5 ${index === currentIndex ? "bg-black/10 dark:bg-white/10" : ""}`}
                >
                  <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={normalizePublicPath(queueTrack.artwork) || "/placeholder.svg"}
                      alt={queueTrack.title}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium truncate ${index === currentIndex ? "text-black dark:text-white" : "text-black/80 dark:text-white/80"}`}>
                      {queueTrack.title}
                    </p>
                    <p className="text-xs opacity-60 truncate">{queueTrack.artist}</p>
                  </div>
                  <div className="text-xs opacity-50 flex-shrink-0">{formatTime(queueTrack.duration)}</div>
                  {index === currentIndex && <div className={`w-2 h-2 rounded-full ${tokens.queueIndicator} flex-shrink-0`} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
