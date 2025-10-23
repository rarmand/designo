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

#### CSS Module naming

Recommended:

- PascalCase - `BlockLink.module.scss`
- kebab-case - `block-link.module.scss`

Poleca się dopasowanie nazwy modułu do nazwy komponentu, czyli `BlockLink.module.scss`, bo wtedy łatwo się kojarzy i sorting w folderze jest czytelny.

---

#### Fonts

Jeśli font nalezy do Google, mozna przekazac NextJS operacje pobierania i hostowania fontu. Wystarczy pobrać font do layout.

Jeśli chcemy trzymać lokalnie, wtedy trzeba pobrać font do projektu i odpowiednio go pobrać do layoutu.

Optymalniej uzywac NextJS pobierającego Google font, bo z reguly strona internetowa będzie działać tylko gdy działa internet.

Szczegóły ustawień:

> https://nextjs.org/docs/pages/api-reference/components/font

---

#### i18n

> https://dev.to/antoniojuniordev/how-to-implement-internationalization-i18n-in-a-nextjs-project-without-changing-the-url-1g70

---

#### BEM

Block Element Modifier

> https://getbem.com/
> https://kostyrko.github.io/zfrontu/html-konwencje-klas.html
> https://piecioshka.pl/blog/2017/05/11/czym-jest-dla-mnie-bem.html

Methodology of naming HTML elements to use CSS properly.

Block - standalone entity that is meaningful on its own.
Element - a part of a block that has no standalone meaning and is semantically tied to its block.
Modifier - a flag on a block or element. Use them to change appearance or behavior.

!! mozna stworzyć skrypt tworzenia nowego komponentu client-side i server-side z CLI

---

#### JS functions

W komponencie funkcyjnym nie ma odwołań do variables za pomocą `this`.
Obsługę stanu variable wykonuje się poprzez `useState`.

W Reactowych komponentach funkcyjnych należy obsługiwać stan przez `useState`.
Próba użycia `this.var` jest błędna i nie działa poza klasami lub nieprawidłowym kontekstem.

```
const [open, setOpen] = useState(false);
const onMenuButtonClick = () => setOpen(!open);
...
const onMenuButtonClick = () => setOpen(open => !open); // callback
```

- dla prostych kliknięć, pojedynczych akcji – bez różnicy, oba działają.
- przy operacjach konkurencyjnych, sekwencji wywołań, callbackach, asynchronicznych akcjach – zawsze użyj wersji funkcyjnej (`setOpen(open => !open)`), bo masz gwarancję pracy na najnowszym stanie

> https://pl.typeofweb.com/react-hooks-usestate-wiele-stanow-callbacki-i-inne-niuanse

---

#### Creating components with functional JS

> https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events

---

#### Routing in NextJS

Routing depends on the side of the website.
Different libs for client-side and server-side rendering. Another method for page routing, another for app routing.

> https://nextjs.org/docs/app/guides/migrating/app-router-migration

---

#### Background IMG

> https://www.w3schools.com/cssref/css_pr_background-position-y.php

Needs to set `height` and `padding` to show the whole element in the background.
Height must be calculated with a size of the background image.

---

#### Relative image in header

To add an element:

```
<div className={styles.home__phoneImg}>
  <Image src={phoneImg} alt='image hero phone' width={0} height={0} sizes='100vw' />
</div>
```

- brak jawnych rozmiarów: w=0, h=0; generowanie obrazka polega tylko na stylach CSS albo atrybucie `sizes` np. `sizes='100vw'`.
- obraz jest generowany na podstawie rozmiaru okna.
- `sizes='100vw'` - mówi, ze obraz ma zajmować 100% szerokości viewport, a `height: auto`

---

#### Client-Side components in Server-Side components

Nie mozna podawać `onClick` i innych funkcji z `event` do `props` client component.

Wszystkie te eventowe elementy mają być tylko po stronie przeglądarki.

Kod server-side components nie istnieje w przeglądarce, więc przeglądarka nie moze uzyć tego kodu.

Kliknięcie musi być obsłuzone na client-side.

**Alternatywa** - uzycie Server Action po kliknięciu.
Wtedy trzeba tworzyć dodatkową funkcję `doAction()`, która zostanie wykonana po stronie serwera.

---

#### `<button>` a `<a>` i `<Link>`

Zasada, którą warto zapamiętać:

- Link - (`<a href="...">`) → nawigacja (przenosi użytkownika gdzieś indziej).
- Button - (`<button>`) → akcja (zmienia coś na bieżącej stronie, np. otwiera modal, wysyła formularz).

Dlaczego to ma znaczenie
**Linki**:

- można otworzyć w nowej karcie,

- obsługują rozbudowany wygląd HTML, np. `<h2>`, `<p>` i `<symbol>`,
- są indeksowane przez Google,
- można je skopiować, dodać do zakładek,
- działają z nawigacją klawiaturą (Enter) i czytnikami ekranu.

**Przyciski**:

- nie mają atrybutu `href`,

- nie obsługują skomplikowanej HTMLowej budowy, przyjmują tylko `phrasing content`, czyli zwykle tekst, ikony lub span’y,
- nie zmieniają adresu URL (nie tworzą historii przeglądarki),
- są używane do akcji takich jak „submit”, „toggle” czy „open modal”.

> Dla `<Link>` wymagana obsługa `:hover` i `:focus`.

---

Doczytać co to semantyka HTML, weryfikatory HTML (W3C Validator, ESLint), rozpoznawanie przez czytniki jaką rolę pełni dany element.

- accessibility
- semantyka

---

#### aria-labels

Atrybuty `aria-label` służą do nadawania elementom HTML zrozumiałych nazw dla osób korzystających z technologii asystujących, takich jak czytniki ekranu. Pozwalają opisać cel przycisku, linku czy innego interaktywnego elementu, gdy nie wynika to jasno z widocznego tekstu albo gdy element (np. ikona) nie posiada jawnego opisu w DOM. Dzięki temu interfejs jest bardziej dostępny i przyjazny dla osób z niepełnosprawnościami.

Jeśli elementy mają już jasny, tekstowy opis (nie są ikonami ani skrótami), dodatkowy `aria-label` może być zbędny. Jeśli używasz np. samych ikon (bez tekstu), `aria-label` powinien opisywać cel linku.

Nazwy aria-labels powinny opisywać funkcję — np.:

- “Go to Locations page”
- “About our company”
- “Contact us”

W praktyce — jeśli link wyświetla czytelną nazwę, użyj tej samej wartości translacji, a dla ikon czy skrótów stwórz opisową etykietę (np. “Show contact page”).

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

#### Higher Order Functions

Can do at least one of the following:

- Accept other functions as arguments.
- Return a function as a result.

> https://www.freecodecamp.org/news/higher-order-functions-explained/

Example:

`withFunction ( OtherFunction );`

Example no. 1:

```
// Higher Order Function that accepts a callback function

function higherOrderFunction(callback) {
  // Performing some operations
  console.log("Executing the higher order function...");

  // Calling the callback function
  callback();
}

// Callback function to be passed to the higher order function

function callbackFunction() {
  console.log("Executing the callback function...");
}

// Calling the higher order function with the callback function as argument

higherOrderFunction(callbackFunction);
```

Example no. 2:

```
// Higher Order Function that returns a function

function createGreeter(greeting: string) {
  // Returning a new function
  return function(name) {
    console.log(`${greeting}, ${name}!`);
  };
}

// Creating a greeter function with a specific greeting

const greetHello = createGreeter("Hello");

greetHello("John"); // Output: Hello, John!

// Creating another greeter function with a different greeting

const greetGoodbye = createGreeter("Goodbye");

greetGoodbye("Alice"); // Output: Goodbye, Alice!
```
____

#### Function Composition (Chaining HOFs)

Function composition involves chaining multiple higher order functions together to create more complex operations or transformations.

```
const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter(num => num % 2 === 0) // Filter even numbers
  .map(num => num * num); // Square each number
```

- Use `map()` for transforming elements in an array.
- Use `filter()` for selecting elements based on a condition.
- Use `reduce()` for aggregating values into a single result.
- Use `forEach()` for performing side effects without returning a new array.
