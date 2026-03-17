import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Users, BookOpen } from 'lucide-react';
import { GetGrantCard, GetGrantCardContent } from '../GetGrantCard';
import { GetGrantBadge } from '../GetGrantBadge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { EmblaCarousel, EmblaSlide } from '../carousel/EmblaCarousel';
import { UNIVERSITIES } from '../../data/universities/list';

const colors = [
  'bg-red-600',
  'bg-blue-800',
  'bg-red-700',
  'bg-blue-900',
  'bg-gray-800',
  'bg-blue-700',
];

export function UniversityPartnersSection() {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container-custom mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Университеты-партнёры
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground">
          Мы работаем с ведущими университетами мира
        </motion.p>
      </div>

      <EmblaCarousel className="py-0">
        {UNIVERSITIES.map((university, index) => (
          <EmblaSlide key={university.id}>
            <GetGrantCard
              hoverable
              className="h-full cursor-pointer"
              onClick={() => navigate(`/universities/${university.id}`)}>
              {/* Image */}
              <div className="relative h-40 overflow-hidden rounded-t-xl -mx-4 -mt-4 mb-4">
                <ImageWithFallback
                  src={university.image}
                  alt={university.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {university.ranking && (
                  <div className="absolute top-3 right-3">
                    <GetGrantBadge variant="yellow">
                      #{university.ranking}
                    </GetGrantBadge>
                  </div>
                )}
                {/* Logo */}
                <div
                  className={`absolute bottom-3 left-3 w-10 h-10 rounded-lg ${colors[index % colors.length]} flex items-center justify-center`}>
                  <span className="text-sm font-bold text-white">
                    {university.logo ?? university.name.slice(0, 2)}
                  </span>
                </div>
              </div>

              <GetGrantCardContent className="px-0 pb-0">
                <h3 className="font-semibold text-foreground mb-1 leading-tight">
                  {university.name}
                </h3>

                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                  <MapPin className="w-3 h-3" />
                  <span>
                    {university.city}, {university.country}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-primary" />
                    <span>{university.programs} программ</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-primary" />
                    <span>{university.students?.toLocaleString()}</span>
                  </div>
                </div>
              </GetGrantCardContent>
            </GetGrantCard>
          </EmblaSlide>
        ))}
      </EmblaCarousel>

      {/* Stats */}
      <div className="container-custom mt-12 pt-12 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '50+', label: 'Университетов-партнёров' },
            { value: '15+', label: 'Стран для обучения' },
            { value: '500+', label: 'Поступивших студентов' },
            { value: '95%', label: 'Уровень успеха' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
