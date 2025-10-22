import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    additionalData: `$var: red;`,
    prependData: `
      @use "styles/variables.scss" as *;
    `,
  },
};

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

// HOF - Higher Order Function decorator
// expanding the configuration of the project with plugin
export default withNextIntl(nextConfig);
