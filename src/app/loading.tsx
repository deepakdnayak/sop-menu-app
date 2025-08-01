'use client'

import { useState, useEffect } from 'react';
import Logo from '@/components/logo';
import { Progress } from '@/components/ui/progress';

export default function Loading() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    const timer2 = setTimeout(() => setProgress(100), 1200);
    return () => {
        clearTimeout(timer)
        clearTimeout(timer2)
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <Logo className="text-4xl" iconClassName="h-10 w-10" />
        <div className="w-64 mt-4">
            <Progress value={progress} className="w-full" />
            <p className="text-center text-sm text-muted-foreground mt-2">Loading the freshest flavors...</p>
        </div>
      </div>
    </div>
  );
}
