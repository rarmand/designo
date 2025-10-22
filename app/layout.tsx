import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import '@/styles/globals.scss';
import Header from '@/components/Header';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-jost',
});

interface TranslationProps {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: TranslationProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

/*
  The RootLayout component in the under code is responsible for 
  defining the overall layout of the app, ensuring that every page 
  includes a consistent navigation bar and typography. 
  - applies global styles, metadata, and shared UI components 
  - children prop represents the main content of each page, 
    dynamically inserted based on the current route.
*/
/*   
  Wraping components with NextIntlClientProvider makes 
  request i18n configuration available to Client Components.
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={jost.variable}>
        <NextIntlClientProvider>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
