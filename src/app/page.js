import Hero from "@/components/Hero/Hero";
import Header from "@/components/Header/Header";
import Image from "next/image";
import About from "@/components/About/About";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
    </>
  );
}
