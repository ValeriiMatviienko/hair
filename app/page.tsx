import HeroSection from "./components/HeroSection/index";
import Service from "./components/Service/index";
import Price from "./components/Price/index";
import Gallery from "./components/Gallery/index";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Service />
      <Gallery />
      <Price />
    </main>
  );
}
