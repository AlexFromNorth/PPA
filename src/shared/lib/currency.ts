import { Currency, CURRENCY_RATES, CURRENCY_SYMBOLS, CURRENCY_FORMATS } from '../api/types';

export function convertCurrency(amount: number, from: Currency, to: Currency): number {
  const amountInTHB = amount / CURRENCY_RATES[from];
  return amountInTHB * CURRENCY_RATES[to];
}

export function formatCurrency(amount: number, currency: Currency): string {
  const formatter = new Intl.NumberFormat(CURRENCY_FORMATS[currency], {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  
  return formatter.format(amount);
}

export function getCurrencySymbol(currency: Currency): string {
  return CURRENCY_SYMBOLS[currency];
}