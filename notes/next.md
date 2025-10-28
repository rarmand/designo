#### Routing 

Routing depends on the side of the website.
Different libs for client-side and server-side rendering. Another method for page routing, another for app routing.

> https://nextjs.org/docs/app/guides/migrating/app-router-migration

---

#### (folder) routing

Grouping folder - segment ukryty, który nie wpływa na URL.
Podfolder, np. `/app` jest URLem.

---

#### favicon

`Favicon.ico` is found by NextJS setup by default, on the level of `app` folder. We can also use `.png` format.

You can add `icon` to metadata and keep icons in `public` folder.

---

#### middleware.ts

> https://nextjs.org/docs/14/app/building-your-application/routing/middleware

Middleware allows you to run code before a request is completed. Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.

Here, used to redirection from `/` to `/home`.

---

#### Fonts in NextJS

Jeśli font nalezy do Google, mozna przekazac NextJS operacje pobierania i hostowania fontu. Wystarczy pobrać font do layout.

Jeśli chcemy trzymać lokalnie, wtedy trzeba pobrać font do projektu i odpowiednio go pobrać do layoutu.

Optymalniej uzywac NextJS pobierającego Google font, bo z reguly strona internetowa będzie działać tylko gdy działa internet.

Szczegóły ustawień:

> https://nextjs.org/docs/pages/api-reference/components/font

---

#### i18n w client-side

- `import { useTranslations } from 'next-intl'`
- `const translator = useTranslations('Header')`

#### i18n w server-side

- `import { getTranslations } from 'next-intl/server'`
- `const translator = await getTranslations('HomePage')`

---


