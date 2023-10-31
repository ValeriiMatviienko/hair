import dynamic from "next/dynamic";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Navbar = dynamic(() => import("../components/Navbar"), {
  ssr: false,
});
const HeroSection = dynamic(() => import("../components/HeroSection"), {
  ssr: false,
});
const Service = dynamic(() => import("../components/Service"), {
  ssr: false,
});
const Price = dynamic(() => import("../components/Price"), {
  ssr: false,
});
const Gallery = dynamic(() => import("../components/Gallery"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/Footer/Footer"), {
  ssr: false,
});
const FAQSection = dynamic(() => import("../components/FAQ"), {
  ssr: false,
});
const BenefitsSection = dynamic(() => import("../components/Benefits"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Service />
      <BenefitsSection />
      <Gallery />
      <Price />
      <FAQSection />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
