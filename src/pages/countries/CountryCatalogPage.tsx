import React from 'react';
import { useNavigate } from 'react-router-dom'; // ← ДОБАВИТЬ!
import {
  GetGrantCard,
  GetGrantCardContent,
} from '../../components/GetGrantCard';
import { GetGrantButton } from '../../components/GetGrantButton';
import { motion } from 'motion/react';
import { COUNTRIES } from '../../data/countries/list';

export function CountryCatalogPage() {
  // ← УБРАЛИ PROPS!
  const navigate = useNavigate(); // ← ДОБАВИТЬ!
  const countries = COUNTRIES;

  const handleCountryClick = (countryId: string) => {
    navigate(`/countries/${countryId}`); // ← ИСПРАВЛЕНО!
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
                className="h-full cursor-pointer"
                onClick={() => handleCountryClick(country.id)}>
                {' '}
                {/* ← ИСПРАВЛЕНО! */}
                <GetGrantCardContent>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-6xl">{country.flag}</div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-foreground mb-1">
                        {country.name.ru}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {country.name.en}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {country.overview.ru}
                  </p>

                  <GetGrantButton
                    variant="ghost"
                    size="sm"
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCountryClick(country.id);
                    }}>
                    Подробнее о стране
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
