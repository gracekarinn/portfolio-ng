export interface ExperienceEntry {
  period: string;
  role: string;
  organization: string;
  employmentType?: string;
  location?: string;
  workArrangement?: string;
  summary?: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  program: string;
  period: string;
}

export interface TarotCardReading {
  name: string;
  nameShort: string;
  suit: string;
  type: string;
  meaningUpright: string;
}
