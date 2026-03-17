import React from 'react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

interface GetGrantButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function GetGrantButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: GetGrantButtonProps) {
  const baseStyles =
    'font-medium transition-all duration-200 rounded-lg min-h-[44px] min-w-[44px]';

  const variants = {
    primary:
      'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 shadow-sm hover:shadow-md',
    secondary:
      'bg-secondary text-secondary-foreground hover:bg-secondary/90 active:bg-secondary/80',
    outline:
      'border-2 border-primary text-primary hover:bg-primary/5 active:bg-primary/10',
    ghost: 'text-foreground hover:bg-muted active:bg-muted/80',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}>
      {children}
    </button>
  );
}
