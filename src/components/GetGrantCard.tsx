import React from 'react';
import { cn } from '../lib/utils';

interface GetGrantCardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export function GetGrantCard({
  children,
  className,
  hoverable = false,
  onClick,
}: GetGrantCardProps) {
  return (
    <div
      className={cn(
        'relative bg-card text-card-foreground rounded-2xl border border-border/20 p-6 overflow-hidden',
        'shadow-[0_2px_8px_rgba(0,0,0,0.12)]',
        'transition-all duration-300',
        hoverable &&
          'hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)] hover:border-border/40 cursor-pointer hover:-translate-y-0.5',
        className,
      )}
      onClick={onClick}>
      {children}
    </div>
  );
}

interface GetGrantCardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function GetGrantCardHeader({
  children,
  className,
}: GetGrantCardHeaderProps) {
  return <div className={cn('mb-4', className)}>{children}</div>;
}

interface GetGrantCardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function GetGrantCardContent({
  children,
  className,
}: GetGrantCardContentProps) {
  return <div className={cn('', className)}>{children}</div>;
}

interface GetGrantCardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function GetGrantCardFooter({
  children,
  className,
}: GetGrantCardFooterProps) {
  return (
    <div className={cn('mt-4 pt-4 border-t border-border', className)}>
      {children}
    </div>
  );
}
