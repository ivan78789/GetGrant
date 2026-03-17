import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GetGrantCard, GetGrantCardContent } from '../GetGrantCard';
import { GetGrantBadge } from '../GetGrantBadge';
import { Check, Users, Building } from 'lucide-react';
import { EmblaCarousel, EmblaSlide } from '../carousel/EmblaCarousel';
import { COUNTRIES } from '../../data/countries/list';

const countryImages: Record<string, string> = {
  us: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&q=80',
  uk: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
  de: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80',
  ca: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80',
};

const countryPoints: Record<string, string[]> = {
  us: [
    'Топ университеты мира',
    'OPT — работа после учёбы',
    'Стипендии и гранты',
  ],
  uk: ['Программы 3 года', 'Graduate Route виза', 'Престижный диплом'],
  de: [
    'Бесплатное образование',
    'Сильные технические ВУЗы',
    'Европейский диплом',
  ],
  ca: ['Доступные цены', 'Иммиграционные программы', 'Высокое качество жизни'],
};

const countryStats: Record<string, { universities: string; students: string }> =
  {
    us: { universities: '2,500+', students: '200+' },
    uk: { universities: '160+', students: '150+' },
    de: { universities: '400+', students: '80+' },
    ca: { universities: '100+', students: '120+' },
  };

export function PopularCountriesSection() {
  const navigate = useNavigate();
  const countries = COUNTRIES.filter((c) => countryPoints[c.id]);

  return (
    <EmblaCarousel
      title="Популярные страны"
      subtitle="Выбирайте страну для обучения из наших топовых направлений"
      className="bg-primary/5 py-16 md:py-24">
      {countries.map((country) => (
        <EmblaSlide key={country.id}>
          <GetGrantCard
            hoverable
            className="h-full cursor-pointer"
            onClick={() => navigate(`/countries/${country.id}`)}>
            {/* Флаг + фото */}
            <div className="relative h-44 overflow-hidden rounded-t-xl -mx-4 -mt-4 mb-4">
              <img
                src={countryImages[country.id]}
                alt={country.name.ru}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-4 flex items-center gap-2">
                <span className="text-3xl">{country.flag}</span>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {country.name.ru}
                  </h3>
                  <p className="text-xs text-white/80">{country.name.en}</p>
                </div>
              </div>
            </div>

            <GetGrantCardContent className="px-0 pb-0">
              {/* Stats */}
              <div className="flex gap-4 mb-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Building className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-foreground">
                    {countryStats[country.id].universities}
                  </span>
                  <span>ВУЗов</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-foreground">
                    {countryStats[country.id].students}
                  </span>
                  <span>студентов</span>
                </div>
              </div>

              {/* Points */}
              <ul className="space-y-2">
                {countryPoints[country.id].map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
            </GetGrantCardContent>
          </GetGrantCard>
        </EmblaSlide>
      ))}
    </EmblaCarousel>
  );
}
