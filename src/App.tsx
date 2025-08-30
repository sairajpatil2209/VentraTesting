import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import PageTransition from "./Components/motion/PageTransition";
import { LuxuryBackground } from './Components/LuxuryBackground';

function App() {
  return (
    <Router>
      <LuxuryBackground />
      <PageTransition>
        <div className="flex flex-col min-h-screen text-white relative z-10">
          <Navbar />
          <main className="flex-grow pt-[72px]">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </PageTransition>
    </Router>
  );
}

export default App;