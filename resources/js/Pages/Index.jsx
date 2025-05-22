// App.jsx - Optimized for Global SEO

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
        <html lang="en" />
        <title>Natural Stone Supplier PT. Steven Cahaya SuksesIndo</title>
        <meta
          name="description"
          content="PT. Steven Cahaya SuksesIndo is a trusted supplier and global exporter of premium natural stone from Indonesia. Serving international markets since 2010 with top-quality stone for architecture and design."
        />
        <meta
          name="keywords"
          content="natural stone exporter, Indonesia stone supplier, stone for export, stone for architecture, premium stone tiles, volcanic stone Indonesia, natural stone for pool, stone wall cladding"
        />
        <meta name="author" content="PT. Steven Cahaya SuksesIndo" />
        <link rel="canonical" href="https://stevencahayasuksesindo.com" />

        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="PT. Steven Cahaya SuksesIndo - Global Natural Stone Exporter" />
        <meta
          property="og:description"
          content="We export premium Indonesian natural stones worldwide for residential and commercial architecture. Trusted since 2010."
        />
        <meta property="og:image" content="https://stevencahayasuksesindo.com/img/Logo/logo_sc.png" />
        <meta property="og:url" content="https://stevencahayasuksesindo.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trusted Global Exporter of Natural Stone - PT. Steven Cahaya SuksesIndo" />
        <meta name="twitter:description" content="Exporting top-quality natural stones from Indonesia to the world." />
        <meta name="twitter:image" content="https://stevencahayasuksesindo.com/img/Logo/logo_sc.png" />

        {/* Schema.org for Global Business */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PT. Steven Cahaya SuksesIndo",
              "url": "https://stevencahayasuksesindo.com",
              "logo": "https://stevencahayasuksesindo.com/img/Logo/logo_sc.png",
              "description": "Global supplier and exporter of high-quality Indonesian natural stones.",
              "foundingDate": "2010",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ID"
              },
              "sameAs": [
                "https://www.facebook.com/namaperusahaan",
                "https://www.instagram.com/namaperusahaan",
                "https://www.linkedin.com/company/namaperusahaan"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "export@stevencahayasuksesindo.com",
                "availableLanguage": ["English", "Indonesian"]
              }
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
