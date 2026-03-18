import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GetGrantCard,
  GetGrantCardContent,
} from '../../components/GetGrantCard';
import { GetGrantButton } from '../../components/GetGrantButton';
import { motion } from 'motion/react';
import { COUNTRIES } from '../../data/countries/list';

export function CountryCatalogPage() {
  
  const navigate = useNavigate();
  const countries = COUNTRIES;

  const handleCountryClick = (countryId: string) => {
    navigate(`/countries/${countryId}`);
  };

  return (
    <div className="min-h-screen bg-muted">
      <div className="container-custom py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Выберите страну для обучения
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Исследуйте образовательные возможности в ведущих странах мира
          </p>
        </motion.div>

        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country, index) => (
            <motion.div
              key={country.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}>
              <GetGrantCard
                hoverable
                className="h-full cursor-pointer overflow-hidden p-0"
                onClick={() => handleCountryClick(country.id)}>
                {/* Картинка */}
                <div className="h-44 overflow-hidden bg-muted">
                  {country.image ? (
                    <img
                      src={country.image}
                      alt={country.name.ru}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-7xl">
                      {country.flag}
                    </div>
                  )}
                </div>

                <GetGrantCardContent className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
                      <span className="text-sm font-bold text-primary tracking-widest">
                        {country.id.toUpperCase()}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-lg font-bold text-foreground leading-tight truncate">
                        {country.name.ru}
                      </h2>
                      <p className="text-xs text-muted-foreground truncate">
                        {country.name.en}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                    {country.overview.ru}
                  </p>

                  <GetGrantButton
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCountryClick(country.id);
                    }}>
                    Подробнее о стране →
                  </GetGrantButton>
                </GetGrantCardContent>
              </GetGrantCard>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16">
          <GetGrantCard className="text-center bg-gradient-to-br from-primary/10 to-background">
            <GetGrantCardContent className="p-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Не можете определиться?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Наши эксперты помогут выбрать оптимальную страну и университет
                исходя из ваших целей, бюджета и предпочтений
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GetGrantButton variant="primary" size="lg">
                  Получить консультацию
                </GetGrantButton>
                <GetGrantButton variant="outline" size="lg">
                  Пройти тест на подбор
                </GetGrantButton>
              </div>
            </GetGrantCardContent>
          </GetGrantCard>
        </motion.div>
      </div>
    </div>
  );
}
