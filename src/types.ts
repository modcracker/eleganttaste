/**
 * Shared types for Elegant Taste Gastronomy Concierge
 */

export interface DiningMood {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface Dish {
  course: "Amuse-Bouche" | "Appetizer" | "Entrée" | "Palate Cleanser" | "Dessert";
  name: string;
  description: string;
  ingredients: string[];
  chefNotes: string;
}

export interface PairingRecommendation {
  beverage: string;
  whyItWorks: string;
  temperature: string;
}

export interface CulinaryMenu {
  title: string;
  description: string;
  mood: string;
  dishes: Dish[];
  pairing: PairingRecommendation;
  estimatedPrepTime: string;
  chefMotto: string;
}

export interface SavedTasting {
  id: string;
  menu: CulinaryMenu;
  personalNotes: string;
  rating: number; // 1-5 stars
  createdAt: number; // timestamp
}
