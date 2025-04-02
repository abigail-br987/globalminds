import type { Metadata } from "next";
import "./globals.css";
import NavHeader from "@/components/navigation/NavHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Global Minds",
  description: "Non-Profit Organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head />
      <body className={`antialiased bg-gbBlack`}>
        <NavHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
