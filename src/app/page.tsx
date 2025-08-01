import MenuClient from '@/components/menu-client';
import { getAllDishes, getCategories } from '@/lib/data';

export default function Home() {
  const dishes = getAllDishes();
  const categories = getCategories();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline tracking-tight text-accent lg:text-5xl">Our Menu</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore our wide variety of delicious dishes.
        </p>
      </div>
      <MenuClient dishes={dishes} categories={categories} />
    </div>
  );
}
