'use client';

import { convertCurrency, formatCurrency } from '../lib/currency';
import { useCurrency } from '../lib/currency-context';

interface PriceDisplayProps {
  amount: number; // сумма в THB
  className?: string;
  showConverted?: boolean;
}

export function PriceDisplay({ amount, className = '', showConverted = true }: PriceDisplayProps) {
  const { currency, isInitialized } = useCurrency();
  
  if (!isInitialized) {
    return <div className={`h-6 w-24 bg-muted rounded animate-pulse ${className}`} />;
  }

  const convertedAmount = convertCurrency(amount, 'THB', currency);
  const formattedAmount = formatCurrency(convertedAmount, currency);

  if (!showConverted) {
    return <span className={className}>{formattedAmount}</span>;
  }

  return (
    <div className={className}>
      <span className="font-semibold">{formattedAmount}</span>
      <span className="text-sm text-muted-foreground ml-2">
        ({formatCurrency(amount, 'THB')})
      </span>
    </div>
  );
}