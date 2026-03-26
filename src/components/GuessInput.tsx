import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, SkipForward } from "lucide-react";

interface GuessInputProps {
  onGuess: (guess: string) => void;
  onSkip: () => void;
  disabled: boolean;
  attempt: number;
  maxAttempts: number;
}

const GuessInput = ({ onGuess, onSkip, disabled, attempt, maxAttempts }: GuessInputProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onGuess(value.trim());
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={`Guess ${attempt}/${maxAttempts} — song title or artist...`}
        disabled={disabled}
        className="flex-1 bg-secondary border-border font-mono text-sm placeholder:text-muted-foreground"
      />
      <Button type="submit" variant="neon" size="icon" disabled={disabled || !value.trim()}>
        <Send className="h-4 w-4" />
      </Button>
      <Button type="button" variant="neonOutline" size="icon" onClick={onSkip} disabled={disabled}>
        <SkipForward className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default GuessInput;
