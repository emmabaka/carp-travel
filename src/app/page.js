import Hero from '@/components/Hero/Hero';
import Header from '@/components/Header/Header';
import About from '@/components/About/About';
import ChooseUs from '@/components/ChooseUs/ChooseUs';
import Gallery from '@/components/Gallery/Gallery';
import ContactUs from '@/components/ContactUs/ContactUs';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ChooseUs />
      <Gallery />
      <ContactUs/>
    </>
  );
}
