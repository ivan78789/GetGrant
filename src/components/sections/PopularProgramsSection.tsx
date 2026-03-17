import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GetGrantCard, GetGrantCardContent } from '../GetGrantCard';
import { GetGrantButton } from '../GetGrantButton';
import { GetGrantBadge } from '../GetGrantBadge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Clock, TrendingUp } from 'lucide-react';
import { EmblaCarousel, EmblaSlide } from '../carousel/EmblaCarousel';
import { PROGRAMS } from '../../data/programs/list';

export function PopularProgramsSection() {
  const navigate = useNavigate();

  return (
    <EmblaCarousel
      title="Популярные программы"
      subtitle="Выбирайте из топовых образовательных программ мира"
      className="bg-muted py-16 md:py-24">
      {PROGRAMS.map((program) => (
        <EmblaSlide key={program.id}>
          <GetGrantCard
            hoverable
            className="h-full cursor-pointer"
            onClick={() => navigate(`/programs/${program.id}`)}>
            <div className="relative h-44 overflow-hidden rounded-t-xl -mx-4 -mt-4 mb-4">
              <ImageWithFallback
                src={program.image}
                alt={program.name}
                className="w-full h-full object-cover"
              />
              {program.popular && (
                <div className="absolute top-3 left-3">
                  <GetGrantBadge variant="yellow">Популярно</GetGrantBadge>
                </div>
              )}
              <div className="absolute top-3 right-3">
                <GetGrantBadge variant="default">{program.field}</GetGrantBadge>
              </div>
            </div>

            <GetGrantCardContent className="px-0 pb-0">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-lg font-semibold text-foreground leading-tight">
                  {program.name}
                </h3>
                <GetGrantBadge variant="outline" className="flex-shrink-0">
                  {program.level}
                </GetGrantBadge>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="font-medium text-foreground">
                    {program.avgSalary}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {program.careers.slice(0, 2).map((c) => (
                  <span
                    key={c}
                    className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {c}
                  </span>
                ))}
              </div>
            </GetGrantCardContent>
          </GetGrantCard>
        </EmblaSlide>
      ))}
    </EmblaCarousel>
  );
}
