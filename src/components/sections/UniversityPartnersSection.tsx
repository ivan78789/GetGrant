import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { UNIVERSITIES } from '../../data/universities/list';
import { universityDetails } from '../../data/universities/details';
export function UniversityPartnersSection() {
  const navigate = useNavigate();

  const partners = UNIVERSITIES.filter((u) => universityDetails[u.id]).slice(
    0,
    6,
  );

  const colors = [
    'bg-red-600',
    'bg-blue-800',
    'bg-red-700',
    'bg-blue-900',
    'bg-gray-800',
    'bg-blue-700',
  ];

  return (
    <section className="py-16 md:py-24 bg-primary/10">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Университеты-партнёры
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы работаем с ведущими университетами мира
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((university, index) => (
            <motion.div
              key={university.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-card rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 cursor-pointer border border-border group"
              onClick={() => navigate(`/universities/${university.id}`)}>
              <div
                className={`w-16 h-16 rounded-xl ${colors[index % colors.length]} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <span className="text-2xl font-bold text-white">
                  {university.logo ?? university.name.slice(0, 2)}
                </span>
              </div>
              <div className="text-sm font-semibold text-foreground text-center leading-tight">
                {university.name}
              </div>
              <div className="text-xs text-muted-foreground mt-1 text-center">
                {university.country}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Университетов-партнёров' },
              { value: '15+', label: 'Стран для обучения' },
              { value: '500+', label: 'Поступивших студентов' },
              { value: '95%', label: 'Уровень успеха' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
