import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./components/Navbar"), {
  ssr: false,
});
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
const Footer = dynamic(() => import("./components/Footer/Footer"), {
  ssr: false,
});
const FAQSection = dynamic(() => import("./components/FAQ/index"), {
  ssr: false,
});
const BenefitsSection = dynamic(() => import("./components/Benefits/index"), {
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
    </main>
  );
}
