import { CurrencySwitcher } from "@/src/features/currency-switcher";

export function Header() {
  return (
    <header className="sticky mx-auto px-8 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">RE</span>
          </div>
          <h1 className="text-xl font-bold">Недвижимость Таиланда</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Валюта:</span>
          <CurrencySwitcher />
        </div>
      </div>
    </header>
  );
}