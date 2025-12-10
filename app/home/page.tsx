import styles from './Home.module.scss';
import Designs from '@/components/home/Designs';
import Principles from '@/components/home/Principles';
import Hero from '@/components/home/Hero';

/*
 * * * TODO:
 *
 * sprawdzić jak zapisać rozmiary obrazków, czy w HTML czy w CSS, zeby nie byly problemowe
 * dodać aria-labels do wszystkich wymaganych elementów zgodnie z NOTES
 * zainstalować lib do testowania, poczytać o narzędziach do testowania
 * poczytać o podejściu do testowania
 * ustawić wszystkie size PX na REM 
 * 
 	1.	Rozszerzenie responsywności na tablet i desktop
  2.  Testowanie komponentów.
  3.  Podział Header i Footer na mniejsze komponenty
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
