// src/components/motion/PageTransition.tsx
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { gsap } from "./gsapConfig";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {children}
    </div>
  );
}
