export interface LyricLine {
  time: number; // Start time of this subtitle line in seconds
  textGu: string; // Original Gujarati script
  textEn: string; // English phonetic/transliteration
}

export interface Temple {
  id: string;
  name: string;
  gujaratiName: string;
  location: string;
  googleMapsUrl: string;
  image: string;
  hours: string;
  distance: string; // distance from key center (e.g. Ahmedabad / Rajkot)
  history: string;
  description: string;
  openingRitual: string; // e.g. Mangla Aarti rituals
  closingRitual: string; // e.g. Sandhya Aarti rituals
  coordinates: {
    lat: number;
    lng: number;
  };
}

export type DevotionalCategory = 'Aarti' | 'Bhajan' | 'Chalisa' | 'Stuti' | 'Mantra' | 'Garbo';

export interface DevotionalTrack {
  id: string;
  title: string;
  gujaratiTitle: string;
  category: DevotionalCategory;
  duration: string; // MM:SS format
  audioUrl: string;
  singer: string;
  lyrics: LyricLine[];
}

export interface TithiEvent {
  id: string;
  tithiName: string;
  englishDate: string;
  description: string;
  isAuspicious: boolean;
  festivalName?: string;
}
