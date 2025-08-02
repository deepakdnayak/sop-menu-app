import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Dish } from '@/lib/types';
import { cn } from '@/lib/utils';

interface DishCardProps {
  dish: Dish;
  className?: string;
}

export default function DishCard({ dish, className }: DishCardProps) {
  return (
    <Link href={`/dish/${dish.id}`} className="group block">
      <Card className={cn("h-full flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 bg-card/80", className)}>
        <CardHeader className="p-0">
            <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                    src={dish.imageUrl}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={dish['data-ai-hint']}
                />
            </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <CardTitle className="text-xl font-bold font-headline text-accent/90 group-hover:text-accent">{dish.name}</CardTitle>
          <p className="text-muted-foreground text-sm mt-1">{dish.category}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <p className="text-2xl font-bold text-primary"><span className="font-sans">&#8377;</span>{dish.price}</p>
          <Button variant="ghost" size="sm">
            View Details
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
