import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GetGrantCard } from '../GetGrantCard';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { COUNTRIES } from '../../data/countries/list';

export function PopularCountriesSection() {
  const navigate = useNavigate();

  const countriesWithPoints: Record<string, string[]> = {
    us: [
      'Топ университеты мира',
      'Широкий выбор программ',
      'Постдипломная работа (OPT)',
      'Стипендии и гранты',
    ],
    uk: [
      'Престижное образование',
      'Короткие программы (3 года)',
      'Graduate Route виза',
      'Культурное разнообразие',
    ],
    ca: [
      'Доступные цены',
      'Иммиграционные программы',
      'Высокое качество жизни',
      'Безопасная среда',
    ],
    de: [
      'Бесплатное образование',
      'Сильные технические ВУЗы',
      'Европейский диплом',
      'Возможность работы',
    ],
  };

  const displayCountries = COUNTRIES.filter((c) => countriesWithPoints[c.id]);

  return (
    <section className="py-16 md:py-24 bg-primary/10">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Популярные страны
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выбирайте страну для обучения из наших топовых направлений
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCountries.map((country, index) => (
            <motion.div
              key={country.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}>
              <GetGrantCard
                hoverable
                className="h-full cursor-pointer"
                onClick={() => navigate(`/countries/${country.id}`)}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">{country.flag}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {country.name.ru}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {country.name.en}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {countriesWithPoints[country.id].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </GetGrantCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
