import React from 'react';
import {
  BookOpen,
  Calculator,
  PenTool,
  Speech,
  Microscope,
  Globe2,
} from 'lucide-react';
import { GetGrantCard, GetGrantCardContent } from '../GetGrantCard';
import { GetGrantBadge } from '../GetGrantBadge';
import { EmblaCarousel, EmblaSlide } from '../carousel/EmblaCarousel';
import { useConsultation } from '../../context/ConsultationContext';

export function SubjectsCarouselSection() {
  const { openConsultation } = useConsultation();

  const subjects = [
    {
      title: 'TOEFL / IELTS',
      icon: Speech,
      tag: 'Языки',
      desc: 'Подготовка к международным экзаменам + speaking клубы.',
      cta: 'Хочу план подготовки',
    },
    {
      title: 'SAT / ACT',
      icon: Calculator,
      tag: 'Экзамены',
      desc: 'Математика и English для поступления в США.',
      cta: 'Подобрать курс',
    },
    {
      title: 'Personal Statement',
      icon: PenTool,
      tag: 'Документы',
      desc: 'Эссе, мотивационные письма и структура заявки.',
      cta: 'Проверить эссе',
    },
    {
      title: 'AP / IB',
      icon: BookOpen,
      tag: 'Школа',
      desc: 'План предметов и стратегия для сильного профиля.',
      cta: 'Составить трек',
    },
    {
      title: 'STEM-направления',
      icon: Microscope,
      tag: 'Профиль',
      desc: 'Проекты, олимпиады и портфолио под IT/инженерию.',
      cta: 'Подобрать стратегию',
    },
    {
      title: 'Страны и визы',
      icon: Globe2,
      tag: 'Поступление',
      desc: 'Выбор страны, сроки, документы и риски.',
      cta: 'Нужна консультация',
    },
  ] as const;

  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        {/* Заголовок вынесен отдельно */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Что прокачиваем
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Выберите направление свайпом или нажмите на карточку, чтобы получить
            персональный план подготовки.
          </p>
        </div>

        {/* Карусель без title */}
        <EmblaCarousel className="bg-background">
          {subjects.map((s) => (
            <EmblaSlide key={s.title}>
              <GetGrantCard
                hoverable
                className="h-full cursor-pointer group"
                onClick={() =>
                  openConsultation({
                    source: 'subjects-carousel',
                    message: `${s.title}: ${s.cta}`,
                  })
                }>
                <GetGrantCardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <s.icon className="w-6 h-6 text-primary" />
                    </div>
                    <GetGrantBadge variant="outline">{s.tag}</GetGrantBadge>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-foreground">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>

                  <div className="mt-4 text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
                    {s.cta} →
                  </div>
                </GetGrantCardContent>
              </GetGrantCard>
            </EmblaSlide>
          ))}
        </EmblaCarousel>
      </div>
    </section>
  );
}
