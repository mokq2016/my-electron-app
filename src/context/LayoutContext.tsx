import React, { createContext, useContext, useState } from 'react';

interface LayoutContextProps {
  showFooter: boolean;
  setShowFooter: (show: boolean) => void;
}

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showFooter, setShowFooter] = useState(true);
  return (
    <LayoutContext.Provider value={{ showFooter, setShowFooter }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const ctx = useContext(LayoutContext);
  if (!ctx) throw new Error('useLayout must be used within LayoutProvider');
  return ctx;
};