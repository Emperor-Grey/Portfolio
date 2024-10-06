import type { Metadata } from 'next';
import { twMerge } from 'tailwind-merge';

import { Calistoga, Inter } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Created with the help of Frontend Tribe',
};

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          'bg-gray-900 text-white antialiased font-sans no-scrollbar overflow-y-auto'
        )}
      >
        {children}
      </body>
    </html>
  );
}