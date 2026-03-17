import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, Phone } from 'lucide-react';
import { GetGrantButton } from './GetGrantButton';
import { motion, AnimatePresence } from 'motion/react';
import { useConsultation } from '../context/ConsultationContext';

interface HeaderProps {
  isAuthenticated?: boolean;
  onCloseSideNav?: () => void;
}

export function Header({
  isAuthenticated = false,
  onCloseSideNav,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openConsultation } = useConsultation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Университеты', path: '/universities' },
    { name: 'Страны', path: '/countries' },
    { name: 'Программы', path: '/programs' },
    { name: 'Онлайн-подготовка', path: '/courses' },
    { name: 'О нас', path: '/about' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    onCloseSideNav?.();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              setMobileMenuOpen(false);
              onCloseSideNav?.();
            }}
            className="flex items-center gap-2 focus:outline-none flex-shrink-0">
            <span className="w-20 h-14 mt-20px flex items-center justify-center">
              <img src="../../public/favicon.ico" alt="GetGrant" />
            </span>
          </Link>

          {/* Desktop Navigation — только от lg (1024px) */}
          <nav className="hidden xl:flex items-center gap-6 xl:gap-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base whitespace-nowrap">
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA — только от lg */}
          <div className="hidden xl:flex items-center gap-3">
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
              <button
                onClick={() => handleNavigation('/dashboard')}
                className="flex items-center gap-2 p-2 hover:bg-muted rounded-lg transition-colors">
                <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-primary-foreground" />
                </div>
              </button>
            )}
          </div>

          {/* Планшет + мобилка — бургер */}
          <div className="xl:hidden flex items-center gap-2">
            {/* Кнопка звонка */}
            <button
              aria-label="Получить консультацию"
              onClick={() => openConsultation({ source: 'header-cta-mobile' })}
              className="p-2 rounded-full bg-primary flex items-center justify-center w-10 h-10 flex-shrink-0">
              <Phone className="w-5 h-5 text-primary-foreground" />
            </button>

            {/* Бургер */}
            <button
              aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
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

      {/* Мобильное/планшетное меню */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden border-t border-border bg-background overflow-hidden">
            <div className="container-custom py-4">
              {/* Nav links */}
              <nav className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.path)}
                    className="px-4 py-3 text-left text-foreground hover:bg-muted rounded-lg transition-colors font-medium text-base">
                    {item.name}
                  </button>
                ))}
              </nav>

              {/* Auth buttons */}
              <div className="mt-4 pt-4 border-t border-border">
                {!isAuthenticated ? (
                  <div className="flex flex-col sm:flex-row gap-2">
                    <GetGrantButton
                      variant="outline"
                      size="md"
                      className="flex-1"
                      onClick={() => handleNavigation('/login')}>
                      Войти
                    </GetGrantButton>
                    <GetGrantButton
                      variant="primary"
                      size="md"
                      className="flex-1"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        openConsultation({ source: 'mobile-menu-cta' });
                      }}>
                      Получить консультацию
                    </GetGrantButton>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <GetGrantButton
                      variant="outline"
                      size="md"
                      className="w-full"
                      onClick={() => handleNavigation('/dashboard')}>
                      Личный кабинет
                    </GetGrantButton>
                    <GetGrantButton
                      variant="ghost"
                      size="md"
                      className="w-full"
                      onClick={() => handleNavigation('/login')}>
                      Выйти
                    </GetGrantButton>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
