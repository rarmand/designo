#### favicon

`Favicon.ico` is found by NextJS setup by default, on the level of `app` folder. We can also use `.png` format.

You can add `icon` to metadata and keep icons in `public` folder.

---

#### middleware.ts

> https://nextjs.org/docs/14/app/building-your-application/routing/middleware

Middleware allows you to run code before a request is completed. Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.

Here, used to redirection from `/` to `/home`.

#### Prettier

Narzędzie, które dba o wygląd kodu, zeby był taki sam w całym projekcie.
Upiększa go wg ustawień w `.prettierrc`.

#### SASS

Instalacja SASSa jest ułatwiona, mozna tworzyć zestaw styli w folderze /styles albo jako osobne moduły dla kazdego page'a i component'u.

Mozna tworzyć częściowe pliki .scss, które są potem importowane lub uzywane w publicznym pliku `.scss`:
`_variables.scss`

`@import variables` lub `@use variables`.

Ten ukryty plik jest dostępny dla kazdego pliku `.scss` niezaleznie od ich połozenia.

#### Fonts

Jeśli font nalezy do Google, mozna przekazac NextJS operacje pobierania i hostowania fontu. Wystarczy pobrać font do layout.

Jeśli chcemy trzymać lokalnie, wtedy trzeba pobrać font do projektu i odpowiednio go pobrać do layoutu.

Optymalniej uzywac NextJS pobierającego Google font, bo z reguly strona internetowa będzie działać tylko gdy działa internet.

#### i18n

> https://dev.to/antoniojuniordev/how-to-implement-internationalization-i18n-in-a-nextjs-project-without-changing-the-url-1g70

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

#### Routing in NextJS

Routing depends on the side of the website.
Different libs for client-side and server-side rendering. Another method for page routing, another for app routing.

> https://nextjs.org/docs/app/guides/migrating/app-router-migration

#### Background IMG

> https://www.w3schools.com/cssref/css_pr_background-position-y.php

Needs to set `height` and `padding` to show the whole element in the background.
Height must be calculated with a size of the background image.

#### Relative image in header

To add an element:

'''
<div className={styles.home__phoneImg}>
  <Image src={phoneImg} alt='image hero phone' width={0} height={0} sizes='100vw' />
</div>
'''

- brak jawnych rozmiarów: w=0, h=0; generowanie obrazka polega tylko na stylach CSS albo atrybucie `sizes` np. `sizes='100vw'`.
- obraz jest generowany na podstawie rozmiaru okna.
- `sizes='100vw'` - mówi, ze obraz ma zajmować 100% szerokości viewport, a `height: auto`