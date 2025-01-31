export interface Game {
  id: string;
  title: string;
  genre: string;
  imageUrl: string;
  description: string;
}

export interface GameTip {
  id: string;
  gameId: string;
  userId: string;
  content: string;
  likes: number;
  createdAt: string;
}

export interface UserProfile {
  id: string;
  username: string;
  avatarUrl: string;
  level: number;
  xp: number;
  favoriteGames: string[];
}