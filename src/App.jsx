import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import MoreWork from './sections/MoreWork'
import ContactSection from './components/ContactSection'
import Work from "./sections/Work";

function App() {
  return (
    <main className="font-sans">
      <Hero />
      <Work />
      <MoreWork />
      
      <ContactSection />
     
      <Footer />
    </main>
  );
}

export default App;
