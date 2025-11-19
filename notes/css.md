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

#### Inline styles for Next components Image and Link

Inline styles mają wpływ na stylistykę komponentów `Image` i `Link`, w przeciwieństwie do CSS w `className`. Te nie zawsze mają wpływ na render elementu. W przypadku `<Image>` lepiej dodać styl poprzez inline, np.: `styles={{color: red}}`.

---

#### Relative image in header

To add an element (needed specified size of the image):

```
<div className={styles.home__phoneImg}>
  <Image
    src={'/home/image-hero-phone.png'}
    alt={translator('image')}
    width={624}
    height={913}
    style={{
      objectFit: 'cover',
    }}
  />
</div>
```

CSS only for parent div:

```
  &__phoneImg {
    position: relative;
    bottom: 11rem;
  }
```

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

---

#### Background gradient

> https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/gradient/linear-gradient

Used divided background:

```
background: linear-gradient(
    to top,
    $primary-color-900 0%,
    $primary-color-900 50%,
    $primary-color-100 50%,
    $primary-color-100 100%
  );
  width: 100%;
```

Counts from the bottom to top. Lower black color to 50% of the height, next white color from 50% to 100%.
