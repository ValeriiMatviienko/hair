import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hair by Hanna",
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
      <body>{children}</body>
    </html>
  );
}
