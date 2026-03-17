import React from 'react';
import { GetGrantCard } from '../GetGrantCard';
import { Award, Users, Globe, BookOpen, Clock, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export function WhyGetGrantSection() {
  const features = [
    {
      icon: Award,
      title: 'Лицензированный центр',
      description: 'Официальная лицензия на образовательную деятельность и международные аккредитации'
    },
    {
      icon: Users,
      title: 'Персональный менеджер',
      description: 'Индивидуальное сопровождение на всех этапах подготовки и поступления'
    },
    {
      icon: Globe,
      title: '15+ стран',
      description: 'Партнёрство с университетами США, Великобритании, Канады, Европы и Азии'
    },
    {
      icon: BookOpen,
      title: 'Онлайн-подготовка',
      description: 'Курсы по языку, предметам и подготовке к международным экзаменам'
    },
    {
      icon: Clock,
      title: 'Поддержка 24/7',
      description: 'Всегда на связи для ответов на ваши вопросы и решения любых проблем'
    },
    {
      icon: Shield,
      title: '95% успеха',
      description: 'Наши студенты успешно поступают в топовые университеты мира'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Почему GetGrant?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Мы предоставляем комплексную поддержку для успешного поступления в зарубежные университеты
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GetGrantCard hoverable className="h-full">
                <div className="flex flex-col items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/15">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </GetGrantCard>
            </motion.div>
          ))}
        </div>

        {/* Accreditation Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-muted rounded-2xl p-8 text-center border border-border"
        >
          <p className="text-sm text-muted-foreground mb-2">Аккредитация и лицензии</p>
          <p className="text-foreground font-medium">
            Лицензия № 123456 | Аккредитация NAFSA | Член ассоциации ICEF
          </p>
        </motion.div>
      </div>
    </section>
  );
}
