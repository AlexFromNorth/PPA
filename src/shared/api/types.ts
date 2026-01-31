export interface RealEstate {
  id: string;
  title: string;
  description: string;
  price: number; // в THB
  area: number; // в квадратных метрах
  bedrooms: number;
  bathrooms: number;
  location: string;
  image: string;
}

export type Currency = 'THB' | 'USD' | 'EUR' | 'RUB';

export interface CurrencyRates {
  THB: number;
  USD: number;
  EUR: number;
  RUB: number;
}

export const CURRENCY_RATES: CurrencyRates = {
  THB: 1,
  USD: 0.0286,
  EUR: 0.0263,
  RUB: 2.57,
};

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  THB: '฿',
  USD: '$',
  EUR: '€',
  RUB: '₽',
};

export const CURRENCY_FORMATS: Record<Currency, string> = {
  THB: 'th-TH',
  USD: 'en-US',
  EUR: 'de-DE',
  RUB: 'ru-RU',
};