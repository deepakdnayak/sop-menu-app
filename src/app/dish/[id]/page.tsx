import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getDishById } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function DishPage({ params }: { params: { id: string } }) {
  const { id } = await Promise.resolve(params);
  const dish = getDishById(params.id);

  if (!dish) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
       <Button asChild variant="ghost" className="mb-4">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Menu
        </Link>
      </Button>
      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square md:aspect-auto">
            <Image
              src={dish.imageUrl}
              alt={dish.name}
              fill
              className="object-cover"
              data-ai-hint={dish['data-ai-hint']}
            />
          </div>
          <div className="flex flex-col">
            <CardHeader>
              <Badge variant="secondary" className="w-fit mb-2">{dish.category}</Badge>
              <CardTitle className="text-3xl lg:text-4xl font-headline text-accent">{dish.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <p className="text-lg text-muted-foreground">{dish.description}</p>
              <Separator />
              <div className="flex items-baseline gap-4">
                 <p className="text-4xl font-bold text-primary">&#8377;{dish.price}</p>
              </div>
            </CardContent>
            <div className="p-6 pt-0">
               <Button size="lg" className="w-full text-lg">Add to Order</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
