import { Header } from "../widgets/header";
import { RealEstateList } from "../widgets/real-estate-list";


export default function HomePage() {
  return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-8 mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Объекты недвижимости</h2>
            <p className="text-muted-foreground">
              Выберите валюту для отображения цен. Курсы обмена фиксированные.
            </p>
          </div>
          <RealEstateList />
        </main>
        <footer className="border-t py-6">
          <div className="container text-center text-sm text-muted-foreground">
            <p>Тестовое задание для позиции Senior Fullstack Developer</p>
            <p className="mt-1">Курсы валют: 1 THB = 0.0286 USD = 0.0263 EUR = 2.57 RUB</p>
          </div>
        </footer>
      </div>
  );
}