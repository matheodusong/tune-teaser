import { Song } from "./songs";

const APPLE_RSS_BASE = "https://rss.applemarketingtools.com/api/v2";
const CACHE_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 1 week

interface AppleMusicResult {
  name: string;
  artistName: string;
  id: string;
  genres?: { genreId: string; name: string }[];
}

interface CachedChart {
  songs: Song[];
  fetchedAt: number;
}

function getCacheKey(chartId: string): string {
  return `soundcheck_chart_${chartId}`;
}

function getCachedChart(chartId: string): Song[] | null {
  try {
    const raw = localStorage.getItem(getCacheKey(chartId));
    if (!raw) return null;
    const cached: CachedChart = JSON.parse(raw);
    if (Date.now() - cached.fetchedAt > CACHE_DURATION_MS) {
      localStorage.removeItem(getCacheKey(chartId));
      return null;
    }
    return cached.songs;
  } catch {
    return null;
  }
}

function setCachedChart(chartId: string, songs: Song[]): void {
  try {
    const data: CachedChart = { songs, fetchedAt: Date.now() };
    localStorage.setItem(getCacheKey(chartId), JSON.stringify(data));
  } catch {
    // localStorage full or unavailable
  }
}

function isRapGenre(genres: { name: string }[]): boolean {
  return genres.some(
    (g) =>
      g.name.toLowerCase().includes("hip-hop") ||
      g.name.toLowerCase().includes("hip hop") ||
      g.name.toLowerCase().includes("rap")
  );
}

function toSong(r: AppleMusicResult): Song {
  return {
    title: r.name,
    artist: r.artistName,
    searchQuery: `${r.name} ${r.artistName}`,
  };
}

async function fetchAppleChart(
  country: string,
  limit: number,
  filterRap: boolean
): Promise<Song[]> {
  const url = `${APPLE_RSS_BASE}/${country}/music/most-played/${limit}/songs.json`;
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`Apple RSS failed: ${resp.status}`);
  const data = await resp.json();
  const results: AppleMusicResult[] = data?.feed?.results ?? [];

  if (filterRap) {
    return results
      .filter((r) => r.genres && isRapGenre(r.genres))
      .map(toSong);
  }
  return results.map(toSong);
}

export interface ChartPlaylist {
  id: string;
  name: string;
  emoji: string;
  description: string;
  fetchSongs: () => Promise<Song[]>;
}

export const chartPlaylists: ChartPlaylist[] = [
  {
    id: "rap-fr",
    name: "Rap FR",
    emoji: "🇫🇷",
    description: "Top Rap FR – Apple Music (mise à jour chaque semaine)",
    fetchSongs: () => fetchChartWithCache("rap-fr", "fr", true),
  },
  {
    id: "rap-us",
    name: "Rap US",
    emoji: "🇺🇸",
    description: "Top Rap US – Apple Music (mise à jour chaque semaine)",
    fetchSongs: () => fetchChartWithCache("rap-us", "us", true),
  },
  {
    id: "top-global",
    name: "Top Global",
    emoji: "🌍",
    description: "Top 100 mondial – Apple Music (mise à jour chaque semaine)",
    fetchSongs: () => fetchChartWithCache("top-global", "us", false),
  },
];

async function fetchChartWithCache(
  chartId: string,
  country: string,
  filterRap: boolean
): Promise<Song[]> {
  const cached = getCachedChart(chartId);
  if (cached && cached.length > 0) return cached;

  const songs = await fetchAppleChart(country, 100, filterRap);
  if (songs.length > 0) {
    setCachedChart(chartId, songs);
  }
  return songs;
}
