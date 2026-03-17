import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  GetGrantCard,
  GetGrantCardContent,
} from '../../../components/GetGrantCard';
import { GetGrantButton } from '../../../components/GetGrantButton';
import { GetGrantBadge } from '../../../components/GetGrantBadge';
import { GetGrantTabs } from '../../../components/GetGrantTabs';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import {
  MapPin,
  Globe,
  GraduationCap,
  Star,
  Calendar,
  Check,
  AlertCircle,
  BookOpen,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useConsultation } from '../../../context/ConsultationContext';
import { universityDetails } from '../../../data/universities/details';

export function UniversityDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { openConsultation } = useConsultation();

  const university = universityDetails[Number(id)];

  if (!university) {
    return (
      <div className="min-h-screen bg-muted flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Университет не найден
          </h2>
          <GetGrantButton onClick={() => navigate('/universities')}>
            Вернуться к каталогу
          </GetGrantButton>
        </div>
      </div>
    );
  }

  const tabs = [
    {
      id: 'overview',
      label: 'Обзор',
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              О университете
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {university.overview.description}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Ключевые преимущества
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {university.overview.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Факультеты
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {university.overview.faculties.map((faculty, index) => (
                <GetGrantCard key={index}>
                  <GetGrantCardContent>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <span className="text-sm text-foreground">{faculty}</span>
                    </div>
                  </GetGrantCardContent>
                </GetGrantCard>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'requirements',
      label: 'Требования',
      content: (
        <div className="space-y-8">
          <GetGrantCard>
            <GetGrantCardContent>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Академические требования
              </h3>
              <ul className="space-y-2">
                {university.requirements.academic.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </GetGrantCardContent>
          </GetGrantCard>
          <GetGrantCard>
            <GetGrantCardContent>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Языковые требования
              </h3>
              <ul className="space-y-2">
                {university.requirements.language.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </GetGrantCardContent>
          </GetGrantCard>
          <GetGrantCard>
            <GetGrantCardContent>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Необходимые документы
              </h3>
              <ul className="space-y-2">
                {university.requirements.documents.map((doc, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{doc}</span>
                  </li>
                ))}
              </ul>
            </GetGrantCardContent>
          </GetGrantCard>
        </div>
      ),
    },
    {
      id: 'deadlines',
      label: 'Дедлайны',
      content: (
        <div className="space-y-4">
          {university.deadlines.map((deadline, index) => (
            <GetGrantCard key={index}>
              <GetGrantCardContent>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary/15">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">
                      {deadline.type}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">
                          Дедлайн подачи:
                        </span>
                        <p className="font-medium text-foreground">
                          {deadline.date}
                        </p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">
                          Уведомление:
                        </span>
                        <p className="font-medium text-foreground">
                          {deadline.notification}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </GetGrantCardContent>
            </GetGrantCard>
          ))}
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Важно!</h4>
                <p className="text-sm text-foreground/90">
                  Рекомендуем начинать подготовку документов минимум за 6
                  месяцев до дедлайна.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'costs',
      label: 'Стоимость',
      content: (
        <div className="space-y-6">
          <GetGrantCard>
            <GetGrantCardContent>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Стоимость обучения на 2024-2025 год
              </h3>
              <div className="space-y-4">
                {(
                  [
                    ['Обучение', university.costs.tuition],
                    ['Проживание', university.costs.housing],
                    ['Питание', university.costs.meals],
                    ['Учебники', university.costs.books],
                    ['Личные расходы', university.costs.personal],
                  ] as [string, string][]
                ).map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-muted-foreground">{label}</span>
                    <span className="font-semibold text-foreground">
                      {value}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-2">
                  <span className="font-semibold text-foreground">
                    Итого за год
                  </span>
                  <span className="text-2xl font-bold text-foreground">
                    {university.costs.total}
                  </span>
                </div>
              </div>
            </GetGrantCardContent>
          </GetGrantCard>
          <GetGrantCard className="bg-primary/10 border-primary/20">
            <GetGrantCardContent>
              <h4 className="font-semibold text-foreground mb-3">
                Финансовая помощь
              </h4>
              <p className="text-sm text-foreground/90 mb-4">
                Многие университеты предлагают need-based финансовую помощь для
                иностранных студентов. Уточняйте условия на официальном сайте.
              </p>
              <GetGrantButton variant="outline" size="sm">
                Узнать о стипендиях
              </GetGrantButton>
            </GetGrantCardContent>
          </GetGrantCard>
        </div>
      ),
    },
    {
      id: 'reviews',
      label: 'Отзывы',
      content: (
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">5.0</div>
              <div className="flex gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {university.reviews.length} отзыва
              </div>
            </div>
          </div>
          {university.reviews.map((review) => (
            <GetGrantCard key={review.id}>
              <GetGrantCardContent>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {review.author}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {review.program} • Поступил в {review.year}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= review.rating
                            ? 'fill-primary text-primary'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-foreground">{review.text}</p>
              </GetGrantCardContent>
            </GetGrantCard>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-muted">
      <div className="relative h-80 overflow-hidden">
        <ImageWithFallback
          src={university.image}
          alt={university.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <div className="container-custom -mt-32 relative z-10 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}>
          <GetGrantCard className="mb-8">
            <GetGrantCardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-24 h-24 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 border border-border">
                  <span className="text-4xl font-bold text-secondary-foreground">
                    {university.logo}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                        {university.name}
                      </h1>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>
                            {university.city}, {university.country}
                          </span>
                        </div>
                        {university.website && (
                          <div className="flex items-center gap-1">
                            <Globe className="w-4 h-4" />
                            <span>{university.website}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    {university.ranking && (
                      <GetGrantBadge variant="yellow">
                        <Star className="w-4 h-4 mr-1 fill-current" />#
                        {university.ranking} в мире
                      </GetGrantBadge>
                    )}
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <div className="text-2xl font-bold text-foreground">
                        {university.students?.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Студентов
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">
                        {university.acceptance}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Процент поступления
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">
                        {university.programs}+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Программ
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex flex-col sm:flex-row gap-4">
                  <GetGrantButton
                    variant="primary"
                    size="lg"
                    className="flex-1">
                    Подать заявку
                  </GetGrantButton>
                  <GetGrantButton
                    variant="outline"
                    size="lg"
                    className="flex-1"
                    onClick={() =>
                      openConsultation({
                        source: 'university-detail-cta',
                        message: `Интересует университет: ${university.name}`,
                      })
                    }>
                    Получить консультацию
                  </GetGrantButton>
                </div>
              </div>
            </GetGrantCardContent>
          </GetGrantCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}>
          <GetGrantCard>
            <div className="p-6">
              <GetGrantTabs tabs={tabs} />
            </div>
          </GetGrantCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Связанные программы
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {university.relatedPrograms.map((program, index) => (
              <GetGrantCard key={index} hoverable>
                <GetGrantCardContent>
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {program.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {program.level}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {program.duration}
                      </p>
                    </div>
                  </div>
                </GetGrantCardContent>
              </GetGrantCard>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
