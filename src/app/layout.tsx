import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CurrencyProvider } from '../shared/lib/currency-context';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Недвижимость Таиланда | Тестовое задание',
  description: 'Мини-приложение для отображения списка объектов недвижимости с переключением валюты',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <CurrencyProvider>
          {children}
        </CurrencyProvider>
      </body>
    </html>
  );
}