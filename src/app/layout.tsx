import Navbar from "@/app/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import LoadingScreen from "./loading";
import Footer from "./components/Footer";

// const logo = localFont({
//   src: [
//     {
//       path: '../../public/fonts/Great Bromwich W01 Bold.ttf',
//       weight: '400'
//     },
//     {
//       path: '../../public/fonts/Great Bromwich W01 Bold.ttf',
//       weight: '700'
//     },

//   ],
//   variable: '--font-logo'
// })

// const text = localFont({
//   src:[
//     {
//       path: '../../public/fonts/MSung PRC Medium.ttf',
//       weight: '700'
//     },
//     {
//       path: '../../public/fonts/MSung PRC Medium.ttf',
//       weight: '700'
//     }
//   ],
//   variable: '--font-text'

// })

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blossom Flora",
  description: "Hmm",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`font-poppins`}>
      <body>
        <main className="flex h-full min-h-screen w-full flex-col justify-center overflow-x-hidden bg-[#fdfdfd]">
          <Navbar />
          <main className="flex h-full min-h-screen w-full flex-col justify-center bg-[#fdfdfd]">
            {children}
          </main>
          <Footer />
        </main>
      </body>
    </html>
  );
}
