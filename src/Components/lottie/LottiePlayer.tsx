// src/components/lottie/LottiePlayer.tsx
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import type { AnimationItem } from "lottie-web";

interface LottiePlayerProps {
  animationData: object; // The imported Lottie JSON
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

export default function LottiePlayer({
  animationData,
  loop = true,
  autoplay = true,
  className = "",
}: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop,
        autoplay,
        animationData,
      });
    }

    return () => {
      animationRef.current?.destroy();
    };
  }, [animationData, loop, autoplay]);

  return <div ref={containerRef} className={className}></div>;
}
