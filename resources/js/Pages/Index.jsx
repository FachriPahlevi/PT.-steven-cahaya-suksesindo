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
import { Helmet } from 'react-helmet';


function Index() {
  return (
    <>
      <Helmet>
        <title>PT. Steven Cahaya SuksesIndo</title>
        <meta name="description" content="PT. Steven Cahaya SuksesIndo adalah distributor batu alam berkualitas sejak 2010. Menyediakan batu alam terbaik untuk proyek pribadi hingga skala nasional." />
        <meta name="keywords" content="batu alam, distributor batu alam, batu alam Indonesia, batu alam untuk rumah, supplier batu alam, PT Steven Cahaya SuksesIndo" />
        <meta name="author" content="PT. Steven Cahaya SuksesIndo" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="PT. Steven Cahaya SuksesIndo - Distributor Batu Alam Terpercaya" />
        <meta property="og:description" content="Pemasok batu alam terbaik dengan pengalaman lebih dari 15 tahun. Pelayanan cepat dan stok selalu tersedia." />
        <meta property="og:image" content="https://stevencahayasuksesindo.com/img/Logo/logo_sc.png" />
        <meta property="og:url" content="https://stevencahayasuksesindo.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PT. Steven Cahaya SuksesIndo - Distributor Batu Alam" />
        <meta name="twitter:description" content="Distributor batu alam terpercaya sejak 2010, dengan layanan terbaik dan pengiriman cepat." />
        <meta name="twitter:image" content="https://stevencahayasuksesindo.com/img/Logo/logo_sc.png" />

        <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "PT. Steven Cahaya SuksesIndo",
        "url": "https://domain.com",
        "logo": "https://domain.com/img/logo/logo_sc.png",
        "sameAs": [
          "https://facebook.com/namaperusahaan",
          "https://instagram.com/namaperusahaan"
        ]
      }
    `}
  </script>
      </Helmet>

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
    </>
  );
}

export default Index;