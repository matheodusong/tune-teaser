export interface Song {
  title: string;
  artist: string;
  soundcloudUrl: string;
}

// Top songs currently popular in NYC - using SoundCloud URLs
export const songPool: Song[] = [
  { title: "Not Like Us", artist: "Kendrick Lamar", soundcloudUrl: "https://soundcloud.com/kendaborr/not-like-us" },
  { title: "Birds of a Feather", artist: "Billie Eilish", soundcloudUrl: "https://soundcloud.com/billieeilish/birds-of-a-feather" },
  { title: "Espresso", artist: "Sabrina Carpenter", soundcloudUrl: "https://soundcloud.com/sabrinacarpenter/espresso" },
  { title: "A Bar Song (Tipsy)", artist: "Shaboozey", soundcloudUrl: "https://soundcloud.com/shaboozey/a-bar-song-tipsy" },
  { title: "Please Please Please", artist: "Sabrina Carpenter", soundcloudUrl: "https://soundcloud.com/sabrinacarpenter/please-please-please" },
  { title: "Taste", artist: "Sabrina Carpenter", soundcloudUrl: "https://soundcloud.com/sabrinacarpenter/taste" },
  { title: "Die With A Smile", artist: "Lady Gaga & Bruno Mars", soundcloudUrl: "https://soundcloud.com/ladygaga/die-with-a-smile" },
  { title: "APT.", artist: "ROSÉ & Bruno Mars", soundcloudUrl: "https://soundcloud.com/rose-official/apt" },
  { title: "Lunch", artist: "Billie Eilish", soundcloudUrl: "https://soundcloud.com/billieeilish/lunch" },
  { title: "Fortnight", artist: "Taylor Swift ft. Post Malone", soundcloudUrl: "https://soundcloud.com/taylorswift/fortnight" },
  { title: "Beautiful Things", artist: "Benson Boone", soundcloudUrl: "https://soundcloud.com/bensonboone/beautiful-things" },
  { title: "Lose Control", artist: "Teddy Swims", soundcloudUrl: "https://soundcloud.com/teddyswims/lose-control" },
  { title: "Luther", artist: "Kendrick Lamar ft. SZA", soundcloudUrl: "https://soundcloud.com/kendaborr/luther" },
  { title: "MILLION DOLLAR BABY", artist: "Tommy Richman", soundcloudUrl: "https://soundcloud.com/tommyrichman/million-dollar-baby" },
  { title: "Too Sweet", artist: "Hozier", soundcloudUrl: "https://soundcloud.com/haborr/too-sweet" },
  { title: "Guess", artist: "Charli XCX & Billie Eilish", soundcloudUrl: "https://soundcloud.com/charlixcx/guess-featuring-billie-eilish" },
  { title: "Good Luck Babe", artist: "Chappell Roan", soundcloudUrl: "https://soundcloud.com/chappellroan/good-luck-babe" },
  { title: "I Had Some Help", artist: "Post Malone ft. Morgan Wallen", soundcloudUrl: "https://soundcloud.com/postmalone/i-had-some-help" },
  { title: "Nasty", artist: "Tinashe", soundcloudUrl: "https://soundcloud.com/tinashe/nasty" },
  { title: "Saturn", artist: "SZA", soundcloudUrl: "https://soundcloud.com/saborr/saturn" },
];

const adjectives = ["Neon", "Cosmic", "Shadow", "Golden", "Velvet", "Chrome", "Crystal", "Thunder", "Mystic", "Atomic", "Stellar", "Electric", "Frozen", "Wild", "Dark", "Bright", "Swift", "Silent", "Blazing", "Lucky"];
const nouns = ["Wolf", "Phoenix", "Viper", "Eagle", "Panda", "Tiger", "Fox", "Raven", "Dragon", "Falcon", "Panther", "Jaguar", "Cobra", "Hawk", "Bear", "Lion", "Shark", "Lynx", "Owl", "Stag"];

export function generateRandomName(): string {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const num = Math.floor(Math.random() * 99) + 1;
  return `${adj}${noun}${num}`;
}

export function getRandomSongs(count: number): Song[] {
  const shuffled = [...songPool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
