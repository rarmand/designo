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

#### Client-Side components in Server-Side components

Nie mozna podawać `onClick` i innych funkcji z `event` do `props` client component.

Wszystkie te eventowe elementy mają być tylko po stronie przeglądarki.

Kod server-side components nie istnieje w przeglądarce, więc przeglądarka nie moze uzyć tego kodu.

Kliknięcie musi być obsłuzone na client-side.

**Alternatywa** - uzycie Server Action po kliknięciu.
Wtedy trzeba tworzyć dodatkową funkcję `doAction()`, która zostanie wykonana po stronie serwera.

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

---

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
