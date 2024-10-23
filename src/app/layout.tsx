import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Minds",
  description: "Organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
      </head>
      <body className={`antialiased bg-gbBlack`}>{children}</body>
    </html>
  );
}
