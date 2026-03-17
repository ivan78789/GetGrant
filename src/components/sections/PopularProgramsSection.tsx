import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GetGrantCard,
  GetGrantCardHeader,
  GetGrantCardContent,
  GetGrantCardFooter,
} from '../GetGrantCard';
import { GetGrantButton } from '../GetGrantButton';
import { GetGrantBadge } from '../GetGrantBadge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Clock, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { PROGRAMS } from '../../data/programs/list';

export function PopularProgramsSection() {
  const navigate = useNavigate();

  const popularPrograms = PROGRAMS.filter((p) => p.popular).slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Популярные программы
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground">
              Выбирайте из топовых образовательных программ мира
            </motion.p>
          </div>
          <GetGrantButton
            variant="outline"
            onClick={() => navigate('/programs')}>
            Все программы
          </GetGrantButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}>
              <GetGrantCard
                hoverable
                className="h-full cursor-pointer"
                onClick={() => navigate(`/programs/${program.id}`)}>
                <GetGrantCardHeader className="relative p-0 mb-4">
                  <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={program.image}
                      alt={program.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {program.popular && (
                      <div className="absolute top-3 left-3">
                        <GetGrantBadge variant="yellow">
                          Популярно
                        </GetGrantBadge>
                      </div>
                    )}
                  </div>
                </GetGrantCardHeader>

                <GetGrantCardContent>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {program.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {program.field}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{program.universities} ВУЗов</span>
                    </div>
                  </div>
                </GetGrantCardContent>

                <GetGrantCardFooter>
                  <GetGrantButton
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/programs/${program.id}`);
                    }}>
                    Подробнее
                  </GetGrantButton>
                </GetGrantCardFooter>
              </GetGrantCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
