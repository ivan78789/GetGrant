import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  GetGrantCard,
  GetGrantCardContent,
} from '../../../components/GetGrantCard';
import { GetGrantButton } from '../../../components/GetGrantButton';
import { GetGrantBadge } from '../../../components/GetGrantBadge';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import {
  Clock,
  TrendingUp,
  Users,
  Briefcase,
  Check,
  BookOpen,
  Target,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useConsultation } from '../../../context/ConsultationContext';
import { programDetails } from '../../../data/programs/details';

export function ProgramDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { openConsultation } = useConsultation();

  const program = programDetails[Number(id)];

  if (!program) {
    return (
      <div className="min-h-screen bg-muted flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Программа не найдена
          </h2>
          <GetGrantButton onClick={() => navigate('/programs')}>
            Вернуться к каталогу
          </GetGrantButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted">
      <div className="relative h-80 overflow-hidden">
        <ImageWithFallback
          src={program.image}
          alt={program.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <div className="container-custom -mt-32 relative z-10 pb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}>
          <GetGrantCard className="mb-8">
            <GetGrantCardContent className="p-8">
              <div className="flex flex-wrap gap-3 mb-4">
                <GetGrantBadge variant="yellow">{program.field}</GetGrantBadge>
                <GetGrantBadge variant="outline">{program.level}</GetGrantBadge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {program.name}
              </h1>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/15">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Длительность
                    </div>
                    <div className="font-semibold text-foreground">
                      {program.duration}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/15">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Средняя зарплата
                    </div>
                    <div className="font-semibold text-foreground">
                      {program.avgSalary}/год
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/15">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Спрос</div>
                    <div className="font-semibold text-foreground">
                      Очень высокий
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {program.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <GetGrantButton variant="primary" size="lg" className="flex-1">
                  Подобрать университет
                </GetGrantButton>
                <GetGrantButton
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  onClick={() =>
                    openConsultation({
                      source: 'program-detail-cta',
                      message: `Интересует программа: ${program.name}`,
                    })
                  }>
                  Получить консультацию
                </GetGrantButton>
              </div>
            </GetGrantCardContent>
          </GetGrantCard>
        </motion.div>

        {/* Careers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Карьерные пути
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {program.careers.map((career, index) => (
              <GetGrantCard key={index}>
                <GetGrantCardContent>
                  <div className="flex items-start gap-3 mb-3">
                    <Briefcase className="w-5 h-5 text-primary mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        {career.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {career.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div>
                      <div className="text-xs text-muted-foreground">
                        Зарплата
                      </div>
                      <div className="font-semibold text-foreground">
                        {career.salary}
                      </div>
                    </div>
                    <GetGrantBadge variant="success">
                      {career.demand}
                    </GetGrantBadge>
                  </div>
                </GetGrantCardContent>
              </GetGrantCard>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Навыки, которые вы получите
          </h2>
          <GetGrantCard>
            <GetGrantCardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {program.skills.map((skill, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </GetGrantCardContent>
          </GetGrantCard>
        </motion.div>

        {/* Coursework */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Программа обучения
          </h2>
          <div className="space-y-4">
            {program.coursework.map((year) => (
              <GetGrantCard key={year.year}>
                <GetGrantCardContent>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary/15">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-foreground">
                          {year.year}
                        </div>
                        <div className="text-xs text-muted-foreground">год</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="grid md:grid-cols-2 gap-2">
                        {year.courses.map((course, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-foreground">
                              {course}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GetGrantCardContent>
              </GetGrantCard>
            ))}
          </div>
        </motion.div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Подходит ли мне эта программа?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <GetGrantCard>
              <GetGrantCardContent>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Минимальные требования
                </h3>
                <ul className="space-y-2">
                  {program.requirements.academic.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </GetGrantCardContent>
            </GetGrantCard>
            <GetGrantCard>
              <GetGrantCardContent>
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Рекомендуется
                </h3>
                <ul className="space-y-2">
                  {program.requirements.recommended.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </GetGrantCardContent>
            </GetGrantCard>
          </div>
        </motion.div>

        {/* Top Universities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-foreground">
              Топ университеты
            </h2>
            <GetGrantButton
              variant="outline"
              size="sm"
              onClick={() => navigate('/universities')}>
              Смотреть все
            </GetGrantButton>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {program.topUniversities.map((uni, index) => (
              <GetGrantCard key={index} hoverable>
                <GetGrantCardContent>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-foreground">
                      {uni.name}
                    </h3>
                    <GetGrantBadge variant="yellow">
                      #{uni.ranking}
                    </GetGrantBadge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Поступление</span>
                      <span className="font-medium">{uni.acceptance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Стоимость</span>
                      <span className="font-medium">{uni.tuition}/год</span>
                    </div>
                  </div>
                </GetGrantCardContent>
              </GetGrantCard>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <GetGrantCard className="bg-gradient-to-br from-primary/10 to-background text-center">
            <GetGrantCardContent className="p-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Заинтересовались программой?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Наши эксперты помогут выбрать университет, подготовить документы
                и успешно поступить
              </p>
              <GetGrantButton
                variant="primary"
                size="lg"
                onClick={() => openConsultation({ source: 'hero-cta' })}>
                Начать подготовку
              </GetGrantButton>
            </GetGrantCardContent>
          </GetGrantCard>
        </motion.div>
      </div>
    </div>
  );
}
