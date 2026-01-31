import { realEstateData } from '@/src/entities/real-estate';
import { RealEstateCard } from '../real-estate-card';

export function RealEstateList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {realEstateData.map((estate) => (
        <RealEstateCard key={estate.id} estate={estate} />
      ))}
    </div>
  );
}