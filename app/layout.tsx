'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Providers } from './providers'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FirstCraft',
  description: 'FirstCraft Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Disable React DevTools in production
  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
      const noDevTools = function() {
        let devtools = { isOpen: false };
        Object.defineProperty(window, '__REACT_DEVTOOLS_GLOBAL_HOOK__', {
          get() { return { inject: function(){} } }
        });
        return devtools;
      };
      noDevTools();
    }
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar isLoggedIn={false} onLogout={() => {}} />
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
} 