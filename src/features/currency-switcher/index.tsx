'use client';

import { ChevronDown } from 'lucide-react';
import { Button } from '@/src/shared/ui/button';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/src/shared/ui/dropdown-menu';
import { Currency } from '@/src/shared/api/types';
import { useCurrency } from '@/src/shared/lib/currency-context';


export function CurrencySwitcher() {
  const { currency, setCurrency, isInitialized } = useCurrency();
  const currencies: Currency[] = ['THB', 'USD', 'EUR', 'RUB'];

  if (!isInitialized) {
    return <div className="w-32 h-10 bg-muted rounded-md animate-pulse" />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-32 justify-between">
          <span>{currency}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {currencies.map((curr) => (
          <DropdownMenuCheckboxItem
            key={curr}
            checked={currency === curr}
            onCheckedChange={() => setCurrency(curr)}
          >
            {curr}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}