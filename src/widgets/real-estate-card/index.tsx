
import { RealEstate } from '@/src/shared/api/types';
import { Card, CardContent } from '@/src/shared/ui/card';
import { PriceDisplay } from '@/src/shared/ui/price-display';
import { Home, MapPin, Square, Bed, Bath } from 'lucide-react';

interface RealEstateCardProps {
  estate: RealEstate;
}

export function RealEstateCard({ estate }: RealEstateCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
        <Home className="h-16 w-16 text-primary/30" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2 line-clamp-1">
          {estate.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {estate.description}
        </p>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{estate.location}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{estate.bedrooms} спален</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{estate.bathrooms} ванных</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{estate.area} м²</span>
          </div>
        </div>
        
        <div className="pt-4 border-t">
          <PriceDisplay amount={estate.price} className="text-2xl font-bold" />
        </div>
      </CardContent>
    </Card>
  );
}