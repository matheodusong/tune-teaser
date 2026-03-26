const DURATIONS = [1, 2, 5, 8, 10];

interface AttemptDotsProps {
  attempts: ("correct" | "wrong" | "skipped" | "pending")[];
}

const AttemptDots = ({ attempts }: AttemptDotsProps) => {
  return (
    <div className="flex gap-2 items-center">
      {attempts.map((status, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div
            className={`w-8 h-2 rounded-full transition-all ${
              status === "correct"
                ? "bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.6)]"
                : status === "wrong"
                  ? "bg-destructive shadow-[0_0_8px_hsl(var(--destructive)/0.4)]"
                  : status === "skipped"
                    ? "bg-muted-foreground/50"
                    : "bg-muted"
            }`}
          />
          <span className="text-[10px] font-mono text-muted-foreground">{DURATIONS[i]}s</span>
        </div>
      ))}
    </div>
  );
};

export default AttemptDots;
