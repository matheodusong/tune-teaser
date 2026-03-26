import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Music, RotateCcw, Headphones } from "lucide-react";
import GameScreen from "@/components/GameScreen";
import Leaderboard, { LeaderboardEntry } from "@/components/Leaderboard";
import SongResult from "@/components/SongResult";
import { Song, getRandomSongs, generateRandomName } from "@/data/songs";

type GameState = "menu" | "playing" | "finished";

interface SongResultData {
  song: Song;
  correct: boolean;
  attempts: number;
}

const FAKE_LEADERBOARD: LeaderboardEntry[] = [
  { name: generateRandomName(), score: 42, songsGuessed: 8 },
  { name: generateRandomName(), score: 37, songsGuessed: 7 },
  { name: generateRandomName(), score: 31, songsGuessed: 6 },
  { name: generateRandomName(), score: 25, songsGuessed: 5 },
  { name: generateRandomName(), score: 18, songsGuessed: 4 },
];

const Index = () => {
  const [gameState, setGameState] = useState<GameState>("menu");
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [results, setResults] = useState<SongResultData[]>([]);
  const [score, setScore] = useState(0);
  const [playerName] = useState(generateRandomName);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(FAKE_LEADERBOARD);

  const startGame = () => {
    const gameSongs = getRandomSongs(10);
    setSongs(gameSongs);
    setCurrentSongIndex(0);
    setResults([]);
    setScore(0);
    setGameState("playing");
  };

  const handleSongResult = (correct: boolean, attempts: number) => {
    const points = correct ? 6 - attempts : 0;
    const newScore = score + points;
    setScore(newScore);
    setResults([...results, { song: songs[currentSongIndex], correct, attempts }]);

    setTimeout(() => {
      if (currentSongIndex + 1 >= songs.length) {
        // Game over
        const songsGuessed = results.filter((r) => r.correct).length + (correct ? 1 : 0);
        setLeaderboard((prev) => {
          const newEntry: LeaderboardEntry = { name: playerName, score: newScore, songsGuessed };
          const filtered = prev.filter((e) => e.name !== playerName);
          return [...filtered, newEntry];
        });
        setGameState("finished");
      } else {
        setCurrentSongIndex(currentSongIndex + 1);
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
            Guess the song from a tiny snippet. 10 songs. 5 tries each. How well do you know NYC's top 100?
          </p>
        </div>

        <Button variant="neon" size="lg" onClick={startGame} className="text-lg px-8 py-6 animate-pulse-glow">
          <Music className="h-5 w-5 mr-2" />
          Start Challenge
        </Button>

        <Leaderboard entries={leaderboard} currentPlayerName={playerName} />

        <p className="text-xs font-mono text-muted-foreground">
          Playing as <span className="neon-text">{playerName}</span>
        </p>
      </div>
    );
  }

  // Playing screen
  if (gameState === "playing" && songs.length > 0) {
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
          song={songs[currentSongIndex]}
          songIndex={currentSongIndex}
          totalSongs={songs.length}
          onResult={handleSongResult}
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
        <p className="text-muted-foreground font-mono text-sm">Challenge Complete!</p>
      </div>

      <div className="text-center neon-box rounded-xl p-6 w-full max-w-md">
        <p className="text-5xl font-bold neon-text font-mono">{score}</p>
        <p className="text-sm text-muted-foreground mt-1">
          {results.filter((r) => r.correct).length} / {results.length} songs guessed
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
        Play Again
      </Button>

      <Leaderboard entries={leaderboard} currentPlayerName={playerName} />
    </div>
  );
};

export default Index;
