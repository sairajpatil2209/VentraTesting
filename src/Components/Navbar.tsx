import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface NavItem {
  name: string;
  href: string;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const navItems: NavItem[] = [
  //   { name: "Why Vantra", href: "#features" },
  //   { name: "Process", href: "#process" },
  //   { name: "Founder", href: "#founder" },
  //   { name: "Deal Room", href: "#dealroom" },
  // ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-gold/20 py-2 shadow-xl' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-black font-bold text-lg border border-gold/50 shadow-lg">
            V
          </div>
          <span className="text-gold font-display text-2xl tracking-wide group-hover:text-platinum transition-colors">
            Vantra
          </span>
        </Link>

        <ul className="hidden md:flex gap-10 text-platinum font-medium tracking-wide">
          {[
            { name: "Why Vantra", href: "#features" },
            { name: "Process", href: "#process" },
            { name: "Founder", href: "#founder" },
            { name: "Deal Room", href: "#dealroom" },
          ].map((item, index) => (
            <li key={index}>
              <Link 
                to={item.href} 
                className="relative py-2 group hover:text-gold transition-colors"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            to="#access"
            className="hidden md:inline-block px-6 py-2 border border-gold text-gold rounded-full 
            font-semibold hover:bg-gold hover:text-black transition-all duration-300 
            relative overflow-hidden group"
          >
            <span className="relative z-10">Request Access</span>
            <div className="absolute inset-0 bg-gold transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 z-0"></div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden ml-4 w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 text-gold"
            onClick={() => setOpen(!open)}
          >
            <span className="text-xl">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gold/20 px-6 py-8">
          <ul className="flex flex-col gap-6 text-platinum">
            {[
              { name: "Why Vantra", href: "#features" },
              { name: "Process", href: "#process" },
              { name: "Founder", href: "#founder" },
              { name: "Deal Room", href: "#dealroom" },
            ].map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.href} 
                  className="text-lg py-2 flex items-center gap-3 group"
                  onClick={() => setOpen(false)}
                >
                  <div className="w-2 h-px bg-gold transition-all duration-300 group-hover:w-4"></div>
                  {item.name}
                </Link>
              </li>
            ))}
            
            <li className="pt-4 mt-4 border-t border-gold/20">
              <Link
                to="#access"
                className="inline-block px-6 py-3 border border-gold text-gold rounded-full 
                font-semibold text-center w-full hover:bg-gold hover:text-black transition-all duration-300"
                onClick={() => setOpen(false)}
              >
                Request Access
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}