import { useState, useRef, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Music } from "lucide-react";
import { Song, fetchPreviewUrl } from "@/data/songs";
import GuessInput from "./GuessInput";
import AttemptDots from "./AttemptDots";
import Waveform from "./Waveform";

const DURATIONS = [1, 2, 5, 8, 10];
const TOTAL_VISIBLE_DURATION = 30;

interface GameScreenProps {
  song: Song;
  songIndex: number;
  totalSongs: number;
  onResult: (correct: boolean, attempts: number) => void;
  onTrackBlocked: () => void;
}

const GameScreen = ({ song, songIndex, totalSongs, onResult, onTrackBlocked }: GameScreenProps) => {
  const [attempt, setAttempt] = useState(0);
  const [attempts, setAttempts] = useState<("correct" | "wrong" | "skipped" | "pending")[]>(
    Array(5).fill("pending")
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [trackReady, setTrackReady] = useState(false);
  const [trackBlocked, setTrackBlocked] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentMaxDuration = DURATIONS[Math.min(attempt, 4)];

  // Fetch preview URL when song changes
  useEffect(() => {
    let cancelled = false;
    setTrackReady(false);
    setTrackBlocked(false);
    setAttempt(0);
    setAttempts(Array(5).fill("pending"));
    setIsPlaying(false);
    setProgress(0);
    setRevealed(false);

    // Clean up previous audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
      audioRef.current = null;
    }
    if (timerRef.current) clearInterval(timerRef.current);

    fetchPreviewUrl(song).then((url) => {
      if (cancelled) return;
      if (!url) {
        setTrackBlocked(true);
        return;
      }

      const audio = new Audio(url);
      audio.setAttribute("playsinline", "true");
      audio.preload = "auto";
      audioRef.current = audio;

      audio.addEventListener("canplaythrough", () => {
        if (!cancelled) setTrackReady(true);
      });
      audio.addEventListener("error", () => {
        if (!cancelled) setTrackBlocked(true);
      });

      audio.load();
    });

    return () => {
      cancelled = true;
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [song]);

  // Notify parent when track is blocked
  useEffect(() => {
    if (trackBlocked && !revealed) {
      onTrackBlocked();
    }
  }, [trackBlocked, revealed, onTrackBlocked]);

  const playSnippet = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    setIsPlaying(true);
    setProgress(0);

    const maxMs = currentMaxDuration * 1000;
    const startTime = Date.now();

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min(elapsed / maxMs, 1));

      if (elapsed >= maxMs) {
        audio.pause();
        setIsPlaying(false);
        if (timerRef.current) clearInterval(timerRef.current);
      }
    }, 50);
  }, [currentMaxDuration]);

  const stopPlayback = useCallback(() => {
    audioRef.current?.pause();
    if (timerRef.current) clearInterval(timerRef.current);
    setIsPlaying(false);
  }, []);

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
      <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
        <Music className="h-4 w-4" />
        <span>Son {songIndex + 1} / {totalSongs}</span>
      </div>

      {trackBlocked ? (
        <div className="text-center p-4 rounded-lg w-full bg-muted/20 border border-muted-foreground/20">
          <p className="text-sm text-muted-foreground font-mono">Son indisponible, passage au suivant...</p>
        </div>
      ) : !trackReady ? (
        <div className="text-center p-4 rounded-lg w-full">
          <p className="text-sm text-muted-foreground font-mono animate-pulse">Chargement...</p>
        </div>
      ) : (
        <>
          <div className="w-full glass rounded-lg p-4">
            <Waveform
              isPlaying={isPlaying}
              progress={progress}
              maxDuration={currentMaxDuration}
              totalDuration={TOTAL_VISIBLE_DURATION}
            />
          </div>

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

          <AttemptDots attempts={attempts} />

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

          <GuessInput
            onGuess={handleGuess}
            onSkip={handleSkip}
            disabled={revealed}
            attempt={attempt + 1}
            maxAttempts={5}
          />
        </>
      )}
    </div>
  );
};

export default GameScreen;
