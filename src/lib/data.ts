import type { Dish } from './types';
import menuData from '../../menu.json';

// Helper to generate a URL-friendly slug from a string
const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

const allDishes: Dish[] = Object.entries(menuData).flatMap(([category, dishes]) =>
  Object.entries(dishes).map(([dishName, dishDetails]) => {
    const name = dishDetails.name || dishName;
    const aiHint = name.split(' ').slice(0, 2).join(' ').toLowerCase();
    
    return {
        id: slugify(`${category}-${name}`),
        name: name,
        price: dishDetails.price,
        category: category,
        description: dishDetails.description,
        imageUrl: dishDetails.imgurl,
        'data-ai-hint': aiHint,
    }
  })
);


export function getAllDishes(): Dish[] {
  return allDishes;
}

export function getDishById(id: string): Dish | undefined {
  return allDishes.find(dish => dish.id === id);
}

export function getCategories(): string[] {
    return ['All', ...Object.keys(menuData)];
}
