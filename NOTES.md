#### favicon

_Favicon.ico_ is found by NextJS setup by default, on the level of _app_ folder. We can also use _.png_ format.

You can add _icon_ to metadata and keep icons in _public_ folder.

---

#### middleware.ts

> https://nextjs.org/docs/14/app/building-your-application/routing/middleware

Middleware allows you to run code before a request is completed. Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.

Here, used to redirection from '/' to '/home'.

#### Prettier

Narzędzie, które dba o wygląd kodu, zeby był taki sam w całym projekcie.
Upiększa go wg ustawień w _.prettierrc_.

#### SASS

Instalacja SASSa jest ułatwiona, mozna tworzyć zestaw styli w folderze /styles albo jako osobne moduły dla kazdego page'a i component'u.

Mozna tworzyć częściowe pliki .scss, które są potem importowane lub uzywane w publicznym pliku .scss:
\_ _variables.scss_.

_ @import variables_ lub _ @use variables_.

Ten ukryty plik jest dostępny dla kazdego pliku .scss niezaleznie od ich połozenia.

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
