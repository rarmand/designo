import styles from './Home.module.scss';
import Designs from '@/components/home/designs';
import Principles from '@/components/home/principles';
import Hero from '@/components/home/hero';

/*
 * * * TODO:
 *
 * sprawdzić jak zapisać rozmiary obrazków, czy w HTML czy w CSS, zeby nie byly problemowe
 * dodać aria-labels do wszystkich wymaganych elementów zgodnie z NOTES
 * zainstalować lib do testowania, poczytać o narzędziach do testowania
 * poczytać o podejściu do testowania
 * 
 * 
  1.  Podział Home Page na mniejsze komponenty
	2.	Dobre testy tych komponentów
  3.  Podział Header i Footer na mniejsze komponenty
  4.  Testowanie komponentów.
	5.	Rozszerzenie responsywności na tablet i desktop
 * 
 *
 */

export default function HomePage() {
  return (
    <main className={styles.home}>
      <Hero />
      <Designs />
      <Principles />
    </main>
  );
}
