import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, UtensilsCrossed, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline tracking-tight text-accent lg:text-5xl">About Green Spoon</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Taste the tradition, feel the flavor.
        </p>
      </div>

      <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden shadow-lg">
          <Image src="https://placehold.co/1200x675" alt="Green Spoon Restaurant" fill className="object-cover" data-ai-hint="restaurant interior" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 text-lg">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold font-headline text-accent">Our Story</h2>
          <p>
            Welcome to Green Spoon, where culinary excellence meets heartfelt hospitality. Founded on the principle of bringing authentic, flavorful, and high-quality vegetarian cuisine to our community, Green Spoon is more than just a restaurant—it's a celebration of food.
          </p>
          <p>
            Our journey began with a simple mission: to create a menu that caters to every palate, from the lovers of traditional Indian spices to the fans of zesty Indo-Chinese flavors. We believe in using the freshest ingredients to craft dishes that are both delicious and wholesome.
          </p>
        </div>
        <div className="space-y-4">
            <h2 className="text-3xl font-bold font-headline text-accent">Our Mission</h2>
            <p>
                Our mission is to provide an exceptional dining experience by offering a diverse menu of high-quality vegetarian dishes in a welcoming environment. We are committed to culinary innovation, quality, and customer satisfaction.
            </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-headline flex items-center gap-2 text-accent">
            <Clock className="h-6 w-6" />
            Operating Hours
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-lg">
            <div className="flex justify-between">
              <span>Lunch:</span>
              <span className="font-semibold">11:30 AM to 3:30 PM</span>
            </div>
             <div className="flex justify-between">
              <span>Dinner:</span>
              <span className="font-semibold">5:30 PM to 10:30 PM</span>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
