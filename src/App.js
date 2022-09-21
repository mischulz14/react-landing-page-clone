import './App.css';
import Companies from './components/Companies';
import Contact from './components/Contact';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Navbar from './components/Navbar';
import ProductSection from './components/ProductSection';
import Testimonials from './components/Testimonials';

document.title = 'Landing Page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Hero />
        <ProductSection />
        <Companies />
        <Testimonials />
        <Highlights />
        <Cta />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
