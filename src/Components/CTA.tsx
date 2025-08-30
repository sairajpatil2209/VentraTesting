export default function CTA() {
  return (
    <section className="relative py-32 bg-black text-center overflow-hidden">
      {/* Luxury background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Gold ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,215,0,0.1)_0%,_transparent_70%)]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="inline-flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold"></div>
          <span className="text-gold text-sm uppercase tracking-widest">Exclusive Access</span>
          <div className="w-12 h-px bg-gradient-to-r from-gold to-transparent"></div>
        </div>
        
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-display text-platinum font-bold mb-8">
          Ready For <span className="text-gold italic font-serif">Transformation</span>?
        </h3>
        
        <p className="text-platinum/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Join our curated network of visionaries and gain privileged access to opportunities 
          typically reserved for the world's most discerning investors and business leaders.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="relative overflow-hidden group px-12 py-5 bg-gold text-black font-semibold 
                       rounded-full shadow-2xl hover:shadow-gold/40 transform transition-all duration-500
                       hover:scale-105 flex items-center gap-3">
            <span className="relative z-10">Begin Your Journey</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                          transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                          transition-transform duration-1000"></div>
          </button>
          
          <button className="px-10 py-4 border border-gold/40 text-gold rounded-full 
                     font-medium hover:bg-gold/10 hover:border-gold transition-all duration-500
                     flex items-center gap-3">
            <span>Schedule Consultation</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <p className="mt-10 text-platinum/40 text-sm">
          By invitation only • Comprehensive vetting process • Absolute discretion guaranteed
        </p>
      </div>
    </section>
  );
}