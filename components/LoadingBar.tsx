"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoadingBar() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setLoading(false);
    setProgress(0);
  }, [pathname]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (loading) {
      setProgress(10);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return prev;
          return prev + Math.random() * 10;
        });
      }, 200);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [loading]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      
      if (link && link.href && !link.href.startsWith("#") && !link.target) {
        const url = new URL(link.href);
        if (url.origin === window.location.origin && url.pathname !== pathname) {
          setLoading(true);
          setProgress(0);
        }
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname]);

  if (!loading) return null;

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-gray-200">
        <div 
          className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Loading Spinner Overlay */}
      <div className="fixed inset-0 z-[9998] bg-white/80 backdrop-blur-sm flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
          <p className="text-primary font-semibold text-lg">Loading...</p>
        </div>
      </div>
    </>
  );
}
