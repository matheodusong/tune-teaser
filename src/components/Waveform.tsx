import { useEffect, useState } from "react";

interface WaveformProps {
  isPlaying: boolean;
  progress: number; // 0 to 1
  maxDuration: number; // in seconds
  totalDuration: number; // total song duration
}

const BAR_COUNT = 40;

const Waveform = ({ isPlaying, progress, maxDuration, totalDuration }: WaveformProps) => {
  const [bars] = useState(() =>
    Array.from({ length: BAR_COUNT }, () => 0.2 + Math.random() * 0.8)
  );
  const filledBars = Math.floor((maxDuration / totalDuration) * BAR_COUNT);
  const currentBar = Math.floor(progress * filledBars);

  return (
    <div className="flex items-end gap-[2px] h-16 w-full px-2">
      {bars.map((height, i) => {
        const isFilled = i < filledBars;
        const isActive = i <= currentBar && isPlaying;
        const isLocked = !isFilled;

        return (
          <div
            key={i}
            className="flex-1 rounded-full transition-all duration-150"
            style={{
              height: `${height * 100}%`,
              backgroundColor: isLocked
                ? "hsl(var(--muted))"
                : isActive
                  ? "hsl(var(--primary))"
                  : "hsl(var(--primary) / 0.3)",
              boxShadow: isActive ? "0 0 6px hsl(var(--primary) / 0.5)" : "none",
            }}
          />
        );
      })}
    </div>
  );
};

export default Waveform;
