// App.jsx - File utama React

import About from '@/Components/Chandra/About';
import BackToTop from '@/Components/Chandra/Backtotop';
import Footer from '@/Components/Chandra/Footer';
import Gallery from '@/Components/Chandra/Gallery';
import Header from '@/Components/Chandra/Header';
import Hero from '@/Components/Chandra/Hero';
import Products from '@/Components/Chandra/Products';
import Services from '@/Components/Chandra/Service';
import Testimonials from '@/Components/Chandra/Testimonials';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="font-poppins overflow-x-hidden">
        <Header />
        <Hero />
        <About />
        <Products />
        <Services />
        <Gallery />
        <Testimonials />
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;







