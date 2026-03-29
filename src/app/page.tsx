import HeroSection from '@/components/hero-section';
import PortfolioLoader from '@/components/portfolio-loader';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PortfolioLoader />
      <ContactSection />
      <Footer />
    </>
  );
}
