import "./globals.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Hair by Hanna",
  author: "Hanna Matviienko",
  description: "Professional trichologist and hair treatments.",
  keywords: ["hair", "keratine", "botox", "professional", "nanoplastia"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
