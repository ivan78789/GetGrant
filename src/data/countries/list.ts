import type { Country } from '../../types/country';

export const COUNTRIES: Country[] = [
  {
    id: 'us',
    flag: '🇺🇸',
    image:
      'https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=800&q=80',
    name: { ru: 'США', en: 'United States' },
    overview: {
      ru: 'США — мировой лидер в образовании с более чем 4000 университетов.',
      en: 'The USA is a world leader in education with over 4000 universities.',
    },
    capital: 'Вашингтон',
    language: 'Английский',
    currency: 'USD',
    population: '331 млн',
    timezone: 'UTC-5 до UTC-10',
  },
  {
    id: 'uk',
    flag: '🇬🇧',
    image:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
    name: { ru: 'Великобритания', en: 'United Kingdom' },
    overview: {
      ru: 'Великобритания — родина старейших университетов мира, включая Оксфорд и Кембридж.',
      en: 'The UK is home to the oldest universities in the world.',
    },
    capital: 'Лондон',
    language: 'Английский',
    currency: 'GBP',
    population: '67 млн',
    timezone: 'UTC+0',
  },
  {
    id: 'de',
    flag: '🇩🇪',
    image:
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80',
    name: { ru: 'Германия', en: 'Germany' },
    overview: {
      ru: 'Германия предлагает бесплатное образование даже для иностранных студентов.',
      en: 'Germany offers free education even for international students.',
    },
    capital: 'Берлин',
    language: 'Немецкий',
    currency: 'EUR',
    population: '83 млн',
    timezone: 'UTC+1',
  },
  {
    id: 'ca',
    flag: '🇨🇦',
    image:
      'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80',
    name: { ru: 'Канада', en: 'Canada' },
    overview: {
      ru: 'Канада — одна из самых привлекательных стран для иностранных студентов.',
      en: 'Canada is one of the most attractive countries for international students.',
    },
    capital: 'Оттава',
    language: 'Английский, Французский',
    currency: 'CAD',
    population: '38 млн',
    timezone: 'UTC-3.5 до UTC-8',
  },
];
