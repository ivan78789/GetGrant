import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export function EmblaCarousel({
  title,
  subtitle,
  children,
  className,
}: {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps',
    loop: true,
  });
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(false);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className={cn('py-12', className)}>
      <div className="container-custom">
        <div className="flex items-end justify-between gap-4 mb-6">
          {title ? (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {title}
              </h2>
              {subtitle ? (
                <p className="text-muted-foreground mt-1">{subtitle}</p>
              ) : null}
            </div>
          ) : null}
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Назад"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              className={cn(
                'h-10 w-10 rounded-lg border border-border bg-background flex items-center justify-center transition-colors',
                canPrev ? 'hover:bg-muted' : 'opacity-40 cursor-not-allowed',
              )}>
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Вперёд"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              className={cn(
                'h-10 w-10 rounded-lg border border-border bg-background flex items-center justify-center transition-colors',
                canNext ? 'hover:bg-muted' : 'opacity-40 cursor-not-allowed',
              )}>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div ref={emblaRef} className="overflow-hidden -mx-1 px-1">
          <div className="flex gap-4 py-2">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function EmblaSlide({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_40%] lg:flex-[0_0_28%]',
        className,
      )}>
      {children}
    </div>
  );
}
