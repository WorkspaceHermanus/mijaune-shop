import type { Metadata } from "next";
import { Dancing_Script, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartProvider from "@/components/CartProvider";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Mijaune Shop",
  description: "Mijaune se fotografie, boeke en kuns — beperkte oplaag, gesigneer.",
  themeColor: "#faf8f2",
  icons: { icon: "/images/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="af">
      <body
        className={`${dancing.variable} ${jost.variable} min-h-screen flex flex-col`}
        style={{ backgroundColor: "#faf8f2", color: "#1c1c1c", fontFamily: "var(--font-body)" }}
      >
        <CartProvider>
          <Navbar />
          <main id="MainContent" role="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
