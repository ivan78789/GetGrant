export interface Country {
  id: string;
  flag: string;
  image?: string;
  name: {
    ru: string;
    en: string;
  };
  overview: {
    ru: string;
    en: string;
  };
  capital: string;
  language: string;
  currency: string;
  population: string;
  timezone: string;
}

export interface CountryDetail extends Country {
  costOfLiving: {
    rent: { min: string; max: string; avg: string };
    food: { min: string; max: string; avg: string };
    transport: { min: string; max: string; avg: string };
    utilities: { min: string; max: string; avg: string };
    total: { min: string; max: string; avg: string };
  };
  topUniversities: {
    name: string;
    ranking: number;
    city: string;
    tuition: string;
  }[];
  visaInfo: {
    title: string;
    description: string;
  }[];
}
