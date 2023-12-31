import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from "next/font/local"


const logo = localFont({
  src: [
    {
      path: '../../public/fonts/Great Bromwich W01 Bold.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Great Bromwich W01 Bold.ttf',
      weight: '700'
    },
    
  ],
  variable: '--font-logo'
})

const text = localFont({
  src:[
    {
      path: '../../public/fonts/MSung PRC Medium.ttf',
      weight: '700'
    },
    {
      path: '../../public/fonts/MSung PRC Medium.ttf',
      weight: '700'
    }
  ],
  variable: '--font-text'

})


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blossom Flora',
  description: 'Hmm',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${logo.variable} ${text.variable} font-sans`}>
      <body className={inter.className}>
        
      <div className="w-full font-light text-lg border-b-2 justify-start p-2 hidden md:flex">
        <div className="w-[80%] mx-auto">
          oi guys we dont have all kerala delivery and order 2 days before.
        </div>
      </div>

    <Navbar />
          {children}
        </body>
    </html>
  )
}
