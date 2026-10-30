export interface AchievementEntry {
  id: string;
  title: string;
  organization: string;
  date: string;
  description?: string;
  media?: AchievementMedia[];
}

export interface AchievementMedia {
  src: string;
  alt: string;
}
