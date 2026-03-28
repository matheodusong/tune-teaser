export interface Song {
  title: string;
  artist: string;
  searchQuery: string;
  previewUrl?: string;
}

export interface Playlist {
  id: string;
  name: string;
  emoji: string;
  description: string;
  songs: Song[];
}

// ---- TOP 50 RAP FR (2024-2026) ----
const rapFR: Song[] = [
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
  { title: "Djadja", artist: "Aya Nakamura", searchQuery: "Djadja Aya Nakamura" },
  { title: "La kiffance", artist: "Naps", searchQuery: "La kiffance Naps" },
  { title: "Bande organisée", artist: "Jul", searchQuery: "Bande organisée Jul" },
  { title: "Anissa", artist: "Wejdene", searchQuery: "Anissa Wejdene" },
  { title: "Au DD", artist: "PNL", searchQuery: "Au DD PNL" },
  { title: "Pookie", artist: "Aya Nakamura", searchQuery: "Pookie Aya Nakamura" },
  { title: "Copines", artist: "Aya Nakamura", searchQuery: "Copines Aya Nakamura" },
  { title: "Réseaux", artist: "Niska", searchQuery: "Réseaux Niska" },
  { title: "Tout oublier", artist: "Angèle", searchQuery: "Tout oublier Angèle" },
  { title: "Dernière danse", artist: "Indila", searchQuery: "Dernière danse Indila" },
  { title: "Basique", artist: "Orelsan", searchQuery: "Basique Orelsan" },
  { title: "Dieu merci", artist: "Ninho", searchQuery: "Dieu merci Ninho" },
  { title: "Lettre à une femme", artist: "Ninho", searchQuery: "Lettre à une femme Ninho" },
  { title: "Trafiquante", artist: "Jul", searchQuery: "Trafiquante Jul" },
];

// ---- TOP 50 RAP US ----
const rapUS: Song[] = [
  { title: "Not Like Us", artist: "Kendrick Lamar", searchQuery: "Not Like Us Kendrick Lamar" },
  { title: "Lose Yourself", artist: "Eminem", searchQuery: "Lose Yourself Eminem" },
  { title: "HUMBLE.", artist: "Kendrick Lamar", searchQuery: "HUMBLE Kendrick Lamar" },
  { title: "Sicko Mode", artist: "Travis Scott", searchQuery: "Sicko Mode Travis Scott" },
  { title: "God's Plan", artist: "Drake", searchQuery: "Gods Plan Drake" },
  { title: "Rockstar", artist: "Post Malone", searchQuery: "Rockstar Post Malone 21 Savage" },
  { title: "Old Town Road", artist: "Lil Nas X", searchQuery: "Old Town Road Lil Nas X" },
  { title: "Hotline Bling", artist: "Drake", searchQuery: "Hotline Bling Drake" },
  { title: "Goosebumps", artist: "Travis Scott", searchQuery: "Goosebumps Travis Scott" },
  { title: "Bad and Boujee", artist: "Migos", searchQuery: "Bad and Boujee Migos" },
  { title: "POWER", artist: "Kanye West", searchQuery: "POWER Kanye West" },
  { title: "XO Tour Llif3", artist: "Lil Uzi Vert", searchQuery: "XO Tour Llif3 Lil Uzi Vert" },
  { title: "Money Trees", artist: "Kendrick Lamar", searchQuery: "Money Trees Kendrick Lamar" },
  { title: "Mask Off", artist: "Future", searchQuery: "Mask Off Future" },
  { title: "Black Skinhead", artist: "Kanye West", searchQuery: "Black Skinhead Kanye West" },
  { title: "Mo Bamba", artist: "Sheck Wes", searchQuery: "Mo Bamba Sheck Wes" },
  { title: "DNA.", artist: "Kendrick Lamar", searchQuery: "DNA Kendrick Lamar" },
  { title: "A Lot", artist: "21 Savage", searchQuery: "A Lot 21 Savage" },
  { title: "Swimming Pools", artist: "Kendrick Lamar", searchQuery: "Swimming Pools Kendrick Lamar" },
  { title: "Lucid Dreams", artist: "Juice WRLD", searchQuery: "Lucid Dreams Juice WRLD" },
  { title: "Congratulations", artist: "Post Malone", searchQuery: "Congratulations Post Malone" },
  { title: "Highest in the Room", artist: "Travis Scott", searchQuery: "Highest in the Room Travis Scott" },
  { title: "Runaway", artist: "Kanye West", searchQuery: "Runaway Kanye West" },
  { title: "In Da Club", artist: "50 Cent", searchQuery: "In Da Club 50 Cent" },
  { title: "m.A.A.d city", artist: "Kendrick Lamar", searchQuery: "maad city Kendrick Lamar" },
  { title: "Nonstop", artist: "Drake", searchQuery: "Nonstop Drake" },
  { title: "Drip Too Hard", artist: "Lil Baby", searchQuery: "Drip Too Hard Lil Baby Gunna" },
  { title: "Praise the Lord", artist: "A$AP Rocky", searchQuery: "Praise the Lord ASAP Rocky Skepta" },
  { title: "STARGAZING", artist: "Travis Scott", searchQuery: "STARGAZING Travis Scott" },
  { title: "Lifestyle", artist: "Young Thug", searchQuery: "Lifestyle Young Thug" },
  { title: "Laugh Now Cry Later", artist: "Drake", searchQuery: "Laugh Now Cry Later Drake" },
  { title: "The Box", artist: "Roddy Ricch", searchQuery: "The Box Roddy Ricch" },
  { title: "Bodak Yellow", artist: "Cardi B", searchQuery: "Bodak Yellow Cardi B" },
  { title: "FRANCHISE", artist: "Travis Scott", searchQuery: "FRANCHISE Travis Scott" },
  { title: "Backseat Freestyle", artist: "Kendrick Lamar", searchQuery: "Backseat Freestyle Kendrick Lamar" },
  { title: "Antidote", artist: "Travis Scott", searchQuery: "Antidote Travis Scott" },
  { title: "Walk It Talk It", artist: "Migos", searchQuery: "Walk It Talk It Migos" },
  { title: "No Role Modelz", artist: "J. Cole", searchQuery: "No Role Modelz J Cole" },
  { title: "MIDDLE CHILD", artist: "J. Cole", searchQuery: "MIDDLE CHILD J Cole" },
  { title: "Work Out", artist: "J. Cole", searchQuery: "Work Out J Cole" },
  { title: "INDUSTRY BABY", artist: "Lil Nas X", searchQuery: "INDUSTRY BABY Lil Nas X Jack Harlow" },
  { title: "Stronger", artist: "Kanye West", searchQuery: "Stronger Kanye West" },
  { title: "Sunflower", artist: "Post Malone", searchQuery: "Sunflower Post Malone Swae Lee" },
  { title: "Bank Account", artist: "21 Savage", searchQuery: "Bank Account 21 Savage" },
  { title: "FE!N", artist: "Travis Scott", searchQuery: "FEIN Travis Scott Playboi Carti" },
  { title: "Magnolia", artist: "Playboi Carti", searchQuery: "Magnolia Playboi Carti" },
  { title: "Pick Up the Phone", artist: "Young Thug", searchQuery: "Pick Up the Phone Young Thug Travis Scott" },
  { title: "Life Is Good", artist: "Future", searchQuery: "Life Is Good Future Drake" },
  { title: "Psycho", artist: "Post Malone", searchQuery: "Psycho Post Malone" },
  { title: "Panda", artist: "Desiigner", searchQuery: "Panda Desiigner" },
];

// ---- 50 MOST STREAMED RAP SONGS ALL TIME ----
const rapAllTime: Song[] = [
  { title: "Lose Yourself", artist: "Eminem", searchQuery: "Lose Yourself Eminem" },
  { title: "Old Town Road", artist: "Lil Nas X", searchQuery: "Old Town Road Lil Nas X" },
  { title: "Rockstar", artist: "Post Malone", searchQuery: "Rockstar Post Malone 21 Savage" },
  { title: "Sunflower", artist: "Post Malone", searchQuery: "Sunflower Post Malone Swae Lee" },
  { title: "God's Plan", artist: "Drake", searchQuery: "Gods Plan Drake" },
  { title: "Congratulations", artist: "Post Malone", searchQuery: "Congratulations Post Malone" },
  { title: "Lucid Dreams", artist: "Juice WRLD", searchQuery: "Lucid Dreams Juice WRLD" },
  { title: "HUMBLE.", artist: "Kendrick Lamar", searchQuery: "HUMBLE Kendrick Lamar" },
  { title: "Sicko Mode", artist: "Travis Scott", searchQuery: "Sicko Mode Travis Scott" },
  { title: "Hotline Bling", artist: "Drake", searchQuery: "Hotline Bling Drake" },
  { title: "In Da Club", artist: "50 Cent", searchQuery: "In Da Club 50 Cent" },
  { title: "Stronger", artist: "Kanye West", searchQuery: "Stronger Kanye West" },
  { title: "Psycho", artist: "Post Malone", searchQuery: "Psycho Post Malone" },
  { title: "Without Me", artist: "Eminem", searchQuery: "Without Me Eminem" },
  { title: "The Real Slim Shady", artist: "Eminem", searchQuery: "The Real Slim Shady Eminem" },
  { title: "Rap God", artist: "Eminem", searchQuery: "Rap God Eminem" },
  { title: "Stan", artist: "Eminem", searchQuery: "Stan Eminem" },
  { title: "Not Afraid", artist: "Eminem", searchQuery: "Not Afraid Eminem" },
  { title: "Mockingbird", artist: "Eminem", searchQuery: "Mockingbird Eminem" },
  { title: "One Dance", artist: "Drake", searchQuery: "One Dance Drake" },
  { title: "Bodak Yellow", artist: "Cardi B", searchQuery: "Bodak Yellow Cardi B" },
  { title: "The Box", artist: "Roddy Ricch", searchQuery: "The Box Roddy Ricch" },
  { title: "Panda", artist: "Desiigner", searchQuery: "Panda Desiigner" },
  { title: "No Role Modelz", artist: "J. Cole", searchQuery: "No Role Modelz J Cole" },
  { title: "XO Tour Llif3", artist: "Lil Uzi Vert", searchQuery: "XO Tour Llif3 Lil Uzi Vert" },
  { title: "Money Trees", artist: "Kendrick Lamar", searchQuery: "Money Trees Kendrick Lamar" },
  { title: "N*ggas in Paris", artist: "Jay-Z & Kanye West", searchQuery: "Niggas in Paris Jay-Z Kanye" },
  { title: "Gold Digger", artist: "Kanye West", searchQuery: "Gold Digger Kanye West" },
  { title: "POWER", artist: "Kanye West", searchQuery: "POWER Kanye West" },
  { title: "Mask Off", artist: "Future", searchQuery: "Mask Off Future" },
  { title: "DNA.", artist: "Kendrick Lamar", searchQuery: "DNA Kendrick Lamar" },
  { title: "Bad and Boujee", artist: "Migos", searchQuery: "Bad and Boujee Migos" },
  { title: "Mo Bamba", artist: "Sheck Wes", searchQuery: "Mo Bamba Sheck Wes" },
  { title: "INDUSTRY BABY", artist: "Lil Nas X", searchQuery: "INDUSTRY BABY Lil Nas X Jack Harlow" },
  { title: "Life Is Good", artist: "Future", searchQuery: "Life Is Good Future Drake" },
  { title: "Goosebumps", artist: "Travis Scott", searchQuery: "Goosebumps Travis Scott" },
  { title: "Laugh Now Cry Later", artist: "Drake", searchQuery: "Laugh Now Cry Later Drake" },
  { title: "Antidote", artist: "Travis Scott", searchQuery: "Antidote Travis Scott" },
  { title: "STARGAZING", artist: "Travis Scott", searchQuery: "STARGAZING Travis Scott" },
  { title: "Not Like Us", artist: "Kendrick Lamar", searchQuery: "Not Like Us Kendrick Lamar" },
  { title: "Swimming Pools", artist: "Kendrick Lamar", searchQuery: "Swimming Pools Kendrick Lamar" },
  { title: "Drip Too Hard", artist: "Lil Baby", searchQuery: "Drip Too Hard Lil Baby" },
  { title: "Magnolia", artist: "Playboi Carti", searchQuery: "Magnolia Playboi Carti" },
  { title: "Runaway", artist: "Kanye West", searchQuery: "Runaway Kanye West" },
  { title: "Nonstop", artist: "Drake", searchQuery: "Nonstop Drake" },
  { title: "Walk It Talk It", artist: "Migos", searchQuery: "Walk It Talk It Migos" },
  { title: "FE!N", artist: "Travis Scott", searchQuery: "FEIN Travis Scott Playboi Carti" },
  { title: "Praise the Lord", artist: "A$AP Rocky", searchQuery: "Praise the Lord ASAP Rocky" },
  { title: "Bank Account", artist: "21 Savage", searchQuery: "Bank Account 21 Savage" },
  { title: "A Lot", artist: "21 Savage", searchQuery: "A Lot 21 Savage" },
];

export const playlists: Playlist[] = [
  { id: "rap-fr", name: "Rap FR", emoji: "🇫🇷", description: "Top 50 Rap Français 2024-2026", songs: rapFR },
  { id: "rap-us", name: "Rap US", emoji: "🇺🇸", description: "Top 50 Rap US Hits", songs: rapUS },
  { id: "rap-alltime", name: "All Time", emoji: "🏆", description: "50 Most Streamed Rap Songs Ever", songs: rapAllTime },
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

export function shufflePool(songs: Song[]): Song[] {
  const rng = seededRandom(getDailySeed());
  const pool = [...songs];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool;
}

export async function fetchPreviewUrl(song: Song): Promise<string | null> {
  try {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(song.searchQuery)}&media=music&limit=5`
    );
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      const withPreview = data.results.find((r: any) => r.previewUrl);
      return withPreview?.previewUrl || null;
    }
    return null;
  } catch {
    return null;
  }
}
