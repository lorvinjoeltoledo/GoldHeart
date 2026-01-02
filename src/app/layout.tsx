import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gold Heart Construction | Premium Remodeling in Palm Beach County",
  description:
    "Transform your space with Gold Heart Construction. Expert remodeling services in West Palm Beach including tile, drywall, painting, carpentry, countertops, and hardscapes.",
  keywords: [
    "remodeling",
    "construction",
    "West Palm Beach",
    "Palm Beach County",
    "tile installation",
    "drywall",
    "painting",
    "carpentry",
    "countertops",
    "hardscapes",
  ],
  openGraph: {
    title: "Gold Heart Construction | Premium Remodeling",
    description: "Expert remodeling services in Palm Beach County",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased`}
      >
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
