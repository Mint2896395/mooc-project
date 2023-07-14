"use client";
import "~/styles/globals.css";
import { Noto_Sans_Thai } from "next/font/google";
import Script from "next/script";

const roboto = Noto_Sans_Thai({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

import Footer from "~/layouts/Footer";
import Navbar from "~/layouts/Navbar";
import GotoTop from "~/components/ui/GotoTop";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <GotoTop />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
