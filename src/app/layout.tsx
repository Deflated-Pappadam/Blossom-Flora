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
export const metadata: Metadata = {
  metadataBase: new URL('https://blossomflora.in'),
  title: "Blossom Flora",
  description: 'Flowers are a special way to show someone you love and appreciate them. You can visit Blossom Flora to select flowers of your choice which can be arranged by us in an appealing way. We have a wide variety of options to make sure that you can find something appropriate for the occasion for which you need them.',
  twitter: {
    card: 'summary_large_image',
    title: 'Blossom Flora',
    description: 'Flowers are a special way to show someone you love and appreciate them. You can visit Blossom Flora to select flowers of your choice which can be arranged by us in an appealing way. We have a wide variety of options to make sure that you can find something appropriate for the occasion for which you need them.',
    siteId: '1467726470533754880',
    images: ['/items/I\ (1).jpeg'],
  },
  openGraph: {
    title: 'Blossom Flora',
    description: 'Flowers are a special way to show someone you love and appreciate them. You can visit Blossom Flora to select flowers of your choice which can be arranged by us in an appealing way. We have a wide variety of options to make sure that you can find something appropriate for the occasion for which you need them.',
    url: 'https://blossomflora.in',
    siteName: 'blossomflora.in',
    images: [
      {
        url: '/items/I\ (1).jpeg',
        width: 800,
        height: 600,
      },
      {
        url: '/items/I\ (2).jpeg',
        width: 1800,
        height: 1600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
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
