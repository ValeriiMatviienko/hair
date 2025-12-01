"use client";

import DrawerContainer from "./components/DrawerComponent";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PriceSection from "./components/PriceSection";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ServiceSection from "./components/ServiceSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <DrawerContainer />
      <HeroSection />
      <ServiceSection />
      <GallerySection />
      <PriceSection />
      <FAQSection />
      <FooterSection />
      <ScrollToTopButton />
    </main>
  );
}
