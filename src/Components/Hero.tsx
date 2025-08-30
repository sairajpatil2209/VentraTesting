import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.inOut" }
    ).fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
      "-=1"
    ).fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.8"
    ).fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.5"
    );
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay prevented:", error);
      });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cinematic background video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoad}
          className="w-full h-full object-cover"
          poster="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        >
          <source src="/videos/luxury-cinematic-bg.mp4" type="video/mp4" />
          <source src="/videos/luxury-cinematic-bg.webm" type="video/webm" />
          {/* Fallback image if video doesn't load */}
        </video>
        
        {/* Video loading overlay */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Subtle gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
      </div>

      {/* Luxury background elements */}
      {/* <div className="absolute inset-0 z-1 bg-[radial-gradient(ellipse_at_center,_rgba(255,215,0,0.05)_0%,_transparent_70%)]" /> */}
      
      {/* Subtle geometric pattern */}
      {/* <div 
        className="absolute inset-0 opacity-[0.03] z-1"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}
      /> */}
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-transparent mx-auto mb-6"></div>
          <h1 
            ref={textRef}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-platinum tracking-tight"
          >
            Access. <span className="font-serif italic">Scale.</span>{" "}
            <span className="text-gold font-serif italic">Control.</span>
          </h1>
        </div>
        
        <p 
          ref={subtitleRef}
          className="mt-8 text-xl md:text-2xl text-platinum/80 font-light tracking-wider uppercase letter-spacing-2"
        >
          Exclusive Licensing • Discreet Expansion • Ultra-HNI Deal Brokering
        </p>
        
        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            ref={buttonRef}
            href="#access"
            className="relative overflow-hidden group px-12 py-5 bg-gold text-white rounded-full 
                     font-semibold shadow-2xl hover:shadow-gold/40 transform transition-all duration-500
                     hover:scale-105"
          >
            <span className="relative z-10">Request Exclusive Access</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                          transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                          transition-transform duration-1000"></div>
          </a>
          
          <a
            href="#portfolio"
            className="px-10 py-4 border border-gold/40 text-gold rounded-full 
                     font-medium hover:bg-gold/10 hover:border-gold transition-all duration-500
                     flex items-center gap-3"
          >
            <span>View Elite Portfolio</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        
        <div className="mt-20 text-platinum/40 text-sm flex justify-center items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            <span>By Invitation Only</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            <span>Global Network</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-gold rounded-full"></div>
            <span>Strict Confidentiality</span>
          </div>
        </div>
      </div>
    </section>
  );
}