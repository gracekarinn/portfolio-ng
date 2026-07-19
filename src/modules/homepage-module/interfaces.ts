export interface ExperienceEntry {
  period: string;
  role: string;
  organization: string;
  summary: string;
  technologies: string[];
}

export interface AchievementEntry {
  number: string;
  title: string;
  context: string;
  year: string;
}

export interface TarotCardReading {
  name: string;
  nameShort: string;
  suit: string;
  type: string;
  meaningUpright: string;
}
