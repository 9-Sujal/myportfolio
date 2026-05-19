import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sujal.me",
  description: "..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth!">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030707] text-gray-100 relative  pt-28 sm:pt-36`}
      >
        <div className="hidden sm:block bg-[#2f0344] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
        sm:w-275"></div>
        <div className="hidden sm:block bg-[#056243] absolute -z-10 top-[-6rem] right-[11rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem]
        sm:w-275 md: -left-132 lg:-left-112 xl:left-[-15em] 2xl:-left-20"></div>
       <ActiveSectionContextProvider>
       <Header />
       {children}
       </ActiveSectionContextProvider>
       

       
        
      </body>
    </html>
  );
}
