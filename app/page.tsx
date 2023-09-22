import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

const HeroSection = dynamic(() => import("./components/HeroSection/index"), {
  ssr: false,
});
const Service = dynamic(() => import("./components/Service/index"), {
  ssr: false,
});
const Price = dynamic(() => import("./components/Price/index"), {
  ssr: false,
});
const Gallery = dynamic(() => import("./components/Gallery/index"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Service />
      <Gallery />
      <Price />
      <Footer />
    </main>
  );
}
