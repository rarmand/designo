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

#### aria-labels

Atrybuty `aria-label` służą do nadawania elementom HTML zrozumiałych nazw dla osób korzystających z technologii asystujących, takich jak czytniki ekranu. Pozwalają opisać cel przycisku, linku czy innego interaktywnego elementu, gdy nie wynika to jasno z widocznego tekstu albo gdy element (np. ikona) nie posiada jawnego opisu w DOM. Dzięki temu interfejs jest bardziej dostępny i przyjazny dla osób z niepełnosprawnościami.

Jeśli elementy mają już jasny, tekstowy opis (nie są ikonami ani skrótami), dodatkowy `aria-label` może być zbędny. Jeśli używasz np. samych ikon (bez tekstu), `aria-label` powinien opisywać cel linku.

Nazwy aria-labels powinny opisywać funkcję — np.:

- “Go to Locations page”
- “About our company”
- “Contact us”

W praktyce — jeśli link wyświetla czytelną nazwę, użyj tej samej wartości translacji, a dla ikon czy skrótów stwórz opisową etykietę (np. “Show contact page”).

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
