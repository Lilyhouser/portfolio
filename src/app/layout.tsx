import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/common/Sidebar";
import RippleBox from "../animation/RippleBox";
import StoreProvider from "../context";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lily House | Portfolio",
  icons: ["/img/image.png"],
  description:
    "Portfolio of a Frontend developer with creativity and great passion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
          <Sidebar />
          <RippleBox />
          <Toaster />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
