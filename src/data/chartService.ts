import { Song } from "./songs";

export interface ChartPlaylist {
  id: string;
  name: string;
  emoji: string;
  description: string;
  fetchSongs: () => Promise<Song[]>;
}

/* ── Fallback song lists (updated April 2026) ── */

const FALLBACK_RAP_FR: Song[] = [
  { title: "Pocahontas", artist: "PLK", searchQuery: "Pocahontas PLK" },
  { title: "PARLU", artist: "La Rvfleuze", searchQuery: "PARLU La Rvfleuze" },
  { title: "Pineapple", artist: "Leto", searchQuery: "Pineapple Leto" },
  { title: "B.M.S (by my side)", artist: "Rambo goyard", searchQuery: "B.M.S (by my side) Rambo goyard" },
  { title: "Sex Model", artist: "PLK & Theodora", searchQuery: "Sex Model PLK & Theodora" },
  { title: "CRYPTO", artist: "La Rvfleuze & Hamza", searchQuery: "CRYPTO La Rvfleuze & Hamza" },
  { title: "LOVE YOU", artist: "Nono La Grinta", searchQuery: "LOVE YOU Nono La Grinta" },
  { title: "SPA", artist: "GIMS & Theodora", searchQuery: "SPA GIMS & Theodora" },
  { title: "PARISIENNE", artist: "GIMS & La Mano 1.9", searchQuery: "PARISIENNE GIMS & La Mano 1.9" },
  { title: "Triste everyday", artist: "Jul", searchQuery: "Triste everyday Jul" },
  { title: "Soleil", artist: "GIMS", searchQuery: "Soleil GIMS" },
  { title: "PROMENADE", artist: "La Rvfleuze & Koba LaD", searchQuery: "PROMENADE La Rvfleuze & Koba LaD" },
  { title: "RENÉ CAOVILLA", artist: "Gambi", searchQuery: "RENÉ CAOVILLA Gambi" },
  { title: "Tout en Gucci", artist: "Ninho", searchQuery: "Tout en Gucci Ninho" },
  { title: "Sur paname", artist: "Ninho", searchQuery: "Sur paname Ninho" },
  { title: "Opps", artist: "Gradur & Ninho", searchQuery: "Opps Gradur & Ninho" },
  { title: "Tu dors ?", artist: "PLK", searchQuery: "Tu dors ? PLK" },
  { title: "Miss Kitoko", artist: "Theodora", searchQuery: "Miss Kitoko Theodora" },
  { title: "Jefe", artist: "Ninho", searchQuery: "Jefe Ninho" },
  { title: "Dis-moi que tu m'aimes", artist: "Ninho", searchQuery: "Dis-moi que tu m'aimes Ninho" },
  { title: "Tu connais", artist: "Werenoi", searchQuery: "Tu connais Werenoi" },
  { title: "VVS", artist: "Ninho", searchQuery: "VVS Ninho" },
  { title: "Poney", artist: "Werenoi", searchQuery: "Poney Werenoi" },
  { title: "CARTIER SANTOS", artist: "SDM", searchQuery: "CARTIER SANTOS SDM" },
  { title: "Scarface", artist: "Werenoi", searchQuery: "Scarface Werenoi" },
  { title: "MACHIAVEL", artist: "La Rvfleuze", searchQuery: "MACHIAVEL La Rvfleuze" },
  { title: "Piano", artist: "Werenoi & GIMS", searchQuery: "Piano Werenoi & GIMS" },
  { title: "La faille", artist: "Jul", searchQuery: "La faille Jul" },
  { title: "GIRLFRIEND", artist: "Tayc", searchQuery: "GIRLFRIEND Tayc" },
  { title: "Laboratoire", artist: "Werenoi", searchQuery: "Laboratoire Werenoi" },
  { title: "BLOQUÉ", artist: "GIMS & L2B", searchQuery: "BLOQUÉ GIMS & L2B" },
  { title: "Mame", artist: "TRIANGLE DES BERMUDES", searchQuery: "Mame TRIANGLE DES BERMUDES" },
  { title: "OG", artist: "Genezio & Niska", searchQuery: "OG Genezio & Niska" },
];

const FALLBACK_RAP_US: Song[] = [
  { title: "FDO", artist: "Pooh Shiesty", searchQuery: "FDO Pooh Shiesty" },
  { title: "Motion Party", artist: "Bossman Dlow", searchQuery: "Motion Party Bossman Dlow" },
  { title: "E85", artist: "Don Toliver", searchQuery: "E85 Don Toliver" },
  { title: "POP DAT THANG", artist: "DaBaby", searchQuery: "POP DAT THANG DaBaby" },
  { title: "Freestyle", artist: "Lil Baby", searchQuery: "Freestyle Lil Baby" },
  { title: "In A Minute", artist: "Lil Baby", searchQuery: "In A Minute Lil Baby" },
  { title: "WAIT FOR U (feat. Drake & Tems)", artist: "Future", searchQuery: "WAIT FOR U Future" },
  { title: "Body", artist: "Don Toliver", searchQuery: "Body Don Toliver" },
  { title: "Best I Ever Had", artist: "Drake", searchQuery: "Best I Ever Had Drake" },
  { title: "March Madness", artist: "Future", searchQuery: "March Madness Future" },
  { title: "Raindance", artist: "Dave & Tems", searchQuery: "Raindance Dave & Tems" },
  { title: "Frozen", artist: "Lil Baby", searchQuery: "Frozen Lil Baby" },
  { title: "Not Like Us", artist: "Kendrick Lamar", searchQuery: "Not Like Us Kendrick Lamar" },
  { title: "FATHER", artist: "Kanye West & Travis Scott", searchQuery: "FATHER Kanye West Travis Scott" },
  { title: "Sum 2 Prove", artist: "Lil Baby", searchQuery: "Sum 2 Prove Lil Baby" },
  { title: "Stick Talk", artist: "Future", searchQuery: "Stick Talk Future" },
  { title: "Right On", artist: "Lil Baby", searchQuery: "Right On Lil Baby" },
  { title: "God's Plan", artist: "Drake", searchQuery: "God's Plan Drake" },
  { title: "Marvins Room", artist: "Drake", searchQuery: "Marvins Room Drake" },
  { title: "Power Trip (feat. Miguel)", artist: "J. Cole", searchQuery: "Power Trip J. Cole" },
  { title: "Low Down", artist: "Lil Baby", searchQuery: "Low Down Lil Baby" },
  { title: "Wants and Needs (feat. Lil Baby)", artist: "Drake", searchQuery: "Wants and Needs Drake" },
  { title: "Like That", artist: "Future, Metro Boomin & Kendrick Lamar", searchQuery: "Like That Future Metro Boomin Kendrick Lamar" },
];

const FALLBACK_TOP_GLOBAL: Song[] = [
  { title: "FDO", artist: "Pooh Shiesty", searchQuery: "FDO Pooh Shiesty" },
  { title: "E85", artist: "Don Toliver", searchQuery: "E85 Don Toliver" },
  { title: "YUKON", artist: "Justin Bieber", searchQuery: "YUKON Justin Bieber" },
  { title: "Good Days", artist: "SZA", searchQuery: "Good Days SZA" },
  { title: "POP DAT THANG", artist: "DaBaby", searchQuery: "POP DAT THANG DaBaby" },
  { title: "Freestyle", artist: "Lil Baby", searchQuery: "Freestyle Lil Baby" },
  { title: "WAIT FOR U (feat. Drake & Tems)", artist: "Future", searchQuery: "WAIT FOR U Future" },
  { title: "Obvious", artist: "Chris Brown", searchQuery: "Obvious Chris Brown" },
  { title: "DAISIES", artist: "Justin Bieber", searchQuery: "DAISIES Justin Bieber" },
  { title: "Risk It All", artist: "Bruno Mars", searchQuery: "Risk It All Bruno Mars" },
  { title: "DtMF", artist: "Bad Bunny", searchQuery: "DtMF Bad Bunny" },
  { title: "I Had Some Help (feat. Morgan Wallen)", artist: "Post Malone", searchQuery: "I Had Some Help Post Malone" },
  { title: "Body", artist: "Don Toliver", searchQuery: "Body Don Toliver" },
  { title: "Best I Ever Had", artist: "Drake", searchQuery: "Best I Ever Had Drake" },
  { title: "Man I Need", artist: "Olivia Dean", searchQuery: "Man I Need Olivia Dean" },
  { title: "White Keys", artist: "Dominic Fike", searchQuery: "White Keys Dominic Fike" },
  { title: "Stateside (with Zara Larsson)", artist: "PinkPantheress", searchQuery: "Stateside PinkPantheress Zara Larsson" },
  { title: "Baby (feat. Ludacris)", artist: "Justin Bieber", searchQuery: "Baby Justin Bieber" },
  { title: "Folded", artist: "Kehlani", searchQuery: "Folded Kehlani" },
  { title: "March Madness", artist: "Future", searchQuery: "March Madness Future" },
  { title: "God's Plan", artist: "Drake", searchQuery: "God's Plan Drake" },
  { title: "Not Like Us", artist: "Kendrick Lamar", searchQuery: "Not Like Us Kendrick Lamar" },
  { title: "Ordinary", artist: "Alex Warren", searchQuery: "Ordinary Alex Warren" },
  { title: "Motion Party", artist: "Bossman Dlow", searchQuery: "Motion Party Bossman Dlow" },
  { title: "In A Minute", artist: "Lil Baby", searchQuery: "In A Minute Lil Baby" },
];

/* ── Helpers ── */

const APPLE_RSS_BASE = "https://rss.marketingtools.apple.com/api/v2";
const CACHE_KEY_PREFIX = "soundcheck_chart_";
const CACHE_DURATION_MS = 7 * 24 * 60 * 60 * 1000;

interface CachedChart { songs: Song[]; fetchedAt: number; }

function getCached(id: string): Song[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY_PREFIX + id);
    if (!raw) return null;
    const c: CachedChart = JSON.parse(raw);
    if (Date.now() - c.fetchedAt > CACHE_DURATION_MS) {
      localStorage.removeItem(CACHE_KEY_PREFIX + id);
      return null;
    }
    return c.songs;
  } catch { return null; }
}

function setCache(id: string, songs: Song[]) {
  try {
    localStorage.setItem(CACHE_KEY_PREFIX + id, JSON.stringify({ songs, fetchedAt: Date.now() }));
  } catch { /* full */ }
}

function isRap(genres: { name: string }[]) {
  return genres.some(g => /rap|hip.?hop/i.test(g.name));
}

async function tryFetchApple(country: string, filterRap: boolean): Promise<Song[] | null> {
  try {
    const ctrl = new AbortController();
    const timeout = setTimeout(() => ctrl.abort(), 5000);
    const resp = await fetch(
      `${APPLE_RSS_BASE}/${country}/music/most-played/100/songs.json`,
      { signal: ctrl.signal }
    );
    clearTimeout(timeout);
    if (!resp.ok) return null;
    const data = await resp.json();
    const results = data?.feed?.results ?? [];
    const mapped: Song[] = (filterRap
      ? results.filter((r: any) => r.genres && isRap(r.genres))
      : results
    ).map((r: any) => ({
      title: r.name,
      artist: r.artistName,
      searchQuery: `${r.name} ${r.artistName}`,
    }));
    return mapped.length > 0 ? mapped : null;
  } catch {
    return null;
  }
}

async function getSongs(id: string, country: string, filterRap: boolean, fallback: Song[]): Promise<Song[]> {
  const cached = getCached(id);
  if (cached && cached.length > 0) return cached;

  const live = await tryFetchApple(country, filterRap);
  if (live && live.length > 0) {
    setCache(id, live);
    return live;
  }

  return fallback;
}

/* ── Exported playlists ── */

export const chartPlaylists: ChartPlaylist[] = [
  {
    id: "rap-fr",
    name: "Rap FR",
    emoji: "🇫🇷",
    description: "Top Rap FR – Apple Music",
    fetchSongs: () => getSongs("rap-fr", "fr", true, FALLBACK_RAP_FR),
  },
  {
    id: "rap-us",
    name: "Rap US",
    emoji: "🇺🇸",
    description: "Top Rap US – Apple Music",
    fetchSongs: () => getSongs("rap-us", "us", true, FALLBACK_RAP_US),
  },
  {
    id: "top-global",
    name: "Top Global",
    emoji: "🌍",
    description: "Top 50 mondial – Apple Music",
    fetchSongs: () => getSongs("top-global", "us", false, FALLBACK_TOP_GLOBAL),
  },
];
