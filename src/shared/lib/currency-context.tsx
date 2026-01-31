'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Currency } from '../api/types';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  isInitialized: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const CURRENCY_STORAGE_KEY = 'real-estate-currency';

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>('THB');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Загружаем сохраненную валюту из localStorage
    const savedCurrency = localStorage.getItem(CURRENCY_STORAGE_KEY) as Currency;
    if (savedCurrency && ['THB', 'USD', 'EUR', 'RUB'].includes(savedCurrency)) {
      setCurrencyState(savedCurrency);
    }
    setIsInitialized(true);
  }, []);

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem(CURRENCY_STORAGE_KEY, newCurrency);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, isInitialized }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within CurrencyProvider');
  }
  return context;
}