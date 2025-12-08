import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config: { module: { rules: any[] } }) {
    // Znajdź istniejącą regułę loadera dla plików SVG
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.('.svg')
    );

    if (fileLoaderRule) {
      // Wyklucz SVG z obecnej reguły Next.js
      fileLoaderRule.exclude = /\.svg$/i;
    }

    config.module.rules.push(
      // Obsługa importu SVG jako ścieżka (opcjonalnie przez ?url)
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Obsługa SVG jako komponent Reacta z SVGR
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: ['@svgr/webpack'],
      }
    );

    return config;
  },
};

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

// HOF - Higher Order Function decorator
// expanding the configuration of the project with plugin
export default withNextIntl(nextConfig);
