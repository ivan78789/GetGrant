import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ← ДОБАВИЛИ useNavigate!
import { Menu, X, ChevronDown, User, Phone } from 'lucide-react';
import { GetGrantButton } from './GetGrantButton';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useConsultation } from '../context/ConsultationContext';

type Page =
  | 'home'
  | 'login'
  | 'register'
  | 'dashboard'
  | 'universities'
  | 'university-detail'
  | 'countries'
  | 'country-detail'
  | 'programs'
  | 'program-detail'
  | 'courses'
  | 'admin';

interface HeaderProps {
  isAuthenticated?: boolean;
  // onNavigate больше не нужен! Убираем его
  onToggleSideNav?: () => void;
  onCloseSideNav?: () => void;
}

export function Header({
  isAuthenticated = false,
  onToggleSideNav,
  onCloseSideNav,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openConsultation } = useConsultation();
  const navigate = useNavigate(); // ← ВОТ ЭТО ИСПОЛЬЗУЕМ!

  const navigation = [
    {
      name: 'Университеты',
      path: '/universities',
      page: 'universities' as Page,
    },
    { name: 'Страны', path: '/countries', page: 'countries' as Page },
    { name: 'Программы', path: '/programs', page: 'programs' as Page },
    { name: 'Онлайн-подготовка', path: '/courses', page: 'courses' as Page },
    { name: 'О нас', path: '/about', page: 'home' as Page },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    onCloseSideNav?.();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo - теперь Link вместо button */}
          <Link
            to="/"
            onClick={() => onCloseSideNav?.()}
            className="flex items-center gap-2 focus:outline-none"
            aria-label="Перейти на главную">
            <ImageWithFallback
              src="/favicon.ico"
              alt="GetGrant Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer text-sm lg:text-base">
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {!isAuthenticated ? (
              <>
                <GetGrantButton
                  variant="ghost"
                  size="sm"
                  onClick={() => handleNavigation('/login')}>
                  Войти
                </GetGrantButton>
                <GetGrantButton
                  variant="primary"
                  size="sm"
                  onClick={() => openConsultation({ source: 'header-cta' })}>
                  Получить консультацию
                </GetGrantButton>
              </>
            ) : (
              <button className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg transition-colors">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 lg:w-5 lg:h-5 text-primary-foreground" />
                </div>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </button>
            )}
          </div>

          {/* Mobile: Phone + Menu buttons */}
          <div className="md:hidden flex items-center gap-2">
            <button
              aria-label="Получить консультацию"
              onClick={() => openConsultation({ source: 'header-cta-mobile' })}
              className="p-2 rounded-full bg-primary flex items-center justify-center w-11 h-11">
              <Phone className="w-5 h-5 text-primary-foreground" />
            </button>

            <button
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background overflow-hidden">
            <div className="container-custom py-4">
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.path)}
                    className="px-4 py-3 text-left text-foreground hover:bg-muted rounded-lg transition-colors font-medium cursor-pointer">
                    {item.name}
                  </button>
                ))}
              </nav>

              <div className="mt-4 pt-4 border-t border-border">
                {!isAuthenticated ? (
                  <div className="flex flex-col gap-2">
                    <GetGrantButton
                      variant="outline"
                      size="md"
                      className="w-full"
                      onClick={() => handleNavigation('/login')}>
                      Войти
                    </GetGrantButton>
                    <GetGrantButton
                      variant="primary"
                      size="md"
                      className="w-full"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        openConsultation({ source: 'mobile-menu-cta' });
                      }}>
                      Получить консультацию
                    </GetGrantButton>
                  </div>
                ) : (
                  <GetGrantButton
                    variant="outline"
                    size="md"
                    className="w-full"
                    onClick={() => handleNavigation('/dashboard')}>
                    Личный кабинет
                  </GetGrantButton>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
