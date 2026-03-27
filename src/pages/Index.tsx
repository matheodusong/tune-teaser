import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Music, RotateCcw, Headphones } from "lucide-react";
import GameScreen from "@/components/GameScreen";
import SongResult from "@/components/SongResult";
import { Song, getDailyShuffledPool, generateRandomName } from "@/data/songs";

type GameState = "menu" | "playing" | "finished";

interface SongResultData {
  song: Song;
  correct: boolean;
  attempts: number;
}

const SONGS_PER_GAME = 10;

const Index = () => {
  const [gameState, setGameState] = useState<GameState>("menu");
  const [pool, setPool] = useState<Song[]>([]);
  const [poolIndex, setPoolIndex] = useState(0);
  const [songsPlayed, setSongsPlayed] = useState(0);
  const [results, setResults] = useState<SongResultData[]>([]);
  const [score, setScore] = useState(0);
  const [playerName] = useState(generateRandomName);

  const startGame = () => {
    const shuffled = getDailyShuffledPool();
    setPool(shuffled);
    setPoolIndex(0);
    setSongsPlayed(0);
    setResults([]);
    setScore(0);
    setGameState("playing");
  };

  const currentSong = pool[poolIndex] ?? null;

  const handleTrackBlocked = () => {
    // Skip to next song in pool without counting it
    if (poolIndex + 1 < pool.length) {
      setPoolIndex(poolIndex + 1);
    } else {
      // No more songs in pool
      setGameState("finished");
    }
  };

  const handleSongResult = (correct: boolean, attempts: number) => {
    const points = correct ? 6 - attempts : 0;
    const newScore = score + points;
    setScore(newScore);
    setResults([...results, { song: pool[poolIndex], correct, attempts }]);

    const newSongsPlayed = songsPlayed + 1;
    setSongsPlayed(newSongsPlayed);

    setTimeout(() => {
      if (newSongsPlayed >= SONGS_PER_GAME || poolIndex + 1 >= pool.length) {
        setGameState("finished");
      } else {
        setPoolIndex(poolIndex + 1);
      }
    }, 500);
  };

  // Menu screen
  if (gameState === "menu") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 gap-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Headphones className="h-12 w-12 neon-text" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="neon-text">SOUND</span>
            <span className="neon-pink-text">CHECK</span>
          </h1>
          <p className="text-muted-foreground font-mono text-sm max-w-md mx-auto">
            Devine le titre ou l'artiste à partir d'un extrait. 10 sons. 5 essais chacun. Rap FR 2024-2026.
          </p>
        </div>

        <Button variant="neon" size="lg" onClick={startGame} className="text-lg px-8 py-6 animate-pulse-glow">
          <Music className="h-5 w-5 mr-2" />
          Lancer le challenge
        </Button>

        <p className="text-xs font-mono text-muted-foreground">
          Tu joues en tant que <span className="neon-text">{playerName}</span>
        </p>
      </div>
    );
  }

  // Playing screen
  if (gameState === "playing" && currentSong) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 gap-4">
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-2xl font-bold">
            <span className="neon-text">SOUND</span>
            <span className="neon-pink-text">CHECK</span>
          </h1>
        </div>

        <div className="font-mono text-xs text-muted-foreground">
          Score: <span className="neon-text font-bold">{score}</span>
        </div>

        <GameScreen
          song={currentSong}
          songIndex={songsPlayed}
          totalSongs={SONGS_PER_GAME}
          onResult={handleSongResult}
          onTrackBlocked={handleTrackBlocked}
        />
      </div>
    );
  }

  // Finished screen
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 gap-6">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">
          <span className="neon-text">SOUND</span>
          <span className="neon-pink-text">CHECK</span>
        </h1>
        <p className="text-muted-foreground font-mono text-sm">Challenge terminé !</p>
      </div>

      <div className="text-center neon-box rounded-xl p-6 w-full max-w-md">
        <p className="text-5xl font-bold neon-text font-mono">{score}</p>
        <p className="text-sm text-muted-foreground mt-1">
          {results.filter((r) => r.correct).length} / {results.length} sons trouvés
        </p>
      </div>

      {/* Song results */}
      <div className="w-full max-w-md space-y-2">
        {results.map((r, i) => (
          <SongResult
            key={i}
            title={r.song.title}
            artist={r.song.artist}
            correct={r.correct}
            attempts={r.attempts}
          />
        ))}
      </div>

      <Button variant="neonPink" size="lg" onClick={startGame} className="text-lg px-8">
        <RotateCcw className="h-5 w-5 mr-2" />
        Rejouer
      </Button>
    </div>
  );
};

export default Index;
