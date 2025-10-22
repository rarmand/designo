// configuration object to provide translations and other options based on user's locale

import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  // static for now, changed when new languages added
  const locale = 'en';

  return {
    locale,
    messages: (await import(`./${locale}.json`)).default,
  };
});
