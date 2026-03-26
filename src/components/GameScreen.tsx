import { useState, useRef, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, Music } from "lucide-react";
import { Song } from "@/data/songs";
import GuessInput from "./GuessInput";
import AttemptDots from "./AttemptDots";
import Waveform from "./Waveform";

const DURATIONS = [1, 2, 5, 8, 10];
const TOTAL_VISIBLE_DURATION = 30; // for waveform visualization

interface GameScreenProps {
  song: Song;
  songIndex: number;
  totalSongs: number;
  onResult: (correct: boolean, attempts: number) => void;
}

const GameScreen = ({ song, songIndex, totalSongs, onResult }: GameScreenProps) => {
  const [attempt, setAttempt] = useState(0);
  const [attempts, setAttempts] = useState<("correct" | "wrong" | "skipped" | "pending")[]>(
    Array(5).fill("pending")
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const widgetRef = useRef<HTMLIFrameElement | null>(null);

  const currentMaxDuration = DURATIONS[Math.min(attempt, 4)];

  // We'll use a simple Audio approach with SoundCloud widget API
  // Since direct audio isn't available, we use the SC widget
  const scWidgetUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(song.soundcloudUrl)}&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`;

  const playSnippet = useCallback(() => {
    if (!widgetRef.current) return;
    
    const widget = (window as any).SC?.Widget?.(widgetRef.current);
    if (!widget) return;

    widget.seekTo(0);
    widget.play();
    setIsPlaying(true);
    setProgress(0);

    const maxMs = currentMaxDuration * 1000;
    const startTime = Date.now();

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min(elapsed / maxMs, 1));

      if (elapsed >= maxMs) {
        widget.pause();
        setIsPlaying(false);
        if (timerRef.current) clearInterval(timerRef.current);
      }
    }, 50);
  }, [currentMaxDuration]);

  const stopPlayback = useCallback(() => {
    if (widgetRef.current) {
      const widget = (window as any).SC?.Widget?.(widgetRef.current);
      widget?.pause();
    }
    if (timerRef.current) clearInterval(timerRef.current);
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Load SC Widget API
  useEffect(() => {
    if (!(window as any).SC) {
      const script = document.createElement("script");
      script.src = "https://w.soundcloud.com/player/api.js";
      script.async = true;
      script.onload = () => setAudioLoaded(true);
      document.body.appendChild(script);
    } else {
      setAudioLoaded(true);
    }
  }, []);

  // Reset when song changes  
  useEffect(() => {
    setAttempt(0);
    setAttempts(Array(5).fill("pending"));
    setIsPlaying(false);
    setProgress(0);
    setRevealed(false);
    if (timerRef.current) clearInterval(timerRef.current);
  }, [song]);

  const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

  const handleGuess = (guess: string) => {
    if (revealed) return;
    const normalizedGuess = normalize(guess);
    const titleMatch = normalize(song.title).includes(normalizedGuess) || normalizedGuess.includes(normalize(song.title));
    const artistMatch = normalize(song.artist).includes(normalizedGuess) || normalizedGuess.includes(normalize(song.artist));

    if (titleMatch || artistMatch) {
      const newAttempts = [...attempts];
      newAttempts[attempt] = "correct";
      setAttempts(newAttempts);
      setRevealed(true);
      stopPlayback();
      setTimeout(() => onResult(true, attempt + 1), 1500);
    } else {
      const newAttempts = [...attempts];
      newAttempts[attempt] = "wrong";
      setAttempts(newAttempts);

      if (attempt >= 4) {
        setRevealed(true);
        stopPlayback();
        setTimeout(() => onResult(false, 5), 1500);
      } else {
        setAttempt(attempt + 1);
      }
    }
  };

  const handleSkip = () => {
    if (revealed) return;
    const newAttempts = [...attempts];
    newAttempts[attempt] = "skipped";
    setAttempts(newAttempts);
    stopPlayback();

    if (attempt >= 4) {
      setRevealed(true);
      setTimeout(() => onResult(false, 5), 1500);
    } else {
      setAttempt(attempt + 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-lg">
      {/* Song counter */}
      <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
        <Music className="h-4 w-4" />
        <span>Song {songIndex + 1} / {totalSongs}</span>
      </div>

      {/* Hidden SoundCloud widget */}
      <iframe
        ref={widgetRef}
        src={scWidgetUrl}
        width="0"
        height="0"
        allow="autoplay"
        className="hidden"
        title="SoundCloud Player"
      />

      {/* Waveform visualization */}
      <div className="w-full glass rounded-lg p-4">
        <Waveform
          isPlaying={isPlaying}
          progress={progress}
          maxDuration={currentMaxDuration}
          totalDuration={TOTAL_VISIBLE_DURATION}
        />
      </div>

      {/* Play controls */}
      <div className="flex items-center gap-3">
        <Button
          variant="neon"
          size="lg"
          onClick={isPlaying ? stopPlayback : playSnippet}
          className="animate-pulse-glow"
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          <span className="ml-1 font-mono text-xs">{currentMaxDuration}s</span>
        </Button>
      </div>

      {/* Attempt dots */}
      <AttemptDots attempts={attempts} />

      {/* Result reveal */}
      {revealed && (
        <div className={`text-center p-4 rounded-lg w-full ${attempts.includes("correct") ? "neon-box" : "bg-destructive/10 border border-destructive/30"}`}>
          <p className="font-bold text-lg">{song.title}</p>
          <p className="text-sm text-muted-foreground">{song.artist}</p>
          {attempts.includes("correct") ? (
            <p className="neon-text text-sm mt-1 font-mono">+{6 - attempt} points</p>
          ) : (
            <p className="text-destructive text-sm mt-1 font-mono">+0 points</p>
          )}
        </div>
      )}

      {/* Guess input */}
      <GuessInput
        onGuess={handleGuess}
        onSkip={handleSkip}
        disabled={revealed}
        attempt={attempt + 1}
        maxAttempts={5}
      />
    </div>
  );
};

export default GameScreen;
