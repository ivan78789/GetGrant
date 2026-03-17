import React from 'react';
import { cn } from '../lib/utils';

interface GetGrantInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export function GetGrantInput({ 
  label, 
  error, 
  icon,
  className,
  ...props 
}: GetGrantInputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm text-foreground">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {icon}
          </div>
        )}
        <input
          className={cn(
            'w-full px-4 py-3 min-h-[44px] bg-input-background border border-transparent rounded-lg',
            'text-foreground placeholder:text-muted-foreground',
            'focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent',
            'transition-all duration-200',
            error && 'border-red-500 focus:ring-red-500',
            icon && 'pl-10',
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}
