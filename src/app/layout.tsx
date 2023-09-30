import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description: 'Upload your images and save them for future usage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <Navbar />
        <div className='flex'>
          <div className='w-1/5'>
            <Sidebar />
          </div>
          <div className='w-full'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
