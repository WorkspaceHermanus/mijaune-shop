import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartProvider from "@/components/CartProvider";

export const metadata: Metadata = {
  title: "Mijaune – Mijaune Shop",
  description: "Mijaune se fotografie, boeke en kuns is hier beskikbaar.",
  themeColor: "#fffdf5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="af">
      <body className="min-h-screen flex flex-col" style={{ backgroundColor: "#fffdf5", color: "#444" }}>
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
