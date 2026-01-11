import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingSpinner from "@/components/LoadingSpinner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MEUKART - Digital Market Intelligence for Medicinal Plants",
  description: "Government-backed platform providing market intelligence and trade facilitation for medicinal plant cultivators and FPOs in Uttarakhand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <LoadingSpinner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
