import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import MoreWork from './sections/MoreWork'
import ContactSection from './components/ContactSection'
import Work from "./sections/Work";
import Gracias from "./components/Gracias";

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <main className="font-sans">
              <Hero />
              <Work />
              <MoreWork />
              <ContactSection />
              <Footer />
            </main>
          } 
        />
        <Route path="/gracias" element={<Gracias />} />
      </Routes>
    </Router>
  );
}

export default App;
