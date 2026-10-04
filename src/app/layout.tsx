import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { CartDrawer } from "@/components/CartDrawer";
import { WhatsAppCheckoutModal } from "@/components/WhatsAppCheckoutModal";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/mobile/BottomNav";
import { StickyBuyBar } from "@/components/mobile/StickyBuyBar";
import { CartProvider } from "@/context/CartContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dinoleathers.in"),
  title: "Dino Leathers | Handcrafted Genuine Leather Goods from Ambur",
  description:
    "Artisanal full-grain leather wallets and belts handcrafted in Ambur, Tamil Nadu. Factory-direct pricing with complimentary custom initial embossing.",
  keywords: [
    "Dino Leathers",
    "Ambur leather",
    "Tamil Nadu leather craftsmanship",
    "genuine leather wallet India",
    "full grain leather belt India",
    "personalized custom leather embossing",
    "2-in-1 executive leather gift set",
    "Ambur factory direct leather",
    "oil pull up wallet",
  ],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Dino Leathers",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  authors: [{ name: "Dino Leathers" }],
  creator: "Dino Leathers",
  publisher: "Dino Leathers",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dino Leathers | Handcrafted Genuine Leather Goods from Ambur",
    description:
      "Artisanal full-grain leather wallets and belts handcrafted in Ambur, Tamil Nadu. Factory-direct pricing with complimentary custom initial embossing.",
    url: "https://dinoleathers.in",
    siteName: "Dino Leathers",
    locale: "en_IN",
    type: "website",
    images: ["/images/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dino Leathers | Handcrafted Genuine Leather Goods from Ambur",
    description:
      "Artisanal full-grain leather wallets and belts handcrafted in Ambur, Tamil Nadu. Factory-direct pricing with complimentary custom initial embossing.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <LocalBusinessSchema />
      </head>
      <body className="min-h-screen bg-[#FBF9F5] text-[#2C1A11] font-sans antialiased flex flex-col selection:bg-[#7A3E1D] selection:text-white pb-32 md:pb-0">
        <CartProvider>
          <AnnouncementBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <CartDrawer />
          <WhatsAppCheckoutModal />
          <StickyBuyBar />
          <BottomNav />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
