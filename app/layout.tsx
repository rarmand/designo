import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import '@/styles/globals.scss';
import text from '@/i18n/en.json';
import Header from '@/components/Header';

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-jost',
});

// TODO: config of i18n lib
export const metadata: Metadata = {
  title: text['website.title'],
  description: text['website.description'],
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
    <html>
      <body className={jost.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
