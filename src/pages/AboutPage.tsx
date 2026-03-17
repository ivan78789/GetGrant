import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Award,
  Users,
  Globe,
  BookOpen,
  Clock,
  Shield,
  Star,
  CheckCircle,
  TrendingUp,
  Heart,
  Target,
  Zap,
} from 'lucide-react';
import { GetGrantCard, GetGrantCardContent } from '../components/GetGrantCard';
import { GetGrantButton } from '../components/GetGrantButton';
import { GetGrantBadge } from '../components/GetGrantBadge';
import { useConsultation } from '../context/ConsultationContext';

export function AboutPage() {
  const navigate = useNavigate();
  const { openConsultation } = useConsultation();

  const stats = [
    { value: '500+', label: 'Поступивших студентов', icon: Users },
    { value: '50+', label: 'Университетов-партнёров', icon: Globe },
    { value: '15+', label: 'Стран для обучения', icon: TrendingUp },
    { value: '95%', label: 'Уровень успеха', icon: Star },
  ];

  const values = [
    {
      icon: Target,
      title: 'Результат',
      description:
        'Мы фокусируемся на реальном поступлении, а не просто на консультациях. Каждый студент получает персональный план.',
    },
    {
      icon: Heart,
      title: 'Забота',
      description:
        'Понимаем, что поступление за рубеж — стресс для всей семьи. Поддерживаем на каждом шаге 24/7.',
    },
    {
      icon: Zap,
      title: 'Эффективность',
      description:
        'Никакой воды — только конкретные шаги, дедлайны и чёткий план подготовки.',
    },
    {
      icon: Shield,
      title: 'Честность',
      description:
        'Говорим правду о шансах поступления, стоимости и сложностях. Никаких пустых обещаний.',
    },
  ];

  const team = [
    {
      name: 'Айгерим Бекова',
      role: 'Основатель & CEO',
      education: 'Harvard Business School, MBA',
      emoji: '👩‍💼',
      color: 'bg-pink-100',
    },
    {
      name: 'Данияр Сейтов',
      role: 'Директор по образованию',
      education: 'Oxford University, MSc',
      emoji: '👨‍🎓',
      color: 'bg-blue-100',
    },
    {
      name: 'Мадина Асанова',
      role: 'Старший консультант',
      education: 'University of Toronto, BA',
      emoji: '👩‍🏫',
      color: 'bg-purple-100',
    },
    {
      name: 'Тимур Жаксылыков',
      role: 'Консультант по США',
      education: 'MIT, BSc Computer Science',
      emoji: '👨‍💻',
      color: 'bg-green-100',
    },
  ];

  const milestones = [
    {
      year: '2018',
      text: 'Основание GetGrant. Первые 5 студентов поступили в университеты Великобритании.',
    },
    {
      year: '2019',
      text: 'Расширение до 50 студентов. Открытие направлений США и Канады.',
    },
    {
      year: '2020',
      text: 'Переход в онлайн. Запуск курсов подготовки к IELTS и SAT.',
    },
    {
      year: '2021',
      text: 'Партнёрство с 30+ университетами. 200 успешных поступлений.',
    },
    {
      year: '2022',
      text: 'Получение лицензии на образовательную деятельность.',
    },
    {
      year: '2023',
      text: 'Запуск платформы. 500+ студентов. Выход на рынок Казахстана.',
    },
    {
      year: '2024',
      text: 'Запуск персонального сопровождения и трекинга поступления.',
    },
  ];

  const licenses = [
    {
      title: 'Лицензия на образовательную деятельность',
      number: '№ 240000733',
      date: 'от 01.01.2020',
      icon: Award,
    },
    {
      title: 'Свидетельство об аккредитации',
      number: '№ 654321',
      date: 'от 15.03.2021',
      icon: CheckCircle,
    },
    {
      title: 'Член ассоциации ICEF',
      number: 'ICEF Agency Status',
      date: 'с 2021 года',
      icon: Globe,
    },
    {
      title: 'Аккредитация NAFSA',
      number: 'NAFSA Member',
      date: 'с 2022 года',
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-background py-20 md:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl">
            <GetGrantBadge variant="yellow" className="mb-4">
              О компании
            </GetGrantBadge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Мы помогаем мечтам{' '}
              <span className="text-primary">стать реальностью</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              GetGrant — лицензированный образовательный центр из Бишкека. С
              2018 года мы помогаем ученикам 9–11 классов поступить в лучшие
              университеты мира. Более 500 успешных историй.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <GetGrantButton
                variant="primary"
                size="lg"
                onClick={() => openConsultation({ source: 'about-hero' })}>
                Получить консультацию
              </GetGrantButton>
              <GetGrantButton
                variant="outline"
                size="lg"
                onClick={() => navigate('/universities')}>
                Наши университеты
              </GetGrantButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Миссия */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Наша миссия
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы верим, что качественное зарубежное образование доступно
                каждому способному студенту из Центральной Азии — нужно только
                знать как.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                GetGrant убирает барьеры: языковой, информационный,
                бюрократический. Мы берём на себя всю сложность процесса — от
                выбора университета до получения визы — чтобы студент мог
                сосредоточиться на учёбе.
              </p>
              <div className="space-y-3">
                {[
                  'Персональный менеджер для каждого студента',
                  'Полное сопровождение от выбора до вылета',
                  'Прозрачный трекинг статуса поступления',
                  'Поддержка родителей на всех этапах',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  alt="Команда GetGrant"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-bold mb-1">6+</div>
                <div className="text-sm opacity-90">лет на рынке</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ценности */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Наши ценности
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Принципы, которые лежат в основе всего что мы делаем
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}>
                <GetGrantCard className="h-full">
                  <GetGrantCardContent>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 border border-primary/15">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </GetGrantCardContent>
                </GetGrantCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Наша команда
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Эксперты с реальным опытом поступления в топовые университеты мира
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}>
                <GetGrantCard hoverable className="h-full text-center">
                  <GetGrantCardContent>
                    <div
                      className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center mx-auto mb-4 text-4xl`}>
                      {member.emoji}
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {member.education}
                    </p>
                  </GetGrantCardContent>
                </GetGrantCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* История */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              История GetGrant
            </h2>
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((m, index) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex gap-6 md:gap-8 pl-12 md:pl-0 relative">
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center -translate-x-1/2 flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div
                    className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                    <GetGrantCard>
                      <GetGrantCardContent>
                        <div className="text-primary font-bold text-lg mb-1">
                          {m.year}
                        </div>
                        <p className="text-sm text-foreground">{m.text}</p>
                      </GetGrantCardContent>
                    </GetGrantCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Лицензии */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Лицензии и аккредитации
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Работаем официально и прозрачно
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {licenses.map((license, index) => (
              <motion.div
                key={license.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}>
                <GetGrantCard className="h-full text-center">
                  <GetGrantCardContent>
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-primary/15">
                      <license.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-sm leading-tight">
                      {license.title}
                    </h3>
                    <p className="text-primary font-bold text-sm mb-1">
                      {license.number}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {license.date}
                    </p>
                  </GetGrantCardContent>
                </GetGrantCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Готовы начать путь к мечте?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Запишитесь на бесплатную консультацию и узнайте в какой
              университет вы можете поступить уже в этом году
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openConsultation({ source: 'about-cta' })}
                className="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-colors text-base">
                Получить консультацию
              </button>
              <button
                onClick={() => navigate('/programs')}
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/30 text-base">
                Посмотреть программы
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
