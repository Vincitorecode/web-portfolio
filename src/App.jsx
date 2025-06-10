import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import MoreWork from './sections/MoreWork'
import ContactSection from './components/ContactSection'


function App() {
  return (
    <main className="font-sans">
      <Hero />
      <MoreWork />
      
      <ContactSection />
     
      <Footer />
    </main>
  );
}

export default App;
