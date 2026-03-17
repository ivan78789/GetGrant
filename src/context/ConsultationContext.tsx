import React from 'react';

type OpenArgs = { source?: string; message?: string };

interface ConsultationContextValue {
  openConsultation: (args?: OpenArgs) => void;
  closeConsultation: () => void;
  isOpen: boolean;
  preset?: OpenArgs;
}

const ConsultationContext =
  React.createContext<ConsultationContextValue | null>(null);

export function ConsultationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [preset, setPreset] = React.useState<OpenArgs | undefined>();

  const openConsultation = React.useCallback((args?: OpenArgs) => {
    setPreset(args);
    setIsOpen(true);
  }, []);

  const closeConsultation = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = React.useMemo(
    () => ({ openConsultation, closeConsultation, isOpen, preset }),
    [openConsultation, closeConsultation, isOpen, preset],
  );

  return (
    <ConsultationContext.Provider value={value}>
      {children}
    </ConsultationContext.Provider>
  );
}

export function useConsultation() {
  const ctx = React.useContext(ConsultationContext);
  if (!ctx)
    throw new Error('useConsultation must be used within ConsultationProvider');
  return ctx;
}
