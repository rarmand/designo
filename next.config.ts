import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    additionalData: `$var: red;`,
    prependData: `
      @use "styles/variables.scss" as *;
    `,
  },
};

export default nextConfig;
