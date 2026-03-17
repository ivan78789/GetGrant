// src/types/university.ts

export interface University {
  id: number;
  name: string;
  country: string;
  city: string;
  image: string;
  tuition: string;
  programs: number;
  acceptance: string;
  type: 'Частный' | 'Государственный';
  featured?: boolean;
  ranking?: number;
  website?: string;
  students?: number;
  description?: string;
  logo?: string;
}

export interface UniversityFilter {
  countries?: string[];
  types?: string[];
  minTuition?: number;
  maxTuition?: number;
  search?: string;
}

export interface UniversityDetail extends University {
  overview: {
    description: string;
    highlights: string[];
    faculties: string[];
  };
  requirements: {
    academic: string[];
    language: string[];
    documents: string[];
  };
  deadlines: {
    type: string;
    date: string;
    notification: string;
  }[];
  costs: {
    tuition: string;
    housing: string;
    meals: string;
    books: string;
    personal: string;
    total: string;
  };
  reviews: {
    id: number;
    author: string;
    year: string;
    program: string;
    rating: number;
    text: string;
  }[];
  relatedPrograms: {
    name: string;
    duration: string;
    level: string;
  }[];
}
