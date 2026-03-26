import { Trophy } from "lucide-react";

export interface LeaderboardEntry {
  name: string;
  score: number;
  songsGuessed: number;
}

interface LeaderboardProps {
  entries: LeaderboardEntry[];
  currentPlayerName: string;
}

const Leaderboard = ({ entries, currentPlayerName }: LeaderboardProps) => {
  const sorted = [...entries].sort((a, b) => b.score - a.score);

  return (
    <div className="glass rounded-lg p-4 w-full max-w-md">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="h-5 w-5 text-gold" />
        <h2 className="text-lg font-bold neon-text">Leaderboard</h2>
      </div>
      <div className="space-y-2">
        {sorted.map((entry, i) => {
          const isCurrentPlayer = entry.name === currentPlayerName;
          return (
            <div
              key={entry.name}
              className={`flex items-center justify-between px-3 py-2 rounded-md font-mono text-sm transition-all ${
                isCurrentPlayer ? "neon-box bg-primary/5" : "bg-secondary/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-6 text-center font-bold ${i === 0 ? "text-gold" : i === 1 ? "text-muted-foreground" : i === 2 ? "text-neon-pink" : "text-muted-foreground"}`}>
                  {i + 1}
                </span>
                <span className={isCurrentPlayer ? "neon-text font-bold" : "text-foreground"}>
                  {entry.name}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground text-xs">{entry.songsGuessed}/10</span>
                <span className={`font-bold ${isCurrentPlayer ? "neon-text" : "text-foreground"}`}>
                  {entry.score}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leaderboard;
