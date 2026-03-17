import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  GetGrantCard,
  GetGrantCardContent,
} from '../../../components/GetGrantCard';
import { GetGrantButton } from '../../../components/GetGrantButton';
import { GetGrantBadge } from '../../../components/GetGrantBadge';
import {
  MapPin,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Clock,
  FileText,
  Home,
  DollarSign,
} from 'lucide-react';
import { motion } from 'motion/react';
import { countryDetails } from '../../../data/countries/details';
import { useConsultation } from '../../../context/ConsultationContext';

export function CountryDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { openConsultation } = useConsultation();

  const detail = countryDetails[id ?? 'us'] ?? countryDetails['us'];

  if (!detail) {
    return (
      <div className="min-h-screen bg-muted flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Страна не найдена
          </h2>
          <GetGrantButton onClick={() => navigate('/countries')}>
            Вернуться к каталогу
          </GetGrantButton>
        </div>
      </div>
    );
  }

  const advantages = [
    {
      icon: GraduationCap,
      title: 'Топовое образование',
      description: `${detail.name.ru} входит в число лидеров мирового образования`,
    },
    {
      icon: Briefcase,
      title: 'Карьерные возможности',
      description: 'Широкие возможности для работы после окончания обучения',
    },
    {
      icon: TrendingUp,
      title: 'Инновации',
      description: 'Развитая экономика и технологический сектор',
    },
    {
      icon: MapPin,
      title: 'Качество жизни',
      description: `Столица: ${detail.capital}. Язык: ${detail.language}`,
    },
  ];

  return (
    <div className="min-h-screen bg-muted">
      {/* Hero */}
      <div className="bg-secondary text-secondary-foreground py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-6">
            <div className="text-8xl">{detail.flag}</div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {detail.name.ru}
              </h1>
              {detail.overview.ru && (
                <p className="max-w-3xl text-secondary-foreground/80 leading-relaxed">
                  {detail.overview.ru}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Преимущества обучения
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, index) => (
              <GetGrantCard key={index}>
                <GetGrantCardContent>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 border border-primary/15">
                    <adv.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {adv.description}
                  </p>
                </GetGrantCardContent>
              </GetGrantCard>
            ))}
          </div>
        </motion.div>

        {/* Cost of Living */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Стоимость жизни (в месяц)
          </h2>
          <GetGrantCard>
            <GetGrantCardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-4 pb-4 border-b border-border font-semibold text-sm">
                  <div>Категория</div>
                  <div className="text-center">Минимум</div>
                  <div className="text-center">Среднее</div>
                  <div className="text-center">Максимум</div>
                </div>
                {(
                  [
                    { icon: Home, label: 'Аренда жилья', key: 'rent' },
                    { icon: DollarSign, label: 'Питание', key: 'food' },
                    { icon: MapPin, label: 'Транспорт', key: 'transport' },
                    {
                      icon: Clock,
                      label: 'Коммунальные услуги',
                      key: 'utilities',
                    },
                  ] as const
                ).map(({ icon: Icon, label, key }) => (
                  <div
                    key={key}
                    className="grid grid-cols-4 gap-4 items-center">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-primary" />
                      <span className="text-sm">{label}</span>
                    </div>
                    <div className="text-center text-sm">
                      {detail.costOfLiving[key].min}
                    </div>
                    <div className="text-center font-semibold">
                      {detail.costOfLiving[key].avg}
                    </div>
                    <div className="text-center text-sm">
                      {detail.costOfLiving[key].max}
                    </div>
                  </div>
                ))}
                <div className="grid grid-cols-4 gap-4 items-center pt-4 border-t border-border">
                  <div className="font-semibold">Итого</div>
                  <div className="text-center">
                    {detail.costOfLiving.total.min}
                  </div>
                  <div className="text-center text-xl font-bold text-foreground">
                    {detail.costOfLiving.total.avg}
                  </div>
                  <div className="text-center">
                    {detail.costOfLiving.total.max}
                  </div>
                </div>
              </div>
            </GetGrantCardContent>
          </GetGrantCard>
        </motion.div>

        {/* Top Universities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12">
          <div className="flex items-center justify-between mb-8">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detail.topUniversities.map((uni, index) => (
              <GetGrantCard key={index} hoverable>
                <GetGrantCardContent>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-foreground flex-1">
                      {uni.name}
                    </h3>
                    <GetGrantBadge variant="yellow">
                      #{uni.ranking}
                    </GetGrantBadge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{uni.city}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Стоимость: </span>
                    <span className="font-semibold text-foreground">
                      {uni.tuition}/год
                    </span>
                  </div>
                </GetGrantCardContent>
              </GetGrantCard>
            ))}
          </div>
        </motion.div>

        {/* Visa Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Визовая информация
          </h2>
          <div className="space-y-4">
            {detail.visaInfo.map((visa, index) => (
              <GetGrantCard key={index}>
                <GetGrantCardContent>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary/15">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {visa.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {visa.description}
                      </p>
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
                Готовы начать обучение в {detail.name.ru}?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Получите персональную консультацию по выбору университета и
                помощь в подготовке документов
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GetGrantButton
                  variant="primary"
                  size="lg"
                  onClick={() =>
                    openConsultation({
                      source: 'country-detail-cta',
                      message: `Интересует обучение в стране: ${detail.name.ru}`,
                    })
                  }>
                  Получить консультацию
                </GetGrantButton>
                <GetGrantButton
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/universities')}>
                  Смотреть университеты
                </GetGrantButton>
              </div>
            </GetGrantCardContent>
          </GetGrantCard>
        </motion.div>
      </div>
    </div>
  );
}
