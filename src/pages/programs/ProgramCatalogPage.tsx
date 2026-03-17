import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GetGrantCard,
  GetGrantCardContent,
  GetGrantCardFooter,
} from '../../components/GetGrantCard';
import { GetGrantButton } from '../../components/GetGrantButton';
import { GetGrantBadge } from '../../components/GetGrantBadge';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import {
  Filter,
  X,
  Search,
  BookOpen,
  Clock,
  TrendingUp,
  Star,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROGRAMS } from '../../data/programs/list';

const FIELDS = ['Технологии', 'Бизнес', 'Медицина', 'Инженерия', 'Искусство'];
const LEVELS = ['Bachelor', 'Master', 'PhD', 'Pre-Med'];

export function ProgramCatalogPage() {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedField, setSelectedField] = useState<string[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<string[]>([]);
  const [search, setSearch] = useState('');

  const filtered = PROGRAMS.filter((p) => {
    if (selectedField.length && !selectedField.includes(p.field)) return false;
    if (selectedLevel.length && !selectedLevel.includes(p.level)) return false;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase()))
      return false;
    return true;
  });

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Поиск
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Название программы..."
            className="w-full pl-10 pr-4 py-3 bg-input-background border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Направление
        </label>
        <div className="space-y-2">
          {FIELDS.map((field) => (
            <label
              key={field}
              className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedField.includes(field)}
                onChange={(e) =>
                  setSelectedField(
                    e.target.checked
                      ? [...selectedField, field]
                      : selectedField.filter((f) => f !== field),
                  )
                }
                className="w-4 h-4 border-border rounded focus:ring-ring"
              />
              <span className="text-sm text-foreground">{field}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Уровень
        </label>
        <div className="space-y-2">
          {LEVELS.map((level) => (
            <label
              key={level}
              className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedLevel.includes(level)}
                onChange={(e) =>
                  setSelectedLevel(
                    e.target.checked
                      ? [...selectedLevel, level]
                      : selectedLevel.filter((l) => l !== level),
                  )
                }
                className="w-4 h-4 border-border rounded focus:ring-ring"
              />
              <span className="text-sm text-foreground">{level}</span>
            </label>
          ))}
        </div>
      </div>
      <GetGrantButton
        variant="outline"
        size="sm"
        className="w-full"
        onClick={() => {
          setSelectedField([]);
          setSelectedLevel([]);
          setSearch('');
        }}>
        Сбросить фильтры
      </GetGrantButton>
    </div>
  );

  return (
    <div className="min-h-screen bg-muted">
      <div className="container-custom py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Каталог программ
          </h1>
          <p className="text-muted-foreground">
            Найдено {filtered.length} программ обучения
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <GetGrantCard>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold text-foreground">Фильтры</h2>
                    <Filter className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <FilterSidebar />
                </div>
              </GetGrantCard>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <GetGrantButton
                variant="outline"
                size="sm"
                className="lg:hidden"
                onClick={() => setShowFilters(true)}>
                <Filter className="w-4 h-4 mr-2" />
                Фильтры
              </GetGrantButton>
              <select className="px-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring ml-auto">
                <option>По популярности</option>
                <option>По зарплате</option>
                <option>По длительности</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filtered.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}>
                  <GetGrantCard hoverable className="h-full">
                    <GetGrantCardContent className="p-0">
                      <div className="relative h-48 overflow-hidden rounded-t-xl">
                        <ImageWithFallback
                          src={program.image}
                          alt={program.name}
                          className="w-full h-full object-cover"
                        />
                        {program.popular && (
                          <div className="absolute top-3 right-3">
                            <GetGrantBadge variant="yellow">
                              <Star className="w-3 h-3 mr-1 fill-current" />
                              Популярно
                            </GetGrantBadge>
                          </div>
                        )}
                        <div className="absolute top-3 left-3">
                          <GetGrantBadge variant="default">
                            {program.field}
                          </GetGrantBadge>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-semibold text-foreground">
                            {program.name}
                          </h3>
                          <GetGrantBadge variant="outline">
                            {program.level}
                          </GetGrantBadge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">
                              {program.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <BookOpen className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">
                              {program.universities} ВУЗов
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mb-4 p-3 bg-primary/10 rounded-lg border border-primary/15">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          <div>
                            <div className="text-xs text-muted-foreground">
                              Средняя зарплата
                            </div>
                            <div className="font-semibold text-foreground">
                              {program.avgSalary}/год
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-2">
                            Карьерные пути:
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {program.careers.slice(0, 2).map((career) => (
                              <span
                                key={career}
                                className="text-xs px-2 py-1 bg-muted rounded">
                                {career}
                              </span>
                            ))}
                            {program.careers.length > 2 && (
                              <span className="text-xs px-2 py-1 bg-muted rounded">
                                +{program.careers.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </GetGrantCardContent>
                    <GetGrantCardFooter>
                      <GetGrantButton
                        variant="ghost"
                        size="sm"
                        className="w-full"
                        onClick={() => navigate(`/programs/${program.id}`)}>
                        Подробнее о программе
                      </GetGrantButton>
                    </GetGrantCardFooter>
                  </GetGrantCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              onClick={() => setShowFilters(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween' }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-background z-50 overflow-y-auto lg:hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">Фильтры</h2>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-2 hover:bg-muted rounded-lg">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterSidebar />
                <GetGrantButton
                  variant="primary"
                  size="lg"
                  className="w-full mt-6"
                  onClick={() => setShowFilters(false)}>
                  Применить
                </GetGrantButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
