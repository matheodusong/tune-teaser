export interface Song {
  title: string;
  artist: string;
  soundcloudUrl: string;
}

// Sélection Rap FR & US 2025-2026 - Rotation quotidienne
export const songPool: Song[] = [
  // --- RAP FR (Hits actuels & classiques récents) ---
  { title: "Pyramide", artist: "Werenoi", soundcloudUrl: "https://soundcloud.com/werenoi/pyramide" },
  { title: "Mona Lisa", artist: "Booba ft. JSX", soundcloudUrl: "https://soundcloud.com/booba-official/mona-lisa" },
  { title: "Chambellan", artist: "Gazo", soundcloudUrl: "https://soundcloud.com/gazo-official/chambellan" },
  { title: "Tout en haut", artist: "Ninho", soundcloudUrl: "https://soundcloud.com/ninho-official/tout-en-haut" },
  { title: "CBA", artist: "SDM", soundcloudUrl: "https://soundcloud.com/sdm-official/cba" },
  { title: "Imagine", artist: "Carbonne", soundcloudUrl: "https://soundcloud.com/carbonne/imagine" },
  { title: "Spider", artist: "Gims ft. Dystinct", soundcloudUrl: "https://soundcloud.com/gims/spider" },
  { title: "Positions", artist: "Hamza", soundcloudUrl: "https://soundcloud.com/hamza-official/positions" },
  { title: "Tulum", artist: "Tiakola", soundcloudUrl: "https://soundcloud.com/tiakola/tulum" },
  { title: "I Love You", artist: "Tayc", soundcloudUrl: "https://soundcloud.com/tayc-official/i-love-you" },
  { title: "Hov", artist: "Zola", soundcloudUrl: "https://soundcloud.com/zola/hov" },
  { title: "C'est la vie", artist: "SCH", soundcloudUrl: "https://soundcloud.com/sch/cest-la-vie" },

  // --- RAP US (2025 mega hits & NYC Vibe) ---
  { title: "Not Like Us", artist: "Kendrick Lamar", soundcloudUrl: "https://soundcloud.com/kendrick-lamar-one/not-like-us" },
  { title: "Like That", artist: "Future & Metro Boomin", soundcloudUrl: "https://soundcloud.com/future-official/like-that" },
  { title: "Type Shit", artist: "Future ft. Travis Scott", soundcloudUrl: "https://soundcloud.com/future-official/type-shit" },
  { title: "FE!N", artist: "Travis Scott ft. Playboi Carti", soundcloudUrl: "https://soundcloud.com/travisscott-2/fein" },
  { title: "Bandit", artist: "Don Toliver", soundcloudUrl: "https://soundcloud.com/dontoliver/bandit" },
  { title: "Million Dollar Baby", artist: "Tommy Richman", soundcloudUrl: "https://soundcloud.com/tommyrichman/million-dollar-baby" },
  { title: "HISS", artist: "Megan Thee Stallion", soundcloudUrl: "https://soundcloud.com/megantheestallion/hiss" },
  { title: "Carnival", artist: "Ye (Kanye West) & Ty Dolla $ign", soundcloudUrl: "https://soundcloud.com/kanyewest/carnival" },
  { title: "Push Ups", artist: "Drake", soundcloudUrl: "https://soundcloud.com/octobersveryown/push-ups" },
  { title: "Euphoria", artist: "Kendrick Lamar", soundcloudUrl: "https://soundcloud.com/kendrick-lamar-one/euphoria" },
  { title: "All Red", artist: "Playboi Carti", soundcloudUrl: "https://soundcloud.com/playboicarti/all-red" },
  { title: "Starboy", artist: "The Weeknd (Classic)", soundcloudUrl: "https://soundcloud.com/theweeknd/starboy" },
  { title: "Family Matters", artist: "Drake", soundcloudUrl: "https://soundcloud.com/octobersveryown/family-matters" },
  { title: "Oklama", artist: "Kendrick Lamar", soundcloudUrl: "https://soundcloud.com/kendrick-lamar-one/oklama" },
  { title: "Yeah Glo!", artist: "GloRilla", soundcloudUrl: "https://soundcloud.com/glorilla/yeah-glo" },
  { title: "Aftërlyfe", artist: "Yeat", soundcloudUrl: "https://soundcloud.com/yeat/afterlyfe" },
  { title: "Meltdown", artist: "Travis Scott ft. Drake", soundcloudUrl: "https://soundcloud.com/travisscott-2/meltdown" },
  { title: "Redrum", artist: "21 Savage", soundcloudUrl: "https://soundcloud.com/21savage/redrum" }
];

// Adjectifs mis à jour pour un style plus "Street/Urban"
const adjectives = ["Trap", "Dark", "Golden", "Diamond", "Frozen", "Street", "Drill", "Shadow", "Chrome", "Hustle", "Legend", "Plug", "Ghost", "Rich", "Young", "Heavy", "Raw", "Savage", "Loyal", "Grimy"];

// ... Le reste de tes fonctions (seededRandom, getDailySongs, etc.) reste inchangé ...

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

export function getDailySongs(count: number = 10): Song[] {
  const rng = seededRandom(getDailySeed());
  const pool = [...songPool];

  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.slice(0, count);
}

export function getRandomSongs(count: number): Song[] {
  return getDailySongs(count);
}
