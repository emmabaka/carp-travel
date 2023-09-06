import Hero from '@/components/Hero/Hero';
import Header from '@/components/Header/Header';
import About from '@/components/About/About';
import dynamic from 'next/dynamic';

const Services = dynamic(() => import('@/components/Services/Services'), {
  ssr: false,
});
const ChooseUs = dynamic(() => import('@/components/ChooseUs/ChooseUs'), {
  ssr: false,
});
const Gallery = dynamic(() => import('@/components/Gallery/Gallery'), {
  ssr: false,
});
const ContactUs = dynamic(() => import('@/components/ContactUs/ContactUs'));

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <ChooseUs />
      <Gallery />
      <ContactUs />
    </>
  );
}
