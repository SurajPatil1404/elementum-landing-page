import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import InfoSection from './components/InfoSection/InfoSection';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <InfoSection />
      <Services />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
