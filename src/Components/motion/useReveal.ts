// src/components/motion/useReveal.ts
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "./gsapConfig";

interface UseRevealOptions {
  y?: number;
  duration?: number;
  delay?: number;
}

export function useReveal<T extends HTMLElement>({
  y = 50,
  duration = 1,
  delay = 0,
}: UseRevealOptions = {}) {
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [y, duration, delay]);

  return elementRef;
}
