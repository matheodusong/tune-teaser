export interface Song {
  title: string;
  artist: string;
  soundcloudUrl: string;
}

// Most streamed songs of 2025-2026 — large pool for daily rotation
export const songPool: Song[] = [
  // 2025 mega hits
  { title: "Ordinary", artist: "Alex Warren", soundcloudUrl: "https://soundcloud.com/alexwarrenmusic/ordinary" },
  { title: "DtMF", artist: "Bad Bunny", soundcloudUrl: "https://soundcloud.com/badbunny15/dtmf" },
  { title: "Golden", artist: "HUNTR/X", soundcloudUrl: "https://soundcloud.com/huntrx/golden" },
  { title: "The Fate of Ophelia", artist: "Taylor Swift", soundcloudUrl: "https://soundcloud.com/taylorswift/the-fate-of-ophelia" },
  { title: "Man I Need", artist: "Olivia Dean", soundcloudUrl: "https://soundcloud.com/oliviadean/man-i-need" },
  { title: "Manchild", artist: "Sabrina Carpenter", soundcloudUrl: "https://soundcloud.com/sabrinacarpenter/manchild" },
  { title: "like JENNIE", artist: "JENNIE", soundcloudUrl: "https://soundcloud.com/jennie-official/like-jennie" },
  { title: "Sports car", artist: "Tate McRae", soundcloudUrl: "https://soundcloud.com/tatemcrae/sports-car" },
  { title: "Abracadabra", artist: "Lady Gaga", soundcloudUrl: "https://soundcloud.com/ladygaga/abracadabra" },
  { title: "No Broke Boys", artist: "Disco Lines", soundcloudUrl: "https://soundcloud.com/discolines/no-broke-boys" },
  { title: "Opalite", artist: "Taylor Swift", soundcloudUrl: "https://soundcloud.com/taylorswift/opalite" },
  { title: "WHERE IS MY HUSBAND!", artist: "RAYE", soundcloudUrl: "https://soundcloud.com/raborr/where-is-my-husband" },
  { title: "DAISIES", artist: "Justin Bieber", soundcloudUrl: "https://soundcloud.com/justinbieber/daisies" },
  { title: "So Easy (To Fall In Love)", artist: "Olivia Dean", soundcloudUrl: "https://soundcloud.com/oliviadean/so-easy" },
  { title: "NOKIA", artist: "Drake", soundcloudUrl: "https://soundcloud.com/octobersveryown/nokia" },
  { title: "JUMP", artist: "BLACKPINK", soundcloudUrl: "https://soundcloud.com/blackpinkofficial/jump" },
  { title: "Anxiety", artist: "Doechii", soundcloudUrl: "https://soundcloud.com/doechii/anxiety" },
  { title: "Mystical Magical", artist: "Benson Boone", soundcloudUrl: "https://soundcloud.com/bensonboone/mystical-magical" },
  { title: "Tears", artist: "Sabrina Carpenter", soundcloudUrl: "https://soundcloud.com/sabrinacarpenter/tears" },
  { title: "Busy Woman", artist: "Sabrina Carpenter", soundcloudUrl: "https://soundcloud.com/sabrinacarpenter/busy-woman" },
  { title: "Azizam", artist: "Ed Sheeran", soundcloudUrl: "https://soundcloud.com/edsheeran/azizam" },
  { title: "Folded", artist: "Kehlani", soundcloudUrl: "https://soundcloud.com/kehlani/folded" },
  { title: "Revolving door", artist: "Tate McRae", soundcloudUrl: "https://soundcloud.com/tatemcrae/revolving-door" },
  // 2026 hits
  { title: "I Just Might", artist: "Bruno Mars", soundcloudUrl: "https://soundcloud.com/brunomars/i-just-might" },
  { title: "Alive", artist: "Empire Of The Sun", soundcloudUrl: "https://soundcloud.com/empireofthesun/alive" },
  { title: "Aperture", artist: "Harry Styles", soundcloudUrl: "https://soundcloud.com/harrystyles/aperture" },
  { title: "Risk It All", artist: "Bruno Mars", soundcloudUrl: "https://soundcloud.com/brunomars/risk-it-all" },
  { title: "Homewrecker", artist: "sombr", soundcloudUrl: "https://soundcloud.com/sombrmusic/homewrecker" },
  { title: "CRIMINAL LOVE", artist: "ENHYPEN", soundcloudUrl: "https://soundcloud.com/enhypen/criminal-love" },
  { title: "Gabriela", artist: "KATSEYE", soundcloudUrl: "https://soundcloud.com/katseye/gabriela" },
  // Carryover mega hits still charting
  { title: "BIRDS OF A FEATHER", artist: "Billie Eilish", soundcloudUrl: "https://soundcloud.com/billieeilish/birds-of-a-feather" },
  { title: "Not Like Us", artist: "Kendrick Lamar", soundcloudUrl: "https://soundcloud.com/kendaborr/not-like-us" },
  { title: "Espresso", artist: "Sabrina Carpenter", soundcloudUrl: "https://soundcloud.com/sabrinacarpenter/espresso" },
  { title: "Die With A Smile", artist: "Lady Gaga & Bruno Mars", soundcloudUrl: "https://soundcloud.com/ladygaga/die-with-a-smile" },
  { title: "APT.", artist: "ROSÉ & Bruno Mars", soundcloudUrl: "https://soundcloud.com/rose-official/apt" },
  { title: "Beautiful Things", artist: "Benson Boone", soundcloudUrl: "https://soundcloud.com/bensonboone/beautiful-things" },
  { title: "Lose Control", artist: "Teddy Swims", soundcloudUrl: "https://soundcloud.com/teddyswims/lose-control" },
  { title: "Good Luck Babe", artist: "Chappell Roan", soundcloudUrl: "https://soundcloud.com/chappellroan/good-luck-babe" },
  { title: "Too Sweet", artist: "Hozier", soundcloudUrl: "https://soundcloud.com/haborr/too-sweet" },
  { title: "Nasty", artist: "Tinashe", soundcloudUrl: "https://soundcloud.com/tinashe/nasty" },
];

const adjectives = ["Neon", "Cosmic", "Shadow", "Golden", "Velvet", "Chrome", "Crystal", "Thunder", "Mystic", "Atomic", "Stellar", "Electric", "Frozen", "Wild", "Dark", "Bright", "Swift", "Silent", "Blazing", "Lucky"];
const nouns = ["Wolf", "Phoenix", "Viper", "Eagle", "Panda", "Tiger", "Fox", "Raven", "Dragon", "Falcon", "Panther", "Jaguar", "Cobra", "Hawk", "Bear", "Lion", "Shark", "Lynx", "Owl", "Stag"];

export function generateRandomName(): string {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const num = Math.floor(Math.random() * 99) + 1;
  return `${adj}${noun}${num}`;
}

/**
 * Deterministic seeded random number generator (mulberry32).
 * Given the same seed, always produces the same sequence.
 */
function seededRandom(seed: number): () => number {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Returns a date-based seed so the same 10 songs are used all day.
 * Changes at midnight UTC.
 */
function getDailySeed(): number {
  const now = new Date();
  return now.getUTCFullYear() * 10000 + (now.getUTCMonth() + 1) * 100 + now.getUTCDate();
}

/**
 * Gets today's 10 songs using a deterministic daily shuffle.
 * Same songs all day for all players. No duplicates.
 */
export function getDailySongs(count: number = 10): Song[] {
  const rng = seededRandom(getDailySeed());
  const pool = [...songPool];

  // Fisher-Yates shuffle with seeded RNG
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.slice(0, count);
}

// Keep backward compat but deprecated
export function getRandomSongs(count: number): Song[] {
  return getDailySongs(count);
}
