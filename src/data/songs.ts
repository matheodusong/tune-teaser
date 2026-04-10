export interface Song {
  title: string;
  artist: string;
  searchQuery: string;
  previewUrl?: string;
}

const adjectives = ["Trap", "Dark", "Golden", "Diamond", "Frozen", "Street", "Drill", "Shadow", "Chrome", "Hustle", "Legend", "Plug", "Ghost", "Rich", "Young", "Heavy", "Raw", "Savage", "Loyal", "Grimy"];

export function generateRandomName(): string {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const nouns = ["Beat", "Flow", "King", "City", "Block", "Chain", "Vibe", "Squad", "Zone", "Life"];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const num = Math.floor(Math.random() * 99);
  return `${adj}${noun}${num}`;
}

function seededRandom(seed: number): () => number {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function getDailySeed(): number {
  const now = new Date();
  return now.getUTCFullYear() * 10000 + (now.getUTCMonth() + 1) * 100 + now.getUTCDate();
}

export function shufflePool(songs: Song[]): Song[] {
  const rng = seededRandom(getDailySeed());
  const pool = [...songs];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool;
}

function normalizeForMatch(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function resultMatchesSong(result: any, song: Song): boolean {
  const rArtist = normalizeForMatch(result.artistName || "");
  const rTrack = normalizeForMatch(result.trackName || "");
  const sArtist = normalizeForMatch(song.artist);
  const sTitle = normalizeForMatch(song.title);

  const artistMatch = rArtist.includes(sArtist) || sArtist.includes(rArtist);
  const titleMatch = rTrack.includes(sTitle) || sTitle.includes(rTrack);

  return artistMatch && titleMatch;
}

export async function fetchPreviewUrl(song: Song): Promise<string | null> {
  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(song.searchQuery)}&media=music&limit=10`
    );
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      const exactMatch = data.results.find(
        (r: any) => r.previewUrl && resultMatchesSong(r, song)
      );
      if (exactMatch) return exactMatch.previewUrl;

      const sArtist = normalizeForMatch(song.artist);
      const artistOnly = data.results.find((r: any) => {
        if (!r.previewUrl) return false;
        const rArtist = normalizeForMatch(r.artistName || "");
        return rArtist.includes(sArtist) || sArtist.includes(rArtist);
      });
      if (artistOnly) return artistOnly.previewUrl;

      return null;
    }
    return null;
  } catch {
    return null;
  }
}
