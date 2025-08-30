// Components/LuxuryBackground.tsx
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export function LuxuryBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create subtle floating particles animation
    const particles: HTMLDivElement[] = [];
    const colors = ['rgba(255,215,0,0.15)', 'rgba(255,255,255,0.05)', 'rgba(200,160,100,0.1)'];
    
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'fixed';
      particle.style.width = `${Math.random() * 4 + 1}px`;
      particle.style.height = particle.style.width;
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius = '50%';
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.zIndex = '0';
      document.body.appendChild(particle);
      particles.push(particle);
      
      // Animate particles
      gsap.to(particle, {
        y: Math.random() * 100 - 50,
        x: Math.random() * 100 - 50,
        duration: Math.random() * 10 + 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
    
    return () => {
      particles.forEach(particle => particle.remove());
    };
  }, []);
  
  return (
    <div 
      ref={backgroundRef}
      className="fixed inset-0 z-0 bg-black"
      style={{
        backgroundImage: `
          radial-gradient(circle at 15% 50%, rgba(120, 80, 40, 0.03) 0%, transparent 25%),
          radial-gradient(circle at 85% 30%, rgba(200, 160, 100, 0.03) 0%, transparent 25%),
          radial-gradient(circle at 50% 80%, rgba(255, 215, 0, 0.02) 0%, transparent 25%),
          linear-gradient(15deg, rgba(0,0,0,1) 0%, rgba(20,15,5,1) 30%, rgba(10,8,4,1) 70%, rgba(0,0,0,1) 100%)
        `
      }}
    />
  );
}