import dynamic from "next/dynamic";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Navbar = dynamic(() => import("../components/Navbar"), {
  ssr: false,
});
const DrawerContainer = dynamic(() => import("../components/DrawerComponent"), {
  ssr: false,
});
const HeroSection = dynamic(() => import("../components/HeroSection"), {
  ssr: false,
});
const ServiceSection = dynamic(() => import("../components/ServiceSection"), {
  ssr: false,
});
const PriceSection = dynamic(() => import("../components/PriceSection"), {
  ssr: false,
});
const GallerySection = dynamic(() => import("../components/GallerySection"), {
  ssr: false,
});
const FooterSection = dynamic(() => import("../components/FooterSection"), {
  ssr: false,
});
const FAQSection = dynamic(() => import("../components/FAQSection"), {
  ssr: false,
});

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
