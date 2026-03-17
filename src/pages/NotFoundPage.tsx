import React from 'react';
import { Link } from 'react-router-dom';
import { GetGrantButton } from '../components/GetGrantButton';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-muted flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-foreground mb-4">
          Страница не найдена
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          Возможно, она была удалена или вы перешли по неверной ссылке
        </p>
        <Link to="/">
          <GetGrantButton variant="primary" size="lg">
            Вернуться на главную
          </GetGrantButton>
        </Link>
      </div>
    </div>
  );
}
