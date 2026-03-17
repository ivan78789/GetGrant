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
import { Filter, X, Search, Grid, List, MapPin, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { University } from '../../types/university';
import { UNIVERSITIES } from '../../data/universities/list';

// Константы выносим из компонента
const COUNTRIES = ['США', 'Великобритания', 'Канада', 'Германия', 'Австралия'];
const TYPES: University['type'][] = ['Частный', 'Государственный'];

// Выносим фильтр в отдельный компонент
interface FilterSidebarProps {
  selectedCountries: string[];
  setSelectedCountries: (countries: string[]) => void;
  selectedTypes: University['type'][];
  setSelectedTypes: (types: University['type'][]) => void;
  onClose?: () => void;
}

function FilterSidebar({
  selectedCountries,
  setSelectedCountries,
  selectedTypes,
  setSelectedTypes,
  onClose,
}: FilterSidebarProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Поиск
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Название университета..."
            className="w-full pl-10 pr-4 py-3 bg-input-background border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Страна
        </label>
        <div className="space-y-2">
          {COUNTRIES.map((country) => (
            <label
              key={country}
              className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCountries.includes(country)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedCountries([...selectedCountries, country]);
                  } else {
                    setSelectedCountries(
                      selectedCountries.filter((c) => c !== country),
                    );
                  }
                }}
                className="w-4 h-4 border-border rounded focus:ring-ring"
              />
              <span className="text-sm text-foreground">{country}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Тип университета
        </label>
        <div className="space-y-2">
          {TYPES.map((type) => (
            <label
              key={type}
              className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedTypes([...selectedTypes, type]);
                  } else {
                    setSelectedTypes(selectedTypes.filter((t) => t !== type));
                  }
                }}
                className="w-4 h-4 border-border rounded focus:ring-ring"
              />
              <span className="text-sm text-foreground">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Стоимость обучения (в год)
        </label>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="100000"
            step="5000"
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>$0</span>
            <span>$100,000+</span>
          </div>
        </div>
      </div>

      <GetGrantButton
        variant="outline"
        size="sm"
        className="w-full"
        onClick={() => {
          setSelectedCountries([]);
          setSelectedTypes([]);
          onClose?.();
        }}>
        Сбросить фильтры
      </GetGrantButton>
    </div>
  );
}

// Основной компонент страницы
export function UniversitiesPage() {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<University['type'][]>([]);

  // Фильтрация университетов (простой пример)
  const filteredUniversities = UNIVERSITIES.filter((uni) => {
    if (selectedCountries.length && !selectedCountries.includes(uni.country)) {
      return false;
    }
    if (selectedTypes.length && !selectedTypes.includes(uni.type)) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-muted">
      <div className="container-custom py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Каталог университетов
          </h1>
          <p className="text-muted-foreground">
            Найдено {filteredUniversities.length} университетов
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <GetGrantCard>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold text-foreground">Фильтры</h2>
                    <Filter className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <FilterSidebar
                    selectedCountries={selectedCountries}
                    setSelectedCountries={setSelectedCountries}
                    selectedTypes={selectedTypes}
                    setSelectedTypes={setSelectedTypes}
                  />
                </div>
              </GetGrantCard>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Controls */}
            <div className="flex items-center justify-between mb-6">
              <GetGrantButton
                variant="outline"
                size="sm"
                className="lg:hidden"
                onClick={() => setShowFilters(true)}>
                <Filter className="w-4 h-4 mr-2" />
                Фильтры
              </GetGrantButton>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-sm text-muted-foreground hidden md:block">
                  Сортировка:
                </span>
                <select className="px-4 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>По рейтингу</option>
                  <option>По стоимости</option>
                  <option>По названию</option>
                  <option>По проценту поступления</option>
                </select>
              </div>

              <div className="hidden md:flex items-center gap-2 bg-background rounded-lg p-1 border border-border">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}>
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'list'
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}>
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* University Grid/List */}
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
                  : 'space-y-6'
              }>
              {filteredUniversities.map((university, index) => (
                <motion.div
                  key={university.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}>
                  <GetGrantCard
                    hoverable
                    className="h-full cursor-pointer"
                    onClick={() => navigate(`/universities/${university.id}`)}>
                    <GetGrantCardContent className="p-0">
                      <div className="relative h-48 overflow-hidden rounded-t-xl">
                        <ImageWithFallback
                          src={university.image}
                          alt={university.name}
                          className="w-full h-full object-cover"
                        />
                        {university.featured && (
                          <div className="absolute top-3 right-3">
                            <GetGrantBadge variant="yellow">
                              <Star className="w-3 h-3 mr-1 fill-current" />
                              Топ
                            </GetGrantBadge>
                          </div>
                        )}
                        {university.ranking && (
                          <div className="absolute top-3 left-3">
                            <GetGrantBadge variant="default">
                              #{university.ranking} в мире
                            </GetGrantBadge>
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {university.name}
                        </h3>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <MapPin className="w-4 h-4" />
                          <span>
                            {university.city}, {university.country}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">
                              Стоимость
                            </div>
                            <div className="font-semibold text-foreground">
                              {university.tuition}/год
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">
                              Программы
                            </div>
                            <div className="font-semibold text-foreground">
                              {university.programs}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">
                              Процент поступления
                            </div>
                            <div className="font-semibold text-foreground">
                              {university.acceptance}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">
                              Тип
                            </div>
                            <div className="font-semibold text-foreground">
                              {university.type}
                            </div>
                          </div>
                        </div>
                      </div>
                    </GetGrantCardContent>

                    <GetGrantCardFooter>
                      <GetGrantButton
                        variant="ghost"
                        size="sm"
                        className="w-full group"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/universities/${university.id}`);
                        }}>
                        Подробнее
                      </GetGrantButton>
                    </GetGrantCardFooter>
                  </GetGrantCard>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <GetGrantButton variant="outline" size="lg">
                Загрузить ещё
              </GetGrantButton>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
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
                    className="p-2 hover:bg-muted rounded-lg transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterSidebar
                  selectedCountries={selectedCountries}
                  setSelectedCountries={setSelectedCountries}
                  selectedTypes={selectedTypes}
                  setSelectedTypes={setSelectedTypes}
                  onClose={() => setShowFilters(false)}
                />
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
