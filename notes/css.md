#### CSS Module naming

Recommended:

- PascalCase - `BlockLink.module.scss`
- kebab-case - `block-link.module.scss`

Poleca się dopasowanie nazwy modułu do nazwy komponentu, czyli `BlockLink.module.scss`, bo wtedy łatwo się kojarzy i sorting w folderze jest czytelny.

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

#### Background IMG

> https://www.w3schools.com/cssref/css_pr_background-position-y.php

Needs to set `height` and `padding` to show the whole element in the background.
Height must be calculated with a size of the background image.

---

#### WRONG Relative image in header

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

#### SVGR

```
import Star from './star.svg'

const Example = () => (
  <div className='link'>
    <Star/>
  </div>
)
```

Stylowanie SVG musi być nadane do rodzica obiektu SVG.

Przykładowe stylowanie (gdy SVG posiada `fill`):

```
.link {
  & svg path {
    fill: $primary-color-400;
  }

  &:hover svg path {
    fill: $secondary-color-400;
    transition-duration: 0.3s;
  }
}

```