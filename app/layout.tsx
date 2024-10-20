import type { Metadata } from "next";
import { Source_Sans_3, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans-3",
  weight: ["400", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Food Blogging Website",
  description: "Discover the Best Food and Drinks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${sourceSans3.variable} 
          ${poppins.variable} 
          ${openSans.variable} 
          antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
