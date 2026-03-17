import type { CountryDetail } from '../../types/country';

export const countryDetails: Record<string, CountryDetail> = {
  us: {
    id: 'us',
    flag: '🇺🇸',
    name: { ru: 'США', en: 'United States' },
    overview: {
      ru: 'США — мировой лидер в образовании с более чем 4000 университетов.',
      en: 'The USA is a world leader in education.',
    },
    capital: 'Вашингтон',
    language: 'Английский',
    currency: 'USD',
    population: '331 млн',
    timezone: 'UTC-5 до UTC-10',
    costOfLiving: {
      rent: { min: '$800', max: '$2,500', avg: '$1,500' },
      food: { min: '$300', max: '$600', avg: '$400' },
      transport: { min: '$50', max: '$150', avg: '$100' },
      utilities: { min: '$100', max: '$200', avg: '$150' },
      total: { min: '$1,250', max: '$3,450', avg: '$2,150' },
    },
    topUniversities: [
      {
        name: 'Harvard University',
        ranking: 1,
        city: 'Cambridge, MA',
        tuition: '$54,000',
      },
      { name: 'MIT', ranking: 2, city: 'Cambridge, MA', tuition: '$55,000' },
      {
        name: 'Stanford University',
        ranking: 3,
        city: 'Stanford, CA',
        tuition: '$56,000',
      },
      {
        name: 'Yale University',
        ranking: 4,
        city: 'New Haven, CT',
        tuition: '$57,000',
      },
    ],
    visaInfo: [
      {
        title: 'F-1 Student Visa',
        description:
          'Основная студенческая виза для аккредитованных университетов',
      },
      {
        title: 'J-1 Exchange Visa',
        description: 'Для программ обмена и стажировок',
      },
      {
        title: 'OPT',
        description: '12-36 месяцев работы после окончания обучения',
      },
    ],
  },
  uk: {
    id: 'uk',
    flag: '🇬🇧',
    name: { ru: 'Великобритания', en: 'United Kingdom' },
    overview: {
      ru: 'Великобритания — родина старейших университетов мира.',
      en: 'The UK is home to the oldest universities in the world.',
    },
    capital: 'Лондон',
    language: 'Английский',
    currency: 'GBP',
    population: '67 млн',
    timezone: 'UTC+0',
    costOfLiving: {
      rent: { min: '£700', max: '£2,200', avg: '£1,200' },
      food: { min: '£250', max: '£500', avg: '£350' },
      transport: { min: '£80', max: '£180', avg: '£120' },
      utilities: { min: '£100', max: '£200', avg: '£150' },
      total: { min: '£1,130', max: '£3,080', avg: '£1,820' },
    },
    topUniversities: [
      {
        name: 'Oxford University',
        ranking: 1,
        city: 'Oxford',
        tuition: '£35,000',
      },
      {
        name: 'Cambridge University',
        ranking: 2,
        city: 'Cambridge',
        tuition: '£34,000',
      },
      {
        name: 'Imperial College',
        ranking: 3,
        city: 'London',
        tuition: '£36,000',
      },
      { name: 'UCL', ranking: 4, city: 'London', tuition: '£32,000' },
    ],
    visaInfo: [
      {
        title: 'Student Visa',
        description: 'Основная виза для обучения в Великобритании',
      },
      {
        title: 'Graduate Route',
        description: '2 года работы после окончания бакалавриата/магистратуры',
      },
      {
        title: 'Skilled Worker',
        description: 'Переход на рабочую визу после трудоустройства',
      },
    ],
  },
  de: {
    id: 'de',
    flag: '🇩🇪',
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
    costOfLiving: {
      rent: { min: '€400', max: '€1,200', avg: '€700' },
      food: { min: '€200', max: '€400', avg: '€280' },
      transport: { min: '€30', max: '€100', avg: '€60' },
      utilities: { min: '€80', max: '€150', avg: '€110' },
      total: { min: '€710', max: '€1,850', avg: '€1,150' },
    },
    topUniversities: [
      { name: 'TU Munich', ranking: 1, city: 'Мюнхен', tuition: '€0' },
      { name: 'LMU Munich', ranking: 2, city: 'Мюнхен', tuition: '€0' },
      { name: 'Heidelberg', ranking: 3, city: 'Гейдельберг', tuition: '€0' },
      {
        name: 'Humboldt University',
        ranking: 4,
        city: 'Берлин',
        tuition: '€0',
      },
    ],
    visaInfo: [
      {
        title: 'Student Visa (§16b)',
        description: 'Основная виза для зачисленных студентов',
      },
      {
        title: 'Job Seeker Visa',
        description: '18 месяцев для поиска работы после окончания',
      },
      {
        title: 'EU Blue Card',
        description: 'Рабочая виза для высококвалифицированных специалистов',
      },
    ],
  },
  ca: {
    id: 'ca',
    flag: '🇨🇦',
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
    costOfLiving: {
      rent: { min: 'C$700', max: 'C$2,000', avg: 'C$1,200' },
      food: { min: 'C$250', max: 'C$500', avg: 'C$350' },
      transport: { min: 'C$80', max: 'C$160', avg: 'C$110' },
      utilities: { min: 'C$80', max: 'C$160', avg: 'C$120' },
      total: { min: 'C$1,110', max: 'C$2,820', avg: 'C$1,780' },
    },
    topUniversities: [
      {
        name: 'University of Toronto',
        ranking: 1,
        city: 'Торонто',
        tuition: 'C$45,000',
      },
      { name: 'UBC', ranking: 2, city: 'Ванкувер', tuition: 'C$42,000' },
      {
        name: 'McGill University',
        ranking: 3,
        city: 'Монреаль',
        tuition: 'C$38,000',
      },
      {
        name: 'University of Alberta',
        ranking: 4,
        city: 'Эдмонтон',
        tuition: 'C$30,000',
      },
    ],
    visaInfo: [
      {
        title: 'Study Permit',
        description: 'Основное разрешение на обучение в Канаде',
      },
      {
        title: 'PGWP',
        description:
          'Post-Graduation Work Permit — до 3 лет работы после учёбы',
      },
      {
        title: 'Express Entry',
        description: 'Путь к постоянному резидентству после работы',
      },
    ],
  },
};
