export default function Footer() {
  return (
    <footer className="bg-black/90 backdrop-blur-xl border-t border-gold/20 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-black font-bold text-lg">
                V
              </div>
              <span className="text-gold font-display text-2xl">Vantra</span>
            </div>
            <p className="text-platinum/60 max-w-md mb-6 leading-relaxed">
              Exclusive access to premium licensing opportunities, elite networks, 
              and sophisticated wealth enhancement strategies for discerning clients.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/vantra" target="_blank" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="mailto:contact@vantra.co" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-platinum font-semibold mb-6 uppercase tracking-wider text-sm">Navigate</h4>
            <ul className="space-y-4">
              {[
                { name: "Why Vantra", href: "#features" },
                { name: "Our Process", href: "#process" },
                { name: "Leadership", href: "#founder" },
                { name: "Deal Room", href: "#dealroom" },
                { name: "Contact", href: "#contact" },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-platinum/60 hover:text-gold transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-platinum font-semibold mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4">
              {[
                { name: "Privacy Policy", href: "#privacy" },
                { name: "Terms of Service", href: "#terms" },
                { name: "Disclosures", href: "#disclosures" },
                { name: "Compliance", href: "#compliance" },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-platinum/60 hover:text-gold transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-platinum/40 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Vantra. All Rights Reserved.
          </p>
          <p className="text-platinum/40 text-sm">
            For qualified investors only
          </p>
        </div>
      </div>
    </footer>
  );
}