"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface Feature {
  id: number;
  text: string;
  accent: string;
  description: string;
}

const features: Feature[] = [
  { 
    id: 1, 
    text: "Ultra-HNI Concierge Access", 
    accent: "from-[#FFD700] to-[#D4AF37]",
    description: "Personalized service with dedicated representatives for elite clients"
  },
  {
    id: 1, 
    text: "Ultra-HNI Concierge Access", 
    accent: "from-[#FFD700] to-[#D4AF37]",
    description: "Personalized service with dedicated representatives for elite clients"
  },
  { 
    id: 2, 
    text: "Global Wellness Brand Rights", 
    accent: "from-[#8A2BE2] to-[#4B0082]",
    description: "Exclusive licensing opportunities in premium wellness markets"
  },
  { 
    id: 3, 
    text: "Billionaire Network Entry", 
    accent: "from-[#FF6F61] to-[#D63384]",
    description: "Access to private deals and investments typically reserved for ultra-wealthy"
  },
  { 
    id: 4, 
    text: "Confidential Deal Structures", 
    accent: "from-[#00C9FF] to-[#92FE9D]",
    description: "Discreet transaction frameworks ensuring privacy and security"
  },
  { 
    id: 5, 
    text: "Legacy Wealth Vehicles", 
    accent: "from-[#FF512F] to-[#DD2476]",
    description: "Sophisticated wealth preservation and transfer solutions"
  },
  { 
    id: 6, 
    text: "Exclusive Medical Innovation Access", 
    accent: "from-[#4776E6] to-[#8E54E9]",
    description: "Priority access to cutting-edge health technologies and treatments"
  },
];

export default function PremiumFeatureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    // Animate title
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
    }
    
    // Animate feature cards sequentially
    const featureCards = gsap.utils.toArray(".feature-card");
    featureCards.forEach((card: unknown, i: number) => {
      if (card instanceof HTMLElement) {
        gsap.fromTo(card, 
          { y: 80, opacity: 0, scale: 0.9 },
          { 
            y: 0, 
            opacity: 1, 
            scale: 1, 
            duration: 0.8, 
            delay: i * 0.15, 
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 py-32 relative overflow-hidden">
      {/* Luxury background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(120,80,40,0.05)_0%,_transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold"></div>
            <span className="text-gold text-sm uppercase tracking-widest">Exclusive Advantages</span>
            <div className="w-12 h-px bg-gradient-to-r from-gold to-transparent"></div>
          </div>
          
          <h2 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-platinum mb-6">
            The Vantra <span className="text-gold italic font-serif">Ultra-Premium</span> Edge
          </h2>
          
          <p className="text-platinum/60 text-lg max-w-3xl mx-auto">
            Distinct advantages reserved for our most exclusive clients, providing unparalleled access, 
            discretion, and opportunity in the global luxury market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              className="feature-card group relative"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.accent} opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative h-full bg-gradient-to-b from-black/90 to-neutral-950/90 rounded-2xl p-8 border border-white/10 backdrop-blur-md overflow-hidden">
                {/* Number badge */}
                <div className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 border border-gold/30 text-gold font-display text-lg">
                  0{i+1}
                </div>
                
                {/* Content */}
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-platinum mb-4 group-hover:text-gold transition-colors duration-500">
                    {feature.text}
                  </h3>
                  
                  <p className="text-platinum/60 mb-6 flex-grow">
                    {feature.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gold text-sm font-medium">Exclusive Offering</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}