import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Music } from "lucide-react";
import { Song } from "@/data/songs";
import GuessInput from "./GuessInput";
import AttemptDots from "./AttemptDots";
import Waveform from "./Waveform";

const DURATIONS = [1, 2, 5, 8, 10];
const TOTAL_VISIBLE_DURATION = 30;

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

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
  const [trackBlocked, setTrackBlocked] = useState(false);
  const [trackReady, setTrackReady] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const playerIdRef = useRef(`yt-player-${Math.random().toString(36).slice(2)}`);

  const currentMaxDuration = DURATIONS[Math.min(attempt, 4)];

  const playSnippet = useCallback(() => {
    const player = playerRef.current;
    if (!player || typeof player.seekTo !== "function") return;

    player.seekTo(0, true);
    player.playVideo();
    setIsPlaying(true);
    setProgress(0);

    const maxMs = currentMaxDuration * 1000;
    const startTime = Date.now();

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min(elapsed / maxMs, 1));

      if (elapsed >= maxMs) {
        player.pauseVideo();
        setIsPlaying(false);
        if (timerRef.current) clearInterval(timerRef.current);
      }
    }, 50);
  }, [currentMaxDuration]);

  const stopPlayback = useCallback(() => {
    playerRef.current?.pauseVideo?.();
    if (timerRef.current) clearInterval(timerRef.current);
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Load YouTube IFrame API
  useEffect(() => {
    if (!window.YT) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Create / recreate player when song changes
  useEffect(() => {
    setTrackBlocked(false);
    setTrackReady(false);

    // Destroy previous player
    if (playerRef.current) {
      try { playerRef.current.destroy(); } catch {}
      playerRef.current = null;
    }

    const createPlayer = () => {
      if (!containerRef.current) return;

      // Reset container HTML so YT creates a fresh iframe
      containerRef.current.innerHTML = `<div id="${playerIdRef.current}"></div>`;

      playerRef.current = new window.YT.Player(playerIdRef.current, {
        height: "0",
        width: "0",
        videoId: song.youtubeId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: () => setTrackReady(true),
          onError: () => setTrackBlocked(true),
        },
      });
    };

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = createPlayer;
    }

    return () => {
      if (playerRef.current) {
        try { playerRef.current.destroy(); } catch {}
        playerRef.current = null;
      }
    };
  }, [song]);

  // When track is blocked, notify parent to skip without counting
  useEffect(() => {
    if (trackBlocked && !revealed) {
      onTrackBlocked();
    }
  }, [trackBlocked, revealed, onTrackBlocked]);

  // Reset when song changes
  useEffect(() => {
    setAttempt(0);
    setAttempts(Array(5).fill("pending"));
    setIsPlaying(false);
    setProgress(0);
    setRevealed(false);
    setTrackBlocked(false);
    setTrackReady(false);
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
      <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
        <Music className="h-4 w-4" />
        <span>Son {songIndex + 1} / {totalSongs}</span>
      </div>

      <div ref={containerRef} className="hidden" />

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
