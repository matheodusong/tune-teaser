export interface Song {
  title: string;
  artist: string;
  searchQuery: string; // Used to find the track on iTunes
  previewUrl?: string; // Filled at runtime
}

// French Rap 2024-2026 — search queries for iTunes
export const songPool: Song[] = [
  // --- 2024 ---
  { title: "Makak", artist: "Gazo", searchQuery: "Makak Gazo" },
  { title: "Bande organisée 2", artist: "Jul", searchQuery: "Bande organisée 2 Jul" },
  { title: "Pyramide", artist: "Werenoi", searchQuery: "Pyramide Werenoi" },
  { title: "Spider", artist: "Gims", searchQuery: "Spider Gims Dystinct" },
  { title: "Filtré", artist: "Damso", searchQuery: "Filtré Damso" },
  { title: "Pégase", artist: "SCH", searchQuery: "Pégase SCH" },
  { title: "Jefe", artist: "Naps", searchQuery: "Jefe Naps" },
  { title: "Iverson", artist: "Ninho", searchQuery: "Iverson Ninho" },
  { title: "Hola", artist: "PLK", searchQuery: "Hola PLK" },
  { title: "Imagine", artist: "Carbonne", searchQuery: "Imagine Carbonne" },
  { title: "Godzilla", artist: "Gazo", searchQuery: "Godzilla Gazo Tiakola" },
  { title: "Fantôme", artist: "Damso", searchQuery: "Fantôme Damso" },
  { title: "CBA", artist: "SDM", searchQuery: "CBA SDM" },
  { title: "Billet vert", artist: "Ninho", searchQuery: "Billet vert Ninho" },
  { title: "Longue vie", artist: "PLK", searchQuery: "Longue vie PLK" },
  { title: "Tout va bien", artist: "Alonzo", searchQuery: "Tout va bien Alonzo" },
  { title: "Dolce Vita", artist: "SDM", searchQuery: "Dolce Vita SDM" },
  { title: "Macaroni", artist: "Jul", searchQuery: "Macaroni Jul" },
  { title: "Cendrillon", artist: "Tiakola", searchQuery: "Cendrillon Tiakola" },
  { title: "Clic clic pan pan", artist: "Niska", searchQuery: "Clic clic pan pan Niska" },
  { title: "GPS", artist: "Gazo", searchQuery: "GPS Gazo Freeze Corleone" },
  { title: "Tony Montana", artist: "SCH", searchQuery: "Tony Montana SCH" },
  { title: "Tulum", artist: "Tiakola", searchQuery: "Tulum Tiakola" },
  { title: "La zone", artist: "Jul", searchQuery: "La zone Jul" },
  { title: "Les derniers salopards", artist: "SCH", searchQuery: "Les derniers salopards SCH" },
  
  // --- 2025 ---
  { title: "Grosse machine", artist: "Werenoi", searchQuery: "Grosse machine Werenoi" },
  { title: "Chambellan", artist: "Gazo", searchQuery: "Chambellan Gazo" },
  { title: "Dernier métro", artist: "Werenoi", searchQuery: "Dernier métro Werenoi" },
  { title: "Sale mood", artist: "Ninho", searchQuery: "Sale mood Ninho" },
  { title: "OG", artist: "Jul", searchQuery: "OG Jul" },
  { title: "Étoile filante", artist: "Tiakola", searchQuery: "Étoile filante Tiakola" },
  { title: "Benzo", artist: "Gazo", searchQuery: "Benzo Gazo" },
  { title: "Sur la lune", artist: "Damso", searchQuery: "Sur la lune Damso" },
  { title: "Saiyan", artist: "Gazo", searchQuery: "Saiyan Gazo Tiakola" },
  { title: "Saturne", artist: "Ninho", searchQuery: "Saturne Ninho" },
  { title: "La danse", artist: "Aya Nakamura", searchQuery: "La danse Aya Nakamura" },
  { title: "Miracle", artist: "Tayc", searchQuery: "Miracle Tayc" },
  
  // --- Classics encore populaires ---
  { title: "Djadja", artist: "Aya Nakamura", searchQuery: "Djadja Aya Nakamura" },
  { title: "La kiffance", artist: "Naps", searchQuery: "La kiffance Naps" },
  { title: "Avant toi", artist: "Vitaa Slimane", searchQuery: "Avant toi Vitaa Slimane" },
  { title: "Bande organisée", artist: "Jul", searchQuery: "Bande organisée Jul" },
  { title: "Validé", artist: "Booba", searchQuery: "Validé Booba" },
  { title: "Anissa", artist: "Wejdene", searchQuery: "Anissa Wejdene" },
  { title: "Au DD", artist: "PNL", searchQuery: "Au DD PNL" },
  { title: "Blinding Lights", artist: "The Weeknd", searchQuery: "Blinding Lights Weeknd" },
  { title: "Sapés comme jamais", artist: "Maître Gims", searchQuery: "Sapés comme jamais Maître Gims" },
  { title: "Bella", artist: "Maître Gims", searchQuery: "Bella Maître Gims" },
  { title: "Désaccordé", artist: "Vald", searchQuery: "Désaccordé Vald" },
  { title: "Freestyle Booska'P", artist: "Niska", searchQuery: "Niska Booska" },
  { title: "Dégaine", artist: "Aya Nakamura", searchQuery: "Dégaine Aya Nakamura" },
  { title: "Pookie", artist: "Aya Nakamura", searchQuery: "Pookie Aya Nakamura" },
  { title: "Jolie nana", artist: "Aya Nakamura", searchQuery: "Jolie nana Aya Nakamura" },
  { title: "Copines", artist: "Aya Nakamura", searchQuery: "Copines Aya Nakamura" },
  { title: "Réseaux", artist: "Niska", searchQuery: "Réseaux Niska" },
  { title: "Vroum vroum", artist: "Jul", searchQuery: "Vroum vroum Jul" },
  { title: "Tout oublier", artist: "Angèle", searchQuery: "Tout oublier Angèle" },
  { title: "Balance ton quoi", artist: "Angèle", searchQuery: "Balance ton quoi Angèle" },
  { title: "Dernière danse", artist: "Indila", searchQuery: "Dernière danse Indila" },
  { title: "Basique", artist: "Orelsan", searchQuery: "Basique Orelsan" },
  { title: "La vie est belle", artist: "Nassi", searchQuery: "La vie est belle Nassi" },
  { title: "Dieu merci", artist: "Ninho", searchQuery: "Dieu merci Ninho" },
  { title: "Lettre à une femme", artist: "Ninho", searchQuery: "Lettre à une femme Ninho" },
  { title: "Jefe", artist: "Ninho", searchQuery: "Jefe Ninho" },
  { title: "Trafiquante", artist: "Jul", searchQuery: "Trafiquante Jul" },
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

/** Fetch iTunes preview URL for a song. Returns the previewUrl or null. */
export async function fetchPreviewUrl(song: Song): Promise<string | null> {
  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(song.searchQuery)}&media=music&limit=5`
    );
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      // Find best match — prefer one with a preview URL
      const withPreview = data.results.find((r: any) => r.previewUrl);
      return withPreview?.previewUrl || null;
    }
    return null;
  } catch {
    return null;
  }
}
