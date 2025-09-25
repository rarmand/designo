import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Designo Agency Website Challenge',
  description:
    'Designo agency focused on a delivery of the best experience to you.',
};

/*
  The RootLayout component in the under code is responsible for 
  defining the overall layout of the app, ensuring that every page 
  includes a consistent navigation bar and typography. 
  - applies global styles, metadata, and shared UI components 
  - children prop represents the main content of each page, 
    dynamically inserted based on the current route.
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
