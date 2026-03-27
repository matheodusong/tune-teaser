export interface Song {
  title: string;
  artist: string;
  soundcloudUrl: string;
}

// Meilleurs sons Rap FR 2024-2026
export const songPool: Song[] = [
  // --- 2024 ---
  { title: "Pyramide", artist: "Werenoi", soundcloudUrl: "https://soundcloud.com/werenoi/pyramide" },
  { title: "Bande organisée 2", artist: "Jul ft. Various", soundcloudUrl: "https://soundcloud.com/jul-music/bande-organisee-2" },
  { title: "Chambellan", artist: "Gazo", soundcloudUrl: "https://soundcloud.com/gazo-music/chambellan" },
  { title: "Tout en haut", artist: "Ninho", soundcloudUrl: "https://soundcloud.com/ninhofficiel/tout-en-haut" },
  { title: "CBA", artist: "SDM", soundcloudUrl: "https://soundcloud.com/sdm-officiel/cba" },
  { title: "Imagine", artist: "Carbonne", soundcloudUrl: "https://soundcloud.com/carbonne-officiel/imagine" },
  { title: "Spider", artist: "Gims ft. Dystinct", soundcloudUrl: "https://soundcloud.com/gaborockmusic/spider" },
  { title: "Tulum", artist: "Tiakola", soundcloudUrl: "https://soundcloud.com/tiakola-officiel/tulum" },
  { title: "Hov", artist: "Zola", soundcloudUrl: "https://soundcloud.com/zola-officiel/hov" },
  { title: "C'est la vie", artist: "SCH", soundcloudUrl: "https://soundcloud.com/sch/cest-la-vie" },
  { title: "Jefe", artist: "Naps", soundcloudUrl: "https://soundcloud.com/naps-officiel/jefe" },
  { title: "La zone", artist: "Jul", soundcloudUrl: "https://soundcloud.com/jul-music/la-zone" },
  { title: "Kratos", artist: "Freeze Corleone", soundcloudUrl: "https://soundcloud.com/music-fcrl/kratos" },
  { title: "Saiyan", artist: "Gazo ft. Tiakola", soundcloudUrl: "https://soundcloud.com/gazo-music/saiyan" },
  { title: "Fantôme", artist: "Damso", soundcloudUrl: "https://soundcloud.com/damsofficiel/fantome" },
  { title: "Billet vert", artist: "Ninho", soundcloudUrl: "https://soundcloud.com/ninhofficiel/billet-vert" },
  { title: "Longue vie", artist: "PLK", soundcloudUrl: "https://soundcloud.com/plk-music/longue-vie" },
  { title: "Filtré", artist: "Damso", soundcloudUrl: "https://soundcloud.com/damsofficiel/filtre" },
  { title: "Pégase", artist: "SCH", soundcloudUrl: "https://soundcloud.com/sch/pegase" },

  // --- 2025 ---
  { title: "Mona Lisa", artist: "Booba ft. JSX", soundcloudUrl: "https://soundcloud.com/booba/mona-lisa" },
  { title: "Positions", artist: "Hamza", soundcloudUrl: "https://soundcloud.com/hamzamusic/positions" },
  { title: "I Love You", artist: "Tayc", soundcloudUrl: "https://soundcloud.com/tayc-officiel/i-love-you" },
  { title: "Dernier métro", artist: "Werenoi", soundcloudUrl: "https://soundcloud.com/werenoi/dernier-metro" },
  { title: "GPS", artist: "Gazo ft. Freeze Corleone", soundcloudUrl: "https://soundcloud.com/gazo-music/gps" },
  { title: "Dolce Vita", artist: "SDM", soundcloudUrl: "https://soundcloud.com/sdm-officiel/dolce-vita" },
  { title: "Sale mood", artist: "Ninho", soundcloudUrl: "https://soundcloud.com/ninhofficiel/sale-mood" },
  { title: "Gotham", artist: "SCH", soundcloudUrl: "https://soundcloud.com/sch/gotham" },
  { title: "OG", artist: "Jul", soundcloudUrl: "https://soundcloud.com/jul-music/og" },
  { title: "Tempête", artist: "PLK ft. Damso", soundcloudUrl: "https://soundcloud.com/plk-music/tempete" },
  { title: "Étoile filante", artist: "Tiakola", soundcloudUrl: "https://soundcloud.com/tiakola-officiel/etoile-filante" },
  { title: "Carbone", artist: "Freeze Corleone", soundcloudUrl: "https://soundcloud.com/music-fcrl/carbone" },
  { title: "Benzo", artist: "Gazo", soundcloudUrl: "https://soundcloud.com/gazo-music/benzo" },

  // --- 2026 ---
  { title: "Légende", artist: "Ninho", soundcloudUrl: "https://soundcloud.com/ninhofficiel/legende" },
  { title: "Miroir", artist: "Damso", soundcloudUrl: "https://soundcloud.com/damsofficiel/miroir" },
  { title: "Karma", artist: "Werenoi", soundcloudUrl: "https://soundcloud.com/werenoi/karma" },
  { title: "Eclipse", artist: "SCH", soundcloudUrl: "https://soundcloud.com/sch/eclipse" },
  { title: "Flamme", artist: "Jul", soundcloudUrl: "https://soundcloud.com/jul-music/flamme" },
  { title: "Voltage", artist: "Gazo ft. Hamza", soundcloudUrl: "https://soundcloud.com/gazo-music/voltage" },
  { title: "Nébuleuse", artist: "Freeze Corleone", soundcloudUrl: "https://soundcloud.com/music-fcrl/nebuleuse" },
  { title: "Diamant noir", artist: "Booba", soundcloudUrl: "https://soundcloud.com/booba/diamant-noir" },
];

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

/** Returns the full pool shuffled daily — caller picks songs as needed */
export function getDailyShuffledPool(): Song[] {
  const rng = seededRandom(getDailySeed());
  const pool = [...songPool];

  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool;
}
