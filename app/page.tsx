import DrawerContainer from "./components/DrawerComponent";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import { InstagramSection } from "./components/InstagramSection";
import Navbar from "./components/Navbar";
import PriceSection from "./components/PriceSection";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <DrawerContainer />
      <HeroSection />
      <PriceSection />
      <GallerySection />
      <FAQSection />
      <InstagramSection />
      <FooterSection />
      <ScrollToTopButton />
    </main>
  );
}
