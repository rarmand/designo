#### Prettier

Narzędzie, które dba o wygląd kodu, zeby był taki sam w całym projekcie.
Upiększa go wg ustawień w `.prettierrc`.

---

#### SASS

Instalacja SASSa jest ułatwiona, mozna tworzyć zestaw styli w folderze `/styles` albo jako osobne moduły dla kazdego page'a i component'u.

Mozna tworzyć częściowe pliki .`scss`, które są potem importowane lub uzywane w publicznym pliku `.scss`:
`_variables.scss`

- `@import variables` - depracated, nie stosować
- `@use variables` - zamiast `import`

Plik ukryty nie jest dostępny dla `CSS modules`, jedynie dla pliku `globals.scss`, które są potem importowane np. do `layout'u`.

!!! W tym przypadku mozna stosować plik `variables`, `mixins` jako publiczny. Wtedy **chyba** trzeba je znowu importować do `modules`.

Mozna tez wyeksportować dostęp do nich dla całej aplikacji w `next.config.ts` => `sassOptions`. Nie trzeba importować zmiennych w `modules`.

Nalezy pamiętać, ze `@import` jest depracated!

---

#### i18n

> https://dev.to/antoniojuniordev/how-to-implement-internationalization-i18n-in-a-nextjs-project-without-changing-the-url-1g70

---

#### i18n client-side and server-side

- instalacja biblioteki `next-intl`
- dodanie konfiguracji w `next.config.ts`
- stworzony folder `i18n` z tłumaczeniami i locales
- dodany do `i18n` plik `request.ts`, w którym przygotowana jest funkcja zwracająca odpowiedni plik z odpowiednim `locale`
- dodany plik z tłumaczeniami dla danego `locale` - plik JSON; możliwe zagnieżdżenie JSONów oraz polecane pojedyncze wyrażenia dla poprawy czytelności pliku
- translacje dla server-side components gotowe do użycia
- do `app/layout.tsx` dodany `import NextIntlClientProvider`, który ma zapewnić dostęp do tłumaczeń dla client-side components
- dostęp do translacji różni się, wykorzystywane są różne metody

1. **Dostęp do translacji w client-side:**

- `import { useTranslations } from 'next-intl'`
- `const translator = useTranslations('Header')`

2. **Dostęp do translacji w server-side:**

- `import { getTranslations } from 'next-intl/server'`
- `const translator = await getTranslations('HomePage')`

---

#### SVGR do reakcji obrazków na działania usera

Narzędzie, które przekształca pliki SVG w gotowe do użycia komponenty React. SVGR bierze surowy plik SVG i automatycznie zamienia go na funkcjonalny komponent Reacta, który można łatwo stylizować, modyfikować rozmiary przez propsy (np. `width`, `height`) i integrować z aplikacją Reactową.

> https://react-svgr.com/docs/next/

Aby biblioteka działała z najnowszymi wersjami NextJS, trzeba ustawić:

- `next.config.ts` i w nim: `webpack(config)`
- `/types/image.d.ts` stworzyć i dodać odpowiednie instrukcje do importu plików SVG jako obiektów
- przenieść pliki SVG, które mają być obiektami, do innego folderu niż `/public`
- zmienić w `package.json` ustawienie skryptu `dev`, gdyż `turbopack` nie obsługuje SVGR.

```
"scripts": {
  "dev": "next dev --turbopack", ---> "next dev"
}
```
