import { Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

const Logo = ({ className, iconClassName }: { className?: string; iconClassName?: string }) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Leaf className={cn('h-6 w-6 text-accent', iconClassName)} />
      <span className="text-xl font-bold font-headline text-accent">Green Spoon</span>
    </div>
  );
};

export default Logo;
