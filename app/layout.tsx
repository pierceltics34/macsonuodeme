import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CrispChat from "@/components/CrispChat";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | macsonuodeme.com",
    default: "macsonuodeme.com - Maç Sonu Ödemeli Yasal Nesine-Bilyoner-İddaa Kuponu",
  },
  description: "Şeffaf süreç, hızlı iletişim ve premium destek ile maç sonu ödemeli yasal kupon hizmeti.",
  keywords: ["maç sonu ödemeli", "nesine", "bilyoner", "iddaa", "kupon"],
  authors: [{ name: "macsonuodeme.com" }],
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://macsonuodeme.com",
    siteName: "macsonuodeme.com",
    title: "macsonuodeme.com - Maç Sonu Ödemeli Yasal Kupon",
    description: "Şeffaf süreç, hızlı iletişim ve premium destek ile maç sonu ödemeli yasal kupon hizmeti.",
    images: [
      {
        url: "/logo.png",
        width: 180,
        height: 50,
        alt: "macsonuodeme.com",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={poppins.variable}>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CrispChat />
      </body>
    </html>
  );
}

