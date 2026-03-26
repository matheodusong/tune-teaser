import { CheckCircle, XCircle, Music } from "lucide-react";

interface SongResultProps {
  title: string;
  artist: string;
  correct: boolean;
  attempts: number;
}

const SongResult = ({ title, artist, correct, attempts }: SongResultProps) => {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-lg ${correct ? "neon-box bg-primary/5" : "bg-destructive/10 border border-destructive/20"}`}>
      {correct ? (
        <CheckCircle className="h-5 w-5 text-primary shrink-0" />
      ) : (
        <XCircle className="h-5 w-5 text-destructive shrink-0" />
      )}
      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm truncate">{title}</p>
        <p className="text-xs text-muted-foreground truncate">{artist}</p>
      </div>
      {correct && (
        <span className="text-xs font-mono neon-text">+{6 - attempts}</span>
      )}
    </div>
  );
};

export default SongResult;
