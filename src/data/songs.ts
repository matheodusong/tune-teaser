export interface Song {
  title: string;
  artist: string;
  youtubeId: string;
}

// Meilleurs sons Rap FR 2024-2026 — YouTube video IDs
export const songPool: Song[] = [
  // --- 2024 ---
  { title: "Makak", artist: "Gazo", youtubeId: "QfSszbMzVRI" },
  { title: "Bande organisée 2", artist: "Jul", youtubeId: "JMq0jYaFttE" },
  { title: "Pyramide", artist: "Werenoi", youtubeId: "8Y5gonaRMHo" },
  { title: "Spider", artist: "Gims ft. Dystinct", youtubeId: "uxFjqEsDJas" },
  { title: "Filtré", artist: "Damso", youtubeId: "sW7GWBR82rQ" },
  { title: "Pégase", artist: "SCH", youtubeId: "ZF9hGt1R_9s" },
  { title: "Jefe", artist: "Naps", youtubeId: "rIZF3XKoal0" },
  { title: "Iverson", artist: "Ninho", youtubeId: "0R4fGZs_upg" },
  { title: "Hola", artist: "PLK", youtubeId: "iPGVPOcsnCg" },
  { title: "Kratos", artist: "Freeze Corleone", youtubeId: "K9bhGPQ6pR0" },
  { title: "Imagine", artist: "Carbonne", youtubeId: "gPsE6PqQv1k" },
  { title: "Godzilla", artist: "Gazo ft. Tiakola", youtubeId: "YIChJ35Jk3c" },
  { title: "Fantôme", artist: "Damso", youtubeId: "aVPGT3UXrrY" },
  { title: "CBA", artist: "SDM", youtubeId: "Krd6xK47cxg" },
  { title: "Billet vert", artist: "Ninho", youtubeId: "PoS8kpG0oOA" },
  { title: "Longue vie", artist: "PLK", youtubeId: "rq8ywVKbPaI" },
  { title: "Tout va bien", artist: "Alonzo", youtubeId: "NJsLT_JfUHE" },
  { title: "Dolce Vita", artist: "SDM", youtubeId: "L7L3bPGxLqQ" },
  { title: "Macaroni", artist: "Jul", youtubeId: "AhGzuwCT8ec" },
  { title: "Cendrillon", artist: "Tiakola", youtubeId: "NSmxXoYEv2A" },
  { title: "La Béné", artist: "Heuss L'enfoiré", youtubeId: "17YSdxNsI_0" },
  { title: "Clic clic pan pan", artist: "Niska ft. Gazo", youtubeId: "j7oQEPfCz3k" },
  { title: "GPS", artist: "Gazo ft. Freeze Corleone", youtubeId: "DVDyQLb5bHc" },
  { title: "Tony Montana", artist: "SCH", youtubeId: "BuZ5LEmFx_0" },
  { title: "Mona Lisa", artist: "Booba", youtubeId: "s4vKNxFp3SY" },
  { title: "Tulum", artist: "Tiakola", youtubeId: "t-fxHg3Lpfo" },
  { title: "Hov", artist: "Zola", youtubeId: "pVCqdZ2ORYA" },
  { title: "La zone", artist: "Jul", youtubeId: "wK5FBWdKhV0" },
  { title: "Les derniers salopards", artist: "SCH", youtubeId: "oFuQ7vXs4JY" },
  { title: "Ça fait longtemps", artist: "Ninho", youtubeId: "N2AvYjJTYVE" },

  // --- 2025 ---
  { title: "Grosse machine", artist: "Werenoi", youtubeId: "8kZ4Fto5O2k" },
  { title: "Chambellan", artist: "Gazo", youtubeId: "yNbj3n5GCKY" },
  { title: "Positions", artist: "Hamza", youtubeId: "IQZNvx0s__Y" },
  { title: "Dernier métro", artist: "Werenoi", youtubeId: "xxjk5yDCMHI" },
  { title: "Sale mood", artist: "Ninho", youtubeId: "5R3CkCLqp4o" },
  { title: "Gotham", artist: "SCH", youtubeId: "a-FZ5qRh5rA" },
  { title: "OG", artist: "Jul", youtubeId: "0e5P9mZFOxo" },
  { title: "Tempête", artist: "PLK ft. Damso", youtubeId: "0ORzfK4i8OI" },
  { title: "Étoile filante", artist: "Tiakola", youtubeId: "cMvjFRqJ8Os" },
  { title: "Carbone", artist: "Freeze Corleone", youtubeId: "Z9AQcVKj3jY" },
  { title: "Benzo", artist: "Gazo", youtubeId: "52sVe9fKL5g" },
  { title: "I Love You", artist: "Tayc", youtubeId: "Ouh8Zz-FWOQ" },
  { title: "Sur la lune", artist: "Damso", youtubeId: "Pr5VIBVTEMw" },
  { title: "Saiyan", artist: "Gazo ft. Tiakola", youtubeId: "JqJbqZSwfMA" },
  { title: "Saturne", artist: "Ninho", youtubeId: "pEuY2cAX7YA" },
  { title: "La danse", artist: "Aya Nakamura", youtubeId: "WHsGO6ckBOo" },
  { title: "Bail 2 ouf", artist: "Booba", youtubeId: "kaBOA5eSHgM" },
  { title: "Freestyle Booska'P", artist: "Niska", youtubeId: "TBRDaw5KzX0" },
  { title: "Miracle", artist: "Tayc", youtubeId: "kQ20gl-FsT0" },
  { title: "Mama", artist: "Heuss L'enfoiré ft. Jul", youtubeId: "oZ6Cw-sHBig" },

  // --- 2026 ---
  { title: "Légende", artist: "Ninho", youtubeId: "YKr_TP4V9M8" },
  { title: "Miroir", artist: "Damso", youtubeId: "P3kJAJvPCcU" },
  { title: "Karma", artist: "Werenoi", youtubeId: "GMNF2oSKWko" },
  { title: "Eclipse", artist: "SCH", youtubeId: "7oQvQ55z1ZU" },
  { title: "Flamme", artist: "Jul", youtubeId: "3aM2q3vhVr0" },
  { title: "Voltage", artist: "Gazo ft. Hamza", youtubeId: "mO3sY2tYmdc" },
  { title: "Nébuleuse", artist: "Freeze Corleone", youtubeId: "uCpOVxFb2Fw" },
  { title: "Diamant noir", artist: "Booba", youtubeId: "BPVfQv-qb-A" },
  { title: "Paradis", artist: "PLK", youtubeId: "VW1DzR-0rCk" },
  { title: "Inferno", artist: "SDM", youtubeId: "ZjK-bX1sKYk" },
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
